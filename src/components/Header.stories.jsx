import Header from './Header/Header.vue';
import Breadcrumb from './Breadcrumb/Breadcrumb.vue';

export default {
  title: 'Scuba/Header',
  component: Header,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título da página'
    },
    description: {
      control: 'text',
      description: 'Descrição opcional da página'
    }
  },
};

const breadcrumbItems = [
  { label: 'Home', href: '#' },
  { label: 'Components', href: '#' },
  { label: 'Header' }
];

// Playground
export const Playground = (args) => ({
  components: { Header, Breadcrumb },
  setup() {
    return { args, breadcrumbItems };
  },
  template: `
    <Header v-bind="args">
      <template #breadcrumb>
        <Breadcrumb :items="breadcrumbItems" />
      </template>
    </Header>
  `,
});
Playground.args = {
  title: 'Page Title',
  description: 'This is an optional description that provides additional context about the page.'
};

// Basic Header
export const Basic = () => ({
  components: { Header, Breadcrumb },
  setup() {
    const items = [
      { label: 'Home', href: '#' },
      { label: 'Dashboard' }
    ];
    return { items };
  },
  template: `
    <Header title="Dashboard">
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  `,
});

// With Description
export const WithDescription = () => ({
  components: { Header, Breadcrumb },
  setup() {
    const items = [
      { label: 'Home', href: '#' },
      { label: 'Projects' }
    ];
    return { items };
  },
  template: `
    <Header
      title="Projects"
      description="View and manage all your projects in one place."
    >
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  `,
});

// With Custom Description Slot
export const WithCustomDescription = () => ({
  components: { Header, Breadcrumb },
  setup() {
    const items = [
      { label: 'Home', href: '#' },
      { label: 'Settings', href: '#' },
      { label: 'Team' }
    ];
    return { items };
  },
  template: `
    <Header title="Team Settings">
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
      <template #description>
        <p style="margin: 0;">Manage your team members, roles, and permissions</p>
      </template>
    </Header>
  `,
});

// Long Title and Description
export const LongContent = () => ({
  components: { Header, Breadcrumb },
  setup() {
    const items = [
      { label: 'Home', href: '#' },
      { label: 'Analytics', href: '#' },
      { label: 'Reports', href: '#' },
      { label: 'Annual Summary' }
    ];
    return { items };
  },
  template: `
    <Header
      title="Annual Performance Report and Analytics Dashboard"
      description="This comprehensive dashboard provides detailed insights into your organization's performance metrics, key performance indicators, and growth trends throughout the fiscal year."
    >
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  `,
});

// Design Tokens
export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Title:</strong> 32px, weight 600</td><td style="text-align: right;">H1</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Description:</strong> 16px, color #6B7280</td><td style="text-align: right;">Body</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Line height:</strong> 1.25 (title), 1.5 (description)</td><td style="text-align: right;">Spacing</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Breadcrumb → Title:</strong></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Title → Description:</strong></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Container padding:</strong></td><td style="text-align: right;">40px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Title:</strong></td><td style="text-align: right;">#111827</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Description:</strong></td><td style="text-align: right;">#6B7280</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Breadcrumb:</strong> Sempre inclua breadcrumb para navegação contextual</li>
          <li><strong>Title:</strong> Use para o título principal da página (obrigatório)</li>
          <li><strong>Description:</strong> Informações adicionais ou contexto da página (opcional)</li>
          <li>O componente Header agora segue o padrão de apresentação do design system</li>
          <li>Espaçamento fixo: 8px entre breadcrumb e título, 4px entre título e descrição</li>
          <li>Use breadcrumb para indicar a hierarquia de navegação</li>
          <li>Mantenha títulos concisos e descritivos</li>
          <li>Use a descrição para fornecer contexto adicional quando necessário</li>
        </ul>
      </div>
    </div>
  `,
});
