<template>
  <div :class="cardClasses">
    <div v-if="$slots.header || header" class="scuba-card__header">
      <slot name="header">
        <h3 v-if="header" class="scuba-card__title">{{ header }}</h3>
      </slot>
    </div>

    <div class="scuba-card__body">
      <slot></slot>
    </div>

    <div v-if="$slots.footer" class="scuba-card__footer">
      <slot name="footer"></slot>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  header: {
    type: String,
    default: ''
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'outlined', 'elevated'].includes(value)
  },
  padding: {
    type: String,
    default: 'md',
    validator: (value) => ['none', 'sm', 'md', 'lg'].includes(value)
  },
  hoverable: {
    type: Boolean,
    default: false
  }
});

const cardClasses = computed(() => {
  const classes = ['scuba-card'];
  classes.push('scuba-card--' + props.variant);
  classes.push('scuba-card--padding-' + props.padding);

  if (props.hoverable) {
    classes.push('scuba-card--hoverable');
  }

  return classes;
});
</script>

<style scoped>
.scuba-card {
  display: flex;
  flex-direction: column;
  font-family: var(--type-font-family-body);
  border-radius: var(--border-radius-rounded);
  transition: all var(--transition-base);
  background: var(--context-color-surface-primary);
}

.scuba-card--default {
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-card--outlined {
  border: var(--border-width-border-md) solid var(--context-color-border-secondary);
}

.scuba-card--elevated {
  border: none;
  box-shadow: var(--shadow-md);
}

.scuba-card--hoverable {
  cursor: pointer;
}

.scuba-card--hoverable:hover {
  box-shadow: var(--shadow-lg);
  transform: translateY(-2px);
}

.scuba-card--padding-none .scuba-card__header,
.scuba-card--padding-none .scuba-card__body,
.scuba-card--padding-none .scuba-card__footer {
  padding: 0;
}

.scuba-card--padding-sm .scuba-card__header,
.scuba-card--padding-sm .scuba-card__body,
.scuba-card--padding-sm .scuba-card__footer {
  padding: var(--spacing-xs);
}

.scuba-card--padding-md .scuba-card__header,
.scuba-card--padding-md .scuba-card__body,
.scuba-card--padding-md .scuba-card__footer {
  padding: var(--spacing-md);
}

.scuba-card--padding-lg .scuba-card__header,
.scuba-card--padding-lg .scuba-card__body,
.scuba-card--padding-lg .scuba-card__footer {
  padding: var(--spacing-lg);
}

.scuba-card__header {
  border-bottom: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-card__title {
  margin: 0;
  font-size: var(--type-font-size-lg);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
}

.scuba-card__body {
  flex: 1;
  font-size: var(--type-font-size-base);
  color: var(--context-color-text-primary);
  line-height: var(--type-line-height-normal);
}

.scuba-card__footer {
  border-top: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}
</style>
