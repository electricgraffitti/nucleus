class CreateProcedures < ActiveRecord::Migration
  def self.up
    create_table :procedures do |t|
      t.integer :procedure_code
      t.string :procedure_description

      t.timestamps
    end
  end

  def self.down
    drop_table :procedures
  end
end
