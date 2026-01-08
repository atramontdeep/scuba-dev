import Breadcrumb from './Breadcrumb/Breadcrumb.vue';

const BASIC_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Products', href: '/products' },
  { label: 'Category', href: '/products/category' },
  { label: 'Item', href: '/products/category/item' },
];

const ITEMS_WITH_ICONS = [
  { label: 'Home', href: '/', icon: 'ph-house' },
  { label: 'Documents', href: '/documents', icon: 'ph-folder' },
  { label: 'Projects', href: '/documents/projects', icon: 'ph-folder-open' },
  { label: 'Current Project', href: '/documents/projects/current', icon: 'ph-file' },
];

const MANY_ITEMS = [
  { label: 'Home', href: '/' },
  { label: 'Level 1', href: '/level1' },
  { label: 'Level 2', href: '/level1/level2' },
  { label: 'Level 3', href: '/level1/level2/level3' },
  { label: 'Level 4', href: '/level1/level2/level3/level4' },
  { label: 'Level 5', href: '/level1/level2/level3/level4/level5' },
  { label: 'Level 6', href: '/level1/level2/level3/level4/level5/level6' },
  { label: 'Current Page', href: '/level1/level2/level3/level4/level5/level6/current' },
];

export default {
  title: 'Scuba/Breadcrumb',
  component: Breadcrumb,
  tags: ['autodocs'],
  argTypes: {
    items: {
      control: 'object',
      description: 'Array de itens do breadcrumb'
    },
    separator: {
      control: 'text',
      description: 'Separador entre itens'
    },
    separatorIcon: {
      control: 'text',
      description: 'Ícone separador (Phosphor)'
    },
    maxItems: {
      control: 'number',
      description: 'Número máximo de itens visíveis'
    },
    size: {
      control: 'select',
      options: ['xs'],
      description: 'Tamanho do breadcrumb'
    },
    ariaLabel: {
      control: 'text',
      description: 'Label para acessibilidade'
    },
    onClick: { action: 'clicked' }
  },
};

// Template base
const Template = (args) => ({
  components: { Breadcrumb },
  setup() {
    const handleClick = (event) => {
      console.log('Breadcrumb clicked:', event);
    };
    return { args, handleClick };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  items: BASIC_ITEMS,
  separatorIcon: 'ph-caret-right',
  size: 'xs',
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Use os controles abaixo para testar diferentes configurações do breadcrumb.'
    }
  }
};

// Basic
export const Basic = Template.bind({});
Basic.args = {
  items: BASIC_ITEMS,
  separatorIcon: 'ph-caret-right',
};

// Com ícones
export const WithIcons = Template.bind({});
WithIcons.args = {
  items: ITEMS_WITH_ICONS,
  separatorIcon: 'ph-caret-right',
};

// Separadores diferentes
export const SlashSeparator = Template.bind({});
SlashSeparator.args = {
  items: BASIC_ITEMS,
  separator: '/',
  separatorIcon: '',
};

export const DashSeparator = Template.bind({});
DashSeparator.args = {
  items: BASIC_ITEMS,
  separator: '-',
  separatorIcon: '',
};

export const ChevronSeparator = Template.bind({});
ChevronSeparator.args = {
  items: BASIC_ITEMS,
  separatorIcon: 'ph-caret-right',
};

export const ArrowSeparator = Template.bind({});
ArrowSeparator.args = {
  items: BASIC_ITEMS,
  separatorIcon: 'ph-arrow-right',
};

// Max items (collapsed)
export const MaxItems3 = Template.bind({});
MaxItems3.args = {
  items: MANY_ITEMS,
  maxItems: 3,
  separatorIcon: 'ph-caret-right',
};

export const MaxItems4 = Template.bind({});
MaxItems4.args = {
  items: MANY_ITEMS,
  maxItems: 4,
  separatorIcon: 'ph-caret-right',
};

export const MaxItems5 = Template.bind({});
MaxItems5.args = {
  items: MANY_ITEMS,
  maxItems: 5,
  separatorIcon: 'ph-caret-right',
};

// Com item desabilitado
export const WithDisabled = Template.bind({});
WithDisabled.args = {
  items: [
    { label: 'Home', href: '/' },
    { label: 'Products', href: '/products', disabled: true },
    { label: 'Category', href: '/products/category' },
    { label: 'Item', href: '/products/category/item' },
  ],
};

// Apenas textos (sem links)
export const TextOnly = Template.bind({});
TextOnly.args = {
  items: [
    { label: 'Home' },
    { label: 'Products' },
    { label: 'Category' },
    { label: 'Current Item' },
  ],
};

// Exemplo realista
export const RealisticExample = Template.bind({});
RealisticExample.args = {
  items: [
    { label: 'Dashboard', href: '/dashboard', icon: 'ph-house' },
    { label: 'E-commerce', href: '/dashboard/ecommerce', icon: 'ph-shopping-cart' },
    { label: 'Produtos', href: '/dashboard/ecommerce/products', icon: 'ph-package' },
    { label: 'Eletrônicos', href: '/dashboard/ecommerce/products/electronics', icon: 'ph-laptop' },
    { label: 'Smartphone XYZ', href: '/dashboard/ecommerce/products/electronics/xyz' },
  ],
  separatorIcon: 'ph-caret-right',
};

// Showcase de separadores
export const AllSeparators = () => ({
  components: { Breadcrumb },
  setup() {
    const items = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Category', href: '/products/category' },
      { label: 'Item' },
    ];
    return { items };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Breadcrumb Separators</h2>

      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Caret Right (Default)</h3>
          <Breadcrumb :items="items" separatorIcon="ph-caret-right" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Arrow Right</h3>
          <Breadcrumb :items="items" separatorIcon="ph-arrow-right" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Slash (/)</h3>
          <Breadcrumb :items="items" separator="/" :separatorIcon="null" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Greater Than (>)</h3>
          <Breadcrumb :items="items" separator=">" :separatorIcon="null" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Dash (-)</h3>
          <Breadcrumb :items="items" separator="-" :separatorIcon="null" />
        </div>
      </div>
    </div>
  `,
});


// Showcase de max items
export const MaxItemsShowcase = () => ({
  components: { Breadcrumb },
  setup() {
    const manyItems = [
      { label: 'Home', href: '/' },
      { label: 'Level 1', href: '/level1' },
      { label: 'Level 2', href: '/level1/level2' },
      { label: 'Level 3', href: '/level1/level2/level3' },
      { label: 'Level 4', href: '/level1/level2/level3/level4' },
      { label: 'Level 5', href: '/level1/level2/level3/level4/level5' },
      { label: 'Current Page' },
    ];
    return { manyItems };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Breadcrumb Max Items</h2>

      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">All Items (No Limit)</h3>
          <Breadcrumb :items="manyItems" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 3 Items</h3>
          <Breadcrumb :items="manyItems" :maxItems="3" />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Clique nos três pontos para expandir
          </p>
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 4 Items</h3>
          <Breadcrumb :items="manyItems" :maxItems="4" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 5 Items</h3>
          <Breadcrumb :items="manyItems" :maxItems="5" />
        </div>
      </div>
    </div>
  `,
});

// Showcase completo
export const Showcase = () => ({
  components: { Breadcrumb },
  setup() {
    const basicItems = [
      { label: 'Home', href: '/' },
      { label: 'Products', href: '/products' },
      { label: 'Category', href: '/products/category' },
      { label: 'Item' },
    ];

    const iconItems = [
      { label: 'Home', href: '/', icon: 'ph-house' },
      { label: 'Documents', href: '/docs', icon: 'ph-folder' },
      { label: 'Projects', href: '/docs/projects', icon: 'ph-folder-open' },
      { label: 'Current', icon: 'ph-file' },
    ];

    const manyItems = [
      { label: 'Home', href: '/' },
      { label: 'L1', href: '/l1' },
      { label: 'L2', href: '/l1/l2' },
      { label: 'L3', href: '/l1/l2/l3' },
      { label: 'L4', href: '/l1/l2/l3/l4' },
      { label: 'L5', href: '/l1/l2/l3/l4/l5' },
      { label: 'Current' },
    ];

    return { basicItems, iconItems, manyItems };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Breadcrumb Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); gap: 40px;">
        <!-- Basic -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Basic</h3>
          <Breadcrumb :items="basicItems" />
        </div>

        <!-- With Icons -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">With Icons</h3>
          <Breadcrumb :items="iconItems" />
        </div>

        <!-- Slash Separator -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Slash Separator</h3>
          <Breadcrumb :items="basicItems" separator="/" :separatorIcon="null" />
        </div>

        <!-- Arrow Separator -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Arrow Separator</h3>
          <Breadcrumb :items="basicItems" separatorIcon="ph-arrow-right" />
        </div>

        <!-- Max 3 Items -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 3 Items (Collapsed)</h3>
          <Breadcrumb :items="manyItems" :maxItems="3" />
        </div>

        <!-- Max 4 Items -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 4 Items (Collapsed)</h3>
          <Breadcrumb :items="manyItems" :maxItems="4" />
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
            <tr><td style="padding: 8px 0;"><code>--context-color-icon-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-regular</code></td><td style="text-align: right;">400</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa elemento <code>&lt;nav&gt;</code> com <code>aria-label</code></li>
          <li>Lista ordenada (<code>&lt;ol&gt;</code>) para hierarquia</li>
          <li>Atributo <code>aria-current="page"</code> no item atual</li>
          <li>Separadores com <code>aria-hidden="true"</code></li>
          <li>Focus visível em links e botão de expansão</li>
          <li>Suporte a navegação por teclado</li>
        </ul>
      </div>
    </div>
  `,
});
