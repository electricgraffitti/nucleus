class DashboardController < ApplicationController

  before_filter :require_client
  
  def index
    @top_providers = Provider.top_billable
    render :layout => "application"
  end
  
  def quick_launch
    @top_providers = Provider.top_billable
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
