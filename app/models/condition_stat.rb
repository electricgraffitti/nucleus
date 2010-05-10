class ConditionStat < ActiveRecord::Base
  
  belongs_to :condition
  
end

# == Schema Information
#
# Table name: condition_stats
#
#  id                   :integer(4)      not null, primary key
#  condition_count      :integer(4)
#  condition_code_count :integer(4)
#  conditions_per_code  :integer(4)
#  repair_count         :integer(4)
#  repair_percentage    :integer(4)
#  condition_id         :integer(4)
#  created_at           :datetime
#  updated_at           :datetime
#

