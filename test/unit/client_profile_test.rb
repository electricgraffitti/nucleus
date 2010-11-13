require 'test_helper'

class ClientProfileTest < ActiveSupport::TestCase
  # Replace this with your real tests.
  test "the truth" do
    assert true
  end
end

# == Schema Information
#
# Table name: client_profiles
#
#  id                  :integer(4)      not null, primary key
#  client_id           :integer(4)
#  company             :string(255)
#  title               :string(255)
#  department          :string(255)
#  email               :string(255)
#  phone               :string(255)
#  created_at          :datetime
#  updated_at          :datetime
#  avatar_file_name    :string(255)
#  avatar_content_type :string(255)
#  avatar_file_size    :integer(4)
#  avatar_updated_at   :datetime
#

