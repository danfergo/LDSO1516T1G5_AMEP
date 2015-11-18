class CreateStocks < ActiveRecord::Migration
  def change
    create_table :stocks do |t|
      t.integer :quantity
      t.float :unit_price_euros
      t.float :unit_price_ecos
      t.belongs_to :week, index: true
      t.belongs_to :product, index: true

      t.timestamps null: false
    end
  end
end
