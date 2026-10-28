import { onBeforeUnmount, ref } from 'vue';
import AiStatus from './AiStatus/AiStatus.vue';

export default {
  title: 'Scuba/AI/AiStatus',
  component: AiStatus,
  tags: ['autodocs'],
  argTypes: {
    state: { control: 'select', options: ['idle', 'analyzing', 'ready'], description: 'Estado do Dipy e do halo' },
    layout: { control: 'select', options: ['center', 'inline'], description: "'center' para esperas; 'inline' no topo de listas" },
    title: { control: 'text' },
    text: { control: 'text' },
    progress: { control: { type: 'number', min: 0, max: 100 }, description: 'De 0 a 100; vazio esconde a barra' },
    progressLabel: { control: 'text', description: 'Etapa embaixo da barra' }
  },
  args: {
    state: 'analyzing',
    layout: 'center',
    title: 'Estamos interpretando os seus dados',
    text: 'Estamos lendo os 3 arquivos e calculando as primeiras categorias. Aguarde um instante.',
    progress: 40,
    progressLabel: 'Lendo os arquivos'
  }
};

export const Playground = (args) => ({
  components: { AiStatus },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px; max-width: 600px;"><AiStatus v-bind="args" /></div>'
});

export const Analyzing = () => ({
  components: { AiStatus },
  setup() {
    const progress = ref(0);
    const timer = setInterval(() => (progress.value = progress.value >= 100 ? 0 : progress.value + 5), 300);
    onBeforeUnmount(() => clearInterval(timer));
    return { progress };
  },
  template: `
    <div style="padding: 40px; max-width: 600px;">
      <AiStatus
        title="Estamos buscando sugestões"
        text="Procuramos nos dados do Gestão ESG e nos arquivos da Biblioteca o que responde esta pergunta."
        :progress="progress"
        :progress-label="progress < 50 ? 'Procurando nos dados' : 'Escrevendo a sugestão'"
      />
    </div>
  `
});

export const ReadyAndIdle = () => ({
  components: { AiStatus },
  template: `
    <div style="padding: 40px; display: grid; grid-template-columns: 1fr 1fr; gap: 40px; max-width: 900px;">
      <AiStatus state="ready" title="Finalizamos a análise" text="As primeiras categorias já têm resultado." />
      <AiStatus state="idle" title="Ainda não dá para sugerir" text="Não encontramos o que responde esta pergunta." />
    </div>
  `
});

export const Inline = () => ({
  components: { AiStatus },
  template: `
    <div style="padding: 40px; max-width: 600px;">
      <AiStatus layout="inline" state="ready" title="Encontramos 3 sugestões" text="Escolha uma para usar como resposta." />
    </div>
  `
});
