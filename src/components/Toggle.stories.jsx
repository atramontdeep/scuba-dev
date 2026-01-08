import { ref } from 'vue';
import Toggle from './Toggle/Toggle.vue';

export default {
  title: 'Scuba/Toggle',
  component: Toggle,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do toggle'
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right', 'none'],
      description: 'Posição do label'
    },
    label: {
      control: 'text',
      description: 'Texto do label'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    }
  },
};

// Playground
export const Playground = () => ({
  components: { Toggle },
  setup() {
    const enabled = ref(true);
    return { enabled };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3 style="margin-bottom: 16px;">Status: {{ enabled ? 'Enabled' : 'Disabled' }}</h3>
      <Toggle v-model="enabled" label="Toggle me" />
    </div>
  `,
});

// Default
export const Default = () => ({
  components: { Toggle },
  setup() {
    const enabled = ref(false);
    return { enabled };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Enable notifications" />
    </div>
  `,
});

// Sizes
export const Small = () => ({
  components: { Toggle },
  setup() {
    const enabled = ref(true);
    return { enabled };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Small toggle" size="sm" />
    </div>
  `,
});

export const Medium = () => ({
  components: { Toggle },
  setup() {
    const enabled = ref(true);
    return { enabled };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Medium toggle" size="md" />
    </div>
  `,
});

export const Large = () => ({
  components: { Toggle },
  setup() {
    const enabled = ref(true);
    return { enabled };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Large toggle" size="lg" />
    </div>
  `,
});

// States
export const Disabled = () => ({
  components: { Toggle },
  setup() {
    const enabled = ref(false);
    const enabledChecked = ref(true);
    return { enabled, enabledChecked };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Toggle v-model="enabled" label="Disabled (Off)" disabled />
        <Toggle v-model="enabledChecked" label="Disabled (On)" disabled />
      </div>
    </div>
  `,
});

// Label Positions
export const LabelLeft = () => ({
  components: { Toggle },
  setup() {
    const enabled = ref(true);
    return { enabled };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Label on the left" labelPosition="left" />
    </div>
  `,
});

export const NoLabel = () => ({
  components: { Toggle },
  setup() {
    const enabled = ref(true);
    return { enabled };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" ariaLabel="Toggle notifications" />
    </div>
  `,
});

// Matrix de todas as variações
export const AllSizesAndStates = () => ({
  components: { Toggle },
  setup() {
    const small = ref(false);
    const smallChecked = ref(true);
    const medium = ref(false);
    const mediumChecked = ref(true);
    const large = ref(false);
    const largeChecked = ref(true);
    return { small, smallChecked, medium, mediumChecked, large, largeChecked };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Toggle Sizes & States</h2>

      <!-- Header -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 20px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">OFF</div>
        <div style="font-weight: 600; text-align: center;">ON</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SMALL -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">SMALL</div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="small" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="smallChecked" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle :modelValue="false" label="Label" size="sm" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="smallChecked" label="Label" size="sm" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 64px;" />
        </div>
      </div>

      <!-- MEDIUM -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">MEDIUM</div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="medium" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="mediumChecked" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle :modelValue="false" label="Label" size="md" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="mediumChecked" label="Label" size="md" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 64px;" />
        </div>
      </div>

      <!-- LARGE -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">LARGE</div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="large" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="largeChecked" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle :modelValue="false" label="Label" size="lg" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="largeChecked" label="Label" size="lg" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 64px;" />
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
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-700</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px (sm height)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (md height)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-700</code></td><td style="text-align: right;">40px (sm width)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-800</code></td><td style="text-align: right;">48px (md width, lg height)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-1000</code></td><td style="text-align: right;">64px (lg width)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-full</code></td><td style="text-align: right;">9999px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-sm</code></td><td style="text-align: right;">Subtle shadow</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Nota</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          Toggle/Switch é usado para controles de on/off imediatos, enquanto Checkbox é usado para seleções que requerem confirmação.
        </p>
      </div>
    </div>
  `,
});
