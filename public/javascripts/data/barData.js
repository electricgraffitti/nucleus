var barChart = new Highcharts.Chart({
  chart: {
    renderTo: 'savings_tracker',
    defaultSeriesType: 'column',
    style: {
      margin: ['0px 0px 40px 0px'],
      font: '16px Arial, Helvetica, sans-serif'
    },
    // backgroundColor: {
    //   linearGradient: [0, 0, 0, 300]
    //   stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
    // },
    borderRadius: 0
  },
  credits: {
   enabled: false
  },
  title: {
   text: null,
    // style: {
    //    color: "#5bab46",
    //    font: '12px Arial, Helvetica, sans-serif'
    // }
  },
  subtitle: {
   enabled: false
  },
  xAxis: {
    categories: ['May', 'Jun', 'Jul', 'Aug', 'Sept', 'Oct'],
    title: {
       text: 'Serivce Type',
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
       text: 'Service Savings',
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
           this.series.name +': '+ this.y + " Service Savings";
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
        top: '35px'
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
