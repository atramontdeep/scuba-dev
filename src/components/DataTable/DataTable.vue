<script setup>
import { computed, toRefs } from 'vue';
import { useTable } from './useTable';
import Checkbox from '../Checkbox/Checkbox.vue';
import Tooltip from '../Tooltip/Tooltip.vue';

const props = defineProps({
  rows: { type: Array, required: true },
  columns: { type: Array, required: true },
  rowKey: { type: String, default: 'id' },
  selectable: { type: Boolean, default: true },
  expandable: { type: Boolean, default: true },
  actions: { type: Array, default: () => [] }
});

const emits = defineEmits(['action', 'update:sort']);

const { rows, rowKey } = toRefs(props);
const table = useTable(rows.value, rowKey.value);
const sortedRows = computed(() => table.sortRows(rows.value));

const hasSelection = computed(() => props.selectable && table.selected.size > 0);

function onActionClick(a) {
  const selectedRows = rows.value.filter((r) => table.selected.has(r[props.rowKey]));
  emits('action', { key: a.key, rows: selectedRows });
}

function onHeaderClick(c) {
  if (!c.sortable) return;
  table.setSort(c.key);
  emits('update:sort', table.sort.value);
}

function isExpanded(row) {
  return table.expanded.has(row[props.rowKey]);
}

function getSortIcon(column) {
  if (!column.sortable) return '';
  const key = table.sort.value.key;
  const dir = table.sort.value.dir;

  if (key !== column.key) {
    return 'ph-arrows-down-up';
  }

  if (dir === 'asc') {
    return 'ph-arrow-up';
  }

  return 'ph-arrow-down';
}

function getSortIconClass(column) {
  const icon = getSortIcon(column);
  if (!icon) return '';
  return 'ph ' + icon + ' dt-sort-icon';
}
</script>

<template>
  <div class="dt-wrapper">
    <table class="dt-table">
      <colgroup>
        <col v-if="selectable" class="dt-col--checkbox" />
        <col v-if="expandable" class="dt-col--expander" />
        <col v-for="c in columns" :key="c.key" :style="{ width: c.width }" />
      </colgroup>
      <thead>
        <!-- Selected header: checkbox + count + actions -->
        <tr v-if="selectable && table.selected.size > 0" class="dt-header-selected">
          <th class="dt-th dt-th--checkbox">
            <Checkbox
              :model-value="table.allSelected"
              :indeterminate="table.someSelected"
              size="sm"
              @update:model-value="table.toggleAll()"
              aria-label="Selecionar tudo"
            />
          </th>

          <th v-if="expandable" class="dt-th dt-th--expander" />

          <th
            :colspan="columns.length"
            class="dt-th dt-th--selection-bar"
          >
            <div class="dt-selection-bar">
              <span class="dt-selection-bar__counter">
                {{ table.selected.size }} selecionado{{ table.selected.size > 1 ? 's' : '' }}
              </span>
              <div class="dt-selection-bar__divider" />
              <div class="dt-selection-bar__actions">
                <Tooltip
                  v-for="a in actions"
                  :key="a.key"
                  :content="a.label"
                  position="top"
                >
                  <button
                    class="dt-selection-bar__action-btn"
                    @click="onActionClick(a)"
                    :aria-label="a.label"
                  >
                    <i :class="a.icon"></i>
                    <span>{{ a.label }}</span>
                  </button>
                </Tooltip>
              </div>
            </div>
          </th>
        </tr>

        <!-- Normal header: column names -->
        <tr v-else>
          <th v-if="selectable" class="dt-th dt-th--checkbox">
            <Checkbox
              :model-value="table.allSelected"
              :indeterminate="table.someSelected"
              size="sm"
              @update:model-value="table.toggleAll()"
              aria-label="Selecionar tudo"
            />
          </th>

          <th v-if="expandable" class="dt-th dt-th--expander" />

          <th
            v-for="c in columns"
            :key="c.key"
            class="dt-th"
            :class="{ 'dt-th--sortable': c.sortable }"
            :style="{ width: c.width }"
            @click="onHeaderClick(c)"
          >
            <div
              class="dt-th__content"
              :style="{
                justifyContent: c.align === 'right' ? 'flex-end' : c.align === 'center' ? 'center' : 'flex-start'
              }"
            >
              <span>{{ c.header }}</span>
              <i
                v-if="c.sortable && getSortIcon(c)"
                :class="getSortIconClass(c)"
              ></i>
            </div>
          </th>
        </tr>
      </thead>

      <tbody>
        <template v-for="row in sortedRows" :key="row[rowKey]">
          <tr :class="{ 'dt-row--selected': table.selected.has(row[rowKey]) }">
            <td v-if="selectable" class="dt-td dt-td--checkbox">
              <Checkbox
                :model-value="table.selected.has(row[rowKey])"
                size="sm"
                @update:model-value="table.toggleRow(row[rowKey])"
                :aria-label="`Selecionar linha ${row[rowKey]}`"
              />
            </td>

            <td v-if="expandable" class="dt-td dt-td--expander">
              <button
                class="dt-expander"
                @click="table.toggleExpanded(row[rowKey])"
                :aria-expanded="isExpanded(row)"
              >
                <i
                  :class="isExpanded(row) ? 'ph ph-caret-circle-down' : 'ph ph-caret-circle-right'"
                ></i>
              </button>
            </td>

            <td
              v-for="c in columns"
              :key="c.key"
              class="dt-td"
              :style="{ textAlign: c.align || 'left', width: c.width }"
            >
              <slot
                :name="'cell-' + c.key"
                :row="row"
                :value="row[c.key]"
              >
                {{ row[c.key] }}
              </slot>
            </td>
          </tr>

          <tr v-if="expandable && isExpanded(row)" class="dt-row--expanded">
            <td v-if="selectable" />
            <td v-if="expandable" />
            <td :colspan="columns.length" class="dt-td dt-td--expanded">
              <slot name="expanded" :row="row">
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
  background: transparent;
  font-family: var(--type-font-family-body);
}

.dt-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  table-layout: fixed;
}

.dt-col--checkbox {
  width: 48px;
}

.dt-col--expander {
  width: 36px;
}

/* Header cells */
.dt-th {
  padding: 0 20px;
  height: 64px;
  color: var(--context-color-text-primary);
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  text-align: left;
  background: var(--context-color-surface-secondary);
  white-space: nowrap;
  border: none;
  transition: background 0.2s;
}

/* Header radius: first and last cell */
thead tr .dt-th:first-child {
  border-radius: 12px 0 0 12px;
}

thead tr .dt-th:last-child {
  border-radius: 0 12px 12px 0;
}

/* Selected header row */
.dt-header-selected .dt-th {
  background: var(--context-color-surface-focus);
}

.dt-th--selection-bar {
  padding: 0 20px;
}

.dt-selection-bar {
  display: flex;
  align-items: center;
  gap: 16px;
  height: 100%;
}

.dt-selection-bar__counter {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-focus);
  white-space: nowrap;
}

.dt-selection-bar__divider {
  width: 1px;
  height: 24px;
  background: var(--context-color-border-focus);
  flex-shrink: 0;
}

.dt-selection-bar__actions {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dt-selection-bar__action-btn {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 6px 12px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--context-color-text-focus);
  cursor: pointer;
  transition: background 0.2s;
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  white-space: nowrap;
}

.dt-selection-bar__action-btn i {
  font-size: 18px;
}

.dt-selection-bar__action-btn:hover {
  background: rgba(0, 0, 0, 0.06);
}

/* Body cells */
.dt-td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--context-color-border-secondary);
  color: var(--context-color-text-primary);
  font-size: var(--type-font-size-sm);
  background: transparent;
}

/* Column header content */
.dt-th__content {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dt-th--sortable {
  cursor: pointer;
  user-select: none;
}

.dt-th--sortable:hover {
  background: rgba(0, 0, 0, 0.04);
}

.dt-sort-icon {
  font-size: 16px;
  color: #9CA3AF;
  transition: color 0.2s;
}

.dt-th--sortable:hover .dt-sort-icon {
  color: #6B7280;
}

/* Checkbox column */
.dt-td--checkbox,
.dt-th--checkbox {
  width: 48px;
  padding-left: 20px;
  padding-right: 0;
}

/* Expander column */
.dt-td--expander,
.dt-th--expander {
  width: 28px;
  padding: 0;
  padding-left: 8px;
}

.dt-expander {
  display: flex;
  align-items: center;
  justify-content: flex-start;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #9CA3AF;
  transition: color 0.2s;
}

.dt-expander:hover {
  color: var(--context-color-text-primary);
}

.dt-expander i {
  font-size: 20px;
}

/* Selected row */
.dt-row--selected .dt-td {
  background: transparent;
}

/* Expanded row */
.dt-row--expanded .dt-td--expanded {
  background: #F9FAFB;
  padding: 20px;
}

.dt-expanded-default {
  color: #6B7280;
  font-size: var(--type-font-size-sm);
}
</style>
