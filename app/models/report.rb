# == Schema Information
#
# Table name: reports
#
#  id         :integer(4)      not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#

# == Schema Information
#
# Table name: reports
#
#  id         :integer(4)      not null, primary key
#  name       :string(255)
#  created_at :datetime
#  updated_at :datetime
#
class Report < ActiveRecord::Base
  
  include ReportGenerators
  
end

