# == Schema Information
#
# Table name: procedure_submissions
#
#  id                :integer(4)      not null, primary key
#  condition_id      :integer(4)
#  procedure_id      :integer(4)
#  total_submissions :integer(4)
#  total_billed      :integer(4)
#  total_paid        :integer(4)
#  created_at        :datetime
#  updated_at        :datetime
#

class ProcedureSubmission < ActiveRecord::Base
  
  belongs_to :condition
  belongs_to :procedure
  
end
