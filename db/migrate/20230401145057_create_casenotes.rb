class CreateCasenotes < ActiveRecord::Migration[7.0]
  def change
    create_table :casenotes do |t|
      t.string :content
      t.time :sessiondatetime, default: -> { 'CURRENT_TIMESTAMP' }

      t.timestamps
    end
  end
end
