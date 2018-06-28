

var timeLeft = 90;
var elem = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);

var correct = 0;
var incorrect = 0;
var unanswered = 8;

$("#correct").text(correct);
$("#incorrect").text(incorrect);
$("#no-answer").text(unanswered);

managerResponse = "";
stadiumResponse = "";

function countdown() {
    if (timeLeft == 0) {
        clearTimeout(timerId);
        location.href = "endGame.html";
    } else{
        elem.innerHTML = timeLeft;
        timeLeft--;

    }
};

$(document).ready(function(){
    $("input[name='managers']").click(function() {
        var managerResponse = $("input[name='manager']:checked").val();
        if (managerResponse === "Ozzie Guillen") {
            correct++;
            unanswered--;
            
        } else {
            incorrect++;
            unanswered--;
        };
    });
});


$(document).ready(function() {
    $("input[name='stadium']").click(function() {
        var stadiumResponse = $("input[name='stadium']:checked").val();
        if (stadiumResponse === "Comiskey Park") {
            correct++;
            unanswered--;
        } else {
            incorrect++;
            unanswered++;
        }
    })
});



$(document).ready(function() {
    $("input[name='perfect']").click(function() {
        var perfectResponse = $("input [name='perfect']:checked").val();
        if (perfectResponnse === "Phil Humber") {
            correct++;
            unanswered--;
        } else {
            incorrect++;
            unanswered++
        }
    })
});

$(document).ready(function() {
    $("input[name='openner']").click(function() {
        var opennerResponse = $("input [name='openner']:checked").val();
        if (opennerResponse === "Kansas City Royals") {
            correct++;
            unanswered--;
        } else {
            incorrect++;
            unanswered++;
        }
    })
});

$(document).ready(function() {
    $("input[name='announcer']").click(function() {
        var announcerResponse = $("input [name='announcer']:checked").val();
        if (announcerResponse === "Hawk Harrelson") {
            correct++;
            unanswered--;
        } else {
            incorrect++;
            unanswered++;
        }
    })
});

$(document).ready(function() {
    $("input [name='play-in game']").click(function() {
        var playinResponse = $("input [name='play-in game']:checked").val();
        if (playinResponse === "Minnesota Twins") {
            correct++;
            unanswered--;
        } else {
            incorrect++;
            unanswered++;
        }
    })
});

$(document).ready(function() {
    $("input [name='WS']").click(function() {
        var playinResponse = $("input [name='WS']:checked").val();
        if (playinResponse === "2005") {
            correct++;
            unanswered--;
        } else {
            incorrect++;
            unanswered++;
        }
    })
});
$(document).ready(function() {
    $("input [name='unis']").click(function() {
        var playinResponse = $("input [name='unis']:checked").val();
        if (playinResponse === "Black/Silver") {
            correct++;
            unanswered--;
        } else {
            incorrect++;
            unanswered++;
        }
    })
});
console.log(managerResponse);


$("#end-game").on("click", function() {
    location.href = "endGame.html";
});
 $("#start-button").on("click", function() {
    location.href = "gameBoard.html";
 });

