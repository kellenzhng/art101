// Lab 10: JavaScript Events and Forms
// Author: Kellen Zheng
// Date: 5/15/23

// Function from Lab7
function sortUsername(userName) {

  //turns the user input into an array, identified by no separator so it splits every character into an element
  var arrayUsername = userName.split('');

  //create a new array to store the sorted array
  //also sorts the array in a way that compares its elements in all lowercases
  var arrayUsernameSorted = arrayUsername.sort(function (a, b)
  {return a.toLowerCase().localeCompare(b.toLowerCase());
  });

  //create an array to join the sorted array elements into a single string
  var usernameSorted = arrayUsernameSorted.join('');

  //return the new sorted username!
  return usernameSorted;
}

function main() {
  //variable to locate the button in HTML
  var buttonEl = document.getElementById("my-button");
  //adding event listener to button

  buttonEl.addEventListener('click', function(){
    //variable to contain input field value
    var userInput = document.getElementById("user-name").value;
    //variable to create a paragraph body in HTML
    var outputP = document.createElement("p");
    //printing text and output of the sorting function to the new paragraph body
    outputP.innerHTML = "Here is your new username, I hope you like it!" + "<br></br>" + sortUsername(userInput);
    //putting the output text into the "output" <div> of the HTML
    document.getElementById("output").appendChild(outputP);
  })

}

main();
