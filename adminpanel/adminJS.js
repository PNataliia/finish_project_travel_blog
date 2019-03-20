$( document ).ready(function(){
    /*інпут з вибором дат*/
let dateMemory = document.getElementById('dateToday');
    dateMemory.valueAsDate = new Date();

      var allStories = [];
    $("#story-btn").on("click", function() {
        let story = {};
        story.imgSRC = $("#url-img").val();
        story.title =$("#myTitle-story").val();
        story.text =$("#myText-story").val();
        story.date =$("#dateToday").val();
        allStories.push(story);
        let storiesArray= JSON.stringify(allStories);
        localStorage.setItem("stories",storiesArray );
        updateItmes();
        alert("hbnjgjkljhg");
    });

$("#gotoHomePage").click("click", function(){
    window.location.replace("../index.html");
});

function updateItmes () {
    containerStory=$("#cont").empty();
    let storiesArray = JSON.parse(localStorage.getItem("stories"));
    for (var i = 0; i < storiesArray.length; i++) {
       containerStory.append("<p>" + storiesArray[i].title + "</p>")
    }
}
});