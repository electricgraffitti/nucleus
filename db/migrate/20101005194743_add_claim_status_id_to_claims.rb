class AddClaimStatusIdToClaims < ActiveRecord::Migration
  def self.up
    add_column :claims, :claim_status_id, :integer
  end

  def self.down
    remove_column :claims, :claim_status_id
  end
end
