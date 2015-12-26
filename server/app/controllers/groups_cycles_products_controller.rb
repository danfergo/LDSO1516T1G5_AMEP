class GroupsCyclesProductsController < ApplicationController
  before_filter :is_authenticated, except: [:index]

  # GET /groups/1/cycles/1/products
  # GET /groups/1/cycles/1/products.json
  def index
    weeksIds = Week.where({cycle_id: params[:cycle_id]}).ids
    stocksProductIds = Stock.where({week_id: weeksIds}).pluck(:product_id)
    render json: Product.where(id: stocksProductIds).as_json({
                                                                 cycle_id: params[:cycle_id],
                                                                 include: {
                                                                     prossumer: {
                                                                         except: [:encrypted_password, :salt, :confirm_hash]
                                                                     },
                                                                     product_category: {}
                                                                 }
                                                             })
  end

  #GET /groups/1/cycles/1/products/1
  #GET /groups/1/cycles/1/products/1.json
  def show
    # if is_my_resource(params[:id])
    render json: Product.find(params[:id]).as_json({
                                                       cycle_id: params[:cycle_id],
                                                       include: {
                                                           prossumer: {
                                                               except: [:encrypted_password, :salt, :confirm_hash]
                                                           },
                                                           product_category: {}
                                                       }
                                                   })
  end

  # POST /groups/1/cycles/1/products
  # POST /groups/1/cycles/1/products.json
  #  def create

  #  end

  # PATCH/PUT /groups/1/cycles/1/products/1
  # PATCH/PUT /groups/1/cycles/1/products/1.json
  def update
    params.require(:id)
    params.require(:cycle_id)

    @weeksIds = Week.where({cycle_id: params[:cycle_id]}).ids
    Stock.where({week_id: @weeksIds, product_id: params[:id]}).destroy_all

    @product_auth = ProductAuth.where({product_id: params[:id], group_id: params[:group_id]}).first

    params[:weeks].each do |week|
      puts @product

      stock_params = ActionController::Parameters.new(week_id: week[:id], product_id: params[:id], quantity: week[:quantity],
                                                      unit_price_euros: @product_auth[:euros], unit_price_ecos: @product_auth[:ecos])

      stock = Stock.new(stock_params.permit(:week_id, :product_id, :quantity, :unit_price_euros, :unit_price_ecos))

      if !stock.save
        Stock.where({week_id: @weeksIds, product_id: params[:id]}).destroy_all
        render json: @groups_prossumer.errors, status: :unprocessable_entity
        return
      end
    end
    show
  end

  # DELETE /groups/1/cycles/1/products/1
  # DELETE /groups/1/cycles/1/products/1.json
  def destroy
    @weeksIds = Week.where({cycle_id: params[:cycle_id]}).ids
    Stock.where({week_id: @weeksIds, product_id: params[:id]}).destroy_all
    index
  end
end
