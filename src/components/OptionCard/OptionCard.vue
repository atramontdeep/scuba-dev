<template>
  <button
    type="button"
    role="radio"
    :class="optionClasses"
    :aria-checked="selected"
    :tabindex="tabStop ? 0 : -1"
    :disabled="disabled"
    @click="group?.select(value)"
  >
    <span class="scuba-option-card__dot" aria-hidden="true"></span>
    <span class="scuba-option-card__body">
      <span v-if="label || $slots.icon" class="scuba-option-card__label">
        <span v-if="$slots.icon" class="scuba-option-card__icon" aria-hidden="true"><slot name="icon" /></span>
        {{ label }}
      </span>
      <span class="scuba-option-card__text"><slot /></span>
      <span v-if="$slots.meta" class="scuba-option-card__meta"><slot name="meta" /></span>
    </span>
  </button>
</template>

<script setup>
// Uma opção do OptionCardGroup: cartão branco sem contorno; a escolhida no azul claro de seleção, com o contorno azul
// por dentro. A variante 'ai' fica no degradê da IA, para a opção que ela escreveu. O slot "meta" leva de onde veio a
// opção (um dado, um arquivo), numa faixa no fundo da página.
import { computed, inject, onBeforeUnmount } from 'vue';

const props = defineProps({
  value: {
    type: [String, Number],
    required: true
  },
  label: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'ai'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const group = inject('optionCardGroup', null);
group?.register(props.value);
onBeforeUnmount(() => group?.unregister(props.value));

const selected = computed(() => group?.isSelected(props.value) ?? false);
const tabStop = computed(() => group?.isTabStop(props.value) ?? true);

const optionClasses = computed(() => [
  'scuba-option-card',
  `scuba-option-card--${props.variant}`,
  { 'scuba-option-card--selected': selected.value }
]);
</script>

<style scoped>
.scuba-option-card {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xs);
  width: 100%;
  padding: var(--spacing-sm) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-rounded-lg);
  background: var(--context-color-surface-primary);
  box-shadow: var(--shadow-card);
  font-family: var(--type-font-family-body);
  text-align: left;
  cursor: pointer;
  transition: box-shadow var(--transition-fast), background var(--transition-fast);
}

.scuba-option-card:hover:not(:disabled) {
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.06), 0 8px 24px rgba(16, 24, 40, 0.08);
}

.scuba-option-card--ai {
  background: var(--semantic-color-ai-gradient);
}

.scuba-option-card--selected,
.scuba-option-card--selected:hover:not(:disabled) {
  box-shadow: inset 0 0 0 2px var(--context-color-surface-focus-dark);
}

.scuba-option-card--selected.scuba-option-card--default {
  background: var(--context-color-surface-focus-light);
}

.scuba-option-card:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}

.scuba-option-card:disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.scuba-option-card__dot {
  display: grid;
  flex: 0 0 20px;
  place-items: center;
  width: 20px;
  height: 20px;
  margin-top: 1px;
  border: 1.5px solid var(--primitives-color-gray-400);
  border-radius: 50%;
  background: var(--context-color-surface-primary);
  box-sizing: border-box;
}

.scuba-option-card--selected .scuba-option-card__dot {
  border: 6px solid var(--context-color-surface-focus-dark);
}

.scuba-option-card__body {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--spacing-3xs);
  min-width: 0;
}

.scuba-option-card__label {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
}

.scuba-option-card__icon {
  display: inline-flex;
  width: 20px;
  height: 20px;
  font-size: 18px;
}

.scuba-option-card__icon :deep(svg),
.scuba-option-card__icon :deep(img) {
  width: 100%;
  height: 100%;
}

.scuba-option-card__text {
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

.scuba-option-card__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  padding: var(--spacing-3xs) var(--spacing-xs);
  border-radius: 10px;
  background: var(--context-color-surface-page);
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-secondary);
}
</style>
