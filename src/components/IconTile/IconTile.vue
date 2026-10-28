<template>
  <span :class="tileClasses" aria-hidden="true">
    <slot><i :class="['ph', icon]"></i></slot>
  </span>
</template>

<script setup>
// Ícone num quadrado de cantos redondos (ou num círculo), ao lado de um título ou de um texto (28/10/2026, da jornada
// de carbono: fatos do drawer de situação, passos do resultado, cabeçalhos de seção). Decorativo: o texto ao lado diz o
// que é. O slot troca o ícone, por exemplo pelo Dipy.
import { computed } from 'vue';

const props = defineProps({
  // Classe do Phosphor, como 'ph-database'.
  icon: {
    type: String,
    default: ''
  },
  // sm 28px, md 32px, lg 36px, xl 44px.
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl'].includes(value)
  },
  tone: {
    type: String,
    default: 'info',
    validator: (value) => ['info', 'neutral', 'success', 'warning', 'error', 'dark', 'ai', 'white'].includes(value)
  },
  shape: {
    type: String,
    default: 'square',
    validator: (value) => ['square', 'circle'].includes(value)
  }
});

const tileClasses = computed(() => [
  'scuba-icon-tile',
  `scuba-icon-tile--${props.size}`,
  `scuba-icon-tile--${props.tone}`,
  `scuba-icon-tile--${props.shape}`
]);
</script>

<style scoped>
.scuba-icon-tile {
  display: inline-grid;
  flex: none;
  place-items: center;
  box-sizing: border-box;
}

.scuba-icon-tile :deep(svg),
.scuba-icon-tile :deep(img) {
  width: 62%;
  height: 62%;
}

.scuba-icon-tile--sm {
  width: 28px;
  height: 28px;
  font-size: 16px;
}

.scuba-icon-tile--md {
  width: 32px;
  height: 32px;
  font-size: 18px;
}

.scuba-icon-tile--lg {
  width: 36px;
  height: 36px;
  font-size: 18px;
}

.scuba-icon-tile--xl {
  width: 44px;
  height: 44px;
  font-size: 22px;
}

.scuba-icon-tile--square {
  border-radius: 10px;
}

.scuba-icon-tile--xl.scuba-icon-tile--square {
  border-radius: var(--border-radius-rounded-md);
}

.scuba-icon-tile--circle {
  border-radius: var(--border-radius-rounded-full);
}

.scuba-icon-tile--info {
  background: var(--context-color-surface-focus-light);
  color: var(--context-color-text-focus);
}

.scuba-icon-tile--neutral {
  background: var(--context-color-surface-page);
  color: var(--context-color-text-primary);
}

.scuba-icon-tile--success {
  background: var(--context-color-surface-success);
  color: var(--context-color-text-success);
}

.scuba-icon-tile--warning {
  background: var(--context-color-surface-warning);
  color: var(--context-color-text-warning);
}

.scuba-icon-tile--error {
  background: var(--context-color-surface-error);
  color: var(--context-color-text-error);
}

.scuba-icon-tile--dark {
  background: var(--primitives-color-gray-900);
  color: var(--primitives-color-white);
}

.scuba-icon-tile--ai {
  background: var(--semantic-color-ai-gradient);
  color: var(--context-color-text-primary);
}

.scuba-icon-tile--white {
  background: var(--context-color-surface-primary);
  color: var(--context-color-text-primary);
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.08);
}
</style>
