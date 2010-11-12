require 'test_helper'

class ClientConnectionsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:client_connections)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create client_connection" do
    assert_difference('ClientConnection.count') do
      post :create, :client_connection => { }
    end

    assert_redirected_to client_connection_path(assigns(:client_connection))
  end

  test "should show client_connection" do
    get :show, :id => client_connections(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => client_connections(:one).to_param
    assert_response :success
  end

  test "should update client_connection" do
    put :update, :id => client_connections(:one).to_param, :client_connection => { }
    assert_redirected_to client_connection_path(assigns(:client_connection))
  end

  test "should destroy client_connection" do
    assert_difference('ClientConnection.count', -1) do
      delete :destroy, :id => client_connections(:one).to_param
    end

    assert_redirected_to client_connections_path
  end
end
