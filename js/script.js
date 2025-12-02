// mobile menu
document.addEventListener("click", documentActions);

function documentActions(e) {
  const targetElemnt = e.target;
  if (targetElemnt.closest(".menu__icon")) {
    document.documentElement.classList.toggle("menu-open");
  }
}
