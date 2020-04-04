google.load("visualization", "1", {packages:["corechart"]});
google.setOnLoadCallback(drawCharts);
function drawCharts() {
  
  var barData = google.visualization.arrayToDataTable([
    ['Year', 'Amount Raised'],
    ['2018',  220000],
    ['2019',  20000],
  
  ]);
 
  var barOptions = {
    focusTarget: 'category',
    backgroundColor: 'transparent',
    colors: ['#fed136'],
    fontName: 'Montserrat',
    chartArea: {
      width: '50%',
      height: '70%'
    },
    bar: {
      groupWidth: '80%'
    },
    hAxis: {
      textStyle: {
        fontSize: 11
      }
    },
    vAxis: {
      minValue: 0,
      maxValue: 1500,
      baselineColor: '#DDD',
      gridlines: {
        color: '#DDD',
        count: 4
      },
      textStyle: {
        fontSize: 11
      }
    },
    legend: {
      position: 'bottom',
      textStyle: {
        fontSize: 12
      }
    },
    animation: {
      duration: 1200,
      easing: 'out',
			startup: true
    }
  };
 
  var barChart = new google.visualization.ColumnChart(document.getElementById('bar-chart'));
 
  barChart.draw(barData, barOptions);
  
}
