(() => {
  const refs = {
    openMenuBtn: document.querySelector(".mobile-menu__btn--open"),
    closeMenuBtn: document.querySelector(".mobile-menu__btn--close"),
     menu: document.querySelector(".mobile-menu"),
      body: document.querySelector("body"),
  };

  refs.openMenuBtn.addEventListener("click", toggleMenu);
  refs.closeMenuBtn.addEventListener("click", toggleMenu);

  function toggleMenu() {
     refs.menu.classList.toggle("is-hidden");
     refs.body.classList.toggle("no-scroll");
  }
})();