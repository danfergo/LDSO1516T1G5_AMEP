class GroupsProssumers < ActiveRecord::Migration
  def change
    create_table :groups_prossumers, id: false do |t|
      t.belongs_to :group, index: true
      t.belongs_to :prossumer, index: true
      t.boolean :is_coordinator
      t.integer :state
    end
  end
end
