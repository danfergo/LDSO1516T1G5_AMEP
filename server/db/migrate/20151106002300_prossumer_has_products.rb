class ProssumerHasProducts < ActiveRecord::Migration
  def change
    change_table :products do |t|
      t.belongs_to :prossumer
    end
  end
end
