require 'test_helper'

class ProviderSpecialitiesControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:provider_specialities)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create provider_speciality" do
    assert_difference('ProviderSpeciality.count') do
      post :create, :provider_speciality => { }
    end

    assert_redirected_to provider_speciality_path(assigns(:provider_speciality))
  end

  test "should show provider_speciality" do
    get :show, :id => provider_specialities(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => provider_specialities(:one).to_param
    assert_response :success
  end

  test "should update provider_speciality" do
    put :update, :id => provider_specialities(:one).to_param, :provider_speciality => { }
    assert_redirected_to provider_speciality_path(assigns(:provider_speciality))
  end

  test "should destroy provider_speciality" do
    assert_difference('ProviderSpeciality.count', -1) do
      delete :destroy, :id => provider_specialities(:one).to_param
    end

    assert_redirected_to provider_specialities_path
  end
end
