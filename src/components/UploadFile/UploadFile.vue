<template>
  <div
    :class="uploadFileClasses"
    role="button"
    :tabindex="disabled ? -1 : 0"
    :aria-disabled="disabled"
    @click="handleClick"
    @keydown.enter="handleClick"
    @keydown.space.prevent="handleClick"
  >
    <div class="scuba-upload-file__icon-wrapper">
      <i :class="iconClasses" aria-hidden="true"></i>
    </div>

    <div class="scuba-upload-file__content">
      <p class="scuba-upload-file__name">{{ fileName }}</p>
      <div class="scuba-upload-file__meta">
        <span v-if="uploadedBy">enviado por {{ uploadedBy }}</span>
        <span v-if="uploadedBy && uploadedAt">•</span>
        <span v-if="uploadedAt">{{ uploadedAt }}</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  fileName: {
    type: String,
    required: true
  },
  uploadedBy: {
    type: String,
    default: ''
  },
  uploadedAt: {
    type: String,
    default: ''
  },
  fileType: {
    type: String,
    default: 'pdf'
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

const iconClasses = computed(() => `ph ph-file-${props.fileType} scuba-upload-file__icon`);

const uploadFileClasses = computed(() => [
  'scuba-upload-file',
  {
    'scuba-upload-file--disabled': props.disabled
  }
]);

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
.scuba-upload-file {
  display: flex;
  align-items: center;
  gap: var(--spacing-ga-2);
  width: 100%;
  padding: var(--spacing-py-5) var(--spacing-px-5);
  background: var(--context-color-surface-primary);
  border: 1px solid var(--context-color-border-action);
  border-radius: var(--border-radius-rounded);
  box-shadow: 0 1px 1.5px rgba(194, 194, 194, 0.1), 0 6px 3px rgba(194, 194, 194, 0.09);
  font-family: var(--type-font-family-body);
  cursor: pointer;
  transition: box-shadow var(--transition-fast), border-color var(--transition-fast);
}

.scuba-upload-file:hover:not(.scuba-upload-file--disabled) {
  border-color: var(--context-color-border-action);
  box-shadow: 0 4px 4px rgba(148, 148, 148, 0.1), 0 15px 7.5px rgba(148, 148, 148, 0.09);
}

.scuba-upload-file:focus-visible {
  outline: 2px solid var(--semantic-color-primary-500);
  outline-offset: 2px;
}

.scuba-upload-file--disabled {
  border-color: var(--context-color-border-disabled);
  box-shadow: none;
  cursor: not-allowed;
}

.scuba-upload-file__icon-wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}

.scuba-upload-file__icon {
  font-size: var(--scale-700); /* 40px */
  line-height: 1;
  color: var(--context-color-text-primary);
}

.scuba-upload-file--disabled .scuba-upload-file__icon {
  color: var(--context-color-text-disabled);
}

.scuba-upload-file__content {
  display: flex;
  flex-direction: column;
  min-width: 0;
}

.scuba-upload-file__name {
  margin: 0;
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.scuba-upload-file--disabled .scuba-upload-file__name {
  color: var(--context-color-text-disabled);
}

.scuba-upload-file__meta {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-tight);
  color: var(--context-color-text-secondary);
  white-space: nowrap;
}

.scuba-upload-file--disabled .scuba-upload-file__meta {
  color: var(--context-color-text-disabled);
}
</style>
