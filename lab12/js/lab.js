// Lab 12: Conditionals
// Author: Kellen Zheng
// Date: 5/22/23

//function that takes in user input and returns a House
// based on the input's character length
function sortingHat(userInput) {
  var len = userInput.length;
  var mod = len % 4;
  //array that lists all the houses
  var houses = ["Gryffindor", "Hufflepuff", "Ravenclaw", "Slytherin"];
  //return the associated house with the array element
  return houses[mod];
}

function main() {
  //adding event listener to the button
  $("#button").click(function(){
    //variable that stores user input data
    var name = $("#userInput").val();
    //prints the sortingHat output in the "output" <div>
    $("#output").html("The Sorting Hat has sorted you into " + sortingHat(name) + "!" + "<br></br>");
    //conditionals that outputs a short description corresponding to each house result
    if (sortingHat(name) == "Gryffindor") {
      $("#output").append("The lion, a valiant symbol of courage and chivalry.");
    }
    else if (sortingHat(name) == "Hufflepuff") {
      $("#output").append("The badger, a diligent mascot loyal to others.");
    } 
    else if (sortingHat(name) == "Ravenclaw") {
      $("#output").append("The eagle, an intelligent being full of wit and knowledge.");
    } 
    else if (sortingHat(name) == "Slytherin") {
      $("#output").append("The snake, a cunning character with an eye for ambition.");
    }

  });
  
}

main();
