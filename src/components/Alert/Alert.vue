<template>
  <div :class="alertClasses" role="alert">
    <!-- Left: icon + message -->
    <div class="scuba-alert__left">
      <i v-if="showIcon" :class="iconClasses" class="scuba-alert__icon" aria-hidden="true"></i>
      <span class="scuba-alert__message">
        <slot>{{ message }}</slot>
      </span>
    </div>

    <!-- Right: action button + close -->
    <div class="scuba-alert__right">
      <button
        v-if="actionLabel"
        type="button"
        class="scuba-alert__action"
        @click="handleAction"
      >
        {{ actionLabel }}
      </button>

      <button
        v-if="closable"
        type="button"
        class="scuba-alert__close"
        @click="handleClose"
        :aria-label="closeAriaLabel"
      >
        <i class="ph ph-x" aria-hidden="true"></i>
      </button>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'info',
    validator: (value) => ['success', 'warning', 'error', 'info'].includes(value)
  },
  message: {
    type: String,
    default: ''
  },
  showIcon: {
    type: Boolean,
    default: true
  },
  closable: {
    type: Boolean,
    default: false
  },
  closeAriaLabel: {
    type: String,
    default: 'Fechar'
  },
  actionLabel: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['close', 'action']);

const variantIcons = {
  success: 'ph-check-circle',
  warning: 'ph-warning',
  error: 'ph-x-circle',
  info: 'ph-info'
};

const alertClasses = computed(() => [
  'scuba-alert',
  `scuba-alert--${props.variant}`
]);

const iconClasses = computed(() => `ph ${variantIcons[props.variant]}`);

const handleClose = (event) => emit('close', event);
const handleAction = (event) => emit('action', event);
</script>

<style scoped>
.scuba-alert {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-ga-2);
  min-height: 56px;
  padding: var(--spacing-py-4) var(--spacing-px-4);
  border-radius: var(--border-radius-rounded);
  font-family: var(--type-font-family-body);
}

/* Left section: icon + message */
.scuba-alert__left {
  display: flex;
  align-items: center;
  gap: var(--spacing-ga-2);
  flex: 1;
  min-width: 0;
}

.scuba-alert__icon {
  font-size: var(--scale-500); /* 24px */
  flex-shrink: 0;
  line-height: 1;
}

.scuba-alert__message {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
}

/* Right section: action + close */
.scuba-alert__right {
  display: flex;
  align-items: center;
  gap: var(--spacing-ga-2);
  flex-shrink: 0;
}

.scuba-alert__action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  padding: var(--spacing-py-2) var(--spacing-px-3);
  background: rgba(255, 255, 255, 0.5);
  border: none;
  border-radius: var(--border-radius-rounded);
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  color: inherit;
  cursor: pointer;
  white-space: nowrap;
  transition: background var(--transition-fast);
}

.scuba-alert__action:hover {
  background: rgba(255, 255, 255, 0.75);
}

.scuba-alert__close {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: var(--scale-500);
  height: var(--scale-500);
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--border-radius-rounded-sm);
  font-size: var(--scale-500);
  color: inherit;
  cursor: pointer;
  flex-shrink: 0;
  line-height: 1;
  opacity: 0.7;
  transition: opacity var(--transition-fast);
}

.scuba-alert__close:hover {
  opacity: 1;
}

/* Error */
.scuba-alert--error {
  background: var(--context-color-surface-error);
  color: var(--context-color-text-error);
}

/* Warning */
.scuba-alert--warning {
  background: var(--context-color-surface-warning);
  color: var(--context-color-text-warning);
}

/* Info */
.scuba-alert--info {
  background: var(--context-color-surface-info);
  color: var(--context-color-text-information);
}

/* Success */
.scuba-alert--success {
  background: var(--context-color-surface-success);
  color: var(--context-color-text-success);
}
</style>
