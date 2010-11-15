var barChart = new Highcharts.Chart({
  chart: {
    renderTo: 'savings_tracker',
    defaultSeriesType: 'column',
    width: 460,
    height: 292,
    margin: [0,0,40,0],
    style: {
      font: '13px Arial, Helvetica, sans-serif'
    },
    borderRadius: 0
  },
  credits: {
   enabled: false
  },
  title: {
   text: null
  },
  subtitle: {
   enabled: false
  },
  xAxis: {
    categories: ['May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct'],
    title: {
       text: 'Service Type',
       style: {
         color: '#333333',
         font: '12px Arial, Helvetica, sans-serif'
       }
    },
    labels: {
      style: {
        color: '#333333',
        font: '10px Arial, Helvetica, sans-serif'
      }
    }
  },
  yAxis: {
    min: 0,
    title: {
       text: 'Service Savings',
       style: {
         color: '#333333',
         font: '12px Arial, Helvetica, sans-serif'
       }
    },
    labels: {
      style: {
        color: '#333333',
        font: '10px Arial, Helvetica, sans-serif'
      }
    }
  },
  tooltip: {
    formatter: function() {
       return '<b>'+ this.x +'</b><br/>'+
           this.series.name +': '+ this.y + " Service Savings";
    },
    style: {
      font: '10px Arial, Helvetica, sans-serif'
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
        right: '7px',
        top: '7px'
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
      name: 'PCI',
      data: [200, 230, 245, 255, 265, 280],
      color: "#5bab46" // Green
      }, {
      name: 'FCI',
      data: [180, 210, 225, 235, 250, 260],
      color: '#f47727' // Orange
      }, {
      name: 'DCI',
      data: [165, 185, 200, 215, 223, 240],
      color: '#398dcc' // Blue
   }]
});
