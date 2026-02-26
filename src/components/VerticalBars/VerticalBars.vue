<template>
  <div class="scuba-vertical-bars">
    <div
      v-for="(item, index) in items"
      :key="index"
      class="scuba-vertical-bars__column"
    >
      <div
        class="scuba-vertical-bars__bar"
        :style="{
          height: getBarHeight(item) + 'px',
          backgroundColor: item.color,
        }"
      >
        <span
          class="scuba-vertical-bars__value"
          :class="{ 'scuba-vertical-bars__value--floating': !isInline(item) }"
          :style="{ color: item.textColor }"
        >
          {{ item.value }}
        </span>
      </div>
      <span class="scuba-vertical-bars__label">{{ item.label }}</span>
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
  align-items: flex-end;
  gap: var(--scale-200);
  width: 100%;
}

.scuba-vertical-bars__column {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: var(--scale-100);
  min-width: 0;
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

.scuba-vertical-bars__value--floating {
  position: absolute;
  bottom: calc(100% + var(--scale-100));
  left: var(--scale-200);
}

.scuba-vertical-bars__label {
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
  width: 100%;
  word-break: break-word;
}
</style>
