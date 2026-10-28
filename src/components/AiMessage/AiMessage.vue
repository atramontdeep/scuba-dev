<template>
  <div class="scuba-ai-message" role="note">
    <div class="scuba-ai-message__row">
      <span class="scuba-ai-message__icon" aria-hidden="true">
        <slot name="icon"><DipyIcon /></slot>
      </span>
      <p class="scuba-ai-message__text"><slot /></p>
    </div>
    <div v-if="$slots.extra" class="scuba-ai-message__extra">
      <slot name="extra" />
    </div>
  </div>
</template>

<script setup>
// Recado da IA: o que ela vai fazer ou o que fez, no degradê da IA, sem contorno, título nem negrito (28/10/2026, da
// jornada de carbono), com o Dipy. Fora da paleta do Alert, que fala do sistema. O slot "icon" troca o ícone; o slot
// "extra" leva o que faz parte do recado, como um UploadBox.
import DipyIcon from '../Dipy/DipyIcon.vue';
</script>

<style scoped>
.scuba-ai-message {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-2xs);
  padding: var(--spacing-2xs) var(--spacing-xs);
  border-radius: var(--border-radius-rounded-md);
  background: var(--semantic-color-ai-gradient);
  font-family: var(--type-font-family-body);
}

.scuba-ai-message__row {
  display: flex;
  align-items: center;
  gap: var(--spacing-2xs);
}

.scuba-ai-message__icon {
  display: inline-flex;
  flex: none;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 22px;
  color: var(--context-color-icon-primary);
}

.scuba-ai-message__icon :deep(svg),
.scuba-ai-message__icon :deep(img) {
  width: 100%;
  height: 100%;
}

.scuba-ai-message__text {
  flex: 1;
  min-width: 0;
  margin: 0;
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-regular);
  line-height: 20px;
  color: var(--context-color-text-primary);
}
</style>
