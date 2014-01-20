class CreateUsers < ActiveRecord::Migration
  def change
    create_table :users do |t|
      t.string :password_hash, :null => false
      t.string :name
      t.string :email, :null => false
      t.string :session_token, :null => false
      t.text :description

      t.timestamps
    end
  end
end
