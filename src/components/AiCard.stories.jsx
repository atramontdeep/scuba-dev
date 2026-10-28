import AiCard from './AiCard/AiCard.vue';
import UploadBox from './UploadBox/UploadBox.vue';
import Button from './Button/Button.vue';

export default {
  title: 'Scuba/AI/AiCard',
  component: AiCard,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['idle', 'analyzing', 'ready'] },
    layout: { control: 'select', options: ['stack', 'split'] },
    size: { control: 'select', options: ['md', 'lg'] }
  },
  args: {
    title: 'Envie a lista das suas unidades e filiais',
    text: 'Serve qualquer arquivo que você já tenha: uma planilha, um relatório do seu sistema, um PDF ou o cartão CNPJ. A gente interpreta e monta para você.',
    state: 'idle',
    layout: 'stack',
    size: 'md'
  }
};

export const Playground = (args) => ({
  components: { AiCard, UploadBox },
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 40px; max-width: 760px;">
      <AiCard v-bind="args"><UploadBox :files="[]" accept-label="planilha, PDF ou imagem" /></AiCard>
    </div>
  `
});

export const Split = () => ({
  components: { AiCard, UploadBox },
  template: `
    <div style="padding: 40px; max-width: 960px;">
      <AiCard layout="split" size="lg" title="Envie os arquivos que tiver" text="Qualquer arquivo serve: planilhas, PDFs, relatórios do sistema. O Dipy lê cada um, diz para onde vai e já consegue calcular algumas categorias.">
        <UploadBox :files="[]" size="sm" accept-label="planilha, PDF ou imagem" />
      </AiCard>
    </div>
  `
});

export const WithActions = () => ({
  components: { AiCard, Button },
  template: `
    <div style="padding: 40px; max-width: 960px;">
      <AiCard size="lg" title="O que entendemos da sua planilha" text="Confira as colunas que reconhecemos e o que corrigimos antes de montar a tabela.">
        <template #details>
          <span style="font-size: 12px; color: var(--context-color-text-secondary);">Consumo_2025.xlsx · 1.240 linhas · 6 colunas reconhecidas</span>
        </template>
        <template #actions><Button variant="outline" size="sm" label="Enviar outro arquivo" /></template>
      </AiCard>
    </div>
  `
});
