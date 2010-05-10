class ConditionStatsController < ApplicationController
  # GET /condition_stats
  # GET /condition_stats.xml
  def index
    @condition_stats = ConditionStat.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @condition_stats }
    end
  end

  # GET /condition_stats/1
  # GET /condition_stats/1.xml
  def show
    @condition_stat = ConditionStat.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @condition_stat }
    end
  end

  # GET /condition_stats/new
  # GET /condition_stats/new.xml
  def new
    @condition_stat = ConditionStat.new
    @condition = Condition.find(params[:id])
    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @condition_stat }
    end
  end

  # GET /condition_stats/1/edit
  def edit
    @condition_stat = ConditionStat.find(params[:id])
    @condition = Condition.find(params[:id])
  end

  # POST /condition_stats
  # POST /condition_stats.xml
  def create
    @condition_stat = ConditionStat.new(params[:condition_stat])

    respond_to do |format|
      if @condition_stat.save
        flash[:notice] = 'ConditionStat was successfully created.'
        format.html { redirect_to providers_path }
        format.xml  { render :xml => @condition_stat, :status => :created, :location => @condition_stat }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @condition_stat.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /condition_stats/1
  # PUT /condition_stats/1.xml
  def update
    @condition_stat = ConditionStat.find(params[:id])

    respond_to do |format|
      if @condition_stat.update_attributes(params[:condition_stat])
        flash[:notice] = 'ConditionStat was successfully updated.'
        format.html { redirect_to providers_path }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @condition_stat.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /condition_stats/1
  # DELETE /condition_stats/1.xml
  def destroy
    @condition_stat = ConditionStat.find(params[:id])
    @condition_stat.destroy

    respond_to do |format|
      format.html { redirect_to(condition_stats_url) }
      format.xml  { head :ok }
    end
  end
end
