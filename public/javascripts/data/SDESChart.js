actionChart = new Highcharts.Chart({
   chart: {
      renderTo: 'provider_action_chart', 
      defaultSeriesType: 'column',
      width: 310,
      height: 220,
      zoomType: 'xy',
      margin: [40,15,60,45],
      // backgroundColor: {
      //   linearGradient: [0, 0, 0, 300],
      //   stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(240,240,240)']]
      // }
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Lesion Destruction Distribution',
      style: {
         color: "#555555",
         font: "14px Arial, Helvetica, sans-serif"
      }
   },
   subtitle: {
     text: 'Source: HCI Data Center',
     style: {
        color: "#c0c0c0",
        display: 'none'
     }
   },
   xAxis: {
     categories: ['17000', '17003', '17004'],
     showLastLabel: true
   },
   yAxis: {
      title: {
        enabled: false,
        // text: 'Dollars Billed'
        text: null
      },
      labels: {
        formatter: function() {
          return "$" + this.value/1000 + "k";
        },
        style: {
          color: "#555555",
          font: "10px Arial, Helvetica, sans-serif"
        }
      },
   },
   tooltip: {
      formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
            this.x + ", "+ "$"+Highcharts.numberFormat(this.y, 0, ",") +'K Billed';
      },
      style: {
        font: '12px Arial, Helvetica, sans-serif'
      },
      borderWidth: 1,
      borderRadius: 0
   },
   legend: {
     style: {
        left: 'auto',
        bottom: 'auto',
        right: '10px',
        top: '185px'
     },
     borderColor: '#D7D6D6',
     borderWidth: 1,
     borderRadius: 0,
     shadow: false
   },
   plotOptions: {
     column: {
       groupPadding: .1,
        pointWidth: 32
     }
   },
	 series: [
   {  
     name: "Specialty Norm",
     data: [52900, 38400, 18700],
     color: "#398dcc"
   }, {
     name: "Edward Smith",
     data: [25342, 40000, 95000],
     color: "#f47727"
   }
  ]
});

