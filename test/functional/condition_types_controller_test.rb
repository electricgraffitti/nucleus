require 'test_helper'

class ConditionTypesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:condition_types)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create condition_type" do
    assert_difference('ConditionType.count') do
      post :create, :condition_type => { }
    end

    assert_redirected_to condition_type_path(assigns(:condition_type))
  end

  test "should show condition_type" do
    get :show, :id => condition_types(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => condition_types(:one).to_param
    assert_response :success
  end

  test "should update condition_type" do
    put :update, :id => condition_types(:one).to_param, :condition_type => { }
    assert_redirected_to condition_type_path(assigns(:condition_type))
  end

  test "should destroy condition_type" do
    assert_difference('ConditionType.count', -1) do
      delete :destroy, :id => condition_types(:one).to_param
    end

    assert_redirected_to condition_types_path
  end
end
