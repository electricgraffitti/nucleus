var lineChart = new Highcharts.Chart({
   chart: {
      renderTo: 'top_right_chart',
      defaultSeriesType: 'line',
      margin: [50, 20, 60, 80],
      backgroundColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
      },
      zoomType: 'xy',
      borderColor: '#ffffff',
      borderRadius: 10,
      borderWidth: 2
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Average Fraudulent Claims',
      style: {
         color: "#555555"
      }
   },
   subtitle: {
      text: 'Source: HCI Data Center',
      style: {
         color: "#6ac520"
      }
   },
   xAxis: {
      categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
         'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
      title: {
         text: 'Month',
         style: {
            color: "#555555"
         }
      }
   },
   yAxis: {
      title: {
         text: 'Claim Rejection Ratio',
         style: {
            color: "#555555"
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
            this.x +': '+ this.y +'Â°C';
      }
   },
   legend: {
      layout: 'vertical',
      style: {
         left: 'auto',
         bottom: 'auto',
         right: '10px',
         top: '20px'
      },
      borderWidth: 1,
      backgroundColor: '#FFFFFF'
   },
   series: [{
      name: 'Medicaid',
      data: [7.0, 6.9, 9.5, 14.5, 18.2, 21.5, 25.2, 26.5, 23.3, 18.3, 13.9, 9.6]
   }, {
      name: 'Medicare',
      data: [-0.2, 0.8, 5.7, 11.3, 17.0, 22.0, 24.8, 24.1, 20.1, 14.1, 8.6, 2.5]
   }, {
      name: 'Facility',
      data: [-0.9, 0.6, 3.5, 8.4, 13.5, 17.0, 18.6, 17.9, 14.3, 9.0, 3.9, 1.0]
   }, {
      name: 'P & C',
      data: [3.9, 4.2, 5.7, 8.5, 11.9, 15.2, 17.0, 16.6, 14.2, 10.3, 6.6, 4.8]
   }]
});
