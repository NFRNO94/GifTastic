// create the variable for the array of topics
var topics = ["Metallica", "Green Day", "Slayer", "Behemoth", "Motley Crue", "Five Finger Death Punch",
  "Eminem", "2pac", "Biggie Smalls", "Tech N9ne", "Wiz Khalifa", "Snoop Dogg", "Yelawolf", "Mozzy",
  "Kendrick Lamar", "J Cole", "ScHoolboy Q", "Hopsin", "Slipknot", "Soundgarden", "Papa Roach", "Nirvana"];

//create a function to render buttons
function renderButtons() {

  $("#artist-buttons").empty();

  //create a for loop to loop through the array
  for (var i = 0; i < topics.length; i++) {

    var topicButton = $('<button class="btn btn-dark btn-sm">');

    topicButton.addClass("artist");

    topicButton.attr("data-name", topics[i]);

    topicButton.text(topics[i]);

    $("#artist-buttons").append(topicButton);
  }
}

$("#add-artist").on("click", function (event) {

  event.preventDefault()

  var artist = $("#artist-input").val().trim();

  topics.push(artist);

  renderButtons();

});

renderButtons();


var artistName = $(this).attr("data-name");
//create a variable for the giphy URL
var queryURL = "https://api.giphy.com/v1/gifs/search?q="  + artistName + "&api_key=YyckZEfvfTxY7XAnYvEnBh6khc3tfCcc";

//ajax call to get the information from the API
$.ajax({
    url: queryURL,
    method: "GET"
  }).then(function(response) {

    var results = response.data;

    for (var i = 0; i < results.length; i++) {
      
    }
    console.log(response);
  });

