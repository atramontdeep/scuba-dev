<template>
  <nav
    :class="navigationClasses"
    @mouseenter="handleMouseEnter"
    @mouseleave="handleMouseLeave"
    :aria-label="ariaLabel"
  >
    <div class="scuba-side-navigation__header">
      <div v-if="$slots.logo || logo" class="scuba-side-navigation__logo">
        <slot name="logo">
          <div class="scuba-side-navigation__logo-placeholder">
            {{ logo }}
          </div>
        </slot>
      </div>
      <button
        v-if="collapsible"
        class="scuba-side-navigation__toggle"
        @click="toggleCollapse"
        :aria-label="isCollapsed ? 'Expand sidebar' : 'Collapse sidebar'"
      >
        <PhCaretLeft :size="20" weight="bold" :class="toggleIconClasses" />
      </button>
    </div>

    <div class="scuba-side-navigation__content">
      <ul class="scuba-side-navigation__list">
        <li
          v-for="(item, index) in items"
          :key="index"
          :class="getItemClasses(item)"
        >
          <component
            :is="item.href ? 'a' : 'button'"
            :href="item.href"
            :class="getLinkClasses(item)"
            @click="!item.disabled && handleItemClick(item, $event)"
            :aria-current="item.active ? 'page' : undefined"
            :title="isCollapsed && !isExpanded ? item.label : undefined"
          >
            <component
              v-if="item.icon"
              :is="item.icon"
              :size="iconSize"
              :weight="item.active ? 'fill' : 'regular'"
              class="scuba-side-navigation__icon"
            />
            <span class="scuba-side-navigation__label">{{ item.label }}</span>
            <span
              v-if="item.badge"
              class="scuba-side-navigation__badge"
            >
              {{ item.badge }}
            </span>
          </component>

          <ul
            v-if="item.children && item.children.length"
            class="scuba-side-navigation__sublist"
          >
            <li
              v-for="(child, childIndex) in item.children"
              :key="childIndex"
              :class="getItemClasses(child)"
            >
              <component
                :is="child.href ? 'a' : 'button'"
                :href="child.href"
                :class="getLinkClasses(child)"
                @click="!child.disabled && handleItemClick(child, $event)"
                :aria-current="child.active ? 'page' : undefined"
              >
                <component
                  v-if="child.icon"
                  :is="child.icon"
                  :size="16"
                  :weight="child.active ? 'fill' : 'regular'"
                  class="scuba-side-navigation__icon"
                />
                <span class="scuba-side-navigation__label">{{ child.label }}</span>
                <span
                  v-if="child.badge"
                  class="scuba-side-navigation__badge"
                >
                  {{ child.badge }}
                </span>
              </component>
            </li>
          </ul>
        </li>
      </ul>

      <div v-if="$slots.footer" class="scuba-side-navigation__footer">
        <slot name="footer" />
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';
import { PhCaretLeft } from '@phosphor-icons/vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    // Expected: [{ label, icon, href?, active?, disabled?, badge?, children? }]
  },
  logo: {
    type: String,
    default: ''
  },
  collapsible: {
    type: Boolean,
    default: true
  },
  defaultCollapsed: {
    type: Boolean,
    default: true
  },
  expandOnHover: {
    type: Boolean,
    default: true
  },
  ariaLabel: {
    type: String,
    default: 'Main navigation'
  }
});

const emit = defineEmits(['item-click', 'collapse', 'expand']);

const isCollapsed = ref(props.defaultCollapsed);
const isExpanded = ref(false); // Temporary expansion on hover

const iconSize = computed(() => 24);

const navigationClasses = computed(() => {
  return [
    'scuba-side-navigation',
    {
      'scuba-side-navigation--collapsed': isCollapsed.value && !isExpanded.value,
      'scuba-side-navigation--expanded': !isCollapsed.value || isExpanded.value
    }
  ];
});

const toggleIconClasses = computed(() => {
  return [
    'scuba-side-navigation__toggle-icon',
    {
      'scuba-side-navigation__toggle-icon--collapsed': isCollapsed.value
    }
  ];
});

const getItemClasses = (item) => {
  return [
    'scuba-side-navigation__item',
    {
      'scuba-side-navigation__item--active': item.active,
      'scuba-side-navigation__item--disabled': item.disabled,
      'scuba-side-navigation__item--has-children': item.children && item.children.length
    }
  ];
};

const getLinkClasses = (item) => {
  return [
    'scuba-side-navigation__link',
    {
      'scuba-side-navigation__link--active': item.active,
      'scuba-side-navigation__link--disabled': item.disabled
    }
  ];
};

const toggleCollapse = () => {
  isCollapsed.value = !isCollapsed.value;
  if (isCollapsed.value) {
    emit('collapse');
  } else {
    emit('expand');
  }
};

const handleMouseEnter = () => {
  if (props.expandOnHover && isCollapsed.value) {
    isExpanded.value = true;
  }
};

const handleMouseLeave = () => {
  if (props.expandOnHover) {
    isExpanded.value = false;
  }
};

const handleItemClick = (item, event) => {
  if (!item.href) {
    event.preventDefault();
  }
  emit('item-click', item);
};
</script>

<style scoped>
.scuba-side-navigation {
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  background: var(--context-color-surface-primary);
  border-right: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  display: flex;
  flex-direction: column;
  transition: width 0.3s ease;
  z-index: 100;
  font-family: var(--type-font-family-body);
  overflow: hidden;
}

.scuba-side-navigation--collapsed {
  width: 72px;
}

.scuba-side-navigation--expanded {
  width: 280px;
}

.scuba-side-navigation__header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: var(--spacing-lg) var(--spacing-md);
  border-bottom: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  flex-shrink: 0;
  min-height: 72px;
}

.scuba-side-navigation__logo {
  display: flex;
  align-items: center;
  overflow: hidden;
}

.scuba-side-navigation__logo-placeholder {
  font-size: var(--type-font-size-xl);
  font-weight: var(--type-font-weight-bold);
  color: var(--color-primary-600);
  white-space: nowrap;
}

.scuba-side-navigation--collapsed .scuba-side-navigation__logo-placeholder {
  font-size: var(--type-font-size-lg);
}

.scuba-side-navigation__toggle {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  border: none;
  background: transparent;
  border-radius: var(--border-radius-rounded-sm);
  color: var(--context-color-text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
  flex-shrink: 0;
}

.scuba-side-navigation__toggle:hover {
  background: var(--context-color-surface-secondary);
  color: var(--context-color-text-primary);
}

.scuba-side-navigation__toggle-icon {
  transition: transform 0.3s ease;
}

.scuba-side-navigation__toggle-icon--collapsed {
  transform: rotate(180deg);
}

.scuba-side-navigation__content {
  flex: 1;
  overflow-y: auto;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.scuba-side-navigation__list {
  list-style: none;
  margin: 0;
  padding: var(--spacing-sm) 0;
  flex: 1;
}

.scuba-side-navigation__item {
  margin: 0;
}

.scuba-side-navigation__link {
  display: flex;
  align-items: center;
  gap: var(--spacing-sm);
  padding: var(--spacing-sm) var(--spacing-md);
  margin: 0 var(--spacing-xs);
  border: none;
  background: transparent;
  border-radius: var(--border-radius-rounded-sm);
  text-decoration: none;
  color: var(--context-color-text-secondary);
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-medium);
  cursor: pointer;
  transition: all 0.2s ease;
  width: calc(100% - var(--spacing-md));
  text-align: left;
  white-space: nowrap;
}

.scuba-side-navigation__link:hover:not(.scuba-side-navigation__link--disabled) {
  background: var(--context-color-surface-secondary);
  color: var(--context-color-text-primary);
}

.scuba-side-navigation__link--active {
  background: var(--color-primary-100);
  color: var(--color-primary-700);
  font-weight: var(--type-font-weight-semibold);
}

.scuba-side-navigation__link--active:hover {
  background: var(--color-primary-200);
}

.scuba-side-navigation__link--disabled {
  opacity: 0.5;
  cursor: not-allowed;
}

.scuba-side-navigation__icon {
  flex-shrink: 0;
}

.scuba-side-navigation__label {
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
}

.scuba-side-navigation--collapsed .scuba-side-navigation__label {
  opacity: 0;
  width: 0;
}

.scuba-side-navigation--expanded .scuba-side-navigation__label {
  opacity: 1;
  width: auto;
}

.scuba-side-navigation__badge {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 20px;
  height: 20px;
  padding: 0 var(--spacing-2xs);
  background: var(--color-red-500);
  color: var(--color-white);
  border-radius: 10px;
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-semibold);
  line-height: 1;
  flex-shrink: 0;
}

.scuba-side-navigation--collapsed .scuba-side-navigation__badge {
  position: absolute;
  top: 8px;
  right: 8px;
}

.scuba-side-navigation__sublist {
  list-style: none;
  margin: 0;
  padding: var(--spacing-2xs) 0 var(--spacing-2xs) var(--spacing-xl);
}

.scuba-side-navigation--collapsed .scuba-side-navigation__sublist {
  display: none;
}

.scuba-side-navigation__sublist .scuba-side-navigation__link {
  font-size: var(--type-font-size-sm);
  padding: var(--spacing-2xs) var(--spacing-md);
}

.scuba-side-navigation__footer {
  padding: var(--spacing-md);
  border-top: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  flex-shrink: 0;
}

/* Scrollbar styling */
.scuba-side-navigation__content::-webkit-scrollbar {
  width: 6px;
}

.scuba-side-navigation__content::-webkit-scrollbar-track {
  background: transparent;
}

.scuba-side-navigation__content::-webkit-scrollbar-thumb {
  background: var(--context-color-border-secondary);
  border-radius: 3px;
}

.scuba-side-navigation__content::-webkit-scrollbar-thumb:hover {
  background: var(--context-color-text-tertiary);
}
</style>
