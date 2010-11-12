class MessageUpdatesController < ApplicationController
  # GET /message_updates
  # GET /message_updates.xml
  def index
    @message_updates = MessageUpdate.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @message_updates }
    end
  end

  # GET /message_updates/1
  # GET /message_updates/1.xml
  def show
    @message_update = MessageUpdate.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @message_update }
    end
  end

  # GET /message_updates/new
  # GET /message_updates/new.xml
  def new
    @message_update = MessageUpdate.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @message_update }
    end
  end

  # GET /message_updates/1/edit
  def edit
    @message_update = MessageUpdate.find(params[:id])
  end

  # POST /message_updates
  # POST /message_updates.xml
  def create
    @message_update = MessageUpdate.new(params[:message_update])

    respond_to do |format|
      if @message_update.save
        format.html { redirect_to(@message_update, :notice => 'MessageUpdate was successfully created.') }
        format.xml  { render :xml => @message_update, :status => :created, :location => @message_update }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @message_update.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /message_updates/1
  # PUT /message_updates/1.xml
  def update
    @message_update = MessageUpdate.find(params[:id])

    respond_to do |format|
      if @message_update.update_attributes(params[:message_update])
        format.html { redirect_to(@message_update, :notice => 'MessageUpdate was successfully updated.') }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @message_update.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /message_updates/1
  # DELETE /message_updates/1.xml
  def destroy
    @message_update = MessageUpdate.find(params[:id])
    @message_update.destroy

    respond_to do |format|
      format.html { redirect_to(message_updates_url) }
      format.xml  { head :ok }
    end
  end
end
