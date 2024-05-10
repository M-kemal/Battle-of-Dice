# Battle of Dice

A competitive dice game for one or two players, created using Vue.js 3 Composition API and Tailwind CSS. Players roll dice to reach 100 points, with each roll adding to their current score. However, if a player rolls a 1, their turn ends and they lose their current points for that turn. The first player to reach 100 points wins the game.

## Gameplay

- **Single Player Mode:** Play against the Computer. Enter your name, and the Computer will be your opponent.
- **Two Player Mode:** Enter the names of both players. Player 1 and Player 2 will take turns to roll the dice.

### How to Play:

1. **Select Player Mode:**

   - Choose between Single Player or Two Player mode.
   - In Single Player mode, you play against the Computer.
   - In Two Player mode, you can play with another person.

2. **Rolling the Dice:**

   - Player 1 starts by clicking the "Roll Dice" button.
   - The rolled number is added to the player's current score.
   - If a player rolls a 1, their current score resets to 0, and it's the next player's turn.

3. **Holding the Score:**

   - Click the "Hold" button to add the current score to the total score, then the turn passes to the next player.
   - The first player to reach 100 points wins the game.

4. **Computer Behavior:**
   - In Single Player mode, the Computer will roll the dice a random number of times.
   - If the Computer rolls a 1 or reaches its random roll limit, it will hold its score.

## GamePlay Link

Play the game on Github Pages: [Battle of Dice](https://m-kemal.github.io/Battle-of-Dice/)

## Screenshots

### Gameplay Rules

![Gameplay Rules](/src/assets/screenshot.png)

### Game Screen

![Game Screen](/src/assets/screenshot2.png)

## Technologies Used

- **Vue.js 3 Composition API:**
- **Tailwind CSS:**
- **Canvas-confetti:**
