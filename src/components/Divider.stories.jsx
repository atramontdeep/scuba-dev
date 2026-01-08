import Divider from './Divider/Divider.vue';

export default {
  title: 'Scuba/Divider',
  component: Divider,
  tags: ['autodocs'],
  argTypes: {
    orientation: {
      control: 'select',
      options: ['horizontal', 'vertical'],
      description: 'Orientação do divider'
    },
    textAlign: {
      control: 'select',
      options: ['left', 'center', 'right'],
      description: 'Alinhamento do texto (apenas horizontal)'
    },
    dashed: {
      control: 'boolean',
      description: 'Linha tracejada'
    }
  },
};

const Template = (args) => ({
  components: { Divider },
  setup() {
    return { args };
  },
  template: '<Divider v-bind="args"><template v-if="args.text">{{ args.text }}</template></Divider>',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  orientation: 'horizontal',
  textAlign: 'center',
  dashed: false,
  text: ''
};

// Horizontal
export const Horizontal = () => ({
  components: { Divider },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider />
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  `,
});

// Horizontal com texto
export const WithText = () => ({
  components: { Divider },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider>Texto centralizado</Divider>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  `,
});

// Text alignment
export const TextAlignment = () => ({
  components: { Divider },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3>Esquerda</h3>
      <Divider text-align="left">Seção 1</Divider>
      <p>Conteúdo da seção 1</p>

      <h3 style="margin-top: 32px;">Centro</h3>
      <Divider text-align="center">Seção 2</Divider>
      <p>Conteúdo da seção 2</p>

      <h3 style="margin-top: 32px;">Direita</h3>
      <Divider text-align="right">Seção 3</Divider>
      <p>Conteúdo da seção 3</p>
    </div>
  `,
});

// Dashed
export const Dashed = () => ({
  components: { Divider },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider dashed />
      <p>Sed do eiusmod tempor incididunt.</p>
      <Divider dashed>Com texto</Divider>
      <p>Ut labore et dolore magna aliqua.</p>
    </div>
  `,
});

// Vertical
export const Vertical = () => ({
  components: { Divider },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <span>Texto 1</span>
      <Divider orientation="vertical" />
      <span>Texto 2</span>
      <Divider orientation="vertical" />
      <span>Texto 3</span>
    </div>
  `,
});

// Vertical dashed
export const VerticalDashed = () => ({
  components: { Divider },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <span>Item A</span>
      <Divider orientation="vertical" dashed />
      <span>Item B</span>
      <Divider orientation="vertical" dashed />
      <span>Item C</span>
    </div>
  `,
});

// Use cases
export const UseCases = () => ({
  components: { Divider },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Casos de Uso</h2>

      <div style="margin-bottom: 48px;">
        <h3>Separação de seções</h3>
        <p>Informações do usuário</p>
        <Divider>Configurações</Divider>
        <p>Preferências do sistema</p>
        <Divider>Ações</Divider>
        <button style="padding: 8px 16px;">Salvar</button>
      </div>

      <div style="margin-bottom: 48px;">
        <h3>Navegação inline</h3>
        <div>
          <a href="#" style="color: #0942a1;">Home</a>
          <Divider orientation="vertical" />
          <a href="#" style="color: #0942a1;">Produtos</a>
          <Divider orientation="vertical" />
          <a href="#" style="color: #0942a1;">Sobre</a>
          <Divider orientation="vertical" />
          <a href="#" style="color: #0942a1;">Contato</a>
        </div>
      </div>

      <div>
        <h3>Lista de itens</h3>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="color: #6b7280;">Status:</span>
          <span>Ativo</span>
          <Divider orientation="vertical" />
          <span style="color: #6b7280;">Criado em:</span>
          <span>12/01/2024</span>
          <Divider orientation="vertical" />
          <span style="color: #6b7280;">Autor:</span>
          <span>João Silva</span>
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
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Border color</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Text color</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Horizontal:</strong> Separar seções de conteúdo, formulários, listas</li>
          <li><strong>Vertical:</strong> Separar itens inline, navegação, breadcrumbs</li>
          <li><strong>Com texto:</strong> Adicionar contexto à separação</li>
          <li><strong>Dashed:</strong> Separações menos proeminentes, seções opcionais</li>
          <li>Use com moderação para não poluir visualmente a interface</li>
          <li>Mantenha consistência no uso de solid vs dashed</li>
        </ul>
      </div>
    </div>
  `,
});
