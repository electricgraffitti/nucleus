class AddFirstNameToProvider < ActiveRecord::Migration
  def self.up
    add_column :providers, :first_name, :string
    add_column :providers, :last_name, :string
  end

  def self.down
    remove_column :providers, :last_name
    remove_column :providers, :first_name
  end
end
