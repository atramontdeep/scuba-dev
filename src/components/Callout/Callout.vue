<template>
  <section :class="['scuba-callout', `scuba-callout--${tone}`]">
    <span class="scuba-callout__icon" aria-hidden="true">
      <slot name="icon"><i :class="['ph', icon]"></i></slot>
    </span>
    <div class="scuba-callout__body">
      <div class="scuba-callout__head">
        <component :is="titleTag" class="scuba-callout__title">{{ title }}</component>
        <div v-if="$slots.tools" class="scuba-callout__tools"><slot name="tools" /></div>
      </div>
      <div class="scuba-callout__text"><slot /></div>
    </div>
    <div v-if="$slots.actions" class="scuba-callout__actions">
      <slot name="actions" />
    </div>
  </section>
</template>

<script setup>
// Bloco de destaque com ícone, título, texto e ações (29/10/2026, do "O que falta" da página da categoria da jornada
// de carbono): cartão branco num degradê leve no tom do assunto, com o ícone num quadrado branco. 'warning' para o
// que depende de quem lê; 'info' e 'success' para situações; 'neutral' para avisos e orientações. O slot "tools" fica
// ao lado do título (um botão de editar); "actions", à direita, empilhadas.
defineProps({
  title: {
    type: String,
    required: true
  },
  // Classe do Phosphor, como 'ph-flag'.
  icon: {
    type: String,
    default: 'ph-info'
  },
  tone: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'info', 'success', 'warning'].includes(value)
  },
  titleTag: {
    type: String,
    default: 'h2'
  }
});
</script>

<style scoped>
.scuba-callout {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr) auto;
  align-items: start;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-lg);
  border-radius: var(--border-radius-rounded-lg);
  box-shadow: var(--shadow-card);
  font-family: var(--type-font-family-body);
}

.scuba-callout--neutral {
  background: linear-gradient(110deg, var(--semantic-color-neutral-200) 0%, var(--context-color-surface-primary) 60%);
}

.scuba-callout--info {
  background: linear-gradient(110deg, var(--semantic-color-primary-100) 0%, var(--context-color-surface-primary) 60%);
}

.scuba-callout--success {
  background: linear-gradient(110deg, #ecfbf3 0%, var(--context-color-surface-primary) 60%);
}

.scuba-callout--warning {
  background: linear-gradient(110deg, #fff4dc 0%, var(--context-color-surface-primary) 60%);
}

.scuba-callout__icon {
  display: grid;
  place-items: center;
  width: 40px;
  height: 40px;
  border-radius: var(--border-radius-rounded-md);
  background: var(--context-color-surface-primary);
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.06);
  font-size: 20px;
  color: var(--context-color-text-secondary);
}

.scuba-callout--warning .scuba-callout__icon {
  color: #a86b00;
}

.scuba-callout--info .scuba-callout__icon {
  color: var(--context-color-text-focus);
}

.scuba-callout--success .scuba-callout__icon {
  color: var(--context-color-text-success);
}

.scuba-callout__body {
  min-width: 0;
}

.scuba-callout__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  min-height: 40px;
  margin-bottom: 2px;
}

.scuba-callout__title {
  margin: 0;
  font-size: var(--type-font-size-lg);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
}

.scuba-callout__tools {
  display: flex;
  align-items: center;
  margin-left: auto;
}

.scuba-callout__text {
  max-width: 68ch;
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-secondary);
}

.scuba-callout__text :deep(p) {
  margin: 0;
}

.scuba-callout__actions {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--spacing-3xs);
  min-width: 200px;
  padding-left: var(--spacing-md);
  text-align: center;
}

@media (max-width: 720px) {
  .scuba-callout {
    grid-template-columns: auto minmax(0, 1fr);
  }

  .scuba-callout__actions {
    grid-column: 1 / -1;
    padding-left: 0;
  }
}
</style>
