<template>
  <div :class="wrapperClasses" ref="inputWrapperRef">
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
        @mouseenter="showTooltip = true"
        @mouseleave="showTooltip = false"
        @focus="showTooltip = true"
        @blur="showTooltip = false"
      >
        <i :class="'ph ph-question'"></i>
        <span v-if="showTooltip" :class="'scuba-input__tooltip'">{{ helpText }}</span>
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
        @click="type === 'date' ? handleDateInputClick() : type === 'time' ? handleTimeInputClick() : null"
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

    <!-- Date Picker -->
    <div v-if="showDatePicker && type === 'date'" class="scuba-input__picker scuba-input__date-picker">
      <div class="scuba-input__date-picker-header">
        <button type="button" @click="previousMonth" class="scuba-input__date-picker-nav">
          <i class="ph ph-caret-left"></i>
        </button>
        <span class="scuba-input__date-picker-title">
          {{ monthNames[currentMonth] }} {{ currentYear }}
        </span>
        <button type="button" @click="nextMonth" class="scuba-input__date-picker-nav">
          <i class="ph ph-caret-right"></i>
        </button>
      </div>
      <div class="scuba-input__date-picker-weekdays">
        <div v-for="day in weekDays" :key="day" class="scuba-input__date-picker-weekday">
          {{ day }}
        </div>
      </div>
      <div class="scuba-input__date-picker-days">
        <button
          v-for="(day, index) in calendarDays"
          :key="index"
          type="button"
          :class="['scuba-input__date-picker-day', { 'scuba-input__date-picker-day--empty': !day }]"
          @click="selectDate(day)"
          :disabled="!day"
        >
          {{ day || '' }}
        </button>
      </div>
    </div>

    <!-- Time Picker -->
    <div v-if="showTimePicker && type === 'time'" class="scuba-input__picker scuba-input__time-picker">
      <div class="scuba-input__time-picker-columns">
        <div class="scuba-input__time-picker-column">
          <div class="scuba-input__time-picker-header">Hora</div>
          <div class="scuba-input__time-picker-list">
            <button
              v-for="hour in hours"
              :key="hour"
              type="button"
              class="scuba-input__time-picker-item"
              @click="selectTime(hour, selectedTime?.minute || 0)"
            >
              {{ String(hour).padStart(2, '0') }}
            </button>
          </div>
        </div>
        <div class="scuba-input__time-picker-column">
          <div class="scuba-input__time-picker-header">Minuto</div>
          <div class="scuba-input__time-picker-list">
            <button
              v-for="minute in minutes"
              :key="minute"
              type="button"
              class="scuba-input__time-picker-item"
              @click="selectTime(selectedTime?.hour || 0, minute)"
            >
              {{ String(minute).padStart(2, '0') }}
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

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

const inputWrapperRef = ref(null);
const internalValue = ref(props.modelValue);
const isFocused = ref(false);
const passwordVisible = ref(false);
const showTooltip = ref(false);
const showDatePicker = ref(false);
const showTimePicker = ref(false);
const selectedDate = ref(null);
const selectedTime = ref(null);
const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

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
  // Aplica máscara de telefone brasileiro se type="tel"
  if (props.type === 'tel') {
    let value = event.target.value.replace(/\D/g, '');

    // Limita a 11 dígitos (celular com DDD)
    if (value.length > 11) {
      value = value.slice(0, 11);
    }

    // Aplica a máscara
    if (value.length <= 10) {
      // Formato fixo: (XX) XXXX-XXXX
      value = value.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, '($1) $2-$3');
    } else {
      // Formato celular: (XX) XXXXX-XXXX
      value = value.replace(/^(\d{2})(\d{5})(\d{0,4}).*/, '($1) $2-$3');
    }

    // Remove traços finais vazios
    value = value.replace(/-$/, '');

    internalValue.value = value;
    event.target.value = value;
  }

  emit('input', event);
};

const togglePasswordVisibility = () => {
  passwordVisible.value = !passwordVisible.value;
};

// Date picker utilities
const monthNames = [
  'Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho',
  'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'
];

const weekDays = ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];

const getDaysInMonth = (month, year) => {
  return new Date(year, month + 1, 0).getDate();
};

const getFirstDayOfMonth = (month, year) => {
  return new Date(year, month, 1).getDay();
};

const calendarDays = computed(() => {
  const daysInMonth = getDaysInMonth(currentMonth.value, currentYear.value);
  const firstDay = getFirstDayOfMonth(currentMonth.value, currentYear.value);
  const days = [];

  // Empty cells before first day
  for (let i = 0; i < firstDay; i++) {
    days.push(null);
  }

  // Days of month
  for (let i = 1; i <= daysInMonth; i++) {
    days.push(i);
  }

  return days;
});

const handleDateInputClick = () => {
  if (props.type === 'date' && !props.disabled && !props.readonly) {
    showDatePicker.value = !showDatePicker.value;
    showTimePicker.value = false;
  }
};

const handleTimeInputClick = () => {
  if (props.type === 'time' && !props.disabled && !props.readonly) {
    showTimePicker.value = !showTimePicker.value;
    showDatePicker.value = false;
  }
};

const selectDate = (day) => {
  if (!day) return;

  const date = new Date(currentYear.value, currentMonth.value, day);
  const formattedDate = date.toISOString().split('T')[0];
  internalValue.value = formattedDate;
  selectedDate.value = date;
  showDatePicker.value = false;
};

const previousMonth = () => {
  if (currentMonth.value === 0) {
    currentMonth.value = 11;
    currentYear.value--;
  } else {
    currentMonth.value--;
  }
};

const nextMonth = () => {
  if (currentMonth.value === 11) {
    currentMonth.value = 0;
    currentYear.value++;
  } else {
    currentMonth.value++;
  }
};

const selectTime = (hour, minute) => {
  const formattedTime = `${String(hour).padStart(2, '0')}:${String(minute).padStart(2, '0')}`;
  internalValue.value = formattedTime;
  selectedTime.value = { hour, minute };
  showTimePicker.value = false;
};

const hours = Array.from({ length: 24 }, (_, i) => i);
const minutes = Array.from({ length: 60 }, (_, i) => i);

// Close pickers when clicking outside
const handleClickOutside = (event) => {
  if (inputWrapperRef.value && !inputWrapperRef.value.contains(event.target)) {
    showDatePicker.value = false;
    showTimePicker.value = false;
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
});
</script>

<style scoped>
.scuba-input-wrapper {
  position: relative;
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
  position: relative;
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

.scuba-input__tooltip {
  position: absolute;
  bottom: calc(100% + 8px);
  left: 50%;
  transform: translateX(-50%);
  padding: 8px 12px;
  background: var(--context-color-surface-inverted);
  color: var(--primitives-color-white);
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: 1.4;
  border-radius: var(--border-radius-rounded-sm);
  white-space: nowrap;
  z-index: 1000;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  pointer-events: none;
}

.scuba-input__tooltip::after {
  content: '';
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  border: 4px solid transparent;
  border-top-color: var(--context-color-surface-inverted);
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

/* Custom Pickers */
.scuba-input__picker {
  position: absolute;
  top: calc(100% + 4px);
  left: 0;
  z-index: 1000;
  background: var(--context-color-surface-primary);
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-md);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: var(--spacing-2xs);
  font-family: var(--type-font-family-body);
}

/* Date Picker */
.scuba-input__date-picker {
  width: 280px;
}

.scuba-input__date-picker-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-2xs);
  margin-bottom: var(--spacing-2xs);
}

.scuba-input__date-picker-title {
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
}

.scuba-input__date-picker-nav {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--border-radius-rounded-sm);
  color: var(--context-color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-base);
  font-size: var(--type-font-size-lg);
}

.scuba-input__date-picker-nav:hover {
  background: var(--context-color-surface-secondary);
  color: var(--context-color-text-primary);
}

.scuba-input__date-picker-weekdays {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
  margin-bottom: var(--spacing-3xs);
}

.scuba-input__date-picker-weekday {
  text-align: center;
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-secondary);
  padding: var(--spacing-3xs);
}

.scuba-input__date-picker-days {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: 2px;
}

.scuba-input__date-picker-day {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 36px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--border-radius-rounded-sm);
  color: var(--context-color-text-primary);
  font-size: var(--type-font-size-sm);
  cursor: pointer;
  transition: all var(--transition-base);
}

.scuba-input__date-picker-day:hover:not(:disabled):not(.scuba-input__date-picker-day--empty) {
  background: var(--context-color-surface-secondary);
}

.scuba-input__date-picker-day--empty {
  cursor: default;
  visibility: hidden;
}

/* Time Picker */
.scuba-input__time-picker {
  width: 200px;
}

.scuba-input__time-picker-columns {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: var(--spacing-2xs);
}

.scuba-input__time-picker-column {
  display: flex;
  flex-direction: column;
}

.scuba-input__time-picker-header {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
  padding: var(--spacing-2xs);
  text-align: center;
  border-bottom: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  margin-bottom: var(--spacing-3xs);
}

.scuba-input__time-picker-list {
  display: flex;
  flex-direction: column;
  max-height: 200px;
  overflow-y: auto;
  gap: 2px;
}

.scuba-input__time-picker-list::-webkit-scrollbar {
  width: 6px;
}

.scuba-input__time-picker-list::-webkit-scrollbar-track {
  background: transparent;
}

.scuba-input__time-picker-list::-webkit-scrollbar-thumb {
  background: var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-full);
}

.scuba-input__time-picker-list::-webkit-scrollbar-thumb:hover {
  background: var(--context-color-border-primary);
}

.scuba-input__time-picker-item {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-2xs);
  background: transparent;
  border: none;
  border-radius: var(--border-radius-rounded-sm);
  color: var(--context-color-text-primary);
  font-size: var(--type-font-size-sm);
  cursor: pointer;
  transition: all var(--transition-base);
}

.scuba-input__time-picker-item:hover {
  background: var(--context-color-surface-secondary);
}
</style>