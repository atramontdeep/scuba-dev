<template>
  <div :class="emptyClasses">
    <div v-if="icon" class="scuba-empty__icon">
      <component :is="icon" :size="iconSize" :weight="iconWeight" />
    </div>

    <div class="scuba-empty__content">
      <h3 v-if="title" class="scuba-empty__title">{{ title }}</h3>
      <p v-if="description" class="scuba-empty__description">{{ description }}</p>

      <slot />
    </div>

    <div v-if="$slots.action" class="scuba-empty__action">
      <slot name="action" />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  icon: {
    type: [Object, Function],
    default: null
  },
  iconSize: {
    type: Number,
    default: 64
  },
  iconWeight: {
    type: String,
    default: 'regular',
    validator: (value) => ['thin', 'light', 'regular', 'bold', 'fill'].includes(value)
  },
  title: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'compact'].includes(value)
  }
});

const emptyClasses = computed(() => {
  const classes = ['scuba-empty'];
  classes.push(`scuba-empty--${props.variant}`);
  return classes;
});
</script>

<style scoped>
.scuba-empty {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: var(--spacing-3xl) var(--spacing-xl);
  font-family: var(--type-font-family-body);
}

.scuba-empty--compact {
  padding: var(--spacing-xl) var(--spacing-md);
}

.scuba-empty__icon {
  color: var(--context-color-text-tertiary);
  margin-bottom: var(--spacing-lg);
  display: flex;
  align-items: center;
  justify-content: center;
}

.scuba-empty--compact .scuba-empty__icon {
  margin-bottom: var(--spacing-md);
}

.scuba-empty__content {
  max-width: 480px;
}

.scuba-empty__title {
  font-size: var(--type-font-size-xl);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
  margin: 0 0 var(--spacing-xs) 0;
  line-height: var(--type-line-height-tight);
}

.scuba-empty--compact .scuba-empty__title {
  font-size: var(--type-font-size-lg);
}

.scuba-empty__description {
  font-size: var(--type-font-size-base);
  color: var(--context-color-text-secondary);
  margin: 0;
  line-height: var(--type-line-height-normal);
}

.scuba-empty--compact .scuba-empty__description {
  font-size: var(--type-font-size-sm);
}

.scuba-empty__action {
  margin-top: var(--spacing-lg);
}

.scuba-empty--compact .scuba-empty__action {
  margin-top: var(--spacing-md);
}
</style>
