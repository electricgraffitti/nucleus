class CreateDashboardWidgets < ActiveRecord::Migration
  def self.up
    create_table :dashboard_widgets do |t|
      t.string :name
      t.string :page

      t.timestamps
    end
  end

  def self.down
    drop_table :dashboard_widgets
  end
end
