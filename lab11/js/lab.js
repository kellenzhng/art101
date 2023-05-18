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

  //creating a RBG burrons to change color of other buttons
  $("#challenge").prepend("<button id = 'blue-change' class = 'blue'>Blue!</button>");
  $("#challenge").prepend("<button id = 'green-change' class = 'green'>Green!</button>");
  $("#challenge").prepend("<button id = 'red-change' class = 'red'>Red!</button>");

  //event listener to change button text red
  $("#red-change").click(function(){
    $(".my-button").removeClass('green blue');
    $(".my-button").toggleClass('red');
  })

  //event listener to change button text blue
  $("#blue-change").click(function(){
    $(".my-button").removeClass('green red');
    $(".my-button").toggleClass('blue');
  })

  //event listener to change button text green
  $("#green-change").click(function(){
    $(".my-button").removeClass('red blue');
    $(".my-button").toggleClass('green');
  })


}

main();
