import Badge from './Badge/Badge.vue';

export default {
  title: 'Scuba/Badge',
  component: Badge,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Variante visual do badge'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do badge'
    },
    label: {
      control: 'text',
      description: 'Texto do badge'
    },
    rounded: {
      control: 'boolean',
      description: 'Badge arredondado (pill shape)'
    },
    removable: {
      control: 'boolean',
      description: 'Permite remover o badge'
    },
    iconLeft: {
      control: 'text',
      description: 'Ícone esquerda (ex: ph-star)'
    },
    iconRight: {
      control: 'text',
      description: 'Ícone direita (ex: ph-arrow-right)'
    }
  },
};

const Template = (args) => ({
  components: { Badge },
  setup() {
    return { args };
  },
  template: '<Badge v-bind="args" />',
});

export const Playground = Template.bind({});
Playground.args = {
  variant: 'primary',
  size: 'md',
  label: 'Badge',
  iconLeft: 'ph-star',
};

// Variants
export const Neutral = Template.bind({});
Neutral.args = {
  variant: 'neutral',
  label: 'Neutral',
};

export const Primary = Template.bind({});
Primary.args = {
  variant: 'primary',
  label: 'Primary',
};

export const Success = Template.bind({});
Success.args = {
  variant: 'success',
  label: 'Success',
  iconLeft: 'ph-check-circle',
};

export const Warning = Template.bind({});
Warning.args = {
  variant: 'warning',
  label: 'Warning',
  iconLeft: 'ph-warning',
};

export const Error = Template.bind({});
Error.args = {
  variant: 'error',
  label: 'Error',
  iconLeft: 'ph-x-circle',
};

export const Info = Template.bind({});
Info.args = {
  variant: 'info',
  label: 'Info',
  iconLeft: 'ph-info',
};

// Sizes
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  label: 'Small',
  variant: 'primary',
};

export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  label: 'Medium',
  variant: 'primary',
};

export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  label: 'Large',
  variant: 'primary',
};

// Rounded
export const Rounded = Template.bind({});
Rounded.args = {
  label: 'Rounded Badge',
  variant: 'primary',
  rounded: true,
};

// Removable
export const Removable = () => ({
  components: { Badge },
  setup() {
    const handleRemove = () => {
      alert('Badge removed!');
    };
    return { handleRemove };
  },
  template: '<Badge label="Removable" variant="primary" removable @remove="handleRemove" />',
});

// All Variants Matrix
export const AllVariants = () => ({
  components: { Badge },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Badge Variants</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px;">
        <Badge label="Neutral" variant="neutral" />
        <Badge label="Primary" variant="primary" />
        <Badge label="Success" variant="success" iconLeft="ph-check-circle" />
        <Badge label="PhWarning" variant="warning" iconLeft="ph-warning" />
        <Badge label="Error" variant="error" iconLeft="ph-x-circle" />
        <Badge label="PhInfo" variant="info" iconLeft="ph-info" />
      </div>

      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Badge Sizes</h2>

      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 32px;">
        <Badge label="Small" size="sm" variant="primary" />
        <Badge label="Medium" size="md" variant="primary" />
        <Badge label="Large" size="lg" variant="primary" />
      </div>

      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Badge Styles</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <Badge label="Default" variant="primary" />
        <Badge label="Rounded" variant="primary" rounded />
        <Badge label="With Icon" variant="primary" iconLeft="ph-star" />
        <Badge label="Removable" variant="primary" removable />
        <Badge label="Icon + Removable" variant="primary" iconLeft="ph-check" removable />
      </div>
    </div>
  `,
});

export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Semantic Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-200</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-100</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-info-light</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--scale-400</code></td><td style="text-align: right;">20px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
          </table>
        </div>
      </div>
    </div>
  `,
});
