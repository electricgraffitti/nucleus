actionChart = new Highcharts.Chart({
   chart: {
      renderTo: 'provider_action_chart', 
      defaultSeriesType: 'area',
      width: 310,
      height: 200,
      zoomType: 'xy',
      margin: [20,20,40,50],
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
     categories: ['Jan 09', 'Feb 09', 'Mar 09', 'Apr 09', 'May 09', 'Jun 09', 
        'Jul 09', 'Aug 09', 'Sep 09', 'Oct 09', 'Nov 09', 'Dec 09','Jan 10', 'Feb 10', 'Mar 10', 'Apr 10', 'May 10'],
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
            this.x + ", "+ "$"+this.y +' Billed';
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
          },
          marker: {
            symbol: 'square',
             states: {
              hover: {
                 enabled: true,
                 lineColor: 'rgb(100,100,100)'
               }
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
     name: "Condition Billing",
     data: [],
     color: 'rgba(0,133,63,1)'
   }]
});

