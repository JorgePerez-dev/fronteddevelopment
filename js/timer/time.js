const timeDisplay = document.getElementById("TimePanel");
document.getElementById("TimePanel");


setInterval(updateTime, 1); 
function updateTime() {
    const now = new Date();
    console.log(now);
    console.log(now.getHours());
    console.log(now.getMinutes());
    console.log(now.getSeconds());
    const hours = Date.getHours();
    const minutes = Date.getMinutes();
    const seconds = Date.getSeconds();
    timeDisplay.innerText = hours + ":" + minutes + ":" + seconds;

}

setInterval(updateTime, 1000);





