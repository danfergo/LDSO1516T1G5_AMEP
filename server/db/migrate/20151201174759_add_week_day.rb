class AddWeekDay < ActiveRecord::Migration
  def change
    change_table :weeks do |t|
      t.datetime :delivery_date
    end
    change_table :cycles do |t|
      t.string :title
    end
  end
end
