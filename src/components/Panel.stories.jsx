import Panel from './Panel/Panel.vue';
import Button from './Button/Button.vue';

export default {
  title: 'Scuba/Panel',
  component: Panel,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Título do bloco' },
    subtitle: { control: 'text', description: 'Texto embaixo do título' },
    padding: {
      control: 'select',
      options: ['none', 'md', 'lg'],
      description: "Espaço interno: 'md' (24px) ou 'lg' (24px e 40px dos lados)"
    },
    as: { control: 'text', description: 'Elemento HTML do bloco' }
  },
  args: {
    title: 'Documentos da contratação',
    subtitle: 'Contrato, proposta e o que mais a DEEP precisa para começar.',
    padding: 'lg'
  }
};

const page = 'padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif;';

export const Playground = (args) => ({
  components: { Panel },
  setup() {
    return { args };
  },
  template: `
    <div style="${page}">
      <Panel v-bind="args" style="max-width: 640px;">
        <p style="margin: 0; font-size: 14px;">Conteúdo do bloco.</p>
      </Panel>
    </div>
  `
});

export const WithActions = () => ({
  components: { Panel, Button },
  template: `
    <div style="${page}">
      <Panel title="Unidades" subtitle="3 unidades no inventário." style="max-width: 640px;">
        <template #actions>
          <Button variant="outline" size="sm" label="Adicionar unidade" />
        </template>
        <p style="margin: 0; font-size: 14px;">Lista das unidades.</p>
      </Panel>
    </div>
  `
});

export const Stacked = () => ({
  components: { Panel },
  template: `
    <div style="${page} display: flex; flex-direction: column; gap: 24px;">
      <Panel title="Sua resposta" padding="md" style="max-width: 640px;">
        <p style="margin: 0; font-size: 14px;">Padding md, para painéis estreitos e drawers.</p>
      </Panel>
      <Panel title="Evidências" style="max-width: 640px;">
        <p style="margin: 0; font-size: 14px;">Padding lg, o padrão.</p>
      </Panel>
    </div>
  `
});
