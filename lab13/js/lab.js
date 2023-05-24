// Lab 13: Loops
// Author: Kellen Zheng
// Date: 5/23/23

//function that iterates from 1-200
//it outputs a custom phrase depending on the factor
function fizzBuzz(loopCount, factorArray, phraseArray) {
  for (i=1; i<=loopCount; i++) {
    var strOrder = " ";
    //if the number is a factor of 3, "Fizz"
    if (i % factorArray[0] == 0) {
      strOrder += phraseArray[0];
    }
    //if the number is a factor of 5, "Buzz"
    if (i % factorArray[1] == 0) {
      strOrder += phraseArray[1];
    }
    //if the number is a factor of 7, "Boom"
    if (i % factorArray[2] == 0) {
      strOrder += phraseArray[2];
    }
    //if the number is a factor of 9, "Bang"
    if (i % factorArray[3] == 0) {
      strOrder += phraseArray[3];
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
  //event listener that starts the function based on input
  $("#button").click(function(){
    //variable holding user input of number of runs
    var numLoops = $("#loopCount").val();
    //array holding user input of factors
    var factorArray = [$("#factorInput1").val(), $("#factorInput2").val(), $("#factorInput3").val(), $("#factorInput4").val()];
    //array holding user input of phrases
    var phraseArray = [$("#textInput1").val(), $("#textInput2").val(), $("#textInput3").val(), $("#textInput4").val()]
    fizzBuzz(numLoops, factorArray, phraseArray);
  })

}


main();
