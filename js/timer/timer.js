const start = document.getElementById('start');
console.log(start);
console.debug(start);
const stop = document.getElementById('stop');
console.log(stop);
const reset = document.getElementById('reset');
console.log(reset);
//Retrive an element that does not exist from the web page DOM
const anyElement = document.getElementById('any thing');
console.log(anyElement);
const timer = document.getElementById('timer');
console.log(timer);
//star.addEventListener('click', function () {
stop.addEventListener('click', function () {
    console.log("heheheehe");
});

function resetHandler() {
    console.debug("wowowowowo");
}
console.log(timer);
reset.addEventListener('click', resetHandler);

console.log(timer);



function aumentar() {
  let size = parseInt(start.style.fontSize) || 16;
  start.style.fontSize = (size + 5) + "px";
}

//Associate an element with a type of event and an action
//that we want to respond to the event
start.addEventListener("click", () => {
    console.debug("jajajaj");
  
});

console.log(timer);
