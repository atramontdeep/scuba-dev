<template>
  <Teleport to="body">
    <Transition name="scuba-drawer-backdrop">
      <div
        v-if="modelValue"
        class="scuba-drawer__backdrop"
        @click="handleBackdropClick"
      ></div>
    </Transition>

    <Transition :name="`scuba-drawer-${placement}`">
      <div
        v-if="modelValue"
        :class="drawerClasses"
        role="dialog"
        aria-modal="true"
        :aria-labelledby="headerId"
      >
        <div class="scuba-drawer__header">
          <h2 :id="headerId" class="scuba-drawer__title">
            <slot name="title">{{ title }}</slot>
          </h2>
          <button
            v-if="closable"
            class="scuba-drawer__close"
            @click="close"
            aria-label="Close drawer"
          >
            <PhX :size="24" weight="bold" />
          </button>
        </div>

        <div class="scuba-drawer__body">
          <slot />
        </div>

        <div v-if="$slots.footer || showTertiaryButton || showSecondaryButton || showPrimaryButton" class="scuba-drawer__footer">
          <slot name="footer">
            <div v-if="showTertiaryButton || showSecondaryButton || showPrimaryButton" class="scuba-drawer__footer-actions">
              <Button
                v-if="showTertiaryButton"
                variant="text"
                :size="buttonSize"
                :label="tertiaryButtonLabel"
                @click="handleTertiaryClick"
                class="scuba-drawer__button-tertiary"
              />
              <div class="scuba-drawer__footer-actions-right">
                <Button
                  v-if="showSecondaryButton"
                  variant="outline"
                  :size="buttonSize"
                  :label="secondaryButtonLabel"
                  @click="handleSecondaryClick"
                  class="scuba-drawer__button-secondary"
                />
                <Button
                  v-if="showPrimaryButton"
                  variant="solid"
                  :size="buttonSize"
                  :label="primaryButtonLabel"
                  @click="handlePrimaryClick"
                  class="scuba-drawer__button-primary"
                />
              </div>
            </div>
          </slot>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>

<script setup>
import { computed, watch, onMounted, onUnmounted } from 'vue';
import { PhX } from '@phosphor-icons/vue';
import Button from '../Button/Button.vue';

const props = defineProps({
  modelValue: {
    type: Boolean,
    default: false
  },
  title: {
    type: String,
    default: ''
  },
  placement: {
    type: String,
    default: 'right',
    validator: (value) => ['left', 'right', 'top', 'bottom'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg', 'full'].includes(value)
  },
  closable: {
    type: Boolean,
    default: true
  },
  closeOnBackdrop: {
    type: Boolean,
    default: true
  },
  closeOnEscape: {
    type: Boolean,
    default: true
  },
  showTertiaryButton: {
    type: Boolean,
    default: false
  },
  tertiaryButtonLabel: {
    type: String,
    default: 'Limpar'
  },
  showSecondaryButton: {
    type: Boolean,
    default: false
  },
  secondaryButtonLabel: {
    type: String,
    default: 'Cancelar'
  },
  showPrimaryButton: {
    type: Boolean,
    default: false
  },
  primaryButtonLabel: {
    type: String,
    default: 'Confirmar'
  },
  buttonSize: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  }
});

const emit = defineEmits(['update:modelValue', 'close', 'open', 'tertiary-click', 'secondary-click', 'primary-click']);

const headerId = computed(() => {
  return 'drawer-title-' + Math.random().toString(36).substr(2, 9);
});

const drawerClasses = computed(() => {
  return [
    'scuba-drawer',
    `scuba-drawer--${props.placement}`,
    `scuba-drawer--${props.size}`
  ];
});

const close = () => {
  emit('update:modelValue', false);
  emit('close');
};

const handleBackdropClick = () => {
  if (props.closeOnBackdrop) {
    close();
  }
};

const handleEscape = (event) => {
  if (event.key === 'Escape' && props.modelValue && props.closeOnEscape) {
    close();
  }
};

const handleTertiaryClick = () => {
  emit('tertiary-click');
};

const handleSecondaryClick = () => {
  emit('secondary-click');
};

const handlePrimaryClick = () => {
  emit('primary-click');
};

watch(() => props.modelValue, (newValue) => {
  if (newValue) {
    emit('open');
    // Prevent body scroll when drawer is open
    document.body.style.overflow = 'hidden';
  } else {
    // Restore body scroll when drawer is closed
    document.body.style.overflow = '';
  }
});

onMounted(() => {
  document.addEventListener('keydown', handleEscape);
});

onUnmounted(() => {
  document.removeEventListener('keydown', handleEscape);
  // Cleanup body overflow on unmount
  document.body.style.overflow = '';
});
</script>

<style scoped>
.scuba-drawer__backdrop {
  position: fixed;
  inset: 0;
  z-index: 1000;
  background: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(2px);
}

.scuba-drawer {
  position: fixed;
  z-index: 1001;
  background: var(--context-color-surface-primary);
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);
  display: flex;
  flex-direction: column;
  font-family: var(--type-font-family-body);
}

/* Placement */
.scuba-drawer--left,
.scuba-drawer--right {
  top: 0;
  bottom: 0;
}

.scuba-drawer--left {
  left: 0;
}

.scuba-drawer--right {
  right: 0;
}

.scuba-drawer--top,
.scuba-drawer--bottom {
  left: 0;
  right: 0;
}

.scuba-drawer--top {
  top: 0;
}

.scuba-drawer--bottom {
  bottom: 0;
}

/* Sizes for left/right drawers */
.scuba-drawer--left.scuba-drawer--sm,
.scuba-drawer--right.scuba-drawer--sm {
  width: 320px;
  max-width: 80vw;
}

.scuba-drawer--left.scuba-drawer--md,
.scuba-drawer--right.scuba-drawer--md {
  width: 480px;
  max-width: 85vw;
}

.scuba-drawer--left.scuba-drawer--lg,
.scuba-drawer--right.scuba-drawer--lg {
  width: 640px;
  max-width: 90vw;
}

.scuba-drawer--left.scuba-drawer--full,
.scuba-drawer--right.scuba-drawer--full {
  width: 100vw;
}

/* Sizes for top/bottom drawers */
.scuba-drawer--top.scuba-drawer--sm,
.scuba-drawer--bottom.scuba-drawer--sm {
  height: 240px;
  max-height: 60vh;
}

.scuba-drawer--top.scuba-drawer--md,
.scuba-drawer--bottom.scuba-drawer--md {
  height: 360px;
  max-height: 70vh;
}

.scuba-drawer--top.scuba-drawer--lg,
.scuba-drawer--bottom.scuba-drawer--lg {
  height: 480px;
  max-height: 80vh;
}

.scuba-drawer--top.scuba-drawer--full,
.scuba-drawer--bottom.scuba-drawer--full {
  height: 100vh;
}

.scuba-drawer__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg) var(--spacing-xl);
  border-bottom: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  flex-shrink: 0;
}

.scuba-drawer__title {
  margin: 0;
  font-size: var(--type-font-size-xl);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
  line-height: var(--type-line-height-tight);
}

.scuba-drawer__close {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: none;
  background: transparent;
  border-radius: var(--border-radius-rounded-sm);
  color: var(--context-color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.scuba-drawer__close:hover {
  background: var(--context-color-surface-secondary);
  color: var(--context-color-text-primary);
}

.scuba-drawer__close:focus {
  outline: none;
  box-shadow: 0 0 0 2px #BFDBFE;
}

.scuba-drawer__body {
  flex: 1;
  overflow-y: auto;
  padding: var(--spacing-xl);
}

.scuba-drawer__footer {
  padding: var(--spacing-lg) var(--spacing-xl);
  border-top: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  flex-shrink: 0;
}

.scuba-drawer__footer-actions {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--spacing-sm);
}

.scuba-drawer__footer-actions-right {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

/* Backdrop transitions */
.scuba-drawer-backdrop-enter-active,
.scuba-drawer-backdrop-leave-active {
  transition: opacity 0.3s ease;
}

.scuba-drawer-backdrop-enter-from,
.scuba-drawer-backdrop-leave-to {
  opacity: 0;
}

/* Drawer transitions - Left */
.scuba-drawer-left-enter-active,
.scuba-drawer-left-leave-active {
  transition: transform 0.3s ease;
}

.scuba-drawer-left-enter-from,
.scuba-drawer-left-leave-to {
  transform: translateX(-100%);
}

/* Drawer transitions - Right */
.scuba-drawer-right-enter-active,
.scuba-drawer-right-leave-active {
  transition: transform 0.3s ease;
}

.scuba-drawer-right-enter-from,
.scuba-drawer-right-leave-to {
  transform: translateX(100%);
}

/* Drawer transitions - Top */
.scuba-drawer-top-enter-active,
.scuba-drawer-top-leave-active {
  transition: transform 0.3s ease;
}

.scuba-drawer-top-enter-from,
.scuba-drawer-top-leave-to {
  transform: translateY(-100%);
}

/* Drawer transitions - Bottom */
.scuba-drawer-bottom-enter-active,
.scuba-drawer-bottom-leave-active {
  transition: transform 0.3s ease;
}

.scuba-drawer-bottom-enter-from,
.scuba-drawer-bottom-leave-to {
  transform: translateY(100%);
}
</style>
