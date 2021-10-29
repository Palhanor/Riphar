var openMenu = document.querySelector(".header__open-menu");
var responsiveMenu = document.querySelector(".header__navigation-menu");
var closeMenu = document.querySelector(".header__close-menu");

openMenu.addEventListener("click", function() {
    responsiveMenu.classList.add("active-menu");
});

closeMenu.addEventListener("click", function() {
    responsiveMenu.classList.remove("active-menu");
});