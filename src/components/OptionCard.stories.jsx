import { ref } from 'vue';
import OptionCard from './OptionCard/OptionCard.vue';
import OptionCardGroup from './OptionCard/OptionCardGroup.vue';

export default {
  title: 'Scuba/OptionCard',
  component: OptionCard,
  subcomponents: { OptionCardGroup },
  tags: ['autodocs']
};

export const Default = () => ({
  components: { OptionCard, OptionCardGroup },
  setup() {
    const choice = ref(null);
    return { choice };
  },
  template: `
    <div style="padding: 40px; background: var(--context-color-surface-page); max-width: 640px; font-family: Poppins, sans-serif;">
      <OptionCardGroup v-model="choice" label="Sugestões de resposta">
        <OptionCard value="ia" variant="ai" label="Sugestão da IA">
          <template #icon><i class="ph ph-sparkle"></i></template>
          Em 2025, 2.410.500 horas trabalhadas, sem óbitos.
        </OptionCard>
        <OptionCard value="g0">
          Horas trabalhadas em 2025: 2.410.500 h.
          <template #meta><i class="ph ph-chart-line"></i><span>Horas trabalhadas em 2025</span></template>
        </OptionCard>
        <OptionCard value="b0">
          38 CATs registradas no ano, nenhuma por óbito.
          <template #meta><i class="ph ph-file-pdf"></i><span>Relatorio_SESMT_2025.pdf</span></template>
        </OptionCard>
      </OptionCardGroup>
      <p style="margin-top: 16px; font-size: 14px;">Escolhida: {{ choice ?? 'nenhuma' }}</p>
    </div>
  `
});
