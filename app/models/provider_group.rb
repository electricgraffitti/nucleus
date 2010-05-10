class ProviderGroup < ActiveRecord::Base
  
  has_many :provider_groups
  
end

# == Schema Information
#
# Table name: provider_groups
#
#  id         :integer(4)      not null, primary key
#  name       :string(255)
#  group_tin  :string(255)
#  created_at :datetime
#  updated_at :datetime
#

