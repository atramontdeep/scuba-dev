<template>
  <div :class="['scuba-ai-status', `scuba-ai-status--${layout}`, `scuba-ai-status--${state}`]">
    <div class="scuba-ai-status__art" aria-hidden="true">
      <span class="scuba-ai-status__halo"></span>
      <DipyMascot class="scuba-ai-status__dipy" :state="state" />
    </div>
    <div class="scuba-ai-status__content">
      <component :is="titleTag" class="scuba-ai-status__title">{{ title }}</component>
      <p v-if="text || $slots.default" class="scuba-ai-status__text" role="status">
        <slot>{{ text }}</slot>
      </p>
      <div v-if="progress !== null" class="scuba-ai-status__progress">
        <ProgressBar :value="progress" :support-text="progressLabel" :aria-label="progressAriaLabel" />
      </div>
    </div>
  </div>
</template>

<script setup>
// O que a IA está fazendo, com o Dipy (28/10/2026, do modal do cálculo da jornada de carbono e da sugestão de
// resposta). 'center': o mascote grande num halo que pulsa, título, texto e, com progress, a barra com a etapa; para
// esperas em modal ou drawer. 'inline': o mascote pequeno num círculo, ao lado do título e do texto; para o resultado
// no topo de uma lista. O estado do mascote muda o halo: analyzing pulsa no degradê da IA, ready fica verde e idle,
// parado.
import DipyMascot from '../Dipy/DipyMascot.vue';
import ProgressBar from '../ProgressBar/ProgressBar.vue';

defineProps({
  state: {
    type: String,
    default: 'analyzing',
    validator: (value) => ['idle', 'analyzing', 'ready'].includes(value)
  },
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ''
  },
  // De 0 a 100; null esconde a barra.
  progress: {
    type: Number,
    default: null
  },
  progressLabel: {
    type: String,
    default: ''
  },
  progressAriaLabel: {
    type: String,
    default: 'Andamento'
  },
  layout: {
    type: String,
    default: 'center',
    validator: (value) => ['center', 'inline'].includes(value)
  },
  titleTag: {
    type: String,
    default: 'h2'
  }
});
</script>

<style scoped>
.scuba-ai-status {
  display: flex;
  font-family: var(--type-font-family-body);
}

.scuba-ai-status--center {
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-3xs);
  text-align: center;
}

.scuba-ai-status--inline {
  align-items: center;
  gap: var(--spacing-xs);
}

.scuba-ai-status__content {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xs);
  min-width: 0;
}

.scuba-ai-status--center .scuba-ai-status__content {
  align-items: center;
  width: 100%;
}

/* Centro: o mascote grande no halo. */
.scuba-ai-status--center .scuba-ai-status__art {
  position: relative;
  display: grid;
  place-items: center;
  width: 220px;
  height: 180px;
  margin-bottom: var(--spacing-xs);
}

.scuba-ai-status--center .scuba-ai-status__halo {
  position: absolute;
  width: 170px;
  height: 170px;
  border-radius: 50%;
  background: var(--semantic-color-ai-gradient);
}

.scuba-ai-status--center.scuba-ai-status--analyzing .scuba-ai-status__halo {
  animation: scuba-ai-status-pulse 2.4s ease-in-out infinite;
}

.scuba-ai-status--center .scuba-ai-status__dipy {
  position: relative;
  height: 150px;
}

/* Em linha: o mascote pequeno, cortado num círculo. */
.scuba-ai-status--inline .scuba-ai-status__art {
  position: relative;
  display: grid;
  flex: 0 0 64px;
  place-items: end center;
  width: 64px;
  height: 64px;
  overflow: hidden;
  border-radius: 50%;
}

.scuba-ai-status--inline .scuba-ai-status__halo {
  position: absolute;
  inset: 0;
  background: var(--semantic-color-ai-gradient);
}

.scuba-ai-status--inline .scuba-ai-status__dipy {
  position: relative;
  height: 54px;
}

.scuba-ai-status--ready .scuba-ai-status__halo {
  background: var(--semantic-color-ai-gradient-done);
}

@keyframes scuba-ai-status-pulse {
  50% {
    transform: scale(1.05);
    opacity: 0.85;
  }
}

.scuba-ai-status__title {
  margin: 0;
  font-size: var(--type-font-size-xl);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
}

.scuba-ai-status__text {
  margin: 0;
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-secondary);
}

.scuba-ai-status--center .scuba-ai-status__text {
  max-width: 52ch;
}

.scuba-ai-status__progress {
  width: 100%;
  max-width: 360px;
  margin-top: var(--spacing-xs);
  text-align: left;
}

@media (prefers-reduced-motion: reduce) {
  .scuba-ai-status__halo {
    animation: none !important;
  }
}
</style>
