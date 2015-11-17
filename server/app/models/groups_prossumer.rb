class GroupsProssumer < ActiveRecord::Base
  belongs_to :group
  belongs_to :prossumer
end
