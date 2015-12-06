class Week < ActiveRecord::Base
  belongs_to :cycle
  has_many :stocks
  has_many :products, :through => :stocks

  def purchases_of(prossumer_id)
    @stockids = Stock.where(week_id: id).ids
    @orders = Order.where(prossumer_id: prossumer_id).where(stock_id: @stockids)
    @orders.as_json(
        include: [:stock => {
            include: [:product => {
                include: [:prossumer => {
                    except: [:encrypted_password, :salt, :confirm_hash]
                }]
            }]
        }
        ])
  end

  def sales_of(prossumer_id)

    @productids = Product.where(prossumer_id: prossumer_id).ids
    @stockids = Stock.where(week_id: id).where(product_id: @productids).ids
    @orders = Order.where(stock_id: @stockids)
    @orders.as_json(
        :include => {stock: {include: :product},
                     prossumer: {except: [:encrypted_password, :salt, :confirm_hash]}
        }
    )

  end


  def as_json(options={})
    json = super(options)
    if (options[:include_sales_and_purchases_of])
      json['purchases'] = purchases_of(options[:include_sales_and_purchases_of])
      json['sales'] = sales_of(options[:include_sales_and_purchases_of])
    elsif (options[:product_id])
      json['stock'] = Stock.where({product_id: options[:product_id], week_id: self.id}).first.as_json
    end
    json
  end
end
