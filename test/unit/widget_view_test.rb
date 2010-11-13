require 'test_helper'

class WidgetViewTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end

# == Schema Information
#
# Table name: widget_views
#
#  id                  :integer(4)      not null, primary key
#  client_id           :integer(4)
#  dashboard_widget_id :integer(4)
#  active              :boolean(1)
#  created_at          :datetime
#  updated_at          :datetime
#

