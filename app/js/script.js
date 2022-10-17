const btnHamburguer = document.querySelector("#btnHamburguer");
const overlay = document.querySelector(".overlay");
const nav = document.querySelector(".header__nav");
const body = document.querySelector("body");

btnHamburguer.addEventListener("click", () => {
  // if (btnHamburguer.classList.contains('open')) {
  //   btnHamburguer.classList.remove('open')
  // } else {
  //   btnHamburguer.classList.add('open')
  // }

  btnHamburguer.classList.toggle("open");
  overlay.classList.toggle("overlay-open");
  nav.classList.toggle("activo");
  body.classList.toggle("noscroll");
});
