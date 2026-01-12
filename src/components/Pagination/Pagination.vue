<template>
  <div :class="paginationClasses">
    <!-- Items per page selector -->
    <div class="scuba-pagination__per-page">
      <label class="scuba-pagination__label">{{ perPageLabel }}</label>
      <select
        :value="itemsPerPage"
        @change="handlePerPageChange"
        class="scuba-pagination__select"
      >
        <option
          v-for="option in perPageOptions"
          :key="option"
          :value="option"
        >
          {{ option }}
        </option>
      </select>
    </div>

    <!-- Page info text -->
    <div class="scuba-pagination__info">
      {{ pageInfoText }}
    </div>

    <!-- Navigation -->
    <nav class="scuba-pagination__nav" :aria-label="ariaLabel">
      <!-- Previous button -->
      <button
        :class="['scuba-pagination__button', 'scuba-pagination__button--nav']"
        @click="goToPrevious"
        :disabled="isFirstPage"
        :aria-label="previousLabel"
      >
        <i class="ph ph-caret-left"></i>
      </button>

      <!-- Page numbers -->
      <button
        v-for="page in displayedPages"
        :key="page"
        v-if="page !== '...'"
        :class="getPageButtonClasses(page)"
        @click="goToPage(page)"
        :aria-label="`${pageLabel} ${page}`"
        :aria-current="page === currentPage ? 'page' : undefined"
      >
        {{ page }}
      </button>
      <span
        v-else
        :key="`ellipsis-${page}`"
        class="scuba-pagination__ellipsis"
      >
        ...
      </span>

      <!-- Next button -->
      <button
        :class="['scuba-pagination__button', 'scuba-pagination__button--nav']"
        @click="goToNext"
        :disabled="isLastPage"
        :aria-label="nextLabel"
      >
        <i class="ph ph-caret-right"></i>
      </button>
    </nav>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';

const props = defineProps({
  modelValue: { type: Number, default: 1 },
  totalItems: { type: Number, required: true },
  itemsPerPage: { type: Number, default: 10 },
  perPageOptions: {
    type: Array,
    default: () => [10, 25, 50, 100]
  },
  siblingCount: { type: Number, default: 1 },
  boundaryCount: { type: Number, default: 1 },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  ariaLabel: { type: String, default: 'Paginação' },
  previousLabel: { type: String, default: 'Página anterior' },
  nextLabel: { type: String, default: 'Próxima página' },
  pageLabel: { type: String, default: 'Página' },
  perPageLabel: { type: String, default: 'Itens por página' },
  ofLabel: { type: String, default: 'de' }
});

const emit = defineEmits(['update:modelValue', 'update:itemsPerPage', 'change']);

const currentPage = computed(() => props.modelValue);
const totalPages = computed(() => Math.ceil(props.totalItems / props.itemsPerPage));

const isFirstPage = computed(() => currentPage.value === 1);
const isLastPage = computed(() => currentPage.value === totalPages.value);

const paginationClasses = computed(() => {
  const classes = ['scuba-pagination'];
  classes.push(`scuba-pagination--${props.size}`);
  return classes;
});

const pageInfoText = computed(() => {
  const start = (currentPage.value - 1) * props.itemsPerPage + 1;
  const end = Math.min(currentPage.value * props.itemsPerPage, props.totalItems);
  return `${start}-${end} ${props.ofLabel} ${props.totalItems}`;
});

// Calculate displayed page numbers with ellipsis
const displayedPages = computed(() => {
  const pages = [];
  const total = totalPages.value;
  const current = currentPage.value;
  const sibling = props.siblingCount;
  const boundary = props.boundaryCount;

  // Always show first boundary pages
  for (let i = 1; i <= Math.min(boundary, total); i++) {
    pages.push(i);
  }

  // Calculate start and end of sibling pages around current
  const siblingStart = Math.max(current - sibling, boundary + 1);
  const siblingEnd = Math.min(current + sibling, total - boundary);

  // Add left ellipsis if needed
  if (siblingStart > boundary + 1) {
    pages.push('...');
  }

  // Add sibling pages
  for (let i = siblingStart; i <= siblingEnd; i++) {
    if (i > boundary && i <= total - boundary) {
      pages.push(i);
    }
  }

  // Add right ellipsis if needed
  if (siblingEnd < total - boundary) {
    pages.push('...');
  }

  // Always show last boundary pages
  for (let i = Math.max(total - boundary + 1, boundary + 1); i <= total; i++) {
    if (!pages.includes(i)) {
      pages.push(i);
    }
  }

  return pages;
});

const getPageButtonClasses = (page) => {
  const classes = ['scuba-pagination__button', 'scuba-pagination__button--page'];

  if (page === currentPage.value) {
    classes.push('scuba-pagination__button--active');
  }

  return classes;
};

const goToPage = (page) => {
  if (page < 1 || page > totalPages.value || page === currentPage.value) return;
  emit('update:modelValue', page);
  emit('change', page);
};

const goToPrevious = () => {
  goToPage(currentPage.value - 1);
};

const goToNext = () => {
  goToPage(currentPage.value + 1);
};

const handlePerPageChange = (event) => {
  const newPerPage = parseInt(event.target.value);
  emit('update:itemsPerPage', newPerPage);
  // Reset to first page when changing items per page
  if (currentPage.value !== 1) {
    emit('update:modelValue', 1);
  }
};
</script>

<style scoped>
.scuba-pagination {
  display: flex;
  align-items: center;
  gap: var(--spacing-md);
  font-family: var(--type-font-family-body);
}

.scuba-pagination__per-page {
  display: flex;
  align-items: center;
  gap: var(--spacing-2xs);
}

.scuba-pagination__label {
  font-size: 14px;
  color: #6B7280;
  white-space: nowrap;
}

.scuba-pagination__select {
  padding: 8px 32px 8px 12px;
  background: #F3F4F6;
  border: none;
  border-radius: 4px;
  color: #1F2937;
  font-family: var(--type-font-family-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  appearance: none;
  background-image: url("data:image/svg+xml,%3Csvg width='12' height='8' viewBox='0 0 12 8' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M1 1.5L6 6.5L11 1.5' stroke='%231F2937' stroke-width='1.5' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E");
  background-repeat: no-repeat;
  background-position: right 12px center;
  min-width: 80px;
}

.scuba-pagination__select:hover {
  background: #E5E7EB;
}

.scuba-pagination__select:focus {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}

.scuba-pagination__info {
  font-size: 14px;
  color: #6B7280;
  white-space: nowrap;
}

.scuba-pagination__nav {
  display: flex;
  align-items: center;
  gap: 4px;
}

.scuba-pagination__button {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  padding: 0 8px;
  background: transparent;
  border: none;
  border-radius: 50%;
  color: #1F2937;
  font-family: var(--type-font-family-body);
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease;
  user-select: none;
}

.scuba-pagination__button--page {
  border-radius: 50%;
}

.scuba-pagination__button:hover:not(:disabled):not(.scuba-pagination__button--active) {
  background: #F3F4F6;
}

.scuba-pagination__button:focus-visible {
  outline: 2px solid #3B82F6;
  outline-offset: 2px;
}

.scuba-pagination__button:disabled {
  color: #D1D5DB;
  cursor: not-allowed;
}

.scuba-pagination__button--active {
  background: #1F2937;
  color: #FFFFFF;
}

.scuba-pagination__button--active:hover {
  background: #111827;
}

.scuba-pagination__ellipsis {
  display: flex;
  align-items: center;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  color: #6B7280;
  font-size: 14px;
  user-select: none;
}

/* Sizes */
.scuba-pagination--sm .scuba-pagination__button {
  min-width: 32px;
  height: 32px;
  font-size: 12px;
}

.scuba-pagination--sm .scuba-pagination__ellipsis {
  min-width: 32px;
  height: 32px;
  font-size: 12px;
}

.scuba-pagination--sm .scuba-pagination__select {
  padding: 6px 28px 6px 10px;
  font-size: 12px;
  min-width: 70px;
}

.scuba-pagination--sm .scuba-pagination__label,
.scuba-pagination--sm .scuba-pagination__info {
  font-size: 12px;
}

.scuba-pagination--md .scuba-pagination__button {
  min-width: 40px;
  height: 40px;
  font-size: 14px;
}

.scuba-pagination--md .scuba-pagination__ellipsis {
  min-width: 40px;
  height: 40px;
  font-size: 14px;
}

.scuba-pagination--md .scuba-pagination__select {
  padding: 8px 32px 8px 12px;
  font-size: 14px;
  min-width: 80px;
}

.scuba-pagination--md .scuba-pagination__label,
.scuba-pagination--md .scuba-pagination__info {
  font-size: 14px;
}

.scuba-pagination--lg .scuba-pagination__button {
  min-width: 48px;
  height: 48px;
  font-size: 16px;
}

.scuba-pagination--lg .scuba-pagination__ellipsis {
  min-width: 48px;
  height: 48px;
  font-size: 16px;
}

.scuba-pagination--lg .scuba-pagination__select {
  padding: 10px 36px 10px 14px;
  font-size: 16px;
  min-width: 90px;
}

.scuba-pagination--lg .scuba-pagination__label,
.scuba-pagination--lg .scuba-pagination__info {
  font-size: 16px;
}
</style>
