<template>
  <div :class="toggleGroupClasses" role="group">
    <button
      v-for="option in options"
      :key="option.value"
      :class="getButtonClasses(option.value)"
      :aria-pressed="isSelected(option.value)"
      @click="handleToggle(option.value)"
      :disabled="disabled"
    >
      <component
        v-if="option.icon"
        :is="option.icon"
        :size="iconSize"
        :weight="iconWeight"
        class="scuba-button-toggle__icon"
      />
      <span v-if="option.label" class="scuba-button-toggle__label">
        {{ option.label }}
      </span>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    default: null
  },
  options: {
    type: Array,
    required: true,
    // Expected format: [{ value: 'left', label: 'Left', icon: AlignLeft }]
  },
  multiple: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'outlined'].includes(value)
  },
  iconWeight: {
    type: String,
    default: 'regular',
    validator: (value) => ['thin', 'light', 'regular', 'bold', 'fill'].includes(value)
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);

const toggleGroupClasses = computed(() => {
  return [
    'scuba-button-toggle',
    `scuba-button-toggle--${props.size}`,
    `scuba-button-toggle--${props.variant}`
  ];
});

const iconSize = computed(() => {
  const sizes = {
    sm: 16,
    md: 20,
    lg: 24
  };
  return sizes[props.size];
});

const isSelected = (value) => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(value);
  }
  return props.modelValue === value;
};

const getButtonClasses = (value) => {
  return [
    'scuba-button-toggle__button',
    {
      'scuba-button-toggle__button--selected': isSelected(value)
    }
  ];
};

const handleToggle = (value) => {
  if (props.disabled) return;

  if (props.multiple) {
    const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    const index = currentValue.indexOf(value);

    if (index > -1) {
      currentValue.splice(index, 1);
    } else {
      currentValue.push(value);
    }

    emit('update:modelValue', currentValue);
  } else {
    // Single selection - toggle off if already selected
    emit('update:modelValue', props.modelValue === value ? null : value);
  }
};
</script>

<style scoped>
.scuba-button-toggle {
  display: inline-flex;
  border-radius: var(--border-radius-rounded-sm);
  font-family: var(--type-font-family-body);
  overflow: hidden;
}

.scuba-button-toggle--default {
  background: var(--context-color-surface-secondary);
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-button-toggle--outlined {
  gap: var(--spacing-2xs);
}

.scuba-button-toggle__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2xs);
  border: none;
  background: transparent;
  cursor: pointer;
  transition: all 0.2s ease;
  font-family: var(--type-font-family-body);
  font-weight: var(--type-font-weight-medium);
  color: var(--context-color-text-secondary);
  flex-shrink: 0;
  position: relative;
}

.scuba-button-toggle--default .scuba-button-toggle__button {
  border-right: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-button-toggle--default .scuba-button-toggle__button:last-child {
  border-right: none;
}

.scuba-button-toggle--outlined .scuba-button-toggle__button {
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-sm);
  background: var(--context-color-surface-primary);
}

.scuba-button-toggle__button:hover:not(:disabled):not(.scuba-button-toggle__button--selected) {
  background: var(--context-color-surface-tertiary);
  color: var(--context-color-text-primary);
}

.scuba-button-toggle__button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.scuba-button-toggle__button--selected {
  background: var(--color-primary-500);
  color: var(--color-white);
}

.scuba-button-toggle--outlined .scuba-button-toggle__button--selected {
  border-color: var(--color-primary-500);
}

.scuba-button-toggle__button:focus {
  outline: none;
  z-index: 1;
  box-shadow: 0 0 0 2px #BFDBFE;
}

/* Sizes */
.scuba-button-toggle--sm .scuba-button-toggle__button {
  padding: var(--spacing-2xs) var(--spacing-sm);
  font-size: var(--type-font-size-sm);
  min-height: 32px;
}

.scuba-button-toggle--md .scuba-button-toggle__button {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--type-font-size-base);
  min-height: 40px;
}

.scuba-button-toggle--lg .scuba-button-toggle__button {
  padding: var(--spacing-sm) var(--spacing-lg);
  font-size: var(--type-font-size-lg);
  min-height: 48px;
}

.scuba-button-toggle__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.scuba-button-toggle__label {
  white-space: nowrap;
}
</style>
