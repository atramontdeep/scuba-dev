<template>
  <ol
    :class="['scuba-step-list', `scuba-step-list--${variant}`]"
    :style="variant === 'horizontal' ? { '--scuba-step-count': steps.length, '--scuba-step-progress': progress } : null"
  >
    <li
      v-for="(step, i) in steps"
      :key="step.title"
      :class="`scuba-step-list__item--${stateOf(step, i)}`"
      :aria-current="stateOf(step, i) === 'now' ? 'step' : undefined"
    >
      <span class="scuba-step-list__mark" aria-hidden="true">
        <i v-if="variant === 'icon'" :class="['ph', step.icon]"></i>
        <i v-else-if="stateOf(step, i) === 'done' && variant !== 'number'" class="ph ph-check"></i>
        <template v-else-if="variant !== 'path'">{{ i + 1 }}</template>
      </span>

      <template v-if="variant === 'path'">
        {{ step.title }}
        <em v-if="stateOf(step, i) === 'now'" class="scuba-step-list__now">{{ nowLabel }}</em>
      </template>

      <div v-else class="scuba-step-list__body">
        <strong class="scuba-step-list__title">{{ step.title }}</strong>
        <span v-if="step.tag" class="scuba-step-list__tag">{{ step.tag }}</span>
        <span v-if="step.text" class="scuba-step-list__text">{{ step.text }}</span>
      </div>
    </li>
  </ol>
</template>

<script setup>
// Passos em sequência, neutros (28/10/2026, da jornada de carbono). Variantes: 'icon', com o ícone num quadrado, como
// "Como chegamos a este número"; 'number', com o número num círculo branco, como "Como revisar"; 'path', o caminho
// vertical e compacto de uma categoria, com "Agora" na etapa atual; 'horizontal', a linha de etapas da boas-vindas, com
// a linha azul até a etapa atual. Cada passo: { title, text?, icon?, tag?, state? }; sem state, current decide (antes
// dele, done; nele, now; depois, next).
import { computed } from 'vue';

const props = defineProps({
  steps: {
    type: Array,
    default: () => []
  },
  variant: {
    type: String,
    default: 'icon',
    validator: (value) => ['icon', 'number', 'path', 'horizontal'].includes(value)
  },
  // Índice da etapa atual (0 é a primeira); -1 quando os passos não têm andamento.
  current: {
    type: Number,
    default: -1
  },
  nowLabel: {
    type: String,
    default: 'Agora'
  }
});

const stateOf = (step, i) => {
  if (step.state) return step.state;
  if (props.current < 0) return 'idle';
  return i < props.current ? 'done' : i === props.current ? 'now' : 'next';
};

const progress = computed(() => {
  const n = props.steps.length;
  return n > 1 ? `${(Math.max(props.current, 0) / (n - 1)) * 100}%` : '0%';
});
</script>

<style scoped>
.scuba-step-list {
  margin: 0;
  padding: 0;
  list-style: none;
  font-family: var(--type-font-family-body);
}

.scuba-step-list--icon,
.scuba-step-list--number {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-xs);
}

.scuba-step-list--icon li,
.scuba-step-list--number li {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xs);
}

.scuba-step-list__body {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  min-width: 0;
  font-size: var(--type-font-size-xs);
  line-height: 1.45;
  color: var(--context-color-text-secondary);
}

.scuba-step-list__title {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  color: var(--primitives-color-gray-900);
}

/* Ícone num quadrado: o que já passou em verde, o de agora em azul, o resto no fundo da página. */
.scuba-step-list--icon .scuba-step-list__mark {
  display: grid;
  flex: 0 0 32px;
  place-items: center;
  width: 32px;
  height: 32px;
  border-radius: 10px;
  background: var(--context-color-surface-page);
  font-size: 18px;
  color: var(--context-color-text-secondary);
}

.scuba-step-list--icon .scuba-step-list__item--done .scuba-step-list__mark {
  background: var(--context-color-surface-success);
  color: var(--context-color-text-success);
}

.scuba-step-list--icon .scuba-step-list__item--now .scuba-step-list__mark,
.scuba-step-list--icon .scuba-step-list__item--idle .scuba-step-list__mark {
  background: var(--context-color-surface-focus-light);
  color: var(--context-color-text-focus);
}

/* Número num círculo branco. */
.scuba-step-list--number .scuba-step-list__mark {
  display: grid;
  flex: 0 0 28px;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: var(--border-radius-rounded-full);
  background: var(--context-color-surface-primary);
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.08);
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-bold);
  color: var(--primitives-color-gray-900);
}

.scuba-step-list--number .scuba-step-list__item--done .scuba-step-list__mark {
  background: var(--semantic-color-success-normal);
}

.scuba-step-list--number .scuba-step-list__item--now .scuba-step-list__mark {
  background: var(--context-color-surface-focus-dark);
  color: var(--primitives-color-white);
}

/* Caminho: um ponto por etapa, ligados por uma linha; o que passou em verde, a de agora em azul. */
.scuba-step-list--path li {
  position: relative;
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: 6px 0;
  font-size: var(--type-font-size-sm);
  color: var(--context-color-text-disabled);
}

.scuba-step-list--path li:not(:last-child)::after {
  position: absolute;
  top: calc(50% + 10px);
  left: 9px;
  height: calc(100% - 20px);
  border-left: 2px solid var(--semantic-color-neutral-200);
  content: '';
}

.scuba-step-list--path .scuba-step-list__mark {
  display: grid;
  flex: 0 0 20px;
  place-items: center;
  width: 20px;
  height: 20px;
  border: 2px solid var(--semantic-color-neutral-300);
  border-radius: var(--border-radius-rounded-full);
  background: var(--context-color-surface-primary);
  font-size: 12px;
  box-sizing: border-box;
}

.scuba-step-list--path .scuba-step-list__item--done {
  color: var(--primitives-color-gray-900);
}

.scuba-step-list--path .scuba-step-list__item--done .scuba-step-list__mark {
  border-color: var(--context-color-surface-success);
  background: var(--context-color-surface-success);
  color: var(--context-color-text-success);
}

.scuba-step-list--path .scuba-step-list__item--done::after {
  border-color: var(--context-color-surface-success);
}

.scuba-step-list--path .scuba-step-list__item--now {
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-focus);
}

.scuba-step-list--path .scuba-step-list__item--now .scuba-step-list__mark {
  border-color: var(--primitives-color-blue-600);
  box-shadow: 0 0 0 3px rgba(9, 66, 161, 0.15);
}

.scuba-step-list--path .scuba-step-list__item--now .scuba-step-list__mark::before {
  width: 8px;
  height: 8px;
  border-radius: var(--border-radius-rounded-full);
  background: var(--primitives-color-blue-600);
  content: '';
}

.scuba-step-list__now {
  padding: 1px 8px;
  border-radius: var(--border-radius-rounded-pill);
  background: var(--context-color-surface-focus-light);
  font-size: var(--type-font-size-xs);
  font-style: normal;
}

/* Horizontal: um círculo por etapa, ligados por uma linha azul até a etapa atual. */
.scuba-step-list--horizontal {
  --scuba-step-dot: 32px;
  --scuba-step-gap: var(--spacing-lg);
  position: relative;
  display: grid;
  grid-template-columns: repeat(var(--scuba-step-count), minmax(0, 1fr));
  gap: var(--scuba-step-gap);
}

.scuba-step-list--horizontal::before {
  position: absolute;
  top: calc(var(--scuba-step-dot) / 2 - 1px);
  right: calc(
    (100% - (var(--scuba-step-count) - 1) * var(--scuba-step-gap)) / var(--scuba-step-count) - var(--scuba-step-dot) / 2
  );
  left: calc(var(--scuba-step-dot) / 2);
  height: 2px;
  background: linear-gradient(
    to right,
    var(--primitives-color-blue-600) var(--scuba-step-progress),
    var(--semantic-color-neutral-200) var(--scuba-step-progress)
  );
  content: '';
}

.scuba-step-list--horizontal li {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.scuba-step-list--horizontal .scuba-step-list__mark {
  display: grid;
  place-items: center;
  width: var(--scuba-step-dot);
  height: var(--scuba-step-dot);
  margin-bottom: var(--spacing-xs);
  border: 1.5px solid var(--semantic-color-neutral-300);
  border-radius: var(--border-radius-rounded-full);
  background: var(--context-color-surface-primary);
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-secondary);
  box-sizing: border-box;
}

.scuba-step-list--horizontal .scuba-step-list__item--done .scuba-step-list__mark {
  border-color: var(--primitives-color-blue-500);
  background: var(--primitives-color-blue-500);
  color: var(--primitives-color-white);
}

.scuba-step-list--horizontal .scuba-step-list__item--now .scuba-step-list__mark {
  border-color: var(--primitives-color-blue-600);
  background: var(--primitives-color-blue-600);
  color: var(--primitives-color-white);
  box-shadow: 0 0 0 4px var(--context-color-surface-focus-light);
}

.scuba-step-list--horizontal .scuba-step-list__body {
  gap: var(--spacing-3xs);
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
}

.scuba-step-list--horizontal .scuba-step-list__title {
  font-size: var(--type-font-size-lg);
}

.scuba-step-list__tag {
  max-width: 100%;
  padding: 2px var(--spacing-3xs);
  border-radius: var(--border-radius-rounded-pill);
  font-size: var(--type-font-size-xs);
  white-space: nowrap;
  box-sizing: border-box;
}

.scuba-step-list__item--done .scuba-step-list__tag {
  background: var(--context-color-surface-success);
  color: var(--context-color-text-success);
}

.scuba-step-list__item--now .scuba-step-list__tag {
  background: var(--context-color-surface-focus-light);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-focus);
}
</style>
