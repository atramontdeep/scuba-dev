<template>
  <span :class="['scuba-file-tag', `scuba-file-tag--${kind}`, `scuba-file-tag--${size}`]">{{ label || ext.toUpperCase() }}</span>
</template>

<script setup>
// Etiqueta do formato de um arquivo (28/10/2026, das listas de documentos da jornada de carbono): PDF em vermelho,
// planilhas em verde, XML, ZIP e textos em azul, o resto em cinza.
import { computed } from 'vue';

const props = defineProps({
  // A extensão, com ou sem ponto: 'pdf', '.xlsx'.
  ext: {
    type: String,
    required: true
  },
  // Texto no lugar da extensão em caixa alta.
  label: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'sm',
    validator: (value) => ['sm', 'md'].includes(value)
  }
});

const KIND = {
  pdf: 'pdf',
  xls: 'sheet',
  xlsx: 'sheet',
  csv: 'sheet',
  ods: 'sheet',
  xml: 'doc',
  zip: 'doc',
  doc: 'doc',
  docx: 'doc',
  txt: 'doc'
};

const kind = computed(() => KIND[props.ext.replace(/^\./, '').toLowerCase()] ?? 'other');
</script>

<style scoped>
.scuba-file-tag {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  font-family: var(--type-font-family-body);
  font-weight: var(--type-font-weight-bold);
  line-height: 1.4;
  color: var(--primitives-color-white);
}

.scuba-file-tag--sm {
  padding: 1px var(--spacing-4xs);
  border-radius: 3px;
  font-size: 10px;
}

.scuba-file-tag--md {
  min-width: 52px;
  padding: 4px var(--spacing-2xs);
  border-radius: var(--border-radius-rounded-sm);
  font-size: var(--type-font-size-xs);
}

.scuba-file-tag--pdf {
  background: var(--primitives-color-red-600);
}

.scuba-file-tag--sheet {
  background: var(--semantic-color-success-dark);
}

.scuba-file-tag--doc {
  background: var(--primitives-color-blue-600);
}

.scuba-file-tag--other {
  background: var(--semantic-color-neutral-700);
}
</style>
