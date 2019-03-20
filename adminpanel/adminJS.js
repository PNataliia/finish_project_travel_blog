$(document).ready(function () {
    /*інпут з вибором дат*/
    let dateMemory = document.getElementById('dateToday');
    dateMemory.valueAsDate = new Date();
/*stories*/
    var allStories = [];
    var numberStory = 0;

    $("#story-btn").on("click", function () {
        let story = {};
        story.imgSRC = $("#url-img").val();
        story.title = $("#myTitle-story").val();
        story.text = $("#myText-story").val();
        story.date = $("#dateToday").val();
        allStories.push(story);

        let storiesArray = JSON.stringify(allStories);
        localStorage.setItem("stories", storiesArray);
        updateItmes();
        alert("hbnjgjkljhg");
    });
    /*food dish*/
    var allFoods = [];
    $("#food-btn").on("click", function () {
        let food = {};
        food.imgSRC = $("#food-img").val();
        food.title = $("#myTitle-food").val();
        food.text = $("#myText-story").val();
        food.date = $("#dateToday").val();
        allStories.push(story);
        let storiesArray = JSON.stringify(allStories);
        localStorage.setItem("stories", storiesArray);
        updateItmes();
        alert("hbnjgjkljhg");
    });

    $("#gotoHomePage").click("click", function () {
        window.location.replace("../index.html");
    });

    function updateItmes() {
        containerStory = $("#container-Story").empty();
        let storiesArray = JSON.parse(localStorage.getItem("stories"));
        for (var i = 0; i < storiesArray.length; i++) {
            containerStory.append("<p>" + storiesArray[i].title + "</p>")
        }
    }
});