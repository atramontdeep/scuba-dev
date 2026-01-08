<template>
  <div class="scuba-combobox" ref="comboboxRef">
    <label
      v-if="label"
      :for="comboboxId"
      class="scuba-combobox__label"
    >
      {{ label }}
      <span v-if="required" class="scuba-combobox__required">*</span>
    </label>

    <div
      :class="containerClasses"
      @click="!searchable && !disabled && toggleDropdown()"
    >
      <!-- Selected tags for multiple selection -->
      <div v-if="multiple && selectedOptions.length > 0" class="scuba-combobox__tags">
        <span
          v-for="option in selectedOptions"
          :key="option.value"
          class="scuba-combobox__tag"
        >
          <span class="scuba-combobox__tag-label">{{ option.label }}</span>
          <PhX
            v-if="!disabled"
            :size="14"
            weight="bold"
            class="scuba-combobox__tag-remove"
            @click.stop="removeOption(option)"
          />
        </span>
      </div>

      <!-- Search input or display value -->
      <input
        ref="inputRef"
        :id="comboboxId"
        type="text"
        :class="inputClasses"
        :value="inputValue"
        :placeholder="effectivePlaceholder"
        :disabled="disabled"
        :readonly="!searchable"
        @input="handleInput"
        @focus="handleFocus"
        @blur="handleBlur"
        @keydown.down.prevent="navigateOptions(1)"
        @keydown.up.prevent="navigateOptions(-1)"
        @keydown.enter.prevent="handleEnter"
        @keydown.escape="closeDropdown"
        @keydown.backspace="handleBackspace"
        role="combobox"
        :aria-expanded="isOpen"
        :aria-controls="dropdownId"
        :aria-autocomplete="searchable ? 'list' : 'none'"
      />

      <!-- Icons -->
      <div class="scuba-combobox__icons">
        <PhX
          v-if="showClearButton"
          :size="iconSize"
          weight="regular"
          class="scuba-combobox__icon scuba-combobox__icon--clear"
          @click.stop="clearSelection"
        />
        <PhMagnifyingGlass
          v-if="searchable && !isOpen"
          :size="iconSize"
          weight="regular"
          class="scuba-combobox__icon"
        />
        <PhCaretDown
          v-else
          :size="iconSize"
          weight="regular"
          :class="chevronClasses"
        />
      </div>
    </div>

    <!-- Dropdown -->
    <Transition name="scuba-combobox-dropdown">
      <div
        v-if="isOpen"
        :id="dropdownId"
        class="scuba-combobox__dropdown"
        role="listbox"
        :aria-multiselectable="multiple"
      >
        <div
          v-for="(option, index) in filteredOptions"
          :key="option.value"
          :class="getOptionClasses(option, index)"
          @click="selectOption(option)"
          @mouseenter="highlightedIndex = index"
          role="option"
          :aria-selected="isSelected(option)"
        >
          <PhCheck
            v-if="multiple && isSelected(option)"
            :size="20"
            weight="bold"
            class="scuba-combobox__option-check"
          />
          <component
            v-if="option.icon"
            :is="option.icon"
            :size="20"
            weight="regular"
            class="scuba-combobox__option-icon"
          />
          <span class="scuba-combobox__option-text">{{ option.label }}</span>
          <span v-if="option.description" class="scuba-combobox__option-description">
            {{ option.description }}
          </span>
        </div>

        <!-- Create new option -->
        <div
          v-if="creatable && searchQuery && !exactMatch"
          class="scuba-combobox__option scuba-combobox__option--create"
          @click="createOption"
        >
          <PhPlus :size="20" weight="bold" class="scuba-combobox__option-icon" />
          <span class="scuba-combobox__option-text">Create "{{ searchQuery }}"</span>
        </div>

        <!-- Empty state -->
        <div v-if="filteredOptions.length === 0 && !creatable" class="scuba-combobox__empty">
          {{ emptyMessage }}
        </div>
      </div>
    </Transition>

    <!-- Hint or error message -->
    <div v-if="hint || error" :class="hintClasses">
      {{ error || hint }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';
import { PhX, PhMagnifyingGlass, PhCaretDown, PhCheck, PhPlus } from '@phosphor-icons/vue';

const props = defineProps({
  modelValue: {
    type: [String, Number, Array, null],
    default: null
  },
  options: {
    type: Array,
    default: () => [],
    // Expected: [{ value, label, icon?, description?, disabled? }]
  },
  label: {
    type: String,
    default: ''
  },
  placeholder: {
    type: String,
    default: 'Select or search...'
  },
  required: {
    type: Boolean,
    default: false
  },
  hint: {
    type: String,
    default: ''
  },
  error: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  searchable: {
    type: Boolean,
    default: true
  },
  multiple: {
    type: Boolean,
    default: false
  },
  creatable: {
    type: Boolean,
    default: false
  },
  clearable: {
    type: Boolean,
    default: true
  },
  emptyMessage: {
    type: String,
    default: 'No options found'
  },
  id: {
    type: String,
    default: null
  }
});

const emit = defineEmits(['update:modelValue', 'change', 'create', 'search', 'open', 'close']);

const comboboxRef = ref(null);
const inputRef = ref(null);
const isOpen = ref(false);
const isFocused = ref(false);
const searchQuery = ref('');
const highlightedIndex = ref(-1);

const comboboxId = computed(() => {
  return props.id || 'scuba-combobox-' + Math.random().toString(36).substr(2, 9);
});

const dropdownId = computed(() => comboboxId.value + '-dropdown');

const iconSize = computed(() => {
  const sizes = { sm: 16, md: 20, lg: 24 };
  return sizes[props.size];
});

const selectedOptions = computed(() => {
  if (!props.multiple) {
    const option = props.options.find(opt => opt.value === props.modelValue);
    return option ? [option] : [];
  }

  if (!Array.isArray(props.modelValue)) return [];

  return props.modelValue
    .map(val => props.options.find(opt => opt.value === val))
    .filter(Boolean);
});

const inputValue = computed(() => {
  if (props.searchable && (isOpen.value || isFocused.value)) {
    return searchQuery.value;
  }

  if (!props.multiple && selectedOptions.value.length > 0) {
    return selectedOptions.value[0].label;
  }

  return '';
});

const effectivePlaceholder = computed(() => {
  if (props.multiple && selectedOptions.value.length > 0) {
    return '';
  }
  return props.placeholder;
});

const filteredOptions = computed(() => {
  if (!searchQuery.value) return props.options;

  const query = searchQuery.value.toLowerCase();
  return props.options.filter(option =>
    option.label.toLowerCase().includes(query) ||
    option.description?.toLowerCase().includes(query)
  );
});

const exactMatch = computed(() => {
  return filteredOptions.value.some(
    opt => opt.label.toLowerCase() === searchQuery.value.toLowerCase()
  );
});

const showClearButton = computed(() => {
  return props.clearable &&
         !props.disabled &&
         selectedOptions.value.length > 0 &&
         (!props.searchable || !isOpen.value);
});

const containerClasses = computed(() => {
  return [
    'scuba-combobox__container',
    `scuba-combobox__container--${props.size}`,
    {
      'scuba-combobox__container--focused': isFocused.value || isOpen.value,
      'scuba-combobox__container--error': props.error,
      'scuba-combobox__container--disabled': props.disabled,
      'scuba-combobox__container--multiple': props.multiple
    }
  ];
});

const inputClasses = computed(() => {
  return [
    'scuba-combobox__input',
    {
      'scuba-combobox__input--with-tags': props.multiple && selectedOptions.value.length > 0
    }
  ];
});

const chevronClasses = computed(() => {
  return [
    'scuba-combobox__icon',
    'scuba-combobox__icon--chevron',
    {
      'scuba-combobox__icon--chevron-open': isOpen.value
    }
  ];
});

const hintClasses = computed(() => {
  return [
    'scuba-combobox__hint',
    { 'scuba-combobox__hint--error': props.error }
  ];
});

const isSelected = (option) => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(option.value);
  }
  return props.modelValue === option.value;
};

const getOptionClasses = (option, index) => {
  return [
    'scuba-combobox__option',
    {
      'scuba-combobox__option--selected': isSelected(option),
      'scuba-combobox__option--highlighted': index === highlightedIndex.value,
      'scuba-combobox__option--disabled': option.disabled
    }
  ];
};

const toggleDropdown = () => {
  if (isOpen.value) {
    closeDropdown();
  } else {
    openDropdown();
  }
};

const openDropdown = () => {
  if (props.disabled) return;
  isOpen.value = true;
  emit('open');
  if (props.searchable) {
    inputRef.value?.focus();
  }
};

const closeDropdown = () => {
  isOpen.value = false;
  highlightedIndex.value = -1;
  searchQuery.value = '';
  emit('close');
};

const handleInput = (event) => {
  searchQuery.value = event.target.value;
  emit('search', searchQuery.value);

  if (!isOpen.value) {
    openDropdown();
  }
};

const handleFocus = () => {
  isFocused.value = true;
  if (props.searchable) {
    openDropdown();
  }
};

const handleBlur = () => {
  isFocused.value = false;
  // Delay to allow click on option
  setTimeout(() => {
    if (!isOpen.value) {
      searchQuery.value = '';
    }
  }, 200);
};

const handleBackspace = () => {
  if (props.multiple && !searchQuery.value && selectedOptions.value.length > 0) {
    removeOption(selectedOptions.value[selectedOptions.value.length - 1]);
  }
};

const handleEnter = () => {
  if (!isOpen.value) {
    openDropdown();
    return;
  }

  if (highlightedIndex.value >= 0 && highlightedIndex.value < filteredOptions.value.length) {
    selectOption(filteredOptions.value[highlightedIndex.value]);
  } else if (props.creatable && searchQuery.value && !exactMatch.value) {
    createOption();
  }
};

const selectOption = (option) => {
  if (option.disabled || props.disabled) return;

  if (props.multiple) {
    const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    const index = currentValue.indexOf(option.value);

    if (index > -1) {
      currentValue.splice(index, 1);
    } else {
      currentValue.push(option.value);
    }

    emit('update:modelValue', currentValue);
    emit('change', currentValue);
    searchQuery.value = '';
  } else {
    emit('update:modelValue', option.value);
    emit('change', option);
    closeDropdown();
  }
};

const removeOption = (option) => {
  if (!props.multiple) return;

  const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
  const index = currentValue.indexOf(option.value);

  if (index > -1) {
    currentValue.splice(index, 1);
    emit('update:modelValue', currentValue);
    emit('change', currentValue);
  }
};

const clearSelection = () => {
  emit('update:modelValue', props.multiple ? [] : null);
  emit('change', props.multiple ? [] : null);
  searchQuery.value = '';
};

const createOption = () => {
  const newOption = {
    value: searchQuery.value.toLowerCase().replace(/\s+/g, '-'),
    label: searchQuery.value
  };

  emit('create', newOption);

  if (props.multiple) {
    const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    currentValue.push(newOption.value);
    emit('update:modelValue', currentValue);
  } else {
    emit('update:modelValue', newOption.value);
  }

  searchQuery.value = '';
  if (!props.multiple) {
    closeDropdown();
  }
};

const navigateOptions = (direction) => {
  if (!isOpen.value) {
    openDropdown();
    return;
  }

  if (filteredOptions.value.length === 0) return;

  let newIndex = highlightedIndex.value + direction;

  if (newIndex < 0) {
    newIndex = filteredOptions.value.length - 1;
  } else if (newIndex >= filteredOptions.value.length) {
    newIndex = 0;
  }

  // Skip disabled options
  while (filteredOptions.value[newIndex]?.disabled) {
    newIndex += direction;
    if (newIndex < 0) newIndex = filteredOptions.value.length - 1;
    if (newIndex >= filteredOptions.value.length) newIndex = 0;
  }

  highlightedIndex.value = newIndex;
};

const handleClickOutside = (event) => {
  if (comboboxRef.value && !comboboxRef.value.contains(event.target)) {
    closeDropdown();
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
.scuba-combobox {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xs);
  font-family: var(--type-font-family-body);
  width: 100%;
}

.scuba-combobox__label {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
}

.scuba-combobox__required {
  color: var(--color-red-500);
}

.scuba-combobox__container {
  position: relative;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-2xs);
  background: var(--context-color-surface-primary);
  border: var(--border-width-border-sm) solid var(--context-color-border-primary);
  border-radius: var(--border-radius-rounded-sm);
  transition: all 0.2s ease;
  cursor: text;
}

.scuba-combobox__container:hover:not(.scuba-combobox__container--disabled) {
  border-color: var(--color-primary-500);
}

.scuba-combobox__container--focused {
  border-color: var(--color-primary-500);
  box-shadow: 0 0 0 2px #BFDBFE;
}

.scuba-combobox__container--error {
  border-color: var(--color-red-500);
}

.scuba-combobox__container--error.scuba-combobox__container--focused {
  box-shadow: 0 0 0 2px var(--color-red-100);
}

.scuba-combobox__container--disabled {
  background: var(--context-color-surface-secondary);
  border-color: var(--context-color-border-secondary);
  cursor: not-allowed;
  opacity: 0.6;
}

/* Sizes */
.scuba-combobox__container--sm {
  padding: var(--spacing-2xs) var(--spacing-sm);
  min-height: 32px;
}

.scuba-combobox__container--md {
  padding: var(--spacing-xs) var(--spacing-md);
  min-height: 40px;
}

.scuba-combobox__container--lg {
  padding: var(--spacing-sm) var(--spacing-md);
  min-height: 48px;
}

.scuba-combobox__container--multiple {
  min-height: auto;
}

/* Tags */
.scuba-combobox__tags {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-2xs);
  flex: 1;
}

.scuba-combobox__tag {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2xs);
  padding: 2px var(--spacing-2xs);
  background: var(--color-primary-100);
  color: var(--color-primary-700);
  border-radius: var(--border-radius-rounded-sm);
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-medium);
}

.scuba-combobox__tag-label {
  line-height: 1.2;
}

.scuba-combobox__tag-remove {
  cursor: pointer;
  flex-shrink: 0;
  transition: opacity 0.2s ease;
}

.scuba-combobox__tag-remove:hover {
  opacity: 0.7;
}

/* Input */
.scuba-combobox__input {
  flex: 1;
  min-width: 120px;
  border: none;
  outline: none;
  background: transparent;
  font-family: var(--type-font-family-body);
  color: var(--context-color-text-primary);
}

.scuba-combobox__container--sm .scuba-combobox__input {
  font-size: var(--type-font-size-sm);
}

.scuba-combobox__container--md .scuba-combobox__input {
  font-size: var(--type-font-size-base);
}

.scuba-combobox__container--lg .scuba-combobox__input {
  font-size: var(--type-font-size-lg);
}

.scuba-combobox__input::placeholder {
  color: var(--context-color-text-tertiary);
}

.scuba-combobox__input:disabled {
  cursor: not-allowed;
}

.scuba-combobox__input--with-tags {
  min-width: 80px;
}

/* Icons */
.scuba-combobox__icons {
  display: flex;
  align-items: center;
  gap: var(--spacing-2xs);
  flex-shrink: 0;
}

.scuba-combobox__icon {
  color: var(--context-color-text-secondary);
  flex-shrink: 0;
  transition: transform 0.2s ease;
}

.scuba-combobox__icon--clear {
  cursor: pointer;
}

.scuba-combobox__icon--clear:hover {
  color: var(--context-color-text-primary);
}

.scuba-combobox__icon--chevron-open {
  transform: rotate(180deg);
}

/* Dropdown */
.scuba-combobox__dropdown {
  position: absolute;
  top: calc(100% + var(--spacing-2xs));
  left: 0;
  right: 0;
  z-index: 1000;
  max-height: 300px;
  overflow-y: auto;
  background: var(--context-color-surface-primary);
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-md);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: var(--spacing-2xs);
}

.scuba-combobox__option {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-rounded-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--context-color-text-primary);
  font-size: var(--type-font-size-sm);
  user-select: none;
}

.scuba-combobox__option:hover:not(.scuba-combobox__option--disabled) {
  background: var(--context-color-surface-secondary);
}

.scuba-combobox__option--highlighted {
  background: var(--context-color-surface-secondary);
}

.scuba-combobox__option--selected {
  color: var(--color-primary-600);
  font-weight: var(--type-font-weight-semibold);
}

.scuba-combobox__option--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.scuba-combobox__option--create {
  color: var(--color-primary-600);
  font-weight: var(--type-font-weight-medium);
  border-top: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  margin-top: var(--spacing-2xs);
  padding-top: var(--spacing-xs);
}

.scuba-combobox__option-check {
  flex-shrink: 0;
  color: var(--color-primary-500);
}

.scuba-combobox__option-icon {
  flex-shrink: 0;
  color: var(--context-color-text-secondary);
}

.scuba-combobox__option-text {
  flex: 1;
}

.scuba-combobox__option-description {
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-tertiary);
  margin-left: auto;
}

.scuba-combobox__empty {
  padding: var(--spacing-md);
  text-align: center;
  color: var(--context-color-text-tertiary);
  font-size: var(--type-font-size-sm);
}

.scuba-combobox__hint {
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-secondary);
}

.scuba-combobox__hint--error {
  color: var(--color-red-600);
}

/* Transitions */
.scuba-combobox-dropdown-enter-active,
.scuba-combobox-dropdown-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.scuba-combobox-dropdown-enter-from,
.scuba-combobox-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.scuba-combobox-dropdown-enter-to,
.scuba-combobox-dropdown-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
