<template>
  <button 
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="iconLeft" :class="['ph', iconLeft, 'scuba-button__icon-left']"></i>
    
    <span class="scuba-button__label">
      <slot>{{ label }}</slot>
    </span>
    
    <i v-if="iconRight" :class="['ph', iconRight, 'scuba-button__icon-right']"></i>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  /**
   * Variante do botão
   */
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => ['solid', 'outline', 'text'].includes(value)
  },
  
  /**
   * Tamanho do botão
   */
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  
  /**
   * Texto do botão
   */
  label: {
    type: String,
    default: 'Button'
  },
  
  /**
   * Estado desabilitado
   */
  disabled: {
    type: Boolean,
    default: false
  },
  
  /**
   * Ícone à esquerda (classe Phosphor, ex: 'ph-heart')
   */
  iconLeft: {
    type: String,
    default: ''
  },
  
  /**
   * Ícone à direita (classe Phosphor, ex: 'ph-arrow-right')
   */
  iconRight: {
    type: String,
    default: ''
  },
  
  /**
   * Largura total (100%)
   */
  fullWidth: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

const buttonClasses = computed(() => [
  'scuba-button',
  `scuba-button--${props.variant}`,
  `scuba-button--${props.size}`,
  {
    'scuba-button--disabled': props.disabled,
    'scuba-button--full-width': props.fullWidth,
    'scuba-button--with-icon': props.iconLeft || props.iconRight
  }
]);

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
/* Base Button */
.scuba-button {
  /* Layout */
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2xs, 8px);
  
  /* Typography - usando tokens do Scuba */
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
  font-size: var(--type-font-size-body-md, 16px);
  font-weight: var(--type-font-weight-semibold, 600);
  line-height: var(--type-line-height-body-md, 24px);
  
  /* Spacing */
  padding: var(--spacing-xs, 12px) var(--spacing-md, 24px);
  
  /* Border - CORRIGIDO */
  border: 2px solid transparent;
  border-radius: var(--border-radius-rounded, 8px);
  
  /* Interaction */
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  
  /* Remove default button styles */
  background: none;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
}

.scuba-button:focus-visible {
  outline: 2px solid var(--context-color-border-focus, var(--semantic-color-primary-default, #0086cd));
  outline-offset: 2px;
}

/* Full Width */
.scuba-button--full-width {
  width: 100%;
}

/* Icon Spacing */
.scuba-button__icon-left,
.scuba-button__icon-right {
  display: inline-flex;
  align-items: center;
  font-size: 1.2em;
}

/* Sizes */
.scuba-button--sm {
  height: 32px;
  padding: 0 var(--spacing-xs, 16px);
  font-size: var(--type-font-size-body-sm, 14px);
  line-height: var(--type-line-height-body-sm, 20px);
  gap: var(--spacing-3xs, 6px);
}

.scuba-button--md {
  height: 40px;
  padding: 0 var(--spacing-sm, 20px);
  font-size: var(--type-font-size-body-md, 16px);
  line-height: var(--type-line-height-body-md, 24px);
}

.scuba-button--lg {
  height: 48px;
  padding: 0 var(--spacing-md, 24px);
  font-size: var(--type-font-size-body-lg, 18px);
  line-height: var(--type-line-height-body-lg, 32px);
  gap: var(--spacing-2xs, 12px);
}

/* Variant: SOLID */
.scuba-button--solid {
  background: var(--context-color-surface-inverted, #0086cd);
  color: var(--context-text-inverted, #ffffff);
  border-color: transparent;
}

.scuba-button--solid:hover:not(:disabled) {
  background: var(--context-color-surface-focus, #0942a1);
  color: var(--context-text-focus, #ffffff);
}

.scuba-button--solid:active:not(:disabled) {
  background: var(--context-color-surface-focus, #0942a1);
  color: var(--context-text-focus, #ffffff);
}

.scuba-button--solid:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 134, 205, 0.3);
}

/* Variant: OUTLINE */
.scuba-button--outline {
  background: transparent;
  color: var(--context-color-text-primary, #191919);
  border-color: var(--context-color-border-action, #0086cd);
}

.scuba-button--outline:hover:not(:disabled) {
  background: var(--context-color-surface-action-hover, rgba(0, 134, 205, 0.1));
  border-color: #0086cd;
  color: var(--context-color-text-focus, #0942a1);
}

.scuba-button--outline:active:not(:disabled) {
  background: rgba(0, 134, 205, 0.2);
  border-color: #0942a1;
}

.scuba-button--outline:focus-visible {
  border-color: var(--context-color-border-focus, #0086cd);
  box-shadow: 0 0 0 3px rgba(0, 134, 205, 0.2);
}

/* Variant: TEXT */
.scuba-button--text {
  background: transparent;
  color: var(--semantic-color-primary-500, #0086cd);
  border-color: transparent;
  padding: var(--spacing-3xs, 8px) var(--spacing-xs, 12px);
}

.scuba-button--text:hover:not(:disabled) {
  background: var(--context-color-surface-action-hover, rgba(0, 134, 205, 0.1));
  color: var(--semantic-color-primary-600, #0942a1);
}

.scuba-button--text:active:not(:disabled) {
  background: rgba(0, 134, 205, 0.2);
}

.scuba-button--text:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 134, 205, 0.2);
}

/* Disabled State */
.scuba-button--disabled,
.scuba-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.scuba-button--solid.scuba-button--disabled,
.scuba-button--solid:disabled {
  background: var(--context-color-surface-disabled, #e5e5e5);
  color: var(--context-color-icon-disabled, #aaaaaa);
}

.scuba-button--outline.scuba-button--disabled,
.scuba-button--outline:disabled {
  border-color: var(--context-color-border-disabled, #e5e5e5);
  color: var(--context-color-icon-disabled, #aaaaaa);
}

.scuba-button--text.scuba-button--disabled,
.scuba-button--text:disabled {
  color: var(--context-color-icon-disabled, #aaaaaa);
}
</style>