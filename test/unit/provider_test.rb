require 'test_helper'

class ProviderTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end

# == Schema Information
#
# Table name: providers
#
#  id                     :integer(4)      not null, primary key
#  first_name             :string(255)
#  last_name              :string(255)
#  tin                    :integer(4)
#  state_id               :integer(4)
#  created_at             :datetime
#  updated_at             :datetime
#  sequence_number        :string(255)
#  provider_group_id      :integer(4)
#  provider_tax_id        :integer(4)
#  provider_score         :integer(4)
#  provider_speciality_id :integer(4)
#

