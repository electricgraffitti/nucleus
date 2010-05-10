class ProviderSpeciality < ActiveRecord::Base
  
  has_many :providers
  
end

# == Schema Information
#
# Table name: provider_specialities
#
#  id              :integer(4)      not null, primary key
#  speciality_code :string(255)
#  speciality_type :string(255)
#  created_at      :datetime
#  updated_at      :datetime
#

