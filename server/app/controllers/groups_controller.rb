class GroupsController < ApplicationController
  before_action :set_group, only: [:show, :update, :destroy]
  before_filter :is_authenticated, except: [:index, :show]

  # GET /groups
  # GET /groups.json
  def index
    @groups = Group.all
    render json: @groups
  end

  # GET /groups/1
  # GET /groups/1.json
  def show
    render json: @group
  end

  # POST /groups
  # POST /groups.json
  def create
    @group = Group.new(group_params)
    if @group.save
      #state 2 - activated by default
      groupsProssumer = GroupsProssumer.new group_id: @group.id, prossumer_id: session[:prossumer_id], state: 2, is_coordinator: true
      groupsProssumer.save
      render json: @group, status: :created
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups/1
  # PATCH/PUT /groups/1.json
  def update
    @group = Group.find(params[:id])

    if @group.update(group_params)
      head :no_content
    else
      render json: @group.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groups/1
  # DELETE /groups/1.json
  def destroy
    @group.destroy

    head :no_content
  end

  private

  def set_group
    @group = Group.find(params[:id])
  end

  def group_params
    params.require(:name)
    params.require(:city_id)
    params.permit(:name, :city_id)
  end
end
