var scatterChart = new Highcharts.Chart({
   chart: {
      renderTo: 'top_right_chart', 
      defaultSeriesType: 'scatter',
      zoomType: 'xy',
      backgroundColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
      },
      style: {
        margin: ['0px 10px 20px 0px'],
        font: '16px Arial, Helvetica, sans-serif'
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
         color: "#555555",
         font: '16px Arial, Helvetica, sans-serif'
      }
   },
   subtitle: {
      text: '2010 YTD',
      style: {
         color: "#6ac520",
         font: '12px Arial, Helvetica, sans-serif'
      }
   },
   xAxis: {
      title: {
        enabled: true,
        text: 'Provider Score',
        style: {
         margin: ['20px 0px 0px 0px'],
         color: "#555555",
         font: '12px Arial, Helvetica, sans-serif'
        }
      },
      labels: {
        style: {
          color: '#555555',
          font: '10px Arial, Helvetica, sans-serif'
        }
      },
      startOnTick: true,
      endOnTick: true,
      showLastLabel: true
   },
   yAxis: {
     labels: {
       formatter: function() {
         return "$" + Highcharts.numberFormat(this.value);
        },
        style: {
          color: '#555555',
          font: '10px Arial, Helvetica, sans-serif'
        }
      },
      title: false
   },
   tooltip: {
      formatter: function() {
        return '<b>'+ this.series.name +'</b><br/>'+ this.x +' Provider Score, '+ this.y +' Billed Amount';
      },
      style: {
        font: '12px Arial, Helvetica, sans-serif'
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
          radius: 5
        },
        shadow: true
      }
   },
   series: [
   // Green 
   {
      name: "Dr. Johnson",
      data: [[223, 256894]],
      color: 'rgba(0,133,63,1)',
      url: "http://localhost:3000/providers/1"
   },
   {
      name: "Dr. Schulzke",
      data: [[279, 296586]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Sanders",
      data: [[336, 302487]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Johnson",
      data: [[426, 312487]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Sampson",
      data: [[315, 387562]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Jackson",
      data: [[389, 302487]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Valla",
      data: [[489, 298675]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Heil",
      data: [[368, 298675]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Gearson",
      data: [[248, 415236]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Briggs",
      data: [[253, 248151]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Finn",
      data: [[286, 263895]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Woods",
      data: [[257, 385962]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Lambros",
      data: [[476, 458965]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Hansen",
      data: [[402, 563245]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. James",
      data: [[436, 506895]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. North",
      data: [[463, 503689]],
      color: 'rgba(0,133,63,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   // Yellow
   {
      name: "Dr. Pierson",
      data: [[579, 452896]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Stevens",
      data: [[653, 489265]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Saltsman",
      data: [[720, 568942]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Caldera",
      data: [[568, 599867]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Dumas",
      data: [[568, 789456]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Witt",
      data: [[526, 678452]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Colley",
      data: [[589, 623589]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Neilson",
      data: [[621, 502365]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Gibbons",
      data: [[745, 495225]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Anderson",
      data: [[423, 356865]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Zaragoza",
      data: [[456, 389567]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Davis",
      data: [[502, 566231]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Stepan",
      data: [[569, 604235]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Jones",
      data: [[623, 648596]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Backman",
      data: [[693, 798653]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Tolboe",
      data: [[702, 723568]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Ludlow",
      data: [[691, 326589]],
      color: 'rgba(229,181,58,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   // Red
   {
      name: "Dr. Smith",
      data: [[923, 869565]],
      color: 'rgba(152,0,46,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Dickenson",
      data: [[902, 799653]],
      color: 'rgba(152,0,46,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Dickenson",
      data: [[890, 778956]],
      color: 'rgba(152,0,46,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Dickenson",
      data: [[852, 765989]],
      color: 'rgba(152,0,46,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
       name: "Dr. Hanson",
       data: [[812, 789562]],
      color: 'rgba(152,0,46,1)',
      url: "http://demo.get-nucleus.com/providers/1"
    }]
});

