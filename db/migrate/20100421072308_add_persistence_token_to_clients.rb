class AddPersistenceTokenToClients < ActiveRecord::Migration
  def self.up
    add_column :clients, :persistence_token, :string
  end

  def self.down
    remove_column :clients, :persistence_token
  end
end
