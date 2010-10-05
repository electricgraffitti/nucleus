class CreateClaimStatuses < ActiveRecord::Migration
  def self.up
    create_table :claim_statuses do |t|
      t.string :claim_status

      t.timestamps
    end
  end

  def self.down
    drop_table :claim_statuses
  end
end
