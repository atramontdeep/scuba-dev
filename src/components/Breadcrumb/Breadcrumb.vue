<template>
  <nav :class="breadcrumbClasses" :aria-label="ariaLabel">
    <ol class="scuba-breadcrumb__list">
      <li
        v-for="(item, index) in visibleItems"
        :key="index"
        :class="getItemClasses(item, index)"
      >
        <!-- Collapsed indicator -->
        <template v-if="item.isCollapsed">
          <button
            class="scuba-breadcrumb__collapsed"
            @click="toggleCollapsed"
            aria-label="Mostrar itens ocultos"
          >
            <i class="ph ph-dots-three"></i>
          </button>
        </template>

        <!-- Regular item -->
        <template v-else>
          <!-- Icon -->
          <i
            v-if="item.icon"
            :class="['ph', item.icon, 'scuba-breadcrumb__icon']"
          ></i>

          <!-- Link or text -->
          <a
            v-if="item.href && !isLast(index)"
            :href="item.href"
            :class="getLinkClasses(item, index)"
            @click.prevent="handleClick(item, index)"
          >
            {{ item.label }}
          </a>
          <span
            v-else
            :class="getTextClasses(item, index)"
            :aria-current="isLast(index) ? 'page' : undefined"
          >
            {{ item.label }}
          </span>

          <!-- Separator -->
          <span
            v-if="!isLast(index)"
            class="scuba-breadcrumb__separator"
            aria-hidden="true"
          >
            <i v-if="separatorIcon" :class="['ph', separatorIcon]"></i>
            <template v-else>{{ separator }}</template>
          </span>
        </template>
      </li>
    </ol>
  </nav>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  items: {
    type: Array,
    required: true,
    validator: (value) => {
      return value.every(item =>
        typeof item === 'object' &&
        'label' in item
      );
    }
  },
  separator: { type: String, default: '/' },
  separatorIcon: { type: String, default: 'ph-caret-right' },
  maxItems: { type: Number, default: null },
  size: {
    type: String,
    default: 'xs',
    validator: (value) => ['xs'].includes(value)
  },
  ariaLabel: { type: String, default: 'Breadcrumb' },
});

const emit = defineEmits(['click']);

const isCollapsed = ref(true);

const breadcrumbClasses = computed(() => {
  const classes = ['scuba-breadcrumb'];
  classes.push(`scuba-breadcrumb--${props.size}`);
  return classes;
});

const visibleItems = computed(() => {
  if (!props.maxItems || props.items.length <= props.maxItems) {
    return props.items;
  }

  if (!isCollapsed.value) {
    return props.items;
  }

  // Show first item, collapsed indicator, and last items
  const result = [];
  const itemsToShowAtEnd = props.maxItems - 2; // Reserve space for first item and collapsed indicator

  // First item
  result.push(props.items[0]);

  // Collapsed indicator
  result.push({ isCollapsed: true });

  // Last items
  const lastItems = props.items.slice(-itemsToShowAtEnd);
  result.push(...lastItems);

  return result;
});

const isLast = (index) => {
  return index === visibleItems.value.length - 1;
};

const getItemClasses = (item, index) => {
  const classes = ['scuba-breadcrumb__item'];

  if (item.isCollapsed) {
    classes.push('scuba-breadcrumb__item--collapsed');
  }

  if (isLast(index)) {
    classes.push('scuba-breadcrumb__item--current');
  }

  return classes;
};

const getLinkClasses = (item, index) => {
  const classes = ['scuba-breadcrumb__link'];

  if (item.disabled) {
    classes.push('scuba-breadcrumb__link--disabled');
  }

  return classes;
};

const getTextClasses = (item, index) => {
  const classes = ['scuba-breadcrumb__text'];

  if (isLast(index)) {
    classes.push('scuba-breadcrumb__text--current');
  }

  return classes;
};

const handleClick = (item, index) => {
  if (item.disabled) return;
  emit('click', { item, index });
};

const toggleCollapsed = () => {
  isCollapsed.value = !isCollapsed.value;
};
</script>

<style scoped>
.scuba-breadcrumb {
  font-family: var(--type-font-family-body);
}

.scuba-breadcrumb__list {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: var(--spacing-3xs);
  list-style: none;
  margin: 0;
  padding: 0;
}

.scuba-breadcrumb__item {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
}

.scuba-breadcrumb__item--collapsed {
  gap: var(--spacing-3xs);
}

.scuba-breadcrumb__icon {
  font-size: 1.2em;
  color: var(--context-color-icon-secondary);
  flex-shrink: 0;
}

.scuba-breadcrumb__link {
  color: var(--context-color-text-action);
  text-decoration: none;
  transition: color var(--transition-fast);
  cursor: pointer;
  font-weight: var(--type-font-weight-regular);
}

.scuba-breadcrumb__link:hover:not(.scuba-breadcrumb__link--disabled) {
  color: var(--context-color-text-action-hover);
  text-decoration: underline;
}

.scuba-breadcrumb__link:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
  border-radius: var(--border-radius-rounded-sm);
}

.scuba-breadcrumb__link--disabled {
  color: var(--context-color-text-disabled);
  cursor: not-allowed;
  pointer-events: none;
}

.scuba-breadcrumb__text {
  color: var(--context-color-text-secondary);
  font-weight: var(--type-font-weight-regular);
}

.scuba-breadcrumb__text--current {
  color: var(--context-color-text-primary);
  font-weight: var(--type-font-weight-semibold);
}

.scuba-breadcrumb__separator {
  display: flex;
  align-items: center;
  color: var(--context-color-text-secondary);
  user-select: none;
  font-size: 0.875em;
}

.scuba-breadcrumb__collapsed {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 32px;
  height: 32px;
  padding: 0;
  background: transparent;
  border: none;
  border-radius: var(--border-radius-rounded-sm);
  color: var(--context-color-text-secondary);
  cursor: pointer;
  transition: all var(--transition-fast);
  font-size: 1.2em;
}

.scuba-breadcrumb__collapsed:hover {
  background: var(--context-color-surface-action);
  color: var(--context-color-text-action);
}

.scuba-breadcrumb__collapsed:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}

/* Sizes */
.scuba-breadcrumb--xs {
  font-size: var(--type-font-size-xs);
}

.scuba-breadcrumb--xs .scuba-breadcrumb__collapsed {
  width: 24px;
  height: 24px;
}

/* Responsive behavior */
@media (max-width: 640px) {
  .scuba-breadcrumb__list {
    gap: var(--spacing-4xs);
  }

  .scuba-breadcrumb__item {
    gap: var(--spacing-4xs);
  }

  .scuba-breadcrumb__icon {
    font-size: 1em;
  }
}
</style>
