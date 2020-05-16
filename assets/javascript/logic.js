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
        show.attr("data-name", topics[i]);
        //giving the button's text the value of the show 
        show.text(topics[i]);
        //add button to html
        $("#buttons-view").append(show);
        console.log(topics);
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