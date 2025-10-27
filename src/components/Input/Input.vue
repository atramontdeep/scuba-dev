<template>
  <div :class="['scuba-input-wrapper', { 'scuba-input-wrapper--full-width': fullWidth }]">
    <!-- Label -->
    <label 
      v-if="label" 
      :for="inputId"
      :class="['scuba-input__label', { 'scuba-input__label--disabled': disabled }]"
    >
      {{ label }}
      <span v-if="required" class="scuba-input__required">*</span>
      <span v-if="optional" class="scuba-input__optional">opcional</span>
      <button
        v-if="helpText"
        type="button"
        class="scuba-input__help-button"
        :aria-label="'Ajuda para ' + label"
        @click="$emit('help-click')"
      >
        <i class="ph ph-question"></i>
      </button>
    </label>

    <!-- Input Container -->
    <div :class="inputContainerClasses">
      <!-- Icon Left -->
      <span v-if="iconLeft" class="scuba-input__icon scuba-input__icon--left">
        <i :class="'ph ' + iconLeft"></i>
      </span>

      <!-- Input or Textarea -->
      <textarea
        v-if="type === 'textarea'"
        :id="inputId"
        v-model="internalValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :readonly="readonly"
        :rows="rows"
        :maxlength="maxlength"
        class="scuba-input__field scuba-input__textarea"
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
        class="scuba-input__field"
        @blur="handleBlur"
        @focus="handleFocus"
        @input="handleInput"
      />

      <!-- Icon Right / Action -->
      <span v-if="iconRight || showPasswordToggle" class="scuba-input__icon scuba-input__icon--right">
        <!-- Password Toggle -->
        <button
          v-if="showPasswordToggle"
          type="button"
          class="scuba-input__toggle-button"
          @click="togglePasswordVisibility"
          :aria-label="passwordVisible ? 'Ocultar senha' : 'Mostrar senha'"
        >
          <i :class="passwordVisible ? 'ph ph-eye-slash' : 'ph ph-eye'"></i>
        </button>
        
        <!-- Regular Icon -->
        <i v-else-if="iconRight" :class="'ph ' + iconRight"></i>
      </span>
    </div>

    <!-- Hint Text -->
    <div v-if="hint || error" :class="hintClasses">
      {{ error || hint }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number],
    default: ''
  },
  type: {
    type: String,
    default: 'text',
    validator: (value) => [
      'text', 'password', 'email', 'number', 'tel', 'url', 
      'search', 'date', 'time', 'datetime-local', 'textarea'
    ].includes(value)
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Placeholder'
  },
  required: {
    type: Boolean,
    default: false
  },
  optional: {
    type: Boolean,
    default: false
  },
  helpText: {
    type: String,
    default: ''
  },
  hint: {
    type: String,
    default: 'Hint'
  },
  error: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  readonly: {
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
  id: {
    type: String,
    default: null
  },
  rows: {
    type: Number,
    default: 4
  },
  maxlength: {
    type: Number,
    default: null
  },
  min: {
    type: Number,
    default: null
  },
  max: {
    type: Number,
    default: null
  },
  step: {
    type: Number,
    default: null
  }
});

const emit = defineEmits(['update:modelValue', 'blur', 'focus', 'input', 'help-click']);

const internalValue = ref(props.modelValue);
const isFocused = ref(false);
const passwordVisible = ref(false);

const inputId = computed(() => props.id || `scuba-input-${Math.random().toString(36).substr(2, 9)}`);

const inputType = computed(() => {
  if (props.type === 'password' && passwordVisible.value) {
    return 'text';
  }
  return props.type;
});

const showPasswordToggle = computed(() => props.type === 'password');

const inputContainerClasses = computed(() => [
  'scuba-input__container',
  {
    'scuba-input__container--disabled': props.disabled,
    'scuba-input__container--error': props.error,
    'scuba-input__container--focused': isFocused.value,
    'scuba-input__container--with-icon-left': props.iconLeft,
    'scuba-input__container--with-icon-right': props.iconRight || showPasswordToggle.value
  }
]);

const hintClasses = computed(() => [
  'scuba-input__hint',
  {
    'scuba-input__hint--error': props.error
  }
]);

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
  gap: var(--spacing-3xs, 8px);
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
}

.scuba-input-wrapper--full-width {
  width: 100%;
}

.scuba-input__label {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs, 8px);
  font-size: var(--type-font-size-body-md, 16px);
  font-weight: var(--type-font-weight-semibold, 600);
  line-height: var(--type-line-height-body-md, 24px);
  color: var(--context-color-text-primary, #191919);
}

.scuba-input__label--disabled {
  color: var(--context-color-icon-disabled, #aaaaaa);
}

.scuba-input__required {
  color: var(--semantic-color-error-dark, #ea2255);
}

.scuba-input__optional {
  font-weight: var(--type-font-weight-regular, 400);
  color: var(--context-color-text-secondary, #555555);
}

.scuba-input__help-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 20px;
  height: 20px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: var(--context-color-icon-secondary, #555555);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
}

.scuba-input__help-button:hover {
  color: var(--context-color-icon-primary, #2a2a2a);
  background: var(--context-color-surface-action, #eeeeee);
}

.scuba-input__container {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-2xs, 12px);
  padding: 0 var(--spacing-xs, 16px);
  background: var(--context-color-surface-action, #eeeeee);
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 0.2s ease;
  min-height: 48px;
}

.scuba-input__container:hover:not(.scuba-input__container--disabled) {
  border-color: var(--context-color-border-action-hover, #0086cd);
}

.scuba-input__container--focused {
  border-color: var(--context-color-border-focus, #0086cd);
  outline: 2px solid rgba(0, 134, 205, 0.2);
  outline-offset: 0;
}

.scuba-input__container--error {
  border-color: var(--context-color-border-error, #ea2255);
}

.scuba-input__container--disabled {
  background: var(--context-color-surface-disabled, #e5e5e5);
  cursor: not-allowed;
  opacity: 0.6;
}

.scuba-input__field {
  flex: 1;
  width: 100%;
  padding: var(--spacing-2xs, 12px) 0;
  background: transparent;
  border: none;
  outline: none;
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
  font-size: var(--type-font-size-body-md, 16px);
  line-height: var(--type-line-height-body-md, 24px);
  color: var(--context-color-text-primary, #191919);
}

.scuba-input__field::placeholder {
  color: var(--context-color-text-secondary, #555555);
  opacity: 0.6;
}

.scuba-input__field:disabled {
  cursor: not-allowed;
  color: var(--context-color-icon-disabled, #aaaaaa);
}

.scuba-input__textarea {
  resize: vertical;
  min-height: 100px;
  padding: var(--spacing-2xs, 12px) 0;
}

.scuba-input__container:has(.scuba-input__textarea) {
  align-items: flex-start;
  min-height: auto;
  padding-top: var(--spacing-2xs, 12px);
  padding-bottom: var(--spacing-2xs, 12px);
}

.scuba-input__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: var(--context-color-icon-secondary, #555555);
  flex-shrink: 0;
}

.scuba-input__container--disabled .scuba-input__icon {
  color: var(--context-color-icon-disabled, #aaaaaa);
}

.scuba-input__container--error .scuba-input__icon {
  color: var(--context-color-icon-error, #ea2255);
}

.scuba-input__toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: var(--context-color-icon-secondary, #555555);
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 20px;
}

.scuba-input__toggle-button:hover {
  color: var(--context-color-icon-primary, #2a2a2a);
  background: var(--context-color-surface-secondary, #f6f6f6);
}

.scuba-input__hint {
  font-size: var(--type-font-size-body-sm, 14px);
  line-height: var(--type-line-height-body-sm, 20px);
  color: var(--context-color-text-secondary, #555555);
}

.scuba-input__hint--error {
  color: var(--context-color-text-error, #ea2255);
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