<template>
  <div :class="dividerClasses" :role="role">
    <span v-if="$slots.default" class="scuba-divider__text">
      <slot />
    </span>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  orientation: {
    type: String,
    default: 'horizontal',
    validator: (value) => ['horizontal', 'vertical'].includes(value)
  },
  textAlign: {
    type: String,
    default: 'center',
    validator: (value) => ['left', 'center', 'right'].includes(value)
  },
  dashed: {
    type: Boolean,
    default: false
  }
});

const dividerClasses = computed(() => {
  const classes = ['scuba-divider'];
  classes.push(`scuba-divider--${props.orientation}`);

  if (props.dashed) {
    classes.push('scuba-divider--dashed');
  }

  if (props.textAlign && props.orientation === 'horizontal') {
    classes.push(`scuba-divider--text-${props.textAlign}`);
  }

  return classes;
});

const role = computed(() => {
  return props.orientation === 'vertical' ? 'separator' : 'separator';
});
</script>

<style scoped>
.scuba-divider {
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-sm);
  color: var(--context-color-text-secondary);
}

/* Horizontal variant */
.scuba-divider--horizontal {
  display: flex;
  align-items: center;
  margin: var(--spacing-md) 0;
  width: 100%;
}

.scuba-divider--horizontal::before,
.scuba-divider--horizontal::after {
  content: '';
  flex: 1;
  border-top: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-divider--horizontal.scuba-divider--dashed::before,
.scuba-divider--horizontal.scuba-divider--dashed::after {
  border-top-style: dashed;
}

/* Text alignment */
.scuba-divider--text-left::before {
  flex: 0 0 var(--spacing-md);
  max-width: var(--spacing-md);
}

.scuba-divider--text-center::before,
.scuba-divider--text-center::after {
  flex: 1;
}

.scuba-divider--text-right::after {
  flex: 0 0 var(--spacing-md);
  max-width: var(--spacing-md);
}

.scuba-divider__text {
  padding: 0 var(--spacing-xs);
  white-space: nowrap;
  font-weight: var(--type-font-weight-medium);
}

/* Vertical variant */
.scuba-divider--vertical {
  display: inline-block;
  width: var(--border-width-border-sm);
  height: 1em;
  margin: 0 var(--spacing-xs);
  vertical-align: middle;
  background: var(--context-color-border-secondary);
}

.scuba-divider--vertical.scuba-divider--dashed {
  background: repeating-linear-gradient(
    to bottom,
    var(--context-color-border-secondary) 0,
    var(--context-color-border-secondary) 4px,
    transparent 4px,
    transparent 8px
  );
}

/* When vertical divider has text, hide it */
.scuba-divider--vertical .scuba-divider__text {
  display: none;
}
</style>
