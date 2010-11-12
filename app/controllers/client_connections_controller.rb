class ClientConnectionsController < ApplicationController
  # GET /client_connections
  # GET /client_connections.xml
  def index
    @client_connections = ClientConnection.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @client_connections }
    end
  end

  # GET /client_connections/1
  # GET /client_connections/1.xml
  def show
    @client_connection = ClientConnection.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @client_connection }
    end
  end

  # GET /client_connections/new
  # GET /client_connections/new.xml
  def new
    @client_connection = ClientConnection.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @client_connection }
    end
  end

  # GET /client_connections/1/edit
  def edit
    @client_connection = ClientConnection.find(params[:id])
  end

  # POST /client_connections
  # POST /client_connections.xml
  def create
    @client_connection = ClientConnection.new(params[:client_connection])

    respond_to do |format|
      if @client_connection.save
        format.html { redirect_to(@client_connection, :notice => 'ClientConnection was successfully created.') }
        format.xml  { render :xml => @client_connection, :status => :created, :location => @client_connection }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @client_connection.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /client_connections/1
  # PUT /client_connections/1.xml
  def update
    @client_connection = ClientConnection.find(params[:id])

    respond_to do |format|
      if @client_connection.update_attributes(params[:client_connection])
        format.html { redirect_to(@client_connection, :notice => 'ClientConnection was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @client_connection.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /client_connections/1
  # DELETE /client_connections/1.xml
  def destroy
    @client_connection = ClientConnection.find(params[:id])
    @client_connection.destroy

    respond_to do |format|
      format.html { redirect_to(client_connections_url) }
      format.xml  { head :ok }
    end
  end
end
