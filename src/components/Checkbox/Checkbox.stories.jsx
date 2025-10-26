import Checkbox from './Checkbox.vue';

export default {
  title: 'Scuba/Checkbox',
  component: Checkbox,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'boolean',
      description: 'Estado do checkbox (v-model)'
    },
    label: {
      control: 'text',
      description: 'Texto do label'
    },
    labelPosition: {
      control: 'select',
      options: ['left', 'right', 'none'],
      description: 'Posição do label'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do checkbox'
    },
    indeterminate: {
      control: 'boolean',
      description: 'Estado indeterminado (hífen)'
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilitado'
    }
  },
};

// Template base
const Template = (args) => ({
  components: { Checkbox },
  setup() {
    return { args };
  },
  template: '<Checkbox v-bind="args" />',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  modelValue: false,
  label: 'Label',
  labelPosition: 'right',
  size: 'md',
  indeterminate: false,
  disabled: false,
};

// Unchecked
export const Unchecked = Template.bind({});
Unchecked.args = {
  modelValue: false,
  label: 'Label',
  labelPosition: 'right',
  size: 'md',
};

// Checked
export const Checked = Template.bind({});
Checked.args = {
  modelValue: true,
  label: 'Label',
  labelPosition: 'right',
  size: 'md',
};

// Indeterminate
export const Indeterminate = Template.bind({});
Indeterminate.args = {
  modelValue: false,
  label: 'Label',
  labelPosition: 'right',
  size: 'md',
  indeterminate: true,
};

// Disabled Unchecked
export const DisabledUnchecked = Template.bind({});
DisabledUnchecked.args = {
  modelValue: false,
  label: 'Label',
  labelPosition: 'right',
  size: 'md',
  disabled: true,
};

// Disabled Checked
export const DisabledChecked = Template.bind({});
DisabledChecked.args = {
  modelValue: true,
  label: 'Label',
  labelPosition: 'right',
  size: 'md',
  disabled: true,
};

// Disabled Indeterminate
export const DisabledIndeterminate = Template.bind({});
DisabledIndeterminate.args = {
  modelValue: false,
  label: 'Label',
  labelPosition: 'right',
  size: 'md',
  indeterminate: true,
  disabled: true,
};

// Label Left
export const LabelLeft = Template.bind({});
LabelLeft.args = {
  modelValue: false,
  label: 'Label',
  labelPosition: 'left',
  size: 'md',
};

// No Label
export const NoLabel = Template.bind({});
NoLabel.args = {
  modelValue: false,
  label: '',
  labelPosition: 'none',
  size: 'md',
};

// Small Size
export const Small = Template.bind({});
Small.args = {
  modelValue: false,
  label: 'Label',
  labelPosition: 'right',
  size: 'sm',
};

// Large Size
export const Large = Template.bind({});
Large.args = {
  modelValue: false,
  label: 'Label',
  labelPosition: 'right',
  size: 'lg',
};

// All States Matrix
export const AllStates = () => ({
  components: { Checkbox },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Checkbox States</h2>
      
      <!-- Size Headers -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 24px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SMALL -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Small (16px)</h3>
        
        <!-- Unchecked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Unchecked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Checked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Checked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="sm" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="sm" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="sm" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Indeterminate -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Indeterminate</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" indeterminate />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" indeterminate disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" indeterminate style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>
      </div>

      <!-- MEDIUM -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Medium (20px)</h3>
        
        <!-- Unchecked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Unchecked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Checked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Checked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="md" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="md" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="md" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Indeterminate -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Indeterminate</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" indeterminate />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" indeterminate disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" indeterminate style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>
      </div>

      <!-- LARGE -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Large (24px)</h3>
        
        <!-- Unchecked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Unchecked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Checked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Checked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="lg" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="lg" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="lg" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Indeterminate -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Indeterminate</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" indeterminate />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" indeterminate disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" indeterminate style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>
      </div>
    </div>
  `,
});

// Label Positions
export const LabelPositions = () => ({
  components: { Checkbox },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Label Positions</h2>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Label Right (Default)</h3>
          <Checkbox :modelValue="false" label="Label" labelPosition="right" size="md" />
        </div>

        <div>
          <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Label Left</h3>
          <Checkbox :modelValue="false" label="Label" labelPosition="left" size="md" />
        </div>

        <div>
          <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">No Label</h3>
          <Checkbox :modelValue="false" labelPosition="none" size="md" />
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
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td><td style="text-align: right;">#0086cd</td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td><td style="text-align: right;">#0942a1</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td><td style="text-align: right;">#555555</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-dark</code></td><td style="text-align: right;">#0086cd</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">#191919</td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td><td style="text-align: right;">#ffffff</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizes</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Small</strong></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Medium</strong></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Large</strong></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-lg</code></td><td style="text-align: right;">18px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Icons</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">Check</td><td style="text-align: right;"><code>ph-check</code></td></tr>
            <tr><td style="padding: 8px 0;">Minus (Indeterminate)</td><td style="text-align: right;"><code>ph-minus</code></td></tr>
            <tr><td style="padding: 8px 0;">Biblioteca</td><td style="text-align: right;">Phosphor Icons</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">💡 Estados</h3>
        <ul style="color: #6b7280; line-height: 1.8; margin-left: 20px;">
          <li><strong>Unchecked:</strong> Borda cinza, fundo transparente</li>
          <li><strong>Checked:</strong> Fundo azul (#0086cd), ícone check branco</li>
          <li><strong>Indeterminate:</strong> Fundo azul (#0086cd), ícone hífen branco</li>
          <li><strong>Disabled:</strong> Opacidade 50%, cores desabilitadas</li>
          <li><strong>Focus:</strong> Outline azul 3px (#0086cd)</li>
          <li><strong>Hover:</strong> Borda/fundo azul escuro (#0942a1)</li>
        </ul>
      </div>
    </div>
  `,
});
