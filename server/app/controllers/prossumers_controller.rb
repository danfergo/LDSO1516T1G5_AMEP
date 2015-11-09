class ProssumersController < ApplicationController
  before_action :set_prossumer, only: [:show, :destroy]

  # GET /prossumers
  # GET /prossumers.json
  #def index
  #  @prossumers = Prossumer.all
  #  render json: @prossumers
  #end

  # GET /prossumers/1
  # GET /prossumers/1.json
  def show
    render json: @prossumer
  end

  # POST /prossumers
  # POST /prossumers.json
  def create
    @prossumer = Prossumer.new(prossumer_params)

    if @prossumer.save
      render json: @prossumer, status: :created #, location: @prossumer
    else
      render json: @prossumer.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /prossumers/1
  # PATCH/PUT /prossumers/1.json
  def update
    @prossumer = Prossumer.find(params[:id])

    if @prossumer.update(prossumer_params)
      head :no_content
    else
      render json: @prossumer.errors, status: :unprocessable_entity
    end
  end

  # DELETE /prossumers/1
  # DELETE /prossumers/1.json
  def destroy
    @prossumer.destroy

    head :no_content
  end

  private
  def set_prossumer
    @prossumer = Prossumer.find(params[:id])
  end

  def prossumer_params
    params.require(:email)
    params.require(:name)
    params.require(:password)
    params.permit(:email,:name,:password, :phone)
  end
end
