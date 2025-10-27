// src/components/DataTable/useTable.ts
import { computed, reactive, ref } from 'vue';

export type SortDir = 'asc' | 'desc' | null;

export interface SortState {
  key: string | null;
  dir: SortDir;
}

export function useTable<T>(rows: T[], rowKey: keyof T) {
  const selected = reactive(new Set<string | number>());
  const expanded = reactive(new Set<string | number>());
  const sort = ref<SortState>({ key: null, dir: null });

  const allSelected = computed(() => {
    if (!rows.length) return false;
    return rows.every((r) => selected.has(r[rowKey] as any));
  });

  const someSelected = computed(() => selected.size > 0 && !allSelected.value);

  function toggleAll() {
    if (allSelected.value) {
      selected.clear();
    } else {
      rows.forEach((r) => selected.add(r[rowKey] as any));
    }
  }

  function toggleRow(id: string | number) {
    if (selected.has(id)) selected.delete(id); else selected.add(id);
  }

  function toggleExpanded(id: string | number) {
    if (expanded.has(id)) expanded.delete(id); else expanded.add(id);
  }

  function setSort(key: string) {
    if (sort.value.key !== key) {
      sort.value = { key, dir: 'asc' };
      return;
    }
    if (sort.value.dir === 'asc') sort.value.dir = 'desc';
    else if (sort.value.dir === 'desc') sort.value.dir = null;
    else sort.value = { key, dir: 'asc' };
  }

  function sortRows(input: T[]) {
    const s = sort.value;
    if (!s.key || !s.dir) return input;
    const k = s.key as keyof T;
    const dirMul = s.dir === 'asc' ? 1 : -1;
    return [...input].sort((a, b) => {
      const va = (a[k] as any);
      const vb = (b[k] as any);
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