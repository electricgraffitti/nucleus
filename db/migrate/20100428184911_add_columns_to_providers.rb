class AddColumnsToProviders < ActiveRecord::Migration
  def self.up
    add_column :providers, :sequence_number, :string
    add_column :providers, :provider_group_id, :integer
    remove_column :providers, :name
    remove_column :providers, :group_name
  end

  def self.down
    add_column :providers, :group_name, :string
    add_column :providers, :name, :string
    remove_column :providers, :provider_group_id
    remove_column :providers, :sequence_number
  end
end
