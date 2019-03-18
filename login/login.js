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

/*логінізація*/


$( document ).ready(function() {
    let myUser={};
        myUser.userN = "Nataliia";
        myUser.userS = "Poremchuk";
        myUser.userE = "natalja.bukavyn@gmail.com";
        myUser.password = "16051991";
    $("#submit-login").click(function (){
        let user = JSON.stringify(myUser);
        localStorage.setItem("user", user);
        let userN = $("#login-username").val();
        let password = $("#login-password").val();
        if (userN === myUser.userN && password === myUser.password) {
            window.location.replace("adminPanel.html");
        }
    })
    });
    /*
    $("#submit-register").on("click", function () {
        let user = JSON.stringify(myUser);
        localStorage.setItem("user", user);
        let userN = $("#register-fname").val();
        let userS = $("#register-lname").val();
        let userE = $("#register-email").val();
        let password = $("#register-password").val();
        let passwordConf = $("#register-cnfmpassword").val();
        if (userN === myUser.userN && password === myUser.password &&
            userS === myUser.userS && userE === myUser.userE &&) {
            window.location.replace("adminPanel.html");
        }
    })
});*/
