class Product < ActiveRecord::Base
  belongs_to :prossumer
  has_many :product_auths
  has_many :groups, through: :product_auths
  has_many :stocks
  has_many :weeks, through: :stocks
  belongs_to :product_category
<<<<<<< HEAD
<<<<<<< HEAD
=======
=======
>>>>>>> master

  def weeks_where_cycle_id(cycle_id)
    Week.where({cycle_id: cycle_id}).as_json(product_id: self.id)
  end

  def as_json(options={})
    json = super(options)
    if (options[:cycle_id])
      json['weeks'] = weeks_where_cycle_id(options[:cycle_id])
    end
    json
  end
<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
end
