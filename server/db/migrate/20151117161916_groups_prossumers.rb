class GroupsProssumers < ActiveRecord::Migration
  def change
    create_table :groups_prossumers do |t|
      t.belongs_to :group
      t.belongs_to :prossumer
      t.boolean :is_coordinator
      t.integer :state
    end
  end
end
