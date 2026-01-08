<template>
  <div :class="wrapperClasses" ref="selectWrapper">
    <label
      v-if="label"
      :for="selectId"
      :class="labelClasses"
    >
      {{ label }}
      <span v-if="required" class="scuba-select__required">*</span>
    </label>

    <div
      :class="selectContainerClasses"
      @click="toggleDropdown"
      @keydown.enter.prevent="toggleDropdown"
      @keydown.space.prevent="toggleDropdown"
      @keydown.escape="closeDropdown"
      @keydown.down.prevent="navigateOptions(1)"
      @keydown.up.prevent="navigateOptions(-1)"
      tabindex="0"
      role="combobox"
      :aria-expanded="isOpen"
      :aria-haspopup="true"
      :aria-controls="dropdownId"
      :aria-label="ariaLabel"
    >
      <span v-if="iconLeft" class="scuba-select__icon scuba-select__icon--left">
        <i :class="'ph ' + iconLeft"></i>
      </span>

      <span :class="selectedTextClasses">
        {{ displayText }}
      </span>

      <span class="scuba-select__icon scuba-select__icon--right">
        <i :class="chevronIconClasses"></i>
      </span>
    </div>

    <Transition name="scuba-select-dropdown">
      <div
        v-if="isOpen"
        :id="dropdownId"
        :class="dropdownClasses"
        role="listbox"
      >
        <div
          v-for="(option, index) in options"
          :key="option.value"
          :class="getOptionClasses(option, index)"
          @click="selectOption(option)"
          @mouseenter="highlightedIndex = index"
          role="option"
          :aria-selected="isSelected(option)"
          :tabindex="isSelected(option) ? 0 : -1"
        >
          <i v-if="option.icon" :class="'ph ' + option.icon + ' scuba-select__option-icon'"></i>
          <span class="scuba-select__option-text">{{ option.label }}</span>
          <i v-if="isSelected(option)" class="ph ph-check scuba-select__option-check"></i>
        </div>

        <div v-if="options.length === 0" class="scuba-select__empty">
          {{ emptyMessage }}
        </div>
      </div>
    </Transition>

    <div v-if="hint || error" :class="hintClasses">
      {{ error || hint }}
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  modelValue: { type: [String, Number, Object], default: null },
  options: {
    type: Array,
    default: () => [],
    validator: (value) => {
      return value.every(option =>
        typeof option === 'object' &&
        'value' in option &&
        'label' in option
      );
    }
  },
  label: { type: String, default: '' },
  placeholder: { type: String, default: 'Selecione uma opção' },
  required: { type: Boolean, default: false },
  hint: { type: String, default: '' },
  error: { type: String, default: '' },
  disabled: { type: Boolean, default: false },
  iconLeft: { type: String, default: '' },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  fullWidth: { type: Boolean, default: false },
  id: { type: String, default: null },
  ariaLabel: { type: String, default: '' },
  emptyMessage: { type: String, default: 'Nenhuma opção disponível' },
  searchable: { type: Boolean, default: false }
});

const emit = defineEmits(['update:modelValue', 'change', 'open', 'close']);

const selectWrapper = ref(null);
const isOpen = ref(false);
const highlightedIndex = ref(-1);

const selectId = computed(() => {
  if (props.id) return props.id;
  return 'scuba-select-' + Math.random().toString(36).substr(2, 9);
});

const dropdownId = computed(() => selectId.value + '-dropdown');

const selectedOption = computed(() => {
  return props.options.find(opt => opt.value === props.modelValue);
});

const displayText = computed(() => {
  if (selectedOption.value) {
    return selectedOption.value.label;
  }
  return props.placeholder;
});

const wrapperClasses = computed(() => {
  const classes = ['scuba-select-wrapper'];
  if (props.fullWidth) {
    classes.push('scuba-select-wrapper--full-width');
  }
  return classes;
});

const labelClasses = computed(() => {
  const classes = ['scuba-select__label'];
  if (props.disabled) {
    classes.push('scuba-select__label--disabled');
  }
  return classes;
});

const selectContainerClasses = computed(() => {
  const classes = ['scuba-select__container'];
  classes.push(`scuba-select__container--${props.size}`);

  if (props.disabled) {
    classes.push('scuba-select__container--disabled');
  }

  if (props.error) {
    classes.push('scuba-select__container--error');
  }

  if (isOpen.value) {
    classes.push('scuba-select__container--open');
  }

  if (props.iconLeft) {
    classes.push('scuba-select__container--with-icon-left');
  }

  return classes;
});

const dropdownClasses = computed(() => {
  const classes = ['scuba-select__dropdown'];
  classes.push(`scuba-select__dropdown--${props.size}`);
  return classes;
});

const selectedTextClasses = computed(() => {
  const classes = ['scuba-select__selected-text'];
  if (!selectedOption.value) {
    classes.push('scuba-select__selected-text--placeholder');
  }
  return classes;
});

const chevronIconClasses = computed(() => {
  const classes = ['ph', 'ph-caret-down', 'scuba-select__chevron'];
  if (isOpen.value) {
    classes.push('scuba-select__chevron--open');
  }
  return classes;
});

const hintClasses = computed(() => {
  const classes = ['scuba-select__hint'];
  if (props.error) {
    classes.push('scuba-select__hint--error');
  }
  return classes;
});

const isSelected = (option) => {
  return option.value === props.modelValue;
};

const getOptionClasses = (option, index) => {
  const classes = ['scuba-select__option'];

  if (isSelected(option)) {
    classes.push('scuba-select__option--selected');
  }

  if (index === highlightedIndex.value) {
    classes.push('scuba-select__option--highlighted');
  }

  if (option.disabled) {
    classes.push('scuba-select__option--disabled');
  }

  return classes;
};

const toggleDropdown = () => {
  if (props.disabled) return;

  if (isOpen.value) {
    closeDropdown();
  } else {
    openDropdown();
  }
};

const openDropdown = () => {
  isOpen.value = true;
  highlightedIndex.value = props.options.findIndex(opt => opt.value === props.modelValue);
  emit('open');
};

const closeDropdown = () => {
  isOpen.value = false;
  highlightedIndex.value = -1;
  emit('close');
};

const selectOption = (option) => {
  if (option.disabled || props.disabled) return;

  emit('update:modelValue', option.value);
  emit('change', option);
  closeDropdown();
};

const navigateOptions = (direction) => {
  if (!isOpen.value) {
    openDropdown();
    return;
  }

  const enabledOptions = props.options.filter(opt => !opt.disabled);
  if (enabledOptions.length === 0) return;

  let newIndex = highlightedIndex.value + direction;

  // Wrap around
  if (newIndex < 0) {
    newIndex = props.options.length - 1;
  } else if (newIndex >= props.options.length) {
    newIndex = 0;
  }

  // Skip disabled options
  while (props.options[newIndex]?.disabled) {
    newIndex += direction;
    if (newIndex < 0) newIndex = props.options.length - 1;
    if (newIndex >= props.options.length) newIndex = 0;
  }

  highlightedIndex.value = newIndex;
};

const handleClickOutside = (event) => {
  if (selectWrapper.value && !selectWrapper.value.contains(event.target)) {
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
.scuba-select-wrapper {
  display: inline-flex;
  flex-direction: column;
  gap: var(--spacing-3xs);
  font-family: var(--type-font-family-body);
  position: relative;
}

.scuba-select-wrapper--full-width {
  width: 100%;
}

.scuba-select__label {
  display: flex;
  align-items: center;
  gap: var(--spacing-4xs);
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

.scuba-select__label--disabled {
  color: var(--context-color-text-disabled);
}

.scuba-select__required {
  color: var(--semantic-color-error-normal);
}

.scuba-select__container {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-2xs);
  padding: 0 var(--spacing-xs);
  background: var(--context-color-surface-action);
  border: var(--border-width-border-md) solid transparent;
  border-radius: var(--border-radius-rounded);
  transition: all var(--transition-base);
  cursor: pointer;
  user-select: none;
}

.scuba-select__container--sm {
  min-height: var(--scale-600);
  font-size: var(--type-font-size-sm);
}

.scuba-select__container--md {
  min-height: var(--scale-700);
  font-size: var(--type-font-size-base);
}

.scuba-select__container--lg {
  min-height: var(--scale-800);
  font-size: var(--type-font-size-lg);
}

.scuba-select__container:hover:not(.scuba-select__container--disabled) {
  border-color: var(--context-color-border-action-hover);
}

.scuba-select__container:focus-visible {
  border-color: var(--context-color-border-focus);
  outline: var(--border-width-border-md) solid var(--context-color-surface-focus-light);
  outline-offset: 0;
}

.scuba-select__container--open {
  border-color: var(--context-color-border-focus);
}

.scuba-select__container--error {
  border-color: var(--context-color-border-error);
}

.scuba-select__container--disabled {
  background: var(--context-color-surface-disabled);
  cursor: not-allowed;
  opacity: 0.6;
}

.scuba-select__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2em;
  color: var(--context-color-icon-secondary);
  flex-shrink: 0;
}

.scuba-select__container--disabled .scuba-select__icon {
  color: var(--context-color-icon-disabled);
}

.scuba-select__container--error .scuba-select__icon {
  color: var(--context-color-icon-error);
}

.scuba-select__selected-text {
  flex: 1;
  color: var(--context-color-text-primary);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

.scuba-select__selected-text--placeholder {
  color: var(--context-color-text-secondary);
  opacity: 0.6;
}

.scuba-select__chevron {
  transition: transform var(--transition-base);
}

.scuba-select__chevron--open {
  transform: rotate(180deg);
}

.scuba-select__dropdown {
  position: absolute;
  top: calc(100% + var(--spacing-4xs));
  left: 0;
  right: 0;
  max-height: 300px;
  overflow-y: auto;
  background: var(--context-color-surface-primary);
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded);
  box-shadow: var(--shadow-lg);
  z-index: var(--z-index-dropdown);
  padding: var(--spacing-4xs) 0;
}

.scuba-select__dropdown--sm {
  font-size: var(--type-font-size-sm);
}

.scuba-select__dropdown--md {
  font-size: var(--type-font-size-base);
}

.scuba-select__dropdown--lg {
  font-size: var(--type-font-size-lg);
}

.scuba-select__option {
  display: flex;
  align-items: center;
  gap: var(--spacing-2xs);
  padding: var(--spacing-2xs) var(--spacing-xs);
  cursor: pointer;
  transition: background var(--transition-fast);
  color: var(--context-color-text-primary);
}

.scuba-select__option:hover:not(.scuba-select__option--disabled) {
  background: var(--context-color-surface-action);
}

.scuba-select__option--highlighted {
  background: var(--context-color-surface-action-hover);
}

.scuba-select__option--selected {
  background: var(--context-color-surface-focus-light);
  color: var(--context-color-text-action);
  font-weight: var(--type-font-weight-semibold);
}

.scuba-select__option--disabled {
  opacity: 0.5;
  cursor: not-allowed;
  color: var(--context-color-text-disabled);
}

.scuba-select__option-icon {
  font-size: 1.2em;
  flex-shrink: 0;
}

.scuba-select__option-text {
  flex: 1;
}

.scuba-select__option-check {
  font-size: 1em;
  color: var(--context-color-icon-action);
  flex-shrink: 0;
}

.scuba-select__empty {
  padding: var(--spacing-md) var(--spacing-xs);
  text-align: center;
  color: var(--context-color-text-secondary);
  font-size: var(--type-font-size-sm);
}

.scuba-select__hint {
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-secondary);
}

.scuba-select__hint--error {
  color: var(--context-color-text-error);
}

/* Transition animations */
.scuba-select-dropdown-enter-active,
.scuba-select-dropdown-leave-active {
  transition: all var(--transition-fast);
}

.scuba-select-dropdown-enter-from {
  opacity: 0;
  transform: translateY(-8px);
}

.scuba-select-dropdown-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}
</style>
