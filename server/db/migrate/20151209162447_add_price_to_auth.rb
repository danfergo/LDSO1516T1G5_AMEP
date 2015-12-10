class AddPriceToAuth < ActiveRecord::Migration
  def change
    remove_column :products, :ecos, :float
    remove_column :products, :euros, :float

    change_table :product_auths do |t|
      t.float :ecos
      t.float :euros
    end

  end
end
