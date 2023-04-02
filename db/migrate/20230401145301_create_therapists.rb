class CreateTherapists < ActiveRecord::Migration[7.0]
  def change
    create_table :therapists do |t|
      t.string :firstname
      t.string :lastname
      t.string :email
      t.string :bio, default: "therapist"

      t.timestamps
    end
  end
end
