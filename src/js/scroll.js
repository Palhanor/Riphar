// Variável global
var header = document.querySelector(".header");

// Sistema que identifica o scroll e modifica o header 
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add("header-white");
    }
    else {
        header.classList.remove("header-white");
      }
};

// Gambiarra para aplicar um estilo diferente em outras páginas que não a index.html
if (window.location != "file:///C:/Users/Computador/Desktop/Lucas/Developer/Projetos/Riphar/index.html") {
    header.classList.add("header-white");
    header.style.position = "static";
}
