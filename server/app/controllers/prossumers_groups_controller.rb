class ProssumersGroupsController < ApplicationController
  before_filter :is_authenticated

  # GET /groups
  # GET /groups.json
  def index
    @groupsIds = GroupsProssumer.where(prossumer_id: params[:prossumer_id]).pluck(:group_id)
    @groups = Group.where(id: @groups)
    render json: @groups
  end
end


