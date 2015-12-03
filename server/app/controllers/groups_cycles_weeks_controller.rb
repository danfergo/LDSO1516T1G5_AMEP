class GroupsCyclesWeeksController < ApplicationController
  before_filter :is_authenticated

  # GET /groups/1/cycles/1/products
  # GET /groups/1/cycles/1/products.json
  def index
    render json: Week.where({cycle_id: params[:cycle_id]})
  end

  # GET /groups/1/cycles/1/products/1
  # GET /groups/1/cycles/1/products/1.json
  #def show
  #  is_my_resource(params[:id])

  #  prossumerProductsIds = Prossumer.find(params[:id]).products.ids
  #  render json: ProductAuth.where({product_id: prossumerProductsIds, group_id: params[:group_id]})
  #end

  # POST /groups/1/cycles/1/products
  # POST /groups/1/cycles/1/products.json
  #def create
  # @groups_prossumer = GroupsProssumer.new group_id: params[:group_id], prossumer_id: session[:prossumer_id], state: 1, is_coordinator: true

  # if @groups_prossumer.save
  # render json: @groups_prossumer, status: :created
  #  else
  # render json: @groups_prossumer.errors, status: :unprocessable_entity
  # end
  #end

  # PATCH/PUT /groups/1/cycles/1/products/1
  # PATCH/PUT /groups/1/cycles/1/products/1.json
  #def update
  # @groups_prossumer = GroupsProssumer.find(params[:id])

  #if @groups_prossumer.update(groups_prossumer_params)
  #  head :no_content
  #else
  #  render json: @groups_prossumer.errors, status: :unprocessable_entity
  #end
  #end

  # DELETE /groups/1/cycles/1/products/1
  # DELETE /groups/1/cycles/1/products/1.json
  #def destroy
  #  @groups_prossumer.destroy

  #  head :no_content
  #end


end
