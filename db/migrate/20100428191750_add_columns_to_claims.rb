class AddColumnsToClaims < ActiveRecord::Migration
  def self.up
    add_column :claims, :batch_number, :string
    add_column :claims, :product_id, :integer
    add_column :claims, :sequence_number, :string
    add_column :claims, :sequence_sub_number, :string
    add_column :claims, :patient_id, :integer
    remove_column :claims, :name
  end

  def self.down
    add_column :claims, :name, :string
    remove_column :claims, :patient_id
    remove_column :claims, :sequence_sub_number
    remove_column :claims, :sequence_number
    remove_column :claims, :product_id
    remove_column :claims, :batch_number
  end
end
