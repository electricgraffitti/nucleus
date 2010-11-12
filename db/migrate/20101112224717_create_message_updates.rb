class CreateMessageUpdates < ActiveRecord::Migration
  def self.up
    create_table :message_updates do |t|
      t.integer :message_id
      t.integer :client_id
      t.text :content

      t.timestamps
    end
  end

  def self.down
    drop_table :message_updates
  end
end
