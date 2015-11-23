class AddCitytoGroups < ActiveRecord::Migration
  def change
    add_reference :groups, :cities, index: true
  end
end
