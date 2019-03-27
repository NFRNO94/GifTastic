// create the cariable for the array of topics
var topics = ["Metallica", "Green Day", "Slayer", "Behemoth", "Motley Crue", "Five Finger Death Punch", ""]

//create a variable for the giphy URL
var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=YyckZEfvfTxY7XAnYvEnBh6khc3tfCcc";

//ajax call to get the information from the API
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {
    console.log(response);
  });

