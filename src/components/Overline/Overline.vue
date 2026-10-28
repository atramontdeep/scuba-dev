<template>
  <component :is="as" :class="['scuba-overline', `scuba-overline--${tone}`]">
    <slot>{{ label }}</slot>
  </component>
</template>

<script setup>
// Legenda pequena em caixa alta, para títulos de seção e rótulos (28/10/2026, da jornada de carbono). Um espaçamento só
// entre as letras, 0,1em (na jornada havia 0,1, 0,08 e 0,04em).
defineProps({
  label: {
    type: String,
    default: ''
  },
  as: {
    type: String,
    default: 'p'
  },
  // 'secondary', em cinza, para seções; 'primary', no preto do título; 'focus', no azul, como o nome de um guia.
  tone: {
    type: String,
    default: 'secondary',
    validator: (value) => ['secondary', 'primary', 'focus'].includes(value)
  }
});
</script>

<style scoped>
.scuba-overline {
  margin: 0;
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

.scuba-overline--secondary {
  color: var(--context-color-text-secondary);
}

.scuba-overline--primary {
  color: var(--primitives-color-gray-900);
}

.scuba-overline--focus {
  color: var(--context-color-surface-focus-dark);
}
</style>
