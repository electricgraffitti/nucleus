actionChart = new Highcharts.Chart({
   chart: {
      renderTo: 'provider_action_chart', 
      defaultSeriesType: 'column',
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
     categories: ['Simple', 'Int', 'Complex', 'Flap'],
     labels: {
       rotation: 0
     }
   },
   yAxis: {
      title: {
        enabled: false,
        text: 'Comparison Ratio'
      }
   },
   tooltip: {
      formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
            this.x + ", "+ this.y + "%";
      }
   },
   legend: {
      layout: 'vertical',
      style: {
         position: 'absolute',
         bottom: 'auto',
         left: '30px',
         top: '0px',
         color: "#555555",
         font: "10px Arial, Helvetica, sans-serif"
      },
      borderWidth: 1,
      backgroundColor: '#FFFFFF',
      borderRadius: 0,
      borderColor: '#e7e7e7',
      shadow: false
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
     name: "Edward Smith",
     data: [0.0, 28.9, 2.6, 68.4]
   }, {
     name: "Specialty Norm",
     data: [0.50, 39.81, 42.30, 17.39]
   }
  ]
});

