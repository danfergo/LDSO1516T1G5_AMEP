class AddWeekLocation < ActiveRecord::Migration
  def change
    change_table :weeks do |t|
      t.string :location
    end
  end
end
