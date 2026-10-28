<template>
  <span :class="badgeClasses">
    <i v-if="iconLeft" :class="iconLeftClasses" aria-hidden="true"></i>
    <span v-if="label || $slots.default" class="scuba-badge__label">
      <slot>{{ label }}</slot>
    </span>
    <i v-if="iconRight" :class="iconRightClasses" aria-hidden="true"></i>
    <button
      v-if="removable"
      type="button"
      :class="removeButtonClasses"
      @click="handleRemove"
      :aria-label="removeAriaLabel"
    >
      <i class="ph ph-x"></i>
    </button>
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'primary', 'success', 'warning', 'error', 'info', 'danger', 'white', 'page'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  label: {
    type: String,
    default: ''
  },
  iconLeft: {
    type: String,
    default: ''
  },
  iconRight: {
    type: String,
    default: ''
  },
  removable: {
    type: Boolean,
    default: false
  },
  rounded: {
    type: Boolean,
    default: false
  },
  removeAriaLabel: {
    type: String,
    default: 'Remove'
  },
  // Contagem sobre o canto de um ícone ou botão (28/10/2026): quem a contém precisa de position: relative. O anel em
  // volta usa --scuba-badge-ring (branco por padrão; num fundo escuro, a cor do fundo).
  overlay: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['remove']);

const badgeClasses = computed(() => {
  const classes = ['scuba-badge'];
  classes.push('scuba-badge--' + props.variant);
  classes.push('scuba-badge--' + props.size);

  if (props.rounded) {
    classes.push('scuba-badge--rounded');
  }

  if (props.removable) {
    classes.push('scuba-badge--removable');
  }

  if (props.overlay) {
    classes.push('scuba-badge--overlay');
  }

  return classes;
});

const iconLeftClasses = computed(() => {
  if (!props.iconLeft) return '';
  return 'ph ' + props.iconLeft + ' scuba-badge__icon-left';
});

const iconRightClasses = computed(() => {
  if (!props.iconRight) return '';
  return 'ph ' + props.iconRight + ' scuba-badge__icon-right';
});

const removeButtonClasses = computed(() => {
  return 'scuba-badge__remove';
});

const handleRemove = (event) => {
  emit('remove', event);
};
</script>

<style scoped>
.scuba-badge {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-4xs);
  font-family: var(--type-font-family-body);
  font-weight: var(--type-font-weight-semibold);
  border-radius: var(--border-radius-rounded-sm);
  white-space: nowrap;
  user-select: none;
  transition: all var(--transition-base);
}

.scuba-badge--rounded {
  border-radius: var(--border-radius-rounded-pill);
}

.scuba-badge--sm {
  height: var(--scale-400);
  padding: 0 var(--spacing-3xs);
  font-size: var(--type-font-size-xs);
  line-height: var(--type-line-height-tight);
  gap: var(--spacing-4xs);
}

.scuba-badge--md {
  height: var(--scale-500);
  padding: 0 var(--spacing-2xs);
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-tight);
}

.scuba-badge--lg {
  height: var(--scale-600);
  padding: 0 var(--spacing-xs);
  font-size: var(--type-font-size-base);
  line-height: var(--type-line-height-tight);
  gap: var(--spacing-3xs);
}

.scuba-badge__icon-left,
.scuba-badge__icon-right {
  display: inline-flex;
  align-items: center;
  font-size: 1em;
}

.scuba-badge__label {
  display: inline-flex;
  align-items: center;
}

.scuba-badge__remove {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0;
  margin-left: var(--spacing-4xs);
  background: transparent;
  border: none;
  cursor: pointer;
  font-size: 1em;
  color: inherit;
  opacity: 0.7;
  transition: opacity var(--transition-fast);
}

.scuba-badge__remove:hover {
  opacity: 1;
}

/* Neutral Variant */
.scuba-badge--neutral {
  background: var(--semantic-color-neutral-200);
  color: var(--semantic-color-neutral-800);
}

/* Primary Variant */
.scuba-badge--primary {
  background: var(--semantic-color-primary-100);
  color: var(--semantic-color-primary-800);
}

/* Success Variant */
.scuba-badge--success {
  background: var(--semantic-color-success-light);
  color: var(--semantic-color-success-dark);
}

/* Warning Variant */
.scuba-badge--warning {
  background: var(--semantic-color-warning-light);
  color: var(--semantic-color-warning-dark);
}

/* Error Variant */
.scuba-badge--error {
  background: var(--semantic-color-error-light);
  color: var(--semantic-color-error-dark);
}

/* Contagem: com rounded, no mínimo um círculo. */
.scuba-badge--rounded.scuba-badge--sm {
  min-width: var(--scale-400);
  padding: 0 6px;
  box-sizing: border-box;
}

.scuba-badge--overlay {
  position: absolute;
  top: -6px;
  right: -6px;
  box-shadow: 0 0 0 2px var(--scuba-badge-ring, var(--context-color-surface-primary));
}

/* Danger: a contagem que pede atenção, no vermelho cheio (28/10/2026). */
.scuba-badge--danger {
  background: var(--primitives-color-red-600);
  color: var(--primitives-color-white);
}

/* White e page: contagens e etiquetas sobre fundos coloridos ou brancos (28/10/2026). */
.scuba-badge--white {
  background: var(--context-color-surface-primary);
  color: var(--primitives-color-gray-900);
}

.scuba-badge--page {
  background: var(--context-color-surface-page);
  color: var(--context-color-text-secondary);
}

/* Info Variant */
.scuba-badge--info {
  background: var(--semantic-color-info-light);
  color: var(--semantic-color-info-dark);
}
</style>
