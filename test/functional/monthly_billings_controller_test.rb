require 'test_helper'

class MonthlyBillingsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:monthly_billings)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create monthly_billing" do
    assert_difference('MonthlyBilling.count') do
      post :create, :monthly_billing => { }
    end

    assert_redirected_to monthly_billing_path(assigns(:monthly_billing))
  end

  test "should show monthly_billing" do
    get :show, :id => monthly_billings(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => monthly_billings(:one).to_param
    assert_response :success
  end

  test "should update monthly_billing" do
    put :update, :id => monthly_billings(:one).to_param, :monthly_billing => { }
    assert_redirected_to monthly_billing_path(assigns(:monthly_billing))
  end

  test "should destroy monthly_billing" do
    assert_difference('MonthlyBilling.count', -1) do
      delete :destroy, :id => monthly_billings(:one).to_param
    end

    assert_redirected_to monthly_billings_path
  end
end
