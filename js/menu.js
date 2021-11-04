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
var openSearchIcon = true;

searchIcon.addEventListener("click", function() {
    if (openSearchIcon == true) {
        searchInput.classList.remove("none");
        searchInput.classList.add("block");
        searchIcon.classList.remove("fa-search");
        searchIcon.classList.add("fa-times");
        searchIcon.style.borderTop = "1px solid #7d7d7d";
        searchIcon.style.borderRight = "1px solid #7d7d7d";
        searchIcon.style.borderBottom = "1px solid #7d7d7d";
        searchIcon.style.background = "rgba(255, 255, 255, 0.4)";
        searchInput.focus();
        openSearchIcon = false;
    } else {
        searchInput.classList.remove("block");
        searchInput.classList.add("none");
        searchIcon.classList.remove("fa-times");
        searchIcon.classList.add("fa-search");
        searchIcon.style.borderTop = "none";
        searchIcon.style.borderRight = "none";
        searchIcon.style.borderBottom = "none";
        searchIcon.style.background = "transparent";
        openSearchIcon = true
    }
})