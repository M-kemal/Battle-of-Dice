<template>
  <button :class="computedClasses" @click="handleClick">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  color: {
    type: String,
    default: 'default'
  }
});

const emit = defineEmits(['click']);

const handleClick = (event) => {
  emit('click', event);
};

const computedClasses = computed(() => {
  const baseClasses =
    'mt-6 px-4 py-2 font-bold rounded font-Cinzel transition-all duration-150 ease-linear active:translate-y-0.5';
  const colorClasses = {
    default: 'bg-secondary hover:bg-heading',
    fire: 'bg-fire hover:bg-fire/75',
    notEvent: 'bg-notEvent hover:cursor-not-allowed'
  };

  const colorClass = colorClasses[props.color] || colorClasses.default;

  return `${baseClasses} ${colorClass}`;
});
</script>

<style scoped></style>
