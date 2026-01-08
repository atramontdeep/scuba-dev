<template>
  <span :class="chipClasses" @click="handleClick">
    <span v-if="count" class="scuba-chip__count">
      {{ count }}
    </span>

    <component
      v-if="icon && iconPosition === 'left'"
      :is="icon"
      :size="iconSize"
      :weight="iconWeight"
      class="scuba-chip__icon scuba-chip__icon--left"
    />

    <span v-if="avatar" class="scuba-chip__avatar">
      <img :src="avatar" :alt="avatarAlt" />
    </span>

    <span class="scuba-chip__label">
      <slot>{{ label }}</slot>
    </span>

    <component
      v-if="icon && iconPosition === 'right'"
      :is="icon"
      :size="iconSize"
      :weight="iconWeight"
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
    type: [String, Number],
    default: null
  },
  variant: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'primary', 'success', 'warning', 'danger', 'info'].includes(value)
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
  iconWeight: {
    type: String,
    default: 'regular',
    validator: (value) => ['thin', 'light', 'regular', 'bold', 'fill'].includes(value)
  },
  avatar: {
    type: String,
    default: null
  },
  avatarAlt: {
    type: String,
    default: ''
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
  },
  outlined: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click', 'remove']);

const chipClasses = computed(() => {
  return [
    'scuba-chip',
    `scuba-chip--${props.variant}`,
    `scuba-chip--${props.size}`,
    {
      'scuba-chip--clickable': props.clickable,
      'scuba-chip--selected': props.selected,
      'scuba-chip--disabled': props.disabled,
      'scuba-chip--outlined': props.outlined,
      'scuba-chip--with-avatar': props.avatar
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

/* Avatar */
.scuba-chip__avatar {
  flex-shrink: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  overflow: hidden;
  margin-left: calc(var(--spacing-2xs) * -0.5);
}

.scuba-chip--sm .scuba-chip__avatar {
  width: 20px;
  height: 20px;
}

.scuba-chip--md .scuba-chip__avatar {
  width: 24px;
  height: 24px;
}

.scuba-chip--lg .scuba-chip__avatar {
  width: 28px;
  height: 28px;
}

.scuba-chip__avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
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

/* States */
.scuba-chip--selected {
  background: #BFDBFE !important;
  color: #1E40AF !important;
}

.scuba-chip--disabled {
  opacity: 0.5;
  cursor: not-allowed !important;
  pointer-events: none;
}

/* Variant: Neutral (Filled) */
.scuba-chip--neutral {
  background: var(--context-color-surface-secondary);
  color: var(--context-color-text-primary);
}

.scuba-chip--neutral.scuba-chip--clickable:hover:not(.scuba-chip--selected):not(.scuba-chip--disabled) {
  background: var(--context-color-surface-tertiary);
}

.scuba-chip--neutral.scuba-chip--outlined {
  background: transparent;
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  color: var(--context-color-text-primary);
}

.scuba-chip--neutral.scuba-chip--outlined.scuba-chip--clickable:hover:not(.scuba-chip--selected):not(.scuba-chip--disabled) {
  background: var(--context-color-surface-secondary);
}

/* Variant: Primary */
.scuba-chip--primary {
  background: var(--color-primary-100);
  color: var(--color-primary-700);
}

.scuba-chip--primary.scuba-chip--clickable:hover {
  background: var(--color-primary-200);
}

.scuba-chip--primary.scuba-chip--outlined {
  background: transparent;
  border: var(--border-width-border-sm) solid var(--color-primary-500);
  color: var(--color-primary-700);
}

.scuba-chip--primary.scuba-chip--outlined.scuba-chip--clickable:hover {
  background: var(--color-primary-50);
}

/* Variant: Success */
.scuba-chip--success {
  background: var(--color-green-100);
  color: var(--color-green-700);
}

.scuba-chip--success.scuba-chip--clickable:hover {
  background: var(--color-green-200);
}

.scuba-chip--success.scuba-chip--outlined {
  background: transparent;
  border: var(--border-width-border-sm) solid var(--color-green-500);
  color: var(--color-green-700);
}

.scuba-chip--success.scuba-chip--outlined.scuba-chip--clickable:hover {
  background: var(--color-green-50);
}

/* Variant: Warning */
.scuba-chip--warning {
  background: var(--color-yellow-100);
  color: var(--color-yellow-800);
}

.scuba-chip--warning.scuba-chip--clickable:hover {
  background: var(--color-yellow-200);
}

.scuba-chip--warning.scuba-chip--outlined {
  background: transparent;
  border: var(--border-width-border-sm) solid var(--color-yellow-500);
  color: var(--color-yellow-800);
}

.scuba-chip--warning.scuba-chip--outlined.scuba-chip--clickable:hover {
  background: var(--color-yellow-50);
}

/* Variant: Danger */
.scuba-chip--danger {
  background: var(--color-red-100);
  color: var(--color-red-700);
}

.scuba-chip--danger.scuba-chip--clickable:hover {
  background: var(--color-red-200);
}

.scuba-chip--danger.scuba-chip--outlined {
  background: transparent;
  border: var(--border-width-border-sm) solid var(--color-red-500);
  color: var(--color-red-700);
}

.scuba-chip--danger.scuba-chip--outlined.scuba-chip--clickable:hover {
  background: var(--color-red-50);
}

/* Variant: Info */
.scuba-chip--info {
  background: var(--color-blue-100);
  color: var(--color-blue-700);
}

.scuba-chip--info.scuba-chip--clickable:hover {
  background: var(--color-blue-200);
}

.scuba-chip--info.scuba-chip--outlined {
  background: transparent;
  border: var(--border-width-border-sm) solid var(--color-blue-500);
  color: var(--color-blue-700);
}

.scuba-chip--info.scuba-chip--outlined.scuba-chip--clickable:hover {
  background: var(--color-blue-50);
}
</style>
