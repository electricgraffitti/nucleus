var lineChart = new Highcharts.Chart({
   chart: {
      renderTo: 'top_right_chart',
      defaultSeriesType: 'areaspline',
      margin: [50, 20, 60, 80],
      backgroundColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
      },
      zoomType: 'xy',
      borderColor: '#e7e7e7',
      borderRadius: 10,
      borderWidth: 1
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Identified Savings vs. Accepted Savings',
      style: {
         color: "#555555"
      }
   },
   subtitle: {
      text: '2010 YTD',
      style: {
         color: "#6ac520"
      }
   },
   xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
      title: {
         text: 'Savings by Month',
         style: {
            color: "#555555"
         }
      }
   },
   yAxis: {
     min: 0,
     max: 1000000,
     title: {
       text: '',
       style: {
         color: "#555555"
       }
     },
     plotOptions: {
        areaspline: {
           fillOpacity: 0.3
        }
     },
    plotLines: [{
       value: 0,
       width: 1,
       color: '#808080'
    }]
   },
   tooltip: {
      formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
            this.x +': $'+ this.y;
      }
   },
   legend: {
      layout: 'vertical',
      style: {
         position: 'absolute',
         bottom: 'auto',
         left: '100px',
         top: '55px'
      },
      borderWidth: 1,
      backgroundColor: '#FFFFFF'
   },
   
   series: [{
      name: 'Identified',
      data: [359687, 458976, 586741, 684235, 485742, 752635]
   }, {
      name: 'Accepted',
      data: [287749, 348821, 310972, 629496, 369163, 617160]
   }]
});
