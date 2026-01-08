import Select from './Select/Select.vue';
import { ref } from 'vue';

// Lista de ícones Phosphor mais comuns
const PHOSPHOR_ICONS = {
  'Nenhum': '',
  '👤 Usuário': 'ph-user',
  '🔒 Cadeado': 'ph-lock',
  '✉️ Email': 'ph-envelope',
  '📞 Telefone': 'ph-phone',
  '📅 Calendário': 'ph-calendar',
  '🕐 Relógio': 'ph-clock',
  '🔍 Busca': 'ph-magnifying-glass',
  '🏠 Casa': 'ph-house',
  '📍 Pin': 'ph-map-pin',
  '🛒 Carrinho': 'ph-shopping-cart',
  '💳 Cartão': 'ph-credit-card',
  '⚙️ Engrenagem': 'ph-gear',
  '🔔 Sino': 'ph-bell',
  '⭐ Estrela': 'ph-star',
};

// Opções de exemplo
const SAMPLE_OPTIONS = [
  { value: '1', label: 'Opção 1', icon: 'ph-user' },
  { value: '2', label: 'Opção 2', icon: 'ph-house' },
  { value: '3', label: 'Opção 3', icon: 'ph-gear' },
  { value: '4', label: 'Opção 4 Desabilitada', icon: 'ph-lock', disabled: true },
  { value: '5', label: 'Opção 5', icon: 'ph-star' },
];

const COUNTRIES = [
  { value: 'br', label: 'Brasil', icon: 'ph-flag' },
  { value: 'us', label: 'Estados Unidos', icon: 'ph-flag' },
  { value: 'uk', label: 'Reino Unido', icon: 'ph-flag' },
  { value: 'fr', label: 'França', icon: 'ph-flag' },
  { value: 'de', label: 'Alemanha', icon: 'ph-flag' },
  { value: 'es', label: 'Espanha', icon: 'ph-flag' },
  { value: 'it', label: 'Itália', icon: 'ph-flag' },
  { value: 'jp', label: 'Japão', icon: 'ph-flag' },
  { value: 'cn', label: 'China', icon: 'ph-flag' },
  { value: 'in', label: 'Índia', icon: 'ph-flag' },
];

export default {
  title: 'Scuba/Select',
  component: Select,
  tags: ['autodocs'],
  argTypes: {
    options: {
      control: 'object',
      description: 'Array de opções para o select'
    },
    modelValue: {
      control: 'text',
      description: 'Valor selecionado (v-model)'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do select'
    },
    label: {
      control: 'text',
      description: 'Label do campo'
    },
    placeholder: {
      control: 'text',
      description: 'Texto placeholder'
    },
    required: {
      control: 'boolean',
      description: 'Campo obrigatório'
    },
    hint: {
      control: 'text',
      description: 'Texto de ajuda'
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    },
    iconLeft: {
      control: 'select',
      options: PHOSPHOR_ICONS,
      description: 'Ícone esquerda'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Largura total'
    },
    emptyMessage: {
      control: 'text',
      description: 'Mensagem quando sem opções'
    },
  },
};

// Template base
const Template = (args) => ({
  components: { Select },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return { args, modelValue };
  },
  template: '<Select v-bind="args" v-model="modelValue" />',
});

// Playground - Story interativa principal
export const Playground = Template.bind({});
Playground.args = {
  options: SAMPLE_OPTIONS,
  label: 'Selecione uma opção',
  placeholder: 'Escolha...',
  size: 'md',
  hint: 'Escolha a melhor opção para você',
  iconLeft: 'ph-gear',
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Use os controles abaixo para testar diferentes combinações de propriedades.'
    }
  }
};

// Tamanhos
export const Small = Template.bind({});
Small.args = {
  options: SAMPLE_OPTIONS,
  label: 'Select Small',
  placeholder: 'Selecione...',
  size: 'sm',
  hint: 'Tamanho pequeno',
};

export const Medium = Template.bind({});
Medium.args = {
  options: SAMPLE_OPTIONS,
  label: 'Select Medium',
  placeholder: 'Selecione...',
  size: 'md',
  hint: 'Tamanho médio (padrão)',
};

export const Large = Template.bind({});
Large.args = {
  options: SAMPLE_OPTIONS,
  label: 'Select Large',
  placeholder: 'Selecione...',
  size: 'lg',
  hint: 'Tamanho grande',
};

// Com ícone
export const WithIcon = Template.bind({});
WithIcon.args = {
  options: SAMPLE_OPTIONS,
  label: 'Com ícone',
  placeholder: 'Selecione...',
  size: 'md',
  iconLeft: 'ph-gear',
};

// Estados
export const Required = Template.bind({});
Required.args = {
  options: SAMPLE_OPTIONS,
  label: 'Campo obrigatório',
  placeholder: 'Selecione...',
  size: 'md',
  required: true,
  hint: 'Este campo é obrigatório',
};

export const WithError = Template.bind({});
WithError.args = {
  options: SAMPLE_OPTIONS,
  label: 'Com erro',
  placeholder: 'Selecione...',
  size: 'md',
  error: 'Por favor, selecione uma opção válida',
};

export const Disabled = Template.bind({});
Disabled.args = {
  options: SAMPLE_OPTIONS,
  label: 'Desabilitado',
  placeholder: 'Selecione...',
  size: 'md',
  disabled: true,
  hint: 'Este campo está desabilitado',
};

export const Empty = Template.bind({});
Empty.args = {
  options: [],
  label: 'Sem opções',
  placeholder: 'Selecione...',
  size: 'md',
  emptyMessage: 'Nenhuma opção disponível',
};

// Largura total
export const FullWidth = Template.bind({});
FullWidth.args = {
  options: SAMPLE_OPTIONS,
  label: 'Largura total',
  placeholder: 'Selecione...',
  size: 'md',
  fullWidth: true,
};

// Com muitas opções
export const ManyOptions = Template.bind({});
ManyOptions.args = {
  options: COUNTRIES,
  label: 'Selecione um país',
  placeholder: 'Escolha o país...',
  size: 'md',
  iconLeft: 'ph-map-pin',
};

// Opções com ícones
export const WithOptionIcons = Template.bind({});
WithOptionIcons.args = {
  options: [
    { value: 'home', label: 'Página Inicial', icon: 'ph-house' },
    { value: 'settings', label: 'Configurações', icon: 'ph-gear' },
    { value: 'profile', label: 'Perfil', icon: 'ph-user' },
    { value: 'notifications', label: 'Notificações', icon: 'ph-bell' },
    { value: 'favorites', label: 'Favoritos', icon: 'ph-heart' },
  ],
  label: 'Menu de navegação',
  placeholder: 'Ir para...',
  size: 'md',
};

// Matriz de tamanhos e estados
export const AllSizesAndStates = () => ({
  components: { Select },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Select Sizes & States</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
        <!-- Small Size -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Small</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Select Small"
            placeholder="Selecione..."
            size="sm"
          />
        </div>

        <!-- Medium Size -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Medium (Default)</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Select Medium"
            placeholder="Selecione..."
            size="md"
          />
        </div>

        <!-- Large Size -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Large</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Select Large"
            placeholder="Selecione..."
            size="lg"
          />
        </div>

        <!-- With Icon -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Com Ícone</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1', icon: 'ph-user' },
              { value: '2', label: 'Opção 2', icon: 'ph-house' },
              { value: '3', label: 'Opção 3', icon: 'ph-gear' }
            ]"
            label="Com ícone"
            placeholder="Selecione..."
            iconLeft="ph-gear"
            size="md"
          />
        </div>

        <!-- Required -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Obrigatório</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Campo obrigatório"
            placeholder="Selecione..."
            required
            hint="Este campo é obrigatório"
            size="md"
          />
        </div>

        <!-- With Error -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Com Erro</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Com erro"
            placeholder="Selecione..."
            error="Por favor, selecione uma opção"
            size="md"
          />
        </div>

        <!-- Disabled -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Desabilitado</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Desabilitado"
            placeholder="Selecione..."
            disabled
            size="md"
          />
        </div>

        <!-- Empty -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Sem Opções</h3>
          <Select
            :options="[]"
            label="Sem opções"
            placeholder="Selecione..."
            emptyMessage="Nenhuma opção disponível"
            size="md"
          />
        </div>
      </div>
    </div>
  `,
});

// Design Tokens usados
export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-error</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-error</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded</code></td><td style="text-align: right;">8px</td></tr>
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
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px</td></tr>
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
            <tr><td style="padding: 8px 0;"><code>--shadow-lg</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-fast</code></td><td style="text-align: right;">150ms</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Z-Index</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          O dropdown usa <code style="background: white; padding: 4px 8px; border-radius: 4px;">--z-index-dropdown: 1000</code> para garantir que fique sobre outros elementos.
        </p>
      </div>
    </div>
  `,
});
