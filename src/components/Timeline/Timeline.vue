<template>
  <div class="scuba-timeline">
    <div class="scuba-timeline__header">
      <h2 class="scuba-timeline__title">{{ title }}</h2>
      <a
        v-if="linkText && linkHref"
        :href="linkHref"
        class="scuba-timeline__link"
      >
        {{ linkText }}
      </a>
    </div>

    <div class="scuba-timeline__content">
      <div
        v-for="(group, index) in timelineGroups"
        :key="index"
        class="scuba-timeline__group"
      >
        <h3 class="scuba-timeline__date">{{ group.date }}</h3>
        <div class="scuba-timeline__items">
          <slot :name="`group-${index}`" :group="group">
            <CardHistory
              v-for="(item, itemIndex) in group.items"
              :key="itemIndex"
              :status="item.status"
              :userName="item.userName"
              :indicatorItem="item.indicatorItem"
            />
          </slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';
import CardHistory from '../CardHistory/CardHistory.vue';

const props = defineProps({
  title: {
    type: String,
    default: 'Últimas atividades'
  },
  linkText: {
    type: String,
    default: ''
  },
  linkHref: {
    type: String,
    default: '#'
  },
  timelineGroups: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(group =>
        typeof group === 'object' &&
        'date' in group &&
        'items' in group &&
        Array.isArray(group.items)
      );
    }
  }
});
</script>

<style scoped>
.scuba-timeline {
  display: flex;
  flex-direction: column;
  width: 344px;
  height: 100%;
  font-family: var(--type-font-family-body);
  background: var(--context-color-surface-primary);
}

.scuba-timeline__header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: var(--spacing-md) var(--spacing-md) var(--spacing-sm);
  flex-shrink: 0;
}

.scuba-timeline__title {
  font-size: var(--type-font-size-xl);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
  margin: 0;
}

.scuba-timeline__link {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
  color: var(--semantic-color-primary-600);
  text-decoration: underline;
  transition: color var(--transition-base);
}

.scuba-timeline__link:hover {
  color: var(--semantic-color-primary-700);
}

.scuba-timeline__content {
  flex: 1;
  overflow-y: auto;
  padding: 0 var(--spacing-md) var(--spacing-md);
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
}

.scuba-timeline__content::-webkit-scrollbar {
  width: 6px;
}

.scuba-timeline__content::-webkit-scrollbar-track {
  background: var(--context-color-surface-secondary);
  border-radius: var(--border-radius-rounded-pill);
}

.scuba-timeline__content::-webkit-scrollbar-thumb {
  background: var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-pill);
}

.scuba-timeline__content::-webkit-scrollbar-thumb:hover {
  background: var(--context-color-border-action);
}

.scuba-timeline__group {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.scuba-timeline__date {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-medium);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-secondary);
  margin: 0;
}

.scuba-timeline__items {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}
</style>
