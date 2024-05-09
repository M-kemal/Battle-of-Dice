<script setup>
import { useRouter } from 'vue-router';
import CustomBtn from '@/components/CustomBtn.vue';

const router = useRouter();
const startGame = () => {
  router.push({ name: 'game' });
};
</script>

<template>
  <div class="min-h-screen flex flex-col items-center justify-center p-4">
    <h1 class="text-6xl font-bold mb-6 text-heading font-Cinzel animate-fade-in">
      Welcome to Battle of Dice!
    </h1>
    <p class="mb-4 text-lg animate-fade-in-up">
      A two-player competitive game where players roll dice to reach 100 points.
    </p>
    <div class="text-left max-w-xl animate-[fadeInUp_0.7s_ease-in-out]">
      <h2 class="text-2xl font-semibold mb-4 font-Cinzel text-heading">How to Play:</h2>
      <ul class="list-disc list-inside space-y-2 mb-4">
        <li>The game is played between two players: Player 1 and Player 2.</li>
        <li>Player 1 starts by clicking the "Roll Dice" button to roll a random dice.</li>
        <li>The rolled number is added to the player's current score.</li>
        <li>
          If the player clicks the "Hold" button, their current score is added to their total score,
          and their current score resets to 0.
        </li>
        <li>
          If the player continues to roll the dice without clicking "Hold" and rolls a 1, their
          current score resets to 0, and it's the next player's turn.
        </li>
        <li>The first player to reach 100 points wins the game.</li>
      </ul>
      <CustomBtn @click="startGame">let's start</CustomBtn>
    </div>
  </div>
</template>

<style></style>
