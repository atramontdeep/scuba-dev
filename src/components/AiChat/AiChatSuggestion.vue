<template>
  <button type="button" class="scuba-ai-chat-suggestion">
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
// Pergunta pronta para fazer ao Dipy, em um clique (28/10/2026, das dúvidas frequentes da jornada de carbono): pílula
// com contorno tracejado, que fica contínuo e azul no hover.
defineProps({
  label: {
    type: String,
    default: ''
  }
});
</script>

<style scoped>
.scuba-ai-chat-suggestion {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-4xs);
  padding: 4px var(--spacing-2xs);
  border: 1px dashed var(--semantic-color-neutral-300);
  border-radius: var(--border-radius-rounded-pill);
  background: none;
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-xs);
  text-align: left;
  color: var(--context-color-text-primary);
  cursor: pointer;
  transition: border-color var(--transition-fast), background var(--transition-fast);
}

.scuba-ai-chat-suggestion:hover {
  border-style: solid;
  border-color: var(--context-color-surface-focus-dark);
}

.scuba-ai-chat-suggestion:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}
</style>
