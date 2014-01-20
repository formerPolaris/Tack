class UsersController < ApplicationController
  #These methods are all in ./helpers/application_helper.rb

  before_filter :ban_filter
  before_filter :require_logout, :only => :create
  before_filter :require_ownership_or_admin, :only => [:update, :destroy]
  before_filter :require_friendship_with, :only => :show
  before_filter :require_authentication, :only => :index

  def create
    @user = User.new(params[:user])
    if @user.save
      log_in(@user)
      render :json => @user
    else
      render :json => @user.errors.full_messages
    end
  end

  def update
    @user = current_user.edit_attributes(params[:user])
    if @user.save
      render :json => {:errors => "You don't have permission to do that :("}
    else
      render :json => @user.errors.full_messages
    end
  end

  def destroy
    @user = User.find(params[:id])
    if @user.destroy
      render :json => {"message-alerts" => "Account deleted!"}
    else
      render :json => {:errors => "Couldn't delete user!"}
    end
  end

  def show
    @user = User.find(params[:id])
    if(@user)
      render :json => @user.boards
    else
      render :json => {:errors => "Couldn't find that user!"}
    end
  end

  def index
    render :json => User.all
  end
end