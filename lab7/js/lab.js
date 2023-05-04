// Lab 7: Functions
// Author: Kellen Zheng
// Date: 5/3/2023

// Functions
function sortUsername() {
        //get user's input for name
        var username = window.prompt("Please enter your username: ");

        //turns the user input into an array, identified by no separator so it splits every character into an element
        var arrayUsername = username.split('');

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

  document.writeln("Here is your new username, I hope you like it!",
  "<br></br>", sortUsername(), "<br></br>");
