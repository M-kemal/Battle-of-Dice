<script setup>
import { ref } from 'vue';
import CustomBtn from './CustomBtn.vue';
import HandLeft from './icons/HandLeft.vue';
import HandRight from './icons/HandRight.vue';
import confetti from 'canvas-confetti';
import NewgameIcon from './icons/NewgameIcon.vue';
import DiceIcon from './icons/DiceIcon.vue';
import HoldIcon from './icons/HoldIcon.vue';

const activePlayer = ref(0);
const scores = ref([0, 0]);
const currentScore = ref([0, 0]);
const dice = ref(0);
const winner = ref(null);
const playing = ref(true);

const rollDice = () => {
  if (playing.value) {
    dice.value = Math.floor(Math.random() * 6) + 1;
    if (dice.value !== 1) {
      currentScore.value[activePlayer.value] += dice.value;
    } else {
      currentScore.value[activePlayer.value] = 0;
      activePlayer.value = activePlayer.value === 0 ? 1 : 0;
    }
  }
};

const holdScore = () => {
  if (playing.value) {
    scores.value[activePlayer.value] += currentScore.value[activePlayer.value];
    if (scores.value[activePlayer.value] >= 100) {
      winner.value = activePlayer.value;
      playing.value = false;
      launchConfetti();
    } else {
      currentScore.value[activePlayer.value] = 0;
      activePlayer.value = activePlayer.value === 0 ? 1 : 0;
    }
  }
};

const newGame = () => {
  scores.value = [0, 0];
  currentScore.value = [0, 0];
  activePlayer.value = 0;
  winner.value = null;
  playing.value = true;
  dice.value = 0;
};

const launchConfetti = () => {
  confetti({
    particleCount: 150,
    spread: 70,
    origin: { y: 0.6 }
  });
};
</script>

<template>
  <div class="w-full h-screen relative flex items-center justify-center p-6">
    <!-- Player 1 Start -->
    <div
      class="w-full h-full border border-transparent transition-colors duration-300 ease-linear"
      :class="[
        { 'bg-black/5 border !border-fire': activePlayer === 0 },
        { '!bg-black/25': winner === 0 }
      ]"
    >
      <div class="flex flex-col items-center justify-start relative">
        <div class="details space-y-10 text-center absolute top-36 left-0 w-full uppercase">
          <h5 class="text-5xl font-Cinzel" :class="{ 'font-bold': activePlayer === 0 }">
            Player 1
          </h5>
          <p class="text-3xl">Score : {{ scores[0] }}</p>
        </div>
        <div
          class="currentScore absolute top-80 left-1/2 -translate-x-1/2 uppercase bg-transparent shadow-inner shadow-fire p-6 text-3xl text-center"
        >
          <p class="mb-4">Current</p>
          <span class="text-6xl">{{ currentScore[0] }}</span>
        </div>
      </div>
    </div>
    <!-- Player 1 End -->
    <!-- Vertical Line Start -->
    <div class="w-0.5 h-full bg-fire/65"></div>
    <!-- Vertical Line End -->
    <!-- Player 2 Start -->
    <div
      class="w-full h-full border border-transparent transition-colors duration-300 ease-linear"
      :class="[
        { 'bg-black/5 border !border-fire': activePlayer === 1 },
        { '!bg-black/25': winner === 1 }
      ]"
    >
      <div class="flex flex-col items-center justify-start relative">
        <div class="details space-y-10 text-center absolute top-36 left-0 w-full uppercase">
          <h5 class="text-5xl font-Cinzel" :class="{ 'font-bold': activePlayer === 1 }">
            Player 2
          </h5>
          <p class="text-3xl">Score : {{ scores[1] }}</p>
        </div>
        <div
          class="currentScore absolute top-80 left-1/2 -translate-x-1/2 uppercase bg-transparent shadow-inner shadow-fire p-6 text-3xl text-center"
        >
          <p class="mb-4">Current</p>
          <span class="text-6xl"> {{ currentScore[1] }}</span>
        </div>
      </div>
    </div>
    <!-- Player 2 End -->
    <!-- Dice Start -->
    <div class="absolute top-52 left-1/2 -translate-x-1/2">
      <img
        v-if="dice !== 0"
        :src="`/dice-images/dice-${dice}.png`"
        alt="dice"
        class="w-24 h-24 object-cover"
      />
    </div>
    <!-- Dice End -->
    <!-- Buttons Start -->
    <div
      class="absolute top-60 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col justify-between mt-10 h-96 w-44"
    >
      <CustomBtn
        @click="newGame"
        color="fire"
        :class="{ 'animate-bounce': winner !== null }"
        class="flex items-center justify-center"
      >
        <span class="mr-2">New Game</span>
        <NewgameIcon />
      </CustomBtn>
      <div class="flex flex-col">
        <CustomBtn
          @click="rollDice"
          :color="winner !== null ? 'notEvent' : 'fire'"
          class="mb-4 flex items-center justify-center"
        >
          <span class="mr-2">Roll Dice</span>
          <DiceIcon />
        </CustomBtn>
        <CustomBtn
          @click="holdScore"
          :color="winner !== null ? 'notEvent' : 'fire'"
          class="flex items-center justify-center"
        >
          <span class="mr-2">Hold Score</span>
          <HoldIcon />
        </CustomBtn>
      </div>
    </div>
    <!-- Buttons End -->

    <!-- Who is next? -->
    <div class="absolute top-10 left-1/2 -translate-x-1/2">
      <HandLeft v-if="activePlayer === 0" />
      <HandRight v-if="activePlayer === 1" />
    </div>

    <div>
      <h5
        class="text-xl font-Cinzel absolute bottom-32 left-[calc(50%-26rem)] flex flex-col items-center"
        v-if="activePlayer === 0 && winner === null"
      >
        <span>Your turn</span>
        <DiceIcon class="animate-spin" />
      </h5>
      <h5
        class="text-xl font-Cinzel absolute bottom-32 right-[calc(50%-26rem)] flex flex-col items-center"
        v-if="activePlayer === 1 && winner === null"
      >
        <span>Your turn</span>
        <DiceIcon class="animate-spin" />
      </h5>
    </div>
    <!-- Who is next? -->

    <!-- Winner -->
    <Transition name="fade">
      <div
        class="w-full h-screen absolute bottom-20 left-0 flex items-end justify-center pointer-events-none"
        v-if="winner !== null"
      >
        <h3 class="text-4xl font-bold text-center uppercase animate-pulse">
          Player {{ winner + 1 }} Won !! 🤩🎉
        </h3>
      </div>
    </Transition>
    <!-- Winner -->
  </div>
</template>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.8s linear;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-to,
.fade-leave-from {
  opacity: 1;
}
</style>
