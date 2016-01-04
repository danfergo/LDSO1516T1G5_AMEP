class GroupsProductsAuthsController < ApplicationController
  #
  # Product Auth state legend:
  #
  # 0 - canceled
  # 1 - pending
  # 2 - accepted
  #

  before_filter :is_authenticated, except: [:index]

  # GET /groups/1/products_auths
  # GET /groups/1/products_auths.json
  def index
    render json: ProductAuth.where({group_id: params[:group_id]})
  end

  # GET /groups/1/products_auths/1
  # GET /groups/1/products_auths/1.json
  def show
    # is_my_resource(params[:id])

    # prossumerProductsIds = Prossumer.find(params[:id]).products.ids
    render json: ProductAuth.where({product_id: params[:id], group_id: params[:group_id]}).first.as_json(:include => :product)
  end

  # POST /groups/1/products_auths
  # POST /groups/1/products_auths.json
  def create

    params[:state] = 1;
    @product_auth = ProductAuth.new(params.permit(:state, :product_id, :group_id, :ecos, :euros));
    if @product_auth.save
      render json: @product_auth
    else
      render json: @product_auth.errors
    end
  end

  # PATCH/PUT /groups/1/products_auths/1
  # PATCH/PUT /groups/1/products_auths/1.json
  def update
    @product_auth = ProductAuth.where({product_id: params[:id], group_id: params[:group_id]}).first

    if @product_auth.update(params.permit(:state))
      render json: @product_auth
    else
      render json: @product_auth.errors
    end
  end

  # DELETE /groups/1/products_auths/1
  # DELETE /groups/1/products_auths/1.json
  #def destroy
  #  @groups_prossumer.destroy

  #  head :no_content
  #end

  private

  def groups_one_prossumer_auths_params
    params.require(:group_id)
  end
end
