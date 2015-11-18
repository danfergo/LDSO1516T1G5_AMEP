class CreateProductAuths < ActiveRecord::Migration
  def change
    create_table :product_auths do |t|
      t.integer :state
      t.belongs_to :group
      t.belongs_to :product

      t.timestamps null: false
    end
  end
end
