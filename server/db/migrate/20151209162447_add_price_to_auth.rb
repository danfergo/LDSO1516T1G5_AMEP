class AddPriceToAuth < ActiveRecord::Migration
  def change
    remove_column :products, :ecos
    remove_column :products, :euros

    change_table :product_auths do |t|
      t.float :ecos
      t.float :euros
    end

  end
end
