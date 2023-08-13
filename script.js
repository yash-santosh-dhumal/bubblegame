var timer = 30;
var score = 0;
var hitrn = 0;


function increaseScore() {
    score = score+1;
    document.querySelector("#scoreVal").textContent = score;
}
function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.querySelector("#hitVal").textContent = hitrn;
}
function makeBubble() {
    var clutter = "";

    for (var i = 1; i <= 126; i++) {
         var rn = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${rn}</div>`;
    }
    document.querySelector(".pbtm").innerHTML = clutter;
}
function runTimer() {
    var timerchg = setInterval(function () {
        if (timer > 0) {
            timer--;
            document.querySelector("#Timerval").textContent = timer;
        }
        else {
            clearInterval(timerchg);
            document.querySelector(".pbtm").innerHTML ="";
            alert("game over !!! refresh to play again");
        }
    }, 1000);
}

document.querySelector(".pbtm").addEventListener("click", function (dets) {
        var clickednum = Number(dets.target.textContent);
        if (clickednum === hitrn) {
            increaseScore();
            makeBubble();
            getNewHit();
        }
    });


getNewHit();
runTimer();
makeBubble();