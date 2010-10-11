class DashboardWidget < ActiveRecord::Base
  
  has_many :widget_views
  has_many :clients, :through => :widget_views
  
  # named scopes
  named_scope :widget_type, lambda {|widget_type| {:conditions => ["page = ?", widget_type]}}
  
end
