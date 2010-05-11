var scatterChart = new Highcharts.Chart({
   chart: {
      renderTo: 'provider_action_chart', 
      defaultSeriesType: 'spline',
      width: 310,
      height: 200,
      zoomType: 'xy',
      margin: [20,20,30,50],
      // backgroundColor: {
      //   linearGradient: [0, 0, 0, 300],
      //   stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(240,240,240)']]
      // }
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Dollars Billed by Month',
      style: {
         color: "#c0c0c0",
         display: 'none'
      }
   },
   subtitle: {
     text: 'Source: HCI Data Center',
     style: {
        color: "#c0c0c0",
        display: 'none'
     }
   },
   xAxis: {
     categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 
        'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
     labels: {
       rotation: 90
     }
   },
   yAxis: {
      title: {
        enabled: false,
        text: 'Dollars Billed'
      }
   },
   tooltip: {
      formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
            this.x + ", "+ this.y +' Amount Billed';
      }
   },
   legend: {
      enabled: false
   },
   plotOptions: {
      line: {
        cursor: 'pointer',
          point: {
          events: {
            click: function() {
              // Sets the point to link to the url in the data block
              // location.href = this.series.options.url;
            }
          }
        },
         marker: {
           symbol: 'diamond',
            states: {
               hover: {
                  enabled: true,
                  lineColor: 'rgb(100,100,100)'
               }
            }
         },
         states: {
            hover: {
               marker: {
                  enabled: true
               }
            }
         }
      }
   },
   series: [
   {  
     name: "Condition Name",
     data: [5200, 22000, 14500, 18976, 19487, 21045, 14573, 12430, 18922, 17654, 16320, 15434],
     color: 'rgba(0,133,63,1)'
   }]
});

