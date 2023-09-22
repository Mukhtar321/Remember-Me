// Get all the card elements
const cards = document.querySelectorAll('.card');

let flippedCards = [];
let wrongGuesses = 0;

cards.forEach(card => {
    card.addEventListener('click', () => {
        if (!card.classList.contains('flipped') && flippedCards.length < 2) {
            // Flip the card
            card.classList.add('flipped');
            flippedCards.push(card);

            // Check if two cards are flipped
            if (flippedCards.length === 2) {
                checkForMatch();
            }
        }
    });
});

function checkForMatch() {
    const [card1, card2] = flippedCards;
    if (card1.textContent === card2.textContent) {
        // It's a match
        flippedCards = [];
    } else {
        // It's a wrong guess
        setTimeout(() => {
            card1.classList.remove('flipped');
            card2.classList.remove('flipped');
            flippedCards = [];
            wrongGuesses++;

            // Check if the player has lost (e.g., after X wrong guesses)
            const maxWrongGuesses = 3; // Adjust this as needed
            if (wrongGuesses >= maxWrongGuesses) {
                // Implement game over logic here
                alert('Game Over');
                // You can reset the game or perform any other actions
            }
        }, 5000); // Wait for 5 seconds before flipping back
    }
}
