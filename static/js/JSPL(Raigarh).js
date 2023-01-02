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
};

let selectLevel=document.querySelector('#level-dropdown');
let function1=document.getElementById('drop-down1');
let function2=document.getElementById('drop-down2');
let function3=document.getElementById('drop-down3');

//To switch the function based on the level selection:
selectLevel.addEventListener('change',function(){
 var levelValue=this.value;
 if(levelValue==="Level_2"){
 function1.style.display="none";
 function2.style.display="inline";
 function3.style.display="none";
 }
 else if(levelValue==="TCS_Server"){
 function1.style.display="none";
 function2.style.display="none";
 function3.style.display="inline";
 }
 else{
 function1.style.display="inline";
 function2.style.display="none";
 function3.style.display="none";
 }
});
//
//function getOption(){
//  var selectYear=document.querySelector('#year-dropdown').value;
//  var selectLevel=document.querySelector('#level-dropdown').value;
//  var selectFunction=document.querySelector('#function-dropdown').value;
//  var element=document.getElementsByClassName('serviceList');
//  console.log(selectYear)
//  console.log(selectLevel)
//  console.log(selectFunction)
//  if(selectYear==="2017"){
//   if(selectLevel==="Level_1")
//   {
//     if(selectFunction==="All"){
//     element.style.display="block";
//     console.log("Hello");
//     }
//     else if(selectFunction==="Drive_PLC"){}
//     else if(selectFunction==="Instrumentation_PLC"){}
//     else if(selectFunction==="Common_PLC"){}
//     else if(selectFunction==="Safety_PLC"){}
//   }
//   else if(selectLevel==="TCS_Server")
//   {
//     if(selectFunction==="All"){}
//     else if(selectFunction==="TLC"){}
//     else if(selectFunction==="MLC"){}
//     else if(selectFunction==="HMO"){}
//     else if(selectFunction==="RAM"){}
//     else if(selectFunction==="HSA"){}
//   }
//   else if(selectLevel==="Level_2")
//   {
//     if(selectFunction==="All"){}
//     else if(selectFunction==="CCC"){}
//     else if(selectFunction==="MMS"){}
//     else if(selectFunction==="DSC"){}
//   }
//  }
//  else if(selectYear==="2018"){}
//  else if(selectYear==="2019"){}
//  else if(selectYear==="2020"){}
//  else if(selectYear==="2021"){}
//  else if(selectYear==="2022"){}
//}
