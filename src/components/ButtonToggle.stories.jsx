import { ref } from 'vue';
import ButtonToggle from './ButtonToggle/ButtonToggle.vue';
import {
  PhTextAlignLeft,
  PhTextAlignCenter,
  PhTextAlignRight,
  PhTextB,
  PhTextItalic,
  PhTextUnderline,
  PhListBullets,
  PhListNumbers,
  PhChecks,
  PhCalendarBlank,
  PhMapPin,
  PhUser
} from '@phosphor-icons/vue';

export default {
  title: 'Scuba/ButtonToggle',
  component: ButtonToggle,
  tags: ['autodocs'],
  argTypes: {
    multiple: {
      control: 'boolean',
      description: 'Permite seleção múltipla'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho dos botões'
    },
    variant: {
      control: 'select',
      options: ['default', 'outlined'],
      description: 'Variante visual'
    },
    iconWeight: {
      control: 'select',
      options: ['thin', 'light', 'regular', 'bold', 'fill'],
      description: 'Peso dos ícones'
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita todos os botões'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { ButtonToggle },
  setup() {
    const selected = ref('center');
    const alignOptions = [
      { value: 'left', label: 'Left', icon: PhTextAlignLeft },
      { value: 'center', label: 'Center', icon: PhTextAlignCenter },
      { value: 'right', label: 'Right', icon: PhTextAlignRight }
    ];
    return { selected, alignOptions, args, PhTextAlignLeft, PhTextAlignCenter, PhTextAlignRight };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <ButtonToggle v-bind="args" v-model="selected" :options="alignOptions" />
      <p style="margin-top: 16px; color: #6b7280;">Selected: {{ selected }}</p>
    </div>
  `,
});
Playground.args = {
  multiple: false,
  size: 'md',
  variant: 'default',
  iconWeight: 'regular',
  disabled: false
};

// Text Alignment
export const TextAlignment = () => ({
  components: { ButtonToggle },
  setup() {
    const alignment = ref('left');
    const options = [
      { value: 'left', icon: PhTextAlignLeft },
      { value: 'center', icon: PhTextAlignCenter },
      { value: 'right', icon: PhTextAlignRight }
    ];
    return { alignment, options, PhTextAlignLeft, PhTextAlignCenter, PhTextAlignRight };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Alinhamento de Texto</h2>
      <ButtonToggle v-model="alignment" :options="options" />
      <p style="margin-top: 16px; color: #6b7280;">Alinhamento: {{ alignment }}</p>
    </div>
  `,
});

// Text Formatting (Multiple Selection)
export const TextFormatting = () => ({
  components: { ButtonToggle },
  setup() {
    const formatting = ref(['bold']);
    const options = [
      { value: 'bold', icon: PhTextB },
      { value: 'italic', icon: PhTextItalic },
      { value: 'underline', icon: PhTextUnderline }
    ];
    return { formatting, options, PhTextB, PhTextItalic, PhTextUnderline };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Formatação de Texto (Múltipla Seleção)</h2>
      <ButtonToggle v-model="formatting" :options="options" multiple />
      <p style="margin-top: 16px; color: #6b7280;">Formatação: {{ formatting.join(', ') || 'nenhuma' }}</p>
    </div>
  `,
});

// With Labels
export const WithLabels = () => ({
  components: { ButtonToggle },
  setup() {
    const listType = ref('bullet');
    const options = [
      { value: 'bullet', label: 'Bullet', icon: PhListBullets },
      { value: 'numbered', label: 'Numbered', icon: PhListNumbers },
      { value: 'checklist', label: 'Checklist', icon: PhChecks }
    ];
    return { listType, options, PhListBullets, PhListNumbers, PhChecks };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Com Labels</h2>
      <ButtonToggle v-model="listType" :options="options" />
      <p style="margin-top: 16px; color: #6b7280;">Tipo de lista: {{ listType }}</p>
    </div>
  `,
});

// Label Only (No Icons)
export const LabelOnly = () => ({
  components: { ButtonToggle },
  setup() {
    const view = ref('day');
    const options = [
      { value: 'day', label: 'Day' },
      { value: 'week', label: 'Week' },
      { value: 'month', label: 'Month' },
      { value: 'year', label: 'Year' }
    ];
    return { view, options };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Apenas Labels</h2>
      <ButtonToggle v-model="view" :options="options" />
      <p style="margin-top: 16px; color: #6b7280;">Visualização: {{ view }}</p>
    </div>
  `,
});

// Icon Only
export const IconOnly = () => ({
  components: { ButtonToggle },
  setup() {
    const selected = ref(null);
    const options = [
      { value: 'calendar', icon: PhCalendarBlank },
      { value: 'location', icon: PhMapPin },
      { value: 'user', icon: PhUser }
    ];
    return { selected, options, PhCalendarBlank, PhMapPin, PhUser };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Apenas Ícones</h2>
      <ButtonToggle v-model="selected" :options="options" />
      <p style="margin-top: 16px; color: #6b7280;">Selecionado: {{ selected || 'nenhum' }}</p>
    </div>
  `,
});

// Sizes
export const Sizes = () => ({
  components: { ButtonToggle },
  setup() {
    const small = ref('left');
    const medium = ref('center');
    const large = ref('right');
    const options = [
      { value: 'left', icon: PhTextAlignLeft },
      { value: 'center', icon: PhTextAlignCenter },
      { value: 'right', icon: PhTextAlignRight }
    ];
    return { small, medium, large, options, PhTextAlignLeft, PhTextAlignCenter, PhTextAlignRight };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Tamanhos</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Small (32px)</h3>
        <ButtonToggle v-model="small" :options="options" size="sm" />
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Medium (40px)</h3>
        <ButtonToggle v-model="medium" :options="options" size="md" />
      </div>

      <div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Large (48px)</h3>
        <ButtonToggle v-model="large" :options="options" size="lg" />
      </div>
    </div>
  `,
});

// Variants
export const Variants = () => ({
  components: { ButtonToggle },
  setup() {
    const defaultSelected = ref('center');
    const outlinedSelected = ref('center');
    const options = [
      { value: 'left', icon: PhTextAlignLeft },
      { value: 'center', icon: PhTextAlignCenter },
      { value: 'right', icon: PhTextAlignRight }
    ];
    return { defaultSelected, outlinedSelected, options, PhTextAlignLeft, PhTextAlignCenter, PhTextAlignRight };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Variantes</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Default (Grouped)</h3>
        <ButtonToggle v-model="defaultSelected" :options="options" variant="default" />
      </div>

      <div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Outlined (Separated)</h3>
        <ButtonToggle v-model="outlinedSelected" :options="options" variant="outlined" />
      </div>
    </div>
  `,
});

// Disabled State
export const DisabledState = () => ({
  components: { ButtonToggle },
  setup() {
    const selected = ref('center');
    const options = [
      { value: 'left', label: 'Left', icon: PhTextAlignLeft },
      { value: 'center', label: 'Center', icon: PhTextAlignCenter },
      { value: 'right', label: 'Right', icon: PhTextAlignRight }
    ];
    return { selected, options, PhTextAlignLeft, PhTextAlignCenter, PhTextAlignRight };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Estado Desabilitado</h2>
      <ButtonToggle v-model="selected" :options="options" disabled />
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
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors - Default Variant</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-tertiary</code></td><td style="text-align: right;">Hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Border</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Text (default)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Text (hover)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors - Selected State</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--color-primary-500</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-white</code></td><td style="text-align: right;">Text & Icon</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px (gap, sm padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px (md padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">12px (lg padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">24px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Alinhamento de Texto:</strong> Use com ícones apenas para economizar espaço</li>
          <li><strong>Formatação:</strong> Combine com <code>multiple</code> para permitir múltiplas formatações</li>
          <li><strong>Visualizações:</strong> Trocar entre diferentes modos de visualização (lista, grade, etc.)</li>
          <li><strong>Filtros:</strong> Seleção de categorias ou tipos de conteúdo</li>
          <li><strong>Default Variant:</strong> Use quando os botões são parte de um grupo coeso</li>
          <li><strong>Outlined Variant:</strong> Use quando precisa de separação visual entre opções</li>
          <li>Prefira ícones + labels para melhor clareza, use apenas ícones em espaços limitados</li>
          <li>Em seleção múltipla, permita desmarcar todos os itens</li>
          <li>Use tamanho <code>sm</code> em toolbars compactas</li>
          <li>Forneça feedback visual claro do estado selecionado</li>
        </ul>
      </div>
    </div>
  `,
});
