class AddCitytoGroups < ActiveRecord::Migration
  def change
    add_reference :groups, :city, index: true
  end
end
