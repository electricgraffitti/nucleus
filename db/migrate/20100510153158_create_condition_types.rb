class CreateConditionTypes < ActiveRecord::Migration
  def self.up
    create_table :condition_types do |t|
      t.string :condition_type
      t.string :condition_code
      t.timestamps
    end
    ConditionType.create(:condition_type => "Billing Spike by Received Date", :condition_code => "SBRD")
    ConditionType.create(:condition_type => "Flap to Repair Ratio", :condition_code => "SFRO")
    ConditionType.create(:condition_type => "Upcoding of Lesion Destruction", :condition_code => "SDES")
  end

  def self.down
    drop_table :condition_types
  end
end
