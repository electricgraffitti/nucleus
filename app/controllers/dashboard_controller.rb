class DashboardController < ApplicationController
  def index
    
    flash[:notice] = "This is the dashboard"
    
  end

end
