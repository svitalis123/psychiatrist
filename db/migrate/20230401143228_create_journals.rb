class CreateJournals < ActiveRecord::Migration[7.0]
  def change
    create_table :journals do |t|
      t.string :title
      t.string :content
      t.string :url

      t.timestamps
    end
  end
end
