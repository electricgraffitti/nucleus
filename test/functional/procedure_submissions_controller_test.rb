require 'test_helper'

class ProcedureSubmissionsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:procedure_submissions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create procedure_submission" do
    assert_difference('ProcedureSubmission.count') do
      post :create, :procedure_submission => { }
    end

    assert_redirected_to procedure_submission_path(assigns(:procedure_submission))
  end

  test "should show procedure_submission" do
    get :show, :id => procedure_submissions(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => procedure_submissions(:one).to_param
    assert_response :success
  end

  test "should update procedure_submission" do
    put :update, :id => procedure_submissions(:one).to_param, :procedure_submission => { }
    assert_redirected_to procedure_submission_path(assigns(:procedure_submission))
  end

  test "should destroy procedure_submission" do
    assert_difference('ProcedureSubmission.count', -1) do
      delete :destroy, :id => procedure_submissions(:one).to_param
    end

    assert_redirected_to procedure_submissions_path
  end
end
