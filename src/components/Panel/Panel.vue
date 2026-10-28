<template>
  <component :is="as" :class="panelClasses">
    <header v-if="title || subtitle || $slots.title || $slots.actions" class="scuba-panel__header">
      <div class="scuba-panel__heading">
        <h3 v-if="title || $slots.title" class="scuba-panel__title">
          <slot name="title">{{ title }}</slot>
        </h3>
        <p v-if="subtitle" class="scuba-panel__subtitle">{{ subtitle }}</p>
      </div>
      <div v-if="$slots.actions" class="scuba-panel__actions">
        <slot name="actions" />
      </div>
    </header>

    <slot />
  </component>
</template>

<script setup>
// Bloco de conteúdo num cartão branco, com contorno levíssimo e sombra suave, para fundos como o da página
// (28/10/2026, da jornada de carbono). Diferente do Card, que mostra indicadores e números.
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    default: ''
  },
  subtitle: {
    type: String,
    default: ''
  },
  // Espaço interno: 'md' (24px) para painéis estreitos e drawers; 'lg' (24px em cima e embaixo, 40px dos lados).
  padding: {
    type: String,
    default: 'lg',
    validator: (value) => ['none', 'md', 'lg'].includes(value)
  },
  as: {
    type: String,
    default: 'section'
  }
});

const panelClasses = computed(() => [
  'scuba-panel',
  `scuba-panel--padding-${props.padding}`
]);
</script>

<style scoped>
.scuba-panel {
  border: var(--border-width-border-sm) solid var(--context-color-border-subtle);
  border-radius: var(--border-radius-rounded-lg);
  background: var(--context-color-surface-primary);
  box-shadow: var(--shadow-card);
  font-family: var(--type-font-family-body);
  color: var(--context-color-text-primary);
  box-sizing: border-box;
}

.scuba-panel--padding-md {
  padding: var(--spacing-md);
}

.scuba-panel--padding-lg {
  padding: var(--spacing-md) var(--spacing-lg);
}

.scuba-panel__header {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: var(--spacing-xs);
  margin-bottom: var(--spacing-xs);
}

.scuba-panel__heading {
  min-width: 0;
}

.scuba-panel__title {
  margin: 0;
  font-size: var(--type-font-size-xl);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-tight);
  color: var(--primitives-color-gray-900);
}

.scuba-panel__subtitle {
  margin: var(--spacing-4xs) 0 0;
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-secondary);
}

.scuba-panel__actions {
  display: flex;
  flex: none;
  align-items: center;
  gap: var(--spacing-3xs);
}
</style>
