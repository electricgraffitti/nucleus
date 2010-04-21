$(document).ready(function() {
  
  // Sets up Line Chart
  lineGraphData = [['2010-01-30',4], ['2010-02-30',6.5], ['2010-03-30',5.7], ['2010-04-30',9], ['2010-05-30',8.2]];
  lineGraph = $.jqplot('top_left_chart', [lineGraphData], {
      title:'Fraud Savings for 2010',
      axes:{xaxis:{renderer:$.jqplot.DateAxisRenderer}},
      series:[{lineWidth:4, markerOptions:{style:'square'}}],
      cursor:{show: false, zoom:false, showTooltip:false}
  });
  
  // Sets up Scatter Chart
  scatterGraphData = [["6/22/2010",425.32],
  ["6/8/2010",424.84],
  ["5/26/2010",417.23],
  ["5/11/2010",390],
  ["4/27/2010",393.69],
  ["4/13/2010",392.24],
  ["3/30/2010",369.78],
  ["3/16/2010",330.16],
  ["3/2/2010",308.57],
  ["2/17/2010",346.45],
  ["2/2/2010",371.28],
  ["1/20/2010",324.7],
  ["1/5/2010",315.07],
  ["12/22/2009",300.36],
  ["12/8/2009",315.76],
  ["11/24/2009",292.96],
  ["11/10/2009",310.02],
  ["10/27/2009",359.36],
  ["10/13/2009",372.54],
  ["9/29/2009",386.91],
  ["9/15/2009",449.15],
  ["9/2/2009",444.25],
  ["8/25/2009",463.29],
  ["8/11/2009",510.15],
  ["7/28/2009",467.86],
  ["7/14/2009",481.32],
  ["6/30/2009",537],
  ["6/16/2009",546.43],
  ["6/2/2009",567],
  ["5/19/2009",544.62],
  ["5/5/2009",573.2],
  ["4/21/2009",544.06],
  ["4/7/2009",457.45],
  ["3/24/2009",438.08],
  ["3/10/2009",437.92],
  ["2/25/2009",471.18],
  ["2/11/2009",529.64],
  ["1/28/2009",515.9],
  ["1/14/2009",600.25],
  ["12/31/2008",657],
  ["12/17/2008",696.69],
  ["12/3/2008",714.87],
  ["11/19/2008",676.7],
  ["11/5/2008",663.97],
  ["10/22/2008",674.6],
  ["10/8/2008",637.39],
  ["9/24/2008",567.27],
  ["9/10/2008",528.75],
  ["8/27/2008",515.25]];
  scatterGraph = $.jqplot('top_right_chart', [scatterGraphData], {
      
      title: 'HealthCare Insight Fraud Preventions',
      color: '00853f',
      series: [{ 
          label: 'HealthCare Insight', 
          neighborThreshold: -1
      }], 
      axes: { 
          xaxis: { 
              renderer:$.jqplot.DateAxisRenderer, 
              min:'January 1, 2010', 
              tickInterval: '1 months', 
              tickOptions:{formatString:'%Y/%#m/%#d'} 
          }, 
          yaxis: { 
              renderer: $.jqplot.LogAxisRenderer, 
              tickOptions:{formatString:'$%.2f'} 
          } 
      }, 
      cursor:{zoom:true, showTooltip:true} 
  });
  
  // Sets up Pie Chart
  pieChartData = [['PCI',10], ['DCI',6], ['FCI',5], ['OCI',4], ['RxI',3], ['VCI',2]];
  pieGraph = $.jqplot('bottom_left_chart', [pieChartData], {
      title: 'Market Share of HealthCare Insight Services',
      seriesDefaults:{renderer:$.jqplot.PieRenderer, rendererOptions:{sliceMargin:8,shadowOffset: 2,shadowDepth: 3}},
      seriesColors:["#00853f", "#009fc2", "#98002e", "#e5b53a", "#00467f", "#78496a"],
      legend:{show:true},
      cursor:{zoom:true, showTooltip:false}
  });
  
  // Sets up Bar Chart
  bar1 = [1,4,9, 16];
  bar2 = [25, 12.5, 6.25, 3.125];
  barGraph = $.jqplot('bottom_right_chart', [bar1, bar2], {
      legend:{show:true, location:'ne'},title:'Sector Growth',
      series:[
          {label:'Fraud Claims', renderer:$.jqplot.BarRenderer}, 
          {label:'Service Implemented', renderer:$.jqplot.BarRenderer}
      ],
      axes:{
          xaxis:{renderer:$.jqplot.CategoryAxisRenderer}, 
          yaxis:{min:0}
      }
  });
});