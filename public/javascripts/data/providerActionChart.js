var scatterChart = new Highcharts.Chart({
   chart: {
      renderTo: 'provider_action_chart', 
      defaultSeriesType: 'scatter',
      width: 310,
      height: 200,
      zoomType: 'xy',
      margin: [20,20,20,50],
      // backgroundColor: {
      //   linearGradient: [0, 0, 0, 300],
      //   stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(240,240,240)']]
      // }
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Provider Results',
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
      title: {
         enabled: false,
         text: 'Claims Count'
      },
      max: 100,
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
   },
   yAxis: {
      title: {
        enabled: false,
        text: 'Claims Value'
      }
   },
   tooltip: {
      formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
            this.x +' submitted, '+ this.y +' rejected';
      }
   },
   legend: {
      enabled: false
   },
   plotOptions: {
      scatter: {
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
           symbol: 'circle',
            radius: 5,
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
      name: "Dr. Stevens",
      data: [[96.2, 45678]],
      color: 'rgba(0,133,63,1)',
      // url: "http://demo.get-nucleus/nucleus-provider-action"
   },
   {  
      name: "Dr. Stevens",
      data: [[76.2, 53345]],
      color: 'rgba(0,133,63,1)',
      // url: "http://demo.get-nucleus/nucleus-provider-action"
   },
   {
      name: "Dr. Shulz",
      data: [[75.2, 123567]],
      color: 'rgba(229,181,58,1)',
      // url: "http://demo.get-nucleus/nucleus-provider-action"
   },
   {
      name: "Dr. Martin",
      data: [[69.2, 245312]],
      color: 'rgba(152,0,46,1)',
      // url: "http://demo.get-nucleus/nucleus-provider-action"
   },
   {
      name: "Dr. Evans",
      data: [[45.2, 145345]],
      color: 'rgba(229,181,58,1)',
      // url: "http://demo.get-nucleus/nucleus-provider-action"
   },
   {
      name: "Dr. Patrick",
      data: [[54.2, 122765]],
      color: 'rgba(229,181,58,1)',
      // url: "http://demo.get-nucleus/nucleus-provider-action"
   },
   {
      name: "Dr. Finn",
      data: [[86.2, 101392]],
      color: 'rgba(229,181,58,1)',
      // url: "http://demo.get-nucleus/nucleus-provider-action"
   },
   {
      name: "Dr. Hanson",
      data: [[23.2, 89253]],
      color: 'rgba(0,133,63,1)',
      // url: "http://localhost:3000/nucleus-provider-action"
   },
   {
      name: "Dr. Sanders",
      data: [[41.2, 59201]],
      color: 'rgba(0,133,63,1)',
      // url: "http://demo.get-nucleus/nucleus-provider-action"
   },
   {
      name: "Dr. Schulzke",
      data: [[54.2, 143980]],
      color: 'rgba(229,181,58,1)',
      // url: "http://demo.get-nucleus/nucleus-provider-action"
   }]
});

