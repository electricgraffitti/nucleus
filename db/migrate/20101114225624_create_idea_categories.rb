class CreateIdeaCategories < ActiveRecord::Migration
  def self.up
    create_table :idea_categories do |t|
      t.string :idea_type

      t.timestamps
    end
    IdeaCategory.create(:idea_type => "New Feature")
    IdeaCategory.create(:idea_type => "Bug Report")
    IdeaCategory.create(:idea_type => "Product Enhancment")
  end

  def self.down
    drop_table :idea_categories
  end
end
