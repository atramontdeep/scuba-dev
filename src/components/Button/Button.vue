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
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => ['solid', 'outline', 'text'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  label: {
    type: String,
    default: 'Button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  iconLeft: {
    type: String,
    default: ''
  },
  iconRight: {
    type: String,
    default: ''
  },
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
.scuba-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-3xs, 8px);
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
  font-size: var(--type-font-size-body-md, 16px);
  font-weight: var(--type-font-weight-semibold, 600);
  line-height: var(--type-line-height-body-md, 24px);
  padding: var(--spacing-2xs, 12px) var(--spacing-md, 24px);
  border: 2px solid transparent;
  border-radius: var(--border-radius-md, 8px);
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  background: none;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
}

.scuba-button:focus-visible {
  outline: 2px solid var(--semantic-color-primary-default, #0086cd);
  outline-offset: 2px;
}

.scuba-button--full-width {
  width: 100%;
}

.scuba-button__icon-left,
.scuba-button__icon-right {
  display: inline-flex;
  align-items: center;
  font-size: 1.2em;
}

.scuba-button--sm {
  height: 32px;
  padding: 0 var(--spacing-xs, 16px);
  font-size: var(--type-font-size-body-sm, 14px);
  line-height: var(--type-line-height-body-sm, 20px);
  gap: var(--spacing-4xs, 6px);
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

.scuba-button--solid {
  background: var(--context-color-border-primary, #191919);
  color: var(--primitives-color-white, #ffffff);
  border-color: transparent;
}

.scuba-button--solid:hover:not(:disabled) {
  background: var(--context-color-surface-action-hover, #c2eaff);
  color: var(--context-color-text-focus, #0942a1);
}

.scuba-button--solid:active:not(:disabled) {
  background: var(--context-color-surface-action-hover, #c2eaff);
  color: var(--context-color-text-focus, #0942a1);
}

.scuba-button--solid:focus-visible {
  box-shadow: 0 0 0 3px var(--context-color-surface-focus-light, rgba(0, 134, 205, 0.3));
}

.scuba-button--outline {
  background: transparent;
  color: var(--context-color-text-primary, #2a2a2a);
  border-color: var(--semantic-color-border-primary, #2a2a2a);
}

.scuba-button--outline:hover:not(:disabled) {
  background:  var(--context-color-surface-action-hover, #c2eaff);
  border-color: transparent;
  color: var(--context-color-text-focus, #0942a1);
}

.scuba-button--outline:active:not(:disabled) {
  background:  var(--context-color-surface-action-hover, #c2eaff);
  border-color: var(--semantic-color-primary-dark, #0942a1);
}

.scuba-button--outline:focus-visible {
  border-color: var(--context-color-border-focus, #70cdff);
  box-shadow: 0 0 0 3px var(--context-color-surface-focus-light, rgba(0, 134, 205, 0.2));
}

.scuba-button--text {
  background: transparent;
  color: var(--context-color-text-primary, #2a2a2a);
  border-color: transparent;
  padding: var(--spacing-3xs, 8px) var(--spacing-2xs, 12px);
}

.scuba-button--text:hover:not(:disabled) {
  background:  var(--context-color-surface-action-hover, #c2eaff);
  color: var(--context-color-text-focus, #0942a1);
}

.scuba-button--text:active:not(:disabled) {
  background:  var(--context-color-surface-action-hover, #c2eaff);
}

.scuba-button--text:focus-visible {
  box-shadow: 0 0 0 3px var(--context-color-surface-focus-light, rgba(0, 134, 205, 0.2));
}

.scuba-button--disabled,
.scuba-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.scuba-button--solid.scuba-button--disabled,
.scuba-button--solid:disabled {
  background: var(--context-color-surface-disabled, #e5e5e5);
  color: var(--context-color-text-disabled, #aaaaaa);
}

.scuba-button--outline.scuba-button--disabled,
.scuba-button--outline:disabled {
  border-color: var(--context-color-border-disabled, #e5e5e5);
  color: var(--context-color-text-disabled, #aaaaaa);
}

.scuba-button--text.scuba-button--disabled,
.scuba-button--text:disabled {
  color: var(--context-color-text-disabled, #aaaaaa);
}
</style>
