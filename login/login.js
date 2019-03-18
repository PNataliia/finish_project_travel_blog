let logincontainer = document.getElementById("logincontainer");
let registercontainer = document.getElementById("registercontainer");
let registertab = document.getElementById("register-tab");
let logintab = document.getElementById("login-tab");
let loginlink = document.getElementById(".loginlink");
let registerlink = document.getElementById(".registerlink");

registertab.addEventListener("click",function(){
    registeractive();
});
logintab.addEventListener("click",function(){
    loginactive();
});
loginlink.addEventListener("click",function(){
    loginactive();
});
registerlink.addEventListener("click",function(){
    registeractive();
});

/* переключення між реєстрацією і логінізацією*/
function loginactive (){
   logincontainer.style.display = "block";
    registercontainer.style.display = "none";
    logintab.classList.add("active");
    registertab.classList.remove("active");
}

function registeractive () {
    logincontainer.style.display = "none";
    registercontainer.style.display = "block";
    registertab.classList.add("active");
    logintab.classList.remove("active");
}




$( document ).ready(function() {
    var myUser = {};
    myUser.name = "";
    myUser.surname = "";
    myUser.username = "";
    myUser.password = "";
    $("#submit-login").on("click", function () {
        let user = JSON.stringify(myUser);
        localStorage.setItem("user", user);
        let userN = $("#login-username").val();
        let pasw = $("#login-password").val();
        if (userN === myUser.username && pasw === myUser.password) {
            window.location.replace("adminPanel.html");
        }
    })
});