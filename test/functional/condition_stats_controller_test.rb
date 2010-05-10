require 'test_helper'

class ConditionStatsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:condition_stats)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create condition_stat" do
    assert_difference('ConditionStat.count') do
      post :create, :condition_stat => { }
    end

    assert_redirected_to condition_stat_path(assigns(:condition_stat))
  end

  test "should show condition_stat" do
    get :show, :id => condition_stats(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => condition_stats(:one).to_param
    assert_response :success
  end

  test "should update condition_stat" do
    put :update, :id => condition_stats(:one).to_param, :condition_stat => { }
    assert_redirected_to condition_stat_path(assigns(:condition_stat))
  end

  test "should destroy condition_stat" do
    assert_difference('ConditionStat.count', -1) do
      delete :destroy, :id => condition_stats(:one).to_param
    end

    assert_redirected_to condition_stats_path
  end
end
