require 'test_helper'

class MessageUpdatesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:message_updates)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create message_update" do
    assert_difference('MessageUpdate.count') do
      post :create, :message_update => { }
    end

    assert_redirected_to message_update_path(assigns(:message_update))
  end

  test "should show message_update" do
    get :show, :id => message_updates(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => message_updates(:one).to_param
    assert_response :success
  end

  test "should update message_update" do
    put :update, :id => message_updates(:one).to_param, :message_update => { }
    assert_redirected_to message_update_path(assigns(:message_update))
  end

  test "should destroy message_update" do
    assert_difference('MessageUpdate.count', -1) do
      delete :destroy, :id => message_updates(:one).to_param
    end

    assert_redirected_to message_updates_path
  end
end
