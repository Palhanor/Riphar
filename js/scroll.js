var header = document.querySelector(".header");

window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        header.classList.add("header-white");
    }
    else {
        header.classList.remove("header-white");
      }
};

if (window.location != "file:///C:/Users/Computador/Desktop/Lucas/Developer/Projetos/Riphar/index.html") {
    header.classList.add("header-white");
    header.style.position = "static";
}

console.log(window.location);