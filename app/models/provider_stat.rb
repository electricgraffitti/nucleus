class ProviderStat < ActiveRecord::Base
  
  belongs_to :provider
  
  def line_percentage
    line_percentage = (self.final_line_count.to_f / self.total_line_count.to_f) * 100.00
    return line_percentage
  end
  
  def procedure_percentage
    procedure_percentage =  (self.final_procedure_count.to_f / self.total_procedure_count.to_f) * 100.00
    return procedure_percentage
  end
  
  def patient_percentage
    patient_percentage =  (self.final_patient_count.to_f / self.total_patient_count.to_f) * 100.00
    return patient_percentage
  end
  
  def claim_percentage
    claim_percentage =  (self.final_claim_count.to_f / self.total_claim_count.to_f) * 100.00
    return claim_percentage
  end
  
  def savings_percentage
    savings_percentage =  (self.final_savings_count.to_f / self.total_savings_count.to_f) * 100.00
    return savings_percentage
  end
  
  def billed_percentage
    billed_percentage =  (self.final_billed_count.to_f / self.total_billed_count.to_f) * 100.00
    return billed_percentage
  end
  
end

# == Schema Information
#
# Table name: provider_stats
#
#  id                    :integer(4)      not null, primary key
#  final_line_count      :integer(4)
#  total_line_count      :integer(4)
#  final_procedure_count :integer(4)
#  total_procedure_count :integer(4)
#  final_patient_count   :integer(4)
#  total_patient_count   :integer(4)
#  final_claim_count     :integer(4)
#  total_claim_count     :integer(4)
#  final_savings_count   :integer(4)
#  total_savings_count   :integer(4)
#  final_billed_count    :integer(4)
#  total_billed_count    :integer(4)
#  provider_id           :integer(4)
#  created_at            :datetime
#  updated_at            :datetime
#

