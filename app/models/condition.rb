# == Schema Information
#
# Table name: conditions
#
#  id                            :integer(4)      not null, primary key
#  provider_id                   :integer(4)
#  condition_type_id             :integer(4)
#  pro_sub                       :boolean(1)
#  trigger_date                  :datetime
#  condition_rank                :integer(4)
#  total_provider                :integer(4)
#  condition_score               :integer(4)
#  condition_billed              :integer(4)
#  expected_billed               :integer(4)
#  condition_paid                :integer(4)
#  hci_action                    :string(255)
#  speciality_average_count      :integer(4)
#  speciality_average_percentage :integer(4)
#  speciality_average_billed     :integer(4)
#  speciality_average_paid       :integer(4)
#  created_at                    :datetime
#  updated_at                    :datetime
#
class Condition < ActiveRecord::Base
  
  belongs_to :provider
  belongs_to :condition_type
  
  has_one :condition_stat
  has_many :procedure_submissions
  has_many :procedures, :through => :procedure_submissions
  has_many :monthly_billings
  
  
  named_scope :billed_listings, :order => "condition_billed DESC"
  
end


# == Schema Information
#
# Table name: conditions
#
#  id                            :integer(4)      not null, primary key
#  provider_id                   :integer(4)
#  condition_type_id             :integer(4)
#  pro_sub                       :boolean(1)
#  trigger_date                  :datetime
#  condition_rank                :integer(4)
#  total_provider                :integer(4)
#  condition_score               :integer(4)
#  condition_billed              :integer(4)
#  expected_billed               :integer(4)
#  condition_paid                :integer(4)
#  hci_action                    :string(255)
#  speciality_average_count      :integer(4)
#  speciality_average_percentage :integer(4)
#  speciality_average_billed     :integer(4)
#  speciality_average_paid       :integer(4)
#  created_at                    :datetime
#  updated_at                    :datetime
#

