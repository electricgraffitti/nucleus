var barChart = new Highcharts.Chart({
   chart: {
      renderTo: 'accordion_stat_middle_chart',
      defaultSeriesType: 'column',
			width: 229,
			height: 256,
			margin: [50,25,60,40],
      // backgroundColor: {
      //   linearGradient: [0, 0, 0, 300],
      //   stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
      // },
      // borderColor: '#e7e7e7',
      // borderRadius: 0,
      borderWidth: 0
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
      categories: ['Total', 'Per Visit'],
      title: {
         text: null,
         enabled: false
         // text: 'Patient Averages',
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
        style: {
          color: '#555555',
          font: '10px Arial, Helvetica, sans-serif'
        }
      }
   },
   tooltip: {
      formatter: function() {
         return '<b>'+ this.x +'</b><br/>'+
             this.series.name +': '+ this.y + " Patients";
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
		width: 200,
    borderRadius: 0,
    borderWidth: 1,
    borderColor: "#e3e3e3",
    itemWidth: 100,
    layout: "horizontal",
    symbolWidth: 13,
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
      data: [127, 39],
      color: "#398dcc"
      }, {
      name: 'Dr. Smith',
      data: [271, 103],
      color: '#f47727'
      }]
});
