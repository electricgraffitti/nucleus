var scatterChart = new Highcharts.Chart({
   chart: {
      renderTo: 'top_left_chart', 
      defaultSeriesType: 'scatter',
      zoomType: 'xy',
      backgroundColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [[0, 'rgb(56,57,56)'],[1, 'rgb(15,15,15)']]
      },
      style: {
        margin: ['0px 20px 20px 0px']
      },
      borderColor: '#ffffff',
      borderRadius: 10,
      borderWidth: 2
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Provider Risk Analysis',
      style: {
         color: "#c0c0c0"
      }
   },
   subtitle: {
      text: 'Source: HCI Data Center'
   },
   xAxis: {
      title: {
         enabled: true,
         text: 'Claims Submitted'
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
   },
   yAxis: {
      title: {
         text: 'Claims Rejected'
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
        point: {
          events: {
            click: function() {
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
      data: [[161.2, 51.6]],
      color: 'rgba(152,0,46,1)',
      link: "http://localhost:3000"
   },
   {  
      name: "Dr. Stevens",
      data: [[141.2, 41.6]],
      color: 'rgba(229,181,58,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Shulz",
      data: [[122.2, 31.6]],
      color: 'rgba(229,181,58,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Martin",
      data: [[102.2, 22.6]],
      color: 'rgba(229,181,58,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Evans",
      data: [[76.2, 15.6]],
      color: 'rgba(0,133,63,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Patrick",
      data: [[156.2, 32.6]],
      color: 'rgba(152,0,46,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Finn",
      data: [[187.2, 67.6]],
      color: 'rgba(152,0,46,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Hanson",
      data: [[123.2, 12.6]],
      color: 'rgba(229,181,58,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Sanders",
      data: [[67.2, 12.6]],
      color: 'rgba(0,133,63,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Schulzke",
      data: [[54.2, 13.6]],
      color: 'rgba(0,133,63,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Blair",
      data: [[113.2, 45.6]],
      color: 'rgba(229,181,58,1)',
      link: "http://localhost:3000"
   },
   {  
      name: "Dr. Kirk",
      data: [[78.2, 36.6]],
      color: 'rgba(0,133,63,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Seamans",
      data: [[110.2, 35.6]],
      color: 'rgba(229,181,58,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Woods",
      data: [[134.2, 45.6]],
      color: 'rgba(229,181,58,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Stipanov",
      data: [[90.2, 15.6]],
      color: 'rgba(0,133,63,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Briggs",
      data: [[86.2, 37.6]],
      color: 'rgba(0,133,63,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Corey",
      data: [[116.2, 56.6]],
      color: 'rgba(229,181,58,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Phelps",
      data: [[123.2, 23.6]],
      color: 'rgba(229,181,58,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Touje",
      data: [[156.2, 45.6]],
      color: 'rgba(152,0,46,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Fender",
      data: [[134.2, 27.6]],
      color: 'rgba(229,181,58,1)',
      link: "http://localhost:3000"
   },
   {
      name: "Dr. Gibson",
      data: [[119.0, 56.6]],
      color: 'rgba(229,181,58,1)',
      link: "http://localhost:3000"

   }]
});

