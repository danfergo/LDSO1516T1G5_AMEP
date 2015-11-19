class AddPriceProducts < ActiveRecord::Migration
  def change
    change_table :products do |t|
        t.float :ecos
        t.float :euros
    end
  end
end
