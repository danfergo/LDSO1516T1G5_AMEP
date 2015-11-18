class CreateCycles < ActiveRecord::Migration
  def change
    create_table :cycles do |t|
      t.datetime :start
      t.datetime :end
      t.belongs_to :group, index: true

      t.timestamps null: false
    end
  end
end