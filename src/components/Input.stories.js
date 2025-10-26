import Input from './Input.vue';

// Lista de ícones Phosphor mais comuns
const PHOSPHOR_ICONS = {
  'Nenhum': '',
  '👤 Usuário': 'ph-user',
  '🔒 Cadeado': 'ph-lock',
  '✉️ Email': 'ph-envelope',
  '📞 Telefone': 'ph-phone',
  '📅 Calendário': 'ph-calendar',
  '🕐 Relógio': 'ph-clock',
  '🔍 Busca': 'ph-magnifying-glass',
  '👁️ Olho': 'ph-eye',
  '👁️‍🗨️ Olho Fechado': 'ph-eye-slash',
  '❤️ Coração': 'ph-heart',
  '⭐ Estrela': 'ph-star',
  '🔔 Sino': 'ph-bell',
  '⚙️ Engrenagem': 'ph-gear',
  '🏠 Casa': 'ph-house',
  '📍 Pin': 'ph-map-pin',
  '🛒 Carrinho': 'ph-shopping-cart',
  '💳 Cartão': 'ph-credit-card',
  '💰 Dólar': 'ph-currency-dollar',
  '🔗 Link': 'ph-link',
  '📄 Arquivo': 'ph-file',
  '📁 Pasta': 'ph-folder',
  '🖼️ Imagem': 'ph-image',
  '🎥 Vídeo': 'ph-video',
  '🎵 Música': 'ph-music-note',
  '✓ Check': 'ph-check',
  '✕ X': 'ph-x',
  '+ Plus': 'ph-plus',
  '− Minus': 'ph-minus',
  '→ Seta Direita': 'ph-arrow-right',
  '← Seta Esquerda': 'ph-arrow-left',
  '↑ Seta Cima': 'ph-arrow-up',
  '↓ Seta Baixo': 'ph-arrow-down',
  'ℹ️ Info': 'ph-info',
  '⚠️ Aviso': 'ph-warning',
  '❓ Pergunta': 'ph-question',
  '@ Arroba': 'ph-at',
  '# Hash': 'ph-hash',
  'Aa Texto': 'ph-text-aa',
  '📎 Anexo': 'ph-paperclip',
  '⬇️ Download': 'ph-download',
  '⬆️ Upload': 'ph-upload',
  '🗑️ Lixeira': 'ph-trash',
  '✏️ Lápis': 'ph-pencil',
  '↗️ Compartilhar': 'ph-share',
};

export default {
  title: 'Scuba/Input',
  component: Input,
  tags: ['autodocs'],
  argTypes: {
    type: {
      control: 'select',
      options: ['text', 'password', 'email', 'number', 'tel', 'url', 'search', 'date', 'time', 'datetime-local', 'textarea'],
      description: 'Tipo do input'
    },
    label: {
      control: 'text',
      description: 'Label do campo'
    },
    placeholder: {
      control: 'text',
      description: 'Placeholder'
    },
    hint: {
      control: 'text',
      description: 'Texto de ajuda'
    },
    error: {
      control: 'text',
      description: 'Mensagem de erro'
    },
    required: {
      control: 'boolean',
      description: 'Campo obrigatório'
    },
    optional: {
      control: 'boolean',
      description: 'Mostrar "opcional"'
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilitado'
    },
    readonly: {
      control: 'boolean',
      description: 'Somente leitura'
    },
    helpText: {
      control: 'text',
      description: 'Texto de ajuda (botão ?)'
    },
    iconLeft: {
      control: 'select',
      options: PHOSPHOR_ICONS,
      description: '🎨 Ícone esquerda'
    },
    iconRight: {
      control: 'select',
      options: PHOSPHOR_ICONS,
      description: '🎨 Ícone direita'
    },
    fullWidth: {
      control: 'boolean',
      description: 'Largura total'
    }
  },
};

// Template base
const Template = (args) => ({
  components: { Input },
  setup() {
    return { args };
  },
  template: '<Input v-bind="args" />',
});

// Playground - Story interativa principal
export const Playground = Template.bind({});
Playground.args = {
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  hint: 'Hint',
  iconLeft: 'ph-lock',
  iconRight: 'ph-eye',
};
Playground.parameters = {
  docs: {
    description: {
      story: '🎨 Use os controles abaixo para testar diferentes combinações de ícones, estados e propriedades. Veja todos os ícones em [phosphoricons.com](https://phosphoricons.com/)'
    }
  }
};

// Text Input
export const Text = Template.bind({});
Text.args = {
  type: 'text',
  label: 'Nome',
  placeholder: 'Digite seu nome',
  hint: 'Campo obrigatório',
  iconLeft: 'ph-user',
};

// Password
export const Password = Template.bind({});
Password.args = {
  type: 'password',
  label: 'Senha',
  placeholder: 'Digite sua senha',
  hint: 'Mínimo 8 caracteres',
  iconLeft: 'ph-lock',
};

// Email
export const Email = Template.bind({});
Email.args = {
  type: 'email',
  label: 'Email',
  placeholder: 'seu@email.com',
  hint: 'Digite um email válido',
  iconLeft: 'ph-envelope',
};

// Phone
export const Phone = Template.bind({});
Phone.args = {
  type: 'tel',
  label: 'Telefone',
  placeholder: '(00) 00000-0000',
  hint: 'Digite seu telefone',
  iconLeft: 'ph-phone',
};

// Search
export const Search = Template.bind({});
Search.args = {
  type: 'search',
  label: 'Buscar',
  placeholder: 'Buscar...',
  hint: 'Digite para buscar',
  iconLeft: 'ph-magnifying-glass',
};

// Number
export const Number = Template.bind({});
Number.args = {
  type: 'number',
  label: 'Quantidade',
  placeholder: '0',
  hint: 'Digite a quantidade',
  iconLeft: 'ph-hash',
  min: 0,
  max: 100,
};

// Date
export const Date = Template.bind({});
Date.args = {
  type: 'date',
  label: 'Data',
  hint: 'Selecione uma data',
  iconLeft: 'ph-calendar',
};

// Time
export const Time = Template.bind({});
Time.args = {
  type: 'time',
  label: 'Horário',
  hint: 'Selecione um horário',
  iconLeft: 'ph-clock',
};

// Textarea
export const Textarea = Template.bind({});
Textarea.args = {
  type: 'textarea',
  label: 'Mensagem',
  placeholder: 'Digite sua mensagem',
  hint: 'Máximo 500 caracteres',
  rows: 4,
  maxlength: 500,
};

// Error State
export const WithError = Template.bind({});
WithError.args = {
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  error: 'Este campo é obrigatório',
  iconLeft: 'ph-lock',
  iconRight: 'ph-eye',
};

// Disabled
export const Disabled = Template.bind({});
Disabled.args = {
  type: 'text',
  label: 'Label',
  placeholder: 'Placeholder',
  hint: 'Hint',
  disabled: true,
  iconLeft: 'ph-lock',
};

// All States Matrix
export const AllStates = () => ({
  components: { Input },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Input States</h2>
      
      <!-- Header -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 24px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">ERROR</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
      </div>

      <!-- Text Input -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Text Input</div>
        <div>
          <Input 
            type="text"
            label="Label"
            placeholder="Placeholder"
            hint="Hint"
            iconLeft="ph-lock"
            iconRight="ph-eye"
          />
        </div>
        <div>
          <Input 
            type="text"
            label="Label"
            placeholder="Placeholder"
            error="Este campo é obrigatório"
            iconLeft="ph-lock"
            iconRight="ph-eye"
          />
        </div>
        <div>
          <Input 
            type="text"
            label="Label"
            placeholder="Placeholder"
            hint="Hint"
            disabled
            iconLeft="ph-lock"
          />
        </div>
      </div>

      <!-- Password -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Password</div>
        <div>
          <Input 
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            hint="Mínimo 8 caracteres"
            iconLeft="ph-lock"
          />
        </div>
        <div>
          <Input 
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            error="Senha muito curta"
            iconLeft="ph-lock"
          />
        </div>
        <div>
          <Input 
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            hint="Mínimo 8 caracteres"
            disabled
            iconLeft="ph-lock"
          />
        </div>
      </div>

      <!-- Email -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Email</div>
        <div>
          <Input 
            type="email"
            label="Email"
            placeholder="seu@email.com"
            hint="Digite um email válido"
            iconLeft="ph-envelope"
          />
        </div>
        <div>
          <Input 
            type="email"
            label="Email"
            placeholder="seu@email.com"
            error="Email inválido"
            iconLeft="ph-envelope"
          />
        </div>
        <div>
          <Input 
            type="email"
            label="Email"
            placeholder="seu@email.com"
            hint="Digite um email válido"
            disabled
            iconLeft="ph-envelope"
          />
        </div>
      </div>

      <!-- Textarea -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Textarea</div>
        <div>
          <Input 
            type="textarea"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            hint="Máximo 500 caracteres"
            :rows="4"
          />
        </div>
        <div>
          <Input 
            type="textarea"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            error="Mensagem muito longa"
            :rows="4"
          />
        </div>
        <div>
          <Input 
            type="textarea"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            hint="Máximo 500 caracteres"
            disabled
            :rows="4"
          />
        </div>
      </div>
    </div>
  `,
});

// All Types
export const AllTypes = () => ({
  components: { Input },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Input Types</h2>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <!-- Text -->
        <Input 
          type="text"
          label="Text"
          placeholder="Digite texto"
          hint="Campo de texto padrão"
          iconLeft="ph-text-aa"
        />

        <!-- Password -->
        <Input 
          type="password"
          label="Password"
          placeholder="Digite sua senha"
          hint="Senha com toggle"
          iconLeft="ph-lock"
        />

        <!-- Email -->
        <Input 
          type="email"
          label="Email"
          placeholder="seu@email.com"
          hint="Digite seu email"
          iconLeft="ph-envelope"
        />

        <!-- Phone -->
        <Input 
          type="tel"
          label="Telefone"
          placeholder="(00) 00000-0000"
          hint="Digite seu telefone"
          iconLeft="ph-phone"
        />

        <!-- Search -->
        <Input 
          type="search"
          label="Buscar"
          placeholder="Buscar..."
          hint="Campo de busca"
          iconLeft="ph-magnifying-glass"
        />

        <!-- URL -->
        <Input 
          type="url"
          label="Website"
          placeholder="https://exemplo.com"
          hint="Digite uma URL"
          iconLeft="ph-link"
        />

        <!-- Number -->
        <Input 
          type="number"
          label="Quantidade"
          placeholder="0"
          hint="Digite um número"
          iconLeft="ph-hash"
          :min="0"
          :max="100"
        />

        <!-- Date -->
        <Input 
          type="date"
          label="Data"
          hint="Selecione uma data"
          iconLeft="ph-calendar"
        />

        <!-- Time -->
        <Input 
          type="time"
          label="Horário"
          hint="Selecione um horário"
          iconLeft="ph-clock"
        />

        <!-- Datetime Local -->
        <Input 
          type="datetime-local"
          label="Data e Hora"
          hint="Selecione data e hora"
          iconLeft="ph-calendar"
        />
      </div>

      <!-- Textarea Full Width -->
      <div style="margin-top: 32px;">
        <Input 
          type="textarea"
          label="Mensagem"
          placeholder="Digite sua mensagem aqui..."
          hint="Campo de texto longo"
          :rows="6"
          :full-width="true"
        />
      </div>
    </div>
  `,
});

// Design Tokens
export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens & Icons</h2>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Phosphor Icons</h3>
          <div style="padding: 20px; background: #f9fafb; border-radius: 8px; margin-bottom: 16px;">
            <p style="font-size: 14px; color: #6b7280; margin-bottom: 12px;">
              Todos os ícones usam a biblioteca <strong>Phosphor Icons</strong>.
            </p>
            <p style="font-size: 14px; color: #6b7280; margin-bottom: 12px;">
              Para usar, adicione <code style="background: white; padding: 2px 6px; border-radius: 4px;">iconLeft="ph-nome"</code>
            </p>
            <a 
              href="https://phosphoricons.com/" 
              target="_blank" 
              style="
                display: inline-block;
                padding: 8px 16px;
                background: #0086cd;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                font-size: 14px;
                font-weight: 600;
              "
            >
              Ver todos os ícones →
            </a>
          </div>

          <h4 style="font-size: 16px; font-weight: 600; margin: 20px 0 12px;">Ícones Mais Usados</h4>
          <table style="width: 100%; font-size: 13px;">
            <tr><td style="padding: 6px 0;"><code>ph-user</code></td><td>👤 Usuário</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-lock</code></td><td>🔒 Cadeado</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-envelope</code></td><td>✉️ Email</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-phone</code></td><td>📞 Telefone</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-calendar</code></td><td>📅 Calendário</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-clock</code></td><td>🕐 Relógio</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-magnifying-glass</code></td><td>🔍 Busca</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-eye</code></td><td>👁️ Olho</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Design Tokens</h3>
          <table style="width: 100%; font-size: 13px;">
            <tr style="border-bottom: 1px solid #e5e7eb;"><th style="text-align: left; padding: 8px 0;">Token</th><th style="text-align: right; padding: 8px 0;">Valor</th></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td><td style="text-align: right;">#eeeeee</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td><td style="text-align: right;">#0086cd</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
          </table>
        </div>
      </div>
    </div>
  `,
});
