<template>
  <div :class="wrapperClasses">
    <div
      ref="tabListRef"
      :class="tabListClasses"
      role="tablist"
      :aria-orientation="orientation"
    >
      <button
        v-for="(tab, index) in tabs"
        :key="tab.value || index"
        :class="getTabClasses(tab)"
        role="tab"
        :aria-selected="isActive(tab)"
        :aria-controls="`${tabPanelId}-${index}`"
        :id="`${tabId}-${index}`"
        :tabindex="isActive(tab) ? 0 : -1"
        :disabled="tab.disabled"
        @click="selectTab(tab)"
        @keydown.right.prevent="navigateTab(1)"
        @keydown.left.prevent="navigateTab(-1)"
        @keydown.down.prevent="navigateTab(1)"
        @keydown.up.prevent="navigateTab(-1)"
        @keydown.home.prevent="navigateToFirst"
        @keydown.end.prevent="navigateToLast"
      >
        <i v-if="tab.icon && showIcons" :class="['ph', tab.icon, 'scuba-tabs__icon']"></i>
        <span class="scuba-tabs__label">{{ tab.label }}</span>
        <span v-if="tab.badge" class="scuba-tabs__badge">{{ tab.badge }}</span>
      </button>

      <!-- Active indicator for underline variant -->
      <div
        ref="indicator"
        class="scuba-tabs__indicator"
        :style="indicatorStyle"
      ></div>
    </div>

    <div class="scuba-tabs__panels">
      <div
        v-for="(tab, index) in tabs"
        :key="tab.value || index"
        :class="getPanelClasses(tab)"
        role="tabpanel"
        :id="`${tabPanelId}-${index}`"
        :aria-labelledby="`${tabId}-${index}`"
        :tabindex="0"
      >
        <slot :name="tab.value || `panel-${index}`" :tab="tab">
          {{ tab.content }}
        </slot>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch, nextTick, onMounted } from 'vue';

const props = defineProps({
  modelValue: { type: [String, Number], default: null },
  tabs: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(tab =>
        typeof tab === 'object' &&
        'label' in tab
      );
    }
  },
  orientation: {
    type: String,
    default: 'horizontal',
    validator: (value) => ['horizontal', 'vertical'].includes(value)
  },
  fullWidth: { type: Boolean, default: false },
  size: {
    type: String,
    default: 'sm',
    validator: (value) => ['sm'].includes(value)
  },
  showIcons: { type: Boolean, default: false },
  id: { type: String, default: null },
});

const emit = defineEmits(['update:modelValue', 'change']);

const indicator = ref(null);
const indicatorStyle = ref({});
const tabListRef = ref(null);

const tabId = computed(() => {
  if (props.id) return `${props.id}-tab`;
  return 'scuba-tab-' + Math.random().toString(36).substr(2, 9);
});

const tabPanelId = computed(() => {
  if (props.id) return `${props.id}-panel`;
  return 'scuba-panel-' + Math.random().toString(36).substr(2, 9);
});

const activeTab = computed(() => {
  if (props.modelValue !== null) {
    return props.tabs.find(tab => tab.value === props.modelValue);
  }
  // Default to first non-disabled tab
  return props.tabs.find(tab => !tab.disabled) || props.tabs[0];
});

const activeIndex = computed(() => {
  return props.tabs.indexOf(activeTab.value);
});

const wrapperClasses = computed(() => {
  const classes = ['scuba-tabs'];
  classes.push('scuba-tabs--underline');
  classes.push(`scuba-tabs--${props.orientation}`);
  classes.push(`scuba-tabs--${props.size}`);
  return classes;
});

const tabListClasses = computed(() => {
  const classes = ['scuba-tabs__list'];
  if (props.fullWidth) {
    classes.push('scuba-tabs__list--full-width');
  }
  return classes;
});

const isActive = (tab) => {
  return tab === activeTab.value;
};

const getTabClasses = (tab) => {
  const classes = ['scuba-tabs__tab'];

  if (isActive(tab)) {
    classes.push('scuba-tabs__tab--active');
  }

  if (tab.disabled) {
    classes.push('scuba-tabs__tab--disabled');
  }

  return classes;
};

const getPanelClasses = (tab) => {
  const classes = ['scuba-tabs__panel'];

  if (isActive(tab)) {
    classes.push('scuba-tabs__panel--active');
  }

  return classes;
};

const selectTab = (tab) => {
  if (tab.disabled) return;

  emit('update:modelValue', tab.value);
  emit('change', tab);

  nextTick(() => {
    updateIndicator();
  });
};

const navigateTab = (direction) => {
  const enabledTabs = props.tabs.filter(tab => !tab.disabled);
  if (enabledTabs.length === 0) return;

  const currentIndex = enabledTabs.indexOf(activeTab.value);
  let newIndex = currentIndex + direction;

  // Wrap around
  if (newIndex < 0) {
    newIndex = enabledTabs.length - 1;
  } else if (newIndex >= enabledTabs.length) {
    newIndex = 0;
  }

  selectTab(enabledTabs[newIndex]);
};

const navigateToFirst = () => {
  const firstEnabled = props.tabs.find(tab => !tab.disabled);
  if (firstEnabled) {
    selectTab(firstEnabled);
  }
};

const navigateToLast = () => {
  const enabledTabs = props.tabs.filter(tab => !tab.disabled);
  if (enabledTabs.length > 0) {
    selectTab(enabledTabs[enabledTabs.length - 1]);
  }
};

const updateIndicator = () => {
  if (!indicator.value || !tabListRef.value) return;

  const tabButtons = tabListRef.value.querySelectorAll('.scuba-tabs__tab');
  const activeTabElement = tabButtons[activeIndex.value];

  if (!activeTabElement) return;

  const tabRect = activeTabElement.getBoundingClientRect();
  const listRect = tabListRef.value.getBoundingClientRect();

  if (props.orientation === 'horizontal') {
    indicatorStyle.value = {
      width: `${tabRect.width}px`,
      transform: `translateX(${tabRect.left - listRect.left}px)`,
    };
  } else {
    indicatorStyle.value = {
      height: `${tabRect.height}px`,
      transform: `translateY(${tabRect.top - listRect.top}px)`,
    };
  }
};

watch(() => props.modelValue, () => {
  nextTick(() => {
    updateIndicator();
  });
});

watch(() => props.tabs, () => {
  nextTick(() => {
    updateIndicator();
  });
}, { deep: true });

onMounted(() => {
  // Set initial active tab if not set
  if (props.modelValue === null) {
    const firstEnabled = props.tabs.find(tab => !tab.disabled);
    if (firstEnabled) {
      emit('update:modelValue', firstEnabled.value);
    }
  }

  nextTick(() => {
    updateIndicator();
  });

  // Update indicator on window resize
  window.addEventListener('resize', updateIndicator);
});
</script>

<style scoped>
.scuba-tabs {
  display: flex;
  font-family: var(--type-font-family-body);
  gap: var(--spacing-xs);
}

.scuba-tabs--horizontal {
  flex-direction: column;
}

.scuba-tabs--vertical {
  flex-direction: row;
}

.scuba-tabs__list {
  display: flex;
  position: relative;
  gap: var(--spacing-4xs);
}

.scuba-tabs--horizontal .scuba-tabs__list {
  flex-direction: row;
  overflow-x: auto;
  scrollbar-width: thin;
}

.scuba-tabs--vertical .scuba-tabs__list {
  flex-direction: column;
  overflow-y: auto;
}

.scuba-tabs__list--full-width {
  width: 100%;
}

.scuba-tabs__list--full-width .scuba-tabs__tab {
  flex: 1;
}

.scuba-tabs__tab {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: var(--spacing-3xs);
  padding: var(--spacing-2xs) var(--spacing-xs);
  background: transparent;
  border: none;
  cursor: pointer;
  font-family: var(--type-font-family-body);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-secondary);
  transition: all var(--transition-base);
  white-space: nowrap;
  position: relative;
  user-select: none;
}

/* Sizes */
.scuba-tabs--sm .scuba-tabs__tab {
  padding: var(--spacing-3xs) var(--spacing-2xs);
  font-size: var(--type-font-size-sm);
}

.scuba-tabs--md .scuba-tabs__tab {
  padding: var(--spacing-2xs) var(--spacing-xs);
  font-size: var(--type-font-size-base);
}

.scuba-tabs--lg .scuba-tabs__tab {
  padding: var(--spacing-xs) var(--spacing-sm);
  font-size: var(--type-font-size-lg);
}

.scuba-tabs__tab:hover:not(.scuba-tabs__tab--disabled) {
  color: var(--context-color-text-action-hover);
}

.scuba-tabs__tab:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
  border-radius: var(--border-radius-rounded-sm);
}

.scuba-tabs__tab--active {
  color: var(--context-color-text-action);
}

.scuba-tabs__tab--disabled {
  color: var(--context-color-text-disabled);
  cursor: not-allowed;
  opacity: 0.5;
}

.scuba-tabs__icon {
  font-size: 1.2em;
  flex-shrink: 0;
}

.scuba-tabs__label {
  flex-shrink: 0;
}

.scuba-tabs__badge {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 var(--spacing-4xs);
  background: var(--semantic-color-primary-500);
  color: var(--primitives-color-white);
  border-radius: var(--border-radius-rounded-pill);
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-bold);
  line-height: 1;
}

/* Underline variant */
.scuba-tabs--underline .scuba-tabs__list {
  border-bottom: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-tabs--underline.scuba-tabs--vertical .scuba-tabs__list {
  border-bottom: none;
  border-right: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-tabs--underline .scuba-tabs__indicator {
  position: absolute;
  bottom: -1px;
  left: 0;
  height: 2px;
  background: var(--semantic-color-primary-500);
  transition: all var(--transition-base);
}

.scuba-tabs--underline.scuba-tabs--vertical .scuba-tabs__indicator {
  bottom: auto;
  right: -1px;
  top: 0;
  width: 2px;
  height: 40px;
}

/* Pills variant */
.scuba-tabs--pills .scuba-tabs__tab {
  border-radius: var(--border-radius-rounded-pill);
}

.scuba-tabs--pills .scuba-tabs__tab:hover:not(.scuba-tabs__tab--disabled) {
  background: var(--context-color-surface-action);
}

.scuba-tabs--pills .scuba-tabs__tab--active {
  background: var(--semantic-color-primary-500);
  color: var(--primitives-color-white);
}

.scuba-tabs--pills .scuba-tabs__tab--active .scuba-tabs__badge {
  background: var(--primitives-color-white);
  color: var(--semantic-color-primary-500);
}

/* Enclosed variant */
.scuba-tabs--enclosed .scuba-tabs__list {
  border-bottom: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-tabs--enclosed.scuba-tabs--vertical .scuba-tabs__list {
  border-bottom: none;
  border-right: var(--border-width-border-sm) solid var(--context-color-border-secondary);
}

.scuba-tabs--enclosed .scuba-tabs__tab {
  border: var(--border-width-border-sm) solid transparent;
  border-bottom: none;
  border-radius: var(--border-radius-rounded-sm) var(--border-radius-rounded-sm) 0 0;
  margin-bottom: -1px;
}

.scuba-tabs--enclosed.scuba-tabs--vertical .scuba-tabs__tab {
  border-bottom: var(--border-width-border-sm) solid transparent;
  border-right: none;
  border-radius: var(--border-radius-rounded-sm) 0 0 var(--border-radius-rounded-sm);
  margin-bottom: 0;
  margin-right: -1px;
}

.scuba-tabs--enclosed .scuba-tabs__tab--active {
  border-color: var(--context-color-border-secondary);
  border-bottom-color: var(--context-color-surface-primary);
  background: var(--context-color-surface-primary);
}

.scuba-tabs--enclosed.scuba-tabs--vertical .scuba-tabs__tab--active {
  border-bottom-color: var(--context-color-border-secondary);
  border-right-color: var(--context-color-surface-primary);
}

/* Panels */
.scuba-tabs__panels {
  flex: 1;
  position: relative;
}

.scuba-tabs__panel {
  display: none;
  animation: fadeIn var(--transition-base);
  text-align: left;
}

.scuba-tabs__panel--active {
  display: block;
}

@keyframes fadeIn {
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
}

/* Scrollbar styling */
.scuba-tabs__list::-webkit-scrollbar {
  height: 4px;
  width: 4px;
}

.scuba-tabs__list::-webkit-scrollbar-track {
  background: var(--context-color-surface-secondary);
}

.scuba-tabs__list::-webkit-scrollbar-thumb {
  background: var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-pill);
}

.scuba-tabs__list::-webkit-scrollbar-thumb:hover {
  background: var(--context-color-border-action);
}
</style>
