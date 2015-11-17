class ProssumersController < ApplicationController
  before_action :set_prossumer, only: [:show, :destroy]
  before_action :not_is_authenticated, only: [:confirm_account]
  before_action :prossumer_confirm_params, only: [:confirm_account]

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
      ConfirmAccount.welcome(@prossumer).deliver_later

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

  def confirm_account
    @prossumer = Prossumer.find_by_id(prossumer_confirm_params[:id])
    if (@prossumer)
      if @prossumer.confirm_hash
        if @prossumer.confirm_hash.to_s == prossumer_confirm_params[:hash].to_s
          @prossumer.update_attributes({:confirm_hash => nil})
          render json: {status: 'confirmed'}
        else
          render json: {status: 'not_confirmed'}
        end
      else
        render json: {status: 'already_confirmed'}
      end
    else
      render json: {status: 'invalid'}
    end
  end






  private
  def set_prossumer
    @prossumer = Prossumer.find_by_email(params[:id])
  end

  def prossumer_confirm_params
    params.require(:id)
    params.require(:hash)
    params
  end

  def prossumer_params
    params.require(:email)
    params.require(:name)
    params.require(:password)
    params.permit(:email, :name, :password, :phone)
  end
end
