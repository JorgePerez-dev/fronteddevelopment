document.addEventListener("DOMContentLoaded", () => {
    console.log("JS cargado");

    const btns = document.querySelectorAll('.theme-btn');
    console.log(btns);

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;
            console.log("click:", theme);

            document.body.className = theme;
        });
    });
});