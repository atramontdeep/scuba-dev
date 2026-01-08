import Skeleton from './Skeleton/Skeleton.vue';

export default {
  title: 'Scuba/Skeleton',
  component: Skeleton,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['text', 'circular', 'rectangular', 'rounded'],
      description: 'Variante do skeleton'
    },
    width: {
      control: 'text',
      description: 'Largura (px, %, rem, etc)'
    },
    height: {
      control: 'text',
      description: 'Altura (px, %, rem, etc)'
    },
    noAnimation: {
      control: 'boolean',
      description: 'Desabilitar animação'
    }
  },
};

const Template = (args) => ({
  components: { Skeleton },
  setup() {
    return { args };
  },
  template: '<Skeleton v-bind="args" />',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  variant: 'text',
  width: '100%',
  height: null,
  noAnimation: false
};

// Text
export const Text = () => ({
  components: { Skeleton },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 600px;">
      <Skeleton width="100%" />
      <Skeleton width="80%" style="margin-top: 8px;" />
      <Skeleton width="90%" style="margin-top: 8px;" />
      <Skeleton width="60%" style="margin-top: 8px;" />
    </div>
  `,
});

// Circular
export const Circular = () => ({
  components: { Skeleton },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; display: flex; gap: 16px; align-items: center;">
      <Skeleton variant="circular" width="32px" height="32px" />
      <Skeleton variant="circular" width="40px" height="40px" />
      <Skeleton variant="circular" width="48px" height="48px" />
      <Skeleton variant="circular" width="64px" height="64px" />
    </div>
  `,
});

// Rectangular & Rounded
export const Shapes = () => ({
  components: { Skeleton },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3>Rectangular</h3>
      <Skeleton variant="rectangular" width="100%" height="200px" />

      <h3 style="margin-top: 32px;">Rounded</h3>
      <Skeleton variant="rounded" width="100%" height="200px" />
    </div>
  `,
});

// Card loading
export const CardLoading = () => ({
  components: { Skeleton },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="max-width: 400px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
        <Skeleton variant="rounded" width="100%" height="200px" />
        <div style="margin-top: 16px;">
          <Skeleton width="60%" />
          <Skeleton width="100%" style="margin-top: 8px;" />
          <Skeleton width="80%" style="margin-top: 8px;" />
        </div>
        <div style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div style="flex: 1;">
            <Skeleton width="40%" />
            <Skeleton width="60%" style="margin-top: 4px;" />
          </div>
        </div>
      </div>
    </div>
  `,
});

// List loading
export const ListLoading = () => ({
  components: { Skeleton },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 600px;">
      <div v-for="i in 5" :key="i" style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
        <Skeleton variant="circular" width="48px" height="48px" />
        <div style="flex: 1;">
          <Skeleton width="40%" />
          <Skeleton width="80%" style="margin-top: 4px;" />
        </div>
        <Skeleton variant="rounded" width="80px" height="32px" />
      </div>
    </div>
  `,
});

// Table loading
export const TableLoading = () => ({
  components: { Skeleton },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">
              <Skeleton width="60%" />
            </th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">
              <Skeleton width="70%" />
            </th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">
              <Skeleton width="50%" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
              <Skeleton width="80%" />
            </td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
              <Skeleton width="60%" />
            </td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
              <Skeleton width="40%" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
});

// No animation
export const NoAnimation = () => ({
  components: { Skeleton },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 600px;">
      <h3>Com animação (padrão)</h3>
      <Skeleton width="100%" />
      <Skeleton width="80%" style="margin-top: 8px;" />

      <h3 style="margin-top: 32px;">Sem animação</h3>
      <Skeleton width="100%" no-animation />
      <Skeleton width="80%" style="margin-top: 8px;" no-animation />
    </div>
  `,
});

// Design Tokens
export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Background</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border Radius</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">Text variant</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-md</code></td><td style="text-align: right;">Rounded variant</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Text:</strong> Loading de texto, parágrafos, títulos</li>
          <li><strong>Circular:</strong> Avatares, ícones circulares</li>
          <li><strong>Rectangular:</strong> Imagens, cards sem border-radius</li>
          <li><strong>Rounded:</strong> Imagens, cards, thumbnails</li>
          <li>Use skeleton loaders para melhorar a percepção de performance</li>
          <li>Combine diferentes variantes para criar layouts complexos</li>
          <li>Mantenha as proporções próximas ao conteúdo real</li>
          <li>Use no-animation em contextos onde a animação pode ser distrativa</li>
        </ul>
      </div>
    </div>
  `,
});
