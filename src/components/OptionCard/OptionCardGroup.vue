<template>
  <div class="scuba-option-card-group" role="radiogroup" :aria-label="label" @keydown="handleKeydown">
    <slot />
  </div>
</template>

<script setup>
// Escolha de uma entre várias opções em cartões (28/10/2026, das sugestões de resposta). Funciona como um grupo de
// rádio: as setas passam de uma opção a outra e já escolhem; só a escolhida (ou a primeira) recebe o Tab.
import { provide, ref } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: null
  },
  label: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['update:modelValue']);

const values = ref([]);

provide('optionCardGroup', {
  isSelected: (value) => props.modelValue === value,
  isTabStop: (value) => (props.modelValue == null ? values.value[0] === value : props.modelValue === value),
  select: (value) => emit('update:modelValue', value),
  register: (value) => values.value.push(value),
  unregister: (value) => {
    values.value = values.value.filter((v) => v !== value);
  }
});

const handleKeydown = (event) => {
  const keys = { ArrowDown: 1, ArrowRight: 1, ArrowUp: -1, ArrowLeft: -1 };
  if (!(event.key in keys)) return;
  const radios = [...event.currentTarget.querySelectorAll('[role="radio"]:not(:disabled)')];
  const index = radios.indexOf(document.activeElement);
  if (index === -1) return;
  event.preventDefault();
  const next = radios[(index + keys[event.key] + radios.length) % radios.length];
  next.focus();
  next.click();
};
</script>

<style scoped>
.scuba-option-card-group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  font-family: var(--type-font-family-body);
}
</style>
