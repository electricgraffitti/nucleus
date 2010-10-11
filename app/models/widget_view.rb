class WidgetView < ActiveRecord::Base
  
  belongs_to :client
  belongs_to :dashboard_widget
  
end
