class CreateClient < ActiveRecord::Migration[7.0]
  def change
    create_table :clients do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :condition
      t.string :bio, default: 'client'
      t.decimal :age

      t.timestamps
    end
  end
end
