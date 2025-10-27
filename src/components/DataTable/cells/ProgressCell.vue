<!-- src/components/DataTable/cells/ProgressCell.vue -->
<script setup>
defineProps({
  value: { type: Number, required: true },  // 0..100
  label: { type: String, default: '' }       // ex: "21/200"
});
</script>

<template>
  <div class="dt-progress">
    <div class="dt-progress__bar">
      <div class="dt-progress__fill" :style="{ width: `${Math.max(0, Math.min(100, value))}%` }" />
    </div>
    <span class="dt-progress__text">{{ Math.round(value) }}% <span v-if="label">({{ label }})</span></span>
  </div>
</template>

<style scoped>
.dt-progress {
  display: inline-flex;
  align-items: center;
  gap: 8px;
}
.dt-progress__bar {
  width: 220px;
  height: 36px;
  border-radius: 10px;
  background: var(--context-color-surface-action, rgba(31,111,235,0.08));
  border: 1px solid var(--context-color-border-secondary, #e2e4e8);
  overflow: hidden;
}
.dt-progress__fill {
  height: 100%;
  background: var(--context-color-icon-action, #1f6feb);
}
.dt-progress__text {
  color: var(--context-color-text-primary, #1f2328);
  font: 500 14px/1 var(--font-family-primary, system-ui);
}
</style>