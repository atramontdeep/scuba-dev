<!-- src/components/DataTable/cells/StatusCell.vue -->
<script setup>
/**
 * Simple status pill: success | warning | error | info
 */
defineProps({
  status: { type: String, required: true, validator: (v) => ['success', 'warning', 'error', 'info'].includes(v) },
  label: { type: String, default: '' }
});
</script>

<template>
  <span class="dt-status" :data-variant="status">
    {{ label ?? status }}
  </span>
</template>

<style scoped>
.dt-status {
  display: inline-flex;
  align-items: center;
  padding: 4px 10px;
  border-radius: 9999px;
  font: 600 12px/1 var(--font-family-primary, system-ui);
  border: 1px solid transparent;
  color: var(--context-color-text-primary, #1f2328);
  background: var(--context-color-surface-secondary, #f2f3f5);
}
.dt-status[data-variant="success"] {
  background: var(--context-color-surface-success, #d1f0d6);
  color: var(--semantic-color-success/dark, #116329);
}
.dt-status[data-variant="warning"] {
  background: var(--context-color-surface-warning, #ffedd1);
  color: var(--semantic-color-warning/dark, #8a4b00);
}
.dt-status[data-variant="error"] {
  background: var(--context-color-surface-error, #ffe1e1);
  color: var(--semantic-color-error/dark, #a40e26);
}
.dt-status[data-variant="info"] {
  background: var(--context-color-surface-info, #dbedff);
  color: var(--semantic-color-info/dark, #1158c7);
}
</style>