# Remember-Me

Initialize the game:
- Create an array of card objects, each containing:
  - An image path (e.g., "image1.jpg", "image2.jpg", etc.)
  - A boolean to track if the card is flipped (initially false)

- Shuffle the array of card objects randomly

- Create variables to keep track of the game state:
  - flippedCards: an empty array to store currently flipped cards
  - matches: a counter for the number of matched pairs (initially 0)
  - wrongGuesses: a counter for the number of wrong guesses (initially 0)

For each card element in the HTML:
- Attach a click event listener that handles card flipping:
  - If the card is not already flipped and there are less than 2 cards flipped:
    - Flip the card (set its 'flipped' property to true)
    - Add the card to the 'flippedCards' array
    - If two cards are flipped:
      - Check if the two cards match:
        - If they match:
          - Increment the 'matches' counter
          - If 'matches' equals half the number of cards (all pairs are found):
            - Display a message indicating the player has won
            - Optionally, reset the game or perform other actions
        - If they don't match:
          - Wait for a brief moment (e.g., 1 second)
          - Flip both cards back (set their 'flipped' property to false)
          - Clear the 'flippedCards' array
          - Increment the 'wrongGuesses' counter
          - Check if the player has lost (e.g., after a certain number of wrong guesses):
            - Display a message indicating the game is over
            - Optionally, reset the game or perform other actions

- Finally, ensure the HTML and CSS are set up as described earlier to display the game and images properly.


