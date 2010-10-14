class ClientSessionsController < ApplicationController
  
  before_filter :require_client, :only => :destroy
  
  def new
    if current_client_session
      redirect_to quick_launch_path
    else
      redirect_to login_path
    end
  end
  
  def create
    @client_session = ClientSession.new(params[:client_session])
    if @client_session.save
      flash[:notice] = "Login successful!"
      redirect_to quick_launch_path
    else
      redirect_to login_path
    end
  end
  
  def destroy
    current_client_session.destroy
    flash[:notice] = "Logout successful!"
    redirect_to login_path
  end
  
  def login2
    if current_client_session
      redirect_to quick_launch_path
    else
      @client_session = ClientSession.new
      respond_to do |format|
        format.html { render :layout => "login_black"}
      end
    end
  end
  
  def api_session
    
    # raise params.to_yaml
    # 
    # if params[:apikey] == APP['password']
    #   @client_session = ClientSession.new(params[:client_session])
    #   if @client_session.save
    #     flash[:notice] = "Login successful!"
    #     redirect_to quick_launch_path
    #   else
    #     redirect_to login_path
    #   end
    # else
    #   redirect_to login_path
    # end
  end
  
  
end
