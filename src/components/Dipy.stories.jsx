import DipyIcon from './Dipy/DipyIcon.vue';
import DipyMascot from './Dipy/DipyMascot.vue';
import DipyWave from './Dipy/DipyWave.vue';

export default {
  title: 'Scuba/AI/Dipy',
  component: DipyMascot,
  subcomponents: { DipyIcon, DipyWave },
  tags: ['autodocs'],
  argTypes: {
    state: {
      control: 'select',
      options: ['idle', 'analyzing', 'ready'],
      description: 'Estado do mascote'
    }
  },
  args: { state: 'idle' }
};

const label = 'font-family: Poppins, sans-serif; font-size: 12px; color: var(--context-color-text-secondary); margin-top: 8px;';

export const Mascot = (args) => ({
  components: { DipyMascot },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px;"><DipyMascot v-bind="args" style="height: 160px;" /></div>'
});

export const States = () => ({
  components: { DipyMascot, DipyWave },
  template: `
    <div style="padding: 40px; display: flex; gap: 48px; align-items: flex-end;">
      <div><DipyMascot state="idle" style="height: 120px;" /><p style="${label}">idle</p></div>
      <div><DipyMascot state="analyzing" style="height: 120px;" /><p style="${label}">analyzing</p></div>
      <div><DipyMascot state="ready" style="height: 120px;" /><p style="${label}">ready</p></div>
      <div><DipyWave style="height: 120px;" /><p style="${label}">DipyWave</p></div>
    </div>
  `
});

export const Icon = () => ({
  components: { DipyIcon },
  template: `
    <div style="padding: 40px; display: flex; gap: 32px; align-items: center;">
      <div><DipyIcon style="width: 24px; height: 24px;" /><p style="${label}">24px</p></div>
      <div><DipyIcon style="width: 40px; height: 40px;" /><p style="${label}">40px</p></div>
      <div><DipyIcon animate style="width: 40px; height: 40px;" /><p style="${label}">animate</p></div>
      <div class="scuba-dipy-host" style="padding: 8px 12px; border-radius: 12px; background: var(--semantic-color-ai-gradient);">
        <DipyIcon style="width: 24px; height: 24px;" /><p style="${label}">hover em scuba-dipy-host</p>
      </div>
    </div>
  `
});
