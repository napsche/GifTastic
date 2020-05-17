//create array of strings related to topic that interests you
//I chose to do TV shows 
var topics = ["Seinfeld", "King of the Hill", "Chopped", "Bob's Burgers", "Family Guy"];

//Giphy api key hBteWo8WnOqhrM1peLgcOe1dKgqtXOX0

//function for displaying TV Show info
function renderButtons () {
    //delete old buttons
    $("#buttons-view").empty();

    //loop through array of TV shows
    for (var i = 0; i < topics.length; i++) {
        //make button for each string in the array
        var show = $("<button>");
        //add a class
        show.addClass("show");
        //add data-attribute with name of show
        show.attr({"data-name": topics[i]});
        //giving the button's text the value of the show 
        show.text(topics[i]);
        //add button to html
        $("#buttons-view").append(show);
        console.log(topics[i]);
    }
}
//function to add tv show when button is clicked
$("#add-tvshow").on("click", function(event) {
    //prevents form from submitting itself
    event.preventDefault();
    //grab text from input box
    var showInput = $("#tvshow-input").val().trim();
    //add show from input to our array of tvshows
    topics.push(showInput);
    renderButtons();
    
});
//calling renderButtons to display initial array of shows
renderButtons();

//event listener for button click
$("#buttons-view").on("click", function() {
   
    //use this keyword to specify the specific button that was clicked
    var tvShow = $(this).data("name"); 
    //store our giphy API URL
    //will search Giphy for the name of the tv show
    var queryURL = "https://api.giphy.com/v1/gifs/search?api_key=hBteWo8WnOqhrM1peLgcOe1dKgqtXOX0&q=tv+show+" + tvShow + "&limit=10&offset=0&rating=&lang=en";
    
    //perform AJAX GET request to query URL
    $.ajax({
        url: queryURL,
        method: "GET"
    })
    //after the data from AJAX request comes back
    .done(function(response) {
        //store array of results
        var results = response.data;
        //loop through every result item
        for (var i = 0; i < results.length; i++) {
            //create Div to hold the Gif
            var gifDiv = $("<div>");
            //store the item's rating
            var rating = results[i].rating;
            //create p tag to hold results
            var pTag = $("<p>").text("Rating: " + rating);
            //create image tag
            var showImage = $("<img>");
            //give image tag a source attribute
            showImage.attr("src", results[i].images.fixed_height.url);
            //adding class
            showImage.addClass(".gif");
            
            //append the pTag and image to the div
            gifDiv.append(pTag);
            gifDiv.append(showImage);
            //prepend to div
            $("#gifs-appear-here").prepend(gifDiv);
        }
        
    });
});
$(".gif").on("click", function() {
    var state = $(this).attr("data-state");
    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    } else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }

});

