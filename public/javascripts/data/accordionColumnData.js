var barChart = new Highcharts.Chart({
   chart: {
      renderTo: 'accordion_stat_left_chart',
      defaultSeriesType: 'column',
      backgroundColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
      },
      borderColor: '#e7e7e7',
      borderRadius: 10,
      borderWidth: 1
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Provider Statistics',
      style: {
        color: '#555555',
        font: '16px Arial, Helvetica, sans-serif'
      } 
   },
   xAxis: {
      categories: ['Paid', 'Billed', 'Total Patients', 'Patients/Visit'],
      title: {
         text: 'Provider Type',
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
         text: 'Cases Opened',
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
   tooltip: {
      formatter: function() {
         return '<b>'+ this.x +'</b><br/>'+
             this.series.name +': '+ this.y + " Cases Opened";
      },
      style: {
        font: '12px Arial, Helvetica, sans-serif'
      },
      borderRadius: 0,
      borderWidth: 1
   },
   plotOptions: {
    column: {
      stacking: 'normal',
      pointWidth: 50
    }
   },
   legend: {
     style: {
        left: 'auto',
        bottom: 'auto',
        right: '30px',
        top: '55px'
     },
     backgroundColor: '#FFFFFF',
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
      data: [86923, 217886, 127, 3],
      color: "#78496a"
      }, {
      name: 'Dr. Smith',
      data: [254032, 469950, 271, 10],
      color: '#e37f1c'
      }]
});
