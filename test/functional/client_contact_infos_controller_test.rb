require 'test_helper'

class ClientContactInfosControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:client_contact_infos)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create client_contact_info" do
    assert_difference('ClientContactInfo.count') do
      post :create, :client_contact_info => { }
    end

    assert_redirected_to client_contact_info_path(assigns(:client_contact_info))
  end

  test "should show client_contact_info" do
    get :show, :id => client_contact_infos(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => client_contact_infos(:one).to_param
    assert_response :success
  end

  test "should update client_contact_info" do
    put :update, :id => client_contact_infos(:one).to_param, :client_contact_info => { }
    assert_redirected_to client_contact_info_path(assigns(:client_contact_info))
  end

  test "should destroy client_contact_info" do
    assert_difference('ClientContactInfo.count', -1) do
      delete :destroy, :id => client_contact_infos(:one).to_param
    end

    assert_redirected_to client_contact_infos_path
  end
end
