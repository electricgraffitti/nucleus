var pieChart = new Highcharts.Chart({
   chart: {
      renderTo: 'bottom_right_chart',
      margin: [50, 20, 60, 20],
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
      text: 'Savings by Condition',
      style: {
        color: '#555555'
      }
   },
   subtitle: {
      text: '2010 YTD',
      style: {
        color: '#6ac520'
      }
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
        borderColor: "#333333",
        allowPointSelect: true,
        dataLabels: {
          enabled: true,
          formatter: function() {
            if (this.y > 5) return this.point.name;
          },
          color: 'white',
          style: {
            font: '13px Trebuchet MS, Verdana, sans-serif'
          }
         },
         shadow: true,
         marker: {
           lineColor: "#c0c0c0"
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
        series: [{
      type: 'pie',
      name: 'Condition',
      data: [
         ['SDES',   44.2],
         ['SFRO',       10.6],
         {
            name: 'SBRD',
            y: 26.6,
            sliced: true,
            selected: true
         },
         ['SCFE',    15.1]
      ]
   }]
});
