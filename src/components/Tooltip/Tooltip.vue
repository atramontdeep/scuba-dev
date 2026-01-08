<template>
  <div
    ref="tooltipWrapper"
    class="scuba-tooltip-wrapper"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    @focus="handleFocus"
    @blur="handleBlur"
    @click="handleClick"
  >
    <slot />

    <Teleport to="body">
      <Transition name="scuba-tooltip">
        <div
          v-if="isVisible"
          ref="tooltipContent"
          :class="tooltipClasses"
          :style="tooltipStyles"
          role="tooltip"
          :id="tooltipId"
          :aria-hidden="!isVisible"
        >
          <div v-if="showArrow" :class="arrowClasses"></div>
          <div class="scuba-tooltip__text">
            <slot name="content">{{ content }}</slot>
          </div>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted, onUnmounted } from 'vue';

const props = defineProps({
  content: { type: String, default: '' },
  position: {
    type: String,
    default: 'top',
    validator: (value) => ['top', 'bottom', 'left', 'right'].includes(value)
  },
  variant: {
    type: String,
    default: 'dark',
    validator: (value) => ['dark', 'light'].includes(value)
  },
  trigger: {
    type: String,
    default: 'hover',
    validator: (value) => ['hover', 'click', 'focus', 'manual'].includes(value)
  },
  showArrow: { type: Boolean, default: true },
  delay: { type: Number, default: 200 },
  offset: { type: Number, default: 8 },
  disabled: { type: Boolean, default: false },
  maxWidth: { type: String, default: '300px' },
  id: { type: String, default: null },
});

const emit = defineEmits(['show', 'hide']);

const tooltipWrapper = ref(null);
const tooltipContent = ref(null);
const isVisible = ref(false);
const tooltipStyles = ref({});
let showTimeout = null;
let hideTimeout = null;

const tooltipId = computed(() => {
  if (props.id) return props.id;
  return 'scuba-tooltip-' + Math.random().toString(36).substr(2, 9);
});

const tooltipClasses = computed(() => {
  const classes = ['scuba-tooltip'];
  classes.push(`scuba-tooltip--${props.position}`);
  classes.push(`scuba-tooltip--${props.variant}`);
  if (props.showArrow) {
    classes.push('scuba-tooltip--with-arrow');
  }
  return classes;
});

const arrowClasses = computed(() => {
  const classes = ['scuba-tooltip__arrow'];
  classes.push(`scuba-tooltip__arrow--${props.position}`);
  return classes;
});

const show = () => {
  if (props.disabled) return;

  clearTimeout(hideTimeout);

  if (props.delay > 0) {
    showTimeout = setTimeout(() => {
      isVisible.value = true;
      emit('show');
      nextTick(() => {
        updatePosition();
      });
    }, props.delay);
  } else {
    isVisible.value = true;
    emit('show');
    nextTick(() => {
      updatePosition();
    });
  }
};

const hide = () => {
  clearTimeout(showTimeout);

  hideTimeout = setTimeout(() => {
    isVisible.value = false;
    emit('hide');
  }, 100);
};

const handleMouseEnter = () => {
  if (props.trigger === 'hover') {
    show();
  }
};

const handleMouseLeave = () => {
  if (props.trigger === 'hover') {
    hide();
  }
};

const handleFocus = () => {
  if (props.trigger === 'focus' || props.trigger === 'hover') {
    show();
  }
};

const handleBlur = () => {
  if (props.trigger === 'focus' || props.trigger === 'hover') {
    hide();
  }
};

const handleClick = () => {
  if (props.trigger === 'click') {
    if (isVisible.value) {
      hide();
    } else {
      show();
    }
  }
};

const updatePosition = () => {
  if (!tooltipWrapper.value || !tooltipContent.value) return;

  const wrapperRect = tooltipWrapper.value.getBoundingClientRect();
  const tooltipRect = tooltipContent.value.getBoundingClientRect();

  let top = 0;
  let left = 0;

  const arrowSize = props.showArrow ? 6 : 0;
  const totalOffset = props.offset + arrowSize;

  switch (props.position) {
    case 'top':
      top = wrapperRect.top - tooltipRect.height - totalOffset;
      left = wrapperRect.left + (wrapperRect.width / 2) - (tooltipRect.width / 2);
      break;
    case 'bottom':
      top = wrapperRect.bottom + totalOffset;
      left = wrapperRect.left + (wrapperRect.width / 2) - (tooltipRect.width / 2);
      break;
    case 'left':
      top = wrapperRect.top + (wrapperRect.height / 2) - (tooltipRect.height / 2);
      left = wrapperRect.left - tooltipRect.width - totalOffset;
      break;
    case 'right':
      top = wrapperRect.top + (wrapperRect.height / 2) - (tooltipRect.height / 2);
      left = wrapperRect.right + totalOffset;
      break;
  }

  // Ensure tooltip stays within viewport
  const padding = 8;
  if (left < padding) {
    left = padding;
  } else if (left + tooltipRect.width > window.innerWidth - padding) {
    left = window.innerWidth - tooltipRect.width - padding;
  }

  if (top < padding) {
    top = padding;
  } else if (top + tooltipRect.height > window.innerHeight - padding) {
    top = window.innerHeight - tooltipRect.height - padding;
  }

  tooltipStyles.value = {
    top: `${top + window.scrollY}px`,
    left: `${left + window.scrollX}px`,
    maxWidth: props.maxWidth,
  };
};

const handleClickOutside = (event) => {
  if (props.trigger === 'click' && isVisible.value) {
    if (tooltipWrapper.value && !tooltipWrapper.value.contains(event.target)) {
      if (tooltipContent.value && !tooltipContent.value.contains(event.target)) {
        hide();
      }
    }
  }
};

const handleScroll = () => {
  if (isVisible.value) {
    updatePosition();
  }
};

const handleResize = () => {
  if (isVisible.value) {
    updatePosition();
  }
};

watch(() => props.disabled, (newVal) => {
  if (newVal && isVisible.value) {
    hide();
  }
});

onMounted(() => {
  document.addEventListener('click', handleClickOutside);
  window.addEventListener('scroll', handleScroll, true);
  window.addEventListener('resize', handleResize);
});

onUnmounted(() => {
  document.removeEventListener('click', handleClickOutside);
  window.removeEventListener('scroll', handleScroll, true);
  window.removeEventListener('resize', handleResize);
  clearTimeout(showTimeout);
  clearTimeout(hideTimeout);
});

// Expose methods for manual control
defineExpose({
  show,
  hide,
  isVisible,
});
</script>

<style scoped>
.scuba-tooltip-wrapper {
  display: inline-flex;
  position: relative;
}

.scuba-tooltip {
  position: absolute;
  z-index: var(--z-index-tooltip);
  padding: var(--spacing-3xs) var(--spacing-2xs);
  border-radius: var(--border-radius-rounded-sm);
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  word-wrap: break-word;
  pointer-events: none;
  box-shadow: var(--shadow-md);
}

.scuba-tooltip--dark {
  background: var(--context-color-surface-inverted);
  color: var(--context-color-text-inverted);
}

.scuba-tooltip--light {
  background: var(--context-color-surface-primary);
  color: var(--context-color-text-primary);
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-tooltip__text {
  position: relative;
  z-index: 1;
}

.scuba-tooltip__arrow {
  position: absolute;
  width: 0;
  height: 0;
  border-style: solid;
}

.scuba-tooltip--dark .scuba-tooltip__arrow {
  border-color: var(--context-color-surface-inverted);
}

.scuba-tooltip--light .scuba-tooltip__arrow {
  border-color: var(--context-color-surface-primary);
}

.scuba-tooltip__arrow--top {
  bottom: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 6px 6px 0 6px;
  border-color: inherit;
  border-bottom-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}

.scuba-tooltip--dark .scuba-tooltip__arrow--top {
  border-top-color: var(--context-color-surface-inverted);
}

.scuba-tooltip--light .scuba-tooltip__arrow--top {
  border-top-color: var(--context-color-surface-primary);
}

.scuba-tooltip__arrow--bottom {
  top: -6px;
  left: 50%;
  transform: translateX(-50%);
  border-width: 0 6px 6px 6px;
  border-color: inherit;
  border-top-color: transparent;
  border-left-color: transparent;
  border-right-color: transparent;
}

.scuba-tooltip--dark .scuba-tooltip__arrow--bottom {
  border-bottom-color: var(--context-color-surface-inverted);
}

.scuba-tooltip--light .scuba-tooltip__arrow--bottom {
  border-bottom-color: var(--context-color-surface-primary);
}

.scuba-tooltip__arrow--left {
  right: -6px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 6px 0 6px 6px;
  border-color: inherit;
  border-top-color: transparent;
  border-right-color: transparent;
  border-bottom-color: transparent;
}

.scuba-tooltip--dark .scuba-tooltip__arrow--left {
  border-left-color: var(--context-color-surface-inverted);
}

.scuba-tooltip--light .scuba-tooltip__arrow--left {
  border-left-color: var(--context-color-surface-primary);
}

.scuba-tooltip__arrow--right {
  left: -6px;
  top: 50%;
  transform: translateY(-50%);
  border-width: 6px 6px 6px 0;
  border-color: inherit;
  border-top-color: transparent;
  border-left-color: transparent;
  border-bottom-color: transparent;
}

.scuba-tooltip--dark .scuba-tooltip__arrow--right {
  border-right-color: var(--context-color-surface-inverted);
}

.scuba-tooltip--light .scuba-tooltip__arrow--right {
  border-right-color: var(--context-color-surface-primary);
}

/* Transition animations */
.scuba-tooltip-enter-active,
.scuba-tooltip-leave-active {
  transition: opacity var(--transition-fast), transform var(--transition-fast);
}

.scuba-tooltip-enter-from,
.scuba-tooltip-leave-to {
  opacity: 0;
}

.scuba-tooltip--top.scuba-tooltip-enter-from,
.scuba-tooltip--top.scuba-tooltip-leave-to {
  transform: translateY(4px);
}

.scuba-tooltip--bottom.scuba-tooltip-enter-from,
.scuba-tooltip--bottom.scuba-tooltip-leave-to {
  transform: translateY(-4px);
}

.scuba-tooltip--left.scuba-tooltip-enter-from,
.scuba-tooltip--left.scuba-tooltip-leave-to {
  transform: translateX(4px);
}

.scuba-tooltip--right.scuba-tooltip-enter-from,
.scuba-tooltip--right.scuba-tooltip-leave-to {
  transform: translateX(-4px);
}
</style>
