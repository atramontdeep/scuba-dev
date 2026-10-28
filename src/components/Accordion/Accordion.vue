<template>
  <div :class="['scuba-accordion', `scuba-accordion--${variant}`]">
    <slot />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false
  },
  defaultOpen: {
    type: [String, Number, Array],
    default: null
  },
  // 'outline', com contorno; 'card', cada item num cartão branco com sombra, sem contorno, para fundos como o da
  // página (28/10/2026, da resposta do indicador).
  variant: {
    type: String,
    default: 'outline',
    validator: (value) => ['outline', 'card'].includes(value)
  }
});

const openItems = ref(
  props.multiple
    ? (Array.isArray(props.defaultOpen) ? props.defaultOpen : props.defaultOpen ? [props.defaultOpen] : [])
    : (props.defaultOpen ? [props.defaultOpen] : [])
);

const toggleItem = (id) => {
  if (props.multiple) {
    const index = openItems.value.indexOf(id);
    if (index > -1) {
      openItems.value.splice(index, 1);
    } else {
      openItems.value.push(id);
    }
  } else {
    if (openItems.value.includes(id)) {
      openItems.value = [];
    } else {
      openItems.value = [id];
    }
  }
};

const isOpen = (id) => {
  return openItems.value.includes(id);
};

provide('accordion', {
  toggleItem,
  isOpen
});
</script>

<style scoped>
.scuba-accordion {
  font-family: var(--type-font-family-body);
  width: 100%;
}

.scuba-accordion--card :deep(.scuba-accordion-item) {
  border: none;
  border-radius: var(--border-radius-rounded-lg);
  background: var(--context-color-surface-primary);
  box-shadow: var(--shadow-card);
}

.scuba-accordion--card :deep(.scuba-accordion-item--focused) {
  box-shadow: var(--shadow-card), 0 0 0 2px var(--context-color-border-focus);
}
</style>
