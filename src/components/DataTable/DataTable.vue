<script setup>
import { computed, toRefs } from 'vue';
import { useTable } from './useTable';
import Checkbox from '../Checkbox/Checkbox.vue';
import Button from '../Button/Button.vue';

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
</script>

<template>
  <div class="dt-wrapper">
    <div
      v-if="selectable && table.selected.size > 0"
      class="dt-toolbar"
      role="region"
      aria-label="Ações em lote"
    >
      <div class="dt-toolbar__info">
        <i class="ph ph-minus-circle dt-toolbar__icon"></i>
        <span class="dt-toolbar__counter">
          {{ table.selected.size }} selecionado{{ table.selected.size > 1 ? 's' : '' }}
        </span>
      </div>
      <div class="dt-toolbar__divider" />
      <div class="dt-toolbar__actions">
        <Button
          v-for="a in actions"
          :key="a.key"
          variant="text"
          size="sm"
          :icon-left="a.icon"
          :label="a.label"
          @click="onActionClick(a)"
        />
      </div>
    </div>

    <table class="dt-table">
      <thead>
        <tr :class="{ 'dt-header-selected': table.selected.size > 0 }">
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
                :class="'ph ' + getSortIcon(c) + ' dt-sort-icon'"
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
                  class="ph ph-caret-right"
                  :class="{ 'dt-expander--expanded': isExpanded(row) }"
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
  border: 1px solid #E5E7EB;
  border-radius: 12px;
  overflow: hidden;
  background: #FFFFFF;
  font-family: 'Poppins', sans-serif;
}

.dt-toolbar {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 14px 20px;
  background: #DBEAFE;
  border-bottom: 1px solid #93C5FD;
}

.dt-toolbar__info {
  display: flex;
  align-items: center;
  gap: 8px;
}

.dt-toolbar__icon {
  font-size: 20px;
  color: #1E40AF;
}

.dt-toolbar__counter {
  font-size: 14px;
  font-weight: 600;
  color: #1E40AF;
}

.dt-toolbar__divider {
  width: 1px;
  height: 24px;
  background: #93C5FD;
}

.dt-toolbar__actions {
  display: inline-flex;
  gap: 8px;
  flex: 1;
}

.dt-table {
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
}

.dt-th, .dt-td {
  padding: 16px 20px;
  border-bottom: 1px solid #F3F4F6;
  color: #1F2937;
  font-size: 14px;
  background: #FFFFFF;
}

.dt-th {
  font-weight: 600;
  text-align: left;
  background: #FFFFFF;
  white-space: nowrap;
  transition: background 0.2s;
}

.dt-header-selected .dt-th {
  background: #DBEAFE;
  border-bottom-color: #93C5FD;
}

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
  background: #F9FAFB;
}

.dt-header-selected .dt-th--sortable:hover {
  background: #BFDBFE;
}

.dt-sort-icon {
  font-size: 16px;
  color: #9CA3AF;
  transition: color 0.2s;
}

.dt-th--sortable:hover .dt-sort-icon {
  color: #6B7280;
}

.dt-td--checkbox,
.dt-th--checkbox {
  width: 56px;
  padding-left: 20px;
}

.dt-td--expander,
.dt-th--expander {
  width: 48px;
  padding: 0;
}

.dt-expander {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  border: none;
  background: transparent;
  cursor: pointer;
  color: #6B7280;
  transition: all 0.2s;
}

.dt-expander:hover {
  color: #1F2937;
}

.dt-expander i {
  font-size: 18px;
  transition: transform 0.2s;
}

.dt-expander--expanded {
  transform: rotate(90deg);
}

.dt-row--selected .dt-td {
  background: #EFF6FF;
}

.dt-row--expanded .dt-td--expanded {
  background: #F9FAFB;
  padding: 20px;
}

.dt-expanded-default {
  color: #6B7280;
  font-size: 14px;
}
</style>