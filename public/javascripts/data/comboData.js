var barChart = new Highcharts.Chart({
   chart: {
      renderTo: 'bottom_left_chart',
      defaultSeriesType: 'bar'
   },
   title: {
      text: 'Historic World Population by Region'
   },
   subtitle: {
      text: 'Source: Wikipedia.org'
   },
   xAxis: {
      categories: ['Africa', 'America', 'Asia', 'Europe', 'Oceania'],
      title: {
         text: null
      }
   },
   yAxis: {
      min: 0,
      title: {
         text: 'Population (millions)',
         align: 'high'
      }
   },
   tooltip: {
      formatter: function() {
         return '<b>'+ this.x +'</b><br/>'+
             this.series.name +': '+ this.y +' millions';
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
         right: '100px',
         top: '100px'
      },
      borderWidth: 1,
      backgroundColor: '#FFFFFF'
   },
   credits: {
      enabled: false
   },
        series: [{
      name: 'Year 1800',
      data: [107, 31, 635, 203, 2]
   }, {
      name: 'Year 1900',
      data: [133, 156, 947, 408, 6]
   }, {
      name: 'Year 2008',
      data: [973, 914, 4054, 732, 34]
   }]
});
