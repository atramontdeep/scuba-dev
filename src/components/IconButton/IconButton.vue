<template>
  <button :class="buttonClasses" :disabled="disabled" :aria-label="ariaLabel" @click="handleClick">
    <component v-if="icon" :is="icon" :size="iconSize" :weight="iconWeight" />
    <slot v-else />
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: [Object, Function],
    default: null
  },
  variant: {
    type: String,
    default: 'ghost',
    validator: (value) => ['primary', 'secondary', 'ghost', 'danger'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    required: true
  },
  iconWeight: {
    type: String,
    default: 'regular',
    validator: (value) => ['thin', 'light', 'regular', 'bold', 'fill'].includes(value)
  }
});

const emit = defineEmits(['click']);

const iconSize = computed(() => {
  const sizes = {
    sm: 16,
    md: 20,
    lg: 24
  };
  return sizes[props.size];
});

const buttonClasses = computed(() => {
  return [
    'scuba-icon-button',
    `scuba-icon-button--${props.variant}`,
    `scuba-icon-button--${props.size}`
  ];
});

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
.scuba-icon-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 50%;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--type-font-family-body);
  position: relative;
  flex-shrink: 0;
}

.scuba-icon-button:focus {
  outline: none;
  box-shadow: 0 0 0 2px #BFDBFE;
}

.scuba-icon-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

/* Sizes */
.scuba-icon-button--sm {
  width: 32px;
  height: 32px;
  padding: var(--spacing-2xs);
}

.scuba-icon-button--md {
  width: 40px;
  height: 40px;
  padding: var(--spacing-xs);
}

.scuba-icon-button--lg {
  width: 48px;
  height: 48px;
  padding: var(--spacing-sm);
}

/* Primary variant */
.scuba-icon-button--primary {
  background: var(--color-primary-500);
  color: var(--color-white);
}

.scuba-icon-button--primary:hover:not(:disabled) {
  background: var(--color-primary-600);
}

.scuba-icon-button--primary:active:not(:disabled) {
  background: var(--color-primary-700);
}

/* Secondary variant */
.scuba-icon-button--secondary {
  background: var(--context-color-surface-secondary);
  color: var(--context-color-text-primary);
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-icon-button--secondary:hover:not(:disabled) {
  background: var(--context-color-surface-tertiary);
  border-color: var(--color-primary-500);
}

.scuba-icon-button--secondary:active:not(:disabled) {
  background: var(--context-color-surface-tertiary);
}

/* Ghost variant */
.scuba-icon-button--ghost {
  background: transparent;
  color: var(--context-color-text-secondary);
}

.scuba-icon-button--ghost:hover:not(:disabled) {
  background: var(--context-color-surface-secondary);
  color: var(--context-color-text-primary);
}

.scuba-icon-button--ghost:active:not(:disabled) {
  background: var(--context-color-surface-tertiary);
}

/* Danger variant */
.scuba-icon-button--danger {
  background: transparent;
  color: var(--color-red-600);
}

.scuba-icon-button--danger:hover:not(:disabled) {
  background: var(--color-red-50);
  color: var(--color-red-700);
}

.scuba-icon-button--danger:active:not(:disabled) {
  background: var(--color-red-100);
}
</style>
