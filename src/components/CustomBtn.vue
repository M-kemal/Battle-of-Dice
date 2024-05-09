<template>
  <button :class="computedClasses" @click="handleClick">
    <slot />
  </button>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: {
    type: String,
    default: 'secondary'
  },
  class: {
    type: String,
    default: ''
  }
})

const emit = defineEmits(['click'])

const handleClick = (event) => {
  emit('click', event)
}

const computedClasses = computed(() => {
  return [
    'mt-6',
    'px-4',
    'py-2',
    `bg-${props.variant}`,
    `hover:bg-${props.variant}-hover`,
    'font-bold',
    'rounded',
    'font-Cinzel',
    'transition-all',
    'duration-150',
    'ease-linear',
    'active:translate-y-0.5',
    props.class
  ].join(' ')
})
</script>

<style scoped></style>
