class StatsController < ApplicationController

  # GET /stats
  # GET /stats.json
  def index
    cycles = Cycle.where(group_id: params[:group_id]).where('end_time < ?', Time.now)

    result = []
    cycles.each do |cycle|
      sumstocks = 0
      sumorders = 0
      cycle.weeks.each do |week|
        week.stocks.each do |stock|
          sumstocks += stock.quantity
          stock.orders.each do |order|
            sumorders += order.quantity
          end
        end
      end
      tempcycle = cycle.as_json(only: [:id,:start_time])
      tempcycle.merge!({sumstocks: sumstocks})
      tempcycle.merge!({sumorders: sumorders})
      result << tempcycle
    end




    render json: result
  end
end
