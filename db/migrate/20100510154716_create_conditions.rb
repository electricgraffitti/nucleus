class CreateConditions < ActiveRecord::Migration
  def self.up
    create_table :conditions do |t|
      t.integer :provider_id
      t.integer :condition_type_id
      t.datetime :trigger_date
      t.integer :condition_rank
      t.integer :total_provider
      t.integer :condition_score
      t.integer :condition_billed
      t.integer :expected_billed
      t.integer :condition_paid
      t.string  :hci_action
      t.integer :speciality_average_count
      t.integer :speciality_average_percentage
      t.integer :speciality_average_billed
      t.integer :speciality_average_paid
      t.timestamps
    end
  end

  def self.down
    drop_table :conditions
  end
end
