actionChart = new Highcharts.Chart({
   chart: {
      renderTo: 'provider_action_chart', 
      defaultSeriesType: 'spline',
      width: 300,
      height: 220,
      zoomType: 'xy',
      margin: [40,10,50,50],
      // backgroundColor: {
      //   linearGradient: [0, 0, 0, 300],
      //   stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(240,240,240)']]
      // }
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Billing Spike - Dollars Billed by Month',
      style: {
         color: "#555555",
         font: "14px Arial, Helvetica, sans-serif"
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
     categories: ['July', 'Aug', 'Sept', 'Oct','Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 
        'May', 'June', 'July', 'Aug', 'Sept', 'Oct','Nov'],
     labels: {
       rotation: 90,
       y: 20,
       style: {
         font: "10px Arial, Helvetica, sans-serif"
       }
     }
   },
   yAxis: {
      title: {
        enabled: false,
        // text: 'Dollars Billed'
        text: null
      }
   },
   tooltip: {
      formatter: function() {
      	return '<b>'+ this.series.name +'</b><br/>'+
        this.x + ", "+ "$"+this.y +' Billed';
      },
      style: {
        font: '12px Arial, Helvetica, sans-serif'
      },
      borderWidth: 1,
      borderRadius: 0
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
     data: [2345,4253,21568,14859,19854,20635,17485,19874,18121,18003,17563,10478,13568,15689,16895,19865,14274],
     color: '#f47727'
   }]
});

