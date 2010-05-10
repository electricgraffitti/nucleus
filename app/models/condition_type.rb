class ConditionType < ActiveRecord::Base
  
  has_many :conditions
  
end


# == Schema Information
#
# Table name: condition_types
#
#  id             :integer(4)      not null, primary key
#  condition_type :string(255)
#  condition_code :string(255)
#  created_at     :datetime
#  updated_at     :datetime
#

