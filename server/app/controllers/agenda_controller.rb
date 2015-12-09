class AgendaController < ApplicationController

  def index
    @groupsIds = Prossumer.find(params[:prossumer_id]).groups.ids
    @cyclesIds = Cycle.where(:group_id => @groupsIds).where('end_time >= ?', Time.now).where('start_time <= ?', Time.now)
    @weeks = Week.where(cycle_id: @cyclesIds).where('delivery_date > ?', Time.now).order(delivery_date: :asc)

    render json: @weeks.as_json(
        include_sales_and_purchases_of: session[:prossumer_id],
        include: [
            cycle: {
                include: [:group]
            }

         ])
  end

end
