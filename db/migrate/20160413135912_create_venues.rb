class CreateVenues < ActiveRecord::Migration
  def change
    create_table :venues do |t|
      t.string :name
      t.string :location
      t.integer :visits
      t.string :contact

      t.timestamps null: false
    end
  end
end
