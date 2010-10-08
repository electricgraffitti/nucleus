class DashboardWidgetsController < ApplicationController
  # GET /dashboard_widgets
  # GET /dashboard_widgets.xml
  def index
    @dashboard_widgets = DashboardWidget.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @dashboard_widgets }
    end
  end

  # GET /dashboard_widgets/1
  # GET /dashboard_widgets/1.xml
  def show
    @dashboard_widget = DashboardWidget.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @dashboard_widget }
    end
  end

  # GET /dashboard_widgets/new
  # GET /dashboard_widgets/new.xml
  def new
    @dashboard_widget = DashboardWidget.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @dashboard_widget }
    end
  end

  # GET /dashboard_widgets/1/edit
  def edit
    @dashboard_widget = DashboardWidget.find(params[:id])
  end

  # POST /dashboard_widgets
  # POST /dashboard_widgets.xml
  def create
    @dashboard_widget = DashboardWidget.new(params[:dashboard_widget])

    respond_to do |format|
      if @dashboard_widget.save
        format.html { redirect_to(@dashboard_widget, :notice => 'DashboardWidget was successfully created.') }
        format.xml  { render :xml => @dashboard_widget, :status => :created, :location => @dashboard_widget }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @dashboard_widget.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /dashboard_widgets/1
  # PUT /dashboard_widgets/1.xml
  def update
    @dashboard_widget = DashboardWidget.find(params[:id])

    respond_to do |format|
      if @dashboard_widget.update_attributes(params[:dashboard_widget])
        format.html { redirect_to(@dashboard_widget, :notice => 'DashboardWidget was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @dashboard_widget.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /dashboard_widgets/1
  # DELETE /dashboard_widgets/1.xml
  def destroy
    @dashboard_widget = DashboardWidget.find(params[:id])
    @dashboard_widget.destroy

    respond_to do |format|
      format.html { redirect_to(dashboard_widgets_url) }
      format.xml  { head :ok }
    end
  end
end
