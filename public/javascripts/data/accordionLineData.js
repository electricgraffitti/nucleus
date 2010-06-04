actionChart = new Highcharts.Chart({
   chart: {
      renderTo: 'accordion_stat_right_chart', 
      defaultSeriesType: 'spline',
      width: 455,
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
      text: 'Dr. Edward Smith - Dollars Billed by Month',
      style: {
         color: "#555555",
         font: "14px Arial, Helvetica, sans-serif"
      }
   },
   subtitle: {
     text: 'Past 12 Months',
     style: {
        color: "#c0c0c0",
        display: 'none'
     }
   },
   xAxis: {
     categories: ['Jun 09', 'Jul 09', 'Aug 09', 'Sep 09', 'Oct 09', 'Nov 09', 'Dec 09','Jan 10', 'Feb 10', 'Mar 10', 'Apr 10', 'May 10'],
     labels: {
       y: 20,
       style: {
         font: "10px Arial, Helvetica, sans-serif"
       }
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
     data: [2345,4253,4953,3752,3254,6500,23485,19874,18121,18003,17563,10478],
     color: '#e37f1c'
   }]
});

