class DashboardController < ApplicationController
  def index
    
    flash[:notice] = "This is the dashboard"
    @user = "Darin Johnson"
    
  end

end
