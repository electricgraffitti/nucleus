require 'test_helper'

class ClientSessionsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:client_sessions)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create client_session" do
    assert_difference('ClientSession.count') do
      post :create, :client_session => { }
    end

    assert_redirected_to client_session_path(assigns(:client_session))
  end

  test "should show client_session" do
    get :show, :id => client_sessions(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => client_sessions(:one).to_param
    assert_response :success
  end

  test "should update client_session" do
    put :update, :id => client_sessions(:one).to_param, :client_session => { }
    assert_redirected_to client_session_path(assigns(:client_session))
  end

  test "should destroy client_session" do
    assert_difference('ClientSession.count', -1) do
      delete :destroy, :id => client_sessions(:one).to_param
    end

    assert_redirected_to client_sessions_path
  end
end
