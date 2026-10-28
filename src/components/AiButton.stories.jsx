import AiButton from './AiButton/AiButton.vue';

export default {
  title: 'Scuba/AI/AiButton',
  component: AiButton,
  tags: ['autodocs'],
  argTypes: {
    label: { control: 'text', description: 'Rótulo' },
    size: { control: 'select', options: ['sm', 'md'], description: 'Tamanho' },
    disabled: { control: 'boolean', description: 'Desabilitado' }
  },
  args: { label: 'Sugestão de resposta', size: 'md' }
};

export const Playground = (args) => ({
  components: { AiButton },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px;"><AiButton v-bind="args" /></div>'
});

export const Sizes = () => ({
  components: { AiButton },
  template: `
    <div style="padding: 40px; display: flex; gap: 16px; align-items: center;">
      <AiButton size="sm" label="Ler arquivo" />
      <AiButton size="md" label="Sugestão de resposta" />
      <AiButton size="md" label="Indisponível" disabled />
    </div>
  `
});

export const CustomIcon = () => ({
  components: { AiButton },
  template: `
    <div style="padding: 40px;">
      <AiButton label="Montar unidades">
        <template #icon><i class="ph ph-magic-wand"></i></template>
      </AiButton>
    </div>
  `
});
