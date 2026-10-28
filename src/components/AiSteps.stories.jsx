import { onBeforeUnmount, ref } from 'vue';
import AiSteps from './AiSteps/AiSteps.vue';

export default {
  title: 'Scuba/AI/AiSteps',
  component: AiSteps,
  tags: ['autodocs'],
  argTypes: {
    title: { control: 'text', description: 'Título enquanto trabalha' },
    doneTitle: { control: 'text', description: 'Título quando todas as etapas terminam' },
    current: { control: { type: 'number', min: 1, max: 4 }, description: 'Etapa em andamento (acima do total: todas feitas)' },
    size: { control: 'select', options: ['sm', 'md'], description: 'Tamanho' }
  },
  args: {
    title: 'Lendo o arquivo',
    doneTitle: 'Leitura concluída',
    steps: ['Abrindo a planilha', 'Encontrando as unidades', 'Montando o cadastro'],
    current: 2,
    size: 'md'
  }
};

export const Playground = (args) => ({
  components: { AiSteps },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px; max-width: 560px;"><AiSteps v-bind="args" /></div>'
});

export const Running = () => ({
  components: { AiSteps },
  setup() {
    const current = ref(1);
    const timer = setInterval(() => (current.value = current.value > 2 ? 1 : current.value + 1), 1100);
    onBeforeUnmount(() => clearInterval(timer));
    return { current };
  },
  template: `
    <div style="padding: 40px; max-width: 560px;">
      <AiSteps
        size="sm"
        title="Buscando respostas para esta pergunta"
        done-title="Busca concluída"
        :steps="['Procurando em respostas anteriores', 'Procurando em indicadores similares']"
        :current="current"
      >
        <template #icon="{ working }"><i :class="['ph', working ? 'ph-circle-notch' : 'ph-sparkle']" style="font-size: 22px;"></i></template>
      </AiSteps>
    </div>
  `
});
