require 'test_helper'

class SearchTopicsControllerTest < ActionController::TestCase
  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:search_topics)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create search_topic" do
    assert_difference('SearchTopic.count') do
      post :create, :search_topic => { }
    end

    assert_redirected_to search_topic_path(assigns(:search_topic))
  end

  test "should show search_topic" do
    get :show, :id => search_topics(:one).to_param
    assert_response :success
  end

  test "should get edit" do
    get :edit, :id => search_topics(:one).to_param
    assert_response :success
  end

  test "should update search_topic" do
    put :update, :id => search_topics(:one).to_param, :search_topic => { }
    assert_redirected_to search_topic_path(assigns(:search_topic))
  end

  test "should destroy search_topic" do
    assert_difference('SearchTopic.count', -1) do
      delete :destroy, :id => search_topics(:one).to_param
    end

    assert_redirected_to search_topics_path
  end
end
