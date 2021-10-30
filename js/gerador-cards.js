var list = document.querySelector(".results__list");
var moreCards = document.querySelector(".search__btn");

var numCards = 12;
var cardIndex = 0;
var cardStop = numCards;
function createCards() {
    for (cardIndex; cardIndex < cardStop; cardIndex++) {
        if (cardIndex < sorteios.length) {
        const sorteio = sorteios[cardIndex];
        newCard(sorteio);
        } else {
            moreCards.innerText = "Fim dos sorteios";
            moreCards.style.background = "#AAA";
            moreCards.style.color = "black";
        }
    }
    cardStop = cardStop + numCards;
}

function newCard(sorteio) {
    var item = document.createElement("li");
    var itemLink = document.createElement("a");
    var itemImg = document.createElement("img");
    var itemDescription = document.createElement("div");
    var itemDescriptionHead = document.createElement("div");
    var itemDescriptionBody = document.createElement("div");
    var itemTitle = document.createElement("h3");
    var itemPrice = document.createElement("span");
    var itemAuthor = document.createElement("span");
    var itemExpiration = document.createElement("span");

    // Container e link do sorteio
    list.appendChild(item);
    item.classList.add("results__list-item");
    item.appendChild(itemLink);
    itemLink.classList.add("results__item-link");
    itemLink.href = sorteio.link;
    itemLink.target = "_blank";

    // Imagem do sorteio
    itemLink.appendChild(itemImg);
    itemImg.classList.add("results__item-image");
    itemImg.src = sorteio.img;

    // Descrição do sorteio
    itemLink.appendChild(itemDescription);
    itemDescription.classList.add("results__item-description");
    itemDescription.appendChild(itemDescriptionHead);
    itemDescriptionHead.classList.add("results__item-description-head");
    itemDescription.appendChild(itemDescriptionBody);
    itemDescriptionBody.classList.add("results__item-description-body");

    // Titulo do sorteio
    itemDescriptionHead.appendChild(itemTitle);
    itemTitle.classList.add("results__item-title");
    itemTitle.innerText = sorteio.title;

    // Preço do sorteio
    itemDescriptionHead.appendChild(itemPrice);
    itemPrice.classList.add("results__item-price");
    itemPrice.innerText = sorteio.price;

    // Autor do sorteio
    itemDescriptionBody.appendChild(itemAuthor);
    itemAuthor.classList.add("results__item-author");
    itemAuthor.innerText = sorteio.author;

    // Expiração do sorteio
    itemDescriptionBody.appendChild(itemExpiration);
    itemExpiration.classList.add("results__item-expiration");
    itemExpiration.innerText = sorteio.expiration;
}

createCards();
moreCards.addEventListener("click", createCards);