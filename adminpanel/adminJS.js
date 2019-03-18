/*інпут з вибором дат*/
let dateMemory = document.getElementById('dataToday');
    dateMemory.valueAsDate = new Date();

$( document ).ready(function(){
    var allStories = [];
    $("#storyBtn").on("click", function() {
        let story = {};
        story.imgSRC = $("#url-img").val();
        story.title =$("#myTitle-story").val();
        story.text =$("#myText-story").val();
        story.date =$("#dataToday").val();
        allStories.push(story);
        let storiesArray= JSON.stringify(allStories);
        localStorage.setItem("stories",storiesArray );
        updateItmes();
    })
});