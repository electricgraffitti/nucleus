require 'test_helper'

class ClientProfilesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:client_profiles)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create client_profile" do
    assert_difference('ClientProfile.count') do
      post :create, :client_profile => { }
    end

    assert_redirected_to client_profile_path(assigns(:client_profile))
  end

  test "should show client_profile" do
    get :show, :id => client_profiles(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => client_profiles(:one).to_param
    assert_response :success
  end

  test "should update client_profile" do
    put :update, :id => client_profiles(:one).to_param, :client_profile => { }
    assert_redirected_to client_profile_path(assigns(:client_profile))
  end

  test "should destroy client_profile" do
    assert_difference('ClientProfile.count', -1) do
      delete :destroy, :id => client_profiles(:one).to_param
    end

    assert_redirected_to client_profiles_path
  end
end
