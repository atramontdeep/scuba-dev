import StatusHeader from './StatusHeader/StatusHeader.vue';
import KeyFigure from './KeyFigure/KeyFigure.vue';
import StepList from './StepList/StepList.vue';
import Button from './Button/Button.vue';

export default {
  title: 'Scuba/StatusHeader',
  component: StatusHeader,
  tags: ['autodocs'],
  argTypes: {
    tone: { control: 'select', options: ['info', 'success', 'warning', 'neutral'] },
    label: { control: 'text' },
    icon: { control: 'text' },
    spin: { control: 'boolean' }
  },
  args: { tone: 'info', label: 'Calculando', icon: 'ph-circle-notch', spin: true }
};

export const Playground = (args) => ({
  components: { StatusHeader },
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif;">
      <StatusHeader v-bind="args">
        <p style="margin: 0; font-size: 16px;">Estamos calculando esta categoria com os dados que você enviou.</p>
      </StatusHeader>
    </div>
  `
});

const STEPS = [
  { title: 'Dados', text: '1.240 registros: notas fiscais e planilha de consumo', icon: 'ph-database', state: 'done' },
  { title: 'Cálculo', text: 'método por consumo, com os fatores da metodologia', icon: 'ph-calculator', state: 'done' },
  { title: 'Validação em andamento', text: 'a DEEP confere os dados e o cálculo', icon: 'ph-hourglass-medium', state: 'now' }
];

export const WithKeyFigureAndSteps = () => ({
  components: { StatusHeader, KeyFigure, StepList },
  setup() {
    return { STEPS };
  },
  template: `
    <div style="padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif;">
      <StatusHeader tone="info" label="Preliminar" icon="ph-hourglass-medium">
        <KeyFigure
          value="1.250,4"
          unit="tCO₂e"
          :scope="{ label: 'Escopo 2, compra de energia', color: '#70cdff' }"
          description="Emissões da energia elétrica comprada da rede, nas três unidades."
          :items="[{ label: 'Registros', value: '1.240' }, { label: 'Método', value: 'Por consumo' }]"
        />
        <template #aside>
          <p style="margin: 0 0 16px; font-size: 14px; font-weight: 600;">Como chegamos a este número</p>
          <StepList :steps="STEPS" />
        </template>
      </StatusHeader>
    </div>
  `
});

export const Tones = () => ({
  components: { StatusHeader, Button },
  template: `
    <div style="padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif; display: flex; flex-direction: column; gap: 24px;">
      <StatusHeader tone="success" label="Validada" icon="ph-seal-check"><p style="margin: 0;">Conferido pela metodologia da DEEP.</p></StatusHeader>
      <StatusHeader tone="warning" label="Em ajuste" icon="ph-wrench"><p style="margin: 0;">A DEEP está refazendo o cálculo.</p></StatusHeader>
      <StatusHeader tone="neutral" label="Sem dados" icon="ph-minus-circle">
        <p style="margin: 0;">Esta categoria ainda não tem dados.</p>
        <Button size="md" label="Enviar dados" />
      </StatusHeader>
    </div>
  `
});
