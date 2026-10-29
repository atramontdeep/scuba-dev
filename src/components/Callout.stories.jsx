import Callout from './Callout/Callout.vue';
import Button from './Button/Button.vue';

export default {
  title: 'Scuba/Callout',
  component: Callout,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['neutral', 'info', 'success', 'warning'] },
    icon: { control: 'text' },
    title: { control: 'text' }
  },
  args: { tone: 'warning', icon: 'ph-flag', title: 'O que falta' }
};

const page = 'padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif;';

export const Playground = (args) => ({
  components: { Callout, Button },
  setup() {
    return { args };
  },
  template: `
    <div style="${page}">
      <Callout v-bind="args">
        <p>Precisamos dos dados de consumo de combustível da frota de 2025. Assim que chegarem, calculamos a categoria.</p>
        <template #actions>
          <Button variant="solid" size="md" label="Conectar uma fonte" />
          <span style="font-size: 14px; color: var(--context-color-text-secondary);">ou</span>
          <Button variant="outline" size="md" label="Enviar dados por aqui" />
        </template>
      </Callout>
    </div>
  `
});

export const Tones = () => ({
  components: { Callout },
  template: `
    <div style="${page} display: flex; flex-direction: column; gap: 24px;">
      <Callout tone="neutral" icon="ph-buildings" title="Orientação da Empresa D" title-tag="h3">
        <p>Aqui na Empresa D, o SESMT de cada planta guarda as CATs. Peça a planilha consolidada à Marina Costa.</p>
      </Callout>
      <Callout tone="info" icon="ph-info" title="Situação"><p>A DEEP está conferindo os dados e o cálculo.</p></Callout>
      <Callout tone="success" icon="ph-seal-check" title="Situação"><p>Categoria validada pela metodologia da DEEP.</p></Callout>
    </div>
  `
});
