class ClientSessionsController < ApplicationController
  before_filter :require_no_client, :only => [:new, :create]
  before_filter :require_client, :only => :destroy
  
  def new
    @client_session = ClientSession.new
  end
  
  def create
    @client_session = ClientSession.new(params[:client_session])
    if @client_session.save
      flash[:notice] = "Login successful!"
      redirect_back_or_default account_url
    else
      render :action => :new
    end
  end
  
  def destroy
    current_client_session.destroy
    flash[:notice] = "Logout successful!"
    redirect_back_or_default new_client_session_url
  end
end
