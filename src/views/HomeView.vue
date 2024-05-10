<script setup>
import { useRouter } from 'vue-router';
import CustomBtn from '@/components/CustomBtn.vue';
import { ref } from 'vue';

const playerMode = ref('');
const player1Name = ref('');
const player2Name = ref('');

const router = useRouter();
const startGame = () => {
  if (playerMode.value === '1' && player1Name.value.trim()) {
    router.push({ name: 'game', query: { mode: 'single', player1: player1Name.value.trim() } });
  } else if (playerMode.value === '2' && player1Name.value.trim() && player2Name.value.trim()) {
    router.push({
      name: 'game',
      query: {
        mode: 'double',
        player1: player1Name.value.trim(),
        player2: player2Name.value.trim()
      }
    });
  } else {
    alert('Please select player mode and enter player names');
  }
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <h1 class="text-6xl font-bold mb-6 text-heading font-Cinzel animate-fade-in">
      Welcome to Battle of Dice!
    </h1>
    <p class="mb-4 text-lg animate-fade-in-up">
      A competitive game where players roll dice to reach 100 points.
    </p>
    <div class="text-left max-w-7xl animate-[fadeInUp_0.7s_ease-in-out]">
      <h2 class="text-2xl font-semibold mb-4 font-Cinzel text-heading">How to Play:</h2>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>The game can be played in single-player or two-player mode.</li>
        <li>
          <strong>Single Player Mode:</strong>
          You will play against the Computer. Enter your name and the Computer will be your
          opponent.
        </li>
        <li>
          <strong>Two Player Mode:</strong>
          Enter the names of both players. Player 1 and Player 2 will take turns to roll the dice.
        </li>
        <li>Player 1 starts by clicking the "Roll Dice" button to roll a random dice.</li>
        <li>The rolled number is added to the player's current score.</li>
        <li>
          If the player clicks the "Hold" button, their current score is added to their total score,
          and their current score resets to 0. Then, it's the next player's turn.
        </li>
        <li>
          If the player continues to roll the dice without clicking "Hold" and rolls a 1, their
          current score resets to 0, and it's the next player's turn.
        </li>
        <li>The first player to reach 100 points wins the game.</li>
        <li>
          <strong>Computer Behavior:</strong>
          In single-player mode, when it's the Computer's turn, it will roll the dice a random
          number of times. If it rolls a 1 or reaches its random roll limit, it will hold its score.
        </li>
      </ul>
      <!-- Select Player Mode -->
      <div class="Select-Player w-1/2">
        <label for="player" class="block mb-2 text-sm font-medium text-white"
          >Select Player Mode:</label
        >
        <select
          v-model="playerMode"
          id="player"
          class="text-sm rounded-lg block w-full p-2.5 bg-fire/30 border-fire placeholder-fire/10 text-white focus:ring-fire focus:border-fire"
        >
          <option value="" disabled selected>Single or Two Persons</option>
          <option value="1">Single Player</option>
          <option value="2">Two Player</option>
        </select>
      </div>
      <!-- Select Player Mode End -->
      <div v-if="playerMode === '1'" class="my-4 w-1/2">
        <label for="first_name" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
          >Enter Your Name:</label
        >
        <input
          v-model="player1Name"
          type="text"
          id="first_name"
          class="border text-sm rounded-lg block w-full p-2.5 bg-fire/30 border-fire/35 placeholder-gray-400 text-white focus:ring-fire/focus:border-fire/50 focus:border-fire/50"
          placeholder="Enter your name here..."
          required
        />
      </div>

      <div v-if="playerMode === '2'" class="mb-1 flex items-center w-1/2 space-x-4 mt-2">
        <div class="player1 w-1/2">
          <label
            for="first_name"
            class="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >Enter Player 1 Name:</label
          >
          <input
            v-model="player1Name"
            type="text"
            id="first_name"
            class="border text-sm rounded-lg block w-full p-2.5 bg-fire/30 border-fire/35 placeholder-gray-400 text-white focus:ring-fire/focus:border-fire/50 focus:border-fire/50"
            placeholder="Enter your name here..."
            required
          />
        </div>

        <div class="player2 w-1/2">
          <label
            for="first_name"
            class="block my-2 text-sm font-medium text-gray-900 dark:text-white"
            >Enter Player 2 Name:</label
          >
          <input
            v-model="player2Name"
            type="text"
            id="first_name"
            class="border text-sm rounded-lg block w-full p-2.5 bg-fire/30 border-fire/35 placeholder-gray-400 text-white focus:ring-fire/focus:border-fire/50 focus:border-fire/50"
            placeholder="Enter second player's name..."
            required
          />
        </div>
      </div>

      <CustomBtn @click="startGame" class="">let's start</CustomBtn>
    </div>
  </div>
</template>

<style></style>
