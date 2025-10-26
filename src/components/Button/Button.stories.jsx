import Button from './Button.vue';

export default {
  title: 'Scuba/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['solid', 'outline', 'text'],
      description: 'Variante visual do botão'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do botão'
    },
    label: {
      control: 'text',
      description: 'Texto do botão'
    },
    disabled: {
      control: 'boolean',
      description: 'Estado desabilitado'
    },
    iconLeft: {
      control: 'text',
      description: 'Ícone à esquerda (emoji ou texto)'
    },
    iconRight: {
      control: 'text',
      description: 'Ícone à direita (emoji ou texto)'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Largura total'
    },
    onClick: { action: 'clicked' }
  },
};

// Template base
const Template = (args) => ({
  components: { Button },
  setup() {
    return { args };
  },
  template: '<Button v-bind="args" />',
});

// Stories individuais
export const Solid = Template.bind({});
Solid.args = {
  variant: 'solid',
  size: 'md',
  label: 'Label',
  iconLeft: '⊕',
  iconRight: '⊕',
};

export const Outline = Template.bind({});
Outline.args = {
  variant: 'outline',
  size: 'md',
  label: 'Label',
  iconLeft: '⊕',
  iconRight: '⊕',
};

export const Text = Template.bind({});
Text.args = {
  variant: 'text',
  size: 'md',
  label: 'Label',
  iconLeft: '⊕',
  iconRight: '⊕',
};

// Tamanhos
export const Small = Template.bind({});
Small.args = {
  variant: 'solid',
  size: 'sm',
  label: 'Label',
  iconLeft: '⊕',
  iconRight: '⊕',
};

export const Medium = Template.bind({});
Medium.args = {
  variant: 'solid',
  size: 'md',
  label: 'Label',
  iconLeft: '⊕',
  iconRight: '⊕',
};

export const Large = Template.bind({});
Large.args = {
  variant: 'solid',
  size: 'lg',
  label: 'Label',
  iconLeft: '⊕',
  iconRight: '⊕',
};

// Estados
export const Disabled = Template.bind({});
Disabled.args = {
  variant: 'solid',
  size: 'md',
  label: 'Label',
  iconLeft: '⊕',
  iconRight: '⊕',
  disabled: true,
};

// Matriz de variantes e estados
export const AllVariantsAndStates = () => ({
  components: { Button },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Button Variants & States</h2>
      
      <!-- Header -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 20px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">HOVER</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SOLID -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">SOLID</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="⊕" iconRight="⊕" style="background: var(--semantic-color-primary-600)" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="⊕" iconRight="⊕" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="⊕" iconRight="⊕" style="outline: 2px solid var(--semantic-color-primary-default); outline-offset: 2px;" />
        </div>
      </div>

      <!-- OUTLINE -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">OUTLINE</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="⊕" iconRight="⊕" style="background: var(--context-color-surface-action-hover); border-color: var(--context-color-border-action-hover);" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="⊕" iconRight="⊕" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="⊕" iconRight="⊕" style="border-color: var(--context-color-border-focus); outline: 2px solid var(--context-color-surface-focus-light); outline-offset: 0;" />
        </div>
      </div>

      <!-- TEXT -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">TEXT</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="⊕" iconRight="⊕" style="background: var(--context-color-surface-action-hover);" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="⊕" iconRight="⊕" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="⊕" iconRight="⊕" style="outline: 2px solid var(--context-color-surface-focus-light); outline-offset: 0;" />
        </div>
      </div>

      <!-- Sizes -->
      <h2 style="margin: 48px 0 32px; font-size: 24px; font-weight: 600;">Button Sizes</h2>
      
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; align-items: center;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">SOLID</div>
        <div style="font-weight: 600; text-align: center;">OUTLINE</div>
        <div style="font-weight: 600; text-align: center;">TEXT</div>
        <div></div>
      </div>

      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-top: 20px; align-items: center;">
        <div style="font-weight: 600;">SMALL</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" size="sm" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" size="sm" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" size="sm" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-top: 20px; align-items: center;">
        <div style="font-weight: 600;">MEDIUM</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" size="md" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" size="md" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" size="md" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-top: 20px; align-items: center;">
        <div style="font-weight: 600;">LARGE</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" size="lg" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" size="lg" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" size="lg" label="Label" iconLeft="⊕" iconRight="⊕" />
        </div>
      </div>
    </div>
  `,
});

// Design Tokens usados
export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-700</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-300</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-700</code></td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Context Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-disabled</code></td></tr>
          </table>
        </div>
      </div>
      
      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">💡 Nota</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          Todos os tokens têm fallbacks para garantir compatibilidade. Por exemplo:<br/>
          <code style="background: white; padding: 4px 8px; border-radius: 4px; margin-top: 8px; display: inline-block;">
            var(--semantic-color-primary-500, var(--primitives-color-blue-500, #0086cd))
          </code>
        </p>
      </div>
    </div>
  `,
});
