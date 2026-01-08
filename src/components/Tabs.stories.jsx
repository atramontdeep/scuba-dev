import { ref } from 'vue';
import Tabs from './Tabs/Tabs.vue';

const SAMPLE_TABS = [
  { value: 'tab1', label: 'Tab 1', icon: 'ph-house', content: 'Conteúdo da Tab 1' },
  { value: 'tab2', label: 'Tab 2', icon: 'ph-user', content: 'Conteúdo da Tab 2' },
  { value: 'tab3', label: 'Tab 3', icon: 'ph-gear', content: 'Conteúdo da Tab 3' },
];

const TABS_WITH_BADGES = [
  { value: 'inbox', label: 'Inbox', icon: 'ph-inbox', badge: '12', content: 'Mensagens na caixa de entrada' },
  { value: 'drafts', label: 'Rascunhos', icon: 'ph-note', badge: '3', content: 'Seus rascunhos salvos' },
  { value: 'sent', label: 'Enviados', icon: 'ph-paper-plane-tilt', content: 'Mensagens enviadas' },
  { value: 'trash', label: 'Lixeira', icon: 'ph-trash', content: 'Itens na lixeira' },
];

const MANY_TABS = [
  { value: '1', label: 'Dashboard', icon: 'ph-house', content: 'Dashboard content' },
  { value: '2', label: 'Analytics', icon: 'ph-chart-line', content: 'Analytics content' },
  { value: '3', label: 'PhUsers', icon: 'ph-users', content: 'PhUsers content' },
  { value: '4', label: 'Settings', icon: 'ph-gear', content: 'Settings content' },
  { value: '5', label: 'Reports', icon: 'ph-file-text', content: 'Reports content' },
  { value: '6', label: 'Messages', icon: 'ph-envelope', content: 'Messages content' },
  { value: '7', label: 'PhCalendar', icon: 'ph-calendar', content: 'PhCalendar content' },
  { value: '8', label: 'Tasks', icon: 'ph-check-square', content: 'Tasks content' },
];

export default {
  title: 'Scuba/Tabs',
  component: Tabs,
  tags: ['autodocs'],
  argTypes: {
    tabs: {
      control: 'object',
      description: 'Array de tabs'
    },
    modelValue: {
      control: 'text',
      description: 'Tab ativa (v-model)'
    },
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientação das tabs'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Tabs ocupam largura total'
    },
    size: {
      control: 'select',
      options: ['sm'],
      description: 'Tamanho das tabs'
    },
    showIcons: {
      control: 'boolean',
      description: 'Exibir ícones nas tabs'
    },
  },
};

// Template base with v-model
const Template = (args) => ({
  components: { Tabs },
  setup() {
    const activeTab = ref(args.modelValue || args.tabs[0]?.value);
    return { args, activeTab };
  },
  template: '<Tabs v-bind="args" v-model="activeTab" />',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  tabs: SAMPLE_TABS,
  modelValue: 'tab1',
  orientation: 'horizontal',
  size: 'sm',
  showIcons: false,
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Use os controles abaixo para testar diferentes configurações das tabs.'
    }
  }
};

// Basic Example
export const Basic = Template.bind({});
Basic.args = {
  tabs: SAMPLE_TABS,
  modelValue: 'tab1',
  orientation: 'horizontal',
  size: 'sm',
  showIcons: false,
};

// Com ícones
export const WithIcons = Template.bind({});
WithIcons.args = {
  tabs: [
    { value: 'home', label: 'Home', icon: 'ph-house', content: 'Home content' },
    { value: 'profile', label: 'Perfil', icon: 'ph-user', content: 'Profile content' },
    { value: 'settings', label: 'Configurações', icon: 'ph-gear', content: 'Settings content' },
    { value: 'notifications', label: 'Notificações', icon: 'ph-bell', content: 'Notifications content' },
  ],
  modelValue: 'home',
  showIcons: true,
};

// Com badges
export const WithBadges = Template.bind({});
WithBadges.args = {
  tabs: TABS_WITH_BADGES,
  modelValue: 'inbox',
  showIcons: true,
};

// Tab desabilitada
export const WithDisabled = Template.bind({});
WithDisabled.args = {
  tabs: [
    { value: 'tab1', label: 'Tab 1', content: 'Conteúdo da Tab 1' },
    { value: 'tab2', label: 'Tab 2 (Disabled)', content: 'Conteúdo da Tab 2', disabled: true },
    { value: 'tab3', label: 'Tab 3', content: 'Conteúdo da Tab 3' },
  ],
  modelValue: 'tab1',
};

// Largura total
export const FullWidth = Template.bind({});
FullWidth.args = {
  tabs: SAMPLE_TABS,
  modelValue: 'tab1',
  fullWidth: true,
};

// Muitas tabs (scroll)
export const ManyTabs = Template.bind({});
ManyTabs.args = {
  tabs: MANY_TABS,
  modelValue: '1',
};

// Orientação vertical
export const Vertical = Template.bind({});
Vertical.args = {
  tabs: SAMPLE_TABS,
  modelValue: 'tab1',
  orientation: 'vertical',
};

// Com slot customizado
export const CustomContent = () => ({
  components: { Tabs },
  setup() {
    const activeTab = ref('overview');
    const tabs = [
      { value: 'overview', label: 'Overview', icon: 'ph-house' },
      { value: 'details', label: 'Details', icon: 'ph-info' },
      { value: 'settings', label: 'Settings', icon: 'ph-gear' },
    ];
    return { tabs, activeTab };
  },
  template: `
    <Tabs :tabs="tabs" v-model="activeTab">
      <template #overview>
        <div style="padding: 24px;">
          <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600;">Overview</h3>
          <p style="color: #6b7280; line-height: 1.6;">
            Este é um exemplo de conteúdo customizado usando slots.
            Você pode adicionar qualquer conteúdo HTML aqui.
          </p>
        </div>
      </template>

      <template #details>
        <div style="padding: 24px;">
          <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600;">Details</h3>
          <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </template>

      <template #settings>
        <div style="padding: 24px;">
          <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600;">Settings</h3>
          <p style="color: #6b7280; line-height: 1.6;">
            Configure suas preferências aqui.
          </p>
        </div>
      </template>
    </Tabs>
  `,
});

// Orientações
export const AllOrientations = () => ({
  components: { Tabs },
  setup() {
    const activeTab1 = ref('tab1');
    const activeTab2 = ref('tab1');
    const tabs = [
      { value: 'tab1', label: 'Tab 1', icon: 'ph-house', content: 'Conteúdo da Tab 1' },
      { value: 'tab2', label: 'Tab 2', icon: 'ph-user', content: 'Conteúdo da Tab 2' },
      { value: 'tab3', label: 'Tab 3', icon: 'ph-gear', content: 'Conteúdo da Tab 3' },
    ];
    return { tabs, activeTab1, activeTab2 };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tabs Orientations</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <!-- Horizontal -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Horizontal (Default)</h3>
          <Tabs :tabs="tabs" v-model="activeTab1" orientation="horizontal" />
        </div>

        <!-- Vertical -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Vertical</h3>
          <div style="max-width: 600px;">
            <Tabs :tabs="tabs" v-model="activeTab2" orientation="vertical" />
          </div>
        </div>
      </div>
    </div>
  `,
});

// Showcase completo
export const Showcase = () => ({
  components: { Tabs },
  setup() {
    const active1 = ref('tab1');
    const active2 = ref('home');
    const active3 = ref('inbox');
    const active4 = ref('tab1');

    const basicTabs = [
      { value: 'tab1', label: 'Tab 1', content: 'Conteúdo 1' },
      { value: 'tab2', label: 'Tab 2', content: 'Conteúdo 2' },
      { value: 'tab3', label: 'Tab 3', content: 'Conteúdo 3' },
    ];

    const iconTabs = [
      { value: 'home', label: 'Home', icon: 'ph-house', content: 'Home content' },
      { value: 'profile', label: 'Perfil', icon: 'ph-user', content: 'Profile content' },
      { value: 'settings', label: 'Config', icon: 'ph-gear', content: 'Settings content' },
    ];

    const badgeTabs = [
      { value: 'inbox', label: 'Inbox', badge: '12', content: 'Inbox content' },
      { value: 'drafts', label: 'Drafts', badge: '3', content: 'Drafts content' },
      { value: 'sent', label: 'Sent', content: 'Sent content' },
    ];

    return { basicTabs, iconTabs, badgeTabs, active1, active2, active3, active4 };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Tabs Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px;">
        <!-- Basic -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Basic</h3>
          <Tabs :tabs="basicTabs" v-model="active1" size="sm" />
        </div>

        <!-- With Icons -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">With Icons</h3>
          <Tabs :tabs="iconTabs" v-model="active2" size="sm" showIcons />
        </div>

        <!-- With Badges -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">With Badges</h3>
          <Tabs :tabs="badgeTabs" v-model="active3" size="sm" />
        </div>

        <!-- Full Width -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Full Width</h3>
          <Tabs :tabs="basicTabs" v-model="active4" size="sm" fullWidth />
        </div>
      </div>
    </div>
  `,
});

// Design Tokens
export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Surfaces & Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">20px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography & Others</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-bold</code></td><td style="text-align: right;">700</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa <code>role="tablist"</code> e <code>role="tab"</code> para semântica ARIA</li>
          <li>Navegação por teclado: setas, Home, End</li>
          <li>Atributos <code>aria-selected</code> e <code>aria-controls</code> gerenciados</li>
          <li>Foco visível com outline</li>
          <li>Tabs desabilitadas com <code>tabindex="-1"</code></li>
        </ul>
      </div>
    </div>
  `,
});
