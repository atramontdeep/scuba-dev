<template>
  <header :class="headerClasses">
    <div v-if="showBreadcrumb && $slots.breadcrumb" class="scuba-header__breadcrumb">
      <slot name="breadcrumb" />
    </div>

    <div v-if="title || $slots.title" class="scuba-header__title-section">
      <h1 class="scuba-header__title">
        <slot name="title">{{ title }}</slot>
      </h1>

      <div v-if="showDescription && (description || $slots.description)" class="scuba-header__description">
        <slot name="description">{{ description }}</slot>
      </div>
    </div>
  </header>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: null
  },
  description: {
    type: String,
    default: null
  },
  showBreadcrumb: {
    type: Boolean,
    default: true
  },
  showDescription: {
    type: Boolean,
    default: true
  }
});

const headerClasses = computed(() => {
  return ['scuba-header'];
});
</script>

<style scoped>
.scuba-header {
  font-family: var(--type-font-family-body);
  padding: 40px;
}

.scuba-header__breadcrumb {
  margin-bottom: 8px;
}

.scuba-header__title-section {
  /* No additional margin needed */
}

.scuba-header__title {
  font-size: 32px;
  font-weight: 600;
  color: #111827;
  margin: 0 0 4px 0;
  line-height: 1.25;
}

.scuba-header__description {
  margin: 0;
  font-size: 16px;
  color: #6B7280;
  line-height: 1.5;
}
</style>
