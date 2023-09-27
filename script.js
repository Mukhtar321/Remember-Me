const section = document.querySelector("section");
const playerLivesCount = document.querySelector("span");
const playerLives = 6;

// Text Content
playerLivesCount.textContent = playerLives;

// Data
const getData = () =>[
    { imgScr: "./Images/Image1.jpg", name: "Image1"},
    { imgScr: "./Images/Image2.jpg", name: "Image2"},
    { imgScr: "./Images/Image3.jpg", name: "Image3"},
    { imgScr: "./Images/Image4.jpg", name: "Image4"},
    { imgScr: "./Images/Image5.jpg", name: "Image5"},
    { imgScr: "./Images/Image6.jpg", name: "Image6"},
    { imgScr: "./Images/Image7.jpg", name: "Image7"},
    { imgScr: "./Images/Image8.jpg", name: "Image8"},
    { imgScr: "./Images/Image1.jpg", name: "Image1"},
    { imgScr: "./Images/Image2.jpg", name: "Image2"},
    { imgScr: "./Images/Image3.jpg", name: "Image3"},
    { imgScr: "./Images/Image4.jpg", name: "Image4"},
    { imgScr: "./Images/Image5.jpg", name: "Image5"},
    { imgScr: "./Images/Image6.jpg", name: "Image6"},
    { imgScr: "./Images/Image7.jpg", name: "Image7"},
    { imgScr: "./Images/Image8.jpg", name: "Image8"},
];

// Randomize
const randomize = () => {
    const cardData =getData();
    cardData.sort(() => Math.random() - 0.5);
    return cardData;
};

// Card Generator Function
const cardGenerator = () => {
    const cardData = randomize();
    // genenate HTML
    cardData.forEach((item) => {
      const card = document.createElement("div");
      const face = document.createElement("img");
      const back = document.createElement("div");
      card.classList = "card";
      face.classList = "face";
      back.classList = "back";
    //attach info to cards
    face.src = item.imgScr;
    card.setAttribute('name', item.name);
    //attach cards to section
    section.appendChild(card);
    card.appendChild(face);
    card.appendChild(back);

     card.addEventListener('click', (e) => {
        card.classList.toggle("toggleCard");
        checkCards(e);
     });
   });
};

//check matches
const checkCards = (e) => {
    console.log(e);
    const clickedCard = e.target;
    console.log(clickedCard);
    clickedCard.classList.add("flipped");
};

cardGenerator();