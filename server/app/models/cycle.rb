class Cycle < ActiveRecord::Base
  belongs_to :group
  has_many :weeks


  def balance(prossumer_id)
    {
        purchases: purchases_balance(prossumer_id),
        sales: sales_balance(prossumer_id)
    }
  end

  def purchases_balance(prossumer_id)

    purchasesEuros = 0
    purchasesEcos = 0

    weekids = Week.where(cycle_id: id).ids
    stockids = Stock.where(week_id: weekids).ids
    orders = Order.where(prossumer_id: prossumer_id).where(stock_id: stockids)

    orders.each do |order|
      purchasesEuros += order.quantity * order.stock.unit_price_euros
      purchasesEcos += order.quantity * order.stock.unit_price_ecos
    end

    {euros: purchasesEuros, ecos: purchasesEcos}

  end

  def sales_balance(prossumer_id)

    salesEuros = 0
    salesEcos = 0

    productids = Product.where(prossumer_id: prossumer_id).ids
    weekids = Week.where(cycle_id: id).ids
    stockids = Stock.where(week_id: weekids).where(product_id: productids).ids
    orders = Order.where(stock_id: stockids)

    orders.each do |order|
      salesEuros += order.quantity * order.stock.unit_price_euros
      salesEcos += order.quantity * order.stock.unit_price_ecos
    end

    {euros: salesEuros, ecos: salesEcos}

  end

  #as_json utilizado fora da classe...
  def serializable_hash(options={})
    json = super(options)
    if (options[:include_balance])
      json['balance'] = balance(options[:include_balance])
    end
    json
  end

end



