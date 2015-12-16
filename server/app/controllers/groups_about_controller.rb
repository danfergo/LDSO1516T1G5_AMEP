class GroupsAboutController < ApplicationController

  # GET /about
  # GET /about.json
  def index

    group = Group.find(params[:group_id])
    iscoord = GroupsProssumer.where(group_id: params[:group_id],prossumer_id: session[:prossumer_id]).first.is_coordinator

    groupusers = group.as_json(
        include: {groups_prossumers: {
                      include: [prossumer: {except: [:encrypted_password, :salt, :confirm_hash,:created_at,:updated_at]}]
        }})

    renderobject = {coordinator: iscoord, group: groupusers}

    render json: renderobject

  end
end
