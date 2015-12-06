class Product < ActiveRecord::Base
  belongs_to :prossumer
  has_many :product_auths
  has_many :groups, through: :product_auths
  has_many :stocks
  belongs_to :product_category
end
