require 'test_helper'

class ConditionTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end


# == Schema Information
#
# Table name: conditions
#
#  id                            :integer(4)      not null, primary key
#  provider_id                   :integer(4)
#  condition_type_id             :integer(4)
#  procedure_submissions         :boolean(1)
#  trigger_date                  :datetime
#  condition_rank                :integer(4)
#  total_provider                :integer(4)
#  condition_score               :integer(4)
#  condition_billed              :integer(4)
#  expected_billed               :integer(4)
#  condition_paid                :integer(4)
#  hci_action                    :string(255)
#  speciality_average_count      :integer(4)
#  speciality_average_percentage :integer(4)
#  speciality_average_billed     :integer(4)
#  speciality_average_paid       :integer(4)
#  created_at                    :datetime
#  updated_at                    :datetime
#

