const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
let playerLives = 6;

playerLivesCount.textContent = playerLives;

const getData = () => [
    { imgSrc: "./Images/pinkMonster.jpg", name:"pinkMonster"},
    { imgSrc: "./Images/oldRust.jpg", name:"oldRust"},
    { imgSrc: "./Images/classicBlue.jpg", name:"classicBlue"},
    { imgSrc: "./Images/classicBeauty.jpg", name:"classicBeauty"},
    { imgSrc: "./Images/palmBlue.jpg", name:"palmBlue"},
    { imgSrc: "./Images/daBoyz.jpg", name:"daBoyz"},
    { imgSrc: "./Images/curves.jpg", name:"curves"},
    { imgSrc: "./Images/redworld.jpg", name:"redworld"},
    { imgSrc: "./Images/pinkMonster.jpg", name:"pinkMonster"},
    { imgSrc: "./Images/oldRust.jpg", name:"oldRust"},
    { imgSrc: "./Images/classicBlue.jpg", name:"classicBlue"},
    { imgSrc: "./Images/classicBeauty.jpg", name:"classicBeauty"},
    { imgSrc: "./Images/palmBlue.jpg", name:"palmBlue"},
    { imgSrc: "./Images/daBoyz.jpg", name:"daBoyz"},
    { imgSrc: "./Images/curves.jpg", name:"curves"},
    { imgSrc: "./Images/redworld.jpg", name:"redworld"},
];

const randomize = () => {
    const cardData = getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

const cardGenerator = () => {
    const cardData = randomize();
    // generate html
    cardData.forEach((item) => {
        const card = document.createElement("div");
        const face = document.createElement("img");
        const back = document.createElement("div");
        card.classList = 'card';
        face.classList = 'face';
        back.classList = 'back';
        // attach img to card
        face.src = item.imgSrc;
        card.setAttribute('name', item.name);
        // attach the child to section
        section.appendChild(card);
        card.appendChild(face);
        card.appendChild(back);

        card.addEventListener("click", (e) => {
            card.classList.toggle("toggleCard");
            checkCards(e);
        });
    });
};

// check card
const checkCards = (e) => {
    const clickedCard = e.target;
    clickedCard.classList.add("flipped");
    const flippedCards = document.querySelectorAll(".flipped");
    console.log(flippedCards);
    if (flippedCards.length === 2){
        if(
            flippedCards[0].getAttribute("name") ===
            flippedCards[1].getAttribute("name")
        ) {
            console.log("match");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                card.style.pointerEvents = "none";
            });
        } else {
            console.log("wrong");
            flippedCards.forEach((card) => {
                card.classList.remove("flipped");
                setTimeout(() => card.classList.remove("toggleCard"), 1000);
            });
            playerLives--;
            playerLivesCount.textContent = playerLives;
            if (playerLives === 0) {
                restart();
            }
        }
    }
};

// restart
const restart = () => {
    let cardData = randomize();
    let faces = document.querySelectorAll(".face")
    let cards = document.querySelectorAll(".card")
    section.style.pointerEvents = "none";
    cardData.forEach((item,index) => {
        cards[index].classList.remove('toggleCard');

        setTimeout(() => {
         cards[index].style.pointerEvents = "all";
         faces[index].src = item.imgSrc;
         cards[index].setAttribute('name', item.name);
         section.style.pointerEvents = "all";
        }, 1000);
    });
    playerLives = 6;
    playerLivesCount.textContent = playerLives;
};

cardGenerator();