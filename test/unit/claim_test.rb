require 'test_helper'

class ClaimTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end

# == Schema Information
#
# Table name: claims
#
#  id                  :integer(4)      not null, primary key
#  provider_id         :integer(4)
#  patient_id          :integer(4)
#  product_id          :integer(4)
#  batch_number        :string(255)
#  sequence_number     :string(255)
#  sequence_sub_number :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#

