class Stock < ActiveRecord::Base
  belongs_to :week
  belongs_to :product
  has_many :orders
  has_many :prossumers, through: :orders
end
