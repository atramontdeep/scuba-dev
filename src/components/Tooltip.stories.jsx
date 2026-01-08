import Tooltip from './Tooltip/Tooltip.vue';
import Button from './Button/Button.vue';

export default {
  title: 'Scuba/Tooltip',
  component: Tooltip,
  tags: ['autodocs'],
  argTypes: {
    content: {
      control: 'text',
      description: 'Conteúdo do tooltip'
    },
    position: {
      control: 'select',
      options: ['top', 'bottom', 'left', 'right'],
      description: 'Posição do tooltip'
    },
    variant: {
      control: 'select',
      options: ['dark', 'light'],
      description: 'Variante visual'
    },
    trigger: {
      control: 'select',
      options: ['hover', 'click', 'focus', 'manual'],
      description: 'Modo de ativação'
    },
    showArrow: {
      control: 'boolean',
      description: 'Mostrar seta'
    },
    delay: {
      control: 'number',
      description: 'Delay para exibir (ms)'
    },
    offset: {
      control: 'number',
      description: 'Distância do elemento (px)'
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilitar tooltip'
    },
    maxWidth: {
      control: 'text',
      description: 'Largura máxima'
    },
  },
};

// Template base
const Template = (args) => ({
  components: { Tooltip, Button },
  setup() {
    return { args };
  },
  template: `
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  `,
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  content: 'Este é um tooltip de exemplo',
  position: 'top',
  variant: 'dark',
  trigger: 'hover',
  showArrow: true,
  delay: 200,
  offset: 8,
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Use os controles abaixo para testar diferentes configurações do tooltip.'
    }
  }
};

// Posições
export const Top = Template.bind({});
Top.args = {
  content: 'Tooltip no topo',
  position: 'top',
  variant: 'dark',
};

export const Bottom = Template.bind({});
Bottom.args = {
  content: 'Tooltip embaixo',
  position: 'bottom',
  variant: 'dark',
};

export const Left = Template.bind({});
Left.args = {
  content: 'Tooltip à esquerda',
  position: 'left',
  variant: 'dark',
};

export const Right = Template.bind({});
Right.args = {
  content: 'Tooltip à direita',
  position: 'right',
  variant: 'dark',
};

// Variantes
export const Dark = Template.bind({});
Dark.args = {
  content: 'Tooltip escuro (padrão)',
  position: 'top',
  variant: 'dark',
};

export const Light = Template.bind({});
Light.args = {
  content: 'Tooltip claro',
  position: 'top',
  variant: 'light',
};

// Triggers
export const HoverTrigger = Template.bind({});
HoverTrigger.args = {
  content: 'Mostrado ao passar o mouse',
  position: 'top',
  trigger: 'hover',
};

export const ClickTrigger = Template.bind({});
ClickTrigger.args = {
  content: 'Mostrado ao clicar',
  position: 'top',
  trigger: 'click',
};

export const FocusTrigger = Template.bind({});
FocusTrigger.args = {
  content: 'Mostrado ao focar',
  position: 'top',
  trigger: 'focus',
};

// Sem seta
export const NoArrow = Template.bind({});
NoArrow.args = {
  content: 'Tooltip sem seta',
  position: 'top',
  variant: 'dark',
  showArrow: false,
};

// Texto longo
export const LongText = Template.bind({});
LongText.args = {
  content: 'Este é um tooltip com um texto muito longo que demonstra como o componente lida com conteúdo extenso. Ele tem largura máxima configurável.',
  position: 'top',
  variant: 'dark',
  maxWidth: '250px',
};

// Desabilitado
export const Disabled = Template.bind({});
Disabled.args = {
  content: 'Este tooltip não será mostrado',
  position: 'top',
  variant: 'dark',
  disabled: true,
};

// Todas as posições
export const AllPositions = () => ({
  components: { Tooltip, Button },
  template: `
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Positions</h2>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Top</h3>
          <Tooltip content="Tooltip no topo" position="top">
            <Button variant="solid" label="Top" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Bottom</h3>
          <Tooltip content="Tooltip embaixo" position="bottom">
            <Button variant="solid" label="Bottom" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Left</h3>
          <Tooltip content="Tooltip à esquerda" position="left">
            <Button variant="solid" label="Left" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Right</h3>
          <Tooltip content="Tooltip à direita" position="right">
            <Button variant="solid" label="Right" size="sm" />
          </Tooltip>
        </div>
      </div>
    </div>
  `,
});

// Variantes Dark e Light
export const Variants = () => ({
  components: { Tooltip, Button },
  template: `
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Variants</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Dark (Default)</h3>
          <Tooltip content="Tooltip escuro" variant="dark" position="top">
            <Button variant="solid" label="Dark Tooltip" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Light</h3>
          <Tooltip content="Tooltip claro" variant="light" position="top">
            <Button variant="solid" label="Light Tooltip" />
          </Tooltip>
        </div>
      </div>
    </div>
  `,
});

// Tipos de trigger
export const Triggers = () => ({
  components: { Tooltip, Button },
  template: `
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Triggers</h2>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Hover (Default)</h3>
          <Tooltip content="Mostrado ao passar o mouse" trigger="hover" position="top">
            <Button variant="outline" label="Hover Me" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Click</h3>
          <Tooltip content="Mostrado ao clicar" trigger="click" position="top">
            <Button variant="outline" label="Click Me" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Focus</h3>
          <Tooltip content="Mostrado ao focar (Tab)" trigger="focus" position="top">
            <Button variant="outline" label="Focus Me" />
          </Tooltip>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <p style="color: #6b7280; line-height: 1.6; font-size: 14px;">
          <strong>Hover:</strong> Mostra ao passar o mouse<br/>
          <strong>Click:</strong> Mostra/esconde ao clicar<br/>
          <strong>Focus:</strong> Mostra quando o elemento recebe foco (útil para acessibilidade)
        </p>
      </div>
    </div>
  `,
});

// Com e sem seta
export const ArrowOptions = () => ({
  components: { Tooltip, Button },
  template: `
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Arrow</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Com Seta (Default)</h3>
          <Tooltip content="Tooltip com seta" :showArrow="true" position="top">
            <Button variant="solid" label="With Arrow" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Sem Seta</h3>
          <Tooltip content="Tooltip sem seta" :showArrow="false" position="top">
            <Button variant="solid" label="No Arrow" />
          </Tooltip>
        </div>
      </div>
    </div>
  `,
});

// Exemplo com ícone
export const WithIcon = () => ({
  components: { Tooltip },
  template: `
    <div style="padding: 80px; font-family: Poppins, sans-serif; display: flex; justify-content: center;">
      <Tooltip content="Clique para mais informações" position="right">
        <button style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--semantic-color-primary-500);
          color: white;
          border: none;
          cursor: pointer;
          font-size: 18px;
        ">
          <i class="ph ph-info"></i>
        </button>
      </Tooltip>
    </div>
  `,
});

// Exemplo com texto customizado
export const CustomContent = () => ({
  components: { Tooltip, Button },
  template: `
    <div style="padding: 80px; font-family: Poppins, sans-serif; display: flex; justify-content: center;">
      <Tooltip position="top" maxWidth="300px">
        <template #content>
          <div style="text-align: left;">
            <div style="font-weight: 600; margin-bottom: 4px;">Título do Tooltip</div>
            <div style="font-size: 12px; opacity: 0.9;">
              Este tooltip usa um slot customizado para conteúdo mais complexo.
            </div>
          </div>
        </template>
        <Button variant="solid" label="Custom Content" />
      </Tooltip>
    </div>
  `,
});

// Showcase completo
export const Showcase = () => ({
  components: { Tooltip, Button },
  template: `
    <div style="padding: 60px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Tooltip Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 60px; margin-bottom: 60px;">
        <!-- Top Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Top + Dark</div>
          <Tooltip content="Tooltip no topo escuro" position="top" variant="dark">
            <Button variant="solid" size="sm" label="Top" />
          </Tooltip>
        </div>

        <!-- Top Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Top + Light</div>
          <Tooltip content="Tooltip no topo claro" position="top" variant="light">
            <Button variant="solid" size="sm" label="Top" />
          </Tooltip>
        </div>

        <!-- Bottom Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Bottom + Dark</div>
          <Tooltip content="Tooltip embaixo escuro" position="bottom" variant="dark">
            <Button variant="solid" size="sm" label="Bottom" />
          </Tooltip>
        </div>

        <!-- Bottom Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Bottom + Light</div>
          <Tooltip content="Tooltip embaixo claro" position="bottom" variant="light">
            <Button variant="solid" size="sm" label="Bottom" />
          </Tooltip>
        </div>

        <!-- Left Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Left + Dark</div>
          <Tooltip content="Tooltip à esquerda escuro" position="left" variant="dark">
            <Button variant="solid" size="sm" label="Left" />
          </Tooltip>
        </div>

        <!-- Left Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Left + Light</div>
          <Tooltip content="Tooltip à esquerda claro" position="left" variant="light">
            <Button variant="solid" size="sm" label="Left" />
          </Tooltip>
        </div>

        <!-- Right Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Right + Dark</div>
          <Tooltip content="Tooltip à direita escuro" position="right" variant="dark">
            <Button variant="solid" size="sm" label="Right" />
          </Tooltip>
        </div>

        <!-- Right Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Right + Light</div>
          <Tooltip content="Tooltip à direita claro" position="right" variant="light">
            <Button variant="solid" size="sm" label="Right" />
          </Tooltip>
        </div>

        <!-- Click Trigger -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Click Trigger</div>
          <Tooltip content="Clique para alternar" position="top" trigger="click">
            <Button variant="outline" size="sm" label="Click" />
          </Tooltip>
        </div>

        <!-- No Arrow -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Sem Seta</div>
          <Tooltip content="Tooltip sem seta" position="top" :showArrow="false">
            <Button variant="outline" size="sm" label="No Arrow" />
          </Tooltip>
        </div>

        <!-- Long Text -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Texto Longo</div>
          <Tooltip content="Este é um tooltip com texto muito longo que demonstra quebra de linha" position="top" maxWidth="150px">
            <Button variant="outline" size="sm" label="Long Text" />
          </Tooltip>
        </div>

        <!-- Icon Button -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Com Ícone</div>
          <Tooltip content="Informação adicional" position="top">
            <button style="
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: var(--semantic-color-primary-500);
              color: white;
              border: none;
              cursor: pointer;
              font-size: 18px;
            ">
              <i class="ph ph-info"></i>
            </button>
          </Tooltip>
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
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-inverted</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-inverted</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--shadow-md</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-fast</code></td><td style="text-align: right;">150ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--z-index-tooltip</code></td><td style="text-align: right;">1070</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa <code>role="tooltip"</code> para identificação semântica</li>
          <li>Atributo <code>aria-hidden</code> gerenciado dinamicamente</li>
          <li>Suporte a trigger por <code>focus</code> para navegação por teclado</li>
          <li>Posicionamento automático para evitar sair da viewport</li>
          <li>z-index mais alto (1070) para garantir visibilidade</li>
        </ul>
      </div>
    </div>
  `,
});
