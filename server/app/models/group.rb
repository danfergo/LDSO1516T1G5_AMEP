class Group < ActiveRecord::Base
<<<<<<< HEAD
<<<<<<< HEAD
  #has_many
  belongs_to :city
=======
=======
>>>>>>> master

  has_many :groups_prossumers
  has_many :prossumers, :through => :groups_prossumers

  has_many :product_auths
  has_many :products, through: :product_auths

  validates :name, uniqueness: true

<<<<<<< HEAD
>>>>>>> master
=======
>>>>>>> master
end
