class CreateProviders < ActiveRecord::Migration
  def self.up
    create_table :providers do |t|
      t.string :name
      t.integer :tin
      t.string :group_name
      t.integer :state_id
      t.timestamps
    end
  end

  def self.down
    drop_table :providers
  end
end
