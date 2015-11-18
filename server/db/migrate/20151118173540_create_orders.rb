class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.integer :quantity
      t.belongs_to :prossumer, index: true
      t.belongs_to :stock, index: true

      t.timestamps null: false
    end
  end
end
