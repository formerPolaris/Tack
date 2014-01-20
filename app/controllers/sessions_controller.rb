class SessionsController < ApplicationController
  before_filter :ban_filter
  before_filter :require_logout, :only => :create
  before_filter :require_authentication, :only => :destroy

  def create
    @user = User.find_by_credentials(params[:user])
    if(@user)
      log_in(@user)
      render :json => @user
    else
      render :json => {:errors => "Could not log in with those credentials."}
    end
  end

  def destroy
    log_out
    render :json => {"message-alerts" => "You have logged out successfully."}
  end

  def check
    if logged_in?
      render :json => session[:session_token], :status => 200
    else
      render :json => {:errors => "User not logged in"}, :status => 401
    end
  end
end