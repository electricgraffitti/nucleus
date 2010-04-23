class SearchTopicsController < ApplicationController
  # GET /search_topics
  # GET /search_topics.xml
  def index
    @search_topics = SearchTopic.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @search_topics }
    end
  end

  # GET /search_topics/1
  # GET /search_topics/1.xml
  def show
    @search_topic = SearchTopic.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @search_topic }
    end
  end

  # GET /search_topics/new
  # GET /search_topics/new.xml
  def new
    @search_topic = SearchTopic.new

    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @search_topic }
    end
  end

  # GET /search_topics/1/edit
  def edit
    @search_topic = SearchTopic.find(params[:id])
  end

  # POST /search_topics
  # POST /search_topics.xml
  def create
    @search_topic = SearchTopic.new(params[:search_topic])

    respond_to do |format|
      if @search_topic.save
        flash[:notice] = 'SearchTopic was successfully created.'
        format.html { redirect_to(@search_topic) }
        format.xml  { render :xml => @search_topic, :status => :created, :location => @search_topic }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @search_topic.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /search_topics/1
  # PUT /search_topics/1.xml
  def update
    @search_topic = SearchTopic.find(params[:id])

    respond_to do |format|
      if @search_topic.update_attributes(params[:search_topic])
        flash[:notice] = 'SearchTopic was successfully updated.'
        format.html { redirect_to(@search_topic) }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @search_topic.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /search_topics/1
  # DELETE /search_topics/1.xml
  def destroy
    @search_topic = SearchTopic.find(params[:id])
    @search_topic.destroy

    respond_to do |format|
      format.html { redirect_to(search_topics_url) }
      format.xml  { head :ok }
    end
  end
end
