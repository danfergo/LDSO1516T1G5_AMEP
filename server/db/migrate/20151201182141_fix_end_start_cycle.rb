class FixEndStartCycle < ActiveRecord::Migration
  def change
    remove_column :cycles, :end, :datetime
    remove_column :cycles, :start, :datetime

    change_table :cycles do |t|
      t.datetime :start_time
      t.datetime :end_time
    end
  end
end
