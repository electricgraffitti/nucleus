var barChart = new Highcharts.Chart({
   chart: {
      renderTo: 'accordion_stat_left_chart',
      defaultSeriesType: 'column',
			margin: [50,25,60,50],
			width: 240,
      backgroundColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
      },
      borderColor: '#e7e7e7',
      borderRadius: 0,
      borderWidth: 1
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Provider Billing',
      style: {
        color: '#555555',
        font: '16px Arial, Helvetica, sans-serif'
      } 
   },
   xAxis: {
      categories: ['Paid', 'Billed'],
      title: {
         text: 'Provider Billing',
         style: {
           color: '#555555',
           font: '12px Arial, Helvetica, sans-serif'
         }
      },
      labels: {
        style: {
          color: '#555555',
          font: '10px Arial, Helvetica, sans-serif'
        }
      }
   },
   yAxis: {
      min: 0,
      title: {
      	// text: 'Billed',
      	text: null,
				enabled: false
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
         return '<b>' + this.x +'</b><br/>'+
             this.series.name +': $'+ this.y + " Billed";
      },
      style: {
        font: '12px Arial, Helvetica, sans-serif'
      },
      borderRadius: 0,
      borderWidth: 1
   },
   plotOptions: {
    column: {
			groupPadding: .1,
      pointWidth: 32
    }
   },
   legend: {
     enabled: false,
     style: {
        left: '2px',
        bottom: 'auto',
        right: 'auto',
        top: '355px'
     },
     borderColor: '#e7e7e7',
     borderWidth: 1,
     borderRadius: 0,
     shadow: false
   },
   credits: {
      enabled: false
   },
   series: [{
      name: 'Speciality Average',
      data: [86923, 217886],
      color: "#009fe2"
      }, {
      name: 'Dr. Smith',
      data: [254032, 469950],
      color: '#f89c28'
      }]
});
