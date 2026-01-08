import { ref } from 'vue';
import Radio from './Radio/Radio.vue';

export default {
  title: 'Scuba/Radio',
  component: Radio,
  tags: ['autodocs'],
  argTypes: {
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do radio button'
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
    },
    name: {
      control: 'text',
      description: 'Nome do grupo de radio buttons'
    },
    value: {
      control: 'text',
      description: 'Valor do radio button'
    }
  },
};

// Playground - Story interativa principal
export const Playground = () => ({
  components: { Radio },
  setup() {
    const selectedValue = ref('option1');
    return { selectedValue };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3 style="margin-bottom: 16px;">Selected: {{ selectedValue }}</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="playground" value="option1" label="Option 1" />
        <Radio v-model="selectedValue" name="playground" value="option2" label="Option 2" />
        <Radio v-model="selectedValue" name="playground" value="option3" label="Option 3" />
      </div>
    </div>
  `,
});

// Default
export const Default = () => ({
  components: { Radio },
  setup() {
    const selectedValue = ref('option1');
    return { selectedValue };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="default" value="option1" label="Option 1" />
        <Radio v-model="selectedValue" name="default" value="option2" label="Option 2" />
        <Radio v-model="selectedValue" name="default" value="option3" label="Option 3" />
      </div>
    </div>
  `,
});

// Sizes
export const Small = () => ({
  components: { Radio },
  setup() {
    const selectedValue = ref('option1');
    return { selectedValue };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="small" value="option1" label="Small Option 1" size="sm" />
        <Radio v-model="selectedValue" name="small" value="option2" label="Small Option 2" size="sm" />
        <Radio v-model="selectedValue" name="small" value="option3" label="Small Option 3" size="sm" />
      </div>
    </div>
  `,
});

export const Medium = () => ({
  components: { Radio },
  setup() {
    const selectedValue = ref('option1');
    return { selectedValue };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="medium" value="option1" label="Medium Option 1" size="md" />
        <Radio v-model="selectedValue" name="medium" value="option2" label="Medium Option 2" size="md" />
        <Radio v-model="selectedValue" name="medium" value="option3" label="Medium Option 3" size="md" />
      </div>
    </div>
  `,
});

export const Large = () => ({
  components: { Radio },
  setup() {
    const selectedValue = ref('option1');
    return { selectedValue };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="large" value="option1" label="Large Option 1" size="lg" />
        <Radio v-model="selectedValue" name="large" value="option2" label="Large Option 2" size="lg" />
        <Radio v-model="selectedValue" name="large" value="option3" label="Large Option 3" size="lg" />
      </div>
    </div>
  `,
});

// States
export const Disabled = () => ({
  components: { Radio },
  setup() {
    const selectedValue = ref('option1');
    return { selectedValue };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="disabled" value="option1" label="Option 1 (Disabled)" disabled />
        <Radio v-model="selectedValue" name="disabled" value="option2" label="Option 2 (Disabled Selected)" disabled />
        <Radio v-model="selectedValue" name="disabled" value="option3" label="Option 3" />
      </div>
    </div>
  `,
});

// Label Positions
export const LabelLeft = () => ({
  components: { Radio },
  setup() {
    const selectedValue = ref('option1');
    return { selectedValue };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="label-left" value="option1" label="Label Left 1" labelPosition="left" />
        <Radio v-model="selectedValue" name="label-left" value="option2" label="Label Left 2" labelPosition="left" />
        <Radio v-model="selectedValue" name="label-left" value="option3" label="Label Left 3" labelPosition="left" />
      </div>
    </div>
  `,
});

export const NoLabel = () => ({
  components: { Radio },
  setup() {
    const selectedValue = ref('option1');
    return { selectedValue };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; gap: 16px;">
        <Radio v-model="selectedValue" name="no-label" value="option1" />
        <Radio v-model="selectedValue" name="no-label" value="option2" />
        <Radio v-model="selectedValue" name="no-label" value="option3" />
      </div>
    </div>
  `,
});

// Matrix de todas as variações
export const AllSizesAndStates = () => ({
  components: { Radio },
  setup() {
    const small = ref('option1');
    const medium = ref('option1');
    const large = ref('option1');
    return { small, medium, large };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Radio Button Sizes & States</h2>

      <!-- Header -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 20px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">SELECTED</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SMALL -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">SMALL</div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-default" value="default" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-selected" value="option1" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-disabled" value="disabled" label="Label" size="sm" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-focus" value="focus" label="Label" size="sm" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 999px;" />
        </div>
      </div>

      <!-- MEDIUM -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">MEDIUM</div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-default" value="default" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-selected" value="option1" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-disabled" value="disabled" label="Label" size="md" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-focus" value="focus" label="Label" size="md" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 999px;" />
        </div>
      </div>

      <!-- LARGE -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">LARGE</div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-default" value="default" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-selected" value="option1" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-disabled" value="disabled" label="Label" size="lg" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-focus" value="focus" label="Label" size="lg" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 999px;" />
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
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
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
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-300</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-400</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-full</code></td><td style="text-align: right;">9999px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Nota</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          Radio buttons sempre devem ser usados em grupos com o mesmo <code>name</code> para garantir que apenas uma opção possa ser selecionada por vez.
        </p>
      </div>
    </div>
  `,
});
