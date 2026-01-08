<template>
  <div :class="avatarClasses">
    <img
      v-if="src && !imageError"
      :src="src"
      :alt="alt"
      class="scuba-avatar__image"
      @error="handleImageError"
    />
    <i v-else-if="icon" :class="iconClasses" aria-hidden="true"></i>
    <span v-else-if="initials" class="scuba-avatar__initials">{{ computedInitials }}</span>
    <i v-else class="ph ph-user scuba-avatar__icon-default" aria-hidden="true"></i>

    <span v-if="badge" :class="badgeClasses"></span>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';

const props = defineProps({
  src: {
    type: String,
    default: ''
  },
  alt: {
    type: String,
    default: 'Avatar'
  },
  initials: {
    type: String,
    default: ''
  },
  icon: {
    type: String,
    default: ''
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['xs', 'sm', 'md', 'lg', 'xl'].includes(value)
  },
  shape: {
    type: String,
    default: 'circle',
    validator: (value) => ['circle', 'square'].includes(value)
  },
  variant: {
    type: String,
    default: 'neutral',
    validator: (value) => ['neutral', 'primary', 'success', 'warning', 'error', 'info'].includes(value)
  },
  badge: {
    type: Boolean,
    default: false
  },
  badgeVariant: {
    type: String,
    default: 'success',
    validator: (value) => ['success', 'warning', 'error', 'neutral'].includes(value)
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
  classes.push('scuba-avatar--' + props.shape);

  if (!props.src || imageError.value) {
    classes.push('scuba-avatar--' + props.variant);
  }

  if (props.badge) {
    classes.push('scuba-avatar--with-badge');
  }

  return classes;
});

const iconClasses = computed(() => {
  if (!props.icon) return '';
  return 'ph ' + props.icon + ' scuba-avatar__icon';
});

const badgeClasses = computed(() => {
  const classes = ['scuba-avatar__badge'];
  classes.push('scuba-avatar__badge--' + props.badgeVariant);
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
}

.scuba-avatar--circle {
  border-radius: var(--border-radius-rounded-full);
}

.scuba-avatar--square {
  border-radius: var(--border-radius-rounded);
}

/* Sizes */
.scuba-avatar--xs {
  width: var(--scale-500);
  height: var(--scale-500);
  font-size: var(--type-font-size-xs);
}

.scuba-avatar--sm {
  width: var(--scale-600);
  height: var(--scale-600);
  font-size: var(--type-font-size-sm);
}

.scuba-avatar--md {
  width: var(--scale-700);
  height: var(--scale-700);
  font-size: var(--type-font-size-base);
}

.scuba-avatar--lg {
  width: var(--scale-900);
  height: var(--scale-900);
  font-size: var(--type-font-size-xl);
}

.scuba-avatar--xl {
  width: var(--scale-1100);
  height: var(--scale-1100);
  font-size: var(--type-font-size-2xl);
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

.scuba-avatar__icon,
.scuba-avatar__icon-default {
  font-size: 1.5em;
}

/* Variants */
.scuba-avatar--neutral {
  background: var(--semantic-color-neutral-200);
  color: var(--semantic-color-neutral-800);
}

.scuba-avatar--primary {
  background: var(--semantic-color-primary-200);
  color: var(--semantic-color-primary-800);
}

.scuba-avatar--success {
  background: var(--semantic-color-success-light);
  color: var(--semantic-color-success-dark);
}

.scuba-avatar--warning {
  background: var(--semantic-color-warning-light);
  color: var(--semantic-color-warning-dark);
}

.scuba-avatar--error {
  background: var(--semantic-color-error-light);
  color: var(--semantic-color-error-dark);
}

.scuba-avatar--info {
  background: var(--semantic-color-info-light);
  color: var(--semantic-color-info-dark);
}

/* Badge */
.scuba-avatar__badge {
  position: absolute;
  bottom: 0;
  right: 0;
  width: 30%;
  height: 30%;
  border-radius: var(--border-radius-rounded-full);
  border: var(--border-width-border-md) solid var(--primitives-color-white);
}

.scuba-avatar--xs .scuba-avatar__badge,
.scuba-avatar--sm .scuba-avatar__badge {
  width: 25%;
  height: 25%;
}

.scuba-avatar__badge--success {
  background: var(--semantic-color-success-normal);
}

.scuba-avatar__badge--warning {
  background: var(--semantic-color-warning-normal);
}

.scuba-avatar__badge--error {
  background: var(--semantic-color-error-normal);
}

.scuba-avatar__badge--neutral {
  background: var(--semantic-color-neutral-500);
}
</style>
