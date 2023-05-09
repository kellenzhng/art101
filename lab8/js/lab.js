// Lab 8: Anon Functions and Callbacks
// Author: Kellen Zheng
// Date: 5/8/2023

function main() {
//create an array to hold some numbers
  var arrayNums = [7, 18, 34, 12, 100];

//function that halves a number
  function divideHalf(x){
      var result = (x / 2);
      return (result);
  }

//function call test
  console.log("Function Call test: ");
  
  console.log("Half of 43 is: ", divideHalf(43));
  console.log("Half of 76 is: ", divideHalf(76));
  

//callback function in a variable
console.log("My array: ", arrayNums);

 var resultHalf = arrayNums.map(divideHalf);
 console.log("My array in half: ", resultHalf);
 
//callback with an anon function in a variable
  var resultMult = arrayNums.map(function(x){
    return (x * 2.5);
});

console.log("My array times 2.5: ", resultMult);

var outputEl = document.getElementById("output"); 
outputEl.innerHTML = ("My array: " + arrayNums + 
" <br> " + "My array in half: " + resultHalf +
" <br> " + "My array times 2.5: " + resultMult);

}

// let's get this party started
main();
