class ClaimStatusesController < ApplicationController
  
  before_filter :require_client
  
  # GET /claim_statuses
  # GET /claim_statuses.xml
  def index
    @claim_statuses = ClaimStatus.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @claim_statuses }
    end
  end

  # GET /claim_statuses/1
  # GET /claim_statuses/1.xml
  def show
    @claim_status = ClaimStatus.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @claim_status }
    end
  end

  # GET /claim_statuses/new
  # GET /claim_statuses/new.xml
  def new
    @claim_status = ClaimStatus.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @claim_status }
    end
  end

  # GET /claim_statuses/1/edit
  def edit
    @claim_status = ClaimStatus.find(params[:id])
  end

  # POST /claim_statuses
  # POST /claim_statuses.xml
  def create
    @claim_status = ClaimStatus.new(params[:claim_status])

    respond_to do |format|
      if @claim_status.save
        format.html { redirect_to(@claim_status, :notice => 'ClaimStatus was successfully created.') }
        format.xml  { render :xml => @claim_status, :status => :created, :location => @claim_status }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @claim_status.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /claim_statuses/1
  # PUT /claim_statuses/1.xml
  def update
    @claim_status = ClaimStatus.find(params[:id])

    respond_to do |format|
      if @claim_status.update_attributes(params[:claim_status])
        format.html { redirect_to(@claim_status, :notice => 'ClaimStatus was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @claim_status.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /claim_statuses/1
  # DELETE /claim_statuses/1.xml
  def destroy
    @claim_status = ClaimStatus.find(params[:id])
    @claim_status.destroy

    respond_to do |format|
      format.html { redirect_to(claim_statuses_url) }
      format.xml  { head :ok }
    end
  end
end
