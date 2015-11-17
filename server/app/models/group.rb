class Group < ActiveRecord::Base

  has_many :groups_prossumers
  has_many :prossumers, :through => :groups_prossumers

  validates :name, uniqueness: true

end
