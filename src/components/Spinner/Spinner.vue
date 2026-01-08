<template>
  <div :class="spinnerWrapperClasses" :aria-label="ariaLabel" role="status">
    <svg :class="spinnerClasses" viewBox="0 0 50 50">
      <circle
        class="scuba-spinner__track"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        :stroke-width="strokeWidth"
      ></circle>
      <circle
        class="scuba-spinner__circle"
        cx="25"
        cy="25"
        r="20"
        fill="none"
        :stroke-width="strokeWidth"
      ></circle>
    </svg>
    <span v-if="label" :class="labelClasses">{{ label }}</span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  variant: {
    type: String,
    default: 'primary',
    validator: (value) => ['primary', 'neutral', 'success', 'warning', 'error', 'info'].includes(value)
  },
  label: {
    type: String,
    default: ''
  },
  ariaLabel: {
    type: String,
    default: 'Loading'
  }
});

const strokeWidth = computed(() => {
  const widths = {
    xs: '4',
    sm: '4',
    md: '3',
    lg: '3',
    xl: '2'
  };
  return widths[props.size] || '3';
});

const spinnerWrapperClasses = computed(() => {
  const classes = ['scuba-spinner-wrapper'];

  if (props.label) {
    classes.push('scuba-spinner-wrapper--with-label');
  }

  return classes;
});

const spinnerClasses = computed(() => {
  const classes = ['scuba-spinner'];
  classes.push('scuba-spinner--' + props.size);
  classes.push('scuba-spinner--' + props.variant);
  return classes;
});

const labelClasses = computed(() => {
  const classes = ['scuba-spinner__label'];
  classes.push('scuba-spinner__label--' + props.size);
  return classes;
});
</script>

<style scoped>
.scuba-spinner-wrapper {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--type-font-family-body);
}

.scuba-spinner-wrapper--with-label {
  flex-direction: column;
  gap: var(--spacing-2xs);
}

.scuba-spinner {
  animation: scuba-spinner-rotate 1.5s linear infinite;
}

.scuba-spinner--xs {
  width: var(--scale-300);
  height: var(--scale-300);
}

.scuba-spinner--sm {
  width: var(--scale-400);
  height: var(--scale-400);
}

.scuba-spinner--md {
  width: var(--scale-600);
  height: var(--scale-600);
}

.scuba-spinner--lg {
  width: var(--scale-800);
  height: var(--scale-800);
}

.scuba-spinner--xl {
  width: var(--scale-1000);
  height: var(--scale-1000);
}

.scuba-spinner__track {
  stroke: var(--semantic-color-neutral-200);
  opacity: 0.3;
}

.scuba-spinner__circle {
  stroke-linecap: round;
  stroke-dasharray: 1, 200;
  stroke-dashoffset: 0;
  animation: scuba-spinner-dash 1.5s ease-in-out infinite;
}

/* Variants */
.scuba-spinner--primary .scuba-spinner__circle {
  stroke: var(--semantic-color-primary-500);
}

.scuba-spinner--neutral .scuba-spinner__circle {
  stroke: var(--semantic-color-neutral-600);
}

.scuba-spinner--success .scuba-spinner__circle {
  stroke: var(--semantic-color-success-normal);
}

.scuba-spinner--warning .scuba-spinner__circle {
  stroke: var(--semantic-color-warning-normal);
}

.scuba-spinner--error .scuba-spinner__circle {
  stroke: var(--semantic-color-error-normal);
}

.scuba-spinner--info .scuba-spinner__circle {
  stroke: var(--semantic-color-info-normal);
}

.scuba-spinner__label {
  font-weight: var(--type-font-weight-regular);
  color: var(--context-color-text-secondary);
}

.scuba-spinner__label--xs,
.scuba-spinner__label--sm {
  font-size: var(--type-font-size-xs);
}

.scuba-spinner__label--md {
  font-size: var(--type-font-size-sm);
}

.scuba-spinner__label--lg,
.scuba-spinner__label--xl {
  font-size: var(--type-font-size-base);
}

@keyframes scuba-spinner-rotate {
  100% {
    transform: rotate(360deg);
  }
}

@keyframes scuba-spinner-dash {
  0% {
    stroke-dasharray: 1, 200;
    stroke-dashoffset: 0;
  }
  50% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -35px;
  }
  100% {
    stroke-dasharray: 90, 200;
    stroke-dashoffset: -125px;
  }
}
</style>
