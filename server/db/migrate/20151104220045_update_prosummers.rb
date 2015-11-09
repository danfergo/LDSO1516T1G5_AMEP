class UpdateProsummers < ActiveRecord::Migration
  def change
    change_table :prossumers do |t|
      t.rename :password, :encrypted_password
      t.string :salt
    end
  end
end
