<template>
  <section :class="['scuba-ai-card', `scuba-ai-card--${layout}`, `scuba-ai-card--${size}`]">
    <div class="scuba-ai-card__head">
      <DipyMascot class="scuba-ai-card__dipy" :state="state" />
      <div class="scuba-ai-card__copy">
        <component :is="titleTag" class="scuba-ai-card__title">{{ title }}</component>
        <p v-if="text || $slots.text" class="scuba-ai-card__text"><slot name="text">{{ text }}</slot></p>
        <slot name="details" />
      </div>
      <div v-if="$slots.actions" class="scuba-ai-card__actions">
        <slot name="actions" />
      </div>
    </div>
    <div v-if="$slots.default" class="scuba-ai-card__body">
      <slot />
    </div>
  </section>
</template>

<script setup>
// Bloco do Dipy no degradê da IA (28/10/2026, do envio de unidades e de arquivos do setup e do Enviar dados da jornada
// de carbono): o mascote, o título e o texto; o slot "details" vai embaixo do texto (selos, um switch), "actions" no
// canto, e o conteúdo (como um UploadBox) embaixo ('stack') ou ao lado, quando cabe ('split').
import DipyMascot from '../Dipy/DipyMascot.vue';

defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ''
  },
  state: {
    type: String,
    default: 'idle',
    validator: (value) => ['idle', 'analyzing', 'ready'].includes(value)
  },
  layout: {
    type: String,
    default: 'stack',
    validator: (value) => ['stack', 'split'].includes(value)
  },
  // 'md': mascote de 64px e título de 16px; 'lg': mascote de 76px e título de 18px.
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['md', 'lg'].includes(value)
  },
  titleTag: {
    type: String,
    default: 'h3'
  }
});
</script>

<style scoped>
.scuba-ai-card {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  padding: var(--spacing-md);
  border-radius: var(--border-radius-rounded-lg);
  background: var(--semantic-color-ai-gradient);
  font-family: var(--type-font-family-body);
}

.scuba-ai-card--split {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  align-items: center;
  gap: var(--spacing-md);
}

.scuba-ai-card__head {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xs);
}

.scuba-ai-card__dipy {
  flex: none;
}

.scuba-ai-card--md .scuba-ai-card__dipy {
  height: 64px;
}

.scuba-ai-card--lg .scuba-ai-card__dipy {
  height: 76px;
  margin-top: -4px;
}

.scuba-ai-card__copy {
  display: flex;
  flex: 1;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--spacing-4xs);
  min-width: 0;
}

.scuba-ai-card__title {
  margin: 0;
  font-weight: var(--type-font-weight-semibold);
  color: var(--primitives-color-gray-900);
}

.scuba-ai-card--md .scuba-ai-card__title {
  font-size: var(--type-font-size-base);
}

.scuba-ai-card--lg .scuba-ai-card__title {
  font-size: var(--type-font-size-lg);
}

.scuba-ai-card__text {
  max-width: 60ch;
  margin: 0;
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

.scuba-ai-card__actions {
  display: flex;
  flex: none;
  align-items: center;
  gap: var(--spacing-3xs);
}

.scuba-ai-card__body {
  min-width: 0;
}

.scuba-ai-card__body :deep(.scuba-upload-box__dropzone) {
  background: var(--context-color-surface-primary);
}
</style>
