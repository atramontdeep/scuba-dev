import AlertPill from './AlertPill/AlertPill.vue';

export default {
  title: 'Scuba/AlertPill',
  component: AlertPill,
  tags: ['autodocs'],
  argTypes: {
    theme: { control: 'select', options: ['dark', 'light'] },
    iconTone: { control: 'select', options: ['warning', 'info', 'neutral'] },
    count: { control: 'number' },
    halo: { control: 'boolean' },
    ringing: { control: 'boolean' },
    caret: { control: 'boolean' }
  },
  args: {
    title: '2 pendências',
    text: 'precisam de você',
    icon: 'ph-bell-ringing',
    count: 2,
    theme: 'dark',
    iconTone: 'warning',
    ctaLabel: 'Resolver pendências',
    ctaIcon: 'ph-arrow-right',
    halo: true
  }
};

export const Playground = (args) => ({
  components: { AlertPill },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px;"><AlertPill v-bind="args" /></div>'
});

export const Variants = () => ({
  components: { AlertPill },
  template: `
    <div style="padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif; display: flex; flex-direction: column; align-items: flex-start; gap: 24px;">
      <AlertPill title="Revisar e congelar" text="Prazo 15/11/2026" icon="ph-magnifying-glass" :count="3" cta-label="Congelar inventário" />
      <AlertPill theme="light" icon-tone="info" icon="ph-calendar-check" title="Apresentação de resultados" text="20/11/2026, com Julia Zamoner" caret />
      <AlertPill theme="light" icon-tone="neutral" title="Nenhuma pendência" text="Avisamos aqui quando precisar" disabled />
    </div>
  `
});
