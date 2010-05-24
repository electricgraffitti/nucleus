class ProviderSpecialitiesController < ApplicationController
  
  before_filter :require_client
  
  # GET /provider_specialities
  # GET /provider_specialities.xml
  def index
    @provider_specialities = ProviderSpeciality.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @provider_specialities }
    end
  end

  # GET /provider_specialities/1
  # GET /provider_specialities/1.xml
  def show
    @provider_speciality = ProviderSpeciality.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @provider_speciality }
    end
  end

  # GET /provider_specialities/new
  # GET /provider_specialities/new.xml
  def new
    @provider_speciality = ProviderSpeciality.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @provider_speciality }
    end
  end

  # GET /provider_specialities/1/edit
  def edit
    @provider_speciality = ProviderSpeciality.find(params[:id])
  end

  # POST /provider_specialities
  # POST /provider_specialities.xml
  def create
    @provider_speciality = ProviderSpeciality.new(params[:provider_speciality])

    respond_to do |format|
      if @provider_speciality.save
        flash[:notice] = 'ProviderSpeciality was successfully created.'
        format.html { redirect_to(@provider_speciality) }
        format.xml  { render :xml => @provider_speciality, :status => :created, :location => @provider_speciality }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @provider_speciality.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /provider_specialities/1
  # PUT /provider_specialities/1.xml
  def update
    @provider_speciality = ProviderSpeciality.find(params[:id])

    respond_to do |format|
      if @provider_speciality.update_attributes(params[:provider_speciality])
        flash[:notice] = 'ProviderSpeciality was successfully updated.'
        format.html { redirect_to(@provider_speciality) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @provider_speciality.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /provider_specialities/1
  # DELETE /provider_specialities/1.xml
  def destroy
    @provider_speciality = ProviderSpeciality.find(params[:id])
    @provider_speciality.destroy

    respond_to do |format|
      format.html { redirect_to(provider_specialities_url) }
      format.xml  { head :ok }
    end
  end
end
