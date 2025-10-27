<!-- src/components/DataTable/cells/AvatarCell.vue -->
<script setup>
defineProps({
  name: { type: String, required: true },
  image: { type: String, default: '' }
});
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
  gap: var(--spacing-2xs, 12px);
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
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
  font-size: var(--type-font-size-body-sm, 14px);
  font-weight: var(--type-font-weight-semibold, 600);
  line-height: 1;
}
.dt-avatar__name {
  color: var(--context-color-text-primary, #1f2328);
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
  font-size: var(--type-font-size-body-sm, 14px);
  font-weight: var(--type-font-weight-medium, 500);
  line-height: 1;
}
</style>