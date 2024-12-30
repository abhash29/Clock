let play = true;
let intervalId;

function playAndPause() {
    play = !play;

    if (play) {
        document.querySelector('button').innerHTML = "Pause";
        intervalId = setInterval(updateTime, 1000);
    } else {
        document.querySelector('button').innerHTML = "Play";
        clearInterval(intervalId);
    }
}

function updateTime() {
    const now = new Date();
    const timeString = now.toLocaleTimeString();
    document.getElementById("time").textContent = timeString;
}

intervalId = setInterval(updateTime, 1000);
