<template>
  <label :class="toggleWrapperClasses">
    <span v-if="showLabelLeft" :class="labelClasses">
      {{ label }}
    </span>

    <div class="scuba-toggle__container">
      <input
        :id="inputId"
        v-model="internalValue"
        type="checkbox"
        :disabled="disabled"
        class="scuba-toggle__input"
        :aria-label="ariaLabel"
        @change="handleChange"
      />

      <div :class="toggleTrackClasses">
        <div :class="toggleThumbClasses"></div>
      </div>
    </div>

    <span v-if="showLabelRight" :class="labelClasses">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  label: { type: String, default: '' },
  labelPosition: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right', 'none'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  disabled: { type: Boolean, default: false },
  id: { type: String, default: null },
  ariaLabel: { type: String, default: '' }
});

const emit = defineEmits(['update:modelValue', 'change']);

const internalValue = ref(props.modelValue);

const inputId = computed(() => {
  if (props.id) return props.id;
  return 'scuba-toggle-' + Math.random().toString(36).substr(2, 9);
});

const isChecked = computed(() => internalValue.value === true);
const showLabelLeft = computed(() => props.label && props.labelPosition === 'left');
const showLabelRight = computed(() => props.label && props.labelPosition === 'right');

const labelClasses = computed(() => {
  return 'scuba-toggle__label';
});

const toggleWrapperClasses = computed(() => {
  const classes = ['scuba-toggle'];
  classes.push('scuba-toggle--' + props.size);

  if (props.disabled) {
    classes.push('scuba-toggle--disabled');
  }

  if (!props.label) {
    classes.push('scuba-toggle--no-label');
  }

  return classes;
});

const toggleTrackClasses = computed(() => {
  const classes = ['scuba-toggle__track'];

  if (isChecked.value) {
    classes.push('scuba-toggle__track--checked');
  } else {
    classes.push('scuba-toggle__track--unchecked');
  }

  if (props.disabled) {
    classes.push('scuba-toggle__track--disabled');
  }

  return classes;
});

const toggleThumbClasses = computed(() => {
  const classes = ['scuba-toggle__thumb'];

  if (isChecked.value) {
    classes.push('scuba-toggle__thumb--checked');
  }

  return classes;
});

watch(() => props.modelValue, (val) => {
  internalValue.value = val;
});

watch(internalValue, (val) => {
  emit('update:modelValue', val);
});

const handleChange = (event) => {
  emit('change', event);
};
</script>

<style scoped>
.scuba-toggle {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2xs);
  cursor: pointer;
  font-family: var(--type-font-family-body);
  user-select: none;
}

.scuba-toggle--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.scuba-toggle--no-label { gap: 0; }

.scuba-toggle__container {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
}

.scuba-toggle__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.scuba-toggle__track {
  position: relative;
  display: flex;
  align-items: center;
  border-radius: var(--border-radius-rounded-pill);
  transition: all var(--transition-base);
  border: var(--border-width-border-md) solid transparent;
}

.scuba-toggle--sm .scuba-toggle__track {
  width: var(--scale-700);
  height: var(--scale-500);
  padding: var(--scale-50);
}

.scuba-toggle--md .scuba-toggle__track {
  width: var(--scale-800);
  height: var(--scale-600);
  padding: var(--scale-50);
}

.scuba-toggle--lg .scuba-toggle__track {
  width: var(--scale-1000);
  height: var(--scale-800);
  padding: var(--scale-100);
}

.scuba-toggle__track--unchecked {
  background: var(--context-color-surface-action);
  border-color: var(--context-color-border-action);
}

.scuba-toggle:hover:not(.scuba-toggle--disabled) .scuba-toggle__track--unchecked {
  background: var(--context-color-surface-action-hover);
  border-color: var(--context-color-border-action-hover);
}

.scuba-toggle__track--checked {
  background: var(--semantic-color-primary-600);
  border-color: var(--semantic-color-primary-600);
}

.scuba-toggle:hover:not(.scuba-toggle--disabled) .scuba-toggle__track--checked {
  background: var(--semantic-color-primary-700);
  border-color: var(--semantic-color-primary-700);
}

.scuba-toggle__track--disabled {
  background: var(--context-color-surface-disabled);
  border-color: var(--context-color-border-disabled);
  cursor: not-allowed;
}

.scuba-toggle__thumb {
  width: 50%;
  aspect-ratio: 1;
  background: var(--primitives-color-white);
  border-radius: var(--border-radius-rounded-full);
  transition: all var(--transition-base);
  box-shadow: var(--shadow-sm);
}

.scuba-toggle__thumb--checked {
  transform: translateX(100%);
}

.scuba-toggle__input:focus-visible + .scuba-toggle__track {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}

.scuba-toggle--disabled .scuba-toggle__thumb {
  background: var(--context-color-text-disabled);
}

.scuba-toggle__label {
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

.scuba-toggle--sm .scuba-toggle__label {
  font-size: var(--type-font-size-sm);
}

.scuba-toggle--lg .scuba-toggle__label {
  font-size: var(--type-font-size-lg);
}

.scuba-toggle--disabled .scuba-toggle__label {
  color: var(--context-color-text-disabled);
}
</style>
