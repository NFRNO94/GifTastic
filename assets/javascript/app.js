// create the variable for the array of topics
var topics = ["Metallica", "Green Day", "Slayer", "Joyner Lucas", "Motley Crue",
  "Eminem", "2pac", "Biggie Smalls", "Tech N9ne", "Wiz Khalifa", "Snoop Dogg", "Yelawolf", "Nas",
  "Kendrick Lamar", "J Cole", "ScHoolboy Q", "Hopsin", "Slipknot", "Method Man", "Papa Roach", "Nirvana",
  "Pantera", "Gene Simons", "Ozzy Osbourne", "Lil Wayne", "T-Pain", "Chris Brown", "XXXTentacion", "System of a Down",
  "Alice in Chains", "Red Hot Chilli Peppers", "Three Days Grace", "Korn", "Tyler the Creator"];

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

  console.log(artist);
});

renderButtons();

$(document).on("click", '.artist' , function () {

  $("#gifDiv").empty();

  var artistName = $(this).attr("data-name");

  //create a variable for the giphy URL
  var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + artistName + "&limit=12&api_key=YyckZEfvfTxY7XAnYvEnBh6khc3tfCcc";

  //ajax call to get the information from the API
  $.ajax({
    url: queryURL,
    method: "GET"
  }).then(function (response) {

    var results = response.data;

    for (var i = 0; i < results.length; i++) {

      if (results[i].rating !== "r") {

        var gifContainer = $("<div>");

        gifContainer.addClass("image-align");

        var rating = results[i].rating;

        var p = $("<p>").text("Rating: " + rating);

        var artistImage = $("<img>");

        artistImage.attr("src", results[i].images.fixed_height_still.url)
        .attr("data-still", results[i].images.fixed_height_still.url)
        .attr("data-animate", results[i].images.fixed_height.url)

        artistImage.addClass("artistImage");
        artistImage.attr("src", results[i].images.fixed_height.url);

        gifContainer.append(artistImage);

        gifContainer.append(p);

        $("#gifDiv").prepend(gifContainer);

      }
    }

    console.log(response);

  });

});

$(document).on("click", '.artistImage' , function () {

  var state = $(this).attr("data-state");

  if (state === "still") {

    $(this).attr("src", $(this).attr("data-animate"));

    $(this).attr("data-state", "animate");

  } else {
    $(this).attr("src", $(this).attr("data-still"));

    $(this).attr("data-state", "still");
  }


});