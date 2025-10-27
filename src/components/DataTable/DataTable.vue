<!-- src/components/DataTable/DataTable.vue -->
<script setup lang="ts">
import { computed, toRefs } from 'vue';
import { useTable } from './useTable';

export type ColumnDef<T = any> = {
  key: string;               // chave do dado
  header: string;            // rótulo
  sortable?: boolean;
  width?: string;            // ex "260px"
  align?: 'left' | 'center' | 'right';
};

export type TableAction = {
  key: string;
  label: string;
  icon?: string;
};

const props = withDefaults(defineProps<{
  rows: any[];
  columns: ColumnDef[];
  rowKey?: string;
  selectable?: boolean;
  expandable?: boolean;
  actions?: TableAction[];      // toolbar de seleção (customizável)
}>(), {
  rowKey: 'id',
  selectable: true,
  expandable: true,
  actions: () => [],
});

const emits = defineEmits<{
  (e: 'action', payload: { key: string; rows: any[] }): void;
  (e: 'update:sort', payload: { key: string | null; dir: 'asc' | 'desc' | null }): void;
}>();

const { rows, rowKey } = toRefs(props);
const table = useTable(rows.value, rowKey.value as any);
const sortedRows = computed(() => table.sortRows(rows.value));

function onActionClick(a: TableAction) {
  const selectedRows = rows.value.filter((r) => table.selected.has(r[props.rowKey as any]));
  emits('action', { key: a.key, rows: selectedRows });
}

function onHeaderClick(c: ColumnDef) {
  if (!c.sortable) return;
  table.setSort(c.key);
  emits('update:sort', table.sort.value);
}

function isExpanded(row: any) {
  return table.expanded.has(row[props.rowKey as any]);
}
</script>

<template>
  <div class="dt-wrapper">
    <!-- Toolbar (seleção) -->
    <div
      v-if="selectable && table.selected.size > 0"
      class="dt-toolbar"
      role="region"
      aria-label="Ações em lote"
    >
      <div class="dt-toolbar__counter">
        {{ table.selected.size }} selecionado{{ table.selected.size > 1 ? 's' : '' }}
      </div>
      <div class="dt-toolbar__divider" />
      <div class="dt-toolbar__actions">
        <button
          v-for="a in actions"
          :key="a.key"
          type="button"
          class="dt-btn"
          @click="onActionClick(a)"
        >
          <span v-if="a.icon" class="dt-btn__icon">{{ a.icon }}</span>
          {{ a.label }}
        </button>
      </div>
    </div>

    <table class="dt-table">
      <thead>
        <tr>
          <th v-if="selectable" class="dt-th dt-th--checkbox">
            <input
              type="checkbox"
              :checked="table.allSelected"
              :indeterminate="table.someSelected"
              @change="table.toggleAll()"
              aria-label="Selecionar tudo"
            />
          </th>

          <th v-if="expandable" class="dt-th dt-th--expander" />

          <th
            v-for="c in columns"
            :key="c.key"
            class="dt-th"
            :style="{ width: c.width }"
            :data-sortable="!!c.sortable"
            @click="onHeaderClick(c)"
          >
            <div class="dt-th__content" :style="{ justifyContent: c.align === 'right' ? 'flex-end' : c.align === 'center' ? 'center' : 'flex-start' }">
              <span>{{ c.header }}</span>
              <svg v-if="c.sortable" width="16" height="16" viewBox="0 0 24 24" class="dt-sort-icon">
                <path fill="currentColor" d="M12 8l-4 4h8z"/>
              </svg>
            </div>
          </th>

          <!-- coluna “Última atividade”, por ex., poderia estar nas columns também -->
        </tr>
      </thead>

      <tbody>
        <template v-for="row in sortedRows" :key="row[rowKey]">
          <tr :class="{ 'dt-row--selected': table.selected.has(row[rowKey]) }">
            <td v-if="selectable" class="dt-td dt-td--checkbox">
              <input
                type="checkbox"
                :checked="table.selected.has(row[rowKey])"
                @change="table.toggleRow(row[rowKey])"
                :aria-label="`Selecionar linha ${row[rowKey]}`"
              />
            </td>

            <td
              v-if="expandable"
              class="dt-td dt-td--expander"
            >
              <button class="dt-expander" @click="table.toggleExpanded(row[rowKey])" :aria-expanded="isExpanded(row)">
                <svg width="18" height="18" viewBox="0 0 24 24" :style="{ transform: isExpanded(row) ? 'rotate(90deg)' : 'rotate(0deg)' }">
                  <path fill="currentColor" d="M9 6l6 6-6 6z"/>
                </svg>
              </button>
            </td>

            <td
              v-for="c in columns"
              :key="c.key"
              class="dt-td"
              :style="{ textAlign: c.align ?? 'left', width: c.width }"
            >
              <!-- slot por coluna: cell-[key] -->
              <slot
                :name="`cell-${c.key}`"
                :row="row"
                :value="row[c.key]"
              >
                <!-- fallback: valor simples -->
                {{ row[c.key] }}
              </slot>
            </td>
          </tr>

          <!-- linha expandida -->
          <tr v-if="expandable && isExpanded(row)" class="dt-row--expanded">
            <td v-if="selectable" />
            <td v-if="expandable" />
            <td :colspan="columns.length" class="dt-td dt-td--expanded">
              <slot name="expanded" :row="row">
                <!-- fallback -->
                <div class="dt-expanded-default">
                  Sem detalhes
                </div>
              </slot>
            </td>
          </tr>
        </template>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
.dt-wrapper {
  border: 1px solid var(--context-color-border-secondary, #e2e4e8);
  border-radius: 12px;
  overflow: hidden;
  background: var(--context-color-surface-primary, #fff);
}

/* Toolbar */
.dt-toolbar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 16px;
  background: var(--context-color-surface-action, rgba(31,111,235,0.08));
  border-bottom: 1px solid var(--context-color-border-secondary, #e2e4e8);
}
.dt-toolbar__counter {
  font: 600 14px/1 var(--font-family-primary, system-ui);
  color: var(--context-color-text-primary, #1f2328);
}
.dt-toolbar__divider {
  width: 1px;
  height: 24px;
  background: var(--context-color-border-secondary, #e2e4e8);
}
.dt-toolbar__actions {
  display: inline-flex;
  gap: 8px;
}
.dt-btn {
  border: 1px solid var(--context-color-border-primary, #d0d7de);
  background: var(--context-color-surface-primary, #fff);
  color: var(--context-color-text-primary, #1f2328);
  font: 500 14px/1 var(--font-family-primary, system-ui);
  border-radius: 10px;
  padding: 8px 12px;
  cursor: pointer;
}
.dt-btn:hover {
  background: var(--context-color-surface-action-hover, rgba(31,111,235,0.12));
}

/* Table */
.dt-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}
.dt-th, .dt-td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--context-color-border-secondary, #e2e4e8);
  color: var(--context-color-text-primary, #1f2328);
  font: 400 14px/1.4 var(--font-family-primary, system-ui);
  background: var(--context-color-surface-primary, #fff);
}
.dt-th {
  font-weight: 600;
  text-align: left;
  background: var(--context-color-surface-primary, #fff);
  white-space: nowrap;
}
.dt-th__content {
  display: flex;
  align-items: center;
  gap: 8px;
}
.dt-th[data-sortable="true"] {
  cursor: pointer;
}
.dt-sort-icon {
  opacity: 0.5;
}
.dt-td--checkbox,
.dt-th--checkbox {
  width: 56px;
}
.dt-td--expander,
.dt-th--expander {
  width: 48px;
}
.dt-expander {
  border: none;
  background: transparent;
  cursor: pointer;
  color: var(--context-color-icon-secondary, #57606a);
}
.dt-row--selected .dt-td,
.dt-row--selected .dt-th {
  background: var(--context-color-surface-focus-light, #e8f0fe);
}
.dt-row--expanded .dt-td--expanded {
  background: var(--context-color-surface-primary, #fff);
}
.dt-expanded-default {
  color: var(--context-color-text-secondary, #555);
  font: 400 14px/1.4 var(--font-family-primary, system-ui);
}
</style>