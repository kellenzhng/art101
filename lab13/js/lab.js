// Lab 13: Loops
// Author: Kellen Zheng
// Date: 5/23/23

//function that iterates from 1-200
//it outputs "Fizz", "Buzz", or "Boom" depending on the number factors
function fizzBuzz() {
  for (i=1; i<=200; i++) {
    var strOrder = " ";
    //if the number is a factor of 3, "Fizz"
    if (i % 3 == 0) {
      strOrder += "Fizz";
    }
    //if the number is a factor of 5, "Buzz"
    if (i % 5 == 0) {
      strOrder += "Buzz";
    }
    //if the number is a factor of 7, "Boom"
    if (i % 7 == 0) {
      strOrder += "Boom";
    }
    //if the number is not a factor, output the number
    if (strOrder == " ") {
      strOrder = i;
    }
    //print the output into the <div>
    $("#output").append("<div>" + strOrder);
  }
}

function main() {
  fizzBuzz();
}


main();
