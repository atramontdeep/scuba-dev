import Avatar from './Avatar/Avatar.vue';

export default {
  title: 'Scuba/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg', 'xl'],
      description: 'Tamanho do avatar'
    },
    shape: {
      control: 'select',
      options: ['circle', 'square'],
      description: 'Forma do avatar'
    },
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'error', 'info'],
      description: 'Cor de fundo quando não tem imagem'
    },
    src: {
      control: 'text',
      description: 'URL da imagem'
    },
    alt: {
      control: 'text',
      description: 'Texto alternativo'
    },
    initials: {
      control: 'text',
      description: 'Iniciais do usuário'
    },
    icon: {
      control: 'text',
      description: 'Ícone Phosphor (ex: ph-user)'
    },
    badge: {
      control: 'boolean',
      description: 'Mostrar badge de status'
    },
    badgeVariant: {
      control: 'select',
      options: ['success', 'warning', 'error', 'neutral'],
      description: 'Cor do badge'
    }
  },
};

const Template = (args) => ({
  components: { Avatar },
  setup() {
    return { args };
  },
  template: '<Avatar v-bind="args" />',
});

export const Playground = Template.bind({});
Playground.args = {
  initials: 'AB',
  size: 'md',
  variant: 'primary',
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://i.pravatar.cc/150?img=1',
  alt: 'PhUser Avatar',
  size: 'md',
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  initials: 'AB',
  size: 'md',
  variant: 'primary',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  icon: 'ph-user',
  size: 'md',
  variant: 'neutral',
};

export const WithBadge = Template.bind({});
WithBadge.args = {
  initials: 'AB',
  size: 'md',
  variant: 'primary',
  badge: true,
  badgeVariant: 'success',
};

export const AllSizes = () => ({
  components: { Avatar },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Sizes</h2>
      <div style="display: flex; align-items: center; gap: 16px;">
        <Avatar initials="XS" size="xs" variant="primary" />
        <Avatar initials="SM" size="sm" variant="primary" />
        <Avatar initials="MD" size="md" variant="primary" />
        <Avatar initials="LG" size="lg" variant="primary" />
        <Avatar initials="XL" size="xl" variant="primary" />
      </div>
    </div>
  `,
});

export const AllVariants = () => ({
  components: { Avatar },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Variants</h2>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Avatar initials="NT" variant="neutral" />
        <Avatar initials="PR" variant="primary" />
        <Avatar initials="SC" variant="success" />
        <Avatar initials="WR" variant="warning" />
        <Avatar initials="ER" variant="error" />
        <Avatar initials="IF" variant="info" />
      </div>
    </div>
  `,
});

export const Shapes = () => ({
  components: { Avatar },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Shapes</h2>
      <div style="display: flex; gap: 16px;">
        <Avatar initials="CI" shape="circle" variant="primary" />
        <Avatar initials="SQ" shape="square" variant="primary" />
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
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px (xs)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-700</code></td><td style="text-align: right;">40px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-900</code></td><td style="text-align: right;">56px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-1100</code></td><td style="text-align: right;">72px (xl)</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-200</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-200</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-light</code></td></tr>
          </table>
        </div>
      </div>
    </div>
  `,
});
