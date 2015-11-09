class CreateProssumers < ActiveRecord::Migration
  def change
    create_table :prossumers do |t|
      t.string :name
      t.string :email
      t.string :password
      t.timestamps null: false
    end
  end
end
