import Chip from './Chip/Chip.vue';
import { PhPlus, PhX } from '@phosphor-icons/vue';

export default {
  title: 'Scuba/Chip',
  component: Chip,
  tags: ['autodocs'],
  argTypes: {
    label: {
      control: 'text',
      description: 'Texto do chip'
    },
    count: {
      control: 'boolean',
      description: 'Exibir contador'
    },
    countValue: {
      control: 'text',
      description: 'Valor do contador'
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
    removable: {
      control: 'boolean',
      description: 'Exibe botão de remover'
    },
    clickable: {
      control: 'boolean',
      description: 'Chip clicável'
    },
    selected: {
      control: 'boolean',
      description: 'Chip selecionado'
    },
    disabled: {
      control: 'boolean',
      description: 'Chip desabilitado'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { Chip, PhPlus },
  setup() {
    const handleClick = () => {
      console.log('Chip clicked!');
    };
    const handleRemove = () => {
      console.log('Chip removed!');
    };
    return { args, PhPlus, handleClick, handleRemove };
  },
  template: '<Chip v-bind="args" :icon="args.icon ? PhPlus : null" @click="handleClick" @remove="handleRemove" />',
});
Playground.args = {
  label: 'Chip',
  count: true,
  countValue: '32',
  size: 'md',
  iconPosition: 'left',
  removable: true,
  clickable: true,
  selected: false,
  disabled: false,
  icon: true
};

// States
export const States = () => ({
  components: { Chip, PhPlus, PhX },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Estados do Chip</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Default</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable />
          <Chip label="Chip" :icon="PhPlus" removable />
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Hover (clickable)</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable clickable />
          <Chip label="Chip" :icon="PhPlus" removable clickable />
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Selected</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable selected />
          <Chip label="Chip" :icon="PhPlus" removable selected />
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Disabled</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable disabled />
          <Chip label="Chip" :icon="PhPlus" removable disabled />
        </div>
      </div>
    </div>
  `,
});

// Sizes
export const Sizes = () => ({
  components: { Chip, PhPlus, PhX },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Tamanhos</h2>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Small (24px)</div>
          <div style="display: flex; gap: 12px;">
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable clickable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable selected />
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable disabled />
          </div>
        </div>

        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Medium (32px)</div>
          <div style="display: flex; gap: 12px;">
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable clickable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable selected />
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable disabled />
          </div>
        </div>

        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Large (40px)</div>
          <div style="display: flex; gap: 12px;">
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable clickable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable selected />
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable disabled />
          </div>
        </div>
      </div>
    </div>
  `,
});

// With Counter
export const WithCounter = () => ({
  components: { Chip, PhPlus },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Com Contador</h2>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <Chip label="Chip" count countValue="5" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="12" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="32" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="128" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="999+" :icon="PhPlus" removable />
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
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Estados</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Default:</strong></td><td style="text-align: right;">#E5E7EB</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Hover:</strong></td><td style="text-align: right;">#DBEAFE</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Selected:</strong></td><td style="text-align: right;">#BFDBFE / #1E40AF</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Disabled:</strong></td><td style="text-align: right;">#E5E7EB / #9CA3AF</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Tamanhos</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Small:</strong></td><td style="text-align: right;">24px altura</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Medium:</strong></td><td style="text-align: right;">32px altura</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Large:</strong></td><td style="text-align: right;">40px altura</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Use <code>count</code> para exibir números ou contadores</li>
          <li>Use <code>clickable</code> para tornar o chip interativo</li>
          <li>Use <code>selected</code> para indicar chips selecionados</li>
          <li>Use <code>removable</code> para permitir remoção</li>
          <li>Use <code>disabled</code> para indicar chips não disponíveis</li>
        </ul>
      </div>
    </div>
  `,
});
