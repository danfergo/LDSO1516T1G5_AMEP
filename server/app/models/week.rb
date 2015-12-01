class Week < ActiveRecord::Base
  belongs_to :cycle

  def purchases_of(prossumer_id)
    @stockids = Stock.where(week_id: id).ids
    @orders = Order.where(prossumer_id: prossumer_id).where(stock_id: @stockids)
    @orders.as_json(
               include: [:stock => {
                include: [:product => {
                  include: [:prossumer => {
                    except:  [:encrypted_password, :salt, :confirm_hash]
                  }]
                }]
               }
               ])
  end

  def sales_of(prossumer_id)

  end


  def as_json(options={})
    json = super(options)
    if (options[:include_sales_and_purchases_of])
      json['purchases'] = purchases_of(options[:include_sales_and_purchases_of])
      json['sales'] = sales_of(options[:include_sales_and_purchases_of])
    end
    json
  end
end
