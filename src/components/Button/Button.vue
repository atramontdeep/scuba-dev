<template>
  <button
    :class="buttonClasses"
    :disabled="disabled"
    :aria-label="ariaLabel"
    :aria-disabled="disabled"
    :type="type"
    @click="handleClick"
  >
    <i v-if="iconLeft" :class="iconLeftClasses" aria-hidden="true"></i>

    <span v-if="label || $slots.default" class="scuba-button__label">
      <slot>{{ label }}</slot>
    </span>

    <i v-if="iconRight" :class="iconRightClasses" aria-hidden="true"></i>
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
    default: ''
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
  },
  type: {
    type: String,
    default: 'button',
    validator: (value) => ['button', 'submit', 'reset'].includes(value)
  },
  ariaLabel: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['click']);

const buttonClasses = computed(() => {
  const classes = ['scuba-button'];
  classes.push('scuba-button--' + props.variant);
  classes.push('scuba-button--' + props.size);
  
  if (props.disabled) {
    classes.push('scuba-button--disabled');
  }
  
  if (props.fullWidth) {
    classes.push('scuba-button--full-width');
  }
  
  if (props.iconLeft || props.iconRight) {
    classes.push('scuba-button--with-icon');
  }
  
  return classes;
});

const iconLeftClasses = computed(() => {
  if (!props.iconLeft) return '';
  return 'ph ' + props.iconLeft + ' scuba-button__icon-left';
});

const iconRightClasses = computed(() => {
  if (!props.iconRight) return '';
  return 'ph ' + props.iconRight + ' scuba-button__icon-right';
});

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
  gap: var(--spacing-3xs);
  font-family: var(--type-font-family-body);
  font-weight: var(--type-font-weight-semibold);
  border: var(--border-width-border-md) solid transparent;
  border-radius: var(--border-radius-rounded);
  cursor: pointer;
  user-select: none;
  transition: all var(--transition-base);
  background: none;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
  position: relative;
}

.scuba-button:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
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
  height: var(--scale-600);
  padding: 0 var(--spacing-xs);
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  gap: var(--spacing-4xs);
}

.scuba-button--md {
  height: var(--scale-700);
  padding: 0 var(--spacing-xs);
  font-size: var(--type-font-size-base);
  line-height: var(--type-line-height-normal);
}

.scuba-button--lg {
  height: var(--scale-800);
  padding: 0 var(--spacing-xs);
  font-size: var(--type-font-size-lg);
  line-height: var(--type-line-height-normal);
  gap: var(--spacing-2xs);
}

/* Solid Variant */
.scuba-button--solid {
  background: var(--context-color-surface-inverted);
  color: var(--primitives-color-white);
  border-color: transparent;
}

.scuba-button--solid:hover:not(:disabled) {
  background: var(--context-color-surface-action-hover);
  color: var(--context-color-text-action-hover);
}

.scuba-button--solid:active:not(:disabled) {
  background: var(--context-color-surface-action-hover);
  color: var(--context-color-text-action-hover);
}

.scuba-button--solid:focus-visible {
  background: var(--context-color-surface-inverted);
  outline: var(--border-width-border-md) solid var(--semantic-color-primary-default);
  outline-offset: 2px;
}

/* Outline Variant */
.scuba-button--outline {
  background: transparent;
  color: var(--context-color-text-primary);
  border-color: var(--context-color-border-action);
}

.scuba-button--outline:hover:not(:disabled) {
  background: var(--context-color-surface-action-hover);
  border-color: transparent;
  color: var(--context-color-text-action-hover);
}

.scuba-button--outline:active:not(:disabled) {
  background: var(--context-color-surface-action-hover);
  border-color: transparent;
  color: var(--context-color-text-action-hover);
}

.scuba-button--outline:focus-visible {
  background: transparent;
  border-color: var(--semantic-color-primary-default);
  outline: var(--border-width-border-md) solid var(--context-color-surface-focus-light);
  outline-offset: 0;
}

/* Text Variant */
.scuba-button--text {
  background: transparent;
  color: var(--context-color-text-primary);
  border-color: transparent;
}

.scuba-button--text:hover:not(:disabled) {
  background: var(--context-color-surface-action-hover);
  color: var(--context-color-text-action-hover);
}

.scuba-button--text:active:not(:disabled) {
  background: var(--context-color-surface-action-hover);
  color: var(--context-color-text-action-hover);
}

.scuba-button--text:focus-visible {
  background: transparent;
  outline: var(--border-width-border-md) solid var(--context-color-surface-focus-light);
  outline-offset: 0;
}

/* Disabled State */
.scuba-button--disabled,
.scuba-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
  pointer-events: none;
}

.scuba-button--solid.scuba-button--disabled,
.scuba-button--solid:disabled {
  background: var(--context-color-surface-disabled);
  color: var(--context-color-text-disabled);
}

.scuba-button--outline.scuba-button--disabled,
.scuba-button--outline:disabled {
  border-color: var(--context-color-border-disabled);
  color: var(--context-color-text-disabled);
}

.scuba-button--text.scuba-button--disabled,
.scuba-button--text:disabled {
  color: var(--context-color-text-disabled);
}
</style>  