var barChart = new Highcharts.Chart({
   chart: {
      renderTo: 'bottom_left_chart',
      defaultSeriesType: 'bar',
      backgroundColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [[0, 'rgb(56,57,56)'],[1, 'rgb(15,15,15)']]
      },
      borderColor: '#ffffff',
      borderRadius: 10,
      borderWidth: 2
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Top Fraudulent States',
      style: {
        color: '#c0c0c0'
      } 
   },
   subtitle: {
      text: 'Source: HCI Data Center'
   },
   xAxis: {
      categories: ['Los Angeles', 'New York', 'Miami', 'Orlando', 'San Diego'],
      title: {
         text: null,
         style: {
           color: '#c0c0c0'
         }
      }
   },
   yAxis: {
      min: 0,
      title: {
         text: 'Fraudulent Claims by Claim Count',
         align: 'high'
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
