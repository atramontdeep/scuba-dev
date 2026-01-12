import Avatar from './Avatar/Avatar.vue';

export default {
  title: 'Scuba/Avatar',
  component: Avatar,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['xs', 'sm', 'md', 'lg'],
      description: 'Tamanho do avatar'
    },
    variant: {
      control: 'select',
      options: ['default', 'hover', 'disabled'],
      description: 'Cor de fundo quando não tem imagem'
    },
    src: {
      control: 'text',
      description: 'URL da imagem'
    },
    initials: {
      control: 'text',
      description: 'Iniciais do usuário'
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
  variant: 'default',
};

export const WithImage = Template.bind({});
WithImage.args = {
  src: 'https://i.pravatar.cc/150?img=1',
  size: 'md',
};

export const WithInitials = Template.bind({});
WithInitials.args = {
  initials: 'AB',
  size: 'md',
  variant: 'default',
};

export const AllSizes = () => ({
  components: { Avatar },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Sizes</h2>
      <div style="display: flex; align-items: center; gap: 16px;">
        <Avatar initials="XS" size="xs" variant="default" />
        <Avatar initials="SM" size="sm" variant="default" />
        <Avatar initials="MD" size="md" variant="default" />
        <Avatar initials="LG" size="lg" variant="default" />
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
        <Avatar initials="DF" variant="default" />
        <Avatar initials="HV" variant="hover" />
        <Avatar initials="DS" variant="disabled" />
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
            <tr><td style="padding: 8px 0;"><strong>xs:</strong></td><td style="text-align: right;">24x24</td></tr>
            <tr><td style="padding: 8px 0;"><strong>sm:</strong></td><td style="text-align: right;">32x32</td></tr>
            <tr><td style="padding: 8px 0;"><strong>md:</strong></td><td style="text-align: right;">48x48</td></tr>
            <tr><td style="padding: 8px 0;"><strong>lg:</strong></td><td style="text-align: right;">64x64</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Variants</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>default:</strong></td><td style="text-align: right;">color-icon-secondary</td></tr>
            <tr><td style="padding: 8px 0;"><strong>hover:</strong></td><td style="text-align: right;">color-surface-inverted</td></tr>
            <tr><td style="padding: 8px 0;"><strong>disabled:</strong></td><td style="text-align: right;">neutral-200 / icon-action</td></tr>
          </table>
        </div>
      </div>
    </div>
  `,
});
