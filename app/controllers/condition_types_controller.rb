class ConditionTypesController < ApplicationController
  # GET /condition_types
  # GET /condition_types.xml
  def index
    @condition_types = ConditionType.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @condition_types }
    end
  end

  # GET /condition_types/1
  # GET /condition_types/1.xml
  def show
    @condition_type = ConditionType.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @condition_type }
    end
  end

  # GET /condition_types/new
  # GET /condition_types/new.xml
  def new
    @condition_type = ConditionType.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @condition_type }
    end
  end

  # GET /condition_types/1/edit
  def edit
    @condition_type = ConditionType.find(params[:id])
  end

  # POST /condition_types
  # POST /condition_types.xml
  def create
    @condition_type = ConditionType.new(params[:condition_type])

    respond_to do |format|
      if @condition_type.save
        flash[:notice] = 'ConditionType was successfully created.'
        format.html { redirect_to(@condition_type) }
        format.xml  { render :xml => @condition_type, :status => :created, :location => @condition_type }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @condition_type.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /condition_types/1
  # PUT /condition_types/1.xml
  def update
    @condition_type = ConditionType.find(params[:id])

    respond_to do |format|
      if @condition_type.update_attributes(params[:condition_type])
        flash[:notice] = 'ConditionType was successfully updated.'
        format.html { redirect_to(@condition_type) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @condition_type.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /condition_types/1
  # DELETE /condition_types/1.xml
  def destroy
    @condition_type = ConditionType.find(params[:id])
    @condition_type.destroy

    respond_to do |format|
      format.html { redirect_to(condition_types_url) }
      format.xml  { head :ok }
    end
  end
end
