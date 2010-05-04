var barChart = new Highcharts.Chart({
   chart: {
      renderTo: 'bottom_left_chart',
      defaultSeriesType: 'bar',
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
      text: 'Top Fraudulent States',
      style: {
        color: '#555555'
      } 
   },
   subtitle: {
      text: 'Source: HCI Data Center',
      style: {
        color: '#6ac520'
      }
   },
   xAxis: {
      categories: ['Los Angeles', 'New York', 'Miami', 'Orlando', 'San Diego'],
      title: {
         text: null,
         style: {
           color: '#555555'
         }
      }
   },
   yAxis: {
      min: 0,
      title: {
         text: 'Fraudulent Claims by Claim Count',
         align: 'high',
         style: {
           color: '#555555'
         }
      }
   },
   tooltip: {
      formatter: function() {
         return '<b>'+ this.x +'</b><br/>'+
             this.series.name +': '+ this.y +' for every 10000';
      }
   },
   plotOptions: {
      bar: {
         dataLabels: {
            enabled: true,
            color: 'auto'
         }
      }
   },
   legend: {
      layout: 'vertical',
      style: {
         left: 'auto',
         bottom: 'auto',
         right: '20px',
         top: '20px'
      },
      borderWidth: 1,
      backgroundColor: '#FFFFFF'
   },
   credits: {
      enabled: false
   },
        series: [{
      name: '2008',
      data: [565, 435, 1565, 1107, 376]
   }, {
      name: '2009',
      data: [795, 586, 1676, 1034, 456]
   }, {
      name: '2010',
      data: [634, 423, 1045, 965, 523],
      color: '#e5b53a'
   }]
});
