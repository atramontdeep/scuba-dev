<template>
  <div :class="skeletonClasses" :style="skeletonStyle">
    <span v-if="!noAnimation" class="scuba-skeleton__shimmer"></span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'text',
    validator: (value) => ['text', 'circular', 'rectangular', 'rounded'].includes(value)
  },
  width: {
    type: [String, Number],
    default: null
  },
  height: {
    type: [String, Number],
    default: null
  },
  noAnimation: {
    type: Boolean,
    default: false
  }
});

const skeletonClasses = computed(() => {
  const classes = ['scuba-skeleton'];
  classes.push(`scuba-skeleton--${props.variant}`);

  if (props.noAnimation) {
    classes.push('scuba-skeleton--no-animation');
  }

  return classes;
});

const skeletonStyle = computed(() => {
  const style = {};

  if (props.width) {
    style.width = typeof props.width === 'number' ? `${props.width}px` : props.width;
  }

  if (props.height) {
    style.height = typeof props.height === 'number' ? `${props.height}px` : props.height;
  }

  return style;
});
</script>

<style scoped>
.scuba-skeleton {
  position: relative;
  overflow: hidden;
  background: var(--context-color-surface-secondary);
  display: block;
}

/* Variants */
.scuba-skeleton--text {
  height: 1em;
  border-radius: var(--border-radius-rounded-sm);
  transform-origin: 0 60%;
  transform: scale(1, 0.6);
}

.scuba-skeleton--circular {
  border-radius: 50%;
  width: 40px;
  height: 40px;
}

.scuba-skeleton--rectangular {
  border-radius: 0;
  width: 100%;
  height: 100px;
}

.scuba-skeleton--rounded {
  border-radius: var(--border-radius-rounded-md);
  width: 100%;
  height: 100px;
}

/* Shimmer animation */
.scuba-skeleton__shimmer {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(
    90deg,
    transparent,
    rgba(255, 255, 255, 0.4),
    transparent
  );
  animation: shimmer 1.5s infinite;
}

@keyframes shimmer {
  0% {
    transform: translateX(-100%);
  }
  100% {
    transform: translateX(100%);
  }
}

.scuba-skeleton--no-animation .scuba-skeleton__shimmer {
  display: none;
}
</style>
