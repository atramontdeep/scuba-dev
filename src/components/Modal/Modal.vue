<template>
  <Teleport to="body">
    <Transition name="scuba-modal-backdrop">
      <div
        v-if="isOpen"
        class="scuba-modal-backdrop"
        @click="handleBackdropClick"
        :style="{ zIndex: zIndex }"
      >
        <Transition name="scuba-modal">
          <div
            v-if="isOpen"
            ref="modalContent"
            :class="modalClasses"
            role="dialog"
            :aria-modal="true"
            :aria-labelledby="titleId"
            :aria-describedby="descriptionId"
            @click.stop
          >
            <!-- Header -->
            <div v-if="$slots.header || title" class="scuba-modal__header">
              <slot name="header">
                <h2 :id="titleId" class="scuba-modal__title">{{ title }}</h2>
              </slot>
              <button
                v-if="showClose"
                class="scuba-modal__close"
                @click="close"
                aria-label="Fechar modal"
                type="button"
              >
                <i class="ph ph-x"></i>
              </button>
            </div>

            <!-- Body -->
            <div :id="descriptionId" class="scuba-modal__body">
              <slot />
            </div>

            <!-- Footer -->
            <div v-if="$slots.footer" class="scuba-modal__footer">
              <slot name="footer" />
            </div>
          </div>
        </Transition>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { ref, computed, watch, onMounted, onUnmounted, nextTick } from 'vue';

const props = defineProps({
  modelValue: { type: Boolean, default: false },
  title: { type: String, default: '' },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'xl', 'full'].includes(value)
  },
  showClose: { type: Boolean, default: true },
  closeOnBackdrop: { type: Boolean, default: true },
  closeOnEscape: { type: Boolean, default: true },
  lockScroll: { type: Boolean, default: true },
  persistent: { type: Boolean, default: false },
  zIndex: { type: Number, default: null },
  id: { type: String, default: null },
});

const emit = defineEmits(['update:modelValue', 'open', 'close', 'opened', 'closed']);

const modalContent = ref(null);
const previousActiveElement = ref(null);
const focusableElements = ref([]);

const isOpen = computed(() => props.modelValue);

const titleId = computed(() => {
  if (props.id) return `${props.id}-title`;
  return 'scuba-modal-title-' + Math.random().toString(36).substr(2, 9);
});

const descriptionId = computed(() => {
  if (props.id) return `${props.id}-description`;
  return 'scuba-modal-description-' + Math.random().toString(36).substr(2, 9);
});

const modalClasses = computed(() => {
  const classes = ['scuba-modal'];
  classes.push(`scuba-modal--${props.size}`);
  return classes;
});

const open = () => {
  emit('update:modelValue', true);
  emit('open');

  nextTick(() => {
    setupFocusTrap();
    lockBodyScroll();
    emit('opened');
  });
};

const close = () => {
  if (props.persistent) return;

  emit('update:modelValue', false);
  emit('close');

  nextTick(() => {
    restoreFocus();
    unlockBodyScroll();
    emit('closed');
  });
};

const handleBackdropClick = () => {
  if (props.closeOnBackdrop && !props.persistent) {
    close();
  }
};

const handleEscape = (event) => {
  if (event.key === 'Escape' && props.closeOnEscape && isOpen.value && !props.persistent) {
    close();
  }
};

const setupFocusTrap = () => {
  // Store the currently focused element
  previousActiveElement.value = document.activeElement;

  // Get all focusable elements within the modal
  if (!modalContent.value) return;

  const focusableSelectors = [
    'a[href]',
    'button:not([disabled])',
    'textarea:not([disabled])',
    'input:not([disabled])',
    'select:not([disabled])',
    '[tabindex]:not([tabindex="-1"])'
  ];

  focusableElements.value = Array.from(
    modalContent.value.querySelectorAll(focusableSelectors.join(','))
  );

  // Focus first element
  if (focusableElements.value.length > 0) {
    focusableElements.value[0].focus();
  }
};

const handleTab = (event) => {
  if (!isOpen.value || focusableElements.value.length === 0) return;

  const firstElement = focusableElements.value[0];
  const lastElement = focusableElements.value[focusableElements.value.length - 1];

  if (event.shiftKey) {
    // Shift + Tab
    if (document.activeElement === firstElement) {
      event.preventDefault();
      lastElement.focus();
    }
  } else {
    // Tab
    if (document.activeElement === lastElement) {
      event.preventDefault();
      firstElement.focus();
    }
  }
};

const handleKeydown = (event) => {
  if (event.key === 'Tab') {
    handleTab(event);
  }
};

const restoreFocus = () => {
  if (previousActiveElement.value && previousActiveElement.value.focus) {
    previousActiveElement.value.focus();
  }
};

const lockBodyScroll = () => {
  if (!props.lockScroll) return;

  const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

  document.body.style.overflow = 'hidden';
  if (scrollbarWidth > 0) {
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }
};

const unlockBodyScroll = () => {
  if (!props.lockScroll) return;

  document.body.style.overflow = '';
  document.body.style.paddingRight = '';
};

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    open();
  } else {
    // Cleanup when closed externally
    restoreFocus();
    unlockBodyScroll();
  }
});

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
  document.addEventListener('keydown', handleKeydown);

  // If modal is initially open
  if (isOpen.value) {
    nextTick(() => {
      setupFocusTrap();
      lockBodyScroll();
    });
  }
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
  document.removeEventListener('keydown', handleKeydown);
  unlockBodyScroll();
});

// Expose methods for manual control
defineExpose({
  open,
  close,
});
</script>

<style scoped>
.scuba-modal-backdrop {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-md);
  z-index: var(--z-index-modal-backdrop);
  overflow-y: auto;
}

.scuba-modal {
  position: relative;
  background: var(--context-color-surface-primary);
  border-radius: var(--border-radius-rounded-lg);
  box-shadow: var(--shadow-2xl);
  display: flex;
  flex-direction: column;
  max-height: calc(100vh - var(--spacing-md) * 2);
  width: 100%;
  z-index: var(--z-index-modal);
  font-family: var(--type-font-family-body);
}

/* Sizes */
.scuba-modal--sm {
  max-width: 400px;
}

.scuba-modal--md {
  max-width: 600px;
}

.scuba-modal--lg {
  max-width: 800px;
}

.scuba-modal--xl {
  max-width: 1200px;
}

.scuba-modal--full {
  max-width: calc(100vw - var(--spacing-md) * 2);
  max-height: calc(100vh - var(--spacing-md) * 2);
}

/* Header */
.scuba-modal__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-md);
  padding: var(--spacing-md) var(--spacing-lg);
  border-bottom: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  flex-shrink: 0;
}

.scuba-modal__title {
  margin: 0;
  font-size: var(--type-font-size-xl);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
  line-height: var(--type-line-height-tight);
}

.scuba-modal__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--border-radius-rounded-sm);
  color: var(--context-color-icon-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
  flex-shrink: 0;
  font-size: 20px;
}

.scuba-modal__close:hover {
  background: var(--context-color-surface-action);
  color: var(--context-color-icon-primary);
}

.scuba-modal__close:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}

/* Body */
.scuba-modal__body {
  padding: var(--spacing-lg);
  overflow-y: auto;
  flex: 1;
  color: var(--context-color-text-primary);
  line-height: var(--type-line-height-normal);
}

/* Footer */
.scuba-modal__footer {
  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: var(--spacing-xs);
  padding: var(--spacing-md) var(--spacing-lg);
  border-top: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  flex-shrink: 0;
}

/* Scrollbar styling */
.scuba-modal__body::-webkit-scrollbar {
  width: 8px;
}

.scuba-modal__body::-webkit-scrollbar-track {
  background: var(--context-color-surface-secondary);
}

.scuba-modal__body::-webkit-scrollbar-thumb {
  background: var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-pill);
}

.scuba-modal__body::-webkit-scrollbar-thumb:hover {
  background: var(--context-color-border-action);
}

/* Backdrop transitions */
.scuba-modal-backdrop-enter-active,
.scuba-modal-backdrop-leave-active {
  transition: opacity var(--transition-base);
}

.scuba-modal-backdrop-enter-from,
.scuba-modal-backdrop-leave-to {
  opacity: 0;
}

/* Modal transitions */
.scuba-modal-enter-active,
.scuba-modal-leave-active {
  transition: all var(--transition-base);
}

.scuba-modal-enter-from,
.scuba-modal-leave-to {
  opacity: 0;
  transform: scale(0.95) translateY(-20px);
}

/* Responsive */
@media (max-width: 640px) {
  .scuba-modal-backdrop {
    padding: var(--spacing-xs);
  }

  .scuba-modal {
    max-height: calc(100vh - var(--spacing-xs) * 2);
  }

  .scuba-modal--full {
    max-width: calc(100vw - var(--spacing-xs) * 2);
    max-height: calc(100vh - var(--spacing-xs) * 2);
  }

  .scuba-modal__header {
    padding: var(--spacing-xs) var(--spacing-md);
  }

  .scuba-modal__title {
    font-size: var(--type-font-size-lg);
  }

  .scuba-modal__body {
    padding: var(--spacing-md);
  }

  .scuba-modal__footer {
    padding: var(--spacing-xs) var(--spacing-md);
    flex-wrap: wrap;
  }
}
</style>
