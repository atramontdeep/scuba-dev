import { ref } from 'vue';
import Menu from './Menu/Menu.vue';
import Button from './Button/Button.vue';
import IconButton from './IconButton/IconButton.vue';
import Avatar from './Avatar/Avatar.vue';
import {
  PhUser,
  PhGear,
  PhSignOut,
  PhCopy,
  PhPencil,
  PhTrash,
  PhArchive,
  PhDownloadSimple,
  PhShareNetwork,
  PhEye,
  PhDotsThree,
  PhCaretDown,
  PhPlus,
  PhFolderOpen,
  PhFileText,
  PhImage as ImageIcon,
  PhMusicNote
} from '@phosphor-icons/vue';

export default {
  title: 'Scuba/Menu',
  component: Menu,
  tags: ['autodocs'],
  argTypes: {
    trigger: {
      control: 'select',
      options: ['click', 'hover', 'both'],
      description: 'Como o menu é ativado'
    },
    placement: {
      control: 'select',
      options: [
        'top', 'top-start', 'top-end',
        'bottom', 'bottom-start', 'bottom-end',
        'left', 'left-start', 'left-end',
        'right', 'right-start', 'right-end'
      ],
      description: 'Posição do menu em relação ao trigger'
    },
    offset: {
      control: 'number',
      description: 'Distância do trigger em pixels'
    },
    closeOnItemClick: {
      control: 'boolean',
      description: 'Fechar menu ao clicar em um item'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { Menu, Button },
  setup() {
    const menuItems = [
      { label: 'Profile', icon: PhUser },
      { label: 'Settings', icon: PhGear },
      { isDivider: true },
      { label: 'Sign Out', icon: PhSignOut, variant: 'danger' }
    ];

    const handleItemClick = (item) => {
      console.log('Item clicked:', item.label);
    };

    return { args, menuItems, handleItemClick, PhCaretDown };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <Menu v-bind="args" :items="menuItems" @item-click="handleItemClick">
        <template #trigger>
          <Button variant="secondary" :icon-right="PhCaretDown">Menu</Button>
        </template>
      </Menu>
    </div>
  `,
});
Playground.args = {
  trigger: 'click',
  placement: 'bottom-start',
  offset: 8,
  closeOnItemClick: true
};

// Click Trigger
export const ClickTrigger = () => ({
  components: { Menu, Button },
  setup() {
    const items = [
      { label: 'New File', icon: PhPlus, shortcut: '⌘N' },
      { label: 'Open File', icon: PhFolderOpen, shortcut: '⌘O' },
      { isDivider: true },
      { label: 'Save', icon: PhDownloadSimple, shortcut: '⌘S' },
      { label: 'Save As...', icon: PhDownloadSimple, shortcut: '⌘⇧S' }
    ];

    return { items, PhCaretDown };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Click to Open</h2>
      <Menu :items="items" trigger="click">
        <template #trigger>
          <Button variant="secondary" :icon-right="PhCaretDown">File</Button>
        </template>
      </Menu>
    </div>
  `,
});

// Hover Trigger
export const HoverTrigger = () => ({
  components: { Menu, Button },
  setup() {
    const items = [
      { label: 'View Profile', icon: PhEye },
      { label: 'Edit Profile', icon: PhPencil },
      { isDivider: true },
      { label: 'Account Settings', icon: PhGear },
      { isDivider: true },
      { label: 'Sign Out', icon: PhSignOut, variant: 'danger' }
    ];

    return { items, PhUser, PhCaretDown };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Hover to Open</h2>
      <Menu :items="items" trigger="hover">
        <template #trigger>
          <Button variant="secondary" :icon-left="PhUser" :icon-right="PhCaretDown">Account</Button>
        </template>
      </Menu>
    </div>
  `,
});

// With Icon Button Trigger
export const WithIconButton = () => ({
  components: { Menu, IconButton },
  setup() {
    const items = [
      { label: 'Edit', icon: PhPencil },
      { label: 'Duplicate', icon: PhCopy },
      { label: 'PhArchive', icon: PhArchive },
      { isDivider: true },
      { label: 'Delete', icon: PhTrash, variant: 'danger' }
    ];

    return { items, PhDotsThree };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Context Menu with Icon Button</h2>
      <Menu :items="items">
        <template #trigger>
          <IconButton variant="ghost" :icon="PhDotsThree" aria-label="More options" />
        </template>
      </Menu>
    </div>
  `,
});

// With Avatar Trigger
export const WithAvatar = () => ({
  components: { Menu, Avatar },
  setup() {
    const items = [
      { label: 'My Profile', icon: PhUser },
      { label: 'Settings', icon: PhGear },
      { isDivider: true },
      { label: 'Sign Out', icon: PhSignOut, variant: 'danger' }
    ];

    return { items };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">PhUser Menu</h2>
      <Menu :items="items" trigger="click" placement="bottom-end">
        <template #trigger>
          <Avatar name="John Doe" size="md" />
        </template>
      </Menu>
    </div>
  `,
});

// With Keyboard Shortcuts
export const WithShortcuts = () => ({
  components: { Menu, Button },
  setup() {
    const items = [
      { label: 'PhCopy', icon: PhCopy, shortcut: '⌘C' },
      { label: 'Paste', icon: PhFileText, shortcut: '⌘V' },
      { isDivider: true },
      { label: 'Select All', shortcut: '⌘A' },
      { label: 'Find', shortcut: '⌘F' }
    ];

    return { items, PhCaretDown };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Menu with Keyboard Shortcuts</h2>
      <Menu :items="items">
        <template #trigger>
          <Button variant="secondary" :icon-right="PhCaretDown">Edit</Button>
        </template>
      </Menu>
    </div>
  `,
});

// Placements
export const Placements = () => ({
  components: { Menu, Button },
  setup() {
    const items = [
      { label: 'Item 1', icon: PhUser },
      { label: 'Item 2', icon: PhGear },
      { label: 'Item 3', icon: PhSignOut }
    ];

    return { items, PhCaretDown };
  },
  template: `
    <div style="padding: 150px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Different Placements</h2>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; align-items: center;">
        <div style="text-align: center;">
          <Menu :items="items" placement="top-start">
            <template #trigger>
              <Button variant="secondary" :icon-right="PhCaretDown">Top Start</Button>
            </template>
          </Menu>
        </div>

        <div style="text-align: center;">
          <Menu :items="items" placement="top">
            <template #trigger>
              <Button variant="secondary" :icon-right="PhCaretDown">Top</Button>
            </template>
          </Menu>
        </div>

        <div style="text-align: center;">
          <Menu :items="items" placement="top-end">
            <template #trigger>
              <Button variant="secondary" :icon-right="PhCaretDown">Top End</Button>
            </template>
          </Menu>
        </div>

        <div style="text-align: center;">
          <Menu :items="items" placement="bottom-start">
            <template #trigger>
              <Button variant="secondary" :icon-right="PhCaretDown">Bottom Start</Button>
            </template>
          </Menu>
        </div>

        <div style="text-align: center;">
          <Menu :items="items" placement="bottom">
            <template #trigger>
              <Button variant="secondary" :icon-right="PhCaretDown">Bottom</Button>
            </template>
          </Menu>
        </div>

        <div style="text-align: center;">
          <Menu :items="items" placement="bottom-end">
            <template #trigger>
              <Button variant="secondary" :icon-right="PhCaretDown">Bottom End</Button>
            </template>
          </Menu>
        </div>
      </div>
    </div>
  `,
});

// Nested Actions
export const NestedActions = () => ({
  components: { Menu, Button },
  setup() {
    const items = [
      { label: 'New Document', icon: PhFileText },
      { label: 'New PhFolder', icon: PhFolderOpen },
      { isDivider: true },
      { label: 'Import', icon: PhDownloadSimple, hasSubmenu: true },
      { label: 'Export', icon: PhShareNetwork, hasSubmenu: true }
    ];

    return { items, PhPlus };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Menu with Submenus Indicator</h2>
      <Menu :items="items">
        <template #trigger>
          <Button variant="primary" :icon-left="PhPlus">New</Button>
        </template>
      </Menu>
      <p style="margin-top: 16px; color: #6b7280; font-size: 14px;">
        Items with hasSubmenu show a caret indicator
      </p>
    </div>
  `,
});

// Disabled Items
export const DisabledItems = () => ({
  components: { Menu, Button },
  setup() {
    const items = [
      { label: 'Available Action', icon: PhEye },
      { label: 'Disabled Action', icon: PhPencil, disabled: true },
      { label: 'Another Action', icon: PhCopy },
      { isDivider: true },
      { label: 'Disabled Danger', icon: PhTrash, variant: 'danger', disabled: true }
    ];

    return { items, PhDotsThree };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Menu with Disabled Items</h2>
      <Menu :items="items">
        <template #trigger>
          <IconButton variant="secondary" :icon="PhDotsThree" aria-label="Options" />
        </template>
      </Menu>
    </div>
  `,
});

// Complex Menu
export const ComplexMenu = () => ({
  components: { Menu, Button },
  setup() {
    const items = [
      { label: 'New Text File', icon: PhFileText, shortcut: '⌘N' },
      { label: 'New PhImage', icon: ImageIcon },
      { label: 'New Audio', icon: PhMusicNote },
      { isDivider: true },
      { label: 'Open Recent', icon: PhFolderOpen, hasSubmenu: true },
      { isDivider: true },
      { label: 'PhDownload', icon: PhDownloadSimple, shortcut: '⌘D' },
      { label: 'PhShare', icon: PhShareNetwork },
      { isDivider: true },
      { label: 'PhArchive', icon: PhArchive },
      { label: 'Delete', icon: PhTrash, variant: 'danger', shortcut: '⌘⌫' }
    ];

    const handleItemClick = (item) => {
      console.log('Action:', item.label);
    };

    return { items, handleItemClick, PhDotsThree };
  },
  template: `
    <div style="padding: 100px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Complete Menu Example</h2>
      <Menu :items="items" @item-click="handleItemClick">
        <template #trigger>
          <IconButton variant="secondary" :icon="PhDotsThree" aria-label="File options" />
        </template>
      </Menu>
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
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Item hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Border & Divider</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Text</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Icons</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-tertiary</code></td><td style="text-align: right;">Shortcuts</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-red-600</code></td><td style="text-align: right;">Danger text</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-red-50/700</code></td><td style="text-align: right;">Danger hover</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px (items)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px (shortcuts)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">4px (content padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px (item gap, vertical padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">12px (horizontal padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px (items)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-md</code></td><td style="text-align: right;">8px (menu)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>box-shadow</code></td><td style="text-align: right;">Elevation shadow</td></tr>
            <tr><td style="padding: 8px 0;"><code>z-index: 1000</code></td><td style="text-align: right;">Above content</td></tr>
            <tr><td style="padding: 8px 0;"><code>transition: 0.15s</code></td><td style="text-align: right;">Fade animation</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Trigger Click:</strong> Use para ações principais e menus de contexto</li>
          <li><strong>Trigger Hover:</strong> Use para navegação e menus secundários</li>
          <li><strong>Trigger Both:</strong> Use quando ambos os comportamentos são aceitáveis</li>
          <li><strong>Placement:</strong> Escolha baseado no espaço disponível (bottom-start é padrão)</li>
          <li><strong>Dividers:</strong> Use para separar grupos de ações relacionadas</li>
          <li><strong>Shortcuts:</strong> Mostre atalhos de teclado para ações comuns</li>
          <li><strong>Variant Danger:</strong> Use apenas para ações destrutivas (deletar, remover)</li>
          <li><strong>Disabled:</strong> Use para ações temporariamente indisponíveis</li>
          <li>Mantenha menus curtos (máximo 10-12 itens antes de dividir em submenus)</li>
          <li>Use ícones consistentes em todo o menu para melhor escaneabilidade</li>
          <li>Coloque ações destrutivas no final do menu, separadas por divider</li>
        </ul>
      </div>
    </div>
  `,
});
