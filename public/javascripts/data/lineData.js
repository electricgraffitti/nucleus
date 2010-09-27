var lineChart = new Highcharts.Chart({
   chart: {
      renderTo: 'bottom_right_chart',
      defaultSeriesType: 'areaspline',
      margin: [50, 30, 60, 80],
      backgroundColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
      },
      zoomType: 'xy',
      borderColor: '#e7e7e7',
      borderRadius: 0,
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
         color: "#5bab46",
         font: "12px Arial, Helvetica, sans-serif"
      }
   },
   xAxis: {
      type: 'datetime',
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
      },
      showLastLabel: true
   },
   yAxis: {
     labels: {
       formatter: function() {
         return "$" + Highcharts.numberFormat(this.value);
       },
       x: -2,
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
    plotLines: [{
       value: 0,
       width: 1,
       color: '#808080'
    }]
   },
   tooltip: {
      formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
            Highcharts.dateFormat('%b %Y', this.x) +': $'+ this.y;
      },
      style: {
        color: "#555555",
        font: "10px Arial, Helvetica, sans-serif"
      },
      borderWidth: 1,
      borderRadius: 0
   },
   plotOptions: {
      areaspline: {
         fillOpacity: 1
      }
   },
   legend: {
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
      color: '#f47727', // Orange
      data: [[Date.UTC(2010, 0, 1),359687],[Date.UTC(2010, 1, 1), 458976],[Date.UTC(2010, 2, 1), 586741],[Date.UTC(2010, 3, 1), 684235],[Date.UTC(2010, 4, 1), 485742],[Date.UTC(2010, 5, 1), 752635]]
   }, {
      name: 'Accepted',
      data: [[Date.UTC(2010, 0, 1),287749],[Date.UTC(2010, 1, 1), 348821],[Date.UTC(2010, 2, 1), 310972],[Date.UTC(2010, 3, 1), 629496],[Date.UTC(2010, 4, 1), 369163],[Date.UTC(2010, 5, 1), 617160]],
			color: '#398dcc' // Blue
   }]
});
