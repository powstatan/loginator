function credentials() {
    var real_username = document.getElementById('real_username_field').value;

    var un = document.getElementById('real_username');
    var real_password = document.getElementById('real_password_field').value;
    var pw = document.getElementById('real_pasa	asword');

    if (real_username == "" && real_password == "") {
        alert("You must enter a username and a password.");
        return;
    } else if (real_username == "") {
        alert("You must enter a username.");
        return;
    } else if (real_password == "") {
        alert("You must enter a password.");
        return;
    }

    var teacher_confirmation = confirm("Check with your teacher. Is this correct?\nUsername: " + real_username + "\nPassword: " + real_password);
    if (teacher_confirmation == true) {
        //START GAME

        //clear old stuff
        $('.removeMe').hide();
        //start timer (statically set at 60 seconds)
        onTimer();
        //show the hidden game time form.
        $('.gametime').show();

    } else {
        return;
    }
}

function game_login_entered() {
    
    var real_password = document.getElementById('real_password_field').value;
    var real_username = document.getElementById('real_username_field').value;
    var pw = document.getElementById('game_password_field').value;
    var un = document.getElementById('game_username_field').value;

    if (pw == real_password && un == real_username) {

        document.getElementById("user_feedback1").innerHTML = "CORRECT!";
        document.getElementById("user_feedback2").innerHTML = "";
        
    	document.getElementById("game_password_field").style.borderColor = "gray";
    	document.getElementById("game_password_field").style.borderWidth = "1px";
    	document.getElementById("game_username_field").style.borderColor = "gray";
    	document.getElementById("game_username_field").style.borderWidth = "1px";
        
        document.getElementById('game_password_field').value = "";
        document.getElementById('game_username_field').value = "";

        if (multiplier == 3) {
            score = score + 300;
            new Audio('http://powstatan.wikispaces.com/file/view/coin.mp3/563195053/coin.mp3').play();
        }
        if (multiplier == 2) {
            score = score + 200;

            new Audio('http://powstatan.wikispaces.com/file/view/coin.mp3/563195053/coin.mp3').play();
        }
        if (multiplier == 1) {
            score = score + 100;

            new Audio('http://powstatan.wikispaces.com/file/view/coin.mp3/563195053/coin.mp3').play();
        }
        if (multiplier == 0) {
            score = score + 100;
            multiplier = 1;
            new Audio('http://powstatan.wikispaces.com/file/view/coin.mp3/563195053/coin.mp3').play();
        }
        if (multiplier < 3) {
        multiplier +=1;
        }
    } else if (pw != real_password && un != real_username) {
        document.getElementById("game_username_field").style.borderColor = "red";
        document.getElementById("game_username_field").style.borderWidth = "5px";
        document.getElementById("user_feedback1").innerHTML = "Username: " + real_username + "<br />Password: " + real_password;
        document.getElementById("game_password_field").style.borderColor = "red";
        document.getElementById("game_password_field").style.borderWidth = "5px";
        document.getElementById('game_password_field').value = "";
        document.getElementById('game_username_field').value = "";
        multiplier = 0;
    } else if (pw != real_password) {
        document.getElementById("user_feedback1").innerHTML = "Password: " + real_password;
        document.getElementById('game_password_field').value = "";
        document.getElementById("game_username_field").style.borderColor = "gray";
        document.getElementById("game_username_field").style.borderWidth = "1px";
        document.getElementById("game_password_field").style.borderColor = "red";
        document.getElementById("game_password_field").style.borderWidth = "5px";
        document.getElementById("user_feedback2").innerHTML = "";
        multiplier = 0;
    } else if (un != real_username) {
        document.getElementById("user_feedback1").innerHTML = "Username: " + real_username;
        document.getElementById('game_username_field').value = "";
        document.getElementById("game_username_field").style.borderColor = "red";
        document.getElementById("game_username_field").style.borderWidth = "5px";
        document.getElementById("game_password_field").style.borderColor = "gray";
        document.getElementById("game_password_field").style.borderWidth = "1px";
        document.getElementById("user_feedback2").innerHTML = "";
        multiplier = 0;
    }
    document.getElementById("user_feedback_score").innerHTML = "Score: " + score;
    if (multiplier == 0 || multiplier == 1) {
        document.getElementById("user_feedback_multiplier").innerHTML = "<br>Multiplier: 1";
    } else {
        document.getElementById("user_feedback_multiplier").innerHTML = "<br>Multiplier: " + multiplier;
    }
    /*document.getElementById("highScoreID").innerHTML = "<br>High Score: " + highScore); */
}
