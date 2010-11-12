class CreateClientConnections < ActiveRecord::Migration
  def self.up
    create_table :client_connections do |t|
      t.integer :client_id
      t.integer :follower_count
      t.integer :following_count
      t.integer :group_count

      t.timestamps
    end
  end

  def self.down
    drop_table :client_connections
  end
end
