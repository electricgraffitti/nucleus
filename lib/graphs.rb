module Graphs
  
  def set_graph(obj, chart_type)
      
    cdata = case chart_type
      when "SBRD"
        dollars_billed_by_month(obj)
      when "SFRO"
        flap_repair_distribution(obj)
      when "SDES"
        lesion_destruction_distribution(obj)
      else
        "No Chart Data"
      end
      
    return cdata
    
  end
  
  def dollars_billed_by_month(obj)
    billings = obj.monthly_billings
    chart_data = []
     billings.each do |d|
        chart_data << d.amount
      end
    return chart_data.to_json
  end
  
  def flap_repair_distribution(obj)
    chart_data = [
      {  
        :name => "Edward Smith",
        :data => [0.0, 28.9, 2.6, 68.4]
      }, {
        :name => "Specialty Norm",
        :data => [0.50, 39.81, 42.30, 17.39]
      }
      ]
    return chart_data
  end
  
  def lesion_destruction_distribution(obj)
    chart_data = [
      {  
        :name => "Edward Smith",
        :data => [0.0, 28.9, 2.6, 68.4]
      }, {
        :name => "Specialty Norm",
        :data => [0.50, 39.81, 42.30, 17.39]
      }
      ]
    return chart_data
  end
  
end