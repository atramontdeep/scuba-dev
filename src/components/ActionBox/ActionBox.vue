<template>
  <div :class="actionBoxClasses" @click="handleClick">
    <Checkbox
      v-if="showCheckbox"
      v-model="internalChecked"
      :showLabel="false"
      @click.stop
      @change="handleCheckboxChange"
      class="scuba-action-box__checkbox"
    />

    <Avatar
      v-if="showAvatar"
      :initials="avatarInitials"
      :src="avatarSrc"
      size="md"
      variant="default"
      class="scuba-action-box__avatar"
    />

    <div class="scuba-action-box__content">
      <h3 class="scuba-action-box__title">{{ title }}</h3>
      <p v-if="showSubtitle && subtitle" class="scuba-action-box__subtitle">{{ subtitle }}</p>
    </div>

    <Chip
      v-if="showChip"
      :label="chipLabel"
      :count="chipCount"
      :countValue="chipCountValue"
      :icon="chipIcon"
      size="md"
      class="scuba-action-box__chip"
    />

    <component
      v-if="showIcon"
      :is="icon"
      :size="24"
      class="scuba-action-box__icon"
    />
  </div>
</template>

<script setup>
import { computed, ref, watch } from 'vue';
import Avatar from '../Avatar/Avatar.vue';
import Chip from '../Chip/Chip.vue';
import Checkbox from '../Checkbox/Checkbox.vue';
import { PhCaretRight } from '@phosphor-icons/vue';

const props = defineProps({
  title: {
    type: String,
    required: true
  },
  subtitle: {
    type: String,
    default: ''
  },
  showCheckbox: {
    type: Boolean,
    default: false
  },
  checked: {
    type: Boolean,
    default: false
  },
  showAvatar: {
    type: Boolean,
    default: false
  },
  avatarInitials: {
    type: String,
    default: 'AB'
  },
  avatarSrc: {
    type: String,
    default: ''
  },
  showSubtitle: {
    type: Boolean,
    default: false
  },
  showChip: {
    type: Boolean,
    default: false
  },
  chipLabel: {
    type: String,
    default: 'Chip'
  },
  chipCount: {
    type: Boolean,
    default: false
  },
  chipCountValue: {
    type: [String, Number],
    default: '32'
  },
  chipIcon: {
    type: [Object, Function],
    default: null
  },
  showIcon: {
    type: Boolean,
    default: false
  },
  icon: {
    type: [Object, Function],
    default: () => PhCaretRight
  },
  clickable: {
    type: Boolean,
    default: true
  }
});

const emit = defineEmits(['click', 'checkbox-change']);

const internalChecked = ref(props.checked);

watch(() => props.checked, (newValue) => {
  internalChecked.value = newValue;
});

watch(internalChecked, (newValue) => {
  emit('checkbox-change', newValue);
});

const actionBoxClasses = computed(() => {
  return [
    'scuba-action-box',
    {
      'scuba-action-box--clickable': props.clickable
    }
  ];
});

const handleClick = () => {
  if (props.clickable) {
    emit('click');
  }
};

const handleCheckboxChange = () => {
  // The checkbox change is already handled by the v-model and watch
};
</script>

<style scoped>
.scuba-action-box {
  display: flex;
  align-items: center;
  gap: 16px;
  padding: 16px;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 8px;
  font-family: var(--type-font-family-body);
  transition: all 0.2s ease;
}

.scuba-action-box--clickable {
  cursor: pointer;
}

.scuba-action-box--clickable:hover {
  background: #F9FAFB;
  border-color: #D1D5DB;
}

.scuba-action-box__checkbox {
  flex-shrink: 0;
}

.scuba-action-box__avatar {
  flex-shrink: 0;
}

.scuba-action-box__content {
  flex: 1;
  min-width: 0;
}

.scuba-action-box__title {
  margin: 0;
  font-size: 16px;
  font-weight: 600;
  color: #111827;
  line-height: 1.5;
}

.scuba-action-box__subtitle {
  margin: 4px 0 0 0;
  font-size: 14px;
  font-weight: 400;
  color: #6B7280;
  line-height: 1.4;
}

.scuba-action-box__chip {
  flex-shrink: 0;
}

.scuba-action-box__icon {
  flex-shrink: 0;
  color: #6B7280;
}
</style>
