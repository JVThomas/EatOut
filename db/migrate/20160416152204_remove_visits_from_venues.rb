class RemoveVisitsFromVenues < ActiveRecord::Migration
  def change
    remove_column :venues, :visits, :integer
  end
end
