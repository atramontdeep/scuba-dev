<template>
  <div :class="actionBoxClasses">
    <div v-if="icon || $slots.icon" class="scuba-action-box__icon-container">
      <div :class="iconWrapperClasses">
        <component v-if="icon" :is="icon" :size="iconSize" :weight="iconWeight" />
        <slot v-else name="icon" />
      </div>
    </div>

    <div class="scuba-action-box__content">
      <div class="scuba-action-box__header">
        <h3 v-if="title || $slots.title" class="scuba-action-box__title">
          <slot name="title">{{ title }}</slot>
        </h3>
        <div v-if="$slots.badge" class="scuba-action-box__badge">
          <slot name="badge" />
        </div>
      </div>

      <p v-if="description || $slots.description" class="scuba-action-box__description">
        <slot name="description">{{ description }}</slot>
      </p>

      <div v-if="$slots.default" class="scuba-action-box__body">
        <slot />
      </div>

      <div v-if="$slots.actions || hasDefaultActions" class="scuba-action-box__actions">
        <slot name="actions">
          <button
            v-if="actionLabel"
            :class="actionButtonClasses"
            @click="handleActionClick"
            :disabled="disabled"
          >
            {{ actionLabel }}
          </button>
          <button
            v-if="dismissLabel"
            class="scuba-action-box__button scuba-action-box__button--secondary"
            @click="handleDismiss"
            :disabled="disabled"
          >
            {{ dismissLabel }}
          </button>
        </slot>
      </div>
    </div>

    <button
      v-if="closable && !disabled"
      class="scuba-action-box__close"
      @click="handleClose"
      aria-label="Close"
    >
      <PhX :size="20" weight="bold" />
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import { PhX } from '@phosphor-icons/vue';

const props = defineProps({
  icon: {
    type: [Object, Function],
    default: null
  },
  iconVariant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'success', 'warning', 'danger', 'info', 'neutral'].includes(value)
  },
  iconWeight: {
    type: String,
    default: 'regular',
    validator: (value) => ['thin', 'light', 'regular', 'bold', 'fill'].includes(value)
  },
  title: {
    type: String,
    default: ''
  },
  description: {
    type: String,
    default: ''
  },
  actionLabel: {
    type: String,
    default: ''
  },
  dismissLabel: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'bordered', 'elevated'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  closable: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['action', 'dismiss', 'close']);

const iconSize = computed(() => {
  const sizes = {
    sm: 20,
    md: 24,
    lg: 32
  };
  return sizes[props.size];
});

const hasDefaultActions = computed(() => {
  return Boolean(props.actionLabel || props.dismissLabel);
});

const actionBoxClasses = computed(() => {
  return [
    'scuba-action-box',
    `scuba-action-box--${props.variant}`,
    `scuba-action-box--${props.size}`,
    {
      'scuba-action-box--disabled': props.disabled
    }
  ];
});

const iconWrapperClasses = computed(() => {
  return [
    'scuba-action-box__icon',
    `scuba-action-box__icon--${props.iconVariant}`
  ];
});

const actionButtonClasses = computed(() => {
  return [
    'scuba-action-box__button',
    'scuba-action-box__button--primary'
  ];
});

const handleActionClick = () => {
  emit('action');
};

const handleDismiss = () => {
  emit('dismiss');
};

const handleClose = () => {
  emit('close');
};
</script>

<style scoped>
.scuba-action-box {
  position: relative;
  display: flex;
  gap: var(--spacing-md);
  background: var(--context-color-surface-primary);
  border-radius: var(--border-radius-rounded-md);
  font-family: var(--type-font-family-body);
  transition: all 0.2s ease;
}

.scuba-action-box--default {
  padding: var(--spacing-md);
}

.scuba-action-box--bordered {
  padding: var(--spacing-md);
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-action-box--elevated {
  padding: var(--spacing-md);
  box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
}

.scuba-action-box--elevated:hover {
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
}

.scuba-action-box--disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

/* Sizes */
.scuba-action-box--sm {
  padding: var(--spacing-sm);
  gap: var(--spacing-sm);
}

.scuba-action-box--lg {
  padding: var(--spacing-lg);
  gap: var(--spacing-lg);
}

.scuba-action-box__icon-container {
  flex-shrink: 0;
}

.scuba-action-box__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 48px;
  height: 48px;
  border-radius: var(--border-radius-rounded-md);
  transition: all 0.2s ease;
}

.scuba-action-box--sm .scuba-action-box__icon {
  width: 40px;
  height: 40px;
}

.scuba-action-box--lg .scuba-action-box__icon {
  width: 56px;
  height: 56px;
}

.scuba-action-box__icon--primary {
  background: var(--color-primary-100);
  color: var(--color-primary-600);
}

.scuba-action-box__icon--success {
  background: var(--color-green-100);
  color: var(--color-green-600);
}

.scuba-action-box__icon--warning {
  background: var(--color-yellow-100);
  color: var(--color-yellow-600);
}

.scuba-action-box__icon--danger {
  background: var(--color-red-100);
  color: var(--color-red-600);
}

.scuba-action-box__icon--info {
  background: var(--color-blue-100);
  color: var(--color-blue-600);
}

.scuba-action-box__icon--neutral {
  background: var(--context-color-surface-secondary);
  color: var(--context-color-text-secondary);
}

.scuba-action-box__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  min-width: 0;
}

.scuba-action-box__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacing-sm);
}

.scuba-action-box__title {
  margin: 0;
  font-size: var(--type-font-size-lg);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
  line-height: var(--type-line-height-tight);
}

.scuba-action-box--sm .scuba-action-box__title {
  font-size: var(--type-font-size-base);
}

.scuba-action-box--lg .scuba-action-box__title {
  font-size: var(--type-font-size-xl);
}

.scuba-action-box__badge {
  flex-shrink: 0;
}

.scuba-action-box__description {
  margin: 0;
  font-size: var(--type-font-size-sm);
  color: var(--context-color-text-secondary);
  line-height: var(--type-line-height-normal);
}

.scuba-action-box--sm .scuba-action-box__description {
  font-size: var(--type-font-size-xs);
}

.scuba-action-box--lg .scuba-action-box__description {
  font-size: var(--type-font-size-base);
}

.scuba-action-box__body {
  font-size: var(--type-font-size-sm);
  color: var(--context-color-text-primary);
}

.scuba-action-box__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  flex-wrap: wrap;
  margin-top: var(--spacing-xs);
}

.scuba-action-box__button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-xs) var(--spacing-md);
  border: none;
  border-radius: var(--border-radius-rounded-sm);
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  cursor: pointer;
  transition: all 0.2s ease;
  white-space: nowrap;
}

.scuba-action-box__button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.scuba-action-box__button--primary {
  background: var(--color-primary-500);
  color: var(--color-white);
}

.scuba-action-box__button--primary:hover:not(:disabled) {
  background: var(--color-primary-600);
}

.scuba-action-box__button--secondary {
  background: transparent;
  color: var(--context-color-text-secondary);
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-action-box__button--secondary:hover:not(:disabled) {
  background: var(--context-color-surface-secondary);
  color: var(--context-color-text-primary);
}

.scuba-action-box__close {
  position: absolute;
  top: var(--spacing-sm);
  right: var(--spacing-sm);
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

.scuba-action-box__close:hover {
  background: var(--context-color-surface-secondary);
  color: var(--context-color-text-primary);
}

.scuba-action-box__close:focus {
  outline: none;
  box-shadow: 0 0 0 2px #BFDBFE;
}
</style>
