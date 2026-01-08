<template>
  <div class="scuba-menu" ref="menuRef" @mouseleave="handleMouseLeave">
    <div
      ref="triggerRef"
      @click="handleTriggerClick"
      @mouseenter="handleMouseEnter"
      class="scuba-menu__trigger"
    >
      <slot name="trigger" />
    </div>

    <Transition name="scuba-menu-fade">
      <div
        v-if="isOpen"
        ref="menuContentRef"
        :class="menuContentClasses"
        :style="menuContentStyle"
        @click="handleMenuClick"
      >
        <div
          v-for="(item, index) in items"
          :key="index"
          :class="getItemClasses(item)"
          @click="!item.disabled && !item.isDivider && handleItemClick(item)"
        >
          <template v-if="item.isDivider">
            <div class="scuba-menu__divider"></div>
          </template>
          <template v-else>
            <component
              v-if="item.icon"
              :is="item.icon"
              :size="20"
              :weight="item.iconWeight || 'regular'"
              class="scuba-menu__item-icon"
            />
            <span class="scuba-menu__item-label">{{ item.label }}</span>
            <span v-if="item.shortcut" class="scuba-menu__item-shortcut">{{ item.shortcut }}</span>
            <component
              v-if="item.hasSubmenu"
              :is="PhCaretRight"
              :size="16"
              weight="regular"
              class="scuba-menu__item-caret"
            />
          </template>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue';
import { PhCaretRight } from '@phosphor-icons/vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // Expected format: [
    //   { label: 'Item', icon: Icon, onClick: fn, disabled: false, shortcut: '⌘K' },
    //   { isDivider: true }
    // ]
  },
  trigger: {
    type: String,
    default: 'click',
    validator: (value) => ['click', 'hover', 'both'].includes(value)
  },
  placement: {
    type: String,
    default: 'bottom-start',
    validator: (value) => [
      'top', 'top-start', 'top-end',
      'bottom', 'bottom-start', 'bottom-end',
      'left', 'left-start', 'left-end',
      'right', 'right-start', 'right-end'
    ].includes(value)
  },
  offset: {
    type: Number,
    default: 8
  },
  closeOnItemClick: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['item-click', 'open', 'close']);

const isOpen = ref(false);
const menuRef = ref(null);
const triggerRef = ref(null);
const menuContentRef = ref(null);
const hoverTimeout = ref(null);

const menuContentClasses = computed(() => {
  return [
    'scuba-menu__content',
    `scuba-menu__content--${props.placement}`
  ];
});

const menuContentStyle = computed(() => {
  return {
    '--menu-offset': `${props.offset}px`
  };
});

const getItemClasses = (item) => {
  return [
    'scuba-menu__item',
    {
      'scuba-menu__item--disabled': item.disabled,
      'scuba-menu__item--danger': item.variant === 'danger',
      'scuba-menu__item--has-submenu': item.hasSubmenu
    }
  ];
};

const open = () => {
  isOpen.value = true;
  emit('open');
};

const close = () => {
  isOpen.value = false;
  emit('close');
};

const handleTriggerClick = () => {
  if (props.trigger === 'click' || props.trigger === 'both') {
    isOpen.value ? close() : open();
  }
};

const handleMouseEnter = () => {
  if (props.trigger === 'hover' || props.trigger === 'both') {
    clearTimeout(hoverTimeout.value);
    open();
  }
};

const handleMouseLeave = () => {
  if (props.trigger === 'hover' || props.trigger === 'both') {
    hoverTimeout.value = setTimeout(() => {
      close();
    }, 150);
  }
};

const handleItemClick = (item) => {
  if (item.onClick) {
    item.onClick(item);
  }
  emit('item-click', item);

  if (props.closeOnItemClick) {
    close();
  }
};

const handleMenuClick = (event) => {
  event.stopPropagation();
};

const handleClickOutside = (event) => {
  if (menuRef.value && !menuRef.value.contains(event.target)) {
    close();
  }
};

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  clearTimeout(hoverTimeout.value);
});

defineExpose({
  open,
  close,
  isOpen
});
</script>

<style scoped>
.scuba-menu {
  position: relative;
  display: inline-block;
}

.scuba-menu__trigger {
  cursor: pointer;
  display: inline-flex;
}

.scuba-menu__content {
  position: absolute;
  z-index: 1000;
  min-width: 200px;
  background: var(--context-color-surface-primary);
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-md);
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  padding: var(--spacing-2xs);
  font-family: var(--type-font-family-body);
}

/* Placement variations */
.scuba-menu__content--bottom,
.scuba-menu__content--bottom-start,
.scuba-menu__content--bottom-end {
  top: calc(100% + var(--menu-offset));
}

.scuba-menu__content--top,
.scuba-menu__content--top-start,
.scuba-menu__content--top-end {
  bottom: calc(100% + var(--menu-offset));
}

.scuba-menu__content--bottom-start,
.scuba-menu__content--top-start {
  left: 0;
}

.scuba-menu__content--bottom-end,
.scuba-menu__content--top-end {
  right: 0;
}

.scuba-menu__content--bottom,
.scuba-menu__content--top {
  left: 50%;
  transform: translateX(-50%);
}

.scuba-menu__content--left,
.scuba-menu__content--left-start,
.scuba-menu__content--left-end {
  right: calc(100% + var(--menu-offset));
}

.scuba-menu__content--right,
.scuba-menu__content--right-start,
.scuba-menu__content--right-end {
  left: calc(100% + var(--menu-offset));
}

.scuba-menu__content--left-start,
.scuba-menu__content--right-start {
  top: 0;
}

.scuba-menu__content--left-end,
.scuba-menu__content--right-end {
  bottom: 0;
}

.scuba-menu__content--left,
.scuba-menu__content--right {
  top: 50%;
  transform: translateY(-50%);
}

.scuba-menu__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-xs);
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-rounded-sm);
  cursor: pointer;
  transition: all 0.2s ease;
  color: var(--context-color-text-primary);
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  white-space: nowrap;
  user-select: none;
}

.scuba-menu__item:hover:not(.scuba-menu__item--disabled) {
  background: var(--context-color-surface-secondary);
}

.scuba-menu__item--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.scuba-menu__item--danger {
  color: var(--color-red-600);
}

.scuba-menu__item--danger:hover:not(.scuba-menu__item--disabled) {
  background: var(--color-red-50);
  color: var(--color-red-700);
}

.scuba-menu__item-icon {
  flex-shrink: 0;
  color: var(--context-color-text-secondary);
}

.scuba-menu__item--danger .scuba-menu__item-icon {
  color: currentColor;
}

.scuba-menu__item-label {
  flex: 1;
}

.scuba-menu__item-shortcut {
  margin-left: auto;
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-tertiary);
  font-family: monospace;
}

.scuba-menu__item-caret {
  margin-left: auto;
  color: var(--context-color-text-tertiary);
}

.scuba-menu__divider {
  height: var(--border-width-border-sm);
  background: var(--context-color-border-secondary);
  margin: var(--spacing-2xs) 0;
}

/* Transitions */
.scuba-menu-fade-enter-active,
.scuba-menu-fade-leave-active {
  transition: opacity 0.15s ease, transform 0.15s ease;
}

.scuba-menu-fade-enter-from,
.scuba-menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-8px);
}

.scuba-menu-fade-enter-to,
.scuba-menu-fade-leave-from {
  opacity: 1;
  transform: translateY(0);
}
</style>
