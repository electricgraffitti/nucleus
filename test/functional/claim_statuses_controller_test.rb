require 'test_helper'

class ClaimStatusesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:claim_statuses)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create claim_status" do
    assert_difference('ClaimStatus.count') do
      post :create, :claim_status => { }
    end

    assert_redirected_to claim_status_path(assigns(:claim_status))
  end

  test "should show claim_status" do
    get :show, :id => claim_statuses(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => claim_statuses(:one).to_param
    assert_response :success
  end

  test "should update claim_status" do
    put :update, :id => claim_statuses(:one).to_param, :claim_status => { }
    assert_redirected_to claim_status_path(assigns(:claim_status))
  end

  test "should destroy claim_status" do
    assert_difference('ClaimStatus.count', -1) do
      delete :destroy, :id => claim_statuses(:one).to_param
    end

    assert_redirected_to claim_statuses_path
  end
end
