import CardHistory from './CardHistory/CardHistory.vue';

export default {
  title: 'Scuba/CardHistory',
  component: CardHistory,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: [
        'respondeu',
        'enviou-para-ajuste-validacao',
        'validou',
        'enviou-para-ajuste-auditoria',
        'aprovou'
      ],
      description: 'Status da ação (define o verbo e a cor da borda)',
      table: {
        type: { summary: 'string' },
        defaultValue: { summary: 'respondeu' }
      }
    },
    userName: {
      control: 'text',
      description: 'Nome do usuário que realizou a ação'
    },
    indicatorItem: {
      control: 'text',
      description: 'Item do indicador relacionado à ação'
    }
  }
};

// Template base
const Template = (args) => ({
  components: { CardHistory },
  setup() {
    return { args };
  },
  template: '<CardHistory v-bind="args" />',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  status: 'respondeu',
  userName: 'Natálio Sousa',
  indicatorItem: 'GRI.v2 304-1.a'
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Use os controles abaixo para testar diferentes configurações do CardHistory.'
    }
  }
};

// Respondeu
export const Respondeu = Template.bind({});
Respondeu.args = {
  status: 'respondeu',
  userName: 'Maria da Silva',
  indicatorItem: 'GRI.v2 302-1'
};

// Enviou para ajuste de validação
export const EnviouParaAjusteValidacao = Template.bind({});
EnviouParaAjusteValidacao.args = {
  status: 'enviou-para-ajuste-validacao',
  userName: 'José Mendes',
  indicatorItem: 'GRI.v2 302-1'
};

// Validou
export const Validou = Template.bind({});
Validou.args = {
  status: 'validou',
  userName: 'Natálio Sousa',
  indicatorItem: 'GRI.v2 304-1.a'
};

// Enviou para ajuste de auditoria
export const EnviouParaAjusteAuditoria = Template.bind({});
EnviouParaAjusteAuditoria.args = {
  status: 'enviou-para-ajuste-auditoria',
  userName: 'Carlos Santos',
  indicatorItem: 'SASB EM-MD-160a.1'
};

// Aprovou
export const Aprovou = Template.bind({});
Aprovou.args = {
  status: 'aprovou',
  userName: 'Rafael Almeida',
  indicatorItem: 'GRI.v2 305-2.a'
};

// Showcase com todos os estados
export const Showcase = () => ({
  components: { CardHistory },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">CardHistory - Todas as Variações</h2>

      <div style="display: flex; flex-direction: column; gap: 32px; max-width: 600px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Respondeu</h3>
          <CardHistory
            status="respondeu"
            userName="Maria da Silva"
            indicatorItem="GRI.v2 302-1"
          />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Enviou para ajuste de validação</h3>
          <CardHistory
            status="enviou-para-ajuste-validacao"
            userName="José Mendes"
            indicatorItem="GRI.v2 302-1"
          />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Validou</h3>
          <CardHistory
            status="validou"
            userName="Natálio Sousa"
            indicatorItem="GRI.v2 304-1.a"
          />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Enviou para ajuste de auditoria</h3>
          <CardHistory
            status="enviou-para-ajuste-auditoria"
            userName="Carlos Santos"
            indicatorItem="SASB EM-MD-160a.1"
          />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Aprovou</h3>
          <CardHistory
            status="aprovou"
            userName="Rafael Almeida"
            indicatorItem="GRI.v2 305-2.a"
          />
        </div>
      </div>
    </div>
  `,
});

// Lista de atividades (simulando a imagem)
export const ListaDeAtividades = () => ({
  components: { CardHistory },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="max-width: 600px;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 32px;">
          <h2 style="font-size: 24px; font-weight: 600; color: #1F2937;">Últimas atividades</h2>
          <a href="#" style="font-size: 14px; color: #3B82F6; text-decoration: underline;">Histórico</a>
        </div>

        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 16px; font-weight: 500;">2 de novembro</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <CardHistory
                status="validou"
                userName="Natálio Sousa"
                indicatorItem="GRI.v2 304-1.a"
              />
              <CardHistory
                status="enviou-para-ajuste-validacao"
                userName="José Mendes"
                indicatorItem="GRI.v2 302-1"
              />
              <CardHistory
                status="respondeu"
                userName="Maria da Silva"
                indicatorItem="GRI.v2 302-1"
              />
              <CardHistory
                status="aprovou"
                userName="Rafael Almeida"
                indicatorItem="GRI.v2 305-2.a"
              />
            </div>
          </div>

          <div>
            <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 16px; font-weight: 500;">1 de novembro</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <CardHistory
                status="validou"
                userName="Maria Oliveira"
                indicatorItem="GRI.v2 302-1.c"
              />
              <CardHistory
                status="enviou-para-ajuste-auditoria"
                userName="Carlos Santos"
                indicatorItem="SASB EM-MD-160a.1"
              />
              <CardHistory
                status="validou"
                userName="Natálio Sousa"
                indicatorItem="GRI.v2 305-2.a"
              />
            </div>
          </div>
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
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Cores de Status</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Respondido</strong></td><td><code>--semantic-color-status-answered</code></td></tr>
            <tr><td style="padding: 8px 0;"><strong>Em ajuste (validação)</strong></td><td><code>--semantic-color-status-adjusting</code></td></tr>
            <tr><td style="padding: 8px 0;"><strong>Validado</strong></td><td><code>--semantic-color-status-validating</code></td></tr>
            <tr><td style="padding: 8px 0;"><strong>Em ajuste (auditoria)</strong></td><td><code>--semantic-color-status-adjusting-auditing</code></td></tr>
            <tr><td style="padding: 8px 0;"><strong>Aprovado</strong></td><td><code>--semantic-color-status-approved</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-regular</code></td><td style="text-align: right;">400</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Texto ação</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Indicador</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Espaçamento e Layout</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">Largura da borda</td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;">Distância do texto</td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;">Border radius</td><td style="text-align: right;">pill</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Mapeamento Verbo → Status</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>respondeu</strong></td><td>→ Respondido</td></tr>
            <tr><td style="padding: 8px 0;"><strong>enviou p/ ajuste validação</strong></td><td>→ Em ajuste (1º)</td></tr>
            <tr><td style="padding: 8px 0;"><strong>validou</strong></td><td>→ Validado</td></tr>
            <tr><td style="padding: 8px 0;"><strong>enviou p/ ajuste auditoria</strong></td><td>→ Em ajuste (2º)</td></tr>
            <tr><td style="padding: 8px 0;"><strong>aprovou</strong></td><td>→ Aprovado</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Estrutura do Componente</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Borda colorida à esquerda (8px, pill radius)</li>
          <li>Texto descritivo com nome do usuário e verbo (regular, secondary)</li>
          <li>Item do indicador em quebra de linha (semibold, primary)</li>
          <li>Espaçamento de 16px entre borda e conteúdo</li>
        </ul>
      </div>
    </div>
  `,
});
