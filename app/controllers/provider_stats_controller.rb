class ProviderStatsController < ApplicationController
  
  before_filter :require_client
  
  # GET /provider_stats
  # GET /provider_stats.xml
  def index
    @provider_stats = ProviderStat.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @provider_stats }
    end
  end

  # GET /provider_stats/1
  # GET /provider_stats/1.xml
  def show
    @provider_stat = ProviderStat.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @provider_stat }
    end
  end

  # GET /provider_stats/new
  # GET /provider_stats/new.xml
  def new
    @provider_stat = ProviderStat.new
    @provider = Provider.find(params[:id])
    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @provider_stat }
    end
  end

  # GET /provider_stats/1/edit
  def edit
    @provider_stat = ProviderStat.find(params[:id])
    @provider = Provider.find(params[:id])
  end

  # POST /provider_stats
  # POST /provider_stats.xml
  def create
    @provider_stat = ProviderStat.new(params[:provider_stat])

    respond_to do |format|
      if @provider_stat.save
        flash[:notice] = 'ProviderStat was successfully created.'
        format.html { redirect_to providers_path }
        format.xml  { render :xml => @provider_stat, :status => :created, :location => @provider_stat }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @provider_stat.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /provider_stats/1
  # PUT /provider_stats/1.xml
  def update
    @provider_stat = ProviderStat.find(params[:id])

    respond_to do |format|
      if @provider_stat.update_attributes(params[:provider_stat])
        flash[:notice] = 'ProviderStat was successfully updated.'
        format.html { redirect_to providers_path }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @provider_stat.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /provider_stats/1
  # DELETE /provider_stats/1.xml
  def destroy
    @provider_stat = ProviderStat.find(params[:id])
    @provider_stat.destroy

    respond_to do |format|
      format.html { redirect_to(provider_stats_url) }
      format.xml  { head :ok }
    end
  end
  
  def sfro_stat_panel
    render :layout => false
  end
  
  def sbrd_stat_panel
    render :layout => false
  end
  
  def sdes_stat_panel
    render :layout => false
  end
end
