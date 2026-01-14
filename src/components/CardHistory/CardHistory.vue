<template>
  <div :class="cardClasses">
    <div :class="borderClasses"></div>
    <div class="scuba-card-history__content">
      <span class="scuba-card-history__text">
        {{ userName }} {{ verbText }}
      </span>
      <span class="scuba-card-history__indicator">
        {{ indicatorItem }}
      </span>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps({
  status: {
    type: String,
    required: true,
    validator: (value) => [
      'respondeu',
      'enviou-para-ajuste-validacao',
      'validou',
      'enviou-para-ajuste-auditoria',
      'aprovou'
    ].includes(value)
  },
  userName: {
    type: String,
    required: true
  },
  indicatorItem: {
    type: String,
    required: true
  }
});

// Mapeamento de status para texto do verbo e classe de cor
const statusConfig = {
  'respondeu': {
    text: 'respondeu',
    colorClass: 'scuba-card-history--respondido'
  },
  'enviou-para-ajuste-validacao': {
    text: 'enviou para ajuste de validação',
    colorClass: 'scuba-card-history--em-ajuste-validacao'
  },
  'validou': {
    text: 'validou',
    colorClass: 'scuba-card-history--validado'
  },
  'enviou-para-ajuste-auditoria': {
    text: 'enviou para ajuste de auditoria',
    colorClass: 'scuba-card-history--em-ajuste-auditoria'
  },
  'aprovou': {
    text: 'aprovou',
    colorClass: 'scuba-card-history--aprovado'
  }
};

const currentConfig = computed(() => statusConfig[props.status] || statusConfig['respondeu']);

const verbText = computed(() => currentConfig.value.text);

const cardClasses = computed(() => {
  return [
    'scuba-card-history',
    currentConfig.value.colorClass
  ];
});

const borderClasses = computed(() => {
  return 'scuba-card-history__border';
});
</script>

<style scoped>
.scuba-card-history {
  position: relative;
  display: flex;
  align-items: stretch;
  font-family: var(--type-font-family-body);
  min-height: 40px;
}

.scuba-card-history__border {
  width: 8px;
  border-radius: var(--border-radius-rounded-pill);
  flex-shrink: 0;
}

.scuba-card-history__content {
  display: flex;
  flex-direction: column;
  gap: 0;
  margin-left: 16px;
}

.scuba-card-history__text {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-secondary);
}

.scuba-card-history__indicator {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
  word-break: break-word;
}

/* Cores das bordas baseadas no status (matching Status component backgrounds) */
.scuba-card-history--respondido .scuba-card-history__border {
  background: var(--semantic-color-status-cyan-background);
}

.scuba-card-history--em-ajuste-validacao .scuba-card-history__border {
  background: var(--semantic-color-status-pink-background);
}

.scuba-card-history--validado .scuba-card-history__border {
  background: var(--semantic-color-status-purple-background);
}

.scuba-card-history--em-ajuste-auditoria .scuba-card-history__border {
  background: #EAE055;
}

.scuba-card-history--aprovado .scuba-card-history__border {
  background: var(--semantic-color-status-green-approved-background);
}
</style>
