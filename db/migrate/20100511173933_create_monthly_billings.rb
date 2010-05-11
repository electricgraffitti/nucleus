class CreateMonthlyBillings < ActiveRecord::Migration
  def self.up
    create_table :monthly_billings do |t|
      t.integer :condition_id
      t.date :month
      t.float :amount

      t.timestamps
    end
  end

  def self.down
    drop_table :monthly_billings
  end
end
