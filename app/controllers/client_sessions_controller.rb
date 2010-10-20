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
    path = params[:route]
    
    if params[:access_key] == APP['apikey']
      
      @client_session = ClientSession.new()
      @client_session.username = 'hcidemouser'
      @client_session.password = 'coffee'

      if @client_session.save
        case path
          when "help"
            redirect_to help_path
          when "dashboard"
            redirect_to dashboard_path
          when "forum"
            redirect_to client_feedback_path
          when "messaging"
            redirect_to messages_path
          when "report"
            redirect_to reports_path
          when "university"
            redirect_to "http://www.hcinsight.com/insight-university"
          when "quick_launch"
            redirect_to quick_launch_path
          else
            redirect_to quick_launch_path
          end
      else
        redirect_to login_path
      end
    else
      redirect_to login_path
    end
  end
  
  
end
