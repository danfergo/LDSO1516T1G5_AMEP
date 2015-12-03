class ProductCategoriesController < ApplicationController
  before_action :set_product_category, only: [:show, :update, :destroy]

  # GET /product_categories
  # GET /product_categories.json
  def index
    @product_categories = ProductCategory.all

    render json: @product_categories
  end

  # GET /product_categories/1
  # GET /product_categories/1.json
  def show
    render json: @product_category
  end

  # POST /product_categories
  # POST /product_categories.json
  def create
    @product_category = ProductCategory.new(product_category_params)

    if @product_category.save
      render json: @product_category, status: :created, location: @product_category
    else
      render json: @product_category.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /product_categories/1
  # PATCH/PUT /product_categories/1.json
  def update
    @product_category = ProductCategory.find(params[:id])

    if @product_category.update(product_category_params)
      head :no_content
    else
      render json: @product_category.errors, status: :unprocessable_entity
    end
  end

  # DELETE /product_categories/1
  # DELETE /product_categories/1.json
  def destroy
    @product_category.destroy

    head :no_content
  end

  private

    def set_product_category
      @product_category = ProductCategory.find(params[:id])
    end

    def product_category_params
      params[:product_category]
    end
end
