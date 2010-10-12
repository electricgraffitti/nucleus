var scatterChart = new Highcharts.Chart({
   chart: {
      renderTo: 'scatter_chart', 
      defaultSeriesType: 'scatter',
      zoomType: 'xy',
      // backgroundColor: {
      //   linearGradient: [0, 0, 0, 300],
      //   stops: [[0, 'rgb(255,255,255)'],[1, 'rgb(234,234,234)']]
      // },
      style: {
        margin: ['0px 0px 40px 0px'],
        font: '16px Arial, Helvetica, sans-serif'
      },
      borderRadius: 0
   },
   credits: {
     enabled: false
   },
   title: {
     text: null
      // style: {
      //    color: "#5bab46",
      //    font: '12px Arial, Helvetica, sans-serif'
      // }
   },
   subtitle: {
      enabled: false
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
      showLastLabel: true,
			gridLineWidth: 1
   },
   yAxis: {
     labels: {
       formatter: function() {
         return "$" + Highcharts.numberFormat(this.value);
        },
        x: -2,
        style: {
          color: '#555555',
          font: '10px Arial, Helvetica, sans-serif',
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
      },
      borderWidth: 1,
      borderRadius: 0
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
      color: 'rgba(91,171,70,1)',
      url: "http://localhost:3000/providers/1"
   },
   {
      name: "Dr. Schulzke",
      data: [[279, 296586]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Sanders",
      data: [[336, 302487]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Johnson",
      data: [[426, 312487]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Sampson",
      data: [[315, 387562]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Jackson",
      data: [[389, 302487]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Valla",
      data: [[489, 298675]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Heil",
      data: [[368, 298675]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Gearson",
      data: [[248, 415236]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Briggs",
      data: [[253, 248151]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Finn",
      data: [[286, 263895]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Woods",
      data: [[257, 385962]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Lambros",
      data: [[476, 458965]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Hansen",
      data: [[402, 563245]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. James",
      data: [[436, 506895]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. North",
      data: [[463, 503689]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Emerson",
      data: [[219, 576895]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Bills",
      data: [[247, 602352]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Irvine",
      data: [[263, 426587]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Greer",
      data: [[287, 435201]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Hamil",
      data: [[255, 453201]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. James",
      data: [[304, 478563]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Craig",
      data: [[235, 369854]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. McClain",
      data: [[273, 425630]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Braxton",
      data: [[315, 469532]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Bender",
      data: [[345, 503265]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Atwood",
      data: [[226, 463256]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Vaughn",
      data: [[389, 489752]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Miller",
      data: [[288, 356248]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Peller",
      data: [[365, 515896]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Krause",
      data: [[395, 498653]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Sellers",
      data: [[389, 405632]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Ackers",
      data: [[379, 389563]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Witt",
      data: [[415, 415236]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Wells",
      data: [[420, 400215]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Colley",
      data: [[425, 436256]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Ells",
      data: [[450, 486596]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Mickelson",
      data: [[479, 402356]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Crowe",
      data: [[427, 423986]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Collom",
      data: [[489, 426350]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Wright",
      data: [[515, 389653]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Shapiro",
      data: [[497, 400896]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Arnold",
      data: [[505, 379562]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Stiponov",
      data: [[399, 402569]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Lightfoot",
      data: [[466, 415798]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Eldridge",
      data: [[502, 402589]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Singh",
      data: [[515, 436589]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Cruise",
      data: [[452, 526356]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Hall",
      data: [[399, 415889]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Peterson",
      data: [[499, 469865]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Laidlaw",
      data: [[523, 469887]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Coleman",
      data: [[589, 325698]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. DeMille",
      data: [[599, 348756]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Barnes",
      data: [[603, 400562]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Fullerton",
      data: [[576, 355698]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Tyler",
      data: [[598, 300856]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Brokaw",
      data: [[577, 389562]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Dille",
      data: [[568, 322659]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Stahlsberg",
      data: [[577, 302589]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Chatteron",
      data: [[602, 322659]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Sidoway",
      data: [[588, 336958]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Anderson",
      data: [[423, 356865]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Zaragoza",
      data: [[456, 389567]],
      color: 'rgba(91,171,70,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   // Yellow
   {
      name: "Dr. Pierson",
      data: [[579, 452896]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Stevens",
      data: [[653, 489265]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Caldera",
      data: [[568, 599867]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Dumas",
      data: [[568, 789456]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Witt",
      data: [[526, 678452]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Coller",
      data: [[589, 623589]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Neilson",
      data: [[621, 502365]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Davis",
      data: [[502, 566231]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Stepan",
      data: [[569, 604235]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Jones",
      data: [[623, 648596]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Backman",
      data: [[693, 798653]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Gibbons",
      data: [[745, 495225]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Tolboe",
      data: [[702, 723568]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Saltsman",
      data: [[720, 568942]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Ludlow",
      data: [[691, 326589]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Alberts",
      data: [[653, 802564]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Kayman",
      data: [[785, 565895]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Ohmie",
      data: [[722, 763565]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Richards",
      data: [[763, 589774]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Gardner",
      data: [[699, 345986]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Ellis",
      data: [[625, 745124]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Archer",
      data: [[786, 468957]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Newton",
      data: [[655, 725487]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Fenton",
      data: [[735, 561235]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Easton",
      data: [[684, 384567]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Woolfenden",
      data: [[641, 823564]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Clutter",
      data: [[799, 578415]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Jefferies",
      data: [[602, 714241]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Irvine",
      data: [[724, 574124]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Powers",
      data: [[645, 341521]],
      color: 'rgba(244,119,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Jensen",
      data: [[326, 615896]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Pullen",
      data: [[378, 623568]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Fillmore",
      data: [[402, 615326]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Mangle",
      data: [[326, 689562]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Pulse",
      data: [[405, 702365]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Brown",
      data: [[389, 689563]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Wilson",
      data: [[402, 685965]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Moore",
      data: [[341, 659865]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Thomas",
      data: [[425, 752635]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Garcia",
      data: [[455, 623568]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Lee",
      data: [[489, 689523]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Walker",
      data: [[388, 625356]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. King",
      data: [[455, 745236]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Adams",
      data: [[489, 689563]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Turner",
      data: [[506, 723569]],
      color: 'rgba(247,178,25,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   // Red
   {
      name: "Dr. Smith",
      data: [[923, 869565]],
      color: 'rgba(217,59,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Dickenson",
      data: [[902, 799653]],
      color: 'rgba(217,59,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Dickenson",
      data: [[890, 778956]],
      color: 'rgba(217,59,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
      name: "Dr. Dickenson",
      data: [[852, 765989]],
      color: 'rgba(217,59,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
   },
   {
       name: "Dr. Hanson",
       data: [[812, 789562]],
      color: 'rgba(217,59,39,1)',
      url: "http://demo.get-nucleus.com/providers/1"
    }]
});

$('#dash2 .export_option').click(function(e) {
    scatterChart.exportChart();
    e.preventDefault();
});

