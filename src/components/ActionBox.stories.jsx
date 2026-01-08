import ActionBox from './ActionBox/ActionBox.vue';
import Badge from './Badge/Badge.vue';
import {
  PhLightbulb,
  PhGift,
  PhBell,
  PhWarning,
  PhCheckCircle,
  PhInfo,
  PhRocket,
  PhHeart,
  PhStar,
  PhCloudArrowUp
} from '@phosphor-icons/vue';

export default {
  title: 'Scuba/ActionBox',
  component: ActionBox,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'bordered', 'elevated'],
      description: 'Estilo visual do Action Box'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do componente'
    },
    iconVariant: {
      control: 'select',
      options: ['primary', 'success', 'warning', 'danger', 'info', 'neutral'],
      description: 'Cor do ícone'
    },
    closable: {
      control: 'boolean',
      description: 'Mostra botão de fechar'
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita interações'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { ActionBox },
  setup() {
    return { args, PhLightbulb };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <ActionBox
        v-bind="args"
        :icon="PhLightbulb"
        @action="() => console.log('Action clicked')"
        @dismiss="() => console.log('Dismissed')"
        @close="() => console.log('Closed')"
      />
    </div>
  `,
});
Playground.args = {
  title: 'Try our new feature',
  description: 'Discover the latest improvements to enhance your workflow and productivity.',
  actionLabel: 'Learn More',
  dismissLabel: 'Maybe Later',
  variant: 'bordered',
  size: 'md',
  iconVariant: 'primary',
  closable: true,
  disabled: false
};

// Welcome Message
export const WelcomeMessage = () => ({
  components: { ActionBox },
  setup() {
    return { PhRocket };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <ActionBox
        :icon="PhRocket"
        icon-variant="primary"
        title="Welcome to Scuba!"
        description="Get started by exploring our components and building amazing interfaces."
        action-label="Get PhStarted"
        dismiss-label="Skip"
        variant="elevated"
      />
    </div>
  `,
});

// Special Offer
export const SpecialOffer = () => ({
  components: { ActionBox, Badge },
  setup() {
    return { PhGift, Badge };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <ActionBox
        :icon="PhGift"
        icon-variant="success"
        title="Limited Time Offer"
        description="Upgrade to Pro and get 50% off for the first 3 months. Don't miss this opportunity!"
        action-label="Upgrade Now"
        variant="bordered"
        closable
      >
        <template #badge>
          <Badge variant="success">50% OFF</Badge>
        </template>
      </ActionBox>
    </div>
  `,
});

// Notification
export const Notification = () => ({
  components: { ActionBox },
  setup() {
    return { PhBell };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <ActionBox
        :icon="PhBell"
        icon-variant="info"
        title="New updates available"
        description="Version 2.0 is now available with exciting new features and improvements."
        action-label="View Changes"
        variant="default"
      />
    </div>
  `,
});

// PhWarning Alert
export const PhWarningAlert = () => ({
  components: { ActionBox },
  setup() {
    return { PhWarning };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <ActionBox
        :icon="PhWarning"
        icon-variant="warning"
        title="Action required"
        description="Your subscription will expire in 7 days. Please update your payment method to continue using our service."
        action-label="Update Payment"
        dismiss-label="Remind Later"
        variant="bordered"
        closable
      />
    </div>
  `,
});

// Success Message
export const SuccessMessage = () => ({
  components: { ActionBox },
  setup() {
    return { PhCheckCircle };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <ActionBox
        :icon="PhCheckCircle"
        icon-variant="success"
        title="PhUpload complete!"
        description="Your files have been successfully uploaded and are ready to use."
        action-label="View Files"
        variant="elevated"
        closable
      />
    </div>
  `,
});

// PhInfo Message
export const PhInfoMessage = () => ({
  components: { ActionBox },
  setup() {
    return { PhInfo };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <ActionBox
        :icon="PhInfo"
        icon-variant="info"
        title="Scheduled maintenance"
        description="We'll be performing system maintenance on Saturday from 2:00 AM to 4:00 AM UTC."
        variant="default"
      />
    </div>
  `,
});

// With Custom Content
export const WithCustomContent = () => ({
  components: { ActionBox },
  setup() {
    return { PhCloudArrowUp };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <ActionBox
        :icon="PhCloudArrowUp"
        icon-variant="primary"
        title="Backup your data"
        description="Keep your important files safe with automatic cloud backup."
        variant="bordered"
      >
        <div style="margin-top: 12px;">
          <ul style="margin: 0; padding-left: 20px; color: #6b7280; font-size: 14px;">
            <li>Automatic daily backups</li>
            <li>End-to-end encryption</li>
            <li>Unlimited storage space</li>
          </ul>
        </div>
        <template #actions>
          <button style="padding: 8px 16px; background: #0942a1; color: white; border: none; border-radius: 4px; cursor: pointer; font-weight: 600;">
            Enable Backup
          </button>
        </template>
      </ActionBox>
    </div>
  `,
});

// Sizes
export const Sizes = () => ({
  components: { ActionBox },
  setup() {
    return { PhStar };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin-bottom: 16px;">Small</h3>
        <ActionBox
          :icon="PhStar"
          icon-variant="primary"
          title="Small action box"
          description="This is a small sized action box with compact spacing."
          action-label="Action"
          size="sm"
          variant="bordered"
        />
      </div>

      <div>
        <h3 style="margin-bottom: 16px;">Medium (Default)</h3>
        <ActionBox
          :icon="PhStar"
          icon-variant="primary"
          title="Medium action box"
          description="This is a medium sized action box with comfortable spacing."
          action-label="Action"
          size="md"
          variant="bordered"
        />
      </div>

      <div>
        <h3 style="margin-bottom: 16px;">Large</h3>
        <ActionBox
          :icon="PhStar"
          icon-variant="primary"
          title="Large action box"
          description="This is a large sized action box with generous spacing."
          action-label="Action"
          size="lg"
          variant="bordered"
        />
      </div>
    </div>
  `,
});

// Variants
export const Variants = () => ({
  components: { ActionBox },
  setup() {
    return { PhHeart };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; display: flex; flex-direction: column; gap: 24px;">
      <div>
        <h3 style="margin-bottom: 16px;">Default</h3>
        <ActionBox
          :icon="PhHeart"
          icon-variant="danger"
          title="Default variant"
          description="Simple action box without border or shadow."
          action-label="Action"
          variant="default"
        />
      </div>

      <div>
        <h3 style="margin-bottom: 16px;">Bordered</h3>
        <ActionBox
          :icon="PhHeart"
          icon-variant="danger"
          title="Bordered variant"
          description="Action box with a subtle border."
          action-label="Action"
          variant="bordered"
        />
      </div>

      <div>
        <h3 style="margin-bottom: 16px;">Elevated</h3>
        <ActionBox
          :icon="PhHeart"
          icon-variant="danger"
          title="Elevated variant"
          description="Action box with shadow for depth and prominence."
          action-label="Action"
          variant="elevated"
        />
      </div>
    </div>
  `,
});

// Icon Variants
export const IconVariants = () => ({
  components: { ActionBox },
  setup() {
    return { PhLightbulb, PhCheckCircle, PhWarning, PhInfo, PhBell };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px;">
      <ActionBox
        :icon="PhLightbulb"
        icon-variant="primary"
        title="Primary"
        description="Use for general actions and features."
        variant="bordered"
      />

      <ActionBox
        :icon="PhCheckCircle"
        icon-variant="success"
        title="Success"
        description="Use for successful operations."
        variant="bordered"
      />

      <ActionBox
        :icon="PhWarning"
        icon-variant="warning"
        title="PhWarning"
        description="Use for warnings and important notices."
        variant="bordered"
      />

      <ActionBox
        :icon="PhWarning"
        icon-variant="danger"
        title="Danger"
        description="Use for errors and critical alerts."
        variant="bordered"
      />

      <ActionBox
        :icon="PhInfo"
        icon-variant="info"
        title="PhInfo"
        description="Use for informational messages."
        variant="bordered"
      />

      <ActionBox
        :icon="PhBell"
        icon-variant="neutral"
        title="Neutral"
        description="Use for neutral notifications."
        variant="bordered"
      />
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
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Button hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Border</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Title</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Description</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-{variant}-100/600</code></td><td style="text-align: right;">Icon backgrounds</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm/base/lg/xl</code></td><td style="text-align: right;">Sizes</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-tight/normal</code></td><td style="text-align: right;">1.25/1.5</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm/md</code></td><td style="text-align: right;">4/8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>box-shadow</code></td><td style="text-align: right;">Elevated variant</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Welcome Messages:</strong> Use para onboarding e primeiras impressões</li>
          <li><strong>Promotions:</strong> Use variant="success" com badge para ofertas especiais</li>
          <li><strong>Notifications:</strong> Use variant="info" para atualizações e novidades</li>
          <li><strong>PhWarnings:</strong> Use variant="warning" para ações urgentes</li>
          <li><strong>Success:</strong> Use variant="success" para confirmações</li>
          <li><strong>Closable:</strong> Permita fechar quando não for crítico</li>
          <li><strong>Elevated:</strong> Use para destacar ações importantes</li>
          <li>Sempre forneça um título claro e descrição concisa</li>
          <li>Use ícones consistentes com a mensagem (warning icon para warnings, etc.)</li>
          <li>Limite ações a 1-2 botões principais</li>
        </ul>
      </div>
    </div>
  `,
});
