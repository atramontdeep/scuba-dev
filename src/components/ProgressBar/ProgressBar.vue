<template>
  <div :class="progressWrapperClasses">
    <div :class="progressTrackClasses">
      <div
        :class="progressBarClasses"
        :style="progressBarStyle"
        role="progressbar"
        :aria-valuenow="value"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-label="ariaLabel"
      >
        <div v-if="animated" class="scuba-progress__bar-animated"></div>
      </div>
    </div>

    <!-- Footer with support text and percentage -->
    <div v-if="supportText || showPercentage" class="scuba-progress__footer">
      <span v-if="supportText" class="scuba-progress__support-text">{{ supportText }}</span>
      <span v-if="showPercentage" class="scuba-progress__percentage">{{ value }}%</span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  value: {
    type: Number,
    default: 0,
    validator: (value) => value >= 0 && value <= 100
  },
  size: {
    type: String,
    default: 'sm',
    validator: (value) => ['sm'].includes(value)
  },
  supportText: {
    type: String,
    default: ''
  },
  showPercentage: {
    type: Boolean,
    default: true
  },
  animated: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: 'Progress'
  }
});

const progressWrapperClasses = computed(() => {
  const classes = ['scuba-progress'];
  classes.push(`scuba-progress--${props.size}`);
  return classes;
});

const progressTrackClasses = computed(() => {
  return 'scuba-progress__track';
});

const progressBarClasses = computed(() => {
  const classes = ['scuba-progress__bar'];

  if (props.animated) {
    classes.push('scuba-progress__bar--animated');
  }

  return classes;
});

const progressBarStyle = computed(() => {
  return {
    width: props.value + '%'
  };
});
</script>

<style scoped>
.scuba-progress {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xs);
  font-family: var(--type-font-family-body);
  width: 100%;
}

.scuba-progress__track {
  width: 100%;
  height: 8px;
  background: var(--context-color-surface-action);
  border-radius: var(--border-radius-rounded-pill);
  overflow: hidden;
}

.scuba-progress__bar {
  height: 100%;
  background: var(--context-color-surface-focus);
  transition: width var(--transition-slow);
  border-radius: var(--border-radius-rounded-pill);
  position: relative;
  overflow: hidden;
}

/* Footer */
.scuba-progress__footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: var(--spacing-2xs);
}

.scuba-progress__support-text {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  color: var(--context-color-text-secondary);
}

.scuba-progress__percentage {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  color: var(--context-color-text-secondary);
}

/* Animated bar */
.scuba-progress__bar-animated {
  position: absolute;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.3),
    transparent
  );
  animation: scuba-progress-animation 1.5s ease-in-out infinite;
}

@keyframes scuba-progress-animation {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}
</style>
