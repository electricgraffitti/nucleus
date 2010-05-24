class ProviderGroupsController < ApplicationController
  
  before_filter :require_client
  
  # GET /provider_groups
  # GET /provider_groups.xml
  def index
    @provider_groups = ProviderGroup.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @provider_groups }
    end
  end

  # GET /provider_groups/1
  # GET /provider_groups/1.xml
  def show
    @provider_group = ProviderGroup.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @provider_group }
    end
  end

  # GET /provider_groups/new
  # GET /provider_groups/new.xml
  def new
    @provider_group = ProviderGroup.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @provider_group }
    end
  end

  # GET /provider_groups/1/edit
  def edit
    @provider_group = ProviderGroup.find(params[:id])
  end

  # POST /provider_groups
  # POST /provider_groups.xml
  def create
    @provider_group = ProviderGroup.new(params[:provider_group])

    respond_to do |format|
      if @provider_group.save
        flash[:notice] = 'ProviderGroup was successfully created.'
        format.html { redirect_to(@provider_group) }
        format.xml  { render :xml => @provider_group, :status => :created, :location => @provider_group }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @provider_group.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /provider_groups/1
  # PUT /provider_groups/1.xml
  def update
    @provider_group = ProviderGroup.find(params[:id])

    respond_to do |format|
      if @provider_group.update_attributes(params[:provider_group])
        flash[:notice] = 'ProviderGroup was successfully updated.'
        format.html { redirect_to(@provider_group) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @provider_group.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /provider_groups/1
  # DELETE /provider_groups/1.xml
  def destroy
    @provider_group = ProviderGroup.find(params[:id])
    @provider_group.destroy

    respond_to do |format|
      format.html { redirect_to(provider_groups_url) }
      format.xml  { head :ok }
    end
  end
end
