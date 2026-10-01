<template>
  <div class="scuba-upload-box">
    <div
      v-if="files.length"
      class="scuba-upload-box__list"
    >
      <UploadFile
        v-for="file in files"
        :key="file.id"
        :fileName="file.name"
        :uploadedBy="file.uploadedBy"
        :uploadedAt="file.uploadedAt"
        :fileType="file.type || 'pdf'"
        :disabled="disabled"
        @click="handleFileClick(file)"
      />
    </div>

    <div
      :class="dropzoneClasses"
      role="button"
      :tabindex="disabled ? -1 : 0"
      :aria-disabled="disabled"
      @click="handleDropzoneClick"
      @keydown.enter="handleDropzoneClick"
      @keydown.space.prevent="handleDropzoneClick"
      @dragover.prevent="handleDragOver"
      @dragleave.prevent="handleDragLeave"
      @drop.prevent="handleDrop"
    >
      <div class="scuba-upload-box__dropzone-content">
        <i class="ph ph-file-arrow-up scuba-upload-box__icon" aria-hidden="true"></i>

        <div class="scuba-upload-box__text">
          <p v-if="hasError" class="scuba-upload-box__error-message">{{ errorMessage }}</p>
          <p class="scuba-upload-box__hint">Clique ou arraste seus arquivos aqui para enviar</p>
          <p class="scuba-upload-box__formats">Formatos suportados: {{ acceptLabel }}</p>
        </div>
      </div>
    </div>

    <input
      ref="inputRef"
      type="file"
      multiple
      :accept="accept"
      :disabled="disabled"
      class="scuba-upload-box__input"
      @change="handleInputChange"
    />
  </div>
</template>

<script setup>
import { computed, ref } from 'vue';
import UploadFile from '../UploadFile/UploadFile.vue';

const props = defineProps({
  files: {
    type: Array,
    default: () => []
  },
  errorMessage: {
    type: String,
    default: ''
  },
  acceptLabel: {
    type: String,
    default: 'PDF, DOCX, XLS, PNG, JPEG, ZIP'
  },
  accept: {
    type: String,
    default: '.pdf,.doc,.docx,.xls,.xlsx,.png,.jpg,.jpeg,.zip'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['files-selected', 'file-click']);

const inputRef = ref(null);
const isDragOver = ref(false);

const hasError = computed(() => !!props.errorMessage && !props.files.length);

const dropzoneClasses = computed(() => [
  'scuba-upload-box__dropzone',
  {
    'scuba-upload-box__dropzone--error': hasError.value,
    'scuba-upload-box__dropzone--drag-over': isDragOver.value,
    'scuba-upload-box__dropzone--disabled': props.disabled
  }
]);

const openFileDialog = () => {
  if (!props.disabled) {
    inputRef.value?.click();
  }
};

const handleDropzoneClick = () => {
  openFileDialog();
};

const handleInputChange = (event) => {
  const selected = Array.from(event.target.files || []);
  if (selected.length) {
    emit('files-selected', selected);
  }
  event.target.value = '';
};

const handleDragOver = () => {
  if (!props.disabled) {
    isDragOver.value = true;
  }
};

const handleDragLeave = () => {
  isDragOver.value = false;
};

const handleDrop = (event) => {
  isDragOver.value = false;
  if (props.disabled) return;
  const dropped = Array.from(event.dataTransfer?.files || []);
  if (dropped.length) {
    emit('files-selected', dropped);
  }
};

const handleFileClick = (file) => {
  emit('file-click', file);
};
</script>

<style scoped>
.scuba-upload-box {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-ga-4);
  width: 100%;
  font-family: var(--type-font-family-body);
}

.scuba-upload-box__list {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-ga-4);
}

.scuba-upload-box__dropzone {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-ga-6);
  width: 100%;
  padding: var(--spacing-py-6) 0;
  border: 1px dashed var(--context-color-border-action-hover);
  border-radius: var(--border-radius-rounded);
  cursor: pointer;
  transition: background var(--transition-fast), border-color var(--transition-fast);
}

.scuba-upload-box__dropzone:hover:not(.scuba-upload-box__dropzone--disabled) {
  background: var(--semantic-color-primary-100);
}

.scuba-upload-box__dropzone--drag-over {
  background: var(--semantic-color-primary-100);
  border-color: var(--semantic-color-primary-500);
}

.scuba-upload-box__dropzone--error {
  border-color: var(--primitives-color-red-600);
}

.scuba-upload-box__dropzone--disabled {
  cursor: not-allowed;
  border-color: var(--context-color-border-disabled);
}

.scuba-upload-box__dropzone:focus-visible {
  outline: 2px solid var(--semantic-color-primary-500);
  outline-offset: 2px;
}

.scuba-upload-box__dropzone-content {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-3xs);
  width: 100%;
  max-width: 804px;
}

.scuba-upload-box__icon {
  font-size: var(--scale-1100); /* 72px */
  line-height: 1;
  color: var(--semantic-color-primary-300);
}

.scuba-upload-box__dropzone--error .scuba-upload-box__icon {
  color: var(--semantic-color-primary-300);
}

.scuba-upload-box__dropzone--disabled .scuba-upload-box__icon {
  color: var(--context-color-text-disabled);
}

.scuba-upload-box__text {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 100%;
}

.scuba-upload-box__error-message {
  margin: 0;
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  color: var(--primitives-color-red-600);
}

.scuba-upload-box__hint {
  margin: 0;
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

.scuba-upload-box__dropzone--disabled .scuba-upload-box__hint {
  color: var(--context-color-text-disabled);
}

.scuba-upload-box__formats {
  margin: 0;
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-tight);
  color: var(--context-color-text-secondary);
}

.scuba-upload-box__dropzone--disabled .scuba-upload-box__formats {
  color: var(--context-color-text-disabled);
}

.scuba-upload-box__input {
  display: none;
}
</style>
