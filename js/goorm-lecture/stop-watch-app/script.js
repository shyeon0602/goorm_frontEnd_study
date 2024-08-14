const appendTens = document.querySelector("#tens");
const appendSeconds = document.querySelector("#seconds");
const buttonStart = document.querySelector("#button-start");
const buttonStop = document.querySelector("#button-stop");
const buttonReset = document.querySelector("#button-reset");

let seconds = 0;
let tens = 0;
let interval;

// appendTens가 100이 되면 appendSeconds를 1 올림
// setInterval 1000ms는 1초, 10ms는 appendTens를 1 올림
buttonStart.onclick = function () {
  interval = setInterval(startTimer, 10);
};

buttonStop.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  clearInterval(interval);

  seconds = 0;
  tens = 0;
  appendTens.innerHTML = 0;
  appendSeconds.innerHTML = 0;
};

function startTimer() {
  tens++;

  if (tens > 99) {
    // seconds 1 올림
    seconds++;
    appendSeconds.innerHTML = seconds;
    // tens, appendTens -> 0
    tens = 0;
    appendTens.innerHTML = 0;
  } else {
    appendTens.innerHTML = tens;
  }
}
