class AddTherapistToCasenotes < ActiveRecord::Migration[7.0]
  def change
    add_reference :casenotes, :therapist, null: false, foreign_key: true
  end
end
