# == Schema Information
#
# Table name: users
#
#  id            :integer          not null, primary key
#  password_hash :string(255)      not null
#  name          :string(255)
#  email         :string(255)      not null
#  session_token :string(255)      not null
#  description   :text
#  created_at    :datetime
#  updated_at    :datetime
#

require 'bcrypt'

class User < ActiveRecord::Base
  # TODO: Add site_permissions. 0 is new user, less than 0 is banned, 500 is mod, 1000 is admin.

  include BCrypt

  attr_accessible :email, :name, :description, :password # Password_hash assigned automatically from password.
  attr_reader :password, :site_permissions

  before_validation :create_session_token # Ensures not nil

  validates :name,
    :uniqueness => true,
    :length => {:minimum => 1, :maximum => 24},
    :allow_blank => true

  validates :email,
    :uniqueness => true,
    :length => {:minimum => 7},
    :presence => true

  validates :email,
    :format => { :with => /\A([^@\s]+)@((?:[-a-z0-9]+\.)+[a-z]{2,})\Z/i},
    :on => :create

  validates :password,
    :presence => true,
    :if => :password_being_created_or_updated?

  validates :password,
    :length => { :minimum => 6 },
    :if => :password_being_created_or_updated?

  validates :password_hash,
    :presence => true

  validates :session_token,
    :presence => true

  after_validation :clear_entered_password

  has_many :boards, :dependent => :destroy
  has_many :pins, :dependent => :destroy

  def password=(pass)
    @password = pass
    self.password_hash = BCrypt::Password.create(pass)
  end

  def create_session_token
    self.session_token = SecureRandom.urlsafe_base64(16)
  end

  def reset_session_token!
    create_session_token
    self.save
  end

  def clear_entered_password
    @password = nil
  end

  def password_correct?(pass)
    BCrypt::Password.new(self.password_hash).is_password?(pass)
  end

  def password_being_created_or_updated?
    !!@password
  end

  def is_admin?
    #self.site_permissions >= 1000
  end

  def ban_status
    #self.site_permissions
  end

  def self.find_by_credentials(creds)
    user = User.find_by_email(creds[:email])
    return nil unless user
    return user if user.password_correct?(creds[:password])
  end
end
