class AddStatColumnsToLocation < ActiveRecord::Migration
  def self.up
    add_column :locations, :location_type, :string
    add_column :locations, :total_claims, :integer
    add_column :locations, :total_patients, :integer
    add_column :locations, :total_billed, :integer
    add_column :locations, :total_paid, :integer
  end

  def self.down
    remove_column :locations, :total_paid
    remove_column :locations, :total_billed
    remove_column :locations, :total_patients
    remove_column :locations, :total_claims
    remove_column :locations, :location_type
  end
end
