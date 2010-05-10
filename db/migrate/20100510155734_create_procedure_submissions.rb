class CreateProcedureSubmissions < ActiveRecord::Migration
  def self.up
    create_table :procedure_submissions do |t|
      t.integer :condition_id
      t.integer :procedure_id
      t.integer :total_submissions
      t.integer :total_billed
      t.integer :total_paid

      t.timestamps
    end
  end

  def self.down
    drop_table :procedure_submissions
  end
end
