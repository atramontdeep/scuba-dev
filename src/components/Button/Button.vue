<template>
  <button 
    :class="buttonClasses"
    :disabled="disabled"
    @click="handleClick"
  >
    <i v-if="iconLeft" :class="iconLeftClasses"></i>
    
    <span class="scuba-button__label">
      <slot>{{ label }}</slot>
    </span>
    
    <i v-if="iconRight" :class="iconRightClasses"></i>
  </button>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  variant: {
    type: String,
    default: 'solid',
    validator: (value) => ['solid', 'outline', 'text'].includes(value)
  },
  size: {
    type: String,
    default: 'md',
    validator: (value) => ['sm', 'md', 'lg'].includes(value)
  },
  label: {
    type: String,
    default: 'Button'
  },
  disabled: {
    type: Boolean,
    default: false
  },
  iconLeft: {
    type: String,
    default: ''
  },
  iconRight: {
    type: String,
    default: ''
  },
  fullWidth: {
    type: Boolean,
    default: false
  }
});

const emit = defineEmits(['click']);

const buttonClasses = computed(() => {
  const classes = ['scuba-button'];
  classes.push('scuba-button--' + props.variant);
  classes.push('scuba-button--' + props.size);
  
  if (props.disabled) {
    classes.push('scuba-button--disabled');
  }
  
  if (props.fullWidth) {
    classes.push('scuba-button--full-width');
  }
  
  if (props.iconLeft || props.iconRight) {
    classes.push('scuba-button--with-icon');
  }
  
  return classes;
});

const iconLeftClasses = computed(() => {
  if (!props.iconLeft) return '';
  return 'ph ' + props.iconLeft + ' scuba-button__icon-left';
});

const iconRightClasses = computed(() => {
  if (!props.iconRight) return '';
  return 'ph ' + props.iconRight + ' scuba-button__icon-right';
});

const handleClick = (event) => {
  if (!props.disabled) {
    emit('click', event);
  }
};
</script>

<style scoped>
.scuba-button {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-family: 'Poppins', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 24px;
  padding: var( --spacing-px-3) var( --spacing-px-6);
  border: 2px solid transparent;
  border-radius: 8px;
  cursor: pointer;
  user-select: none;
  transition: all 0.2s ease;
  background: none;
  outline: none;
  text-decoration: none;
  white-space: nowrap;
}

.scuba-button:focus-visible {
  outline: 2px solid #0086cd;
  outline-offset: 2px;
}

.scuba-button--full-width {
  width: 100%;
}

.scuba-button__icon-left,
.scuba-button__icon-right {
  display: inline-flex;
  align-items: center;
  font-size: 1.2em;
}

.scuba-button--sm {
  height: 32px;
  padding: 0 16px;
  font-size: 14px;
  line-height: 20px;
  gap: 6px;
}

.scuba-button--md {
  height: 40px;
  padding: var( --spacing-px-3) var( --spacing-px-6);
  font-size: 16px;
  line-height: 24px;
}

.scuba-button--lg {
  height: 48px;
  padding: 0 24px;
  font-size: 18px;
  line-height: 32px;
  gap: 12px;
}

.scuba-button--solid {
  background: #0086cd;
  color: #ffffff;
  border-color: transparent;
}

.scuba-button--solid:hover:not(:disabled) {
  background: #0942a1;
  color: #ffffff;
}

.scuba-button--solid:active:not(:disabled) {
  background: #0942a1;
  color: #ffffff;
}

.scuba-button--solid:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 134, 205, 0.3);
}

.scuba-button--outline {
  background: transparent;
  color: #191919;
  border-color: #0086cd;
}

.scuba-button--outline:hover:not(:disabled) {
  background: rgba(0, 134, 205, 0.1);
  border-color: #0086cd;
  color: #0942a1;
}

.scuba-button--outline:active:not(:disabled) {
  background: rgba(0, 134, 205, 0.2);
  border-color: #0942a1;
}

.scuba-button--outline:focus-visible {
  border-color: #0086cd;
  box-shadow: 0 0 0 3px rgba(0, 134, 205, 0.2);
}

.scuba-button--text {
  background: transparent;
  color: #0086cd;
  border-color: transparent;
  padding: 8px 12px;
}

.scuba-button--text:hover:not(:disabled) {
  background: rgba(0, 134, 205, 0.1);
  color: #0942a1;
}

.scuba-button--text:active:not(:disabled) {
  background: rgba(0, 134, 205, 0.2);
}

.scuba-button--text:focus-visible {
  box-shadow: 0 0 0 3px rgba(0, 134, 205, 0.2);
}

.scuba-button--disabled,
.scuba-button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}

.scuba-button--solid.scuba-button--disabled,
.scuba-button--solid:disabled {
  background: #e5e5e5;
  color: #aaaaaa;
}

.scuba-button--outline.scuba-button--disabled,
.scuba-button--outline:disabled {
  border-color: #e5e5e5;
  color: #aaaaaa;
}

.scuba-button--text.scuba-button--disabled,
.scuba-button--text:disabled {
  color: #aaaaaa;
}
</style>  