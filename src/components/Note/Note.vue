<template>
  <component
    :is="as"
    :class="['scuba-note', `scuba-note--${variant}`, `scuba-note--byline-${place}`, { 'scuba-note--face': face }]"
  >
    <Avatar v-if="face" class="scuba-note__face" :src="avatar" :initials="initialsFor" size="sm" />

    <div class="scuba-note__box">
      <div v-if="hasTitle || (!author && $slots.actions)" class="scuba-note__head">
        <Overline v-if="hasTitle" :as="titleTag" class="scuba-note__title">
          <slot name="title">{{ title }}</slot>
        </Overline>
        <div v-if="$slots.actions" class="scuba-note__actions"><slot name="actions" /></div>
      </div>

      <div v-if="author" class="scuba-note__byline">
        <Avatar v-if="!face" :src="avatar" :initials="initialsFor" :size="bigAvatar ? 'sm' : 'xs'" />
        <span class="scuba-note__author">{{ author }}</span>
        <span v-if="role" class="scuba-note__role">{{ role }}</span>
        <span v-if="date" class="scuba-note__date">{{ date }}</span>
        <div v-if="!hasTitle && $slots.actions" class="scuba-note__actions"><slot name="actions" /></div>
      </div>

      <p v-if="recipient" class="scuba-note__to">
        <i class="ph ph-arrow-bend-down-right" aria-hidden="true"></i>
        Para {{ recipient }}
      </p>

      <div class="scuba-note__text"><slot /></div>

      <div v-if="$slots.meta" class="scuba-note__meta"><slot name="meta" /></div>
    </div>
  </component>
</template>

<script setup>
// Nota de uma pessoa (29/10/2026, da resposta do indicador): o que alguém escreveu, com quem escreveu e quando. Serve
// para orientações da empresa, validações, comentários de ajuste e observações. Variantes:
// 'card', um cartão branco solto na página; 'inset', um bloco no fundo da página, para listas dentro de um Panel;
// 'message', um recado de alguém para outra pessoa: o avatar fora, à esquerda, e a nota num balão branco com o canto de
// cima mais fechado, como numa conversa, com o cargo de quem escreveu e para quem é (recipient).
// O título opcional é uma legenda em caixa alta. O autor fica embaixo do texto ('bottom') ou em cima ('top', como num
// comentário, com o avatar maior quando não há título); no 'message', sempre em cima. Slots: default (o texto ou um
// formulário de edição), actions (à direita, na primeira linha: editar, uma situação), meta (embaixo do texto: anexos,
// etiquetas).
import { computed, useSlots } from 'vue';
import Avatar from '../Avatar/Avatar.vue';
import Overline from '../Overline/Overline.vue';

const props = defineProps({
  // Quem escreveu. Sem autor, a nota fica sem a linha do autor (por exemplo, enquanto alguém escreve).
  author: {
    type: String,
    default: ''
  },
  // Cargo ou área de quem escreveu: 'Gerente de SSMA'.
  role: {
    type: String,
    default: ''
  },
  // Para quem é a nota, depois de "Para": 'quem responde esta pergunta'.
  recipient: {
    type: String,
    default: ''
  },
  // Iniciais no avatar; sem elas, a primeira letra do primeiro e do último nome do autor.
  initials: {
    type: String,
    default: ''
  },
  // Foto do autor.
  avatar: {
    type: String,
    default: ''
  },
  // Quando, já formatado: '02/10/2026'.
  date: {
    type: String,
    default: ''
  },
  title: {
    type: String,
    default: ''
  },
  titleTag: {
    type: String,
    default: 'h3'
  },
  variant: {
    type: String,
    default: 'card',
    validator: (value) => ['card', 'inset', 'message'].includes(value)
  },
  byline: {
    type: String,
    default: 'bottom',
    validator: (value) => ['top', 'bottom'].includes(value)
  },
  as: {
    type: String,
    default: 'article'
  }
});

const slots = useSlots();
const hasTitle = computed(() => Boolean(props.title || slots.title));
// No recado, o autor sempre em cima, com o avatar fora do balão.
const place = computed(() => (props.variant === 'message' ? 'top' : props.byline));
const face = computed(() => props.variant === 'message' && Boolean(props.author));
// Sem título, com o autor em cima: o autor abre a nota, com o avatar maior.
const bigAvatar = computed(() => place.value === 'top' && !hasTitle.value);

const initialsFor = computed(() => {
  if (props.initials) return props.initials;
  const parts = props.author.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '';
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
});
</script>

<style scoped>
.scuba-note {
  margin: 0;
  font-family: var(--type-font-family-body);
  color: var(--context-color-text-primary);
  box-sizing: border-box;
}

/* Em 'card' e 'inset', a caixa não existe para o layout: as partes ficam direto na nota. */
.scuba-note--card,
.scuba-note--inset {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--spacing-3xs);
}

.scuba-note--card .scuba-note__box,
.scuba-note--inset .scuba-note__box {
  display: contents;
}

.scuba-note--card {
  padding: var(--spacing-md) var(--spacing-lg);
  border: var(--border-width-border-sm) solid var(--context-color-border-subtle);
  border-radius: var(--border-radius-rounded-lg);
  background: var(--context-color-surface-primary);
  box-shadow: var(--shadow-card);
}

.scuba-note--inset {
  padding: var(--spacing-xs) var(--spacing-sm);
  border-radius: var(--border-radius-rounded-md);
  background: var(--context-color-surface-page);
}

/* Recado: o avatar fora e o balão ao lado, com o canto de cima, junto do avatar, mais fechado. */
.scuba-note--message {
  display: grid;
  grid-template-columns: minmax(0, 1fr);
  align-items: start;
  gap: var(--spacing-2xs);
}

.scuba-note--message.scuba-note--face {
  grid-template-columns: auto minmax(0, 1fr);
}

.scuba-note--message .scuba-note__box {
  display: flex;
  flex-direction: column;
  gap: var(--spacing-3xs);
  min-width: 0;
  padding: var(--spacing-sm) var(--spacing-md);
  border: var(--border-width-border-sm) solid var(--context-color-border-subtle);
  border-radius: 6px var(--border-radius-rounded-lg) var(--border-radius-rounded-lg) var(--border-radius-rounded-lg);
  background: var(--context-color-surface-primary);
  box-shadow: var(--shadow-card);
}

/* A ordem na tela: título, autor, para quem, texto, anexos; com o autor embaixo, ele vai para o fim. */
.scuba-note__head {
  order: 0;
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  min-height: 28px;
}

.scuba-note__byline,
.scuba-note__to {
  order: 1;
}

.scuba-note__text {
  order: 2;
}

.scuba-note__meta {
  order: 3;
}

.scuba-note--byline-bottom .scuba-note__byline {
  order: 4;
  margin-top: var(--spacing-4xs);
}

.scuba-note__title {
  flex: 1;
  min-width: 0;
}

.scuba-note__actions {
  display: flex;
  flex: none;
  align-items: center;
  gap: var(--spacing-4xs);
  margin-left: auto;
}

.scuba-note__byline {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-4xs) var(--spacing-3xs);
  min-width: 0;
}

.scuba-note__author {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
}

.scuba-note__role,
.scuba-note__date {
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-secondary);
}

/* O cargo e a data separados por um ponto. */
.scuba-note__role + .scuba-note__date::before {
  content: '·';
  margin-right: var(--spacing-3xs);
}

/* O autor embaixo, mais discreto: o nome em 12px. */
.scuba-note--byline-bottom .scuba-note__author {
  font-size: var(--type-font-size-xs);
}

.scuba-note__to {
  display: flex;
  align-items: center;
  gap: var(--spacing-4xs);
  margin: calc(var(--spacing-3xs) * -1 + 2px) 0 0;
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-secondary);
}

.scuba-note__to i {
  font-size: 14px;
}

.scuba-note__text {
  font-size: var(--type-font-size-sm);
  line-height: var(--type-line-height-normal);
  color: var(--context-color-text-primary);
}

.scuba-note__text :deep(p) {
  margin: 0;
}

.scuba-note__meta {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: var(--spacing-3xs);
}
</style>
