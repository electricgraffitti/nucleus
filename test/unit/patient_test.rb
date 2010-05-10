require 'test_helper'

class PatientTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end

# == Schema Information
#
# Table name: patients
#
#  id         :integer(4)      not null, primary key
#  first_name :string(255)
#  last_name  :string(255)
#  ssn        :string(255)
#  sequence   :string(255)
#  created_at :datetime
#  updated_at :datetime
#

