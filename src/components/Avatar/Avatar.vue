<template>
  <div :class="avatarClasses">
    <img
      v-if="src && !imageError"
      :src="src"
      alt="Avatar"
      class="scuba-avatar__image"
      @error="handleImageError"
    />
    <span v-else-if="initials" class="scuba-avatar__initials">{{ computedInitials }}</span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  initials: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg'].includes(value)
  },
  variant: {
    type: String,
    default: 'default',
    validator: (value) => ['default', 'hover', 'disabled'].includes(value)
  }
});

const imageError = ref(false);

const computedInitials = computed(() => {
  if (!props.initials) return '';
  return props.initials.substring(0, 2).toUpperCase();
});

const avatarClasses = computed(() => {
  const classes = ['scuba-avatar'];
  classes.push('scuba-avatar--' + props.size);

  if (!props.src || imageError.value) {
    classes.push('scuba-avatar--' + props.variant);
  }

  return classes;
});

const handleImageError = () => {
  imageError.value = true;
};
</script>

<style scoped>
.scuba-avatar {
  position: relative;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-family: var(--type-font-family-body);
  font-weight: var(--type-font-weight-semibold);
  overflow: hidden;
  flex-shrink: 0;
  user-select: none;
  border-radius: var(--border-radius-rounded-full);
}

/* Sizes */
.scuba-avatar--xs {
  width: 24px;
  height: 24px;
  font-size: 10px;
}

.scuba-avatar--sm {
  width: 32px;
  height: 32px;
  font-size: 12px;
}

.scuba-avatar--md {
  width: 48px;
  height: 48px;
  font-size: 16px;
}

.scuba-avatar--lg {
  width: 64px;
  height: 64px;
  font-size: 20px;
}

.scuba-avatar__image {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.scuba-avatar__initials {
  display: flex;
  align-items: center;
  justify-content: center;
}

/* Variants */
.scuba-avatar--default {
  background: var(--context-color-icon-secondary);
  color: var(--primitives-color-white);
}

.scuba-avatar--hover {
  background: var(--context-color-surface-inverted);
  color: var(--primitives-color-white);
}

.scuba-avatar--disabled {
  background: var(--semantic-color-neutral-200);
  color: var(--context-color-text-disabled);
}
</style>
