require 'test_helper'

class ProviderStatTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end

# == Schema Information
#
# Table name: provider_stats
#
#  id                    :integer(4)      not null, primary key
#  final_line_count      :integer(4)
#  total_line_count      :integer(4)
#  final_procedure_count :integer(4)
#  total_procedure_count :integer(4)
#  final_patient_count   :integer(4)
#  total_patient_count   :integer(4)
#  final_claim_count     :integer(4)
#  total_claim_count     :integer(4)
#  final_savings_count   :integer(4)
#  total_savings_count   :integer(4)
#  final_billed_count    :integer(4)
#  total_billed_count    :integer(4)
#  provider_id           :integer(4)
#  created_at            :datetime
#  updated_at            :datetime
#

