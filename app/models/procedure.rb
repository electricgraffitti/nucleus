# == Schema Information
#
# Table name: procedures
#
#  id                    :integer(4)      not null, primary key
#  procedure_code        :integer(4)
#  procedure_description :string(255)
#  created_at            :datetime
#  updated_at            :datetime
#
class Procedure < ActiveRecord::Base
  
  has_many :procedure_submissions
  has_many :conditions, :through => :procedure_submissions
  
end
