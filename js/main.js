$( document ).ready(function() {
    $("#example-story").empty();
    let storiesArray = JSON.parse(localStorage.getItem("stories"));
    for (var i = 0; i < storiesArray.length; i++) {
        $("#example-story").append("<section class=\"travel-item\">\n" +
        "<img class=\"img-travel\" src='" + storiesArray[i].imgSRC + "'>\n" +
        "<h3 class=\"item-title\">" + storiesArray[i].title + "</h3>\n" +
        "<p class=\"item-desc\">" + storiesArray[i].text + "</p>\n" +
        "<div class=\"item-date\">" + storiesArray[i].date + "</div>\n" +
        " </section>")
}

});