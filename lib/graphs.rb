module Graphs
  
  def dollars_billed_by_month(obj)
    chart_data = []
     obj.each do |d|
        chart_data << d.amount
      end
    return chart_data.to_json
  end
  
end