

$(document).ready(function () {

    $('.real-field').keyup(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            credentials();
        }
    });

    $('.gametime-field').keyup(function (event) {
        if (event.keyCode == 13) {
            event.preventDefault();
            game_login_entered();
        }
    });

    score = 0;
   	multiplier = 0;
    highScore = 0;
    i = 64;

    $('#real_username_field').focus();
    $('.gametime').hide();
    $('.countdown').hide();
});

function onTimer() {
    if (i == 60){
        $('.gametime').show();
		$('.countdown').hide();
        new Audio('http://powstatan.wikispaces.com/file/view/app+song+2.mp3/562039003/app%20song%202.mp3').play();
        $('.hsClass').show();
    }
    if (i >= 10) {
        document.getElementById('mycounter').innerHTML = "Time left: " + i;
    } else {
        $('.countdown').hide();
        document.getElementById('mycounter').innerHTML = "";
        document.getElementById('tenSecLeft').innerHTML = "Time left: " + i;
        new Audio('http://powstatan.wikispaces.com/file/view/boop.mp3/564086921/boop.mp3').play();
    }
    if (i == 0) {
        alert("Time's up!");
        $('.gametime').hide();
        if (highScore < score) {
            highScore = score;
        }
        var playAgain = confirm("Score: " + score + "\nHigh Score: " + highScore + "\nPlay again?");
        if (playAgain == true) {
            document.getElementById('mycounter').innerHTML = "";
            document.getElementById('tenSecLeft').innerHTML = "";
            document.getElementById('user_feedback1').innerHTML = "";
            document.getElementById('user_feedback2').innerHTML = "";
            document.getElementById('game_password_field').innerHTML = "";
            document.getElementById('game_username_field').innerHTML = "";
            document.getElementById("user_feedback_score").innerHTML = "";
            document.getElementById("user_feedback_multiplier").innerHTML = "";
            document.getElementById("highScoreID").innerHTML = "High Score:" + highScore;
            i = 64;
            score = 0;
            multiplier = 0;
            onTimer();
            
            $('#real_username_field').focus();
    		$('.gametime').hide();
            $('.hsClass').hide();
    		$('.countdown').show();
            document.getElementById("monster").src = "http://powstatan.wikispaces.com/file/view/monster_head_only.png/564139869/monster_head_only.png";

        } else {
            i = 64;
            document.getElementById('mycounter').innerHTML = "";
            document.getElementById('tenSecLeft').innerHTML = "";
            document.getElementById('user_feedback1').innerHTML = "";
            document.getElementById('user_feedback2').innerHTML = "";
            document.getElementById('real_password_field').innerHTML = "";
            document.getElementById('real_username_field').innerHTML = "";
            document.getElementById('real_password').innerHTML = "";
            document.getElementById('real_username').innerHTML = "";
            document.getElementById('game_password_field').innerHTML = "";
            document.getElementById('game_username_field').innerHTML = "";
            document.getElementById("user_feedback_score").innerHTML = "";
            document.getElementById("user_feedback_multiplier").innerHTML = "";
            document.getElementById("highScoreID").innerHTML = "High Score:" + highScore;
            document.getElementById('game_password_field').placeholder = "";
            document.getElementById('game_username_field').placeholder = "";
            score = 0;
            multiplier = 0;
            $('.removeMe').show();
            
        }
    } else {
        setTimeout(onTimer, 1000);
        i--;
       
         
    }
}


function credentials() {

    var real_username = $('#real_username_field').val();
    var un = document.getElementById('real_username');
    var real_password = document.getElementById('real_password_field').value;
    var pw = document.getElementById('real_password');

    if (real_username == "" && real_password == "") {
        warningAlert('Whoops!','You must enter a username and a password.');
        $('#game_username_field').focus();
        return;
    } else if (real_username == "") {
        alert("You must enter a username.");
        $('#game_username_field').focus();
        return;
    } else if (real_password == "") {
        alert("You must enter a password.");
        $('#game_password_field').focus();
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
    	$('.countdown').show();
        $('#game_username_field').focus();

    } else {
        return;
    }
}

function game_login_entered() {
    var real_password = document.getElementById('real_password_field').value;
    var real_username = document.getElementById('real_username_field').value;
    var pw = document.getElementById('game_password_field').value;
    var un = document.getElementById('game_username_field').value;
    document.getElementById("game_password_field").placeholder = "";
    document.getElementById("game_username_field").placeholder = "";

    if (pw == real_password && un == real_username) {

        monster_jump();

        document.getElementById("user_feedback1").innerHTML = "CORRECT!";
        document.getElementById("user_feedback2").innerHTML = "";

        $('#game_password_field').removeClass('wrong-answer').addClass('correct-answer');
        $('#game_username_field').removeClass('wrong-answer').addClass('correct-answer');

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
            multiplier += 1;
        }
      	$('#game_username_field').focus();
    } else if (pw != real_password && un != real_username) {
        if (pw == pw.toUpperCase() && pw != "") {
            alert('Is your Capslock on?');
        }
	
        document.getElementById("user_feedback1").innerHTML = "";
        document.getElementById("user_feedback2").innerHTML = "";
        document.getElementById("game_password_field").placeholder = real_password;
        document.getElementById("game_username_field").placeholder = real_username;
        document.getElementById('game_password_field').value = "";
        document.getElementById('game_username_field').value = "";
        $('#game_username_field').removeClass('correct-answer').addClass('wrong-answer');
        $('#game_password_field').removeClass('correct-answer').addClass('wrong-answer');
        multiplier = 0;
        $('#game_username_field').focus();

    } else if (pw != real_password) {
        if (pw == pw.toUpperCase() && pw != "") {
            alert('Is your Capslock on?');
        }
        document.getElementById("game_password_field").placeholder = real_password;
        document.getElementById('game_password_field').value = "";
        document.getElementById("user_feedback1").innerHTML = "";
        document.getElementById("user_feedback2").innerHTML = "";
        $('#game_username_field').removeClass('wrong-answer').addClass('correct-answer');
        $('#game_password_field').removeClass('correct-answer').addClass('wrong-answer');

        document.getElementById("user_feedback2").innerHTML = "";
        multiplier = 0;
        $('#game_password_field').focus();
    } else if (un != real_username) {
        document.getElementById("game_username_field").placeholder = real_username;
        document.getElementById('game_username_field').value = "";
        document.getElementById("user_feedback1").innerHTML = "";
        document.getElementById("user_feedback2").innerHTML = "";
	   $('#game_username_field').removeClass('correct-answer').addClass('wrong-answer');
       $('#game_password_field').addClass('correct-answer').removeClass('wrong-answer');
        document.getElementById("user_feedback2").innerHTML = "";
        multiplier = 0;
        $('#game_username_field').focus();
    }
    document.getElementById("user_feedback_score").innerHTML = "Score: " + score;
    if (multiplier == 0 || multiplier == 1) {
        document.getElementById("user_feedback_multiplier").innerHTML = "<br>Next: +100";
    } else {
        document.getElementById("user_feedback_multiplier").innerHTML = "<br>Next: +" + (multiplier * 100);
    }

}


function monster_jump() {
	$("#monster").attr('src', 'http://powstatan.wikispaces.com/file/view/monster_jumping.png/564140929/monster_jumping.png');
    $("#monster").addClass('monster_jump');
	setTimeout(monster_normal, 750);
}

function monster_normal() {
    $("#monster").removeClass('monster_jump');
    $("#monster").attr('src', 'http://powstatan.wikispaces.com/file/view/monster_standing.png/564140941/monster_standing.png');
}