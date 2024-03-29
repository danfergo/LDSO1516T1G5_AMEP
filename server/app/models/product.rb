class Product < ActiveRecord::Base
  belongs_to :prossumer
  has_many :product_auths
  has_many :groups, through: :product_auths
  has_many :stocks
  has_many :weeks, through: :stocks
  belongs_to :product_category

  def weeks_where_cycle_id(cycle_id)
    Week.where({cycle_id: cycle_id}).as_json(product_id: self.id)
  end

  def as_json(options={})
    json = super(options)
    if (options[:cycle_id])
      json['weeks'] = weeks_where_cycle_id(options[:cycle_id])
    end
    if( File.exist?(Rails.root.join('public', 'product_prev', "#{self.id}")))
      json[:has_prev] = true
    else
      json[:has_prev] = false
    end
    json
  end

end
