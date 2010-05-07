class CreateProviderStats < ActiveRecord::Migration
  def self.up
    create_table :provider_stats do |t|
      t.integer :final_line_count
      t.integer :total_line_count
      t.integer :final_procedure_count
      t.integer :total_procedure_count
      t.integer :final_patient_count
      t.integer :total_patient_count
      t.integer :final_claim_count
      t.integer :total_claim_count
      t.integer :final_savings_count
      t.integer :total_savings_count
      t.integer :final_billed_count
      t.integer :total_billed_count
      t.integer :provider_id

      t.timestamps
    end
  end

  def self.down
    drop_table :provider_stats
  end
end
