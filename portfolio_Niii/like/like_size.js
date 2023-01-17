let likeButton = document.querySelector("#like_button");

let timerID;

let counter = 0;
let size = 100;

let pressHoldEvent = new CustomEvent("pressHold");
 
likeButton.addEventListener("mousedown", pressingDown, false);
likeButton.addEventListener("mouseup", notPressingDown, false);
likeButton.addEventListener("mouseleave", notPressingDown, false);

likeButton.addEventListener("touchstart", pressingDown, false);
likeButton.addEventListener("touchend", notPressingDown, false);

function pressingDown(e) {

    counter = 0;
    size = 100;

    requestAnimationFrame(timer);
    e.preventDefault();

    document.getElementById("like_button").style.width = "340px";
    document.getElementById("like_button").style.height = "340px";
    document.getElementById("like_button").style.transition = "2s";
    document.getElementById("like_button").style.transitionDelay = "0.5s";

}

function notPressingDown(e) {

    cancelAnimationFrame(timerID);

    document.getElementById("like_button").style.width = "100px";
    document.getElementById("like_button").style.height = "100px";
    document.getElementById("like_button").style.transition = "none";
    document.getElementById("like_button").style.transitionDelay = "none";

}

function timer() {
    if (counter < 150) {
        counter += 1;
        if (counter > 30) size += 2;
        timerID = requestAnimationFrame(timer);
    } else {
        likeButton.dispatchEvent(pressHoldEvent);
    }
}
