var scatterChart = new Highcharts.Chart({
   chart: {
      renderTo: 'top_left_chart', 
      defaultSeriesType: 'scatter',
      zoomType: 'xy',
      backgroundColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
      },
      style: {
        margin: ['0px 10px 20px 0px']
      },
      borderColor: '#e7e7e7',
      borderRadius: 10,
      borderWidth: 1
   },
   credits: {
     enabled: false
   },
   title: {
      text: 'Provider Distribution Profiles',
      style: {
         color: "#555555"
      }
   },
   subtitle: {
      text: '2010 YTD',
      style: {
         color: "#6ac520"
      }
   },
   xAxis: {
      title: {
         enabled: true,
         text: 'Provider Score',
         style: {
           margin: ['20px 0px 0px 0px'],
            color: "#555555"
         }
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
   },
   yAxis: {
      title: {
         text: '',
         style: {
            color: "#555555"
         }
      }
   },
   tooltip: {
      formatter: function() {
                return '<b>'+ this.series.name +'</b><br/>'+
            this.x +' Provider Score, '+ this.y +' Billed Amount';
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
              location.href = this.series.options.url;
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
   // Green 
   {
      name: "Dr. Johnson",
      data: [[223, 256894]],
      color: 'rgba(0,133,63,.5)',
      url: "http://localhost:3000/nucleus-provider-search"
   },
   {
      name: "Dr. Schulzke",
      data: [[279, 296586]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Sanders",
      data: [[336, 302487]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Johnson",
      data: [[426, 312487]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Sampson",
      data: [[315, 387562]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Jackson",
      data: [[389, 302487]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Valla",
      data: [[489, 298675]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Heil",
      data: [[368, 298675]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Gearson",
      data: [[248, 415236]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Briggs",
      data: [[253, 248151]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Finn",
      data: [[286, 263895]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Woods",
      data: [[257, 385962]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Lambros",
      data: [[476, 458965]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Hansen",
      data: [[402, 563245]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. James",
      data: [[436, 506895]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. North",
      data: [[463, 503689]],
      color: 'rgba(0,133,63,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   // Yellow
   {
      name: "Dr. Pierson",
      data: [[579, 452896]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Stevens",
      data: [[653, 489265]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Saltsman",
      data: [[720, 568942]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Caldera",
      data: [[568, 599867]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Dumas",
      data: [[568, 789456]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Witt",
      data: [[526, 678452]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Colley",
      data: [[589, 623589]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Neilson",
      data: [[621, 502365]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Gibbons",
      data: [[745, 495225]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Anderson",
      data: [[423, 356865]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Zaragoza",
      data: [[456, 389567]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Davis",
      data: [[502, 566231]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Stepan",
      data: [[569, 604235]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Jones",
      data: [[623, 648596]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Backman",
      data: [[693, 798653]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Tolboe",
      data: [[702, 723568]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Ludlow",
      data: [[691, 326589]],
      color: 'rgba(229,181,58,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   // Red
   {
      name: "Dr. Smith",
      data: [[923, 869565]],
      color: 'rgba(152,0,46,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Dickenson",
      data: [[902, 799653]],
      color: 'rgba(152,0,46,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Dickenson",
      data: [[890, 778956]],
      color: 'rgba(152,0,46,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
      name: "Dr. Dickenson",
      data: [[852, 765989]],
      color: 'rgba(152,0,46,.5)',
      url: "http://demo.get-nucleus.com/nucleus-provider-search"
   },
   {
       name: "Dr. Hanson",
       data: [[812, 789562]],
       color: 'rgba(152,0,46,.5)',
       url: "http://demo.get-nucleus.com/nucleus-provider-search"
    }]
});

