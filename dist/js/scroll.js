// Variável global
var header = document.querySelector(".header");

// Sistema que identifica o scroll e modifica o header 
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add("header-not-index-color");
    }
    else {
        header.classList.remove("header-not-index-color");
      }
};


