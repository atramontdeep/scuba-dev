import { ref } from 'vue';
import Tour from './Tour/Tour.vue';
import Button from './Button/Button.vue';

export default {
  title: 'Scuba/Tour',
  component: Tour,
  tags: ['autodocs']
};

const STEPS = [
  { target: '#tour-a', title: 'Situação da pergunta', body: 'Aqui você vê se a pergunta está aberta, respondida ou em revisão.' },
  { target: '#tour-b', title: 'Sugestão de resposta', body: 'Buscamos nos dados e nos arquivos e montamos sugestões. Você escolhe uma e ajusta.' },
  { target: '', title: 'Pronto para começar', body: 'Sem elemento em destaque, o balão fica no meio da tela.' }
];

export const Default = () => ({
  components: { Tour, Button },
  setup() {
    const step = ref(0);
    const open = ref(true);
    const steps = STEPS;
    const next = () => (step.value < steps.length - 1 ? step.value++ : (open.value = false));
    return { step, open, steps, next };
  },
  template: `
    <div style="padding: 40px; min-height: 420px; font-family: Poppins, sans-serif;">
      <div style="display: flex; gap: 16px;">
        <span id="tour-a" style="padding: 4px 12px; border-radius: 64px; background: var(--context-color-surface-action); font-size: 14px;">Em aberto</span>
        <Button id="tour-b" variant="outline" label="Sugestão de resposta" />
      </div>
      <Button v-if="!open" style="margin-top: 40px;" label="Ver o guia de novo" @click="step = 0; open = true" />
      <Tour
        v-if="open"
        kicker="Responder o indicador"
        :target="steps[step].target"
        :title="steps[step].title"
        :body="steps[step].body"
        :step="step + 1"
        :total="steps.length"
        @next="next"
        @prev="step--"
        @close="open = false"
      />
    </div>
  `
});
