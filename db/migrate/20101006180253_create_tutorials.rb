class CreateTutorials < ActiveRecord::Migration
  def self.up
    create_table :tutorials do |t|
      t.string :title
      t.text :content
      t.integer :page_id

      t.timestamps
    end
  end

  def self.down
    drop_table :tutorials
  end
end
