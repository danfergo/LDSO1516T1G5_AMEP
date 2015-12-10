class ProductsController < ApplicationController
  before_filter :is_authenticated
  before_action :set_prossumer, only: [:create]
  before_action :set_product, only: [:show, :update, :destroy]

  # -----------------------------------------
  #           PROSSUMER PRODUCTS
  # -----------------------------------------

  # GET /products
  # GET /products.json
  def index
    puts ">>>>>>>>>>>> #{params[:prossumer_id]} "

    if is_my_resource(params[:prossumer_id])
      @products = Product.where(prossumer_id: params[:prossumer_id])
      render json: @products
    end
  end

  # GET /products/1
  # GET /products/1.json
  def show
    if is_my_resource(params[:prossumer_id])
      render json: @product
    end
  end

  # POST /products
  # POST /products.json
  def create
    if is_my_resource(params[:prossumer_id])
      @product = Product.new(product_params)

      if @product.save
        render json: @product, status: :created
      else
        render json: @product.errors, status: :unprocessable_entity
      end
    end
  end

  # PATCH/PUT /products/1
  # PATCH/PUT /products/1.json
  #def update
  #  @product = Product.find(params[:id])
  #
  #  if @product.update(product_params)
  #    head :no_content
  #  else
  #    render json: @product.errors, status: :unprocessable_entity
  #  end
  #end

  # DELETE /products/1
  # DELETE /products/1.json
 # def destroy
 #   @product.destroy

  #  head :no_content
  #end

  private
    def set_prossumer
      params[:prossumer_id] = session[:prossumer_id]
    end

    def set_product
      @product = Product.find(params[:prossumer_id])
    end

    def product_params
      params.require(:title)
      params.require(:description)
      params.require(:unit)
      params.require(:prossumer_id) # double check
      params.require(:product_category_id)
      params.permit(:title,:description,:unit, :prossumer_id, :product_category_id)
    end
end
