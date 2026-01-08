import Spinner from './Spinner/Spinner.vue';

export default {
  title: 'Scuba/Spinner',
  component: Spinner,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do spinner'
    },
    variant: {
      control: 'select',
      options: ['primary', 'neutral', 'success', 'warning', 'error', 'info'],
      description: 'Cor do spinner'
    },
    label: {
      control: 'text',
      description: 'Texto abaixo do spinner'
    }
  },
};

const Template = (args) => ({
  components: { Spinner },
  setup() {
    return { args };
  },
  template: '<Spinner v-bind="args" />',
});

export const Playground = Template.bind({});
Playground.args = {
  size: 'md',
  variant: 'primary',
};

export const WithLabel = Template.bind({});
WithLabel.args = {
  size: 'md',
  variant: 'primary',
  label: 'Loading...',
};

export const AllSizes = () => ({
  components: { Spinner },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Spinner Sizes</h2>
      <div style="display: flex; align-items: center; gap: 32px;">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </div>
    </div>
  `,
});

export const AllVariants = () => ({
  components: { Spinner },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Spinner Variants</h2>
      <div style="display: flex; gap: 32px; flex-wrap: wrap;">
        <Spinner variant="primary" label="Primary" />
        <Spinner variant="neutral" label="Neutral" />
        <Spinner variant="success" label="Success" />
        <Spinner variant="warning" label="PhWarning" />
        <Spinner variant="error" label="Error" />
        <Spinner variant="info" label="PhInfo" />
      </div>
    </div>
  `,
});

export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizes</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--scale-300</code></td><td style="text-align: right;">16px (xs)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-400</code></td><td style="text-align: right;">20px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-800</code></td><td style="text-align: right;">48px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-1000</code></td><td style="text-align: right;">64px (xl)</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-normal</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-normal</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-normal</code></td></tr>
          </table>
        </div>
      </div>
    </div>
  `,
});
