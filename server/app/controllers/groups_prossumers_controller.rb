class GroupsProssumersController < ApplicationController
  before_filter :is_authenticated, except: [:index]
  before_filter :is_coordinator, only: [:update]
  before_action :set_groups_prossumer, only: [:show, :update, :destroy]

  # GET /groups_prossumers
  # GET /groups_prossumers.json
  def index
    render json: GroupsProssumer.where({group_id: params[:group_id]}).
        joins(:prossumer).order('prossumers.name').as_json({include_prossumer: true})
  end

  # GET /groups_prossumers/1
  # GET /groups_prossumers/1.json
  def show
    render json: @groups_prossumer.as_json({include_prossumer: true})
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

    def is_coordinator
      check = GroupsProssumer.where({group_id: params[:group_id],prossumer_id: session[:prossumer_id]}).first.is_coordinator
      if check
        return true
      else
        render json: {error: "Unauthorized Access"}, status:  :unauthorized
        return false
      end
    end




    def set_groups_prossumer
      @groups_prossumer = GroupsProssumer.where({group_id: params[:group_id], prossumer_id: params[:id]}).first;

    end

    def groups_prossumer_params
      params.permit(:is_coordinator,:state)
    end
end
