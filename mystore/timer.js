const timeDisplay = document.getElementById("TimePanel");

// Momento en que se abre la web
const startTime = new Date();

function updateTime() {
    const now = new Date();
    const diff = now - startTime;

    const hours = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, "0");
    const minutes = String(Math.floor(diff / (1000 * 60) % 60)).padStart(2, "0");
    const seconds = String(Math.floor(diff / 1000 % 60)).padStart(2, "0");

    timeDisplay.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(updateTime, 1000);
updateTime();


