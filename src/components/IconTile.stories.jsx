import IconTile from './IconTile/IconTile.vue';
import DipyIcon from './Dipy/DipyIcon.vue';

export default {
  title: 'Scuba/IconTile',
  component: IconTile,
  tags: ['autodocs'],
  argTypes: {
    icon: { control: 'text', description: "Classe do Phosphor, como 'ph-database'" },
    size: { control: 'select', options: ['sm', 'md', 'lg', 'xl'] },
    tone: { control: 'select', options: ['info', 'neutral', 'success', 'warning', 'error', 'dark', 'ai', 'white'] },
    shape: { control: 'select', options: ['square', 'circle'] }
  },
  args: { icon: 'ph-database', size: 'md', tone: 'info', shape: 'square' }
};

export const Playground = (args) => ({
  components: { IconTile },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px;"><IconTile v-bind="args" /></div>'
});

export const Tones = () => ({
  components: { IconTile, DipyIcon },
  setup() {
    return { tones: ['info', 'neutral', 'success', 'warning', 'error', 'dark', 'white'] };
  },
  template: `
    <div style="padding: 40px; background: var(--context-color-surface-page); font-family: Poppins, sans-serif; display: flex; flex-direction: column; gap: 24px;">
      <div style="display: flex; gap: 12px;">
        <IconTile v-for="t in tones" :key="t" icon="ph-user-circle" :tone="t" />
        <IconTile tone="ai"><DipyIcon /></IconTile>
      </div>
      <div style="display: flex; gap: 12px; align-items: center;">
        <IconTile icon="ph-bell-ringing" size="sm" />
        <IconTile icon="ph-bell-ringing" size="md" />
        <IconTile icon="ph-bell-ringing" size="lg" />
        <IconTile icon="ph-bell-ringing" size="xl" />
        <IconTile icon="ph-bell-ringing" size="xl" shape="circle" tone="warning" />
      </div>
      <div style="display: flex; gap: 16px; align-items: flex-start; max-width: 420px; font-size: 14px;">
        <IconTile icon="ph-arrow-bend-down-right" />
        <p style="margin: 0; color: var(--context-color-text-secondary);">
          <strong style="display: block; color: var(--primitives-color-gray-900);">O que acontece depois</strong>
          A DEEP confere os dados e o cálculo.
        </p>
      </div>
    </div>
  `
});
