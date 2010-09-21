# == Schema Information
#
# Table name: products
#
#  id         :integer(4)      not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

class Product < ActiveRecord::Base

  has_many :claims

end
