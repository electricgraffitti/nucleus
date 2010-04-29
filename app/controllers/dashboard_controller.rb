class DashboardController < ApplicationController
  
  def index
    
  end
  
  def quick_launch
    
  end
  
  def login
    if current_client_session
      redirect_to quick_launch_path
    else
      redirect_to new_client_session_path
    end
  end
  
  
end
