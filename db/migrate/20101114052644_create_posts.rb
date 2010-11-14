class CreatePosts < ActiveRecord::Migration
  def self.up
    create_table :posts do |t|
      t.integer :client_id
      t.text :post

      t.timestamps
    end
  end

  def self.down
    drop_table :posts
  end
end
