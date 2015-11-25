class Group < ActiveRecord::Base
  #has_many
  belongs_to :city

  has_many :groups_prossumers
  has_many :prossumers, :through => :groups_prossumers

  has_many :product_auths
  has_many :products, through: :product_auths

  validates :name, uniqueness: true


end
