<template>
  <section :class="['scuba-status-header', `scuba-status-header--${tone}`, { 'scuba-status-header--split': $slots.aside }]">
    <div class="scuba-status-header__main">
      <span v-if="label" :class="['scuba-status-header__chip', { 'scuba-status-header__chip--spin': spin }]">
        <i v-if="icon" :class="['ph', icon]" aria-hidden="true"></i>
        {{ label }}
      </span>
      <slot />
    </div>
    <div v-if="$slots.aside" class="scuba-status-header__aside">
      <slot name="aside" />
    </div>
  </section>
</template>

<script setup>
// Topo de um drawer ou de uma página com a situação de algo (28/10/2026, dos drawers de resultado, de revisão e de
// situação da jornada de carbono): cartão branco num degradê leve no tom da situação, com o chip dela em cima e o
// conteúdo embaixo (texto, KeyFigure, ações). O slot "aside" abre uma segunda coluna, por exemplo com um StepList.
defineProps({
  tone: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'success', 'warning', 'neutral'].includes(value)
  },
  label: {
    type: String,
    default: ''
  },
  // Classe do Phosphor, como 'ph-seal-check'.
  icon: {
    type: String,
    default: ''
  },
  // Gira o ícone, para situações em andamento (calculando).
  spin: {
    type: Boolean,
    default: false
  }
});
</script>

<style scoped>
.scuba-status-header {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-lg);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-rounded-lg);
  background: var(--context-color-surface-primary);
  box-shadow: var(--shadow-card);
  font-family: var(--type-font-family-body);
}

.scuba-status-header--split {
  display: grid;
  grid-template-columns: minmax(0, 1fr) minmax(300px, 40%);
  align-items: center;
}

.scuba-status-header--info {
  background: linear-gradient(110deg, var(--semantic-color-primary-100) 0%, var(--context-color-surface-primary) 60%);
}

.scuba-status-header--success {
  background: linear-gradient(110deg, #ecfbf3 0%, var(--context-color-surface-primary) 60%);
}

.scuba-status-header--warning {
  background: linear-gradient(110deg, #fff6e5 0%, var(--context-color-surface-primary) 60%);
}

.scuba-status-header--neutral {
  background: linear-gradient(110deg, var(--semantic-color-neutral-200) 0%, var(--context-color-surface-primary) 60%);
}

.scuba-status-header__main {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-xs);
  min-width: 0;
}

.scuba-status-header__chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 3px var(--spacing-3xs);
  border-radius: var(--border-radius-rounded-pill);
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-semibold);
}

.scuba-status-header--info .scuba-status-header__chip {
  background: var(--primitives-color-blue-200);
  color: var(--primitives-color-blue-700);
}

.scuba-status-header--success .scuba-status-header__chip {
  background: var(--semantic-color-status-approved);
  color: var(--semantic-color-status-approved-text);
}

.scuba-status-header--warning .scuba-status-header__chip {
  background: var(--primitives-color-orange-200);
  color: var(--primitives-color-orange-900);
}

.scuba-status-header--neutral .scuba-status-header__chip {
  background: var(--semantic-color-neutral-200);
  color: var(--semantic-color-neutral-700);
}

.scuba-status-header__chip--spin i {
  animation: scuba-status-header-spin 1.4s linear infinite;
}

@keyframes scuba-status-header-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (max-width: 900px) {
  .scuba-status-header--split {
    grid-template-columns: minmax(0, 1fr);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scuba-status-header__chip--spin i {
    animation: none;
  }
}
</style>
