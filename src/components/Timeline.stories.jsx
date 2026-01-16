import Timeline from './Timeline/Timeline.vue';

export default {
  title: 'Scuba/Timeline',
  component: Timeline,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título da timeline'
    },
    linkText: {
      control: 'text',
      description: 'Texto do link no cabeçalho'
    },
    linkHref: {
      control: 'text',
      description: 'URL do link no cabeçalho'
    },
    timelineGroups: {
      control: 'object',
      description: 'Array de grupos de atividades agrupadas por data'
    }
  }
};

// Dados de exemplo
const sampleTimelineGroups = [
  {
    date: '2 de novembro',
    items: [
      {
        status: 'validou',
        userName: 'Natálio Sousa',
        indicatorItem: 'GRI.v2 304-1.a'
      },
      {
        status: 'enviou-para-ajuste-validacao',
        userName: 'José Mendes',
        indicatorItem: 'GRI.v2 302-1'
      },
      {
        status: 'respondeu',
        userName: 'Maria da Silva',
        indicatorItem: 'GRI.v2 302-1'
      },
      {
        status: 'aprovou',
        userName: 'Rafael Almeida',
        indicatorItem: 'GRI.v2 305-2.a'
      }
    ]
  },
  {
    date: '1 de novembro',
    items: [
      {
        status: 'validou',
        userName: 'Maria Oliveira',
        indicatorItem: 'GRI.v2 302-1.c'
      },
      {
        status: 'enviou-para-ajuste-auditoria',
        userName: 'Carlos Santos',
        indicatorItem: 'SASB EM-MD-160a.1'
      },
      {
        status: 'validou',
        userName: 'Natálio Sousa',
        indicatorItem: 'GRI.v2 305-2.a'
      }
    ]
  },
  {
    date: '31 de outubro',
    items: [
      {
        status: 'respondeu',
        userName: 'Ana Paula',
        indicatorItem: 'GRI.v2 401-1'
      },
      {
        status: 'aprovou',
        userName: 'João Silva',
        indicatorItem: 'GRI.v2 403-2'
      }
    ]
  }
];

const Template = (args) => ({
  components: { Timeline },
  setup() {
    return { args };
  },
  template: '<Timeline v-bind="args" />',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  title: 'Últimas atividades',
  linkText: 'Histórico',
  linkHref: '#',
  timelineGroups: sampleTimelineGroups
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Use os controles abaixo para testar diferentes configurações da Timeline.'
    }
  }
};

// Sem link
export const SemLink = Template.bind({});
SemLink.args = {
  title: 'Últimas atividades',
  linkText: '',
  linkHref: '',
  timelineGroups: sampleTimelineGroups
};

// Título customizado
export const TituloCustomizado = Template.bind({});
TituloCustomizado.args = {
  title: 'Histórico de mudanças',
  linkText: 'Ver tudo',
  linkHref: '#',
  timelineGroups: sampleTimelineGroups
};

// Poucos itens
export const PoucosItens = Template.bind({});
PoucosItens.args = {
  title: 'Últimas atividades',
  linkText: 'Histórico',
  linkHref: '#',
  timelineGroups: [
    {
      date: '2 de novembro',
      items: [
        {
          status: 'validou',
          userName: 'Natálio Sousa',
          indicatorItem: 'GRI.v2 304-1.a'
        },
        {
          status: 'aprovou',
          userName: 'Rafael Almeida',
          indicatorItem: 'GRI.v2 305-2.a'
        }
      ]
    }
  ]
};

// Muitos itens (com scroll)
export const MuitosItens = Template.bind({});
MuitosItens.args = {
  title: 'Últimas atividades',
  linkText: 'Histórico',
  linkHref: '#',
  timelineGroups: [
    {
      date: '3 de novembro',
      items: [
        {
          status: 'validou',
          userName: 'Natálio Sousa',
          indicatorItem: 'GRI.v2 304-1.a'
        },
        {
          status: 'enviou-para-ajuste-validacao',
          userName: 'José Mendes',
          indicatorItem: 'GRI.v2 302-1'
        },
        {
          status: 'respondeu',
          userName: 'Maria da Silva',
          indicatorItem: 'GRI.v2 302-1'
        }
      ]
    },
    {
      date: '2 de novembro',
      items: [
        {
          status: 'validou',
          userName: 'Natálio Sousa',
          indicatorItem: 'GRI.v2 304-1.a'
        },
        {
          status: 'enviou-para-ajuste-validacao',
          userName: 'José Mendes',
          indicatorItem: 'GRI.v2 302-1'
        },
        {
          status: 'respondeu',
          userName: 'Maria da Silva',
          indicatorItem: 'GRI.v2 302-1'
        },
        {
          status: 'aprovou',
          userName: 'Rafael Almeida',
          indicatorItem: 'GRI.v2 305-2.a'
        }
      ]
    },
    {
      date: '1 de novembro',
      items: [
        {
          status: 'validou',
          userName: 'Maria Oliveira',
          indicatorItem: 'GRI.v2 302-1.c'
        },
        {
          status: 'enviou-para-ajuste-auditoria',
          userName: 'Carlos Santos',
          indicatorItem: 'SASB EM-MD-160a.1'
        },
        {
          status: 'validou',
          userName: 'Natálio Sousa',
          indicatorItem: 'GRI.v2 305-2.a'
        }
      ]
    },
    {
      date: '31 de outubro',
      items: [
        {
          status: 'respondeu',
          userName: 'Ana Paula',
          indicatorItem: 'GRI.v2 401-1'
        },
        {
          status: 'aprovou',
          userName: 'João Silva',
          indicatorItem: 'GRI.v2 403-2'
        },
        {
          status: 'validou',
          userName: 'Pedro Santos',
          indicatorItem: 'GRI.v2 404-1'
        }
      ]
    },
    {
      date: '30 de outubro',
      items: [
        {
          status: 'respondeu',
          userName: 'Carla Souza',
          indicatorItem: 'GRI.v2 405-1'
        },
        {
          status: 'enviou-para-ajuste-validacao',
          userName: 'Marcos Lima',
          indicatorItem: 'GRI.v2 406-1'
        }
      ]
    }
  ]
};

// Demonstração em container fixo (como na imagem)
export const EmContainerFixo = () => ({
  components: { Timeline },
  setup() {
    return {
      timelineGroups: sampleTimelineGroups
    };
  },
  template: `
    <div style="height: 600px; padding: 20px; background: #f3f4f6;">
      <Timeline
        title="Últimas atividades"
        linkText="Histórico"
        linkHref="#"
        :timelineGroups="timelineGroups"
      />
    </div>
  `,
});

// Showcase completo
export const Showcase = () => ({
  components: { Timeline },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; background: #f9fafb;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Timeline - Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(344px, 1fr)); gap: 40px;">
        <!-- Timeline padrão -->
        <div style="height: 600px; background: white; border-radius: 8px; padding: 20px;">
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Timeline Padrão</h3>
          <Timeline
            title="Últimas atividades"
            linkText="Histórico"
            linkHref="#"
            :timelineGroups="${JSON.stringify(sampleTimelineGroups)}"
          />
        </div>

        <!-- Timeline sem link -->
        <div style="height: 600px; background: white; border-radius: 8px; padding: 20px;">
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Sem Link</h3>
          <Timeline
            title="Últimas atividades"
            linkText=""
            linkHref=""
            :timelineGroups="${JSON.stringify(sampleTimelineGroups)}"
          />
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
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Dimensões</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">Largura fixa</td><td style="text-align: right;">344px</td></tr>
            <tr><td style="padding: 8px 0;">Altura</td><td style="text-align: right;">100% (container)</td></tr>
            <tr><td style="padding: 8px 0;">Scroll</td><td style="text-align: right;">vertical (auto)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography - Título</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xl</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Cor texto</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography - Link</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td><td style="text-align: right;">Cor link</td></tr>
            <tr><td style="padding: 8px 0;">text-decoration</td><td style="text-align: right;">underline</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography - Data</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Cor texto</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Espaçamento</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">Gap entre grupos</td><td style="text-align: right;"><code>--spacing-lg</code></td></tr>
            <tr><td style="padding: 8px 0;">Gap entre itens</td><td style="text-align: right;"><code>--spacing-xs</code></td></tr>
            <tr><td style="padding: 8px 0;">Padding lateral</td><td style="text-align: right;"><code>--spacing-md</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Scrollbar</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">Largura</td><td style="text-align: right;">6px</td></tr>
            <tr><td style="padding: 8px 0;">Track</td><td style="text-align: right;"><code>--context-color-surface-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;">Thumb</td><td style="text-align: right;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;">Border radius</td><td style="text-align: right;">pill</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Estrutura do Componente</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Largura fixa de 344px</li>
          <li>Altura 100% do container pai</li>
          <li>Header com título e link opcional (flex space-between)</li>
          <li>Content com scroll vertical automático</li>
          <li>Grupos organizados por data</li>
          <li>Cada grupo contém múltiplos CardHistory</li>
          <li>Scrollbar customizada para melhor aparência</li>
          <li>Usa CardHistory component para os itens</li>
        </ul>
      </div>
    </div>
  `,
});
