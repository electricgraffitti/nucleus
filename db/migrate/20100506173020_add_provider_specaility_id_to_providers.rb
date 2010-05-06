class AddProviderSpecailityIdToProviders < ActiveRecord::Migration
  def self.up
    add_column :providers, :provider_speciality_id, :integer
  end

  def self.down
    remove_column :providers, :provider_speciality_id
  end
end
