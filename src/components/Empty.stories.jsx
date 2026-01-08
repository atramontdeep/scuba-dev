import Empty from './Empty/Empty.vue';
import Button from './Button/Button.vue';
import {
  PhFolder,
  PhMagnifyingGlass,
  PhFileX,
  PhCloudSlash,
  PhDatabase,
  PhWarning,
  PhPackage
} from '@phosphor-icons/vue';

export default {
  title: 'Scuba/Empty',
  component: Empty,
  tags: ['autodocs'],
  argTypes: {
    title: {
      control: 'text',
      description: 'Título do estado vazio'
    },
    description: {
      control: 'text',
      description: 'Descrição do estado vazio'
    },
    iconSize: {
      control: 'number',
      description: 'Tamanho do ícone'
    },
    iconWeight: {
      control: 'select',
      options: ['thin', 'light', 'regular', 'bold', 'fill'],
      description: 'Peso do ícone'
    },
    variant: {
      control: 'select',
      options: ['default', 'compact'],
      description: 'Variante do componente'
    }
  },
};

const Template = (args) => ({
  components: { Empty, PhFolder },
  setup() {
    return { args, PhFolder };
  },
  template: '<Empty v-bind="args" :icon="PhFolder" />',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  title: 'Nenhum item encontrado',
  description: 'Não há itens para exibir no momento.',
  iconSize: 64,
  iconWeight: 'regular',
  variant: 'default'
};

// No Data
export const NoData = () => ({
  components: { Empty, PhDatabase },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; min-height: 400px;">
      <Empty
        :icon="PhDatabase"
        title="Nenhum dado disponível"
        description="Não há dados para exibir no momento. Comece adicionando novos itens."
      />
    </div>
  `,
});

// No Search Results
export const NoSearchResults = () => ({
  components: { Empty, PhMagnifyingGlass, Button },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; min-height: 400px;">
      <Empty
        :icon="PhMagnifyingGlass"
        title="Nenhum resultado encontrado"
        description="Não encontramos resultados para sua busca. Tente ajustar os filtros ou termos de pesquisa."
      >
        <template #action>
          <Button variant="primary">Limpar filtros</Button>
        </template>
      </Empty>
    </div>
  `,
});

// Empty PhFolder
export const EmptyFolder = () => ({
  components: { Empty, PhFolder, Button },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; min-height: 400px;">
      <Empty
        :icon="PhFolder"
        title="Pasta vazia"
        description="Esta pasta ainda não possui nenhum arquivo. Adicione arquivos para começar."
      >
        <template #action>
          <Button variant="primary">Adicionar arquivo</Button>
        </template>
      </Empty>
    </div>
  `,
});

// No Files
export const NoFiles = () => ({
  components: { Empty, PhFileX },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; min-height: 400px;">
      <Empty
        :icon="PhFileX"
        :icon-size="80"
        title="Nenhum arquivo"
        description="Você ainda não possui arquivos salvos."
      />
    </div>
  `,
});

// Connection Error
export const ConnectionError = () => ({
  components: { Empty, PhCloudSlash, Button },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; min-height: 400px;">
      <Empty
        :icon="PhCloudSlash"
        title="Erro de conexão"
        description="Não foi possível conectar ao servidor. Verifique sua conexão e tente novamente."
      >
        <template #action>
          <Button variant="primary">Tentar novamente</Button>
        </template>
      </Empty>
    </div>
  `,
});

// PhWarning State
export const WarningState = () => ({
  components: { Empty, PhWarning, Button },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; min-height: 400px;">
      <Empty
        :icon="PhWarning"
        :icon-size="72"
        icon-weight="fill"
        title="Atenção necessária"
        description="Existem pendências que precisam ser resolvidas antes de continuar."
      >
        <template #action>
          <Button variant="primary">Resolver pendências</Button>
        </template>
      </Empty>
    </div>
  `,
});

// Compact Variant
export const CompactVariant = () => ({
  components: { Empty, PhPackage, Button },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
        <Empty
          :icon="PhPackage"
          :icon-size="48"
          variant="compact"
          title="Sem itens"
          description="Adicione itens para visualizar aqui."
        >
          <template #action>
            <Button variant="primary" size="sm">Adicionar</Button>
          </template>
        </Empty>
      </div>
    </div>
  `,
});

// Custom Content
export const CustomContent = () => ({
  components: { Empty, PhFolder, Button },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; min-height: 400px;">
      <Empty :icon="PhFolder">
        <div style="margin-top: 16px;">
          <h3 style="font-size: 20px; font-weight: 600; margin: 0 0 8px 0;">Bem-vindo!</h3>
          <p style="color: #6b7280; margin: 0 0 24px 0;">
            Comece criando seu primeiro projeto ou importando dados existentes.
          </p>
          <div style="display: flex; gap: 12px; justify-content: center;">
            <Button variant="primary">Novo projeto</Button>
            <Button variant="secondary">Importar dados</Button>
          </div>
        </div>
      </Empty>
    </div>
  `,
});

// Use Cases - In Cards
export const InCards = () => ({
  components: { Empty, PhDatabase, PhMagnifyingGlass, PhFileX },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Empty States em Cards</h2>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 24px;">
        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
          <h3 style="margin: 0 0 16px 0; font-size: 16px;">Recentes</h3>
          <Empty
            :icon="PhDatabase"
            :icon-size="48"
            variant="compact"
            title="Sem atividades"
            description="Nenhuma atividade recente."
          />
        </div>

        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
          <h3 style="margin: 0 0 16px 0; font-size: 16px;">Pesquisa</h3>
          <Empty
            :icon="PhMagnifyingGlass"
            :icon-size="48"
            variant="compact"
            title="Sem resultados"
            description="Ajuste sua pesquisa."
          />
        </div>

        <div style="border: 1px solid #e5e7eb; border-radius: 8px; padding: 24px;">
          <h3 style="margin: 0 0 16px 0; font-size: 16px;">Arquivos</h3>
          <Empty
            :icon="PhFileX"
            :icon-size="48"
            variant="compact"
            title="Sem arquivos"
            description="Nenhum arquivo adicionado."
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
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Title</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Description</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-tertiary</code></td><td style="text-align: right;">Icon</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xl</code></td><td style="text-align: right;">20px (title)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px (compact title)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px (description)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px (compact desc)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">24px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xl</code></td><td style="text-align: right;">32px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xl</code></td><td style="text-align: right;">64px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Line Height</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-line-height-tight</code></td><td style="text-align: right;">1.25 (title)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5 (description)</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>No Data:</strong> Quando não há dados para exibir (listas vazias, tabelas vazias)</li>
          <li><strong>No Results:</strong> Quando uma busca ou filtro não retorna resultados</li>
          <li><strong>Empty State:</strong> Estado inicial antes do usuário adicionar conteúdo</li>
          <li><strong>Error State:</strong> Quando ocorre um erro e não é possível exibir conteúdo</li>
          <li>Use ícones relevantes ao contexto (Phosphor Icons)</li>
          <li>Forneça ações claras quando apropriado (botões no slot action)</li>
          <li>Mantenha mensagens curtas e diretas</li>
          <li>Use variante compact em espaços reduzidos (cards, sidebars)</li>
          <li>Centralize vertical e horizontalmente para melhor impacto visual</li>
        </ul>
      </div>
    </div>
  `,
});
