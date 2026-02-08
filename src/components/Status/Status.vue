<template>
  <span :class="statusClasses">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'answering',
    validator: (value) => [
      'answering', 'answered', 'validating', 'validated',
      'adjusting', 'adjusting-auditing', 'auditing', 'audited',
      'approved', 'expired'
    ].includes(value)
  }
});

const statusClasses = computed(() => {
  const classes = ['scuba-status'];
  classes.push(`scuba-status--${props.variant}`);
  return classes;
});
</script>

<style scoped>
.scuba-status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4xs) var(--spacing-2xs);
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  border-radius: var(--border-radius-rounded-pill);
  white-space: nowrap;
}

/* Em resposta */
.scuba-status--answering {
  background: var(--semantic-color-status-answering);
  color: var(--semantic-color-status-answering-text);
}

/* Respondido */
.scuba-status--answered {
  background: var(--semantic-color-status-answered);
  color: var(--semantic-color-status-answered-text);
}

/* Em validação */
.scuba-status--validating {
  background: var(--semantic-color-status-validating);
  color: var(--semantic-color-status-validating-text);
}

/* Validado */
.scuba-status--validated {
  background: var(--semantic-color-status-validated);
  color: var(--semantic-color-status-validated-text);
}

/* Em ajuste */
.scuba-status--adjusting {
  background: var(--semantic-color-status-adjusting);
  color: var(--semantic-color-status-adjusting-text);
}

/* Em ajuste de auditoria */
.scuba-status--adjusting-auditing {
  background: var(--semantic-color-status-adjusting-auditing);
  color: var(--semantic-color-status-adjusting-auditing-text);
}

/* Em auditoria */
.scuba-status--auditing {
  background: var(--semantic-color-status-auditing);
  color: var(--semantic-color-status-auditing-text);
}

/* Auditado */
.scuba-status--audited {
  background: var(--semantic-color-status-audited);
  color: var(--semantic-color-status-audited-text);
}

/* Aprovado */
.scuba-status--approved {
  background: var(--semantic-color-status-approved);
  color: var(--semantic-color-status-approved-text);
}

/* Expirada */
.scuba-status--expired {
  background: var(--semantic-color-status-expired);
  color: var(--semantic-color-status-expired-text);
}
</style>
