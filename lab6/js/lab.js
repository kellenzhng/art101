// Lab 6: Arrays and Objects
// Author: Kellen ZHeng
// Date: 5/1/23

// Define Variables
var myTransport = ["Santa Cruz Metro", "walking", "rides from friends", "train"];

//creating an object for my main tranportation
var myMainRide = {
  make: "Santa Cruz Metro",
  model: "Publc bus",
  color: "White",
  year: "2018",
  age: function() {
    return 2023 - this.year;
  }
}

// Functions

// this is an example function and this comment tells what it doees and what parameters are passed to it.
function myFunction(param1, param2) {
  // some code here
  // return results;
}

function main() {
  console.log("Main function started.");
  // the code that makes everything happen

  //outputting array
  document.writeln("My forms of transportation: " + myTransport + "<br>");

  //outputing object
  document.writeln("My Main Ride: <pre>", 
    JSON.stringify(myMainRide, null, '\t'), "</pre>");

}

// let's get this party started
main();
