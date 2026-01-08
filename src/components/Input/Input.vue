<template>
  <div :class="wrapperClasses">
    <label 
      v-if="label" 
      :for="inputId"
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" :class="'scuba-input__required'">*</span>
      <span v-if="optional" :class="'scuba-input__optional'">opcional</span>
      <button
        v-if="helpText"
        type="button"
        :class="'scuba-input__help-button'"
        :aria-label="helpAriaLabel"
        @click="$emit('help-click')"
      >
        <i :class="'ph ph-question'"></i>
      </button>
    </label>

    <div :class="inputContainerClasses">
      <span v-if="iconLeft" :class="iconLeftClasses">
        <i :class="'ph ' + iconLeft"></i>
      </span>

      <textarea
        v-if="type === 'textarea'"
        :id="inputId"
        v-model="internalValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :rows="rows"
        :maxlength="maxlength"
        :class="textareaClasses"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
      />
      
      <input
        v-else
        :id="inputId"
        v-model="internalValue"
        :type="inputType"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :maxlength="maxlength"
        :min="min"
        :max="max"
        :step="step"
        :class="'scuba-input__field'"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
      />

      <span v-if="iconRight || showPasswordToggle" :class="iconRightClasses">
        <button
          v-if="showPasswordToggle"
          type="button"
          :class="'scuba-input__toggle-button'"
          @click="togglePasswordVisibility"
          :aria-label="passwordToggleLabel"
        >
          <i :class="passwordToggleIcon"></i>
        </button>
        
        <i v-else-if="iconRight" :class="'ph ' + iconRight"></i>
      </span>
    </div>

    <div v-if="hint || error" :class="hintClasses">
      {{ error || hint }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  modelValue: { type: [String, Number], default: '' },
  type: {
    type: String,
    default: 'text',
    validator: (value) => [
      'text', 'password', 'email', 'number', 'tel', 'url', 
      'search', 'date', 'time', 'datetime-local', 'textarea'
    ].includes(value)
  },
  label: { type: String, default: '' },
  placeholder: { type: String, default: 'Placeholder' },
  required: { type: Boolean, default: false },
  optional: { type: Boolean, default: false },
  helpText: { type: String, default: '' },
  hint: { type: String, default: 'Hint' },
  error: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  readonly: { type: Boolean, default: false },
  iconLeft: { type: String, default: '' },
  iconRight: { type: String, default: '' },
  fullWidth: { type: Boolean, default: false },
  id: { type: String, default: null },
  rows: { type: Number, default: 4 },
  maxlength: { type: Number, default: null },
  min: { type: Number, default: null },
  max: { type: Number, default: null },
  step: { type: Number, default: null }
});

const emit = defineEmits(['update:modelValue', 'blur', 'focus', 'input', 'help-click']);

const internalValue = ref(props.modelValue);
const isFocused = ref(false);
const passwordVisible = ref(false);

const inputId = computed(() => {
  if (props.id) return props.id;
  return 'scuba-input-' + Math.random().toString(36).substr(2, 9);
});

const inputType = computed(() => {
  if (props.type === 'password' && passwordVisible.value) {
    return 'text';
  }
  return props.type;
});

const showPasswordToggle = computed(() => props.type === 'password');

const helpAriaLabel = computed(() => {
  return 'Ajuda para ' + props.label;
});

const passwordToggleLabel = computed(() => {
  if (passwordVisible.value) return 'Ocultar senha';
  return 'Mostrar senha';
});

const passwordToggleIcon = computed(() => {
  if (passwordVisible.value) return 'ph ph-eye-slash';
  return 'ph ph-eye';
});

const wrapperClasses = computed(() => {
  const classes = ['scuba-input-wrapper'];
  if (props.fullWidth) {
    classes.push('scuba-input-wrapper--full-width');
  }
  return classes;
});

const labelClasses = computed(() => {
  const classes = ['scuba-input__label'];
  if (props.disabled) {
    classes.push('scuba-input__label--disabled');
  }
  return classes;
});

const iconLeftClasses = computed(() => {
  return 'scuba-input__icon scuba-input__icon--left';
});

const iconRightClasses = computed(() => {
  return 'scuba-input__icon scuba-input__icon--right';
});

const textareaClasses = computed(() => {
  return 'scuba-input__field scuba-input__textarea';
});

const inputContainerClasses = computed(() => {
  const classes = ['scuba-input__container'];
  
  if (props.disabled) {
    classes.push('scuba-input__container--disabled');
  }
  
  if (props.error) {
    classes.push('scuba-input__container--error');
  }
  
  if (isFocused.value) {
    classes.push('scuba-input__container--focused');
  }
  
  if (props.iconLeft) {
    classes.push('scuba-input__container--with-icon-left');
  }
  
  if (props.iconRight || showPasswordToggle.value) {
    classes.push('scuba-input__container--with-icon-right');
  }
  
  return classes;
});

const hintClasses = computed(() => {
  const classes = ['scuba-input__hint'];
  if (props.error) {
    classes.push('scuba-input__hint--error');
  }
  return classes;
});

watch(() => props.modelValue, (newVal) => {
  internalValue.value = newVal;
});

watch(internalValue, (newVal) => {
  emit('update:modelValue', newVal);
});

const handleBlur = (event) => {
  isFocused.value = false;
  emit('blur', event);
};

const handleFocus = (event) => {
  isFocused.value = true;
  emit('focus', event);
};

const handleInput = (event) => {
  emit('input', event);
};

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};
</script>

<style scoped>
.scuba-input-wrapper {
  display: inline-flex;
  flex-direction: column;
  gap: var(--spacing-3xs);
  font-family: var(--type-font-family-body);
}

.scuba-input-wrapper--full-width {
  width: 100%;
}

.scuba-input__label {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

.scuba-input__label--disabled {
  color: var(--context-color-text-disabled);
}

.scuba-input__required {
  color: var(--semantic-color-error-normal);
}

.scuba-input__optional {
  font-weight: var(--type-font-weight-regular);
  color: var(--context-color-text-secondary);
}

.scuba-input__help-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--scale-400);
  height: var(--scale-400);
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--border-radius-rounded-full);
  color: var(--context-color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-base);
  font-size: var(--type-font-size-base);
}

.scuba-input__help-button:hover {
  color: var(--context-color-text-primary);
  background: var(--context-color-surface-action);
}

.scuba-input__container {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-2xs);
  padding: 0 var(--spacing-xs);
  background: var(--context-color-surface-action);
  border: var(--border-width-border-md) solid transparent;
  border-radius: var(--border-radius-rounded);
  transition: all var(--transition-base);
  min-height: var(--scale-800);
}

.scuba-input__container:hover:not(.scuba-input__container--disabled) {
  border-color: var(--context-color-border-action-hover);
}

.scuba-input__container--focused {
  border-color: var(--context-color-border-focus);
  box-shadow: 0 0 0 3px var(--context-color-surface-focus-light);
}

.scuba-input__container--error {
  border-color: var(--context-color-border-error);
}

.scuba-input__container--disabled {
  background: var(--context-color-surface-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}

.scuba-input__field {
  flex: 1;
  width: 100%;
  padding: var(--spacing-2xs) 0;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-base);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

.scuba-input__field::placeholder {
  color: var(--context-color-text-secondary);
  opacity: 0.6;
}

.scuba-input__field:disabled {
  cursor: not-allowed;
  color: var(--context-color-text-disabled);
}

.scuba-input__textarea {
  resize: vertical;
  min-height: 100px;
  padding: var(--spacing-2xs) 0;
}

.scuba-input__container:has(.scuba-input__textarea) {
  align-items: flex-start;
  min-height: auto;
  padding-top: var(--spacing-2xs);
  padding-bottom: var(--spacing-2xs);
}

.scuba-input__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--type-font-size-xl);
  color: var(--context-color-icon-secondary);
  flex-shrink: 0;
}

.scuba-input__container--disabled .scuba-input__icon {
  color: var(--context-color-icon-disabled);
}

.scuba-input__container--error .scuba-input__icon {
  color: var(--context-color-icon-error);
}

.scuba-input__toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4xs);
  background: transparent;
  border: none;
  border-radius: var(--border-radius-rounded-sm);
  color: var(--context-color-icon-secondary);
  cursor: pointer;
  transition: all var(--transition-base);
  font-size: var(--type-font-size-xl);
}

.scuba-input__toggle-button:hover {
  color: var(--context-color-icon-primary);
  background: var(--context-color-surface-secondary);
}

.scuba-input__hint {
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-secondary);
}

.scuba-input__hint--error {
  color: var(--context-color-text-error);
}

.scuba-input__field[type="number"]::-webkit-inner-spin-button,
.scuba-input__field[type="number"]::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.scuba-input__field[type="number"] {
  -moz-appearance: textfield;
}
</style>