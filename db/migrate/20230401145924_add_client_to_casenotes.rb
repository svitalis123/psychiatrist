class AddClientToCasenotes < ActiveRecord::Migration[7.0]
  def change
    add_reference :casenotes, :client, null: false, foreign_key: true
  end
end
