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
  // página (28/10/2026, da resposta do indicador); 'inset', uma bandeja no fundo da página dentro de um cartão branco,
  // com linhas compactas, e o item aberto vira um cartão branco com sombra (29/10/2026, das respostas anteriores da
  // resposta do indicador). Etiquetas vão no slot "chip" do AccordionItem.
  variant: {
    type: String,
    default: 'outline',
    validator: (value) => ['outline', 'card', 'inset'].includes(value)
  }
});

const openItems = ref(
  props.multiple
    ? (Array.isArray(props.defaultOpen) ? props.defaultOpen : props.defaultOpen != null ? [props.defaultOpen] : [])
    : (props.defaultOpen != null ? [props.defaultOpen] : [])
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

/* Inset: a bandeja no fundo da página; as linhas sem fundo, a aberta num cartão branco. */
.scuba-accordion--inset {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4xs);
  padding: var(--spacing-4xs);
  border-radius: 14px;
  background: var(--context-color-surface-page);
}

.scuba-accordion--inset :deep(.scuba-accordion-item) {
  margin: 0;
  border: none;
  border-radius: 10px;
  transition: background var(--transition-fast);
}

/* No inset, o anel de foco só pelo teclado: o clique abre o item sem contorno. */
.scuba-accordion--inset :deep(.scuba-accordion-item--focused) {
  box-shadow: var(--shadow-card);
}

.scuba-accordion--inset :deep(.scuba-accordion-item__header:focus-visible) {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}

.scuba-accordion--inset :deep(.scuba-accordion-item--open) {
  background: var(--context-color-surface-primary);
  box-shadow: var(--shadow-card);
}

.scuba-accordion--inset :deep(.scuba-accordion-item__header) {
  justify-content: flex-start;
  gap: var(--spacing-2xs);
  padding: 10px var(--spacing-xs);
  border-radius: 10px;
  background: none;
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
}

.scuba-accordion--inset :deep(.scuba-accordion-item:not(.scuba-accordion-item--open) .scuba-accordion-item__header:hover) {
  background: rgba(255, 255, 255, 0.7);
}

.scuba-accordion--inset :deep(.scuba-accordion-item__header-content) {
  flex: 0 1 auto;
}

.scuba-accordion--inset :deep(.scuba-accordion-item__actions) {
  flex: 1;
  gap: var(--spacing-2xs);
}

.scuba-accordion--inset :deep(.scuba-accordion-item__icon) {
  margin-left: auto;
}

.scuba-accordion--inset :deep(.scuba-accordion-item__icon svg) {
  width: 16px;
  height: 16px;
}

.scuba-accordion--inset :deep(.scuba-accordion-item__body) {
  padding: 0 var(--spacing-xs) var(--spacing-xs);
  color: var(--context-color-text-primary);
}
</style>
