class AddSuspectLocationToLocations < ActiveRecord::Migration
  def self.up
    add_column :locations, :suspect_location, :boolean
  end

  def self.down
    remove_column :locations, :suspect_location
  end
end
