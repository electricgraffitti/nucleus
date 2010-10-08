require 'test_helper'

class DashboardWidgetsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:dashboard_widgets)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create dashboard_widget" do
    assert_difference('DashboardWidget.count') do
      post :create, :dashboard_widget => { }
    end

    assert_redirected_to dashboard_widget_path(assigns(:dashboard_widget))
  end

  test "should show dashboard_widget" do
    get :show, :id => dashboard_widgets(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => dashboard_widgets(:one).to_param
    assert_response :success
  end

  test "should update dashboard_widget" do
    put :update, :id => dashboard_widgets(:one).to_param, :dashboard_widget => { }
    assert_redirected_to dashboard_widget_path(assigns(:dashboard_widget))
  end

  test "should destroy dashboard_widget" do
    assert_difference('DashboardWidget.count', -1) do
      delete :destroy, :id => dashboard_widgets(:one).to_param
    end

    assert_redirected_to dashboard_widgets_path
  end
end
