var lastTimeStamp = undefined;
var timer = undefined;

var requestAnimationFrameInstance;

function resumetimer () {
    if(timer === undefined) {
        timer = 0;
        lastTimeStamp = Date.now();
        return;
    }
    timer += (Date.now() - lastTimeStamp);
    lastTimeStamp = Date.now();
    document.getElementById("timer").innerText = timer;

    requestAnimationFrameInstance = window.requestAnimationFrame(resumetimer);
}

function pauseTimer () {
    window.cancelAnimationFrame(requestAnimationFrameInstance);
}

function resetTimer() {
    document.getElementById("timer").innerText = 0;
    lastTimeStamp = undefined;
    timer = undefined;
}