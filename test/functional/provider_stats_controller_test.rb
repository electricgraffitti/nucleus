require 'test_helper'

class ProviderStatsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:provider_stats)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create provider_stat" do
    assert_difference('ProviderStat.count') do
      post :create, :provider_stat => { }
    end

    assert_redirected_to provider_stat_path(assigns(:provider_stat))
  end

  test "should show provider_stat" do
    get :show, :id => provider_stats(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => provider_stats(:one).to_param
    assert_response :success
  end

  test "should update provider_stat" do
    put :update, :id => provider_stats(:one).to_param, :provider_stat => { }
    assert_redirected_to provider_stat_path(assigns(:provider_stat))
  end

  test "should destroy provider_stat" do
    assert_difference('ProviderStat.count', -1) do
      delete :destroy, :id => provider_stats(:one).to_param
    end

    assert_redirected_to provider_stats_path
  end
end
