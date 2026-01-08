import Chip from './Chip/Chip.vue';
import { PhStar, PhCheck, PhWarning, PhX, PhInfo, PhTag, PhUser, PhCircle } from '@phosphor-icons/vue';

export default {
  title: 'Scuba/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto do chip'
    },
    variant: {
      control: 'select',
      options: ['neutral', 'primary', 'success', 'warning', 'danger', 'info'],
      description: 'Variante de cor'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do chip'
    },
    iconPosition: {
      control: 'select',
      options: ['left', 'right'],
      description: 'Posição do ícone'
    },
    iconWeight: {
      control: 'select',
      options: ['thin', 'light', 'regular', 'bold', 'fill'],
      description: 'Peso do ícone'
    },
    removable: {
      control: 'boolean',
      description: 'Exibe botão de remover'
    },
    clickable: {
      control: 'boolean',
      description: 'Chip clicável'
    },
    outlined: {
      control: 'boolean',
      description: 'Variante outlined (borda)'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { Chip, PhTag },
  setup() {
    const handleClick = () => {
      console.log('Chip clicked!');
    };
    const handleRemove = () => {
      console.log('Chip removed!');
    };
    return { args, PhTag, handleClick, handleRemove };
  },
  template: '<Chip v-bind="args" :icon="PhTag" @click="handleClick" @remove="handleRemove" />',
});
Playground.args = {
  label: 'Chip Label',
  variant: 'neutral',
  size: 'md',
  iconPosition: 'left',
  iconWeight: 'regular',
  removable: false,
  clickable: false,
  outlined: false
};

// Variants
export const Variants = () => ({
  components: { Chip },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Variantes - Filled</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 48px;">
        <Chip label="Neutral" variant="neutral" />
        <Chip label="Primary" variant="primary" />
        <Chip label="Success" variant="success" />
        <Chip label="PhWarning" variant="warning" />
        <Chip label="Danger" variant="danger" />
        <Chip label="PhInfo" variant="info" />
      </div>

      <h2 style="margin-bottom: 24px;">Variantes - Outlined</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <Chip label="Neutral" variant="neutral" outlined />
        <Chip label="Primary" variant="primary" outlined />
        <Chip label="Success" variant="success" outlined />
        <Chip label="PhWarning" variant="warning" outlined />
        <Chip label="Danger" variant="danger" outlined />
        <Chip label="PhInfo" variant="info" outlined />
      </div>
    </div>
  `,
});

// Sizes
export const Sizes = () => ({
  components: { Chip },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Tamanhos</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Small (24px)</div>
          <Chip label="Small Chip" variant="primary" size="sm" />
        </div>

        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Medium (32px)</div>
          <Chip label="Medium Chip" variant="primary" size="md" />
        </div>

        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Large (40px)</div>
          <Chip label="Large Chip" variant="primary" size="lg" />
        </div>
      </div>
    </div>
  `,
});

// With Icons
export const WithIcons = () => ({
  components: { Chip, PhStar, PhCheck, PhWarning, PhX, PhInfo },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Com Ícones</h2>

      <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Ícone à Esquerda</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px;">
        <Chip label="Favorito" variant="primary" :icon="PhStar" icon-position="left" />
        <Chip label="Sucesso" variant="success" :icon="PhCheck" icon-position="left" />
        <Chip label="Aviso" variant="warning" :icon="PhWarning" icon-position="left" />
        <Chip label="Erro" variant="danger" :icon="PhX" icon-position="left" />
        <Chip label="PhInfo" variant="info" :icon="PhInfo" icon-position="left" />
      </div>

      <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Ícone à Direita</h3>
      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <Chip label="Favorito" variant="primary" :icon="PhStar" icon-position="right" />
        <Chip label="Sucesso" variant="success" :icon="PhCheck" icon-position="right" />
        <Chip label="Aviso" variant="warning" :icon="PhWarning" icon-position="right" />
      </div>
    </div>
  `,
});

// With Avatar
export const WithAvatar = () => ({
  components: { Chip },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Com Avatar</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <Chip
          label="Ana Silva"
          variant="neutral"
          avatar="https://i.pravatar.cc/64?img=5"
          avatar-alt="Ana Silva"
        />
        <Chip
          label="Carlos Santos"
          variant="primary"
          avatar="https://i.pravatar.cc/64?img=11"
          avatar-alt="Carlos Santos"
        />
        <Chip
          label="Maria Oliveira"
          variant="success"
          avatar="https://i.pravatar.cc/64?img=8"
          avatar-alt="Maria Oliveira"
          size="lg"
        />
      </div>
    </div>
  `,
});

// Removable
export const Removable = () => ({
  components: { Chip, PhTag },
  setup() {
    const handleRemove = (label) => {
      console.log(`Removed: ${label}`);
      alert(`Chip removido: ${label}`);
    };
    return { PhTag, handleRemove };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Chips Removíveis</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <Chip
          label="JavaScript"
          variant="primary"
          :icon="PhTag"
          removable
          @remove="handleRemove('JavaScript')"
        />
        <Chip
          label="TypeScript"
          variant="info"
          :icon="PhTag"
          removable
          @remove="handleRemove('TypeScript')"
        />
        <Chip
          label="Vue.js"
          variant="success"
          :icon="PhTag"
          removable
          @remove="handleRemove('Vue.js')"
        />
        <Chip
          label="React"
          variant="neutral"
          :icon="PhTag"
          removable
          @remove="handleRemove('React')"
        />
      </div>
    </div>
  `,
});

// Clickable
export const Clickable = () => ({
  components: { Chip, PhTag },
  setup() {
    const handleClick = (label) => {
      console.log(`Clicked: ${label}`);
      alert(`Chip clicado: ${label}`);
    };
    return { PhTag, handleClick };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Chips Clicáveis</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <Chip
          label="Frontend"
          variant="primary"
          :icon="PhTag"
          clickable
          @click="handleClick('Frontend')"
        />
        <Chip
          label="Backend"
          variant="info"
          :icon="PhTag"
          clickable
          @click="handleClick('Backend')"
        />
        <Chip
          label="DevOps"
          variant="success"
          :icon="PhTag"
          clickable
          @click="handleClick('DevOps')"
        />
        <Chip
          label="Design"
          variant="warning"
          :icon="PhTag"
          clickable
          @click="handleClick('Design')"
        />
      </div>
    </div>
  `,
});

// Use Cases
export const UseCases = () => ({
  components: { Chip, PhTag, PhUser, PhCheck, PhWarning, PhX },
  setup() {
    const handleRemoveTag = (tag) => {
      console.log(`PhTag removed: ${tag}`);
    };
    return { PhTag, PhUser, PhCheck, PhWarning, PhX, handleRemoveTag };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Casos de Uso</h2>

      <!-- Tags/Keywords -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Tags / Keywords</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <Chip label="Vue 3" variant="primary" :icon="PhTag" size="sm" removable @remove="handleRemoveTag('Vue 3')" />
          <Chip label="Composition API" variant="primary" :icon="PhTag" size="sm" removable @remove="handleRemoveTag('Composition API')" />
          <Chip label="TypeScript" variant="info" :icon="PhTag" size="sm" removable @remove="handleRemoveTag('TypeScript')" />
          <Chip label="Vite" variant="neutral" :icon="PhTag" size="sm" removable @remove="handleRemoveTag('Vite')" />
          <Chip label="Storybook" variant="neutral" :icon="PhTag" size="sm" removable @remove="handleRemoveTag('Storybook')" />
        </div>
      </div>

      <!-- Status Indicators -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Indicadores de Status</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Chip label="Ativo" variant="success" :icon="PhCheck" />
          <Chip label="Pendente" variant="warning" :icon="PhWarning" />
          <Chip label="Inativo" variant="neutral" />
          <Chip label="Erro" variant="danger" :icon="PhX" />
        </div>
      </div>

      <!-- PhUser Selection -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Seleção de Usuários</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 8px;">
          <Chip
            label="Ana Silva"
            variant="neutral"
            avatar="https://i.pravatar.cc/64?img=5"
            removable
          />
          <Chip
            label="Carlos Santos"
            variant="neutral"
            avatar="https://i.pravatar.cc/64?img=11"
            removable
          />
          <Chip
            label="Maria Oliveira"
            variant="neutral"
            avatar="https://i.pravatar.cc/64?img=8"
            removable
          />
        </div>
      </div>

      <!-- Filter Chips -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Filtros Ativos</h3>
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Filtros aplicados:</div>
          <div style="display: flex; flex-wrap: wrap; gap: 8px;">
            <Chip label="Categoria: Frontend" variant="primary" outlined size="sm" removable />
            <Chip label="Status: Ativo" variant="success" outlined size="sm" removable />
            <Chip label="Período: Últimos 30 dias" variant="neutral" outlined size="sm" removable />
          </div>
        </div>
      </div>

      <!-- Count Badges -->
      <div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Contadores</h3>
        <div style="display: flex; flex-wrap: wrap; gap: 12px;">
          <Chip label="5 pendentes" variant="warning" size="sm" />
          <Chip label="12 concluídos" variant="success" size="sm" />
          <Chip label="3 atrasados" variant="danger" size="sm" />
          <Chip label="28 total" variant="neutral" size="sm" />
        </div>
      </div>
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
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors - Neutral</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-tertiary</code></td><td style="text-align: right;">Hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Text</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Border (outlined)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors - Variants</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--color-primary-100/700</code></td><td style="text-align: right;">Primary</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-green-100/700</code></td><td style="text-align: right;">Success</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-yellow-100/800</code></td><td style="text-align: right;">PhWarning</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-red-100/700</code></td><td style="text-align: right;">Danger</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-blue-100/700</code></td><td style="text-align: right;">PhInfo</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px (vertical)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px (gap)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Tags:</strong> Categorização e keywords (removable)</li>
          <li><strong>Status:</strong> Indicadores de estado com cores semânticas</li>
          <li><strong>Filtros:</strong> Mostrar filtros ativos (outlined + removable)</li>
          <li><strong>Seleção:</strong> Usuários, itens selecionados (com avatar)</li>
          <li><strong>Contadores:</strong> Badges com informações numéricas</li>
          <li><strong>Navegação:</strong> Chips clicáveis como filtros ou categorias</li>
          <li>Use <code>outlined</code> para chips menos proeminentes</li>
          <li>Combine <code>clickable</code> e <code>removable</code> para máxima interatividade</li>
          <li>Prefira tamanho <code>sm</code> quando houver muitos chips</li>
          <li>Use ícones para melhorar a escaneabilidade visual</li>
        </ul>
      </div>
    </div>
  `,
});
