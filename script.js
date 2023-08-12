var time = 60;
var score = 0;
var hitno = 0;
function scorehit() {
    score += 10;
    document.querySelector("#score").textContent = score;
}
function hit() {
    hitno = Math.floor(Math.random() * 10)
    document.querySelector("#hit").textContent = hitno;
}
function makebubble() {
    var clutter = "";
    for (var i = 1; i <= 176; i++) {
        var no = Math.floor(Math.random() * 10)
        clutter += `<div class="bubble">${no}</div>`;
    }
    document.querySelector(".box-btm").innerHTML = clutter;
}
function timer() {
    var timeint = setInterval(function () {
        if (time > 0) {
            time--;
            document.querySelector("#time").textContent = time;
        } else {
            clearInterval(timeint);
            document.querySelector(".box-btm").innerHTML = "";
        }
    }, 1000)
}
document.querySelector(".box-btm").addEventListener("click", function (dets) {
    var clickednum = Number(dets.target.textContent);
    if (clickednum === hitno) {
        scorehit();
        hit();
        makebubble();
    }
});
hit();
timer();
makebubble();

