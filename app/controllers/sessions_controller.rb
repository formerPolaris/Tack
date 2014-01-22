class SessionsController < ApplicationController
  before_filter :ban_filter
  before_filter :require_logout, :only => :create
  before_filter :require_authentication, :only => :destroy

  def create
    @user = User.find_by_credentials(params[:user])
    if(@user)
      log_in(@user)
      render :json => current_user.to_json(:only => [:id, :email, :name]).html_safe
    else
      render :json => {:errors => "Invalid username or password :/"}, :status => :unauthorized
    end
  end

  def destroy
    log_out
    render :json => {"message-alerts" => "See you later!"}
  end

  def show
    if logged_in?
      render :json => current_user.to_json(:only => [:id, :email, :name]).html_safe
    else
      render :json => {:errors => "User not logged in"}, :status => 401
    end
  end
end