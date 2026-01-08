<template>
  <span :class="statusClasses">
    <slot />
  </span>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'gray',
    validator: (value) => [
      'gray', 'blue', 'blue-dark', 'purple', 'pink', 'red',
      'orange', 'yellow', 'green', 'green-approved', 'teal', 'teal-light', 'cyan'
    ].includes(value)
  }
});

const statusClasses = computed(() => {
  const classes = ['scuba-status'];
  classes.push(`scuba-status--${props.variant}`);
  return classes;
});
</script>

<style scoped>
.scuba-status {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: var(--spacing-4xs) var(--spacing-2xs);
  font-family: var(--type-font-family-body);
  font-size: var(--type-font-size-xs);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  border-radius: var(--border-radius-rounded-pill);
  white-space: nowrap;
}

/* Gray variant */
.scuba-status--gray {
  background: var(--semantic-color-status-gray-background);
  color: var(--semantic-color-status-gray-text);
}

/* Blue variant */
.scuba-status--blue {
  background: var(--semantic-color-status-blue-background);
  color: var(--semantic-color-status-blue-text);
}

/* Blue Dark variant */
.scuba-status--blue-dark {
  background: var(--semantic-color-status-blue-dark-background);
  color: var(--semantic-color-status-blue-dark-text);
}

/* Purple variant */
.scuba-status--purple {
  background: var(--semantic-color-status-purple-background);
  color: var(--semantic-color-status-purple-text);
}

/* Pink variant */
.scuba-status--pink {
  background: var(--semantic-color-status-pink-background);
  color: var(--semantic-color-status-pink-text);
}

/* Red variant */
.scuba-status--red {
  background: var(--semantic-color-status-red-background);
  color: var(--semantic-color-status-red-text);
}

/* Orange variant */
.scuba-status--orange {
  background: var(--semantic-color-status-orange-background);
  color: var(--semantic-color-status-orange-text);
}

/* Yellow variant */
.scuba-status--yellow {
  background: var(--semantic-color-status-yellow-background);
  color: var(--semantic-color-status-yellow-text);
}

/* Green variant */
.scuba-status--green {
  background: var(--semantic-color-status-green-background);
  color: var(--semantic-color-status-green-text);
}

/* Green Approved variant */
.scuba-status--green-approved {
  background: var(--semantic-color-status-green-approved-background);
  color: var(--semantic-color-status-green-approved-text);
}

/* Teal variant */
.scuba-status--teal {
  background: var(--semantic-color-status-teal-background);
  color: var(--semantic-color-status-teal-text);
}

/* Teal Light variant */
.scuba-status--teal-light {
  background: var(--semantic-color-status-teal-light-background);
  color: var(--semantic-color-status-teal-light-text);
}

/* Cyan variant */
.scuba-status--cyan {
  background: var(--semantic-color-status-cyan-background);
  color: var(--semantic-color-status-cyan-text);
}
</style>
