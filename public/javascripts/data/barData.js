var barChart = new Highcharts.Chart({
   chart: {
      renderTo: 'bottom_left_chart',
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
      text: 'Cases Opened by Provider Type',
      style: {
        color: '#555555',
        font: '16px Arial, Helvetica, sans-serif'
      } 
   },
   subtitle: {
      text: '2010 YTD',
      style: {
        color: '#6ac520',
        font: '12px Arial, Helvetica, sans-serif'
      }
   },
   xAxis: {
      categories: ['Jan', 'Feb', 'March', 'April', 'May', 'June'],
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
      }
   },
   plotOptions: {
    column: {
      stacking: 'normal'
    }
   },
   legend: {
     style: {
        left: 'auto',
        bottom: 'auto',
        right: '30px',
        top: '50px'
     },
     backgroundColor: '#FFFFFF',
     borderColor: '#CCC',
     borderWidth: 1
   },
   credits: {
      enabled: false
   },
   series: [{
      name: 'ASC',
      data: [245, 230, 210, 225, 205, 240]
      }, {
      name: 'Hosptial',
      data: [200, 195, 192, 177, 142, 174]
      }, {
      name: 'Prof',
      data: [165, 145, 132, 112, 102, 132]
   }]
});
