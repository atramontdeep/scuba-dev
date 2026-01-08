<template>
  <nav :class="paginationClasses" :aria-label="ariaLabel">
    <ul class="scuba-pagination__list">
      <!-- First page button -->
      <li v-if="showFirstLast" class="scuba-pagination__item">
        <button
          :class="getButtonClasses('first')"
          @click="goToFirst"
          :disabled="isFirstPage"
          :aria-label="firstLabel"
        >
          <i class="ph ph-caret-double-left"></i>
        </button>
      </li>

      <!-- Previous button -->
      <li class="scuba-pagination__item">
        <button
          :class="getButtonClasses('prev')"
          @click="goToPrevious"
          :disabled="isFirstPage"
          :aria-label="previousLabel"
        >
          <i class="ph ph-caret-left"></i>
        </button>
      </li>

      <!-- Page numbers -->
      <li
        v-for="page in displayedPages"
        :key="page"
        class="scuba-pagination__item"
      >
        <button
          v-if="page !== '...'"
          :class="getPageButtonClasses(page)"
          @click="goToPage(page)"
          :aria-label="`${pageLabel} ${page}`"
          :aria-current="page === currentPage ? 'page' : undefined"
        >
          {{ page }}
        </button>
        <span v-else class="scuba-pagination__ellipsis">
          <i class="ph ph-dots-three"></i>
        </span>
      </li>

      <!-- Next button -->
      <li class="scuba-pagination__item">
        <button
          :class="getButtonClasses('next')"
          @click="goToNext"
          :disabled="isLastPage"
          :aria-label="nextLabel"
        >
          <i class="ph ph-caret-right"></i>
        </button>
      </li>

      <!-- Last page button -->
      <li v-if="showFirstLast" class="scuba-pagination__item">
        <button
          :class="getButtonClasses('last')"
          @click="goToLast"
          :disabled="isLastPage"
          :aria-label="lastLabel"
        >
          <i class="ph ph-caret-double-right"></i>
        </button>
      </li>

      <!-- Page input -->
      <li v-if="showPageInput" class="scuba-pagination__item scuba-pagination__item--input">
        <span class="scuba-pagination__input-label">{{ pageInputLabel }}</span>
        <input
          type="number"
          :class="inputClasses"
          :value="inputValue"
          @input="handleInput"
          @keydown.enter="handleInputSubmit"
          :min="1"
          :max="totalPages"
          :aria-label="pageInputAriaLabel"
        />
      </li>
    </ul>

    <!-- Page info -->
    <div v-if="showPageInfo" class="scuba-pagination__info">
      {{ pageInfoText }}
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  modelValue: { type: Number, default: 1 },
  totalPages: { type: Number, required: true },
  siblingCount: { type: Number, default: 1 },
  boundaryCount: { type: Number, default: 1 },
  showFirstLast: { type: Boolean, default: true },
  showPageInput: { type: Boolean, default: false },
  showPageInfo: { type: Boolean, default: false },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  ariaLabel: { type: String, default: 'Paginação' },
  previousLabel: { type: String, default: 'Página anterior' },
  nextLabel: { type: String, default: 'Próxima página' },
  firstLabel: { type: String, default: 'Primeira página' },
  lastLabel: { type: String, default: 'Última página' },
  pageLabel: { type: String, default: 'Página' },
  pageInputLabel: { type: String, default: 'Ir para:' },
  pageInputAriaLabel: { type: String, default: 'Ir para página' },
  totalItems: { type: Number, default: null },
  itemsPerPage: { type: Number, default: 10 },
});

const emit = defineEmits(['update:modelValue', 'change']);

const inputValue = ref(props.modelValue);

const currentPage = computed(() => props.modelValue);

const isFirstPage = computed(() => currentPage.value === 1);
const isLastPage = computed(() => currentPage.value === props.totalPages);

const paginationClasses = computed(() => {
  const classes = ['scuba-pagination'];
  classes.push(`scuba-pagination--${props.size}`);
  return classes;
});

const inputClasses = computed(() => {
  const classes = ['scuba-pagination__input'];
  return classes;
});

const pageInfoText = computed(() => {
  if (!props.totalItems) {
    return `Página ${currentPage.value} de ${props.totalPages}`;
  }

  const start = (currentPage.value - 1) * props.itemsPerPage + 1;
  const end = Math.min(currentPage.value * props.itemsPerPage, props.totalItems);
  return `${start}-${end} de ${props.totalItems}`;
});

// Calculate displayed page numbers with ellipsis
const displayedPages = computed(() => {
  const pages = [];
  const totalPages = props.totalPages;
  const current = currentPage.value;
  const sibling = props.siblingCount;
  const boundary = props.boundaryCount;

  // Always show first boundary pages
  for (let i = 1; i <= Math.min(boundary, totalPages); i++) {
    pages.push(i);
  }

  // Calculate start and end of sibling pages around current
  const siblingStart = Math.max(current - sibling, boundary + 1);
  const siblingEnd = Math.min(current + sibling, totalPages - boundary);

  // Add left ellipsis if needed
  if (siblingStart > boundary + 1) {
    pages.push('...');
  }

  // Add sibling pages
  for (let i = siblingStart; i <= siblingEnd; i++) {
    if (i > boundary && i <= totalPages - boundary) {
      pages.push(i);
    }
  }

  // Add right ellipsis if needed
  if (siblingEnd < totalPages - boundary) {
    pages.push('...');
  }

  // Always show last boundary pages
  for (let i = Math.max(totalPages - boundary + 1, boundary + 1); i <= totalPages; i++) {
    if (!pages.includes(i)) {
      pages.push(i);
    }
  }

  return pages;
});

const getButtonClasses = (type) => {
  const classes = ['scuba-pagination__button'];
  classes.push(`scuba-pagination__button--${type}`);
  return classes;
};

const getPageButtonClasses = (page) => {
  const classes = ['scuba-pagination__button', 'scuba-pagination__button--page'];

  if (page === currentPage.value) {
    classes.push('scuba-pagination__button--active');
  }

  return classes;
};

const goToPage = (page) => {
  if (page < 1 || page > props.totalPages || page === currentPage.value) return;
  emit('update:modelValue', page);
  emit('change', page);
  inputValue.value = page;
};

const goToFirst = () => {
  goToPage(1);
};

const goToLast = () => {
  goToPage(props.totalPages);
};

const goToPrevious = () => {
  goToPage(currentPage.value - 1);
};

const goToNext = () => {
  goToPage(currentPage.value + 1);
};

const handleInput = (event) => {
  inputValue.value = event.target.value;
};

const handleInputSubmit = () => {
  const page = parseInt(inputValue.value);
  if (!isNaN(page) && page >= 1 && page <= props.totalPages) {
    goToPage(page);
  } else {
    // Reset to current page if invalid
    inputValue.value = currentPage.value;
  }
};

watch(() => props.modelValue, (newValue) => {
  inputValue.value = newValue;
});
</script>

<style scoped>
.scuba-pagination {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: var(--spacing-xs);
  font-family: var(--type-font-family-body);
}

.scuba-pagination__list {
  display: flex;
  align-items: center;
  gap: var(--spacing-4xs);
  list-style: none;
  margin: 0;
  padding: 0;
}

.scuba-pagination__item {
  display: flex;
  align-items: center;
}

.scuba-pagination__item--input {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  margin-left: var(--spacing-2xs);
}

.scuba-pagination__button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 var(--spacing-2xs);
  background: transparent;
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-sm);
  color: var(--context-color-text-primary);
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-base);
  font-weight: var(--type-font-weight-semibold);
  cursor: pointer;
  transition: all var(--transition-fast);
  user-select: none;
}

.scuba-pagination__button:hover:not(:disabled) {
  background: var(--context-color-surface-action);
  border-color: var(--context-color-border-action);
}

.scuba-pagination__button:focus-visible {
  outline: var(--border-width-border-md) solid var(--context-color-border-focus);
  outline-offset: 2px;
}

.scuba-pagination__button:disabled {
  color: var(--context-color-text-disabled);
  border-color: var(--context-color-border-disabled);
  cursor: not-allowed;
  opacity: 0.5;
}

.scuba-pagination__button--active {
  background: var(--semantic-color-primary-500);
  border-color: var(--semantic-color-primary-500);
  color: var(--primitives-color-white);
}

.scuba-pagination__button--active:hover {
  background: var(--semantic-color-primary-600);
  border-color: var(--semantic-color-primary-600);
}

.scuba-pagination__ellipsis {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  color: var(--context-color-text-secondary);
  font-size: 1.2em;
}

.scuba-pagination__input-label {
  font-size: var(--type-font-size-sm);
  color: var(--context-color-text-secondary);
  white-space: nowrap;
}

.scuba-pagination__input {
  width: 60px;
  height: 40px;
  padding: 0 var(--spacing-3xs);
  background: var(--context-color-surface-primary);
  border: var(--border-width-border-sm) solid var(--context-color-border-secondary);
  border-radius: var(--border-radius-rounded-sm);
  color: var(--context-color-text-primary);
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-base);
  text-align: center;
  transition: all var(--transition-fast);
}

.scuba-pagination__input:hover {
  border-color: var(--context-color-border-action);
}

.scuba-pagination__input:focus {
  outline: none;
  border-color: var(--context-color-border-focus);
  box-shadow: 0 0 0 3px var(--context-color-surface-focus-light);
}

.scuba-pagination__input::-webkit-inner-spin-button,
.scuba-pagination__input::-webkit-outer-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

.scuba-pagination__input[type='number'] {
  -moz-appearance: textfield;
}

.scuba-pagination__info {
  font-size: var(--type-font-size-sm);
  color: var(--context-color-text-secondary);
}

/* Sizes */
.scuba-pagination--sm .scuba-pagination__button {
  min-width: 32px;
  height: 32px;
  padding: 0 var(--spacing-3xs);
  font-size: var(--type-font-size-sm);
}

.scuba-pagination--sm .scuba-pagination__ellipsis {
  min-width: 32px;
  height: 32px;
}

.scuba-pagination--sm .scuba-pagination__input {
  width: 50px;
  height: 32px;
  font-size: var(--type-font-size-sm);
}

.scuba-pagination--sm .scuba-pagination__input-label {
  font-size: var(--type-font-size-xs);
}

.scuba-pagination--sm .scuba-pagination__info {
  font-size: var(--type-font-size-xs);
}

.scuba-pagination--md .scuba-pagination__button {
  min-width: 40px;
  height: 40px;
  padding: 0 var(--spacing-2xs);
  font-size: var(--type-font-size-base);
}

.scuba-pagination--md .scuba-pagination__ellipsis {
  min-width: 40px;
  height: 40px;
}

.scuba-pagination--md .scuba-pagination__input {
  width: 60px;
  height: 40px;
  font-size: var(--type-font-size-base);
}

.scuba-pagination--md .scuba-pagination__input-label {
  font-size: var(--type-font-size-sm);
}

.scuba-pagination--md .scuba-pagination__info {
  font-size: var(--type-font-size-sm);
}

.scuba-pagination--lg .scuba-pagination__button {
  min-width: 48px;
  height: 48px;
  padding: 0 var(--spacing-xs);
  font-size: var(--type-font-size-lg);
}

.scuba-pagination--lg .scuba-pagination__ellipsis {
  min-width: 48px;
  height: 48px;
}

.scuba-pagination--lg .scuba-pagination__input {
  width: 70px;
  height: 48px;
  font-size: var(--type-font-size-lg);
}

.scuba-pagination--lg .scuba-pagination__input-label {
  font-size: var(--type-font-size-base);
}

.scuba-pagination--lg .scuba-pagination__info {
  font-size: var(--type-font-size-base);
}

/* Responsive */
@media (max-width: 640px) {
  .scuba-pagination__list {
    gap: var(--spacing-4xs);
  }

  .scuba-pagination__button {
    min-width: 36px;
    height: 36px;
    padding: 0 var(--spacing-3xs);
    font-size: var(--type-font-size-sm);
  }

  .scuba-pagination__item--input {
    margin-left: var(--spacing-3xs);
  }
}
</style>
