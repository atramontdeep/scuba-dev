<template>
  <div class="scuba-vertical-bars">
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
  },
  maxHeight: {
    type: Number,
    default: 120,
  },
  minHeightForInlineLabel: {
    type: Number,
    default: 36,
  },
});

const maxValue = computed(() => Math.max(...props.items.map((i) => i.value)));

function getBarHeight(item) {
  return Math.round((item.value / maxValue.value) * props.maxHeight);
}

function isInline(item) {
  return getBarHeight(item) >= props.minHeightForInlineLabel;
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
</style>
