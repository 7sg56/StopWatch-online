const hoursDis = document.querySelector('#hours');
const minutesDis = document.querySelector('#minutes');
const secondsDis = document.querySelector('#seconds');
const startBtn = document.querySelector('#start');
const stopBtn = document.querySelector('#stop');
const resetBtn = document.querySelector('#reset');

let timer_set = 0;
let intervalID = null;

let hour = 0;
let minute = 0;
let second = 0;

// Starts the timer interval
const startTicking = () => {
    if (intervalID) {
        return; // Prevent multiple intervals
    }
    intervalID = setInterval(() => {
        timer_set++;
        updateHMS();
    }, 1000);
};

// Updates hour, minute, and second based on `timer_set`
const updateHMS = () => {
    second = timer_set % 60;
    minute = Math.floor(timer_set / 60) % 60;
    hour = Math.floor(timer_set / 3600);
    updateUI();
};

// Updates the display
const updateUI = () => {
    hoursDis.textContent = String(hour).padStart(2, '0');
    minutesDis.textContent = String(minute).padStart(2, '0');
    secondsDis.textContent = String(second).padStart(2, '0');
};

// Starts the stopwatch
const startTime = () => {
    startTicking();
};

// Stops the stopwatch
const stopTime = () => {
    clearInterval(intervalID);
    intervalID = null;
};

// Resets the stopwatch
const resetTime = () => {
    stopTime();
    timer_set = 0;
    hour = 0;
    minute = 0;
    second = 0;
    updateUI();
};

// Event listeners for buttons
startBtn.addEventListener('click', startTime);
stopBtn.addEventListener('click', stopTime);
resetBtn.addEventListener('click', resetTime);

