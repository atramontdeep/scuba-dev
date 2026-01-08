<template>
  <label :class="radioWrapperClasses">
    <span v-if="showLabelLeft" :class="labelLeftClasses">
      {{ label }}
    </span>

    <div class="scuba-radio__container">
      <input
        :id="inputId"
        v-model="internalValue"
        type="radio"
        :value="value"
        :name="name"
        :disabled="disabled"
        class="scuba-radio__input"
        @change="handleChange"
      />

      <div :class="radioCircleClasses">
        <div v-if="isChecked" class="scuba-radio__dot"></div>
      </div>
    </div>

    <span v-if="showLabelRight" :class="labelRightClasses">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  modelValue: { type: [String, Number, Boolean], default: null },
  value: { type: [String, Number, Boolean], required: true },
  label: { type: String, default: '' },
  name: { type: String, required: true },
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
  id: { type: String, default: null }
});

const emit = defineEmits(['update:modelValue', 'change']);

const internalValue = ref(props.modelValue);

const inputId = computed(() => {
  if (props.id) return props.id;
  return 'scuba-radio-' + Math.random().toString(36).substr(2, 9);
});

const isChecked = computed(() => internalValue.value === props.value);
const showLabelLeft = computed(() => props.label && props.labelPosition === 'left');
const showLabelRight = computed(() => props.label && props.labelPosition === 'right');

const labelLeftClasses = computed(() => {
  return 'scuba-radio__label scuba-radio__label--left';
});

const labelRightClasses = computed(() => {
  return 'scuba-radio__label scuba-radio__label--right';
});

const radioWrapperClasses = computed(() => {
  const classes = ['scuba-radio'];
  classes.push('scuba-radio--' + props.size);

  if (props.disabled) {
    classes.push('scuba-radio--disabled');
  }

  if (!props.label) {
    classes.push('scuba-radio--no-label');
  }

  return classes;
});

const radioCircleClasses = computed(() => {
  const classes = ['scuba-radio__circle'];

  if (isChecked.value) {
    classes.push('scuba-radio__circle--checked');
  }

  if (props.disabled) {
    classes.push('scuba-radio__circle--disabled');
  }

  if (!isChecked.value) {
    classes.push('scuba-radio__circle--unchecked');
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
.scuba-radio {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2xs);
  cursor: pointer;
  font-family: var(--type-font-family-body);
  user-select: none;
}

.scuba-radio--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.scuba-radio--no-label { gap: 0; }

.scuba-radio__container {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
}

.scuba-radio__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.scuba-radio__circle {
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--border-width-border-md) solid var(--context-color-border-action);
  border-radius: var(--border-radius-rounded-full);
  background: transparent;
  transition: all var(--transition-base);
  position: relative;
}

.scuba-radio--sm .scuba-radio__circle {
  width: var(--scale-300);
  height: var(--scale-300);
}

.scuba-radio--md .scuba-radio__circle {
  width: var(--scale-400);
  height: var(--scale-400);
}

.scuba-radio--lg .scuba-radio__circle {
  width: var(--scale-500);
  height: var(--scale-500);
}

.scuba-radio__dot {
  width: 50%;
  height: 50%;
  border-radius: var(--border-radius-rounded-full);
  background: var(--primitives-color-white);
  transition: all var(--transition-base);
}

.scuba-radio__circle--unchecked {
  border-color: var(--context-color-border-action);
  background: transparent;
}

.scuba-radio:hover:not(.scuba-radio--disabled) .scuba-radio__circle--unchecked {
  border-color: var(--context-color-border-action-hover);
}

.scuba-radio__circle--checked {
  background: var(--semantic-color-primary-600);
  border-color: var(--semantic-color-primary-600);
}

.scuba-radio:hover:not(.scuba-radio--disabled) .scuba-radio__circle--checked {
  background: var(--semantic-color-primary-700);
  border-color: var(--semantic-color-primary-700);
}

.scuba-radio__input:focus-visible + .scuba-radio__circle {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}

.scuba-radio__circle--disabled {
  border-color: var(--context-color-border-disabled);
  background: var(--context-color-surface-disabled);
  cursor: not-allowed;
}

.scuba-radio--disabled .scuba-radio__circle--checked {
  background: var(--context-color-surface-disabled);
  border-color: var(--context-color-border-disabled);
}

.scuba-radio--disabled .scuba-radio__dot {
  background: var(--context-color-text-disabled);
}

.scuba-radio__label {
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

.scuba-radio--sm .scuba-radio__label {
  font-size: var(--type-font-size-sm);
}

.scuba-radio--lg .scuba-radio__label {
  font-size: var(--type-font-size-lg);
}

.scuba-radio--disabled .scuba-radio__label {
  color: var(--context-color-text-disabled);
}

.scuba-radio__label--left { order: -1; }
.scuba-radio__label--right { order: 1; }
</style>
