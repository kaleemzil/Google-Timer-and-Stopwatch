let sWButton = document.querySelector("#stpWatch");
sWButton.addEventListener("click", () => {
    sWButton.style.borderBottom = '2px solid black';
    timerBtn.style.borderBottom = 'none';
    st.style.display = 'block'; // Show the elements with class "stopw"
    time.style.display = 'none'; // Hide the elements with class "ti"
    stopStopwatch(); // Stop the stopwatch if running
});
let timerBtn = document.getElementById("Timer");
timerBtn.addEventListener("click", () => {
    timerBtn.style.borderBottom = '2px solid black';
    time.style.display = 'block'; // Show the elements with class "ti"
    st.style.display = 'none'; // Hide the elements with class "stopw"
    sWButton.style.borderBottom = 'none';
    stopTimer(); // Stop the timer if running
});

// These are the buttons which are used for start, stop, and reset
let time = document.querySelector(".ti");
let st = document.querySelector(".stopw");

// STOPWATCH CODE
let stopwatchTimer = 0;
let stopwatchInterval;
let stopwatchMinuteDisplay = document.querySelector("#minutes");
let stopwatchSecondDisplay = document.querySelector("#seconds");
let stopwatchMillisecondDisplay = document.querySelector("#milliSecond");

function startStopwatch() {
    stopwatchInterval = setInterval(() => {
        stopwatchTimer += 1/60;
        let ms = Math.floor((stopwatchTimer - Math.floor(stopwatchTimer)) * 100);
        let sec = Math.floor(stopwatchTimer) % 60;
        let min = Math.floor(stopwatchTimer / 60);
        
        stopwatchMinuteDisplay.textContent = min < 10 ? "0" + min.toString() : min.toString();
        stopwatchSecondDisplay.textContent = sec < 10 ? "0" + sec.toString() : sec.toString();
        stopwatchMillisecondDisplay.textContent = ms < 10 ? "0" + ms.toString() : ms.toString();
    }, 1000 / 60);
}

function stopStopwatch() {
    clearInterval(stopwatchInterval);
}

function resetStopwatch() {
    stopStopwatch();
    stopwatchTimer = 0;
    stopwatchMinuteDisplay.textContent = "00";
    stopwatchSecondDisplay.textContent = "00";
    stopwatchMillisecondDisplay.textContent = "00";
}

// TIMER CODE
let timerInterval;
let timerMinuteDisplay = document.getElementById("min");
let timerSecondDisplay = document.getElementById("sec");

function startTimer() {
    let startTime = new Date().getTime() + (5 * 60 * 1000);

    timerInterval = setInterval(() => {
        let now = new Date().getTime();
        let diff = startTime - now;

        let min = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        let sec = Math.floor((diff % (1000 * 60)) / 1000);

        timerMinuteDisplay.textContent = min < 10 ? '0' + min : min;
        timerSecondDisplay.textContent = sec < 10 ? '0' + sec : sec;

        if (diff <= 0) {
            clearInterval(timerInterval);
            timerMinuteDisplay.textContent = '00';
            timerSecondDisplay.textContent = '00';
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
}

function resetTimer() {
    stopTimer();
    timerMinuteDisplay.textContent = "00";
    timerSecondDisplay.textContent = "00";
}

// Button event listeners
let startBtn = document.querySelector(".start");
startBtn.addEventListener('click', () => {
    if (timerBtn.style.borderBottom === '2px solid black') {
        if (startBtn.value === "Start") {
            startBtn.value = "Stop";
            startTimer();
        } else {
            startBtn.value = "Start";
            stopTimer();
        }
    } else if (sWButton.style.borderBottom === '2px solid black') {
        if (startBtn.value === "Start") {
            startBtn.value = "Stop";
            startStopwatch();
        } else {
            startBtn.value = "Start";
            stopStopwatch();
        }
    }
});

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener('click', () => {
    if (timerBtn.style.borderBottom === '2px solid black') {
        resetTimer();
    } else if (sWButton.style.borderBottom === '2px solid black') {
        resetStopwatch();
    }
});
