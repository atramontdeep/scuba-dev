<template>
  <div :class="['scuba-ai-chat-message', `scuba-ai-chat-message--${role}`]" :role="thinking ? 'status' : undefined">
    <template v-if="role === 'user'">
      <p class="scuba-ai-chat-message__mine">
        <slot>{{ text }}</slot>
        <span v-if="files.length" class="scuba-ai-chat-message__files">
          <span v-for="f in files" :key="f" class="scuba-ai-chat-message__file">
            <i class="ph ph-paperclip" aria-hidden="true"></i>{{ f }}
          </span>
        </span>
      </p>
    </template>
    <template v-else>
      <DipyIcon class="scuba-ai-chat-message__avatar" :animate="thinking" />
      <p v-if="thinking" class="scuba-ai-chat-message__thinking">
        {{ thinkingLabel }}<span>.</span><span>.</span><span>.</span>
      </p>
      <div v-else class="scuba-ai-chat-message__answer">
        <div class="scuba-ai-chat-message__text"><slot>{{ text }}</slot></div>
      </div>
    </template>
  </div>
</template>

<script setup>
// Uma mensagem da conversa com o Dipy (28/10/2026, das dúvidas da jornada de carbono e do "Como preencher" da resposta
// do indicador): a pergunta de quem usa num balão azul-escuro à direita, com os arquivos anexados; a resposta do Dipy
// num balão branco suspenso, com o ícone dele ao lado. thinking: o Dipy se mexe e "Pensando..." no lugar da resposta.
import DipyIcon from '../Dipy/DipyIcon.vue';

defineProps({
  role: {
    type: String,
    default: 'assistant',
    validator: (value) => ['user', 'assistant'].includes(value)
  },
  text: {
    type: String,
    default: ''
  },
  files: {
    type: Array,
    default: () => []
  },
  thinking: {
    type: Boolean,
    default: false
  },
  thinkingLabel: {
    type: String,
    default: 'Pensando'
  }
});
</script>

<style scoped>
.scuba-ai-chat-message {
  display: flex;
  gap: var(--spacing-3xs);
  font-family: var(--type-font-family-body);
}

.scuba-ai-chat-message--user {
  justify-content: flex-end;
}

.scuba-ai-chat-message__mine {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-4xs);
  max-width: 85%;
  margin: 0;
  padding: var(--spacing-2xs) var(--spacing-xs);
  border-radius: 18px 18px 6px 18px;
  background: var(--primitives-color-blue-600);
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--primitives-color-white);
  overflow-wrap: anywhere;
}

.scuba-ai-chat-message__files {
  display: flex;
  flex-wrap: wrap;
  gap: var(--spacing-4xs);
}

.scuba-ai-chat-message__file {
  display: inline-flex;
  align-items: center;
  gap: 4px;
  padding: 2px var(--spacing-3xs);
  border-radius: var(--border-radius-rounded-sm);
  background: var(--context-color-surface-focus-light);
  font-size: var(--type-font-size-xs);
  color: var(--context-color-surface-focus-dark);
}

.scuba-ai-chat-message__avatar {
  flex: 0 0 28px;
  width: 28px;
  height: 28px;
  margin-top: 4px;
}

.scuba-ai-chat-message__answer {
  flex: 1;
  min-width: 0;
  padding: var(--spacing-2xs) var(--spacing-xs);
  border-radius: 6px 18px 18px 18px;
  background: var(--context-color-surface-primary);
  box-shadow: 0 1px 2px rgba(16, 24, 40, 0.06), 0 6px 18px rgba(16, 24, 40, 0.08);
}

.scuba-ai-chat-message__text {
  margin: 0;
  white-space: pre-line;
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

/* A resposta pode ter parágrafos e listas: sem a margem de cima do primeiro nem a de baixo do último. */
.scuba-ai-chat-message__text > :deep(:first-child) {
  margin-top: 0;
}

.scuba-ai-chat-message__text > :deep(:last-child) {
  margin-bottom: 0;
}

.scuba-ai-chat-message__thinking {
  margin: 6px 0 0;
  font-size: var(--type-font-size-sm);
  color: var(--context-color-text-secondary);
}

.scuba-ai-chat-message__thinking span {
  animation: scuba-ai-chat-dot 1.2s infinite;
}

.scuba-ai-chat-message__thinking span:nth-child(2) {
  animation-delay: 0.2s;
}

.scuba-ai-chat-message__thinking span:nth-child(3) {
  animation-delay: 0.4s;
}

@keyframes scuba-ai-chat-dot {
  0%,
  100% {
    opacity: 0.2;
  }
  50% {
    opacity: 1;
  }
}

@media (prefers-reduced-motion: reduce) {
  .scuba-ai-chat-message__thinking span {
    animation: none;
  }
}
</style>
