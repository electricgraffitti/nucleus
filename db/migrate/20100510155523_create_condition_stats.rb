class CreateConditionStats < ActiveRecord::Migration
  def self.up
    create_table :condition_stats do |t|
      t.integer :condition_count
      t.integer :condition_code_count
      t.integer :conditions_per_code
      t.integer :repair_count
      t.integer :repair_percentage
      t.integer :condition_id
      t.timestamps
    end
  end

  def self.down
    drop_table :condition_stats
  end
end
