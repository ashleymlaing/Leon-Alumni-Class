$(document).ready(function(){


  var apiKey = "eXf7NdB0NeknaXZjshOxkgEm6TUz55gEtYtKO51Q";
  var apiURL = "https://api.nasa.gov/planetary/apod?api_key=" + apiKey;
  $.ajax({
  url: apiURL,
  // Work with the response
  success: function( response ) {
  console.log( response ); // server response
  $("body").html("<img src='"+response.hdurl+"'>")
  },
  error: function(r){
  console.log(r); //server response
  }
  });
})
