const btns = document.querySelectorAll('.theme-btn');
console.log(btns);


// iterate all theme buttons to associate each one with
// a task that we want to execute when the user clicks on it   v 
for (let index = 0; index < btns.length; index++) {
    const btn = btns[index];

    console.log(btn);

    btn.addEventListener("click", () => {
        console.log(btn.getAttribute("data-theme"));
        console.log(btn.getAttribute("class"));

        document.body.className = btn.getAttribute("data-theme");
    });


}