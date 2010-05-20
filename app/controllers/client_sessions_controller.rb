class ClientSessionsController < ApplicationController
  before_filter :require_no_client, :only => [:new, :create]
  before_filter :require_client, :only => :destroy
  
  def new
    if current_client_session
      redirect_to quick_launch_path
    else
      @client_session = ClientSession.new
    end
  end
  
  def create
    @client_session = ClientSession.new(params[:client_session])
    if @client_session.save
      flash[:notice] = "Login successful!"
      redirect_to quick_launch_path
    else
      render :action => :new
    end
  end
  
  def destroy
    current_client_session.destroy
    flash[:notice] = "Logout successful!"
    redirect_to new_client_session_path
  end
  
  def login2
    if current_client_session
      redirect_to quick_launch_path
    else
      @client_session = ClientSession.new
    end
    
    respond_to do |format|
      format.html { render :layout => "login_black"}
    end
    
  end
  
  
end
