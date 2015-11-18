class Order < ActiveRecord::Base
  belongs_to :prossumer
  belongs_to :stock
end
