var lineChart = new Highcharts.Chart({
   chart: {
      renderTo: 'bottom_right_chart',
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
         color: "#555555",
         font: "16px Arial, Helvetica, sans-serif"
      }
   },
   subtitle: {
      text: '2010 YTD',
      style: {
         color: "#6ac520",
         font: "12px Arial, Helvetica, sans-serif"
      }
   },
   xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'April', 'May', 'June'],
      title: {
         text: 'Savings by Month',
         style: {
            color: "#555555",
            font: "10px Arial, Helvetica, sans-serif"
         }
      },
      labels: {
        style: {
          color: "#555555",
          font: "10px Arial, Helvetica, sans-serif"
        }
      }
   },
   yAxis: {
     labels: {
       formatter: function() {
         return "$" + Highcharts.numberFormat(this.value);
       },
       style: {
         color: "#555555",
         font: "10px Arial, Helvetica, sans-serif"
       }
     },
     min: 0,
     max: 1000000,
     title: {
       text: '',
       style: {
         color: "#555555",
         font: "10px Arial, Helvetica, sans-serif"
       }
     },
     plotOptions: {
        areaspline: {
           fillOpacity: 0.2
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
      },
      style: {
        color: "#555555",
        font: "10px Arial, Helvetica, sans-serif"
      },
      borderColor: "#555555",
      borderWidth: 1,
      borderRadius: 0
   },
   legend: {
      layout: 'vertical',
      style: {
         position: 'absolute',
         bottom: 'auto',
         left: '100px',
         top: '55px',
         color: "#555555",
         font: "10px Arial, Helvetica, sans-serif"
      },
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      borderRadius: 0,
      borderColor: '#e7e7e7',
      shadow: false
   },
   
   series: [{
      name: 'Identified',
      data: [359687, 458976, 586741, 684235, 485742, 752635]
   }, {
      name: 'Accepted',
      data: [287749, 348821, 310972, 629496, 369163, 617160],
			color: '#e5b53a'
   }]
});
