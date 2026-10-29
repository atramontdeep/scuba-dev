<template>
  <component :is="as" :class="['scuba-note', `scuba-note--${variant}`, `scuba-note--byline-${byline}`]">
    <div v-if="title || $slots.title || bylineOnHead || $slots.actions" class="scuba-note__head">
      <Overline v-if="title || $slots.title" :as="titleTag" class="scuba-note__title">
        <slot name="title">{{ title }}</slot>
      </Overline>
      <div v-else-if="bylineOnHead" class="scuba-note__byline">
        <Avatar :src="avatar" :initials="initialsFor" size="sm" />
        <span class="scuba-note__author">{{ author }}</span>
        <span v-if="date" class="scuba-note__date">{{ date }}</span>
      </div>
      <div v-if="$slots.actions" class="scuba-note__actions"><slot name="actions" /></div>
    </div>

    <div v-if="author && byline === 'top' && (title || $slots.title)" class="scuba-note__byline">
      <Avatar :src="avatar" :initials="initialsFor" size="xs" />
      <span class="scuba-note__author">{{ author }}</span>
      <span v-if="date" class="scuba-note__date">{{ date }}</span>
    </div>

    <div class="scuba-note__text"><slot /></div>

    <div v-if="$slots.meta" class="scuba-note__meta"><slot name="meta" /></div>

    <div v-if="author && byline === 'bottom'" class="scuba-note__byline">
      <Avatar :src="avatar" :initials="initialsFor" size="xs" />
      <span class="scuba-note__author">{{ author }}</span>
      <span v-if="date" class="scuba-note__date">{{ date }}</span>
    </div>
  </component>
</template>

<script setup>
// Nota de uma pessoa (29/10/2026, da resposta do indicador): o que alguém escreveu, com quem escreveu e quando. Serve
// para orientações da empresa, validações, comentários de ajuste e observações. 'card', um cartão branco solto na
// página; 'inset', um bloco no fundo da página, para listas dentro de um Panel. O título opcional é uma legenda em
// caixa alta. O autor fica embaixo do texto ('bottom', o padrão para notas com título) ou em cima ('top', como num
// comentário, com o avatar maior quando não há título). Slots: default (o texto ou um formulário de edição), actions
// (à direita, na primeira linha: editar, uma situação), meta (embaixo do texto: anexos, etiquetas).
import { computed } from 'vue';
import Avatar from '../Avatar/Avatar.vue';
import Overline from '../Overline/Overline.vue';

const props = defineProps({
  // Quem escreveu. Sem autor, a nota fica sem a linha do autor (por exemplo, enquanto alguém escreve).
  author: {
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
    validator: (value) => ['card', 'inset'].includes(value)
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

const initialsFor = computed(() => {
  if (props.initials) return props.initials;
  const parts = props.author.trim().split(/\s+/).filter(Boolean);
  if (!parts.length) return '';
  return (parts[0][0] + (parts.length > 1 ? parts[parts.length - 1][0] : '')).toUpperCase();
});

// Sem título, com o autor em cima: o autor abre a nota, na linha das ações.
const bylineOnHead = computed(() => Boolean(props.author) && props.byline === 'top' && !props.title);
</script>

<style scoped>
.scuba-note {
  display: flex;
  flex-direction: column;
  align-items: stretch;
  gap: var(--spacing-3xs);
  margin: 0;
  font-family: var(--type-font-family-body);
  color: var(--context-color-text-primary);
  box-sizing: border-box;
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

.scuba-note__head {
  display: flex;
  align-items: center;
  gap: var(--spacing-3xs);
  min-height: 28px;
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
  align-items: center;
  gap: var(--spacing-3xs);
  min-width: 0;
}

.scuba-note__head .scuba-note__byline {
  flex: 1;
}

.scuba-note__author {
  font-size: var(--type-font-size-sm);
  font-weight: var(--type-font-weight-semibold);
  color: var(--context-color-text-primary);
}

.scuba-note__date {
  font-size: var(--type-font-size-xs);
  color: var(--context-color-text-secondary);
}

/* O autor embaixo, mais discreto: um respiro acima e o nome em 12px. */
.scuba-note--byline-bottom > .scuba-note__byline {
  margin-top: var(--spacing-4xs);
}

.scuba-note--byline-bottom > .scuba-note__byline .scuba-note__author {
  font-size: var(--type-font-size-xs);
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
