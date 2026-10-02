<template>
  <div :class="cardClasses" @click="handleClick">
    <!-- Combined: illustração + título/subtítulo + botão de ação -->
    <template v-if="type === 'combined'">
      <div class="scuba-card__media">
        <slot name="media"></slot>
      </div>
      <div class="scuba-card__content">
        <div class="scuba-card__info">
          <slot name="icon">
            <i v-if="icon" :class="iconClasses" aria-hidden="true"></i>
          </slot>
          <h3 class="scuba-card__title scuba-card__title--combined">{{ title }}</h3>
          <p class="scuba-card__subtitle scuba-card__subtitle--combined">{{ subtitle }}</p>
        </div>
        <button type="button" class="scuba-card__action" @click.stop="handleActionClick">
          <span>{{ label }}</span>
          <i class="ph ph-arrow-right" aria-hidden="true"></i>
        </button>
      </div>
    </template>

    <!-- Helper: ícone em pill + badge + título/subtítulo -->
    <template v-else-if="type === 'helper'">
      <div class="scuba-card__header">
        <div v-if="icon" class="scuba-card__icon-pill">
          <slot name="icon">
            <i :class="iconClasses" aria-hidden="true"></i>
          </slot>
        </div>
        <span v-if="badge" class="scuba-card__badge">{{ badgeCount }}</span>
      </div>
      <div class="scuba-card__helper-content">
        <p class="scuba-card__title scuba-card__title--helper">{{ title }}</p>
        <p class="scuba-card__subtitle scuba-card__subtitle--helper">{{ subtitle }}</p>
      </div>
    </template>

    <!-- Number: título + ícone + número em destaque -->
    <template v-else-if="type === 'number'">
      <div class="scuba-card__section scuba-card__section--number">
        <div class="scuba-card__header scuba-card__header--number">
          <p class="scuba-card__title scuba-card__title--number">{{ title }}</p>
          <div v-if="icon" class="scuba-card__icon-circle">
            <slot name="icon">
              <i :class="iconClasses" aria-hidden="true"></i>
            </slot>
          </div>
        </div>
        <div class="scuba-card__number-content">
          <p class="scuba-card__number">{{ number }}</p>
          <p class="scuba-card__subtitle scuba-card__subtitle--number">{{ subtitle }}</p>
        </div>
      </div>
    </template>

    <!-- Default: duas seções empilhadas, título em cima e subtítulo embaixo -->
    <template v-else-if="type === 'default'">
      <div class="scuba-card__section scuba-card__section--top">
        <p class="scuba-card__title scuba-card__title--default">{{ title }}</p>
      </div>
      <div class="scuba-card__section scuba-card__section--bottom">
        <p class="scuba-card__subtitle scuba-card__subtitle--default">{{ subtitle }}</p>
      </div>
    </template>

    <!-- Scope: indicador colorido + chip de percentual + número + hint -->
    <template v-else-if="type === 'scope'">
      <div class="scuba-card__scope-row">
        <div class="scuba-card__indicator" :style="{ background: color }"></div>
        <div class="scuba-card__scope-content">
          <div class="scuba-card__scope-header">
            <div class="scuba-card__scope-titles">
              <p class="scuba-card__title scuba-card__title--scope">{{ title }}</p>
              <p class="scuba-card__subtitle scuba-card__subtitle--scope">{{ subtitle }}</p>
            </div>
            <span class="scuba-card__chip" :style="{ background: color }">{{ percentage }}</span>
          </div>
          <p class="scuba-card__number scuba-card__number--scope">{{ number }}</p>
          <p class="scuba-card__hint">{{ hint }}</p>
        </div>
      </div>
    </template>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const DEFAULT_ICON_BY_TYPE = {
  combined: 'ph-globe-hemisphere-west',
  helper: 'ph-globe-hemisphere-west',
  number: 'ph-chart-pie',
};

const props = defineProps({
  type: {
    type: String,
    default: 'combined',
    validator: (value) => ['combined', 'helper', 'default', 'number', 'scope'].includes(value)
  },
  title: {
    type: String,
    default: 'Title'
  },
  subtitle: {
    type: String,
    default: 'Subtitle'
  },
  icon: {
    type: Boolean,
    default: true
  },
  iconClass: {
    type: String,
    default: ''
  },
  badge: {
    type: Boolean,
    default: true
  },
  badgeCount: {
    type: [String, Number],
    default: 1
  },
  label: {
    type: String,
    default: 'Label'
  },
  number: {
    type: [String, Number],
    default: '142'
  },
  color: {
    type: String,
    default: 'var(--primitives-color-azure)'
  },
  percentage: {
    type: [String, Number],
    default: '0%'
  },
  hint: {
    type: String,
    default: 'Hint'
  },
  clickable: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click', 'action-click']);

const iconClasses = computed(() => {
  const iconName = props.iconClass || DEFAULT_ICON_BY_TYPE[props.type] || 'ph-globe-hemisphere-west';
  return `ph ${iconName} scuba-card__icon`;
});

const cardClasses = computed(() => [
  'scuba-card',
  `scuba-card--${props.type}`,
  {
    'scuba-card--clickable': props.clickable
  }
]);

const handleClick = (event) => {
  if (props.clickable) {
    emit('click', event);
  }
};

const handleActionClick = (event) => {
  emit('action-click', event);
};
</script>

<style scoped>
.scuba-card {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  position: relative;
  font-family: var(--type-font-family-body);
  background: var(--context-color-surface-primary);
  transition: box-shadow var(--transition-fast), background var(--transition-fast);
}

.scuba-card--clickable {
  cursor: pointer;
}

.scuba-card__title {
  margin: 0;
  color: var(--context-color-text-primary);
}

.scuba-card__subtitle {
  margin: 0;
  color: var(--context-color-text-secondary);
}

/* ===== Combined ===== */
.scuba-card--combined {
  width: 333px;
  gap: var(--spacing-sm);
  padding-bottom: var(--spacing-xs);
  border-radius: var(--border-radius-rounded-lg); /* 16px, "rounded-md" no Figma */
  overflow: hidden;
  box-shadow: 0 1px 3px rgba(194, 194, 194, 0.1), 0 6px 6px rgba(194, 194, 194, 0.09);
}

.scuba-card--combined.scuba-card--clickable:hover {
  box-shadow: 0 4px 8px rgba(148, 148, 148, 0.1), 0 15px 15px rgba(148, 148, 148, 0.09);
}

.scuba-card__media {
  width: 100%;
  min-height: 141px;
  background: var(--context-color-surface-action);
  border-bottom: 2px solid var(--context-color-surface-action);
}

.scuba-card__content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-md);
  width: 100%;
  padding: 0 var(--spacing-sm);
}

.scuba-card__info {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-3xs);
  width: 100%;
}

.scuba-card__icon {
  font-size: var(--scale-700); /* 40px */
  line-height: 1;
  color: var(--context-color-text-primary);
}

.scuba-card__title--combined {
  font-size: var(--type-font-size-xl);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-tight);
}

.scuba-card__subtitle--combined {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
}

.scuba-card__action {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-ga-2);
  padding: var(--spacing-py-3) 0;
  background: none;
  border: none;
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
  cursor: pointer;
}

/* ===== Helper ===== */
.scuba-card--helper {
  width: 97px;
  gap: var(--spacing-3xs);
  padding: var(--spacing-xs);
  background: var(--context-color-surface-secondary);
  border-radius: var(--border-radius-rounded-xl); /* 20px, "rounded-lg" no Figma */
}

.scuba-card--helper.scuba-card--clickable:hover {
  background: var(--context-color-surface-secondary);
  box-shadow: 0 4px 4px rgba(148, 148, 148, 0.1), 0 15px 7.5px rgba(148, 148, 148, 0.09);
}

.scuba-card__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}

.scuba-card__icon-pill {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-3xs);
  background: var(--context-color-surface-action);
  border-radius: var(--border-radius-rounded-pill);
}

.scuba-card--helper .scuba-card__icon {
  font-size: var(--type-font-size-xl); /* 20px */
}

.scuba-card__badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-py-1) var(--spacing-2xs);
  background: var(--primitives-color-red-600);
  border-radius: var(--border-radius-rounded-xl); /* 20px, "rounded-lg" no Figma */
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-tight);
  color: var(--context-color-text-inverted);
}

.scuba-card__helper-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 100%;
}

.scuba-card__title--helper {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
}

.scuba-card__subtitle--helper {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
}

/* ===== Number ===== */
.scuba-card--number {
  width: 274px;
  background: var(--context-color-surface-secondary);
  border-radius: var(--border-radius-rounded-xl); /* 20px, "rounded-lg" no Figma */
}

.scuba-card--number.scuba-card--clickable:hover {
  box-shadow: 0 1px 3px rgba(194, 194, 194, 0.1), 0 6px 6px rgba(194, 194, 194, 0.09);
}

.scuba-card__section--number {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-ga-4);
  width: 100%;
  padding: var(--spacing-py-6) var(--spacing-px-6);
}

.scuba-card__header--number {
  width: 100%;
}

.scuba-card__title--number {
  flex: 1;
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

.scuba-card__icon-circle {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  padding: var(--spacing-3xs);
  background: var(--context-color-surface-action);
  border-radius: var(--border-radius-rounded-md); /* 12px, "rounded-sm" no Figma */
}

.scuba-card--number .scuba-card__icon {
  font-size: var(--type-font-size-xl); /* 20px */
}

.scuba-card__number-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-ga-2);
  width: 100%;
}

.scuba-card__number {
  margin: 0;
  font-size: var(--type-font-size-3xl); /* 30px, aprox. ao 32px do design */
  font-weight: var(--type-font-weight-bold);
  line-height: var(--type-line-height-tight);
  color: var(--context-color-text-primary);
}

.scuba-card__subtitle--number {
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-tight);
  color: var(--context-color-text-primary);
}

/* ===== Default ===== */
.scuba-card--default {
  width: 101px;
  border: 1px solid var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded);
}

.scuba-card--default.scuba-card--clickable:hover {
  box-shadow: 0 1px 1.5px rgba(194, 194, 194, 0.1), 0 6px 3px rgba(194, 194, 194, 0.09);
}

.scuba-card__section {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
}

.scuba-card--default .scuba-card__section--top {
  padding: var(--spacing-ga-6);
  border-bottom: 1px solid var(--context-color-border-secondary);
}

.scuba-card--default .scuba-card__section--bottom {
  padding: var(--spacing-ga-6);
}

.scuba-card__title--default {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
}

.scuba-card__subtitle--default {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
}

/* ===== Scope ===== */
.scuba-card--scope {
  width: 100%;
  max-width: 333px;
  background: var(--context-color-surface-secondary);
  border-radius: var(--border-radius-rounded-lg); /* 16px, "rounded-md" no Figma */
  overflow: hidden;
}

.scuba-card--scope.scuba-card--clickable:hover {
  box-shadow: 0 1px 1.5px rgba(194, 194, 194, 0.1), 0 6px 3px rgba(194, 194, 194, 0.09);
}

.scuba-card__scope-row {
  display: flex;
  align-items: stretch;
  gap: var(--spacing-ga-3);
  width: 100%;
  padding: var(--spacing-px-4) var(--spacing-py-6);
}

.scuba-card__indicator {
  flex-shrink: 0;
  width: var(--spacing-4xs);
  border-radius: 4px;
}

.scuba-card__scope-content {
  display: flex;
  flex-direction: column;
  flex: 1;
  min-width: 0;
  gap: var(--spacing-3xs);
}

.scuba-card__scope-header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacing-3xs);
  width: 100%;
}

.scuba-card__scope-titles {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-ga-2);
}

.scuba-card__title--scope {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
}

.scuba-card__subtitle--scope {
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-tight);
}

.scuba-card__chip {
  flex-shrink: 0;
  padding: var(--spacing-4xs) var(--spacing-3xs);
  border-radius: var(--border-radius-rounded-full);
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-tight);
  color: var(--context-color-text-primary);
}

.scuba-card__number--scope {
  font-size: var(--type-font-size-2xl); /* 24px */
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-tight);
  color: var(--context-color-text-primary);
}

.scuba-card__hint {
  margin: 0;
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-tight);
  color: var(--context-color-text-primary);
}
</style>
