import Card from './Card/Card.vue';

export default {
  title: 'Scuba/Card',
  component: Card,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['combined', 'helper', 'default', 'number', 'scope'],
      description: 'Tipo/layout do card'
    },
    title: {
      control: 'text',
      description: 'Título'
    },
    subtitle: {
      control: 'text',
      description: 'Subtítulo'
    },
    icon: {
      control: 'boolean',
      description: 'Exibir ícone (combined, helper, number)'
    },
    iconClass: {
      control: 'text',
      description: 'Classe do ícone Phosphor (ex.: ph-chart-pie), sem o prefixo "ph"'
    },
    badge: {
      control: 'boolean',
      description: 'Exibir badge de contagem (helper)'
    },
    badgeCount: {
      control: 'text',
      description: 'Valor do badge (helper)'
    },
    label: {
      control: 'text',
      description: 'Texto do botão de ação (combined)'
    },
    number: {
      control: 'text',
      description: 'Número em destaque (number, scope)'
    },
    color: {
      control: 'color',
      description: 'Cor do indicador e do chip (scope)'
    },
    percentage: {
      control: 'text',
      description: 'Percentual exibido no chip (scope)'
    },
    hint: {
      control: 'text',
      description: 'Texto auxiliar abaixo do número (scope)'
    },
    clickable: {
      control: 'boolean',
      description: 'Habilita cursor pointer e eventos de clique'
    },
  },
};

const Template = (args) => ({
  components: { Card },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px;"><Card v-bind="args" /></div>',
});

export const Playground = Template.bind({});
Playground.args = {
  type: 'combined',
  title: 'Title',
  subtitle: 'Subtitle',
  icon: true,
  label: 'Label',
  clickable: true,
};

export const Combined = Template.bind({});
Combined.args = {
  type: 'combined',
  title: 'Title',
  subtitle: 'Subtitle',
  icon: true,
  label: 'Label',
};

export const Helper = Template.bind({});
Helper.args = {
  type: 'helper',
  title: 'Title',
  subtitle: 'Subtitle',
  icon: true,
  badge: true,
  badgeCount: 1,
};

export const Default = Template.bind({});
Default.args = {
  type: 'default',
  title: 'Title',
  subtitle: 'Subtitle',
};

export const Number = Template.bind({});
Number.args = {
  type: 'number',
  title: 'Title',
  subtitle: 'Subtitle',
  number: '142',
  icon: true,
  iconClass: 'ph-chart-pie',
};

export const Scope = Template.bind({});
Scope.args = {
  type: 'scope',
  title: 'Escopo 1',
  subtitle: 'Emissões diretas',
  number: '1.250,4 tCO₂e',
  percentage: '42%',
  hint: 'vs. período anterior',
  color: 'var(--primitives-color-azure)',
  clickable: true,
};

export const AllTypes = () => ({
  components: { Card },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start;">
      <Card type="combined" title="Title" subtitle="Subtitle" label="Label" clickable />
      <Card type="helper" title="Title" subtitle="Subtitle" clickable />
      <Card type="default" title="Title" subtitle="Subtitle" clickable />
      <Card type="number" title="Title" subtitle="Subtitle" number="142" icon-class="ph-chart-pie" clickable />
      <Card
        type="scope"
        title="Escopo 1"
        subtitle="Emissões diretas"
        number="1.250,4 tCO₂e"
        percentage="42%"
        hint="vs. período anterior"
        clickable
        style="max-width: 333px;"
      />
    </div>
  `,
});
