<template>
  <div :class="uploadFileClasses">
    <span :class="formatClasses" aria-hidden="true">{{ formatLabel }}</span>

    <div class="scuba-upload-file__content">
      <p class="scuba-upload-file__title">
        <button
          v-if="clickable"
          type="button"
          class="scuba-upload-file__name scuba-upload-file__name--link"
          :disabled="disabled"
          @click="emit('click', $event)"
        >
          {{ fileName }}
        </button>
        <span v-else class="scuba-upload-file__name">{{ fileName }}</span>
        <span v-if="caption" class="scuba-upload-file__caption">{{ caption }}</span>
      </p>

      <p v-if="tag || detail" class="scuba-upload-file__detail">
        <span v-if="tag" class="scuba-upload-file__tag">{{ tag }}</span>
        <span v-if="detail">{{ detail }}</span>
      </p>

      <p v-if="status" :class="statusClasses">
        <i :class="['ph', statusIcon, 'scuba-upload-file__status-icon']" aria-hidden="true"></i>
        {{ status }}
      </p>

      <!-- Conteúdo extra abaixo do status, como uma pergunta sobre o arquivo. -->
      <div v-if="$slots.default" class="scuba-upload-file__extra">
        <slot />
      </div>
    </div>

    <button
      v-if="actionIcon"
      type="button"
      class="scuba-upload-file__action"
      :aria-label="actionLabel || `Ação em ${fileName}`"
      :disabled="disabled"
      @click="emit('action', $event)"
    >
      <i :class="['ph', actionIcon]" aria-hidden="true"></i>
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  fileName: {
    type: String,
    required: true
  },
  /** Formato do arquivo: pdf, docx, xls, png, jpeg ou zip. Vazio: vem da extensão do nome. */
  fileType: {
    type: String,
    default: ''
  },
  /** Texto pequeno ao lado do nome, como a origem ("de Arquivos.zip"). */
  caption: {
    type: String,
    default: ''
  },
  /** Tag com o tipo identificado do arquivo, como "Balancete". */
  tag: {
    type: String,
    default: ''
  },
  /** Descrição ao lado da tag, como o que foi lido no arquivo. */
  description: {
    type: String,
    default: ''
  },
  /** Linha de status abaixo, como "Cumpre: Balancete". */
  status: {
    type: String,
    default: ''
  },
  statusVariant: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'warning', 'error', 'neutral'].includes(value)
  },
  /** Ícone Phosphor do botão à direita, como "ph-trash". Vazio: sem botão. */
  actionIcon: {
    type: String,
    default: ''
  },
  actionLabel: {
    type: String,
    default: ''
  },
  /** Autor e data do envio. Aparecem no lugar da descrição quando ela não é passada. */
  uploadedBy: {
    type: String,
    default: ''
  },
  uploadedAt: {
    type: String,
    default: ''
  },
  /** Sem borda nem cantos, para empilhar numa lista com divisórias. */
  flat: {
    type: Boolean,
    default: false
  },
  /** O nome vira um botão que emite click, por exemplo para abrir o arquivo. */
  clickable: {
    type: Boolean,
    default: false
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click', 'action']);

const FORMATS = {
  pdf: { label: 'PDF', tone: 'pdf' },
  doc: { label: 'DOCX', tone: 'doc' },
  docx: { label: 'DOCX', tone: 'doc' },
  xls: { label: 'XLS', tone: 'xls' },
  xlsx: { label: 'XLS', tone: 'xls' },
  csv: { label: 'CSV', tone: 'xls' },
  png: { label: 'PNG', tone: 'img' },
  jpg: { label: 'JPEG', tone: 'img' },
  jpeg: { label: 'JPEG', tone: 'img' },
  zip: { label: 'ZIP', tone: 'zip' }
};

const format = computed(() => {
  const ext = (props.fileType || props.fileName.split('.').pop() || '').toLowerCase();
  return FORMATS[ext] || { label: ext.toUpperCase().slice(0, 4), tone: 'other' };
});

const formatLabel = computed(() => format.value.label);

const detail = computed(() => {
  if (props.description) return props.description;
  const parts = [];
  if (props.uploadedBy) parts.push(`enviado por ${props.uploadedBy}`);
  if (props.uploadedAt) parts.push(props.uploadedAt);
  return parts.join(' • ');
});

const STATUS_ICONS = {
  success: 'ph-check-circle',
  warning: 'ph-warning',
  error: 'ph-warning-circle',
  neutral: 'ph-info'
};

const statusIcon = computed(() => STATUS_ICONS[props.statusVariant]);

const uploadFileClasses = computed(() => [
  'scuba-upload-file',
  {
    'scuba-upload-file--flat': props.flat,
    'scuba-upload-file--disabled': props.disabled
  }
]);

const formatClasses = computed(() => [
  'scuba-upload-file__format',
  `scuba-upload-file__format--${format.value.tone}`
]);

const statusClasses = computed(() => [
  'scuba-upload-file__status',
  `scuba-upload-file__status--${props.statusVariant}`
]);
</script>

<style scoped>
.scuba-upload-file {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-xs);
  width: 100%;
  padding: var(--spacing-xs) var(--spacing-md);
  background: var(--context-color-surface-primary);
  border: 1px solid var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-md);
  font-family: var(--type-font-family-body);
  box-sizing: border-box;
}

.scuba-upload-file--flat {
  border: none;
  border-radius: 0;
}

/* Formato: etiqueta colorida com a extensão, como o selo de um arquivo. */
.scuba-upload-file__format {
  display: grid;
  place-items: center;
  /* Largura fixa: os nomes ficam alinhados qualquer que seja o formato (DOCX é o mais largo). */
  flex: 0 0 52px;
  width: 52px;
  height: 28px;
  margin-top: 2px;
  border-radius: var(--border-radius-rounded-sm);
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-bold);
  letter-spacing: 0.02em;
  line-height: 1;
  color: var(--primitives-color-white);
  background: var(--primitives-color-gray-700);
  box-sizing: border-box;
}

.scuba-upload-file__format--pdf {
  background: var(--primitives-color-red-600);
}

.scuba-upload-file__format--xls {
  background: var(--primitives-color-green-900);
}

.scuba-upload-file__format--doc {
  background: var(--primitives-color-blue-600);
}

.scuba-upload-file__format--img {
  background: var(--primitives-color-purple-blue-700);
}

.scuba-upload-file__format--zip {
  background: var(--primitives-color-gray-700);
}

.scuba-upload-file__content {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: var(--spacing-3xs);
  min-width: 0;
}

.scuba-upload-file__content p {
  margin: 0;
}

.scuba-upload-file__title {
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  column-gap: var(--spacing-3xs);
  min-width: 0;
}

.scuba-upload-file__name {
  padding: 0;
  border: none;
  background: none;
  font-family: inherit;
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  text-align: left;
  color: var(--context-color-text-primary);
  overflow-wrap: anywhere;
}

.scuba-upload-file__name--link {
  cursor: pointer;
}

.scuba-upload-file__name--link:hover:not(:disabled) {
  text-decoration: underline;
}

.scuba-upload-file__caption {
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-secondary);
}

.scuba-upload-file__detail {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-3xs);
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-secondary);
}

.scuba-upload-file__tag {
  padding: 0 var(--spacing-3xs);
  border-radius: var(--border-radius-rounded-pill);
  background: var(--context-color-surface-secondary);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
}

.scuba-upload-file__status {
  display: flex;
  align-items: flex-start;
  gap: var(--spacing-4xs);
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
}

.scuba-upload-file__status-icon {
  margin-top: 3px;
  font-size: 16px;
}

.scuba-upload-file__status--success {
  color: var(--semantic-color-success-dark);
}

/* Âmbar escuro: lido como amarelo, com contraste de 5,5:1 sobre o branco. */
.scuba-upload-file__status--warning {
  color: #8a6100;
}

.scuba-upload-file__status--error {
  color: var(--semantic-color-error-dark);
}

.scuba-upload-file__status--neutral {
  color: var(--context-color-text-secondary);
}

.scuba-upload-file__extra {
  margin-top: var(--spacing-4xs);
}

.scuba-upload-file__action {
  display: grid;
  place-items: center;
  flex: 0 0 32px;
  width: 32px;
  height: 32px;
  border: none;
  border-radius: var(--border-radius-rounded-sm);
  background: none;
  font-size: 20px;
  color: var(--context-color-icon-secondary);
  cursor: pointer;
}

.scuba-upload-file__action:hover:not(:disabled) {
  background: var(--context-color-surface-action);
  color: var(--context-color-text-primary);
}

.scuba-upload-file__action:focus-visible,
.scuba-upload-file__name--link:focus-visible {
  outline: 2px solid var(--context-color-border-focus);
  outline-offset: 2px;
}

.scuba-upload-file--disabled .scuba-upload-file__format {
  background: var(--context-color-text-disabled);
}

.scuba-upload-file--disabled .scuba-upload-file__name,
.scuba-upload-file--disabled .scuba-upload-file__detail,
.scuba-upload-file--disabled .scuba-upload-file__status,
.scuba-upload-file--disabled .scuba-upload-file__action {
  color: var(--context-color-text-disabled);
  cursor: not-allowed;
}
</style>
