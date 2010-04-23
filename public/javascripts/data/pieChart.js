var pieChart = new Highcharts.Chart({
   chart: {
      renderTo: 'bottom_right_chart',
      margin: [50, 20, 60, 20],
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
      text: 'HealthCare Insight Service Share',
      style: {
        color: '#c0c0c0'
      }
   },
   plotArea: {
      shadow: null,
      borderWidth: null,
      backgroundColor: null
   },
   tooltip: {
      formatter: function() {
         return '<b>'+ this.point.name +'</b>: '+ this.y +' %';
      }
   },
   plotOptions: {
      pie: {
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
      name: 'Browser share',
      data: [
         ['PCI',   44.2],
         ['DCI',       10.6],
         {
            name: 'FCI',
            y: 26.6,
            sliced: true,
            selected: true
         },
         ['OCI',    15.1],
         ['RxI',    2.7],
         ['VCI',     2.3]
      ]
      //data: [3.40, 1.05, 2.90, 1.65, 1.35, 2.59, 1.39, 3.07, 2.82]
   }]
});