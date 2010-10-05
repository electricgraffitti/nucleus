# == Schema Information
#
# Table name: claim_statuses
#
#  id           :integer(4)      not null, primary key
#  claim_status :string(255)
#  created_at   :datetime
#  updated_at   :datetime
#

class ClaimStatus < ActiveRecord::Base
  
  has_many :claims
  
end
