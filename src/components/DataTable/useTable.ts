// src/components/DataTable/useTable.ts
import { computed, reactive, ref } from 'vue';

export function useTable(rows, rowKey) {
  const selected = reactive(new Set());
  const expanded = reactive(new Set());
  const sort = ref({ key: null, dir: null });

  const allSelected = computed(() => {
    if (!rows.length) return false;
    return rows.every((r) => selected.has(r[rowKey]));
  });

  const someSelected = computed(() => selected.size > 0 && !allSelected.value);

  function toggleAll() {
    if (allSelected.value) {
      selected.clear();
    } else {
      rows.forEach((r) => selected.add(r[rowKey]));
    }
  }

  function toggleRow(id) {
    if (selected.has(id)) selected.delete(id); else selected.add(id);
  }

  function toggleExpanded(id) {
    if (expanded.has(id)) expanded.delete(id); else expanded.add(id);
  }

  function setSort(key) {
    if (sort.value.key !== key) {
      sort.value = { key, dir: 'asc' };
      return;
    }
    if (sort.value.dir === 'asc') sort.value.dir = 'desc';
    else if (sort.value.dir === 'desc') sort.value.dir = null;
    else sort.value = { key, dir: 'asc' };
  }

  function sortRows(input) {
    const s = sort.value;
    if (!s.key || !s.dir) return input;
    const k = s.key;
    const dirMul = s.dir === 'asc' ? 1 : -1;
    return [...input].sort((a, b) => {
      const va = a[k];
      const vb = b[k];
      if (va == null && vb == null) return 0;
      if (va == null) return -1 * dirMul;
      if (vb == null) return 1 * dirMul;
      if (typeof va === 'string' && typeof vb === 'string') {
        return va.localeCompare(vb) * dirMul;
      }
      return (va > vb ? 1 : va < vb ? -1 : 0) * dirMul;
    });
  }

  return {
    selected,
    expanded,
    sort,
    allSelected,
    someSelected,
    toggleAll,
    toggleRow,
    toggleExpanded,
    setSort,
    sortRows,
  };
}
