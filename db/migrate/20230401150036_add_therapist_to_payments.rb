class AddTherapistToPayments < ActiveRecord::Migration[7.0]
  def change
    add_reference :payments, :therapist, null: false, foreign_key: true
  end
end
