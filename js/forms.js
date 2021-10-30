// LOGIN FORM
var entrar = document.querySelector(".entrar__cta");

entrar.addEventListener("click", validarLogin);

function validarLogin() {
    if (document.querySelector("#email").value == users[0].email && document.querySelector("#senha").value == users[0].password) {
        document.cookie = "active=true"; //cria um cookie para a seção de uso ativa
        window.location.replace("home.html");
    }
    else {
        alert("Deu erro!");
    }
}