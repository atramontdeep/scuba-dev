import ActionBox from './ActionBox/ActionBox.vue';
import { PhPlus, PhCaretRight } from '@phosphor-icons/vue';

export default {
  title: 'Scuba/ActionBox',
  component: ActionBox,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do ActionBox (sempre visível)'
    },
    subtitle: {
      control: 'text',
      description: 'Subtítulo/contexto'
    },
    showCheckbox: {
      control: 'boolean',
      description: 'Mostrar checkbox'
    },
    checked: {
      control: 'boolean',
      description: 'Estado do checkbox'
    },
    showAvatar: {
      control: 'boolean',
      description: 'Mostrar avatar'
    },
    avatarInitials: {
      control: 'text',
      description: 'Iniciais do avatar'
    },
    showSubtitle: {
      control: 'boolean',
      description: 'Mostrar subtítulo'
    },
    showChip: {
      control: 'boolean',
      description: 'Mostrar chip'
    },
    chipLabel: {
      control: 'text',
      description: 'Texto do chip'
    },
    chipCount: {
      control: 'boolean',
      description: 'Mostrar contador no chip'
    },
    chipCountValue: {
      control: 'text',
      description: 'Valor do contador'
    },
    showIcon: {
      control: 'boolean',
      description: 'Mostrar ícone à direita'
    },
    clickable: {
      control: 'boolean',
      description: 'ActionBox clicável'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { ActionBox, PhPlus },
  setup() {
    const handleClick = () => {
      console.log('ActionBox clicked!');
    };
    const handleCheckboxChange = (checked) => {
      console.log('Checkbox changed:', checked);
    };
    return { args, PhPlus, handleClick, handleCheckboxChange };
  },
  template: '<ActionBox v-bind="args" :chipIcon="args.chipCount ? PhPlus : null" @click="handleClick" @checkbox-change="handleCheckboxChange" />',
});
Playground.args = {
  title: 'Title',
  subtitle: 'Context',
  showCheckbox: true,
  checked: false,
  showAvatar: true,
  avatarInitials: 'AB',
  showSubtitle: true,
  showChip: true,
  chipLabel: 'Chip',
  chipCount: true,
  chipCountValue: '32',
  showIcon: true,
  clickable: true
};

// Variations
export const Variations = () => ({
  components: { ActionBox, PhPlus },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Variações do ActionBox</h2>

      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px;">
        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Completo (todos os elementos)</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem checkbox</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem avatar</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem subtítulo</h3>
          <ActionBox
            title="Title"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem chip</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem ícone</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Mínimo (apenas título)</h3>
          <ActionBox title="Title" />
        </div>
      </div>
    </div>
  `,
});

// List Example
export const ListExample = () => ({
  components: { ActionBox, PhPlus },
  setup() {
    return { PhPlus };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Lista de ActionBoxes</h2>

      <div style="display: flex; flex-direction: column; gap: 8px; max-width: 600px;">
        <ActionBox
          title="Item 1"
          subtitle="Description for item 1"
          showCheckbox
          showAvatar
          avatarInitials="A1"
          showSubtitle
          showChip
          chipLabel="Chip"
          :chipCount="true"
          chipCountValue="5"
          :chipIcon="PhPlus"
          showIcon
        />
        <ActionBox
          title="Item 2"
          subtitle="Description for item 2"
          showCheckbox
          :checked="true"
          showAvatar
          avatarInitials="A2"
          showSubtitle
          showChip
          chipLabel="Chip"
          :chipCount="true"
          chipCountValue="12"
          :chipIcon="PhPlus"
          showIcon
        />
        <ActionBox
          title="Item 3"
          subtitle="Description for item 3"
          showCheckbox
          showAvatar
          avatarInitials="A3"
          showSubtitle
          showChip
          chipLabel="Chip"
          :chipCount="true"
          chipCountValue="32"
          :chipIcon="PhPlus"
          showIcon
        />
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
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Estrutura</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Padding:</strong></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Gap:</strong></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Border:</strong></td><td style="text-align: right;">1px solid #E5E7EB</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Border Radius:</strong></td><td style="text-align: right;">8px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Tipografia</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Título:</strong></td><td style="text-align: right;">16px / 600</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Subtítulo:</strong></td><td style="text-align: right;">14px / 400</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Componentes Opcionais</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Checkbox:</strong> Controlado por <code>showCheckbox</code></li>
          <li><strong>Avatar:</strong> Controlado por <code>showAvatar</code></li>
          <li><strong>Subtítulo:</strong> Controlado por <code>showSubtitle</code></li>
          <li><strong>Chip:</strong> Controlado por <code>showChip</code></li>
          <li><strong>Ícone:</strong> Controlado por <code>showIcon</code></li>
          <li><strong>Título:</strong> Sempre visível (obrigatório)</li>
        </ul>
      </div>
    </div>
  `,
});
