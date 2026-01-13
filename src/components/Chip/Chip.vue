<template>
  <span :class="chipClasses" @click="handleClick">
    <span v-if="count" class="scuba-chip__count">
      {{ countValue }}
    </span>

    <component
      v-if="icon && iconPosition === 'left'"
      :is="icon"
      :size="iconSize"
      class="scuba-chip__icon scuba-chip__icon--left"
    />

    <span class="scuba-chip__label">
      <slot>{{ label }}</slot>
    </span>

    <component
      v-if="icon && iconPosition === 'right'"
      :is="icon"
      :size="iconSize"
      class="scuba-chip__icon scuba-chip__icon--right"
    />

    <button
      v-if="removable"
      class="scuba-chip__remove"
      :aria-label="removeAriaLabel"
      @click.stop="handleRemove"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        viewBox="0 0 256 256"
        fill="currentColor"
      >
        <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z" />
      </svg>
    </button>
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  label: {
    type: String,
    default: ''
  },
  count: {
    type: Boolean,
    default: false
  },
  countValue: {
    type: [String, Number],
    default: '32'
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  icon: {
    type: [Object, Function],
    default: null
  },
  iconPosition: {
    type: String,
    default: 'left',
    validator: (value) => ['left', 'right'].includes(value)
  },
  removable: {
    type: Boolean,
    default: false
  },
  removeAriaLabel: {
    type: String,
    default: 'Remover'
  },
  clickable: {
    type: Boolean,
    default: false
  },
  selected: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click', 'remove']);

const chipClasses = computed(() => {
  return [
    'scuba-chip',
    `scuba-chip--${props.size}`,
    {
      'scuba-chip--clickable': props.clickable,
      'scuba-chip--selected': props.selected,
      'scuba-chip--disabled': props.disabled
    }
  ];
});

const iconSize = computed(() => {
  const sizes = {
    sm: 14,
    md: 16,
    lg: 18
  };
  return sizes[props.size];
});

const handleClick = (event) => {
  if (props.clickable && !props.disabled) {
    emit('click', event);
  }
};

const handleRemove = (event) => {
  if (!props.disabled) {
    emit('remove', event);
  }
};
</script>

<style scoped>
.scuba-chip {
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-2xs);
  font-family: var(--type-font-family-body);
  font-weight: var(--type-font-weight-medium);
  border-radius: var(--border-radius-rounded-pill);
  transition: all 0.2s ease;
  white-space: nowrap;
  max-width: 100%;
}

.scuba-chip--clickable {
  cursor: pointer;
}

/* Sizes */
.scuba-chip--sm {
  padding: var(--spacing-4xs) var(--spacing-xs);
  font-size: var(--type-font-size-xs);
  height: 24px;
}

.scuba-chip--md {
  padding: var(--spacing-2xs) var(--spacing-sm);
  font-size: var(--type-font-size-sm);
  height: 32px;
}

.scuba-chip--lg {
  padding: var(--spacing-xs) var(--spacing-md);
  font-size: var(--type-font-size-base);
  height: 40px;
}

/* Count badge */
.scuba-chip__count {
  flex-shrink: 0;
  color: currentColor;
  font-weight: var(--type-font-weight-semibold);
}

/* Label */
.scuba-chip__label {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

/* Icons */
.scuba-chip__icon {
  flex-shrink: 0;
  display: flex;
  align-items: center;
}

.scuba-chip__icon--left {
  margin-left: calc(var(--spacing-2xs) * -0.5);
}

.scuba-chip__icon--right {
  margin-right: calc(var(--spacing-2xs) * -0.5);
}

/* Remove button */
.scuba-chip__remove {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  color: currentColor;
  opacity: 0.7;
  transition: opacity 0.2s ease;
  margin-right: calc(var(--spacing-2xs) * -0.5);
}

.scuba-chip__remove:hover {
  opacity: 1;
}

/* Default State */
.scuba-chip {
  background: #E5E7EB;
  color: #374151;
}

/* Hover State */
.scuba-chip.scuba-chip--clickable:hover:not(.scuba-chip--selected):not(.scuba-chip--disabled) {
  background: #DBEAFE;
  color: #1E40AF;
}

/* Selected State */
.scuba-chip--selected {
  background: #BFDBFE;
  color: #1E40AF;
  font-weight: var(--type-font-weight-semibold);
}

/* Disabled State */
.scuba-chip--disabled {
  background: #E5E7EB;
  color: #9CA3AF;
  cursor: not-allowed !important;
  pointer-events: none;
}
</style>
