require 'test_helper'

class CyclesControllerTest < ActionController::TestCase
  setup do
    @cycle = cycles(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:cycles)
  end

  test "should create cycle" do
    assert_difference('Cycle.count') do
      post :create, cycle: { end: @cycle.end, start: @cycle.start }
    end

    assert_response 201
  end

  test "should show cycle" do
    get :show, id: @cycle
    assert_response :success
  end

  test "should update cycle" do
    put :update, id: @cycle, cycle: { end: @cycle.end, start: @cycle.start }
    assert_response 204
  end

  test "should destroy cycle" do
    assert_difference('Cycle.count', -1) do
      delete :destroy, id: @cycle
    end

    assert_response 204
  end
end
