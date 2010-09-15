actionChart = new Highcharts.Chart({
   chart: {
      renderTo: 'provider_action_chart', 
      defaultSeriesType: 'column',
      width: 310,
      height: 220,
      zoomType: 'xy',
      margin: [40,15,60,58],
      // backgroundColor: {
      //   linearGradient: [0, 0, 0, 300],
      //   stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(240,240,240)']]
      // }
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Repair Procedure Distribution',
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
     categories: ['Int', 'Complex', 'Flap'],
     labels: {
       rotation: 0
     }
   },
   yAxis: {
      title: {
        enabled: false,
        // text: 'Comparison Ratio'
        text: null
      },
      labels: {
        formatter: function() {
          return this.value + "%";
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
            this.x + ", "+ this.y + "%";
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
     data: [39.81, 42.30, 17.39],
     color: "#009fe2"
   }, {
     name: "Edward Smith",
     data: [28.9, 2.6, 68.4],
     color: "#f89c28"
   }
  ]
});

