class GroupsProductsAuthsController < ApplicationController
  before_filter :is_authenticated

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
    @product_auth_params = ActionController::Parameters.new(state: 1,
                                                             product_id: params[:id],
                                                             group_id: params[:group_id],
                                                             ecos: params[:ecos],
                                                             euros: params[:euros]
                                                            );
    @product_auth = ProductAuth.new(@product_auth_params.permit(:state, :product_id, :group_id, :ecos, :euros));
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
    if(!@product_auth)
      return create
    end

    @product_auth_params = ActionController::Parameters.new(state: 1, ecos: params[:ecos], euros: params[:euros]);

    if @product_auth.update(@product_auth_params.permit(:state, :ecos, :euros))
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
