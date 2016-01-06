class AgendaController < ApplicationController


  def index
    groupsIds = Prossumer.find(params[:prossumer_id]).groups.ids
    cycles = Cycle.where(:group_id => groupsIds).where('end_time >= ?', Time.now).where('start_time <= ?', Time.now + 15.days)
    weeks = Week.where(cycle_id: cycles).where('delivery_date > ?', Time.now).order(delivery_date: :asc)


    render json: weeks.as_json(
        include_sales_and_purchases_of: session[:prossumer_id],
        include: {
            cycle: {include: [:group], include_balance: session[:prossumer_id]}
        }
    )
  end


end
