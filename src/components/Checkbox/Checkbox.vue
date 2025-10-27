<template>
  <label :class="checkboxWrapperClasses">
    <!-- Label Left -->
    <span v-if="label && labelPosition === 'left'" class="scuba-checkbox__label scuba-checkbox__label--left">
      {{ label }}
    </span>

    <!-- Checkbox Container -->
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
        <!-- Check Icon -->
        <i v-if="isChecked && !isIndeterminate" class="ph ph-check scuba-checkbox__icon"></i>
        
        <!-- Indeterminate Icon -->
        <i v-if="isIndeterminate" class="ph ph-minus scuba-checkbox__icon"></i>
      </div>
    </div>

    <!-- Label Right -->
    <span v-if="label && labelPosition === 'right'" class="scuba-checkbox__label scuba-checkbox__label--right">
      {{ label }}
    </span>
  </label>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  /**
   * Valor do checkbox (v-model)
   */
  modelValue: {
    type: Boolean,
    default: false
  },
  
  /**
   * Label do checkbox
   */
  label: {
    type: String,
    default: ''
  },
  
  /**
   * Posição do label
   */
  labelPosition: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right', 'none'].includes(value)
  },
  
  /**
   * Tamanho do checkbox
   */
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  
  /**
   * Estado indeterminado (hífen)
   */
  indeterminate: {
    type: Boolean,
    default: false
  },
  
  /**
   * Estado desabilitado
   */
  disabled: {
    type: Boolean,
    default: false
  },
  
  /**
   * ID do input
   */
  id: {
    type: String,
    default: null
  }
});

const emit = defineEmits(['update:modelValue', 'change']);

const internalValue = ref(props.modelValue);

const inputId = computed(() => props.id || `scuba-checkbox-${Math.random().toString(36).substr(2, 9)}`);

const isChecked = computed(() => internalValue.value === true);

const isIndeterminate = computed(() => props.indeterminate);

const checkboxWrapperClasses = computed(() => [
  'scuba-checkbox',
  `scuba-checkbox--${props.size}`,
  {
    'scuba-checkbox--disabled': props.disabled,
    'scuba-checkbox--no-label': !props.label
  }
]);

const checkboxBoxClasses = computed(() => [
  'scuba-checkbox__box',
  {
    'scuba-checkbox__box--checked': isChecked.value && !isIndeterminate.value,
    'scuba-checkbox__box--indeterminate': isIndeterminate.value,
    'scuba-checkbox__box--disabled': props.disabled,
    'scuba-checkbox__box--unchecked': !isChecked.value && !isIndeterminate.value
  }
]);

watch(() => props.modelValue, (newVal) => {
  internalValue.value = newVal;
});

watch(internalValue, (newVal) => {
  emit('update:modelValue', newVal);
});

const handleChange = (event) => {
  emit('change', event);
};
</script>

<style scoped>
/* Wrapper */
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

.scuba-checkbox--no-label {
  gap: 0;
}

/* Container */
.scuba-checkbox__container {
  position: relative;
  display: inline-flex;
  flex-shrink: 0;
}

/* Hidden Input */
.scuba-checkbox__input {
  position: absolute;
  opacity: 0;
  width: 0;
  height: 0;
  pointer-events: none;
}

/* Checkbox Box */
.scuba-checkbox__box {
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid var(--context-color-border-action, #555555);
  border-radius: 4px;
  background: transparent;
  transition: all 0.2s ease;
  position: relative;
}

/* Sizes */
.scuba-checkbox--sm .scuba-checkbox__box {
  width: 16px;
  height: 16px;
}

.scuba-checkbox--md .scuba-checkbox__box {
  width: 20px;
  height: 20px;
}

.scuba-checkbox--lg .scuba-checkbox__box {
  width: 24px;
  height: 24px;
}

/* Icon */
.scuba-checkbox__icon {
  color: #ffffff;
  font-size: 14px;
  line-height: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}

.scuba-checkbox--sm .scuba-checkbox__icon {
  font-size: 10px;
}

.scuba-checkbox--md .scuba-checkbox__icon {
  font-size: 14px;
}

.scuba-checkbox--lg .scuba-checkbox__icon {
  font-size: 16px;
}

/* Unchecked State */
.scuba-checkbox__box--unchecked {
  border-color: var(--context-color-border-action, #555555);
  background: transparent;
}

.scuba-checkbox:hover:not(.scuba-checkbox--disabled) .scuba-checkbox__box--unchecked {
  border-color: var(--context-color-border-action-hover, #0086cd);
}

/* Checked State */
.scuba-checkbox__box--checked {
  background: var(--context-color-surface-focus-dark, #0942a1);
  border-color: var(--context-color-surface-focus-dark, #0942a1);
}

.scuba-checkbox:hover:not(.scuba-checkbox--disabled) .scuba-checkbox__box--checked {
  background: #06327a;
  border-color: #06327a;
}

/* Indeterminate State */
.scuba-checkbox__box--indeterminate {
  background: var(--semantic-color-primary-500, #0086cd);
  border-color: var(--semantic-color-primary-500, #0086cd);
}

.scuba-checkbox:hover:not(.scuba-checkbox--disabled) .scuba-checkbox__box--indeterminate {
  background: #0942a1;
  border-color: #0942a1;
}

/* Focus State */
.scuba-checkbox__input:focus-visible + .scuba-checkbox__box {
  outline: 3px solid rgba(0, 134, 205, 0.3);
  outline-offset: 2px;
}

/* Disabled State */
.scuba-checkbox__box--disabled {
  border-color: var(--context-color-border-disabled, #e5e5e5);
  background: var(--context-color-surface-disabled, #e5e5e5);
  cursor: not-allowed;
}

.scuba-checkbox--disabled .scuba-checkbox__box--checked,
.scuba-checkbox--disabled .scuba-checkbox__box--indeterminate {
  background: var(--context-color-surface-disabled, #e5e5e5);
  border-color: var(--context-color-border-disabled, #e5e5e5);
}

.scuba-checkbox--disabled .scuba-checkbox__icon {
  color: var(--context-color-icon-disabled, #aaaaaa);
}

/* Label */
.scuba-checkbox__label {
  font-size: var(--type-font-size-body-md, 16px);
  font-weight: var(--type-font-weight-regular, 400);
  line-height: var(--type-line-height-body-md, 24px);
  color: var(--context-color-text-primary, #191919);
}

.scuba-checkbox--sm .scuba-checkbox__label {
  font-size: var(--type-font-size-body-sm, 14px);
  line-height: var(--type-line-height-body-sm, 20px);
}

.scuba-checkbox--lg .scuba-checkbox__label {
  font-size: var(--type-font-size-body-lg, 18px);
  line-height: var(--type-line-height-body-lg, 32px);
}

.scuba-checkbox--disabled .scuba-checkbox__label {
  color: var(--context-color-icon-disabled, #aaaaaa);
}

/* Label Positions */
.scuba-checkbox__label--left {
  order: -1;
}

.scuba-checkbox__label--right {
  order: 1;
}
</style>