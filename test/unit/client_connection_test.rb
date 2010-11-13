require 'test_helper'

class ClientConnectionTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end

# == Schema Information
#
# Table name: client_connections
#
#  id              :integer(4)      not null, primary key
#  client_id       :integer(4)
#  follower_count  :integer(4)
#  following_count :integer(4)
#  group_count     :integer(4)
#  created_at      :datetime
#  updated_at      :datetime
#

