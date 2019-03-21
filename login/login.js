/*логінізація*/


$( document ).ready(function() {
    let myUser={};
        myUser.userN = "Nataliia";
        myUser.userS = "Poremchuk";
        myUser.userE = "natalja.bukavyn@gmail.com";
        myUser.password = "16051991";
    $("#submit-login").on("click", function(){
        let user = JSON.stringify(myUser);
        localStorage.setItem("user", user);
        let username = $("#login-username").val();
        let userpassword = $("#login-password").val();
        if (username === myUser.userN && userpassword === myUser.password) {
            window.location.replace("../adminpanel/adminPanel.html");
        }
    })
    });

