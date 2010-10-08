class WidgetViewsController < ApplicationController
  # GET /widget_views
  # GET /widget_views.xml
  def index
    @widget_views = WidgetView.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @widget_views }
    end
  end

  # GET /widget_views/1
  # GET /widget_views/1.xml
  def show
    @widget_view = WidgetView.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @widget_view }
    end
  end

  # GET /widget_views/new
  # GET /widget_views/new.xml
  def new
    @widget_view = WidgetView.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @widget_view }
    end
  end

  # GET /widget_views/1/edit
  def edit
    @widget_view = WidgetView.find(params[:id])
  end

  # POST /widget_views
  # POST /widget_views.xml
  def create
    @widget_view = WidgetView.new(params[:widget_view])

    respond_to do |format|
      if @widget_view.save
        format.html { redirect_to(@widget_view, :notice => 'WidgetView was successfully created.') }
        format.xml  { render :xml => @widget_view, :status => :created, :location => @widget_view }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @widget_view.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /widget_views/1
  # PUT /widget_views/1.xml
  def update
    @widget_view = WidgetView.find(params[:id])

    respond_to do |format|
      if @widget_view.update_attributes(params[:widget_view])
        format.html { redirect_to(@widget_view, :notice => 'WidgetView was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @widget_view.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /widget_views/1
  # DELETE /widget_views/1.xml
  def destroy
    @widget_view = WidgetView.find(params[:id])
    @widget_view.destroy

    respond_to do |format|
      format.html { redirect_to(widget_views_url) }
      format.xml  { head :ok }
    end
  end
end
