<template>
  <div v-if="variant === 'track'" class="scuba-vertical-bars-track" role="img" :aria-label="ariaLabel">
    <div
      v-for="(item, index) in items"
      :key="index"
      :class="['scuba-vertical-bars-track__col', { 'scuba-vertical-bars-track__col--empty': item.empty }]"
    >
      <span class="scuba-vertical-bars-track__value">{{ item.empty ? emptyLabel : (item.display ?? item.value) }}</span>
      <span class="scuba-vertical-bars-track__track" :style="{ height: `${maxHeight}px` }">
        <span
          class="scuba-vertical-bars-track__fill"
          :style="{ height: item.empty ? '0' : `${Math.max(trackPct(item), 3)}%`, background: item.color || color }"
        ></span>
      </span>
      <span class="scuba-vertical-bars-track__label">{{ item.label }}</span>
    </div>
  </div>

  <div v-else class="scuba-vertical-bars">
    <!-- Row 1: bars, always bottom-aligned regardless of label height -->
    <div class="scuba-vertical-bars__bars-row">
      <div
        v-for="(item, index) in items"
        :key="index"
        class="scuba-vertical-bars__bar-wrapper"
      >
        <div
          class="scuba-vertical-bars__bar"
          :style="{
            height: getBarHeight(item) + 'px',
            backgroundColor: item.color,
          }"
        >
          <span
            v-if="isInline(item)"
            class="scuba-vertical-bars__value"
            :style="{ color: item.textColor }"
          >
            {{ item.value }}
          </span>
          <span
            v-else
            class="scuba-vertical-bars__value scuba-vertical-bars__value--floating"
          >
            {{ item.value }}
          </span>
        </div>
      </div>
    </div>

    <!-- Row 2: labels, independent from bar heights -->
    <div class="scuba-vertical-bars__labels-row">
      <span
        v-for="(item, index) in items"
        :key="index"
        class="scuba-vertical-bars__label"
      >
        {{ item.label }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // Each item: { label: String, value: Number, color: String, textColor: String }
    // Track: { label, value, display?, color?, empty? }
  },
  maxHeight: {
    type: Number,
    default: 120,
  },
  minHeightForInlineLabel: {
    type: Number,
    default: 36,
  },
  // 'track' (28/10/2026, da jornada de carbono): cada barra num trilho no fundo da página, com o valor em cima e o
  // rótulo embaixo; mês sem dado fica com emptyLabel e o trilho vazio. color vale para as barras sem cor própria.
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'track'].includes(value),
  },
  color: {
    type: String,
    default: 'var(--semantic-color-primary-500)',
  },
  emptyLabel: {
    type: String,
    default: 'sem dados',
  },
  ariaLabel: {
    type: String,
    default: '',
  },
});

const maxValue = computed(() => Math.max(...props.items.map((i) => i.value)));

function getBarHeight(item) {
  return Math.round((item.value / maxValue.value) * props.maxHeight);
}

function isInline(item) {
  return getBarHeight(item) >= props.minHeightForInlineLabel;
}

function trackPct(item) {
  const max = Math.max(...props.items.filter((i) => !i.empty).map((i) => i.value), 0);
  return max > 0 ? (item.value / max) * 100 : 0;
}
</script>

<style scoped>
.scuba-vertical-bars {
  display: flex;
  flex-direction: column;
  gap: var(--scale-100);
  width: 100%;
}

/* Row 1: bars aligned at the bottom */
.scuba-vertical-bars__bars-row {
  display: flex;
  align-items: flex-end;
  gap: var(--scale-200);
}

.scuba-vertical-bars__bar-wrapper {
  flex: 1;
  min-width: 0;
  position: relative;
}

.scuba-vertical-bars__bar {
  position: relative;
  border-radius: var(--border-radius-rounded);
  padding: var(--scale-200);
  width: 100%;
  box-sizing: border-box;
  display: flex;
  align-items: flex-start;
}

.scuba-vertical-bars__value {
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  white-space: nowrap;
}

/* When bar is too small: float above using page text color, never item.textColor */
.scuba-vertical-bars__value--floating {
  position: absolute;
  bottom: calc(100% + var(--scale-100));
  left: var(--scale-200);
  color: var(--context-color-text-primary);
}

/* Row 2: labels below the bars, widths mirror the bar wrappers */
.scuba-vertical-bars__labels-row {
  display: flex;
  gap: var(--scale-200);
}

.scuba-vertical-bars__label {
  flex: 1;
  min-width: 0;
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
  word-break: break-word;
}

/* Track */
.scuba-vertical-bars-track {
  display: grid;
  grid-auto-columns: minmax(0, 1fr);
  grid-auto-flow: column;
  align-items: end;
  gap: var(--spacing-xs);
  font-family: var(--type-font-family-body);
}

.scuba-vertical-bars-track__col {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: 6px;
  min-width: 0;
  text-align: center;
}

.scuba-vertical-bars-track__track {
  display: flex;
  align-items: flex-end;
  border-radius: var(--border-radius-rounded);
  background: var(--context-color-surface-page);
  overflow: hidden;
}

.scuba-vertical-bars-track__fill {
  display: block;
  width: 100%;
  border-radius: var(--border-radius-rounded) var(--border-radius-rounded) 0 0;
}

.scuba-vertical-bars-track__value {
  overflow: hidden;
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-semibold);
  font-variant-numeric: tabular-nums;
  white-space: nowrap;
  text-overflow: ellipsis;
  color: var(--primitives-color-gray-900);
}

.scuba-vertical-bars-track__col--empty .scuba-vertical-bars-track__value {
  font-weight: var(--type-font-weight-regular);
  color: var(--context-color-text-secondary);
}

.scuba-vertical-bars-track__label {
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-secondary);
}
</style>
