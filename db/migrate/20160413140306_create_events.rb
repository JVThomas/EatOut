class CreateEvents < ActiveRecord::Migration
  def change
    create_table :events do |t|
      t.string :name
      t.string :date
      t.string :time
      t.integer :venue_id
      t.integer :user_id
      t.integer :guests

      t.timestamps null: false
    end
  end
end
