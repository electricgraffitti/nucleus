require 'test_helper'

class TutorialTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end

# == Schema Information
#
# Table name: tutorials
#
#  id         :integer(4)      not null, primary key
#  title      :string(255)
#  content    :text
#  page_id    :integer(4)
#  created_at :datetime
#  updated_at :datetime
#

