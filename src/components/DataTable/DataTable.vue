<script setup>
import { computed, ref, onMounted, onUnmounted } from 'vue';
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

const {
  selected,
  expanded,
  sort,
  allSelected,
  someSelected,
  toggleAll,
  toggleRow,
  toggleExpanded,
  setSort,
  sortRows
} = useTable(props.rows, props.rowKey);

const sortedRows = computed(() => sortRows(props.rows));
const openDropdown = ref(null);

function onActionClick(a) {
  const selectedRows = props.rows.filter((r) => selected.has(r[props.rowKey]));
  emits('action', { key: a.key, rows: selectedRows });
}

function toggleDropdown(key) {
  openDropdown.value = openDropdown.value === key ? null : key;
}

function onDropdownAction(child) {
  openDropdown.value = null;
  const selectedRows = props.rows.filter((r) => selected.has(r[props.rowKey]));
  emits('action', { key: child.key, rows: selectedRows });
}

function onClickOutside(e) {
  if (openDropdown.value && !e.target.closest('.dt-dropdown')) {
    openDropdown.value = null;
  }
}

onMounted(() => document.addEventListener('click', onClickOutside));
onUnmounted(() => document.removeEventListener('click', onClickOutside));

function onHeaderClick(c) {
  if (!c.sortable) return;
  setSort(c.key);
  emits('update:sort', sort.value);
}

function isExpanded(row) {
  return expanded.has(row[props.rowKey]);
}

function getSortIcon(column) {
  if (!column.sortable) return '';
  const key = sort.value.key;
  const dir = sort.value.dir;

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

function onToggleAll() {
  toggleAll();
}

function onToggleRow(id) {
  toggleRow(id);
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
        <tr :class="{ 'dt-header-selected': selectable && selected.size > 0 }">
          <th v-if="selectable" class="dt-th dt-th--checkbox">
            <div class="dt-checkbox-hit" @click.prevent="onToggleAll">
              <Checkbox
                :model-value="allSelected"
                :indeterminate="someSelected"
                size="sm"
                aria-label="Selecionar tudo"
              />
            </div>
          </th>

          <th v-if="expandable" class="dt-th dt-th--expander" />

          <!-- Selection bar: count + actions -->
          <th
            v-if="selectable && selected.size > 0"
            :colspan="columns.length"
            class="dt-th dt-th--selection-bar"
          >
            <div class="dt-selection-bar">
              <span class="dt-selection-bar__counter">
                {{ selected.size }} selecionado{{ selected.size > 1 ? 's' : '' }}
              </span>
              <div class="dt-selection-bar__divider" />
              <div class="dt-selection-bar__actions">
                <template v-for="a in actions" :key="a.key">
                  <!-- Dropdown action (grouped children) -->
                  <div v-if="a.children" class="dt-dropdown">
                    <Tooltip :content="a.label" position="top">
                      <button
                        class="dt-selection-bar__action-btn dt-selection-bar__action-btn--icon"
                        @click.stop="toggleDropdown(a.key)"
                        :aria-label="a.label"
                        :aria-expanded="openDropdown === a.key"
                      >
                        <i :class="a.icon"></i>
                        <i class="ph ph-caret-down dt-dropdown__caret"></i>
                      </button>
                    </Tooltip>
                    <div v-if="openDropdown === a.key" class="dt-dropdown__menu">
                      <button
                        v-for="child in a.children"
                        :key="child.key"
                        class="dt-dropdown__item"
                        @click="onDropdownAction(child)"
                      >
                        <i :class="child.icon"></i>
                        <span>{{ child.label }}</span>
                      </button>
                    </div>
                  </div>

                  <!-- Single action (icon-only with tooltip) -->
                  <Tooltip v-else :content="a.label" position="top">
                    <button
                      class="dt-selection-bar__action-btn dt-selection-bar__action-btn--icon"
                      @click="onActionClick(a)"
                      :aria-label="a.label"
                    >
                      <i :class="a.icon"></i>
                    </button>
                  </Tooltip>
                </template>
              </div>
            </div>
          </th>

          <!-- Normal column headers -->
          <template v-else>
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
          </template>
        </tr>
      </thead>

      <tbody>
        <template v-for="row in sortedRows" :key="row[rowKey]">
          <tr :class="{ 'dt-row--selected': selected.has(row[rowKey]) }">
            <td v-if="selectable" class="dt-td dt-td--checkbox">
              <div class="dt-checkbox-hit" @click.prevent="onToggleRow(row[rowKey])">
                <Checkbox
                  :model-value="selected.has(row[rowKey])"
                  size="sm"
                  :aria-label="`Selecionar linha ${row[rowKey]}`"
                />
              </div>
            </td>

            <td v-if="expandable" class="dt-td dt-td--expander">
              <button
                class="dt-expander"
                @click="toggleExpanded(row[rowKey])"
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

.dt-selection-bar__action-btn--icon {
  padding: 6px 8px;
  gap: 4px;
}

.dt-selection-bar__action-btn--icon .dt-dropdown__caret {
  font-size: 12px;
  opacity: 0.7;
}

/* Dropdown */
.dt-dropdown {
  position: relative;
}

.dt-dropdown__menu {
  position: absolute;
  top: calc(100% + 6px);
  left: 0;
  z-index: 10;
  min-width: 240px;
  background: var(--context-color-surface-primary);
  border: 1px solid var(--context-color-border-secondary);
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  padding: 4px;
}

.dt-dropdown__item {
  display: flex;
  align-items: center;
  gap: 10px;
  width: 100%;
  padding: 10px 12px;
  border: none;
  border-radius: 6px;
  background: transparent;
  color: var(--context-color-text-primary);
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  cursor: pointer;
  transition: background 0.15s;
  text-align: left;
  white-space: nowrap;
}

.dt-dropdown__item i {
  font-size: 18px;
  color: var(--context-color-icon-secondary);
}

.dt-dropdown__item:hover {
  background: var(--context-color-surface-secondary);
}

/* Checkbox hit area */
.dt-checkbox-hit {
  display: flex;
  align-items: center;
  cursor: pointer;
}

/* Checkbox column */
.dt-td--checkbox,
.dt-th--checkbox {
  width: 48px;
  padding-left: 20px;
  padding-right: 0;
  vertical-align: middle;
}

/* Body cells */
.dt-td {
  padding: 16px 20px;
  border-bottom: 1px solid var(--context-color-border-secondary);
  color: var(--context-color-text-primary);
  font-size: var(--type-font-size-sm);
  background: transparent;
  vertical-align: middle;
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

/* Row hover */
tbody tr:hover .dt-td {
  background: var(--context-color-surface-secondary);
  transition: background 0.15s;
}

/* Selected row */
.dt-row--selected .dt-td {
  background: var(--context-color-surface-focus-light);
}

tbody tr.dt-row--selected:hover .dt-td {
  background: var(--context-color-surface-focus-light);
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
