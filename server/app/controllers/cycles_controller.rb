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
    cycleParams = ActionController::Parameters.new(title: (cycle_params[:title] ? cycle_params[:title] : nil),
                                                   group_id: cycle_params[:group_id],
                                                   start_time: cycle_params[:weeks].first[:delivery_date],
                                                   end_time: cycle_params[:weeks].last[:delivery_date]
    )

    @cycle = Cycle.new(cycleParams.permit(:title,:group_id, :start_time, :end_time))
    if @cycle.save
      #TODO validate that weeks do not overlap. i.e.,
      cycle_params[:weeks].each do |t|
        weekParams = ActionController::Parameters.new({cycle_id: @cycle.id, delivery_date: t[:delivery_date],
                                                       location: (t[:location] ? t[:location] : nil)})
        week = Week.new(weekParams.permit(:cycle_id, :delivery_date, :location))
        week.save()
        #TODO check for errors
      end
      render json: @cycle.as_json(include: [:weeks]), status: :created, location: @cycle
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
    params.require(:group_id)
    params.require(:weeks)
    params[:weeks].each do |t|
      t.require(:delivery_date)
    end
    params
  end
end
