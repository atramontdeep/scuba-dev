<template>
  <div :class="accordionItemClasses">
    <button
      :class="headerClasses"
      :aria-expanded="isOpen"
      @click="handleToggle"
      @focus="handleFocus"
      @blur="handleBlur"
    >
      <div class="scuba-accordion-item__header-content">
        <slot name="header">{{ title }}</slot>
      </div>

      <div class="scuba-accordion-item__actions">
        <slot name="chip" />

        <span class="scuba-accordion-item__icon">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 256 256"
            fill="currentColor"
          >
            <path d="M213.66,101.66l-80,80a8,8,0,0,1-11.32,0l-80-80A8,8,0,0,1,53.66,90.34L128,164.69l74.34-74.35a8,8,0,0,1,11.32,11.32Z" />
          </svg>
        </span>
      </div>
    </button>
    <transition name="accordion-content">
      <div v-show="isOpen" class="scuba-accordion-item__content">
        <div class="scuba-accordion-item__body">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
import { inject, computed, ref } from 'vue';

const props = defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  title: {
    type: String,
    default: ''
  },
  disabled: {
    type: Boolean,
    default: false
  }
});

const accordion = inject('accordion', null);
const isFocused = ref(false);

const isOpen = computed(() => {
  return accordion ? accordion.isOpen(props.id) : false;
});

const accordionItemClasses = computed(() => {
  return [
    'scuba-accordion-item',
    {
      'scuba-accordion-item--open': isOpen.value,
      'scuba-accordion-item--focused': isFocused.value && isOpen.value,
      'scuba-accordion-item--disabled': props.disabled
    }
  ];
});

const headerClasses = computed(() => {
  return [
    'scuba-accordion-item__header',
    {
      'scuba-accordion-item__header--open': isOpen.value,
      'scuba-accordion-item__header--focused': isFocused.value && isOpen.value
    }
  ];
});

const handleToggle = () => {
  if (!props.disabled && accordion) {
    accordion.toggleItem(props.id);
  }
};

const handleFocus = () => {
  isFocused.value = true;
};

const handleBlur = () => {
  isFocused.value = false;
};
</script>

<style scoped>
.scuba-accordion-item {
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-md);
  margin-bottom: var(--spacing-xs);
  overflow: hidden;
}

.scuba-accordion-item:last-child {
  margin-bottom: 0;
}

/* Focused state with blue border */
.scuba-accordion-item--focused {
  border-color: #60A5FA;
  box-shadow: 0 0 0 1px #60A5FA;
}

.scuba-accordion-item__header {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-md) var(--spacing-lg);
  background: var(--context-color-surface-primary);
  border: none;
  cursor: pointer;
  text-align: left;
  transition: background-color 0.2s ease;
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-medium);
  color: var(--context-color-text-primary);
}

.scuba-accordion-item__header:hover {
  background: var(--context-color-surface-secondary);
}

.scuba-accordion-item__header:focus {
  outline: none;
}

.scuba-accordion-item--disabled .scuba-accordion-item__header {
  cursor: not-allowed;
  opacity: 0.5;
}

.scuba-accordion-item__header-content {
  flex: 1;
}

.scuba-accordion-item__actions {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
}

.scuba-accordion-item__icon {
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--context-color-text-secondary);
  transition: transform 0.2s ease;
}

.scuba-accordion-item__header--open .scuba-accordion-item__icon {
  transform: rotate(180deg);
}

.scuba-accordion-item__content {
  overflow: hidden;
}

.scuba-accordion-item__body {
  padding: var(--spacing-md) var(--spacing-lg);
  color: var(--context-color-text-secondary);
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
}

/* Transition animations */
.accordion-content-enter-active,
.accordion-content-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
}

.accordion-content-enter-from,
.accordion-content-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
