<template>
  <div :class="['scuba-ai-steps', `scuba-ai-steps--${size}`]" role="status">
    <p class="scuba-ai-steps__title">
      <span v-if="icon || $slots.icon" class="scuba-ai-steps__icon" aria-hidden="true">
        <slot name="icon" :working="working"><DipyIcon :animate="working" /></slot>
      </span>
      {{ working ? title : (doneTitle || title) }}
    </p>
    <ol class="scuba-ai-steps__list">
      <li
        v-for="(label, i) in steps"
        :key="label"
        :class="{
          'scuba-ai-steps__step--done': i < current - 1,
          'scuba-ai-steps__step--now': i === current - 1
        }"
      >
        <span class="scuba-ai-steps__mark" aria-hidden="true">
          <i v-if="i < current - 1" class="ph ph-check"></i>
          <span v-else-if="i === current - 1" class="scuba-ai-steps__spin"></span>
        </span>
        {{ label }}
      </li>
    </ol>
  </div>
</template>

<script setup>
// Etapas de um trabalho da IA (ler um arquivo, buscar respostas), que se marcam uma a uma, no degradê da IA
// (28/10/2026, da jornada de carbono e da resposta do indicador). current é a etapa em andamento, de 1 ao número de
// etapas; acima disso, todas terminaram e o título passa a doneTitle, quando houver. Ao lado do título, o Dipy, que se
// mexe enquanto a IA trabalha; icon: false tira o ícone. O slot "icon" (recebe working) troca o ícone.
import { computed } from 'vue';
import DipyIcon from '../Dipy/DipyIcon.vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  doneTitle: {
    type: String,
    default: ''
  },
  steps: {
    type: Array,
    default: () => []
  },
  current: {
    type: Number,
    default: 1
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md'].includes(value)
  },
  icon: {
    type: Boolean,
    default: true
  }
});

const working = computed(() => props.current <= props.steps.length);
</script>

<style scoped>
.scuba-ai-steps {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
  border-radius: var(--border-radius-rounded-md);
  background: var(--semantic-color-ai-gradient);
  font-family: var(--type-font-family-body);
}

.scuba-ai-steps--sm {
  padding: var(--spacing-sm) var(--spacing-md);
}

.scuba-ai-steps--md {
  padding: var(--spacing-md);
}

.scuba-ai-steps__title {
  display: flex;
  align-items: center;
  gap: var(--spacing-2xs);
  margin: 0;
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
}

.scuba-ai-steps--sm .scuba-ai-steps__title {
  font-size: var(--type-font-size-sm);
}

.scuba-ai-steps--md .scuba-ai-steps__title {
  font-size: var(--type-font-size-base);
}

.scuba-ai-steps__icon {
  display: inline-flex;
  flex: none;
  width: 24px;
  height: 24px;
}

.scuba-ai-steps__icon :deep(svg),
.scuba-ai-steps__icon :deep(img) {
  width: 100%;
  height: 100%;
}

.scuba-ai-steps__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xs);
  margin: 0;
  padding: 0;
  list-style: none;
}

.scuba-ai-steps__list li {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  font-size: var(--type-font-size-sm);
  color: var(--context-color-text-secondary);
  transition: color var(--transition-base);
}

.scuba-ai-steps__list .scuba-ai-steps__step--now,
.scuba-ai-steps__list .scuba-ai-steps__step--done {
  color: var(--context-color-text-primary);
}

.scuba-ai-steps__mark {
  display: grid;
  flex: none;
  place-items: center;
  width: 20px;
  height: 20px;
  border: 1.5px solid var(--primitives-color-gray-300);
  border-radius: var(--border-radius-rounded-full);
  font-size: 12px;
  box-sizing: border-box;
}

.scuba-ai-steps__step--done .scuba-ai-steps__mark {
  border: none;
  background: var(--semantic-color-success-normal);
  color: var(--semantic-color-success-dark);
}

.scuba-ai-steps__step--now .scuba-ai-steps__mark {
  border-color: var(--context-color-surface-focus);
}

.scuba-ai-steps__spin {
  width: 10px;
  height: 10px;
  border: 2px solid var(--context-color-surface-focus);
  border-top-color: var(--context-color-surface-focus-dark);
  border-radius: 50%;
  animation: scuba-ai-steps-spin 0.8s linear infinite;
}

@keyframes scuba-ai-steps-spin {
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scuba-ai-steps__spin {
    animation: none;
  }
}
</style>
