class AddScoreToProvider < ActiveRecord::Migration
  def self.up
    add_column :providers, :provider_score, :integer
  end

  def self.down
    remove_column :providers, :provider_score
  end
end
