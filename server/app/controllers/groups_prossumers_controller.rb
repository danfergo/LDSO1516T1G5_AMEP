class GroupsProssumersController < ApplicationController
  before_filter :is_authenticated
  before_action :set_groups_prossumer, only: [:show, :update, :destroy]

  # GET /groups_prossumers
  # GET /groups_prossumers.json
  def index
    render json: GroupsProssumer.where({group_id: params[:group_id]}).as_json({include_prossumer: true})
   # group = Group.find(params[:group_id])
    #iscoord = GroupsProssumer.where(group_id: params[:group_id],prossumer_id: session[:prossumer_id]).first.is_coordinator
   # group_prossumers = group.as_json(
   #     include: {groups_prossumers: {
   #         include: [prossumer: {except: [:encrypted_password, :salt, :confirm_hash,:created_at,:updated_at]}]
  #     }})
   # renderobject = {coordinator: iscoord, group: group_prossumers}

    #render json: renderobject
  end

  # GET /groups_prossumers/1
  # GET /groups_prossumers/1.json
  def show
    render json: @group_prossumer.as_json({include_prossumer: true})
  end

  # POST /groups_prossumers
  # POST /groups_prossumers.json
  def create
    @groups_prossumer = GroupsProssumer.new group_id: params[:group_id], prossumer_id: session[:prossumer_id], state: 1, is_coordinator: true

    if @groups_prossumer.save
      render json: @groups_prossumer, status: :created
    else
      render json: @groups_prossumer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /groups_prossumers/1
  # PATCH/PUT /groups_prossumers/1.json
  def update
    render json: @groups_prossumer
    if @groups_prossumer.update(groups_prossumer_params)
      head :no_content
    else
     render json: @groups_prossumer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /groups_prossumers/1
  # DELETE /groups_prossumers/1.json
  def destroy
    @groups_prossumer.destroy

    head :no_content
  end

  private

    def set_groups_prossumer
      @groups_prossumer = GroupsProssumer.find(params[:id])
    end

    def groups_prossumer_params
      params[:is_coordinator]
      params[:state]
      params.permit(:is_coordinator)
      params.permit(:state)
    end
end
