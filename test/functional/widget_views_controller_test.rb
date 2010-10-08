require 'test_helper'

class WidgetViewsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:widget_views)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create widget_view" do
    assert_difference('WidgetView.count') do
      post :create, :widget_view => { }
    end

    assert_redirected_to widget_view_path(assigns(:widget_view))
  end

  test "should show widget_view" do
    get :show, :id => widget_views(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => widget_views(:one).to_param
    assert_response :success
  end

  test "should update widget_view" do
    put :update, :id => widget_views(:one).to_param, :widget_view => { }
    assert_redirected_to widget_view_path(assigns(:widget_view))
  end

  test "should destroy widget_view" do
    assert_difference('WidgetView.count', -1) do
      delete :destroy, :id => widget_views(:one).to_param
    end

    assert_redirected_to widget_views_path
  end
end
