let seconds = 0;
let interval = null;

const timeDisplay = document.getElementById("time");
const startBtn = document.getElementById("start");
const stopBtn = document.getElementById("stop");
const resetBtn = document.getElementById("reset");

function updateTime() {
  seconds++;
  let mins = Math.floor(seconds / 60);
  let secs = seconds % 60;

  timeDisplay.textContent =
    String(mins).padStart(2, "0") + ":" +
    String(secs).padStart(2, "0");
}

startBtn.addEventListener("click", () => {
  if (interval === null) {
    interval = setInterval(updateTime, 1000);
  }
});

stopBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
});

resetBtn.addEventListener("click", () => {
  clearInterval(interval);
  interval = null;
  seconds = 0;
  timeDisplay.textContent = "00:00";
});