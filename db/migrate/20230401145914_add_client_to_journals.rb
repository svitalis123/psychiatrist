class AddClientToJournals < ActiveRecord::Migration[7.0]
  def change
    add_reference :journals, :client, null: false, foreign_key: true
  end
end
