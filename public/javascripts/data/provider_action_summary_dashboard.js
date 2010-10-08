var pieChart = new Highcharts.Chart({
   chart: {
      renderTo: 'pie_chart',
      margin: [50, 80, 60, 20],
      backgroundColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
      },
      borderRadius: 0
   },
   credits: {
     enabled: false
   },
   title: {
     text: '2010 YTD',
     style: {
       color: '#6ac520',
       font: '12px Arial, Helvetica, sans-serif'
     }
   },
   subtitle: {
      enabled: false
   },
   plotArea: {
     shadow: true,
     borderWidth: 2,
     backgroundColor: '#555555'
   },
   tooltip: {
      formatter: function() {
         return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
      }
   },
   plotOptions: {
      pie: {
         allowPointSelect: true,
         cursor: 'pointer',
         dataLabels: {
            enabled: true,
            formatter: function() {
               if (this.y > 5) return this.point.name;
            },
            color: 'white',
            style: {
               font: '13px Trebuchet MS, Verdana, sans-serif'
            }
         }
      }
   },
   legend: {
      layout: 'vertical',
      style: {
         left: 'auto',
         bottom: 'auto',
         right: '50px',
         top: '100px'
      }
   },
    series: [{
      type: 'pie',
      name: 'Provider Action Summary',
      color: ["#5bab46", '#f47727', '#398dcc', '#d93b27'],
      data: [
         ['Deny',   45.0],
         ['Review ',       26.8],
         {
            name: 'Records',    
            y: 18.8,
            sliced: true,
            selected: true
         },
         ['No Action',    10.5]
      ]
   }]
});
