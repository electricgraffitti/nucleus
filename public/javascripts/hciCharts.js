// Set Base Colors for Charts
Highcharts.setOptions({
   colors: [
      '#00853f',
      '#009fc2',
      '#98002e',
      '#e5b53a',
      '#00467f',
      '#78496a'
   ]
});

// Scatter Plot
$.getScript('javascripts/data/scatterData.js');

// Bar Graph
$.getScript('javascripts/data/barData.js');

// Line Chart
$.getScript('javascripts/data/lineData.js');

// Pie Chart
$.getScript('javascripts/data/pieChart.js');