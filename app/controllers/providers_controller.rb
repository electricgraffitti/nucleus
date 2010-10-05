class ProvidersController < ApplicationController
  
  before_filter :require_client
  
  # GET /providers
  # GET /providers.xml
  def index
    @providers = Provider.all
    @response = { :item => @providers }
    
    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @providers }
      format.js { render :json => @response.to_json(), :callback => params[:callback]}
    end
  end

  # GET /providers/1
  # GET /providers/1.xml
  def show
    @provider = Provider.find(params[:id])
    map_type = GMapType::G_HYBRID_MAP
    coords = @provider.locations.first.fetch_coordinates()
    @map = GMap.new("map")
    @map.control_init(:large_map => true, :map_type => true, :street_view_control => true)
    @map.center_zoom_init(coords,14)
    @map.overlay_init(GMarker.new(coords,:title => "#{@provider.full_name}", :info_window => "Provider Location"))
    @map.set_map_type_init(map_type)

    respond_to do |format|
      format.html { render :layout => 'modal'}
      format.xml  { render :xml => @provider }
      format.json { }
    end
  end

  # GET /providers/new
  # GET /providers/new.xml
  def new
    @provider = Provider.new
    @provider.locations.build

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @provider }
    end
  end

  # GET /providers/1/edit
  def edit
    @provider = Provider.find(params[:id])
  end

  # POST /providers
  # POST /providers.xml
  def create
    @provider = Provider.new(params[:provider])

    respond_to do |format|
      if @provider.save
        flash[:notice] = 'Provider was successfully created.'
        format.html { redirect_to providers_path }
        format.xml  { render :xml => @provider, :status => :created, :location => @provider }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @provider.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /providers/1
  # PUT /providers/1.xml
  def update
    @provider = Provider.find(params[:id])

    respond_to do |format|
      if @provider.update_attributes(params[:provider])
        flash[:notice] = 'Provider was successfully updated.'
        format.html { redirect_to(@provider) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @provider.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /providers/1
  # DELETE /providers/1.xml
  def destroy
    @provider = Provider.find(params[:id])
    @provider.destroy

    respond_to do |format|
      format.html { redirect_to(providers_url) }
      format.xml  { head :ok }
    end
  end
  
  def street_view
    respond_to do |format|
      format.html { render :layout => false }
    end
  end
  
  def provider_search
    @providers = Provider.all
    if params[:id].nil?
      @provider = Provider.first
    else
      @provider = Provider.find(params[:id])
    end
    
  end
  
  def provider_action
    @action_types = SearchTopic.new
    
    if params[:id].nil?
      @provider = Provider.first
    else
      @provider = Provider.find(params[:id])
    end
    
    if params[:condition_id].nil?
      @condition = @provider.conditions.first
    else
      # grab condition and chart_type from the Ajax get
      @condition = Condition.find_by_id(params[:condition_id])
      @chart_type = params[:chart_code]
    end
    
    # grab all provider conditions for data grid
    @provider_conditions = @provider.conditions.billed_listings
    
    # @billings = @condition.monthly_billings(:order => 'month DESC')
    
    @graph_data = @provider.set_graph(@condition, @chart_type)
    
    respond_to do |format|
      format.html
      format.js { render :json => @graph_data.to_json(), :callback => params[:callback], :layout => false}
      format.json { render :json => @graph_data.to_json(), :callback => params[:callback], :layout => false}
    end
    
  end
  
end
