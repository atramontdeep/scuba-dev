<!-- src/components/DataTable/cells/ProgressCell.vue -->
<script setup>
import { computed } from 'vue';

const props = defineProps({
  value: { type: Number, required: true },  // 0..100
  label: { type: String, default: '' }      // ex: "21/200"
});

const clampedValue = computed(() => Math.max(0, Math.min(100, props.value)));

const progressState = computed(() => {
  if (clampedValue.value === 0) return 'empty';
  if (clampedValue.value === 100) return 'complete';
  return 'partial';
});

const stateConfig = {
  empty: {
    barColor: '#FFFFFF',
    fillColor: 'transparent',
    textColor: '#6B7280',
    borderColor: '#E5E7EB'
  },
  partial: {
    barColor: '#DBEAFE',
    fillColor: '#60A5FA',
    textColor: '#1F2937',
    borderColor: '#93C5FD'
  },
  complete: {
    barColor: '#1E40AF',
    fillColor: '#1E40AF',
    textColor: '#FFFFFF',
    borderColor: '#1E40AF'
  }
};

const config = computed(() => stateConfig[progressState.value]);
</script>

<template>
  <div class="progress-cell">
    <div 
      class="progress-bar"
      :class="`progress-bar--${progressState}`"
      :style="{
        '--bar-bg': config.barColor,
        '--fill-bg': config.fillColor,
        '--border-color': config.borderColor
      }"
    >
      <div class="progress-fill" :style="{ width: `${clampedValue}%` }"></div>
      <span 
        class="progress-text"
        :style="{ color: config.textColor }"
      >
        {{ Math.round(clampedValue) }}% <span v-if="label" class="progress-label">({{ label }})</span>
      </span>
    </div>
  </div>
</template>

<style scoped>
.progress-cell {
  display: inline-flex;
  align-items: center;
}

.progress-bar {
  position: relative;
  width: 220px;
  height: 36px;
  border-radius: 10px;
  background: var(--bar-bg);
  border: 1px solid var(--border-color);
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
}

.progress-fill {
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  background: var(--fill-bg);
  transition: width 0.3s ease;
  border-radius: 10px;
}

.progress-text {
  position: relative;
  z-index: 1;
  font-family: 'Poppins', sans-serif;
  font-size: 14px;
  font-weight: 600;
}

.progress-label {
  font-weight: 400;
}
</style>