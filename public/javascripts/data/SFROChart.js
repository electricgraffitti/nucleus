actionChart = new Highcharts.Chart({
   chart: {
      renderTo: 'provider_action_chart', 
      defaultSeriesType: 'column',
      width: 370,
      height: 240,
      zoomType: 'xy',
      margin: [10,0,50,30],
      // backgroundColor: {
      //   linearGradient: [0, 0, 0, 300],
      //   stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(240,240,240)']]
      // }
   },
   credits: {
     enabled: false
   },
   title: {
     text: null
      // style: {
      //    color: "#5bab46",
      //    font: '12px Arial, Helvetica, sans-serif'
      // }
   },
   subtitle: {
      enabled: false
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
          color: "#333333",
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
        font: '10px Arial, Helvetica, sans-serif'
      },
      borderColor: '#c3c4c3',
      borderWidth: 1,
      borderRadius: 0
   },
   legend: {
     style: {
        left: 'auto',
        bottom: 'auto',
        top: '210px'
     },
     borderColor: '#c3c4c3',
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
     color: "#398dcc"
   }, {
     name: "Edward Smith",
     data: [28.9, 2.6, 68.4],
     color: "#f47727"
   }
  ]
});

