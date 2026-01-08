import SideNavigation from './SideNavigation/SideNavigation.vue';
import Avatar from './Avatar/Avatar.vue';
import {
  PhHouse,
  PhChartBar,
  PhUsers,
  PhGear,
  PhFileText,
  PhCalendar,
  PhBell,
  PhEnvelope,
  PhFolder,
  PhArchive,
  PhSignOut,
  PhQuestion
} from '@phosphor-icons/vue';

export default {
  title: 'Scuba/SideNavigation',
  component: SideNavigation,
  tags: ['autodocs'],
  argTypes: {
    collapsible: {
      control: 'boolean',
      description: 'Permite colapsar/expandir'
    },
    defaultCollapsed: {
      control: 'boolean',
      description: 'Estado inicial colapsado'
    },
    expandOnHover: {
      control: 'boolean',
      description: 'Expande ao passar o mouse'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { SideNavigation },
  setup() {
    const navItems = [
      { label: 'Dashboard', icon: PhHouse, href: '#', active: true },
      { label: 'Analytics', icon: PhChartBar, href: '#' },
      { label: 'Team', icon: PhUsers, href: '#', badge: '5' },
      { label: 'Settings', icon: PhGear, href: '#' }
    ];

    const handleItemClick = (item) => {
      console.log('Clicked:', item.label);
    };

    return { args, navItems, handleItemClick, PhHouse, PhChartBar, PhUsers, PhGear };
  },
  template: `
    <div style="position: relative; height: 600px; font-family: Poppins, sans-serif;">
      <SideNavigation
        v-bind="args"
        :items="navItems"
        @item-click="handleItemClick"
      />
      <div style="margin-left: 300px; padding: 40px;">
        <h1>Main Content Area</h1>
        <p style="color: #6b7280;">This is where your main content goes. The sidebar navigation is on the left.</p>
      </div>
    </div>
  `,
});
Playground.args = {
  logo: 'APP',
  collapsible: true,
  defaultCollapsed: false,
  expandOnHover: true
};

// Default Collapsed
export const DefaultCollapsed = () => ({
  components: { SideNavigation },
  setup() {
    const items = [
      { label: 'Home', icon: PhHouse, href: '#', active: true },
      { label: 'Analytics', icon: PhChartBar, href: '#' },
      { label: 'Team', icon: PhUsers, href: '#', badge: '12' },
      { label: 'PhCalendar', icon: PhCalendar, href: '#' },
      { label: 'Documents', icon: PhFileText, href: '#' },
      { label: 'Settings', icon: PhGear, href: '#' }
    ];

    return { items, PhHouse, PhChartBar, PhUsers, PhCalendar, PhFileText, PhGear };
  },
  template: `
    <div style="position: relative; height: 600px; font-family: Poppins, sans-serif;">
      <SideNavigation
        :items="items"
        logo="S"
        :default-collapsed="true"
        :expand-on-hover="true"
      />
      <div style="margin-left: 100px; padding: 40px;">
        <h1>Collapsed by Default</h1>
        <p style="color: #6b7280;">
          The sidebar starts collapsed. Hover over it to expand temporarily,
          or click the toggle button to keep it expanded.
        </p>
      </div>
    </div>
  `,
});

// With Subitems
export const WithSubitems = () => ({
  components: { SideNavigation },
  setup() {
    const items = [
      { label: 'Dashboard', icon: PhHouse, href: '#', active: true },
      {
        label: 'Projects',
        icon: PhFolder,
        href: '#',
        children: [
          { label: 'Active Projects', href: '#' },
          { label: 'Archived', href: '#' },
          { label: 'Templates', href: '#' }
        ]
      },
      {
        label: 'Team',
        icon: PhUsers,
        href: '#',
        children: [
          { label: 'Members', href: '#', badge: '12' },
          { label: 'Invitations', href: '#', badge: '3' },
          { label: 'Roles', href: '#' }
        ]
      },
      { label: 'Settings', icon: PhGear, href: '#' }
    ];

    return { items, PhHouse, PhFolder, PhUsers, PhGear };
  },
  template: `
    <div style="position: relative; height: 600px; font-family: Poppins, sans-serif;">
      <SideNavigation
        :items="items"
        logo="APP"
        :default-collapsed="false"
      />
      <div style="margin-left: 300px; padding: 40px;">
        <h1>Navigation with Subitems</h1>
        <p style="color: #6b7280;">
          Some navigation items have nested subitems for better organization.
        </p>
      </div>
    </div>
  `,
});

// With Badges
export const WithBadges = () => ({
  components: { SideNavigation },
  setup() {
    const items = [
      { label: 'Dashboard', icon: PhHouse, href: '#', active: true },
      { label: 'Messages', icon: PhEnvelope, href: '#', badge: '24' },
      { label: 'Notifications', icon: PhBell, href: '#', badge: '99+' },
      { label: 'Team', icon: PhUsers, href: '#', badge: '5' },
      { label: 'PhCalendar', icon: PhCalendar, href: '#' },
      { label: 'Settings', icon: PhGear, href: '#' }
    ];

    return { items, PhHouse, PhEnvelope, PhBell, PhUsers, PhCalendar, PhGear };
  },
  template: `
    <div style="position: relative; height: 600px; font-family: Poppins, sans-serif;">
      <SideNavigation
        :items="items"
        logo="SCUBA"
        :default-collapsed="true"
      />
      <div style="margin-left: 100px; padding: 40px;">
        <h1>Navigation with Badges</h1>
        <p style="color: #6b7280;">
          Use badges to show counts or status. Badges are positioned differently
          when collapsed vs expanded.
        </p>
      </div>
    </div>
  `,
});

// With Footer
export const WithFooter = () => ({
  components: { SideNavigation, Avatar },
  setup() {
    const items = [
      { label: 'Dashboard', icon: PhHouse, href: '#', active: true },
      { label: 'Analytics', icon: PhChartBar, href: '#' },
      { label: 'Team', icon: PhUsers, href: '#' },
      { label: 'Documents', icon: PhFileText, href: '#' },
      { label: 'Settings', icon: PhGear, href: '#' }
    ];

    return { items, Avatar, PhHouse, PhChartBar, PhUsers, PhFileText, PhGear };
  },
  template: `
    <div style="position: relative; height: 600px; font-family: Poppins, sans-serif;">
      <SideNavigation
        :items="items"
        logo="APP"
        :default-collapsed="false"
      >
        <template #footer>
          <div style="display: flex; align-items: center; gap: 12px;">
            <Avatar name="John Doe" size="sm" />
            <div style="flex: 1; min-width: 0;">
              <div style="font-weight: 600; font-size: 14px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                John Doe
              </div>
              <div style="font-size: 12px; color: #6b7280; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                john@example.com
              </div>
            </div>
          </div>
        </template>
      </SideNavigation>
      <div style="margin-left: 300px; padding: 40px;">
        <h1>Navigation with Footer</h1>
        <p style="color: #6b7280;">
          Use the footer slot for user profile, logout button, or other persistent actions.
        </p>
      </div>
    </div>
  `,
});

// Disabled Items
export const DisabledItems = () => ({
  components: { SideNavigation },
  setup() {
    const items = [
      { label: 'Dashboard', icon: PhHouse, href: '#', active: true },
      { label: 'Analytics', icon: PhChartBar, href: '#' },
      { label: 'Team', icon: PhUsers, href: '#', disabled: true },
      { label: 'Reports', icon: PhFileText, href: '#', disabled: true },
      { label: 'PhArchive', icon: PhArchive, href: '#', disabled: true },
      { label: 'Settings', icon: PhGear, href: '#' }
    ];

    return { items, PhHouse, PhChartBar, PhUsers, PhFileText, PhArchive, PhGear };
  },
  template: `
    <div style="position: relative; height: 600px; font-family: Poppins, sans-serif;">
      <SideNavigation
        :items="items"
        logo="APP"
        :default-collapsed="false"
      />
      <div style="margin-left: 300px; padding: 40px;">
        <h1>Disabled Items</h1>
        <p style="color: #6b7280;">
          Some navigation items are disabled and cannot be clicked.
        </p>
      </div>
    </div>
  `,
});

// Complete Example
export const CompleteExample = () => ({
  components: { SideNavigation, Avatar },
  setup() {
    const items = [
      { label: 'Dashboard', icon: PhHouse, href: '#', active: true },
      { label: 'Analytics', icon: PhChartBar, href: '#', badge: 'New' },
      {
        label: 'Projects',
        icon: PhFolder,
        href: '#',
        children: [
          { label: 'All Projects', href: '#' },
          { label: 'Favorites', href: '#', badge: '3' },
          { label: 'Recent', href: '#' }
        ]
      },
      {
        label: 'Team',
        icon: PhUsers,
        href: '#',
        badge: '12',
        children: [
          { label: 'Members', href: '#' },
          { label: 'Invitations', href: '#', badge: '2' }
        ]
      },
      { label: 'Messages', icon: PhEnvelope, href: '#', badge: '5' },
      { label: 'PhCalendar', icon: PhCalendar, href: '#' },
      { label: 'Documents', icon: PhFileText, href: '#' },
      { label: 'Settings', icon: PhGear, href: '#' },
      { label: 'Help', icon: PhQuestion, href: '#' }
    ];

    const handleSignOut = () => {
      console.log('Signing out...');
    };

    return { items, handleSignOut, Avatar, PhSignOut, PhHouse, PhChartBar, PhFolder, PhUsers, PhEnvelope, PhCalendar, PhFileText, PhGear, PhQuestion };
  },
  template: `
    <div style="position: relative; height: 700px; font-family: Poppins, sans-serif;">
      <SideNavigation
        :items="items"
        logo="SCUBA"
        :default-collapsed="true"
        :expand-on-hover="true"
      >
        <template #footer>
          <div style="display: flex; flex-direction: column; gap: 12px;">
            <div style="display: flex; align-items: center; gap: 12px; padding: 8px; background: #f9fafb; border-radius: 8px;">
              <Avatar name="Sarah Johnson" size="sm" />
              <div style="flex: 1; min-width: 0;">
                <div style="font-weight: 600; font-size: 13px; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  Sarah Johnson
                </div>
                <div style="font-size: 11px; color: #6b7280; white-space: nowrap; overflow: hidden; text-overflow: ellipsis;">
                  Product Designer
                </div>
              </div>
            </div>
            <button
              @click="handleSignOut"
              style="display: flex; align-items: center; gap: 8px; padding: 8px; border: none; background: transparent; color: #dc2626; border-radius: 4px; cursor: pointer; font-family: Poppins; font-weight: 500; transition: background 0.2s;"
              onmouseover="this.style.background='#fef2f2'"
              onmouseout="this.style.background='transparent'"
            >
              <svg style="width: 20px; height: 20px; fill: currentColor;" viewBox="0 0 256 256">
                <path d="M120,216a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V40a8,8,0,0,1,8-8h64a8,8,0,0,1,0,16H56V208h56A8,8,0,0,1,120,216Zm109.66-93.66-40-40a8,8,0,0,0-11.32,11.32L204.69,120H112a8,8,0,0,0,0,16h92.69l-26.35,26.34a8,8,0,0,0,11.32,11.32l40-40A8,8,0,0,0,229.66,122.34Z"/>
              </svg>
              <span>Sign Out</span>
            </button>
          </div>
        </template>
      </SideNavigation>
      <div style="margin-left: 100px; padding: 40px;">
        <h1>Complete Navigation Example</h1>
        <p style="color: #6b7280; margin-bottom: 20px;">
          This example demonstrates all features: collapsible sidebar, hover expansion,
          nested items, badges, footer with user profile, and sign out action.
        </p>
        <div style="padding: 24px; background: #f9fafb; border-radius: 8px; border: 1px solid #e5e7eb;">
          <h2 style="margin-top: 0;">Features Demonstrated</h2>
          <ul style="color: #6b7280; line-height: 2;">
            <li>Collapsed by default with hover expansion</li>
            <li>Navigation items with icons and labels</li>
            <li>Nested subitems for better organization</li>
            <li>Badge notifications on multiple items</li>
            <li>Active state highlighting</li>
            <li>PhUser profile in footer</li>
            <li>Sign out action</li>
          </ul>
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
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Item hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Borders</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Active text</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Default text</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-primary-100/700</code></td><td style="text-align: right;">Active state</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-red-500</code></td><td style="text-align: right;">Badge</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs/sm/base/xl</code></td><td style="text-align: right;">Sizes</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium/semibold</code></td><td style="text-align: right;">500/600</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Layout</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>Width collapsed</code></td><td style="text-align: right;">72px</td></tr>
            <tr><td style="padding: 8px 0;"><code>Width expanded</code></td><td style="text-align: right;">280px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs/xs/sm/md/lg/xl</code></td><td style="text-align: right;">Padding/gaps</td></tr>
            <tr><td style="padding: 8px 0;"><code>z-index: 100</code></td><td style="text-align: right;">Layer</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>transition: 0.3s</code></td><td style="text-align: right;">Expand/collapse</td></tr>
            <tr><td style="padding: 8px 0;"><code>transition: 0.2s</code></td><td style="text-align: right;">Interactions</td></tr>
            <tr><td style="padding: 8px 0;"><code>position: fixed</code></td><td style="text-align: right;">Layout</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Default Collapsed:</strong> Economiza espaço horizontal, ideal para dashboards</li>
          <li><strong>Expand on Hover:</strong> Proporciona acesso rápido sem ocupar espaço permanente</li>
          <li><strong>Active State:</strong> Sempre destaque o item da página atual</li>
          <li><strong>Icons:</strong> Use ícones consistentes e reconhecíveis</li>
          <li><strong>Badges:</strong> Use para notificações e contadores</li>
          <li><strong>Subitems:</strong> Organize itens relacionados sob um item pai</li>
          <li><strong>Footer:</strong> Use para perfil de usuário e ações globais</li>
          <li>Limite navegação principal a 8-10 itens</li>
          <li>Use subitems para organização adicional quando necessário</li>
          <li>Mantenha labels curtos e descritivos</li>
          <li>Forneça tooltips quando colapsado para melhor acessibilidade</li>
        </ul>
      </div>
    </div>
  `,
});
