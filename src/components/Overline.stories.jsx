import Overline from './Overline/Overline.vue';

export default {
  title: 'Scuba/Overline',
  component: Overline,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text' },
    tone: { control: 'select', options: ['secondary', 'primary', 'focus'] },
    as: { control: 'text', description: 'Elemento HTML' }
  },
  args: { label: 'Com dados do Gestão ESG', tone: 'secondary', as: 'p' }
};

export const Playground = (args) => ({
  components: { Overline },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px;"><Overline v-bind="args" /></div>'
});

export const Tones = () => ({
  components: { Overline },
  template: `
    <div style="padding: 40px; display: flex; flex-direction: column; gap: 12px;">
      <Overline label="Sua resposta" />
      <Overline label="Escopo 1" tone="primary" />
      <Overline label="Responder o indicador" tone="focus" />
    </div>
  `
});
