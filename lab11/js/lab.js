// Lab 11 - Libraries & jQuery
// Author: Kellen Zheng
// Date: 5/17/23


function main() {
  //hides all special class <div>s beforehand
  $(".special").hide();

  //creating a button at the end of each class "minor-section" <div>
  $(".minor-section").append("<button class = 'my-button' >Show me the dog!</button>");

  //add event listener to Challenge <div> button to toggle its special <div>
  $("#challenge .my-button").click(function(){
    $("#challenge .special").toggle();
  })
  
  //add event listener to Problems <div> button to toggle its special <div>
  $("#problems .my-button").click(function(){
    $("#problems .special").toggle();
  })

  //add event listener to Reflection <div> button to toggle its special <div>
  $("#reflection .my-button").click(function(){
    $("#reflection .special").toggle();
  })

  //add event listener to Results <div> button to toggle its special <div>
  $("#results .my-button").click(function(){
    $("#results .special").toggle();
  })


}

main();
