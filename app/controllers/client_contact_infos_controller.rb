class ClientContactInfosController < ApplicationController
  # GET /client_contact_infos
  # GET /client_contact_infos.xml
  def index
    @client_contact_infos = ClientContactInfo.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @client_contact_infos }
    end
  end

  # GET /client_contact_infos/1
  # GET /client_contact_infos/1.xml
  def show
    @client_contact_info = ClientContactInfo.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @client_contact_info }
    end
  end

  # GET /client_contact_infos/new
  # GET /client_contact_infos/new.xml
  def new
    @client_contact_info = ClientContactInfo.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @client_contact_info }
    end
  end

  # GET /client_contact_infos/1/edit
  def edit
    @client_contact_info = ClientContactInfo.find(params[:id])
  end

  # POST /client_contact_infos
  # POST /client_contact_infos.xml
  def create
    @client_contact_info = ClientContactInfo.new(params[:client_contact_info])

    respond_to do |format|
      if @client_contact_info.save
        format.html { redirect_to(@client_contact_info, :notice => 'ClientContactInfo was successfully created.') }
        format.xml  { render :xml => @client_contact_info, :status => :created, :location => @client_contact_info }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @client_contact_info.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /client_contact_infos/1
  # PUT /client_contact_infos/1.xml
  def update
    @client_contact_info = ClientContactInfo.find(params[:id])

    respond_to do |format|
      if @client_contact_info.update_attributes(params[:client_contact_info])
        format.html { redirect_to(@client_contact_info, :notice => 'ClientContactInfo was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @client_contact_info.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /client_contact_infos/1
  # DELETE /client_contact_infos/1.xml
  def destroy
    @client_contact_info = ClientContactInfo.find(params[:id])
    @client_contact_info.destroy

    respond_to do |format|
      format.html { redirect_to(client_contact_infos_url) }
      format.xml  { head :ok }
    end
  end
end
