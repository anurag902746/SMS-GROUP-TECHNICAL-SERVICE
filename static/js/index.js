"use strict";
// function openPage(pageName, elmnt, color) {
//   var i, tabcontent, tablinks;
//   tabcontent = document.getElementsByClassName("tabcontent");
//   for (i = 0; i < tabcontent.length; i++) {
//     tabcontent[i].style.display = "none";
//   }
//   tablinks = document.getElementsByClassName("tablink");
//   for (i = 0; i < tablinks.length; i++) {
//     tablinks[i].style.backgroundColor = "";
//   }
//   document.getElementById(pageName).style.display = "block";
//   elmnt.style.backgroundColor = color;
// }
// document.getElementById("defaultOpen").click();
var customer1 = document.getElementById("customers-overview-list1");
var customer2 = document.getElementById("customers-overview-list2");
var customer3 = document.getElementById("customers-overview-list3");
var customer4 = document.getElementById("customers-overview-list4");
var maincustomertab=document.getElementById("main-customer-container");
// document.write(customer2)
// document.write(customer3)
// document.write(customer4)

function myFunction1() {
  console.log(customer1.style.display)
  if(customer1.style.display==="")
  {
    maincustomertab.style.height="400px";
    customer1.style.display="inline-block";
    customer2.style.display="";
    customer3.style.display="";
    customer4.style.display="";
  }
  else{
    customer1.style.display="";
    maincustomertab.style.height="auto";
  }
}
function myFunction2() {
  console.log(customer2.style.display)
  if(customer2.style.display==="")
  {
    maincustomertab.style.height="400px";
    customer2.style.display="inline-block";
    customer1.style.display="";
    customer3.style.display="";
    customer4.style.display="";
  }
  else{
    customer2.style.display="";
    maincustomertab.style.height="auto";
  }
}
function myFunction3() {
  console.log(customer3.style.display)
  if(customer3.style.display==="")
  {
    maincustomertab.style.height="400px";
    customer3.style.display="inline-block";
    customer1.style.display="";
    customer2.style.display="";
    customer4.style.display="";
  }
  else{
    customer3.style.display="";
    maincustomertab.style.height="auto";
  }
}
function myFunction4() {
  console.log(customer4.style.display)
  if(customer4.style.display==="")
  {
    maincustomertab.style.height="400px";
    customer4.style.display="inline-block";
    customer1.style.display="";
    customer3.style.display="";
    customer2.style.display="";
  }
  else{
    customer4.style.display="";
    maincustomertab.style.height="auto";
  }
}
