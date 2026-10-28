import KeyFigure from './KeyFigure/KeyFigure.vue';

export default {
  title: 'Scuba/KeyFigure',
  component: KeyFigure,
  tags: ['autodocs'],
  args: {
    value: '1.250,4',
    unit: 'tCO₂e',
    scope: { label: 'Escopo 2, compra de energia', color: '#70cdff' },
    description: 'Emissões da energia elétrica comprada da rede, nas três unidades.',
    items: [
      { label: 'Registros', value: '1.240' },
      { label: 'Unidades de operação', value: '3' },
      { label: 'Método', value: 'Por consumo' }
    ]
  }
};

export const Playground = (args) => ({
  components: { KeyFigure },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif;"><KeyFigure v-bind="args" /></div>'
});
