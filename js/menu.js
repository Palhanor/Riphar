var openMenu = document.querySelector(".header__open-menu");
var responsiveMenu = document.querySelector(".header__navigation-menu");
var closeMenu = document.querySelector(".header__close-menu");

openMenu.addEventListener("click", function() {
    responsiveMenu.classList.add("active-menu");
});

closeMenu.addEventListener("click", function() {
    responsiveMenu.classList.remove("active-menu");
});


var searchIcon = document.querySelector(".header__search-icon");
var searchInput = document.querySelector(".header__search-input");

searchIcon.addEventListener("click", function() {
    searchInput.style.display = "block";
    searchIcon.classList.remove("header__search-icon");
    searchIcon.classList.add("header__search-icon-unnactive");
    searchInput.focus();
})

searchInput.addEventListener("focusout", function() {
    if (window.innerWidth > 756) {
        searchInput.style.display = "none";
        searchIcon.classList.remove("header__search-icon-unnactive");
        searchIcon.classList.add("header__search-icon");
    }
})