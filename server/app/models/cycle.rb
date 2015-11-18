class Cycle < ActiveRecord::Base
  belongs_to :group
  has_many :weeks
end
