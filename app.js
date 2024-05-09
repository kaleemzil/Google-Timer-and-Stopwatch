let sWButton = document.querySelector("#stpWatch");
sWButton.addEventListener("click", () => {
    sWButton.style.borderBottom = '2px solid black';
    timerBtn.style.borderBottom = 'none';
    st.style.display = 'block'; // Show the elements with class "stopw"
    time.style.display = 'none'; // Hide the elements with class "ti"
});
let timerBtn = document.getElementById("Timer");
timerBtn.addEventListener("click", () => {
    timerBtn.style.borderBottom = '2px solid black';
    time.style.display = 'block'; // Show the elements with class "ti"
    st.style.display = 'none'; // Hide the elements with class "stopw"
    sWButton.style.borderBottom = 'none';
});

// These are the button which is used for stop, start, and reset
let time = document.querySelector(".ti");
let st = document.querySelector(".stopw");

// STOPWATCH CODE
let timer = 0;
let timerinterval;

let m = document.querySelector("#minutes");
let s = document.querySelector("#seconds");
let ms = document.querySelector("#milliSecond");

// TIMER CODE
let interval;
let minute = document.getElementById("min");
let second = document.getElementById("sec");

let startBtn = document.querySelector(".start");
startBtn.addEventListener('click', () => {
    if (startBtn.value === "Start") {
        startBtn.value = "Stop"; // Change the button value to "Stop" if it's currently "Start"
        
        // Stopwatch code
        timerinterval = setInterval(function() {
            timer += 1/60;
            msVal = Math.floor((timer - Math.floor(timer))*100);
            secondVal = Math.floor(timer) % 60;
            minuteVal = Math.floor(timer / 60);
            
            // Format minute and second values with leading zeros if necessary
            m.textContent = minuteVal < 10 ? "0" + minuteVal.toString() : minuteVal.toString();
            s.textContent = secondVal < 10 ? "0" + secondVal.toString() : secondVal.toString();
            ms.textContent = msVal < 10 ? "0" + msVal.toString() : msVal.toString();
        }, 1000/60);

        // Timer code
        let startTime = new Date().getTime() + (5*60*1000);
        interval = setInterval(() => {
            let now = new Date().getTime();
            let diff = startTime-now;

            let min = Math.floor((diff % (1000*60*60)) / (1000*60));
            let sec = Math.floor((diff % (1000*60)) / 1000);
            
            minute.textContent = min < 10 ? '0' + min : min `${":"}`;
            second.textContent = sec < 10 ? '0' + sec : sec;

            if (diff <= 0) {
                clearInterval(interval);
                startBtn.value = "Start";
                minute.textContent = '00';
                second.textContent = '00';


            }
         }, 1000);
        

    } else {
        startBtn.value = "Start"; // Change the button value to "Start" if it's currently "Stop"
        stop();
        clearInterval(interval);

    }

})

let stop = () => {
    clearInterval(timerinterval); 
};

let resetBtn = document.querySelector(".reset");
resetBtn.addEventListener('click', () => {
    stop(); // Stop the stopwatch
  
    // Reset the timer variables
    timer = 0;
    m.textContent = ` ${"00"} ${":"}`;
    s.textContent = ` ${"00"} ${":"}`;
    ms.textContent = ` ${"00"}`;
    minute.textContent = ` ${"00"} ${":"}`;
    second.textContent = ` ${"00"}`;
});
