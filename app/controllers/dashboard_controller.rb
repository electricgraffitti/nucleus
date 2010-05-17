class DashboardController < ApplicationController
  
  def index
    render :layout => "application"
  end
  
  def quick_launch
    render :layout => "application"
  end
  
  def panel_test
    
  end
  
  def login
    if current_client_session
      redirect_to quick_launch_path
    else
      redirect_to new_client_session_path
    end
  end
  
  
end
