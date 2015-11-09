class UpdateProssumerAddPhone < ActiveRecord::Migration
  def change
    change_table :prossumers do |t|
      t.string :phone
    end
  end
end

