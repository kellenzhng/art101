// Lab 7: Functions
// Author: Kellen ZHeng
// Date: 5/3/2023

// Functions
function sortUsername() {
        //get user's input for name
        var username = prompt("Please enter your username: ");

        //turns the user input into an array, identified by no separator so it splits every character into an element
        var arrayUsername = username.split('');

        //create a new array to store the sorted array
        var arrayUsernameSorted = arrayUsername.sort();

        //create an array to join the sorted array elements into a single string
        var usernameSorted = arrayUsernameSorted.join('');

        //return the new sorted username!
        return usernameSorted;
  }

  documentwriteln("Here is your new username, I hope you like it!",
  "<br></br>", sortUsername(), "<br></br>");

  