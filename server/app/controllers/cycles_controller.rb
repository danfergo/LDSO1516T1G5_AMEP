class CyclesController < ApplicationController
  before_action :set_group, only: [:show]
  before_action :set_cycle, only: [:show, :update, :destroy]

  # GET /cycles
  # GET /cycles.json
  def index
    @cycles = Cycle.where(group_id: params[:group_id])

    render json: @cycles
  end

  # GET /cycles/1
  # GET /cycles/1.json
  def show
    render json: @cycle
  end

  # POST /cycles
  # POST /cycles.json
  def create
    @cycle = Cycle.new(cycle_params)

    if @cycle.save
      render json: @cycle, status: :created, location: @cycle
    else
      render json: @cycle.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cycles/1
  # PATCH/PUT /cycles/1.json
  def update
    @cycle = Cycle.find(params[:id])

    if @cycle.update(cycle_params)
      head :no_content
    else
      render json: @cycle.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cycles/1
  # DELETE /cycles/1.json
  def destroy
    @cycle.destroy

    head :no_content
  end

  private

    def set_cycle
      @cycle = Cycle.find(params[:id])
    end

    def set_group
      @group = Group.find(params[:group_id])
    end

    def cycle_params
      #params.require(:cycle).permit(:start, :end)
    end
end
