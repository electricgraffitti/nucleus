class Patient < ActiveRecord::Base
  
  has_many :claims
  has_many :providers, :through => :claims
  
end

# == Schema Information
#
# Table name: patients
#
#  id         :integer(4)      not null, primary key
#  first_name :string(255)
#  last_name  :string(255)
#  ssn        :string(255)
#  sequence   :string(255)
#  created_at :datetime
#  updated_at :datetime
#

