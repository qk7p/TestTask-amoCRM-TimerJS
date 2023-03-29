const timer = document.getElementById("Timer");
const button = document.getElementById("TimerButton");

const timerHours = document.getElementById("TimerHours");
const timerMinutes = document.getElementById("TimerMinutes");
const timerSeconds = document.getElementById("TimerSeconds");

let time = {
  hours: 0,
  minutes: 0,
  seconds: 0,
};

function getTime(value) {
  let currentTime = { hours: 0, minutes: 0, seconds: 0 };
  if (value > 0) {
    currentTime = {
      hours: Math.floor(value / 3600),
      minutes: Math.floor((value % 3600) / 60),
      seconds: value % 60,
    };
  }
  return currentTime;
}

function getPadStart(value) {
  return value.toString().padStart(2, "0");
}

let timerActive = false;

let timerInterval;

timerStart = () => {
  button.innerHTML = "Stop";
  timerActive = true;
  button.onclick = timerStop;

  const inputValue = document.getElementById("TimerInput").value;
  time = getTime(inputValue);

  timerHours.innerHTML = getPadStart(time.hours);
  timerMinutes.innerHTML = getPadStart(time.minutes);
  timerSeconds.innerHTML = getPadStart(time.seconds);
  timerInterval = setInterval(() => {
    tick();
  }, 1000);
};

timerStop = () => {
  button.innerHTML = "Start";
  timerActive = false;
  button.onclick = timerStart;
  clearInterval(timerInterval);
};

const tick = () => {
  if (time.hours === 0 && time.minutes === 0 && time.seconds === 0) {
    clearInterval(timerInterval);
    return;
  } else if (time.hours > 0 && time.minutes === 0 && time.seconds === 0) {
    time.hours = time.hours - 1;
    time.minutes = 59;
    time.seconds = 59;
    timerHours.innerHTML = getPadStart(time.hours);
    timerMinutes.innerHTML = getPadStart(time.minutes);
    timerSeconds.innerHTML = getPadStart(time.seconds);
  } else if (time.minutes > 0 && time.seconds === 0) {
    time.minutes = time.minutes - 1;
    time.seconds = 59;
    timerMinutes.innerHTML = getPadStart(time.minutes);
    timerSeconds.innerHTML = getPadStart(time.seconds);
  } else {
    time.seconds -= 1;
    timerSeconds.innerHTML = getPadStart(time.seconds);
  }
};
