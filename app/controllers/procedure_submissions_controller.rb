class ProcedureSubmissionsController < ApplicationController
  # GET /procedure_submissions
  # GET /procedure_submissions.xml
  def index
    @procedure_submissions = ProcedureSubmission.all

    respond_to do |format|
      format.html # index.html.erb
      format.xml  { render :xml => @procedure_submissions }
    end
  end

  # GET /procedure_submissions/1
  # GET /procedure_submissions/1.xml
  def show
    @procedure_submission = ProcedureSubmission.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.xml  { render :xml => @procedure_submission }
    end
  end

  # GET /procedure_submissions/new
  # GET /procedure_submissions/new.xml
  def new
    @procedure_submission = ProcedureSubmission.new
    @condition = Condition.find(params[:id])
    respond_to do |format|
      format.html # new.html.erb
      format.xml  { render :xml => @procedure_submission }
    end
  end

  # GET /procedure_submissions/1/edit
  def edit
    @procedure_submission = ProcedureSubmission.find(params[:id])
    @condition = Condition.find(params[:id])
  end

  # POST /procedure_submissions
  # POST /procedure_submissions.xml
  def create
    @procedure_submission = ProcedureSubmission.new(params[:procedure_submission])

    respond_to do |format|
      if @procedure_submission.save
        flash[:notice] = 'ProcedureSubmission was successfully created.'
        format.html { redirect_to providers_path }
        format.xml  { render :xml => @procedure_submission, :status => :created, :location => @procedure_submission }
      else
        format.html { render :action => "new" }
        format.xml  { render :xml => @procedure_submission.errors, :status => :unprocessable_entity }
      end
    end
  end

  # PUT /procedure_submissions/1
  # PUT /procedure_submissions/1.xml
  def update
    @procedure_submission = ProcedureSubmission.find(params[:id])

    respond_to do |format|
      if @procedure_submission.update_attributes(params[:procedure_submission])
        flash[:notice] = 'ProcedureSubmission was successfully updated.'
        format.html { redirect_to providers_path }
        format.xml  { head :ok }
      else
        format.html { render :action => "edit" }
        format.xml  { render :xml => @procedure_submission.errors, :status => :unprocessable_entity }
      end
    end
  end

  # DELETE /procedure_submissions/1
  # DELETE /procedure_submissions/1.xml
  def destroy
    @procedure_submission = ProcedureSubmission.find(params[:id])
    @procedure_submission.destroy

    respond_to do |format|
      format.html { redirect_to(procedure_submissions_url) }
      format.xml  { head :ok }
    end
  end
end
