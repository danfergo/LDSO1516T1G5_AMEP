require 'test_helper'

class ProssumersControllerTest < ActionController::TestCase
  setup do
    @prossumer = prossumers(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:prossumers)
  end

  test "should create prossumer" do
    assert_difference('Prossumer.count') do
      post :create, prossumer: { email: @prossumer.email, name: @prossumer.name, password: @prossumer.password }
    end

    assert_response 201
  end

  test "should show prossumer" do
    get :show, id: @prossumer
    assert_response :success
  end

  test "should update prossumer" do
    put :update, id: @prossumer, prossumer: { email: @prossumer.email, name: @prossumer.name, password: @prossumer.password }
    assert_response 204
  end

  test "should destroy prossumer" do
    assert_difference('Prossumer.count', -1) do
      delete :destroy, id: @prossumer
    end

    assert_response 204
  end
end
