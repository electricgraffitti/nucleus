class DashboardWidget < ActiveRecord::Base
  
  has_many :widget_views
  has_many :clients, :through => :widget_views
  
  # named scopes
  named_scope :widget_type, lambda {|widget_type| {:conditions => ["page = ?", widget_type]}}
  
end

# == Schema Information
#
# Table name: dashboard_widgets
#
#  id         :integer(4)      not null, primary key
#  name       :string(255)
#  page       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

