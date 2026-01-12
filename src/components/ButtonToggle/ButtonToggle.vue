<template>
  <div :class="toggleGroupClasses" role="group" ref="containerRef">
    <div
      v-if="!multiple && modelValue !== null"
      class="scuba-button-toggle__slider"
      :style="sliderStyle"
    ></div>
    <button
      v-for="(option, index) in options"
      :key="option.value"
      :ref="el => { if (el) buttonRefs[index] = el }"
      :class="getButtonClasses(option.value)"
      :aria-pressed="isSelected(option.value)"
      @click="handleToggle(option.value)"
      :disabled="disabled"
    >
      <component
        v-if="option.icon && showIcons"
        :is="option.icon"
        :size="iconSize"
        :weight="iconWeight"
        class="scuba-button-toggle__icon"
      />
      <span class="scuba-button-toggle__label">
        {{ option.label }}
      </span>
    </button>
  </div>
</template>

<script setup>
import { computed, ref, watch, nextTick, onMounted } from 'vue';

const props = defineProps({
  modelValue: {
    type: [String, Number, Array],
    default: null
  },
  options: {
    type: Array,
    required: true,
    // Expected format: [{ value: 'left', label: 'Left', icon: AlignLeft }]
  },
  multiple: {
    type: Boolean,
    default: false
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  iconWeight: {
    type: String,
    default: 'regular',
    validator: (value) => ['thin', 'light', 'regular', 'bold', 'fill'].includes(value)
  },
  showIcons: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['update:modelValue']);

const containerRef = ref(null);
const buttonRefs = ref([]);
const sliderStyle = ref({});

const toggleGroupClasses = computed(() => {
  return [
    'scuba-button-toggle',
    `scuba-button-toggle--${props.size}`
  ];
});

const iconSize = computed(() => {
  const sizes = {
    sm: 16,
    md: 20,
    lg: 24
  };
  return sizes[props.size];
});

const isSelected = (value) => {
  if (props.multiple) {
    return Array.isArray(props.modelValue) && props.modelValue.includes(value);
  }
  return props.modelValue === value;
};

const getButtonClasses = (value) => {
  return [
    'scuba-button-toggle__button',
    {
      'scuba-button-toggle__button--selected': isSelected(value)
    }
  ];
};

const handleToggle = (value) => {
  if (props.disabled) return;

  if (props.multiple) {
    const currentValue = Array.isArray(props.modelValue) ? [...props.modelValue] : [];
    const index = currentValue.indexOf(value);

    if (index > -1) {
      currentValue.splice(index, 1);
    } else {
      currentValue.push(value);
    }

    emit('update:modelValue', currentValue);
  } else {
    // Single selection - toggle off if already selected
    emit('update:modelValue', props.modelValue === value ? null : value);
  }
};

const updateSliderPosition = () => {
  if (props.multiple || props.modelValue === null) return;

  nextTick(() => {
    const selectedIndex = props.options.findIndex(opt => opt.value === props.modelValue);
    if (selectedIndex === -1 || !buttonRefs.value[selectedIndex]) return;

    const button = buttonRefs.value[selectedIndex];
    const container = containerRef.value;

    if (!button || !container) return;

    const buttonRect = button.getBoundingClientRect();
    const containerRect = container.getBoundingClientRect();

    sliderStyle.value = {
      width: `${buttonRect.width}px`,
      height: `${buttonRect.height}px`,
      transform: `translateX(${buttonRect.left - containerRect.left}px)`,
      transition: 'transform 0.3s ease, width 0.3s ease'
    };
  });
};

watch(() => props.modelValue, updateSliderPosition);
watch(() => props.options, updateSliderPosition);

onMounted(() => {
  updateSliderPosition();
});
</script>

<style scoped>
.scuba-button-toggle {
  display: inline-flex;
  position: relative;
  background: #FFFFFF;
  border-radius: 64px;
  font-family: var(--type-font-family-body);
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.05);
  height: 40px;
}

.scuba-button-toggle__slider {
  position: absolute;
  top: 0;
  left: 0;
  background: #374151;
  border-radius: 64px;
  pointer-events: none;
  z-index: 0;
}

.scuba-button-toggle:has(.scuba-button-toggle__button:disabled) .scuba-button-toggle__slider {
  background: #F3F4F6;
}

.scuba-button-toggle__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-2xs);
  border: none;
  background: transparent;
  cursor: pointer;
  transition: color 0.2s ease, font-weight 0.2s ease, background 0.2s ease;
  font-family: var(--type-font-family-body);
  font-weight: 400;
  font-size: 14px;
  color: #1F2937;
  flex-shrink: 0;
  border-radius: 64px;
  padding: 0 24px;
  white-space: nowrap;
  position: relative;
  z-index: 1;
}

.scuba-button-toggle__button:hover:not(:disabled):not(.scuba-button-toggle__button--selected) {
  background: var(--context-color-surface-action, #F3F4F6);
}

.scuba-button-toggle__button:disabled {
  cursor: not-allowed;
  opacity: 0.4;
  color: #9CA3AF;
}

.scuba-button-toggle__button--selected {
  color: #FFFFFF;
  font-weight: 600;
}

.scuba-button-toggle__button:focus {
  outline: none;
}

/* Sizes */
.scuba-button-toggle--sm {
  height: 32px;
}

.scuba-button-toggle--sm .scuba-button-toggle__button {
  padding: 0 16px;
  font-size: 12px;
}

.scuba-button-toggle--md {
  height: 40px;
}

.scuba-button-toggle--md .scuba-button-toggle__button {
  padding: 0 24px;
  font-size: 14px;
}

.scuba-button-toggle--lg {
  height: 48px;
}

.scuba-button-toggle--lg .scuba-button-toggle__button {
  padding: 0 32px;
  font-size: 16px;
}

.scuba-button-toggle__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.scuba-button-toggle__label {
  white-space: nowrap;
}
</style>
