(function () {
  const header = document.querySelector(".header");
  window.onscroll = () => {
    if (window.pageYOffset > 50) {
      header.classList.add("header_active");
    } else {
      header.classList.remove("header_active");
    }
  };
})();
(function () {
  const burger__item = document.querySelector(".burger");
  const menu = document.querySelector(".header__menu");
  const menu_close = document.querySelector(".header__nav-close");
  burger__item.addEventListener("click", () => {
    menu.classList.add("header__nav_active");
  });
  menu_close.addEventListener("click", () => {
    menu.classList.remove("header__nav_active");
  });
})();
