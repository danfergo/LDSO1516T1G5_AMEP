class AddConfirmHash < ActiveRecord::Migration
  def change
    change_table :prossumers do |t|
      t.string :confirm_hash
    end
  end
end
