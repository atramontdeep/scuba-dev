<template>
  <div class="scuba-key-figure">
    <p class="scuba-key-figure__value">
      {{ value }}
      <span v-if="unit" class="scuba-key-figure__unit">{{ unit }}</span>
    </p>
    <p v-if="scope" class="scuba-key-figure__scope">
      <span class="scuba-key-figure__dot" :style="{ background: scope.color }" aria-hidden="true"></span>
      {{ scope.label }}
    </p>
    <p v-if="description || $slots.default" class="scuba-key-figure__description">
      <slot>{{ description }}</slot>
    </p>
    <dl v-if="items.length" class="scuba-key-figure__items">
      <div v-for="item in items" :key="item.label">
        <dt>{{ item.label }}</dt>
        <dd>{{ item.value }}</dd>
      </div>
    </dl>
  </div>
</template>

<script setup>
// O número principal de um resultado (28/10/2026, dos drawers de resultado e de revisão da jornada de carbono): o
// valor grande com a unidade, o escopo com a bolinha da cor dele, o que o número quer dizer e os números de apoio em
// pílulas brancas. O valor chega formatado.
defineProps({
  value: {
    type: [String, Number],
    required: true
  },
  unit: {
    type: String,
    default: ''
  },
  // { label, color }
  scope: {
    type: Object,
    default: null
  },
  description: {
    type: String,
    default: ''
  },
  // [{ label, value }]
  items: {
    type: Array,
    default: () => []
  }
});
</script>

<style scoped>
.scuba-key-figure {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-3xs);
  font-family: var(--type-font-family-body);
}

.scuba-key-figure p {
  margin: 0;
}

.scuba-key-figure__value {
  display: flex;
  align-items: baseline;
  gap: var(--spacing-3xs);
  font-size: 40px;
  font-weight: var(--type-font-weight-bold);
  line-height: 1.05;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
  color: var(--primitives-color-gray-900);
}

.scuba-key-figure__unit {
  font-size: var(--type-font-size-lg);
  font-weight: 500;
  letter-spacing: 0;
  color: var(--primitives-color-gray-700);
}

.scuba-key-figure__scope {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  font-size: var(--type-font-size-sm);
  color: var(--context-color-text-secondary);
}

.scuba-key-figure__dot {
  width: 10px;
  height: 10px;
  border-radius: var(--border-radius-rounded-full);
}

.scuba-key-figure__description {
  max-width: 60ch;
  margin-top: var(--spacing-3xs) !important;
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--primitives-color-gray-700);
}

.scuba-key-figure__items {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-3xs);
  margin: var(--spacing-xs) 0 0;
}

.scuba-key-figure__items div {
  padding: var(--spacing-3xs) var(--spacing-xs);
  border-radius: var(--border-radius-rounded-md);
  background: rgba(255, 255, 255, 0.8);
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.05);
}

.scuba-key-figure__items dt {
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-secondary);
}

.scuba-key-figure__items dd {
  margin: 0;
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  color: var(--primitives-color-gray-900);
}
</style>
