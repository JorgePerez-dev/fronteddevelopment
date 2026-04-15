const start = document.getElementById('start');
const stop = document.getElementById('stop');
const reset = document.getElementById('reset');
const timer = document.getElementById('timer');

let seconds = 0;
let interval = null;
let scale = 1;

start.addEventListener("click", () => {

    interval = setInterval(() => {

        seconds++;

        timer.textContent = "00:" + (seconds < 10 ? "0" + seconds : seconds);

        // crecer hasta segundo 10
        if (seconds <= 10) {
            scale += 0.1;
            start.style.transform = "scale(" + scale + ")";
        }

        // bajar progresivamente después del 10
        if (seconds > 10 && scale > 1) {
            scale -= 0.1;
            start.style.transform = "scale(" + scale + ")";
        }

    }, 1000);

});

stop.addEventListener("click", () => {
    clearInterval(interval);
});

reset.addEventListener("click", () => {
    clearInterval(interval);
    seconds = 0;
    scale = 1;
    timer.textContent = "00:00";
    start.style.transform = "scale(1)";
});