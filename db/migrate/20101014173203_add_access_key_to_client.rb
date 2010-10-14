 class AddAccessKeyToClient < ActiveRecord::Migration
  def self.up
    add_column :clients, :api_key, :string
  end

  def self.down
    remove_column :clients, :api_key
  end
end
