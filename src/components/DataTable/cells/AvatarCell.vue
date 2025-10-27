<!-- src/components/DataTable/cells/AvatarCell.vue -->
<script setup lang="ts">
defineProps<{
  name: string;
  image?: string;
}>();
</script>

<template>
  <div class="dt-avatar">
    <img v-if="image" :src="image" :alt="name" />
    <div v-else class="dt-avatar__fallback">{{ name?.[0] ?? '?' }}</div>
    <span class="dt-avatar__name">{{ name }}</span>
  </div>
</template>

<style scoped>
.dt-avatar {
  display: inline-flex;
  align-items: center;
  gap: 12px;
}
.dt-avatar img,
.dt-avatar__fallback {
  width: 32px;
  height: 32px;
  border-radius: 9999px;
  background: var(--context-color-surface-secondary, #f2f3f5);
  object-fit: cover;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  color: var(--context-color-text-secondary, #555);
  font: 600 14px/1 var(--font-family-primary, system-ui);
}
.dt-avatar__name {
  color: var(--context-color-text-primary, #1f2328);
  font: 500 14px/1 var(--font-family-primary, system-ui);
}
</style>