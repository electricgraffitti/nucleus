class CreateClientSessions < ActiveRecord::Migration
  def self.up
    create_table :client_sessions do |t|

      t.timestamps
    end
  end

  def self.down
    drop_table :client_sessions
  end
end
