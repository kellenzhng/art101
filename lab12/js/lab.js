// Lab 12: Conditionals
// Author: Kellen Zheng
// Date: 5/22/23

//function that takes in user input and returns a House
// based on the input's character length
function sortingHat(userInput) {
  var len = userInput.length;
  var mod = len % 4;
  if (mod == 0) {
    return "Gryffindor";
  }
  else if (mod == 1) {
    return "Hufflepuff";
  }
  else if (mod == 2) {
    return "Ravenclaw";
  }
  else if (mod == 3) {
    return "Slytherin";
  }

}

function main() {
  $("#button").click(function(){
    var name = $("#userInput").val();
    $("#output").html("The Sorting Hat has sorted you into " + sortingHat(name) + "!");
  });
  
}

main();
