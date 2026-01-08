<template>
  <label :class="checkboxWrapperClasses">
    <span v-if="showLabelLeft" :class="labelLeftClasses">
      {{ label }}
    </span>

    <div class="scuba-checkbox__container">
      <input
        :id="inputId"
        v-model="internalValue"
        type="checkbox"
        :disabled="disabled"
        :indeterminate.prop="isIndeterminate"
        class="scuba-checkbox__input"
        @change="handleChange"
      />
      
      <div :class="checkboxBoxClasses">
        <i v-if="showCheckIcon" :class="checkIconClasses"></i>
        <i v-if="isIndeterminate" :class="minusIconClasses"></i>
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
  indeterminate: { type: Boolean, default: false },
  disabled: { type: Boolean, default: false },
  id: { type: String, default: null }
});

const emit = defineEmits(['update:modelValue', 'change']);

const internalValue = ref(props.modelValue);

const inputId = computed(() => {
  if (props.id) return props.id;
  return 'scuba-checkbox-' + Math.random().toString(36).substr(2, 9);
});

const isChecked = computed(() => internalValue.value === true);
const isIndeterminate = computed(() => props.indeterminate);
const showLabelLeft = computed(() => props.label && props.labelPosition === 'left');
const showLabelRight = computed(() => props.label && props.labelPosition === 'right');
const showCheckIcon = computed(() => isChecked.value && !isIndeterminate.value);

const labelLeftClasses = computed(() => {
  return 'scuba-checkbox__label scuba-checkbox__label--left';
});

const labelRightClasses = computed(() => {
  return 'scuba-checkbox__label scuba-checkbox__label--right';
});

const checkIconClasses = computed(() => {
  return 'ph ph-check scuba-checkbox__icon';
});

const minusIconClasses = computed(() => {
  return 'ph ph-minus scuba-checkbox__icon';
});

const checkboxWrapperClasses = computed(() => {
  const classes = ['scuba-checkbox'];
  classes.push('scuba-checkbox--' + props.size);
  
  if (props.disabled) {
    classes.push('scuba-checkbox--disabled');
  }
  
  if (!props.label) {
    classes.push('scuba-checkbox--no-label');
  }
  
  return classes;
});

const checkboxBoxClasses = computed(() => {
  const classes = ['scuba-checkbox__box'];
  
  if (isChecked.value && !isIndeterminate.value) {
    classes.push('scuba-checkbox__box--checked');
  }
  
  if (isIndeterminate.value) {
    classes.push('scuba-checkbox__box--indeterminate');
  }
  
  if (props.disabled) {
    classes.push('scuba-checkbox__box--disabled');
  }
  
  if (!isChecked.value && !isIndeterminate.value) {
    classes.push('scuba-checkbox__box--unchecked');
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
.scuba-checkbox {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2xs, 12px);
  cursor: pointer;
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
  user-select: none;
}

.scuba-checkbox--disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.scuba-checkbox--no-label { gap: 0; }

.scuba-checkbox__container {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
}

.scuba-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

.scuba-checkbox__box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: var(--border-width-border-md) solid var(--context-color-border-action);
  border-radius: var(--border-radius-rounded-sm);
  background: transparent;
  transition: all var(--transition-base);
  position: relative;
}

.scuba-checkbox--sm .scuba-checkbox__box {
  width: var(--scale-300);
  height: var(--scale-300);
}

.scuba-checkbox--md .scuba-checkbox__box {
  width: var(--scale-400);
  height: var(--scale-400);
}

.scuba-checkbox--lg .scuba-checkbox__box {
  width: var(--scale-500);
  height: var(--scale-500);
}

.scuba-checkbox__icon {
  color: var(--primitives-color-white);
  font-size: var(--type-font-size-sm);
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scuba-checkbox--sm .scuba-checkbox__icon { font-size: var(--type-font-size-xs); }
.scuba-checkbox--md .scuba-checkbox__icon { font-size: var(--type-font-size-sm); }
.scuba-checkbox--lg .scuba-checkbox__icon { font-size: var(--type-font-size-base); }

.scuba-checkbox__box--unchecked {
  border-color: var(--context-color-border-action);
  background: transparent;
}

.scuba-checkbox:hover:not(.scuba-checkbox--disabled) .scuba-checkbox__box--unchecked {
  border-color: var(--context-color-border-action-hover);
}

.scuba-checkbox__box--checked {
  background: var(--semantic-color-primary-600);
  border-color: var(--semantic-color-primary-600);
}

.scuba-checkbox:hover:not(.scuba-checkbox--disabled) .scuba-checkbox__box--checked {
  background: var(--semantic-color-primary-700);
  border-color: var(--semantic-color-primary-700);
}

.scuba-checkbox__box--indeterminate {
  background: var(--semantic-color-primary-500);
  border-color: var(--semantic-color-primary-500);
}

.scuba-checkbox:hover:not(.scuba-checkbox--disabled) .scuba-checkbox__box--indeterminate {
  background: var(--semantic-color-primary-600);
  border-color: var(--semantic-color-primary-600);
}

.scuba-checkbox__input:focus-visible + .scuba-checkbox__box {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}

.scuba-checkbox__box--disabled {
  border-color: var(--context-color-border-disabled);
  background: var(--context-color-surface-disabled);
  cursor: not-allowed;
}

.scuba-checkbox--disabled .scuba-checkbox__box--checked,
.scuba-checkbox--disabled .scuba-checkbox__box--indeterminate {
  background: var(--context-color-surface-disabled);
  border-color: var(--context-color-border-disabled);
}

.scuba-checkbox--disabled .scuba-checkbox__icon {
  color: var(--context-color-text-disabled);
}

.scuba-checkbox__label {
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

.scuba-checkbox--sm .scuba-checkbox__label {
  font-size: var(--type-font-size-sm);
}

.scuba-checkbox--lg .scuba-checkbox__label {
  font-size: var(--type-font-size-lg);
}

.scuba-checkbox--disabled .scuba-checkbox__label {
  color: var(--context-color-text-disabled);
}

.scuba-checkbox__label--left { order: -1; }
.scuba-checkbox__label--right { order: 1; }
</style>