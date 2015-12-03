class CreateProductCategories < ActiveRecord::Migration
  def change
    create_table :product_categories do |t|
      t.string :name
      t.timestamps null: false
    end

    change_table :products do |t|
      t.references :product_category
    end
  end
end
