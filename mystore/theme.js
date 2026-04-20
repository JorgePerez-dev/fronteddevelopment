document.addEventListener("DOMContentLoaded", () => {

    const btns = document.querySelectorAll('.theme-btn');

    btns.forEach(btn => {
        btn.addEventListener('click', () => {
            const theme = btn.dataset.theme;

            // quitamos todas las clases de tema
            document.body.classList.remove("dark", "light", "neon", "forest");

            // añadimos la nueva
            document.body.classList.add(theme);
        });
    });

});