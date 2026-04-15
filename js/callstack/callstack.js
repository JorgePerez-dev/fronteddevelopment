function finalTask() {
    console.log("This is the final task.");
}

function secondTask() {
    console.log("This is the second task.");
    finalTask();
}


function firstTask() {
    console.log("This is the first task.");
    secondTask();
}
firstTask();


function add( num ) {
console.log(num);
add(++num);
}
add(0);