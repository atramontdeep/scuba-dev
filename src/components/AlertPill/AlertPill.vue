<template>
  <div
    :class="pillClasses"
    role="button"
    :tabindex="disabled ? -1 : 0"
    :aria-disabled="disabled || undefined"
    :aria-label="ariaLabel || undefined"
    @click="!disabled && emit('click')"
    @keydown.enter.prevent="!disabled && emit('click')"
    @keydown.space.prevent="!disabled && emit('click')"
  >
    <span class="scuba-alert-pill__icon" aria-hidden="true">
      <i :class="['ph', icon]"></i>
      <span v-if="count" class="scuba-alert-pill__count">{{ count }}</span>
    </span>
    <span class="scuba-alert-pill__text">
      <strong>{{ title }}</strong>
      <small v-if="text">{{ text }}</small>
    </span>
    <button v-if="ctaLabel" type="button" class="scuba-alert-pill__cta" :disabled="disabled" @click.stop="emit('cta')">
      {{ ctaLabel }}
      <i v-if="ctaIcon" :class="['ph', ctaIcon]" aria-hidden="true"></i>
    </button>
    <i v-else-if="caret" class="ph ph-caret-down scuba-alert-pill__caret" aria-hidden="true"></i>
  </div>
</template>

<script setup>
// Aviso em pílula no canto do título (28/10/2026, das pendências e do aviso de etapa da jornada de carbono): ícone
// redondo com a contagem, título e texto e, à direita, o botão branco da ação ou uma seta para abrir. 'dark', o cartão
// escuro que pede ação, com o halo âmbar pulsando quando halo; 'light', branco, só para informar. ringing faz o cartão
// pular e o sino tocar, para avisar que chegou algo novo.
import { computed } from 'vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  text: {
    type: String,
    default: ''
  },
  // Classe do Phosphor, como 'ph-bell-ringing'.
  icon: {
    type: String,
    default: 'ph-bell-ringing'
  },
  iconTone: {
    type: String,
    default: 'warning',
    validator: (value) => ['warning', 'info', 'neutral'].includes(value)
  },
  count: {
    type: Number,
    default: 0
  },
  theme: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  },
  ctaLabel: {
    type: String,
    default: ''
  },
  ctaIcon: {
    type: String,
    default: ''
  },
  caret: {
    type: Boolean,
    default: false
  },
  halo: {
    type: Boolean,
    default: false
  },
  ringing: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  },
  ariaLabel: {
    type: String,
    default: ''
  }
});

const emit = defineEmits(['click', 'cta']);

const pillClasses = computed(() => [
  'scuba-alert-pill',
  `scuba-alert-pill--${props.theme}`,
  `scuba-alert-pill--icon-${props.iconTone}`,
  {
    'scuba-alert-pill--halo': props.halo,
    'scuba-alert-pill--ringing': props.ringing,
    'scuba-alert-pill--disabled': props.disabled,
    'scuba-alert-pill--plain': !props.ctaLabel
  }
]);
</script>

<style scoped>
.scuba-alert-pill {
  position: relative;
  display: inline-flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-3xs);
  border-radius: var(--border-radius-rounded-pill);
  font-family: var(--type-font-family-body);
  text-align: left;
  cursor: pointer;
  transition: transform var(--transition-fast);
}

.scuba-alert-pill:hover:not(.scuba-alert-pill--disabled) {
  transform: translateY(-1px);
}

.scuba-alert-pill:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 3px;
}

.scuba-alert-pill--plain {
  padding-right: var(--spacing-sm);
}

.scuba-alert-pill--disabled {
  cursor: default;
}

.scuba-alert-pill--dark {
  background: var(--primitives-color-gray-900);
  color: var(--primitives-color-white);
  box-shadow: 0 10px 28px rgba(16, 24, 40, 0.22);
}

.scuba-alert-pill--light {
  background: var(--context-color-surface-primary);
  color: var(--primitives-color-gray-900);
  box-shadow: var(--shadow-card);
}

.scuba-alert-pill__icon {
  position: relative;
  display: grid;
  flex: 0 0 44px;
  place-items: center;
  width: 44px;
  height: 44px;
  border-radius: var(--border-radius-rounded-full);
  font-size: 22px;
}

.scuba-alert-pill--icon-warning .scuba-alert-pill__icon {
  background: var(--semantic-color-warning-normal);
  color: var(--primitives-color-gray-900);
}

.scuba-alert-pill--icon-info .scuba-alert-pill__icon {
  background: var(--context-color-surface-focus-light);
  color: var(--context-color-text-focus);
}

.scuba-alert-pill--icon-neutral .scuba-alert-pill__icon {
  background: var(--context-color-surface-page);
  color: var(--context-color-text-secondary);
}

.scuba-alert-pill__count {
  position: absolute;
  top: -4px;
  right: -4px;
  display: grid;
  place-items: center;
  min-width: 20px;
  height: 20px;
  padding: 0 5px;
  border: 2px solid var(--primitives-color-gray-900);
  border-radius: var(--border-radius-rounded-pill);
  background: var(--primitives-color-red-600);
  font-size: 11px;
  font-weight: var(--type-font-weight-bold);
  line-height: 1;
  color: var(--primitives-color-white);
  box-sizing: border-box;
}

.scuba-alert-pill--light .scuba-alert-pill__count {
  border-color: var(--context-color-surface-primary);
}

.scuba-alert-pill__text {
  display: flex;
  flex-direction: column;
  min-width: 0;
  line-height: 1.25;
}

.scuba-alert-pill__text strong {
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
}

.scuba-alert-pill__text small {
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-secondary);
}

.scuba-alert-pill--dark .scuba-alert-pill__text small {
  color: rgba(255, 255, 255, 0.7);
}

.scuba-alert-pill__cta {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  height: 40px;
  margin-left: var(--spacing-3xs);
  padding: 0 var(--spacing-xs);
  border: none;
  border-radius: var(--border-radius-rounded-pill);
  background: var(--primitives-color-white);
  font-family: inherit;
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  white-space: nowrap;
  color: var(--primitives-color-gray-900);
  cursor: pointer;
}

.scuba-alert-pill--light .scuba-alert-pill__cta {
  background: var(--primitives-color-gray-900);
  color: var(--primitives-color-white);
}

.scuba-alert-pill__cta i {
  transition: transform var(--transition-fast);
}

.scuba-alert-pill:hover .scuba-alert-pill__cta i {
  transform: translateX(2px);
}

.scuba-alert-pill__cta:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}

.scuba-alert-pill__caret {
  margin-left: var(--spacing-3xs);
  font-size: 16px;
  color: var(--context-color-icon-secondary);
}

/* Halo âmbar pulsando: pede atenção sem tirar o foco da tela. */
.scuba-alert-pill--halo {
  animation: scuba-alert-pill-halo 2.8s ease-out infinite;
}

@keyframes scuba-alert-pill-halo {
  0% {
    box-shadow: 0 0 0 0 rgba(245, 165, 36, 0.45), 0 10px 28px rgba(16, 24, 40, 0.22);
  }
  70%,
  100% {
    box-shadow: 0 0 0 14px rgba(245, 165, 36, 0), 0 10px 28px rgba(16, 24, 40, 0.22);
  }
}

/* Chegou algo novo: o cartão pula e o sino toca. */
.scuba-alert-pill--ringing {
  animation:
    scuba-alert-pill-pop 0.5s cubic-bezier(0.3, 1.6, 0.5, 1) 1,
    scuba-alert-pill-halo 0.9s ease-out 3;
}

.scuba-alert-pill--ringing .scuba-alert-pill__icon i {
  transform-origin: 50% 10%;
  animation: scuba-alert-pill-bell 1s ease-in-out 2;
}

@keyframes scuba-alert-pill-pop {
  40% {
    transform: scale(1.06);
  }
}

@keyframes scuba-alert-pill-bell {
  0%,
  100% {
    transform: rotate(0);
  }
  15% {
    transform: rotate(18deg);
  }
  30% {
    transform: rotate(-16deg);
  }
  45% {
    transform: rotate(12deg);
  }
  60% {
    transform: rotate(-8deg);
  }
  75% {
    transform: rotate(4deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .scuba-alert-pill,
  .scuba-alert-pill * {
    animation: none !important;
  }
}
</style>
