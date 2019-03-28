// create the variable for the array of topics
var topics = ["Metallica", "Green Day", "Slayer", "Behemoth", "Motley Crue",
  "Eminem", "2pac", "Biggie Smalls", "Tech N9ne", "Wiz Khalifa", "Snoop Dogg", "Yelawolf", "Mozzy",
  "Kendrick Lamar", "J Cole", "ScHoolboy Q", "Hopsin", "Slipknot", "Soundgarden", "Papa Roach", "Nirvana"];

//create a function to render buttons
function renderButtons() {

  $("#artist-buttons").empty();

  //create a for loop to loop through the array
  for (var i = 0; i < topics.length; i++) {

    var topicButton = $('<button class="btn btn-light btn-sm">');

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

$(".artist").on("click", function () {

  $("#gifDiv").empty();

  var artistName = $(this).attr("data-name");

  //create a variable for the giphy URL
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + artistName + "&limit=10&api_key=YyckZEfvfTxY7XAnYvEnBh6khc3tfCcc";

  //ajax call to get the information from the API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    var results = response.data;

    for (var i = 0; i < results.length; i++) {

      if (results[i].rating !== "r") {

        var gifContainer = $("<div>");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var artistImage = $("<img>");

        artistImage.attr("src", results[i].images.fixed_height.url);


        gifContainer.append(artistImage);
        gifContainer.append(p);

        $("#gifDiv").prepend(gifContainer);

      }
    }

    console.log(response);

  });

});