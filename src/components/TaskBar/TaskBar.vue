<template>
  <div class="scuba-taskbar">
    <div :class="taskbarContainerClasses">
      <div
        :class="taskbarBarClasses"
        :style="taskbarBarStyle"
        role="progressbar"
        :aria-valuenow="percentageValue"
        aria-valuemin="0"
        aria-valuemax="100"
        :aria-label="ariaLabel"
      >
        {{ percentageValue }}% ({{ current }}/{{ total }})
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  // Current count
  current: {
    type: Number,
    default: 0
  },
  // Total count
  total: {
    type: Number,
    default: 100
  },
  ariaLabel: {
    type: String,
    default: 'Task progress'
  }
});

// Computed properties
const percentageValue = computed(() => {
  if (props.total === 0) return 0;
  return Math.round((props.current / props.total) * 100);
});

const taskbarContainerClasses = computed(() => {
  const classes = ['scuba-taskbar__container'];

  if (percentageValue.value === 0) {
    classes.push('scuba-taskbar__container--empty');
  } else if (percentageValue.value === 100) {
    classes.push('scuba-taskbar__container--complete');
  } else {
    classes.push('scuba-taskbar__container--partial');
  }

  return classes;
});

const taskbarBarClasses = computed(() => {
  const classes = ['scuba-taskbar__bar'];

  if (percentageValue.value === 0) {
    classes.push('scuba-taskbar__bar--empty');
  } else if (percentageValue.value === 100) {
    classes.push('scuba-taskbar__bar--complete');
  } else {
    classes.push('scuba-taskbar__bar--partial');
  }

  return classes;
});

const taskbarBarStyle = computed(() => {
  if (percentageValue.value > 0 && percentageValue.value < 100) {
    return {
      '--progress-width': `${percentageValue.value}%`
    };
  }
  return {};
});
</script>

<style scoped>
.scuba-taskbar {
  display: flex;
  flex-direction: column;
  font-family: var(--type-font-family-body);
  width: 100%;
}

.scuba-taskbar__container {
  width: 100%;
  border-radius: var(--border-radius-rounded-sm);
  overflow: hidden;
}

.scuba-taskbar__bar {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 28px;
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  transition: all var(--transition-base);
  border-radius: var(--border-radius-rounded-sm);
  position: relative;
}

/* 0% - Empty state (light gray with border) */
.scuba-taskbar__bar--empty {
  background: transparent;
  border: var(--border-width-border-sm) solid var(--context-color-border-action);
  color: var(--context-color-text-primary);
}

/* 1-99% - Partial state (blue background grows proportionally) */
.scuba-taskbar__bar--partial {
  background: linear-gradient(
    to right,
    var(--context-color-surface-action) 0%,
    var(--context-color-surface-action) var(--progress-width),
    var(--context-color-surface-secondary) var(--progress-width),
    var(--context-color-surface-secondary) 100%
  );
  color: var(--context-color-text-primary);
}

/* 100% - Complete state (dark blue background) */
.scuba-taskbar__bar--complete {
  background: var(--primitives-color-blue-900);
  color: var(--primitives-color-white);
}
</style>
