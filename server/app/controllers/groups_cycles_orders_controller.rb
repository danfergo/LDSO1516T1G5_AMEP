class GroupsCyclesOrdersController < ApplicationController

  before_filter :is_authenticated

  # GET /groups/1/cycles/1/orders
  # GET /groups/1/cycles/1/0orders.json
  def index
    weeksIds = Week.where({cycle_id: params[:cycle_id]}).ids
    stocksIds = Stock.where({week_id: weeksIds}).ids
    render json: Order.where({stock_id: stocksIds})
  end

  # GET /groups/1/cycles/1/orders/1
  # GET /groups/1/cycles/1/orders/1.json
  #def show
    # is_my_resource(params[:id])

    # prossumerProductsIds = Prossumer.find(params[:id]).products.ids
    #render json: ProductAuth.where({product_id: params[:id], group_id: params[:group_id]}).first.as_json(:include => :product)
  #end

  # POST /groups/1/cycles/1/orders
  # POST /groups/1/cycles/1/orders.json
  def create
    order_params[:weeks].each do |t|
      stock = Stock.where({week_id: t[:week_id], product_id: order_params[:product_id] }).first
      #TODO get all orders, check stock, transaction.

      orderParams = ActionController::Parameters.new({stock_id: stock[:id], prossumer_id: params[:prossumer_id], quantity: t[:quantity]})
      order = Order.new(orderParams.permit(:prossumer_id, :stock_id, :quantity))

      if !order.save
        render json: @order.errors
      end
    end
      render json: true
  end



  private

  def order_params
    params.require(:prossumer_id)
    params.require(:product_id)
    params.require(:weeks)
    params[:weeks].each do |t|
      t.require(:week_id)
      t.require(:quantity)
    end
    params
  end
end
