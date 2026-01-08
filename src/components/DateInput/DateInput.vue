<template>
  <div class="scuba-date-input" ref="dateInputRef">
    <div :class="inputContainerClasses" @click="toggleCalendar">
      <PhCalendarBlank
        :size="iconSize"
        weight="regular"
        class="scuba-date-input__icon"
      />
      <input
        ref="inputRef"
        type="text"
        :value="displayValue"
        :placeholder="placeholder"
        :disabled="disabled"
        :class="inputClasses"
        @focus="handleFocus"
        @blur="handleBlur"
        readonly
      />
      <PhX
        v-if="modelValue && !disabled && clearable"
        :size="iconSize"
        weight="regular"
        class="scuba-date-input__clear"
        @click.stop="clearDate"
      />
    </div>

    <Transition name="scuba-date-calendar-fade">
      <div
        v-if="isCalendarOpen"
        class="scuba-date-input__calendar"
        @click.stop
      >
        <div class="scuba-date-input__calendar-header">
          <button
            class="scuba-date-input__nav-button"
            @click="previousMonth"
            aria-label="Previous month"
          >
            <PhCaretLeft :size="20" weight="regular" />
          </button>
          <div class="scuba-date-input__month-year">
            {{ monthYearDisplay }}
          </div>
          <button
            class="scuba-date-input__nav-button"
            @click="nextMonth"
            aria-label="Next month"
          >
            <PhCaretRight :size="20" weight="regular" />
          </button>
        </div>

        <div class="scuba-date-input__calendar-grid">
          <div
            v-for="day in weekDays"
            :key="day"
            class="scuba-date-input__weekday"
          >
            {{ day }}
          </div>
          <div
            v-for="(date, index) in calendarDays"
            :key="index"
            :class="getDayClasses(date)"
            @click="selectDate(date)"
          >
            {{ date ? date.getDate() : '' }}
          </div>
        </div>

        <div v-if="showToday" class="scuba-date-input__calendar-footer">
          <button
            class="scuba-date-input__today-button"
            @click="selectToday"
          >
            Today
          </button>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { PhCalendarBlank, PhX, PhCaretLeft, PhCaretRight } from '@phosphor-icons/vue';

const props = defineProps({
  modelValue: {
    type: [Date, String, null],
    default: null
  },
  placeholder: {
    type: String,
    default: 'Select date'
  },
  format: {
    type: String,
    default: 'MM/DD/YYYY'
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
  error: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: true
  },
  showToday: {
    type: Boolean,
    default: true
  },
  minDate: {
    type: Date,
    default: null
  },
  maxDate: {
    type: Date,
    default: null
  }
});

const emit = defineEmits(['update:modelValue', 'focus', 'blur', 'change']);

const dateInputRef = ref(null);
const inputRef = ref(null);
const isCalendarOpen = ref(false);
const isFocused = ref(false);
const currentMonth = ref(new Date().getMonth());
const currentYear = ref(new Date().getFullYear());

const weekDays = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];
const monthNames = [
  'January', 'February', 'March', 'April', 'May', 'June',
  'July', 'August', 'September', 'October', 'November', 'December'
];

const iconSize = computed(() => {
  const sizes = { sm: 16, md: 20, lg: 24 };
  return sizes[props.size];
});

const inputContainerClasses = computed(() => {
  return [
    'scuba-date-input__container',
    `scuba-date-input__container--${props.size}`,
    {
      'scuba-date-input__container--focused': isFocused.value,
      'scuba-date-input__container--error': props.error,
      'scuba-date-input__container--disabled': props.disabled
    }
  ];
});

const inputClasses = computed(() => {
  return ['scuba-date-input__input'];
});

const displayValue = computed(() => {
  if (!props.modelValue) return '';

  const date = typeof props.modelValue === 'string'
    ? new Date(props.modelValue)
    : props.modelValue;

  return formatDate(date, props.format);
});

const monthYearDisplay = computed(() => {
  return `${monthNames[currentMonth.value]} ${currentYear.value}`;
});

const calendarDays = computed(() => {
  const firstDay = new Date(currentYear.value, currentMonth.value, 1);
  const lastDay = new Date(currentYear.value, currentMonth.value + 1, 0);
  const prevLastDay = new Date(currentYear.value, currentMonth.value, 0);

  const firstDayWeek = firstDay.getDay();
  const lastDate = lastDay.getDate();
  const prevLastDate = prevLastDay.getDate();

  const days = [];

  // Previous month days
  for (let i = firstDayWeek; i > 0; i--) {
    const date = new Date(currentYear.value, currentMonth.value - 1, prevLastDate - i + 1);
    days.push(date);
  }

  // Current month days
  for (let i = 1; i <= lastDate; i++) {
    const date = new Date(currentYear.value, currentMonth.value, i);
    days.push(date);
  }

  // Next month days to fill grid
  const remainingDays = 42 - days.length; // 6 rows × 7 days
  for (let i = 1; i <= remainingDays; i++) {
    const date = new Date(currentYear.value, currentMonth.value + 1, i);
    days.push(date);
  }

  return days;
});

const formatDate = (date, format) => {
  const d = new Date(date);
  const day = String(d.getDate()).padStart(2, '0');
  const month = String(d.getMonth() + 1).padStart(2, '0');
  const year = d.getFullYear();

  return format
    .replace('DD', day)
    .replace('MM', month)
    .replace('YYYY', year);
};

const isSameDay = (date1, date2) => {
  if (!date1 || !date2) return false;
  const d1 = new Date(date1);
  const d2 = new Date(date2);
  return d1.getDate() === d2.getDate() &&
         d1.getMonth() === d2.getMonth() &&
         d1.getFullYear() === d2.getFullYear();
};

const isToday = (date) => {
  return isSameDay(date, new Date());
};

const isCurrentMonth = (date) => {
  return date.getMonth() === currentMonth.value;
};

const isDisabledDate = (date) => {
  if (props.minDate && date < props.minDate) return true;
  if (props.maxDate && date > props.maxDate) return true;
  return false;
};

const getDayClasses = (date) => {
  if (!date) return '';

  return [
    'scuba-date-input__day',
    {
      'scuba-date-input__day--today': isToday(date),
      'scuba-date-input__day--selected': isSameDay(date, props.modelValue),
      'scuba-date-input__day--other-month': !isCurrentMonth(date),
      'scuba-date-input__day--disabled': isDisabledDate(date)
    }
  ];
};

const toggleCalendar = () => {
  if (props.disabled) return;
  isCalendarOpen.value = !isCalendarOpen.value;

  if (isCalendarOpen.value && props.modelValue) {
    const date = typeof props.modelValue === 'string'
      ? new Date(props.modelValue)
      : props.modelValue;
    currentMonth.value = date.getMonth();
    currentYear.value = date.getFullYear();
  }
};

const selectDate = (date) => {
  if (isDisabledDate(date)) return;

  emit('update:modelValue', date);
  emit('change', date);
  isCalendarOpen.value = false;
};

const selectToday = () => {
  const today = new Date();
  selectDate(today);
};

const clearDate = () => {
  emit('update:modelValue', null);
  emit('change', null);
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

const handleFocus = (event) => {
  if (!props.disabled) {
    isFocused.value = true;
    emit('focus', event);
  }
};

const handleBlur = (event) => {
  isFocused.value = false;
  emit('blur', event);
};

const handleClickOutside = (event) => {
  if (dateInputRef.value && !dateInputRef.value.contains(event.target)) {
    isCalendarOpen.value = false;
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
.scuba-date-input {
  position: relative;
  display: inline-block;
  width: 100%;
  font-family: var(--type-font-family-body);
}

.scuba-date-input__container {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  background: var(--context-color-surface-primary);
  border: var(--border-width-border-sm) solid var(--context-color-border-primary);
  border-radius: var(--border-radius-rounded-sm);
  transition: all 0.2s ease;
  cursor: pointer;
}

.scuba-date-input__container:hover:not(.scuba-date-input__container--disabled) {
  border-color: var(--color-primary-500);
}

.scuba-date-input__container--focused {
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 2px #BFDBFE;
}

.scuba-date-input__container--error {
  border-color: var(--color-red-500);
}

.scuba-date-input__container--error:focus-within {
  box-shadow: 0 0 0 2px var(--color-red-100);
}

.scuba-date-input__container--disabled {
  background: var(--context-color-surface-secondary);
  border-color: var(--context-color-border-secondary);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Sizes */
.scuba-date-input__container--sm {
  padding: var(--spacing-2xs) var(--spacing-sm);
  min-height: 32px;
}

.scuba-date-input__container--md {
  padding: var(--spacing-xs) var(--spacing-md);
  min-height: 40px;
}

.scuba-date-input__container--lg {
  padding: var(--spacing-sm) var(--spacing-md);
  min-height: 48px;
}

.scuba-date-input__icon {
  flex-shrink: 0;
  color: var(--context-color-text-secondary);
}

.scuba-date-input__input {
  flex: 1;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--type-font-family-body);
  color: var(--context-color-text-primary);
  cursor: pointer;
}

.scuba-date-input__container--sm .scuba-date-input__input {
  font-size: var(--type-font-size-sm);
}

.scuba-date-input__container--md .scuba-date-input__input {
  font-size: var(--type-font-size-base);
}

.scuba-date-input__container--lg .scuba-date-input__input {
  font-size: var(--type-font-size-lg);
}

.scuba-date-input__input::placeholder {
  color: var(--context-color-text-tertiary);
}

.scuba-date-input__input:disabled {
  cursor: not-allowed;
}

.scuba-date-input__clear {
  flex-shrink: 0;
  color: var(--context-color-text-secondary);
  cursor: pointer;
  transition: color 0.2s ease;
}

.scuba-date-input__clear:hover {
  color: var(--context-color-text-primary);
}

/* Calendar */
.scuba-date-input__calendar {
  position: absolute;
  top: calc(100% + var(--spacing-xs));
  left: 0;
  z-index: 1000;
  background: var(--context-color-surface-primary);
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-md);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: var(--spacing-md);
  min-width: 280px;
}

.scuba-date-input__calendar-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: var(--spacing-md);
}

.scuba-date-input__month-year {
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
}

.scuba-date-input__nav-button {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: var(--border-radius-rounded-sm);
  color: var(--context-color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.scuba-date-input__nav-button:hover {
  background: var(--context-color-surface-secondary);
  color: var(--context-color-text-primary);
}

.scuba-date-input__calendar-grid {
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  gap: var(--spacing-2xs);
}

.scuba-date-input__weekday {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-secondary);
  padding: var(--spacing-2xs);
  text-align: center;
}

.scuba-date-input__day {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  border-radius: var(--border-radius-rounded-sm);
  font-size: var(--type-font-size-sm);
  color: var(--context-color-text-primary);
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}

.scuba-date-input__day:hover:not(.scuba-date-input__day--disabled) {
  background: var(--context-color-surface-secondary);
}

.scuba-date-input__day--today {
  font-weight: var(--type-font-weight-semibold);
  color: var(--color-primary-500);
}

.scuba-date-input__day--selected {
  background: var(--color-primary-500);
  color: var(--color-white);
  font-weight: var(--type-font-weight-semibold);
}

.scuba-date-input__day--selected:hover {
  background: var(--color-primary-600);
}

.scuba-date-input__day--other-month {
  color: var(--context-color-text-tertiary);
}

.scuba-date-input__day--disabled {
  color: var(--context-color-text-tertiary);
  cursor: not-allowed;
  opacity: 0.4;
}

.scuba-date-input__calendar-footer {
  margin-top: var(--spacing-md);
  padding-top: var(--spacing-md);
  border-top: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-date-input__today-button {
  width: 100%;
  padding: var(--spacing-xs);
  border: none;
  background: transparent;
  border-radius: var(--border-radius-rounded-sm);
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-medium);
  color: var(--color-primary-500);
  cursor: pointer;
  transition: all 0.2s ease;
}

.scuba-date-input__today-button:hover {
  background: var(--context-color-surface-secondary);
}

/* Transitions */
.scuba-date-calendar-fade-enter-active,
.scuba-date-calendar-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.scuba-date-calendar-fade-enter-from,
.scuba-date-calendar-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.scuba-date-calendar-fade-enter-to,
.scuba-date-calendar-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
