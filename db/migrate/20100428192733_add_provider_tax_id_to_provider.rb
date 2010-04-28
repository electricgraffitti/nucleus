class AddProviderTaxIdToProvider < ActiveRecord::Migration
  def self.up
    add_column :providers, :provider_tax_id, :integer
  end

  def self.down
    remove_column :providers, :provider_tax_id
  end
end
