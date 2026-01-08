import { ref, onBeforeUnmount } from 'vue';
import ProgressBar from './ProgressBar/ProgressBar.vue';

export default {
  title: 'Scuba/ProgressBar',
  component: ProgressBar,
  tags: ['autodocs'],
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 100, step: 1 },
      description: 'Valor do progresso (0-100)'
    },
    size: {
      control: 'select',
      options: ['sm'],
      description: 'Tamanho da barra (apenas sm)'
    },
    supportText: {
      control: 'text',
      description: 'Texto de suporte (abaixo à esquerda)'
    },
    showPercentage: {
      control: 'boolean',
      description: 'Mostrar porcentagem (abaixo à direita)'
    },
    animated: {
      control: 'boolean',
      description: 'Animação de progresso'
    }
  },
};

const Template = (args) => ({
  components: { ProgressBar },
  setup() {
    return { args };
  },
  template: '<ProgressBar v-bind="args" />',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  value: 65,
  size: 'sm',
  showPercentage: true,
  supportText: 'Uploading files...',
};

export const Basic = Template.bind({});
Basic.args = {
  value: 75,
  size: 'sm',
  showPercentage: true,
};

export const WithSupportText = Template.bind({});
WithSupportText.args = {
  value: 45,
  size: 'sm',
  showPercentage: true,
  supportText: 'Processing...',
};

export const Animated = Template.bind({});
Animated.args = {
  value: 60,
  size: 'sm',
  showPercentage: true,
  supportText: 'Loading',
  animated: true,
};

export const AllVariants = () => ({
  components: { ProgressBar },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Progress Bar Examples</h2>
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Basic</h3>
          <ProgressBar :value="75" supportText="Uploading..." showPercentage />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">With Animation</h3>
          <ProgressBar :value="60" supportText="Processing" showPercentage animated />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Without Support Text</h3>
          <ProgressBar :value="45" showPercentage />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Without Percentage</h3>
          <ProgressBar :value="90" supportText="Almost done" :showPercentage="false" />
        </div>
      </div>
    </div>
  `,
});

export const AnimatedDemo = () => ({
  components: { ProgressBar },
  setup() {
    const progress = ref(0);
    const interval = setInterval(() => {
      if (progress.value >= 100) {
        progress.value = 0;
      } else {
        progress.value += 1;
      }
    }, 50);

    onBeforeUnmount(() => {
      clearInterval(interval);
    });

    return { progress };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Animated Progress</h2>
      <ProgressBar :value="progress" supportText="Auto Incrementing" showPercentage animated />
    </div>
  `,
});

export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus</code></td><td>Progress bar (single)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td><td>Track & bar 2 (triple)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td><td>Border 0%</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td>Background 1-99%</td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-blue-900</code></td><td>Background 100%</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td>Support text & %</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>Single height</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>DataTable height</code></td><td style="text-align: right;">28px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">Single variant</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">DataTable variant</td></tr>
          </table>
        </div>
      </div>
    </div>
  `,
});
