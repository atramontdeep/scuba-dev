<template>
  <button type="button" :class="['scuba-ai-button', 'scuba-dipy-host', `scuba-ai-button--${size}`]" :disabled="disabled">
    <span class="scuba-ai-button__icon" aria-hidden="true">
      <slot name="icon"><DipyIcon /></slot>
    </span>
    <slot>{{ label }}</slot>
  </button>
</template>

<script setup>
// Botão de ação feita pela IA (ler um arquivo, sugerir uma resposta), no degradê da IA e sem contorno, com o Dipy
// (28/10/2026, da jornada de carbono). No hover, a folha do Dipy balança. O slot "icon" troca o ícone.
import DipyIcon from '../Dipy/DipyIcon.vue';

defineProps({
  label: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.scuba-ai-button {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  border: none;
  border-radius: var(--border-radius-rounded-md);
  background: var(--semantic-color-ai-gradient);
  font-family: var(--type-font-family-body);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
  cursor: pointer;
  transition: background var(--transition-fast);
}

.scuba-ai-button--sm {
  height: 32px;
  padding: 0 var(--spacing-2xs) 0 var(--spacing-3xs);
  font-size: var(--type-font-size-sm);
}

.scuba-ai-button--md {
  height: 40px;
  padding: 0 var(--spacing-xs) 0 var(--spacing-2xs);
  font-size: var(--type-font-size-sm);
}

.scuba-ai-button:hover:not(:disabled) {
  background: var(--semantic-color-ai-gradient-hover);
}

.scuba-ai-button:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}

.scuba-ai-button:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.scuba-ai-button__icon {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 18px;
  height: 18px;
  font-size: 18px;
}

.scuba-ai-button__icon :deep(svg),
.scuba-ai-button__icon :deep(img) {
  width: 100%;
  height: 100%;
}
</style>
