# == Schema Information
#
# Table name: monthly_billings
#
#  id           :integer(4)      not null, primary key
#  condition_id :integer(4)
#  month        :date
#  amount       :float
#  created_at   :datetime
#  updated_at   :datetime
#

class MonthlyBilling < ActiveRecord::Base
  
  belongs_to :condition
  
  named_scope :billing_list, :order => "month ASC"
end
