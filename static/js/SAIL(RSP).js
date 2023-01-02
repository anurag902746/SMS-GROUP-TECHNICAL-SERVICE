// Level_Wise_Cases_Percentage:->
// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
  var data = google.visualization.arrayToDataTable([
  ['Task', 'Cases'],
  ['Level 1', 8],
  ['Level 2', 2],
  ['TCS', 4]

]);

  // Optional; add a title and set the width and height of the chart
  var options = {'title':'Cases:(2017-2022)', 'width':400, 'height':300};

  // Display the chart inside the <div> element with id="piechart"
  var chart = new google.visualization.PieChart(document.getElementById('piechart'));
  chart.draw(data, options);
}

//Year_Wise_Cases_Percentage:->
function getOption(){
  var selectYear=document.querySelector('#year-dropdown').value;
  var selectLevel=document.querySelector('#level-dropdown').value;
  var selectFunction=document.querySelector('#function-dropdown').value;
  console.log(selectYear)
  console.log(selectLevel)
  console.log(selectFunction)
}
