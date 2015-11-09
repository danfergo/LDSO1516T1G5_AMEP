class ProssumerHasProductsFix < ActiveRecord::Migration
  def change

    # oops, this was useless. rails does not insert foreign keys in the database.
    remove_column :products, :prossumer_id

    change_table :products do |t|
      t.references :prossumer
    end
  end
end
