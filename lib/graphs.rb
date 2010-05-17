module Graphs
  
  def set_graph(obj, chart_type)
    if chart_type = "SBRD"
      cdata = dollars_billed_by_month(obj);
    else
    end
    return cdata
  end
  
  
  def dollars_billed_by_month(obj)
    chart_data = []
     obj.each do |d|
        chart_data << d.amount
      end
    return chart_data.to_json
  end
  
end