

var timeLeft = 90;
var elem = document.getElementById("timer");
var timerId = setInterval(countdown, 1000);

function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        location.href = "endGame.html";
    } else{
        elem.innerHTML = timeLeft;
        timeLeft--;

    }
};

$("#end-game").on("click", function() {
    location.href = "endGame.html";
});
 $("#start-button").on("click", function() {
    location.href = "gameBoard.html";
 });

