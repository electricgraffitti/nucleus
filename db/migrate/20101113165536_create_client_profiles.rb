class CreateClientProfiles < ActiveRecord::Migration
  def self.up
    create_table :client_profiles do |t|
      t.integer :client_id
      t.string :company
      t.string :title
      t.string :department
      t.string :email
      t.string :phone

      t.timestamps
    end
  end

  def self.down
    drop_table :client_profiles
  end
end
