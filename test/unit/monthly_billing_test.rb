# == Schema Information
#
# Table name: monthly_billings
#
#  id           :integer(4)      not null, primary key
#  condition_id :integer(4)
#  month        :date
#  amount       :float
#  created_at   :datetime
#  updated_at   :datetime
#

require 'test_helper'

class MonthlyBillingTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end
