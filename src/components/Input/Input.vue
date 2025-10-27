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
  return ['scuba-input__icon', 'scuba-input__icon--left'];
});

const iconRightClasses = computed(() => {
  return ['scuba-input__icon', 'scuba-input__icon--right'];
});

const textareaClasses = computed(() => {
  return ['scuba-input__field', 'scuba-input__textarea'];
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
  gap: 8px;
  font-family: 'Poppins', sans-serif;
}

.scuba-input-wrapper--full-width {
  width: 100%;
}

.scuba-input__label {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  color: #191919;
}

.scuba-input__label--disabled {
  color: #aaaaaa;
}

.scuba-input__required {
  color: #ea2255;
}

.scuba-input__optional {
  font-weight: 400;
  color: #555555;
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
  color: #555555;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 16px;
}

.scuba-input__help-button:hover {
  color: #2a2a2a;
  background: #eeeeee;
}

.scuba-input__container {
  position: relative;
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 16px;
  background: #eeeeee;
  border: 2px solid transparent;
  border-radius: 8px;
  transition: all 0.2s ease;
  min-height: 48px;
}

.scuba-input__container:hover:not(.scuba-input__container--disabled) {
  border-color: #0086cd;
}

.scuba-input__container--focused {
  border-color: #0086cd;
  outline: 2px solid rgba(0, 134, 205, 0.2);
  outline-offset: 0;
}

.scuba-input__container--error {
  border-color: #ea2255;
}

.scuba-input__container--disabled {
  background: #e5e5e5;
  cursor: not-allowed;
  opacity: 0.6;
}

.scuba-input__field {
  flex: 1;
  width: 100%;
  padding: 12px 0;
  background: transparent;
  border: none;
  outline: none;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  line-height: 24px;
  color: #191919;
}

.scuba-input__field::placeholder {
  color: #555555;
  opacity: 0.6;
}

.scuba-input__field:disabled {
  cursor: not-allowed;
  color: #aaaaaa;
}

.scuba-input__textarea {
  resize: vertical;
  min-height: 100px;
  padding: 12px 0;
}

.scuba-input__container:has(.scuba-input__textarea) {
  align-items: flex-start;
  min-height: auto;
  padding-top: 12px;
  padding-bottom: 12px;
}

.scuba-input__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  color: #555555;
  flex-shrink: 0;
}

.scuba-input__container--disabled .scuba-input__icon {
  color: #aaaaaa;
}

.scuba-input__container--error .scuba-input__icon {
  color: #ea2255;
}

.scuba-input__toggle-button {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4px;
  background: transparent;
  border: none;
  border-radius: 4px;
  color: #555555;
  cursor: pointer;
  transition: all 0.2s ease;
  font-size: 20px;
}

.scuba-input__toggle-button:hover {
  color: #2a2a2a;
  background: #f6f6f6;
}

.scuba-input__hint {
  font-size: 14px;
  line-height: 20px;
  color: #555555;
}

.scuba-input__hint--error {
  color: #ea2255;
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