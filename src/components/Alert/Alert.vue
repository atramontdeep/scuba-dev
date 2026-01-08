<template>
  <div :class="alertClasses" role="alert">
    <div v-if="showIcon" class="scuba-alert__icon-container">
      <i :class="iconClasses" aria-hidden="true"></i>
    </div>

    <div class="scuba-alert__content">
      <div v-if="title" class="scuba-alert__title">{{ title }}</div>
      <div v-if="message || $slots.default" class="scuba-alert__message">
        <slot>{{ message }}</slot>
      </div>
    </div>

    <button
      v-if="closable"
      type="button"
      class="scuba-alert__close"
      @click="handleClose"
      :aria-label="closeAriaLabel"
    >
      <i class="ph ph-x"></i>
    </button>
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
  title: {
    type: String,
    default: ''
  },
  message: {
    type: String,
    default: ''
  },
  icon: {
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
    default: 'Close'
  }
});

const emit = defineEmits(['close']);

const defaultIcons = {
  success: 'ph-check-circle',
  warning: 'ph-warning',
  error: 'ph-x-circle',
  info: 'ph-info'
};

const alertClasses = computed(() => {
  const classes = ['scuba-alert'];
  classes.push('scuba-alert--' + props.variant);

  if (props.closable) {
    classes.push('scuba-alert--closable');
  }

  return classes;
});

const iconClasses = computed(() => {
  const icon = props.icon || defaultIcons[props.variant];
  return 'ph ' + icon + ' scuba-alert__icon';
});

const handleClose = (event) => {
  emit('close', event);
};
</script>

<style scoped>
.scuba-alert {
  display: flex;
  gap: var(--spacing-2xs);
  padding: var(--spacing-xs);
  border-radius: var(--border-radius-rounded);
  font-family: var(--type-font-family-body);
}

.scuba-alert--closable {
  padding-right: var(--spacing-2xs);
}

.scuba-alert__icon-container {
  display: flex;
  align-items: flex-start;
  padding-top: 2px;
  flex-shrink: 0;
}

.scuba-alert__icon {
  font-size: var(--type-font-size-xl);
}

.scuba-alert__content {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4xs);
}

.scuba-alert__title {
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-tight);
}

.scuba-alert__message {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
}

.scuba-alert__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: var(--scale-500);
  height: var(--scale-500);
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--border-radius-rounded-sm);
  cursor: pointer;
  font-size: var(--type-font-size-lg);
  transition: background var(--transition-fast);
  flex-shrink: 0;
  color: inherit;
  opacity: 0.7;
}

.scuba-alert__close:hover {
  opacity: 1;
  background: rgba(0, 0, 0, 0.1);
}

/* Success Variant */
.scuba-alert--success {
  background: var(--semantic-color-success-light);
  color: var(--semantic-color-success-dark);
}

/* Warning Variant */
.scuba-alert--warning {
  background: var(--semantic-color-warning-light);
  color: var(--semantic-color-warning-dark);
}

/* Error Variant */
.scuba-alert--error {
  background: var(--semantic-color-error-light);
  color: var(--semantic-color-error-dark);
}

/* Info Variant */
.scuba-alert--info {
  background: var(--semantic-color-info-light);
  color: var(--semantic-color-info-dark);
}
</style>
