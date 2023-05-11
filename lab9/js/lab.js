// Lab 9 - Javascript for the Web
// Author: Kellen Zheng
// Date: 5/10/23

function main() {
  //variable locating the 'output' <div> in HTML
  var outputEl = document.getElementById("output");

  //variable creating a new element
  var new1El = document.createElement("p");

  //set the new element's ID
  new1El.id = "p";

  //changing the html content of the new element
  new1El.innerHTML = "something new";

  //creating another new element
  var new2El = document.createElement("p2");

  //changing the html content of the new element
  new2El.innerHTML = "something even newer!";

  //appending both new elements to original output <div>
  outputEl.appendChild(new1El);
  outputEl.appendChild(new2El);

  //changing CSS attributes of the page
  new1El.style.fontStyle = "italic";
  new2El.style.fontWeight = "1000";
  new2El.style.color = "red";
  new2El.style.fontSize = "x-large";

  //creating yet another new element, but as an IMG
  var new3El = document.createElement("img");

  //setting the new element's image path
  new3El.setAttribute('src', "img/sweatyrilakkuma.png");

  //putting the image BEFORE the other elements
  outputEl.prepend(new3El);

}

// let's get this party started
main();
