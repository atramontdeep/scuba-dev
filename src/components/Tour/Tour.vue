<template>
  <Teleport to="body">
    <div class="scuba-tour" v-bind="$attrs">
      <div v-if="!ring" class="scuba-tour__dim" aria-hidden="true"></div>
      <div
        v-else
        class="scuba-tour__ring"
        :style="{ left: `${ring.left}px`, top: `${ring.top}px`, width: `${ring.width}px`, height: `${ring.height}px` }"
        aria-hidden="true"
      ></div>
      <div
        ref="tip"
        class="scuba-tour__tip"
        role="dialog"
        :aria-label="kicker ? `${kicker}: ${title}` : title"
        :style="{ left: `${pos.left}px`, top: `${pos.top}px` }"
      >
        <p v-if="kicker" class="scuba-tour__kicker">{{ kicker }}</p>
        <p class="scuba-tour__title">{{ title }}</p>
        <p class="scuba-tour__body"><slot>{{ body }}</slot></p>
        <div class="scuba-tour__foot">
          <span class="scuba-tour__count">{{ step }} de {{ total }}</span>
          <button v-if="step > 1" type="button" class="scuba-tour__ghost" @click="emit('prev')">{{ prevLabel }}</button>
          <button type="button" class="scuba-tour__main" @click="emit('next')">
            {{ step === total ? doneLabel : nextLabel }}
          </button>
        </div>
      </div>
    </div>
  </Teleport>
</template>

<script setup>
// Balão de um guia passo a passo (28/10/2026, da jornada de carbono): balão branco com sombra, o nome do guia em caixa
// alta, título, texto e, no pé, a contagem, "Anterior" e o botão azul. O elemento do passo (target, um seletor) ganha
// o contorno azul e o resto da tela escurece, sem bloquear: o clique passa para a tela. Sem elemento, a tela toda
// escurece. Esc fecha. O balão fica embaixo do elemento quando cabe; se não, em cima.
import { nextTick, onBeforeUnmount, onMounted, ref, watch } from 'vue';

// Os atributos (classe, data-*) vão para o contêiner do guia, que fica no body.
defineOptions({ inheritAttrs: false });

const props = defineProps({
  target: {
    type: String,
    default: ''
  },
  kicker: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    required: true
  },
  body: {
    type: String,
    default: ''
  },
  step: {
    type: Number,
    default: 1
  },
  total: {
    type: Number,
    default: 1
  },
  prevLabel: {
    type: String,
    default: 'Anterior'
  },
  nextLabel: {
    type: String,
    default: 'Próximo'
  },
  doneLabel: {
    type: String,
    default: 'Entendi'
  }
});

const emit = defineEmits(['next', 'prev', 'close']);

const PAD = 6;
const GAP = 14;
const ring = ref(null);
const pos = ref({ left: 0, top: 0 });
const tip = ref(null);
let frame = 0;
let timer = 0;

const measure = () => {
  const el = props.target ? document.querySelector(props.target) : null;
  const w = tip.value?.offsetWidth ?? 320;
  const h = tip.value?.offsetHeight ?? 160;
  if (!el) {
    ring.value = null;
    pos.value = { left: (window.innerWidth - w) / 2, top: (window.innerHeight - h) / 2 };
    return;
  }
  const r = el.getBoundingClientRect();
  ring.value = { left: r.left - PAD, top: r.top - PAD, width: r.width + PAD * 2, height: r.height + PAD * 2 };
  const below = r.bottom + PAD + GAP;
  const top = below + h <= window.innerHeight - 12 ? below : r.top - PAD - GAP - h;
  // Alinhado à direita do elemento, sem sair da tela.
  const left = Math.min(Math.max(12, r.right - w), window.innerWidth - w - 12);
  pos.value = { left, top: Math.max(12, top) };
};

const schedule = () => {
  cancelAnimationFrame(frame);
  frame = requestAnimationFrame(measure);
};

const handleKeydown = (event) => {
  if (event.key === 'Escape') emit('close');
};

onMounted(() => {
  nextTick(measure);
  window.addEventListener('resize', schedule);
  window.addEventListener('scroll', schedule, true);
  window.addEventListener('keydown', handleKeydown);
});

onBeforeUnmount(() => {
  cancelAnimationFrame(frame);
  clearTimeout(timer);
  window.removeEventListener('resize', schedule);
  window.removeEventListener('scroll', schedule, true);
  window.removeEventListener('keydown', handleKeydown);
});

// Troca de passo: mede de novo, e mais uma vez depois de uma rolagem suave até o elemento.
watch(
  () => [props.target, props.step],
  () => {
    nextTick(measure);
    clearTimeout(timer);
    timer = setTimeout(measure, 400);
  }
);
</script>

<style scoped>
.scuba-tour {
  font-family: var(--type-font-family-body);
}

.scuba-tour__ring {
  position: fixed;
  z-index: var(--z-index-popover);
  border: var(--border-width-border-md) solid var(--context-color-surface-focus-dark);
  border-radius: 10px;
  box-shadow: 0 0 0 9999px var(--context-color-surface-overlay);
  pointer-events: none;
  transition: all var(--transition-base);
}

.scuba-tour__dim {
  position: fixed;
  inset: 0;
  z-index: var(--z-index-popover);
  background: var(--context-color-surface-overlay);
  pointer-events: none;
}

.scuba-tour__tip {
  position: fixed;
  z-index: calc(var(--z-index-popover) + 1);
  width: 320px;
  max-width: calc(100vw - 24px);
  padding: var(--spacing-xs) var(--spacing-xs) var(--spacing-2xs);
  border: var(--border-width-border-sm) solid var(--context-color-border-subtle);
  border-radius: var(--border-radius-rounded-md);
  background: var(--context-color-surface-primary);
  color: var(--context-color-text-primary);
  box-shadow: var(--shadow-popover);
  box-sizing: border-box;
  animation: scuba-tour-in 0.2s ease-out;
}

@keyframes scuba-tour-in {
  from {
    opacity: 0;
    transform: translateY(4px);
  }
}

.scuba-tour__kicker {
  margin: 0 0 2px;
  font-size: 11px;
  font-weight: var(--type-font-weight-semibold);
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--context-color-surface-focus-dark);
}

.scuba-tour__title {
  margin: 0 0 4px;
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
}

.scuba-tour__body {
  margin: 0;
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-secondary);
}

.scuba-tour__foot {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  margin-top: var(--spacing-xs);
}

.scuba-tour__count {
  flex: 1;
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-secondary);
}

.scuba-tour__ghost,
.scuba-tour__main {
  padding: 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  cursor: pointer;
}

.scuba-tour__ghost {
  color: var(--context-color-text-secondary);
}

.scuba-tour__main {
  padding: 6px var(--spacing-xs);
  border-radius: var(--border-radius-rounded-pill);
  background: var(--context-color-surface-focus-dark);
  color: var(--primitives-color-white);
}

.scuba-tour__ghost:focus-visible,
.scuba-tour__main:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}

@media (prefers-reduced-motion: reduce) {
  .scuba-tour__ring,
  .scuba-tour__tip {
    transition: none;
    animation: none;
  }
}
</style>
