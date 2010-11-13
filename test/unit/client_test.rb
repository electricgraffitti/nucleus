require 'test_helper'

class ClientTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end


# == Schema Information
#
# Table name: clients
#
#  id                :integer(4)      not null, primary key
#  first_name        :string(255)
#  last_name         :string(255)
#  username          :string(255)
#  email             :string(255)
#  crypted_password  :string(255)
#  password_salt     :string(255)
#  created_at        :datetime
#  updated_at        :datetime
#  persistence_token :string(255)
#  api_key           :string(255)
#

