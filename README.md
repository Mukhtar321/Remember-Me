# Remember-Me

Initialize the Game:
- Create an array to store the card objects.
- Shuffle the cards randomly.
- Initialize variables for score (points) and lives.
- Display the initial score and lives on the screen.

Game Loop:
- While there are unopened cards and lives > 0:
    - Wait for the player to click on a card.
    - Flip the selected card to reveal its hidden content.
    - If it's the first card flipped:
        - Store it as the first card in a temporary variable.
    - If it's the second card flipped:
        - Store it as the second card in a temporary variable.
        - Compare the content of the two cards:
            - If they match:
                - Increase the player's score.
                - Keep the cards open.
            - If they don't match:
                - Decrease the player's lives.
                - Wait for a short moment to let the player see the cards.
                - Flip both cards back face down.
    - Check if all pairs have been matched:
        - If yes, the player wins the game.
        - Display a winning message and the final score.
        - End the game loop.
- If the player has run out of lives:
    - Display a losing message.
    - End the game loop.

Game Over:
- Provide options to start a new game or quit the game.
