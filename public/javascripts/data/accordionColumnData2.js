var barChart = new Highcharts.Chart({
   chart: {
      renderTo: 'accordion_stat_middle_chart',
      defaultSeriesType: 'column',
			width: 240,
			margin: [50,25,60,40],
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
      text: 'Patient Averages',
      style: {
        color: '#555555',
        font: '16px Arial, Helvetica, sans-serif'
      } 
   },
   xAxis: {
      categories: ['Total', 'Per Visit'],
      title: {
         text: 'Patient Averages',
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
      	text: 'Patients',
				enabled: false
      },
      labels: {
        style: {
          color: '#555555',
          font: '10px Arial, Helvetica, sans-serif'
        }
      }
   },
   tooltip: {
      formatter: function() {
         return '<b>'+ this.x +'</b><br/>'+
             this.series.name +': '+ this.y + " Patients";
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
		enabled: false
   },
   credits: {
      enabled: false
   },
   series: [{
      name: 'Speciality Average',
      data: [127, 39],
      color: "#398dcc"
      }, {
      name: 'Dr. Smith',
      data: [271, 103],
      color: '#f47727'
      }]
});
