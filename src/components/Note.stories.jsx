import Note from './Note/Note.vue';
import Status from './Status/Status.vue';
import Badge from './Badge/Badge.vue';
import Panel from './Panel/Panel.vue';
import Overline from './Overline/Overline.vue';

export default {
  title: 'Scuba/Note',
  component: Note,
  tags: ['autodocs'],
  argTypes: {
    variant: { control: 'select', options: ['card', 'inset', 'message'] },
    byline: { control: 'select', options: ['top', 'bottom'] },
    author: { control: 'text' },
    date: { control: 'text' },
    title: { control: 'text' },
    role: { control: 'text' },
    recipient: { control: 'text' }
  },
  args: {
    variant: 'card',
    byline: 'bottom',
    author: 'Ana Ribeiro',
    date: '02/10/2026',
    title: 'Orientação da Empresa D'
  }
};

const page = 'padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif;';
const edit = `
  <button type="button" aria-label="Editar" style="display: grid; place-items: center; width: 28px; height: 28px; border: none; border-radius: 8px; background: none; font-size: 16px; color: var(--context-color-icon-secondary); cursor: pointer;">
    <i class="ph ph-pencil-simple" aria-hidden="true"></i>
  </button>`;

export const Playground = (args) => ({
  components: { Note },
  setup() {
    return { args };
  },
  template: `
    <div style="${page}">
      <Note v-bind="args">
        Aqui na Empresa D, o SESMT de cada planta guarda as CATs. Peça a planilha consolidada à Marina Costa, do SESMT de Betim.
        <template #actions>${edit}</template>
      </Note>
    </div>
  `
});

// Validações dentro de um Panel: notas no fundo da página, com o autor em cima e a situação à direita.
export const InsetList = () => ({
  components: { Note, Status, Badge, Panel, Overline },
  template: `
    <div style="${page}">
      <Panel padding="lg">
        <Overline as="h2" label="Validações" style="margin-bottom: 24px;" />
        <div style="display: flex; flex-direction: column; gap: 8px;">
          <Note variant="inset" byline="top" author="Carlos Mendes" date="28/09/2026">
            Faltou a taxa. Informe também a base de horas usada.
            <template #actions><Status variant="adjusting">Em ajuste</Status></template>
          </Note>
          <Note variant="inset" byline="top" author="Carlos Mendes" date="01/10/2026">
            Taxa e base de horas conferidas com o SESMT.
            <template #actions><Status variant="approved">Validada</Status></template>
            <template #meta><Badge variant="white" size="sm" rounded icon-left="ph-paperclip" label="cats-2025.xlsx" /></template>
          </Note>
        </div>
      </Panel>
    </div>
  `
});

export const Bylines = () => ({
  components: { Note },
  template: `
    <div style="${page} display: grid; grid-template-columns: 1fr 1fr; gap: 24px; align-items: start;">
      <Note title="Autor embaixo" author="Ana Ribeiro" date="02/10/2026">
        O padrão para notas com título, como uma orientação.
        <template #actions>${edit}</template>
      </Note>
      <Note title="Autor em cima" byline="top" author="Ana Ribeiro" date="02/10/2026">
        Como num comentário, logo abaixo do título.
      </Note>
      <Note byline="top" author="Paula Andrade" date="25/09/2026">
        Sem título: o autor abre a nota, com o avatar maior.
      </Note>
      <Note title="Sem autor">
        Enquanto alguém escreve, por exemplo.
      </Note>
    </div>
  `
});

// Recado de alguém para outra pessoa: o avatar fora, o balão ao lado, com o cargo e para quem é.
export const Message = () => ({
  components: { Note },
  template: `
    <div style="${page} display: flex; flex-direction: column; gap: 24px; max-width: 880px;">
      <Note
        variant="message"
        title="Orientação da Empresa D"
        author="Ana Ribeiro"
        role="Gerente de SSMA"
        date="02/10/2026"
        recipient="quem responde esta pergunta"
      >
        Aqui na Empresa D, o SESMT de cada planta guarda as CATs. Peça a planilha consolidada à Marina Costa, do SESMT de Betim.
        <template #actions>${edit}</template>
      </Note>
      <Note variant="message" author="Carlos Mendes" role="Validação" date="28/09/2026" recipient="Paula Andrade">
        Faltou a taxa. Informe também a base de horas usada.
      </Note>
    </div>
  `
});
