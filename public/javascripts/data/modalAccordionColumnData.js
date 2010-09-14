var barChart = new Highcharts.Chart({
   chart: {
      renderTo: 'accordion_stat_left_chart',
      defaultSeriesType: 'column',
			margin: [50,25,60,50],
			width: 229,
			height: 256,
      backgroundColor: {
        linearGradient: [0, 0, 0, 300],
        stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
      },
      borderColor: '#e7e7e7',
      borderRadius: 0,
      borderWidth: 1
   },
   credits: {
     enabled: false
   },
   title: {
      text: null,
      // style: {
      //   color: '#555555',
      //   font: '16px Arial, Helvetica, sans-serif'
      // } 
   },
   xAxis: {
      categories: ['Paid', 'Billed'],
      title: {
        text: null,
				enabled: false
         // text: 'Provider Billing',
         // style: {
         //   color: '#555555',
         //   font: '12px Arial, Helvetica, sans-serif'
         // }
      },
      labels: {
        style: {
          color: '#555555',
          font: '10px Arial, Helvetica, sans-serif'
        }
      }
   },
   yAxis: {
      min: 0,
      title: {
      	text: null,
				enabled: false
      },
			labels: {
        formatter: function() {
          return "$" + this.value/1000 + "k";
        },
        style: {
          color: "#555555",
          font: "10px Arial, Helvetica, sans-serif"
        }
      },
   },
   tooltip: {
      formatter: function() {
         return '<b>' + this.x +'</b><br/>'+
             this.series.name +': $'+ this.y + " Billed";
      },
      style: {
        font: '12px Arial, Helvetica, sans-serif'
      },
      borderRadius: 0,
      borderWidth: 1
   },
   plotOptions: {
    column: {
			groupPadding: .1,
      pointWidth: 32
    }
   },
   legend: {
     align: 'left',
 		 width: 197,
     borderRadius: 0,
     borderWidth: 1,
     borderColor: "#e3e3e3",
     itemWidth: 98,
     layout: "horizontal",
     symbolWidth: 13,
     symbolHeight: 10,
     symbolPadding: 2,
     itemStyle: {
         fontWeight: 'bold',
         color: '#555555',
         fontSize: '10px'
     }
   },
   credits: {
      enabled: false
   },
   series: [{
      name: 'Specialty Avg',
      data: [86923, 217886],
      color: "#009fc2"
      }, {
      name: 'Dr. Smith',
      data: [254032, 469950],
      color: '#e37f1c'
      }]
});
