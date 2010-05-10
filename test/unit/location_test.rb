require 'test_helper'

class LocationTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end

# == Schema Information
#
# Table name: locations
#
#  id          :integer(4)      not null, primary key
#  name        :string(255)
#  address     :text
#  city        :string(255)
#  state_id    :integer(4)
#  zipcode     :string(255)
#  provider_id :integer(4)
#  created_at  :datetime
#  updated_at  :datetime
#  latitude    :float
#  longitude   :float
#

