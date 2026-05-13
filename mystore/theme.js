document.addEventListener("DOMContentLoaded", () => {

  // seleccionar botones (faltaba)
  const btns = document.querySelectorAll("[data-theme]");

  localStorage.setItem("theme", "dark");

  // step 1: read the theme value stored in the local storage
  const theme = localStorage.getItem("theme");
  console.log(theme);

  if (theme) { // if the theme exists in localStorage, apply it
    document.body.className = theme;
  }

  console.log(btns);

  btns.forEach(btn => {
    console.log(btn);

    btn.addEventListener('click', () => {

      console.log(btn.getAttribute('data-theme'));
      console.log(btn.getAttribute("class"));

      document.body.className = btn.getAttribute('data-theme');

      // guardar el nuevo tema (faltaba en tu lógica)
      localStorage.setItem("theme", btn.getAttribute('data-theme'));
    });

  });

});