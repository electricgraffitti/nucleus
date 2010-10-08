class CreateWidgetViews < ActiveRecord::Migration
  def self.up
    create_table :widget_views do |t|
      t.integer :client_id
      t.integer :dashboard_widget_id
      t.boolean :active

      t.timestamps
    end
  end

  def self.down
    drop_table :widget_views
  end
end
