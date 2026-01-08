<template>
  <div class="scuba-accordion">
    <slot />
  </div>
</template>

<script setup>
import { provide, ref } from 'vue';

const props = defineProps({
  multiple: {
    type: Boolean,
    default: false
  },
  defaultOpen: {
    type: [String, Number, Array],
    default: null
  }
});

const openItems = ref(
  props.multiple
    ? (Array.isArray(props.defaultOpen) ? props.defaultOpen : props.defaultOpen ? [props.defaultOpen] : [])
    : (props.defaultOpen ? [props.defaultOpen] : [])
);

const toggleItem = (id) => {
  if (props.multiple) {
    const index = openItems.value.indexOf(id);
    if (index > -1) {
      openItems.value.splice(index, 1);
    } else {
      openItems.value.push(id);
    }
  } else {
    if (openItems.value.includes(id)) {
      openItems.value = [];
    } else {
      openItems.value = [id];
    }
  }
};

const isOpen = (id) => {
  return openItems.value.includes(id);
};

provide('accordion', {
  toggleItem,
  isOpen
});
</script>

<style scoped>
.scuba-accordion {
  font-family: var(--type-font-family-body);
  width: 100%;
}
</style>
