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
#  claim_status_id     :integer(4)
#

class Claim < ActiveRecord::Base
  
  belongs_to :provider
  belongs_to :patient
  belongs_to :product
  belongs_to :claim_status
  
end




