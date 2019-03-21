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

    $("#example-food").empty();
    let foodsArray = JSON.parse(localStorage.getItem("foods"));
    for (var a = 0; a < foodsArray.length; a++) {
        $("#example-food").append("<section class=\"food-item\">\n" +
            "<img class=\"img-food\" src='" + foodsArray[a].imgSRC + "'>\n" +
            "<h3 class=\"item-title-food\">" + foodsArray[a].title + "</h3>\n" +
            "<p class=\"item-desc\">" + foodsArray[a].text + "</p>\n" +
            "<div class=\"item-date\">" + foodsArray[a].date + "</div>\n" +
            " </section>")
    }
});