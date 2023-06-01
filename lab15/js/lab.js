// Lab 15- AJAX
// Author: Kellen Zheng
// Date: 5/31/23


function pokeWild() {
  //variable to contain a randomly generated number from whole Pokedex
  var pokeNum = Math.floor(Math.random() * (1010));

  $.ajax({
    //accessing PokeAPI
    url: "https://pokeapi.co/api/v2/pokemon/" + pokeNum,
    type: "GET",
    data: {},
  })
  .done(function(data) {
    console.log(data)
    //variable containing an image of the Pokemon in the API
    var imgAns = data.sprites.front_default;
    //outputting the Pokemon's name in HTML
    $("#output").html("A wild " + data.name + " has appeared!" + "<br></br>");
    //also outputting an image of the Pokemon to accompany the name
    $("#output").append("<img src=" + imgAns +">");
  })
 }

function main() {
  //event listener to the Pokemon API
  $("#activate").click(function(){
    //hides the grass image
    $("#grass").hide();
    //calls the PokeAPI function
    pokeWild();
  });
}

main();
