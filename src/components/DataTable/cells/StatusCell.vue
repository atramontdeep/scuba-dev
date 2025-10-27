<!-- src/components/DataTable/cells/StatusCell.vue -->
<script setup>
const props = defineProps({
  status: { 
    type: String, 
    required: true,
    validator: (v) => [
      'not-started',
      'in-progress', 
      'ready-for-approval',
      'audited',
      'about-to-expire',
      'expired',
      'completed',
      'waiting-response',
      'responded',
      'validating',
      'adjusting',
      'validated'
    ].includes(v)
  }
});

const statusConfig = {
  'not-started': { label: 'Não iniciada', color: '#D1D5DB' },
  'in-progress': { label: 'Em andamento', color: '#60A5FA' },
  'ready-for-approval': { label: 'Pronta para aprovação', color: '#38BDF8' },
  'audited': { label: 'Auditada', color: '#3B82F6' },
  'about-to-expire': { label: 'A expirar', color: '#FB923C' },
  'expired': { label: 'Expirada', color: '#EF4444' },
  'completed': { label: 'Concluída', color: '#22C55E' },
  'waiting-response': { label: 'Aguardando resposta', color: '#60A5FA' },
  'responded': { label: 'Respondido', color: '#38BDF8' },
  'validating': { label: 'Em validação', color: '#C084FC' },
  'adjusting': { label: 'Em ajuste', color: '#3B82F6' },
  'validated': { label: 'Validado', color: '#10B981' }
};

const config = statusConfig[props.status];
</script>

<template>
  <span class="status-badge" :style="{ '--status-color': config.color }">
    <span class="status-dot"></span>
    {{ config.label }}
  </span>
</template>

<style scoped>
.status-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 6px 12px;
  border-radius: 6px;
  background: rgba(255, 255, 255, 0.8);
  border: 1px solid rgba(0, 0, 0, 0.08);
  font-family: 'Poppins', sans-serif;
  font-size: 13px;
  font-weight: 500;
  color: #1F2937;
  white-space: nowrap;
}

.status-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: var(--status-color);
  flex-shrink: 0;
}
</style>