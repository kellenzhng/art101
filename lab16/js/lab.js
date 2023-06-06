// Lab 16 - JSON and APIs (XKCD comic!)
// Author: Kellen Zheng
// Date: 6/5/2023

function main() {

//variable to hold xkcd object data
var comicObj;

var URLpre = "https://xkcd.com/";
var URLpost = "info.0.json";

$.ajax({
  url: "https://xkcd.com/info.0.json",
  data: {},
  type: "GET",
  dataType : "json",
  success: function(data) {
      comicObj = "WORKS";
      $("#output").html(comicObj);
  },
  error: function (jqXHR, textStatus, errorThrown) { 
      console.log("Error:", textStatus, errorThrown);
  }
})

}

main();
