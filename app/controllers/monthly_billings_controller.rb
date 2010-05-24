class MonthlyBillingsController < ApplicationController
  
  before_filter :require_client
  
  # GET /monthly_billings
  # GET /monthly_billings.xml
  def index
    @monthly_billings = MonthlyBilling.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @monthly_billings }
    end
  end

  # GET /monthly_billings/1
  # GET /monthly_billings/1.xml
  def show
    @monthly_billing = MonthlyBilling.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @monthly_billing }
    end
  end

  # GET /monthly_billings/new
  # GET /monthly_billings/new.xml
  def new
    @monthly_billing = MonthlyBilling.new
    @condition = Condition.find(params[:id])
    @previous_billings = @condition.monthly_billings.billing_list

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @monthly_billing }
    end
  end

  # GET /monthly_billings/1/edit
  def edit
    @monthly_billing = MonthlyBilling.find(params[:id])
    @condition = @monthly_billing.condition
  end

  # POST /monthly_billings
  # POST /monthly_billings.xml
  def create
    @monthly_billing = MonthlyBilling.new(params[:monthly_billing])

    respond_to do |format|
      if @monthly_billing.save
        flash[:notice] = 'MonthlyBilling was successfully created.'
        format.html { redirect_to new_monthly_billing_path(:id => @monthly_billing.condition.id) }
        format.xml  { render :xml => @monthly_billing, :status => :created, :location => @monthly_billing }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @monthly_billing.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /monthly_billings/1
  # PUT /monthly_billings/1.xml
  def update
    @monthly_billing = MonthlyBilling.find(params[:id])

    respond_to do |format|
      if @monthly_billing.update_attributes(params[:monthly_billing])
        flash[:notice] = 'MonthlyBilling was successfully updated.'
        format.html { redirect_to new_monthly_billing_path(:id => @monthly_billing.condition.id) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @monthly_billing.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /monthly_billings/1
  # DELETE /monthly_billings/1.xml
  def destroy
    @monthly_billing = MonthlyBilling.find(params[:id])
    @monthly_billing.destroy

    respond_to do |format|
      format.html { redirect_to new_monthly_billing_path(:id => @monthly_billing.condition.id) }
      format.xml  { head :ok }
    end
  end
end
