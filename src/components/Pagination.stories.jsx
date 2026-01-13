import Pagination from './Pagination/Pagination.vue';
import { ref } from 'vue';

export default {
  title: 'Scuba/Pagination',
  component: Pagination,
  tags: ['autodocs'],
  argTypes: {
    modelValue: {
      control: 'number',
      description: 'Página atual (v-model)'
    },
    totalPages: {
      control: 'number',
      description: 'Total de páginas'
    },
    siblingCount: {
      control: 'number',
      description: 'Número de páginas vizinhas ao redor da página atual'
    },
    boundaryCount: {
      control: 'number',
      description: 'Número de páginas no início e fim'
    },
    showFirstLast: {
      control: 'boolean',
      description: 'Mostrar botões primeira/última página'
    },
    showPageInput: {
      control: 'boolean',
      description: 'Mostrar input para ir para página'
    },
    showPageInfo: {
      control: 'boolean',
      description: 'Mostrar informação de página'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho da paginação'
    },
    totalItems: {
      control: 'number',
      description: 'Total de itens (para info de página)'
    },
    itemsPerPage: {
      control: 'number',
      description: 'Itens por página'
    },
    onChange: { action: 'changed' }
  },
};

// Template base com reatividade
const Template = (args) => ({
  components: { Pagination },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = (page) => {
      console.log('Page changed to:', page);
    };
    return { currentPage, args, handleChange };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  totalPages: 10,
  totalItems: 237,
  itemsPerPage: 25,
  siblingCount: 1,
  boundaryCount: 1,
  showFirstLast: true,
  showPageInfo: true,
  size: 'md',
};
Playground.parameters = {
  docs: {
    description: {
      story: 'Use os controles abaixo para testar diferentes configurações da paginação.'
    }
  }
};

// Basic
export const Basic = Template.bind({});
Basic.args = {
  totalPages: 10,
  showFirstLast: true,
};

// Poucas páginas
export const FewPages = Template.bind({});
FewPages.args = {
  totalPages: 5,
  showFirstLast: true,
};

// Muitas páginas
export const ManyPages = Template.bind({});
ManyPages.args = {
  totalPages: 100,
  showFirstLast: true,
};

// Com page input
export const WithPageInput = Template.bind({});
WithPageInput.args = {
  totalPages: 20,
  showFirstLast: true,
  showPageInput: true,
};

// Com page info
export const WithPageInfo = Template.bind({});
WithPageInfo.args = {
  totalPages: 10,
  showFirstLast: true,
  showPageInfo: true,
};

// Com page info e total items
export const WithTotalItems = Template.bind({});
WithTotalItems.args = {
  totalPages: 10,
  totalItems: 237,
  itemsPerPage: 25,
  showFirstLast: true,
  showPageInfo: true,
};

// Sem botões first/last
export const WithoutFirstLast = Template.bind({});
WithoutFirstLast.args = {
  totalPages: 10,
  showFirstLast: false,
};

// Tamanhos
export const Small = Template.bind({});
Small.args = {
  totalPages: 10,
  size: 'sm',
  showFirstLast: true,
};

export const Medium = Template.bind({});
Medium.args = {
  totalPages: 10,
  size: 'md',
  showFirstLast: true,
};

export const Large = Template.bind({});
Large.args = {
  totalPages: 10,
  size: 'lg',
  showFirstLast: true,
};

// Sibling count variations
export const SiblingCount0 = Template.bind({});
SiblingCount0.args = {
  totalPages: 20,
  siblingCount: 0,
  boundaryCount: 1,
  showFirstLast: true,
};

export const SiblingCount1 = Template.bind({});
SiblingCount1.args = {
  totalPages: 20,
  siblingCount: 1,
  boundaryCount: 1,
  showFirstLast: true,
};

export const SiblingCount2 = Template.bind({});
SiblingCount2.args = {
  totalPages: 20,
  siblingCount: 2,
  boundaryCount: 1,
  showFirstLast: true,
};

// Boundary count variations
export const BoundaryCount1 = Template.bind({});
BoundaryCount1.args = {
  totalPages: 20,
  siblingCount: 1,
  boundaryCount: 1,
  showFirstLast: true,
};

export const BoundaryCount2 = Template.bind({});
BoundaryCount2.args = {
  totalPages: 20,
  siblingCount: 1,
  boundaryCount: 2,
  showFirstLast: true,
};

// Completo com todas as features
export const Complete = Template.bind({});
Complete.args = {
  totalPages: 50,
  totalItems: 1234,
  itemsPerPage: 25,
  siblingCount: 1,
  boundaryCount: 1,
  showFirstLast: true,
  showPageInput: true,
  showPageInfo: true,
  size: 'md',
};

// Showcase de tamanhos
export const AllSizes = () => ({
  components: { Pagination },
  setup() {
    const page1 = ref(5);
    const page2 = ref(5);
    const page3 = ref(5);
    return { page1, page2, page3 };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Sizes</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Small</h3>
          <Pagination v-model="page1" :totalPages="10" size="sm" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Medium (Default)</h3>
          <Pagination v-model="page2" :totalPages="10" size="md" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Large</h3>
          <Pagination v-model="page3" :totalPages="10" size="lg" />
        </div>
      </div>
    </div>
  `,
});

// Showcase de features
export const AllFeatures = () => ({
  components: { Pagination },
  setup() {
    const page1 = ref(5);
    const page2 = ref(5);
    const page3 = ref(5);
    const page4 = ref(5);
    return { page1, page2, page3, page4 };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Features</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Basic</h3>
          <Pagination v-model="page1" :totalPages="10" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">With Page Input</h3>
          <Pagination v-model="page2" :totalPages="20" showPageInput />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">With Page PhInfo</h3>
          <Pagination v-model="page3" :totalPages="10" showPageInfo />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Complete (All Features)</h3>
          <Pagination
            v-model="page4"
            :totalPages="20"
            :totalItems="487"
            :itemsPerPage="25"
            showPageInput
            showPageInfo
          />
        </div>
      </div>
    </div>
  `,
});

// Showcase de configurações
export const Configurations = () => ({
  components: { Pagination },
  setup() {
    const page1 = ref(10);
    const page2 = ref(10);
    const page3 = ref(10);
    const page4 = ref(10);
    return { page1, page2, page3, page4 };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Configurations</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 0, BoundaryCount: 1</h3>
          <Pagination v-model="page1" :totalPages="20" :siblingCount="0" :boundaryCount="1" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 1, BoundaryCount: 1 (Default)</h3>
          <Pagination v-model="page2" :totalPages="20" :siblingCount="1" :boundaryCount="1" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 2, BoundaryCount: 1</h3>
          <Pagination v-model="page3" :totalPages="20" :siblingCount="2" :boundaryCount="1" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 1, BoundaryCount: 2</h3>
          <Pagination v-model="page4" :totalPages="20" :siblingCount="1" :boundaryCount="2" />
        </div>
      </div>
    </div>
  `,
});

// Showcase de casos de uso
export const UseCases = () => ({
  components: { Pagination },
  setup() {
    const page1 = ref(1);
    const page2 = ref(3);
    const page3 = ref(50);
    const page4 = ref(5);
    return { page1, page2, page3, page4 };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Use Cases</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Poucas Páginas (5 páginas)</h3>
          <Pagination v-model="page1" :totalPages="5" />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Sem ellipsis quando há poucas páginas
          </p>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Navegação de Blog (15 páginas)</h3>
          <Pagination v-model="page2" :totalPages="15" showPageInfo />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Grande Dataset (100 páginas)</h3>
          <Pagination
            v-model="page3"
            :totalPages="100"
            :totalItems="2487"
            :itemsPerPage="25"
            showPageInput
            showPageInfo
          />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Com input para saltar rapidamente entre páginas
          </p>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Tabela de Dados</h3>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <div style="margin-bottom: 16px;">
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="border-bottom: 2px solid #e5e5e5;">
                    <th style="padding: 12px; text-align: left;">ID</th>
                    <th style="padding: 12px; text-align: left;">Nome</th>
                    <th style="padding: 12px; text-align: left;">Email</th>
                    <th style="padding: 12px; text-align: left;">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #e5e5e5;">
                    <td style="padding: 12px;">101</td>
                    <td style="padding: 12px;">João Silva</td>
                    <td style="padding: 12px;">joao@email.com</td>
                    <td style="padding: 12px;">Ativo</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e5e5e5;">
                    <td style="padding: 12px;">102</td>
                    <td style="padding: 12px;">Maria Santos</td>
                    <td style="padding: 12px;">maria@email.com</td>
                    <td style="padding: 12px;">Ativo</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e5e5e5;">
                    <td style="padding: 12px;">103</td>
                    <td style="padding: 12px;">Pedro Costa</td>
                    <td style="padding: 12px;">pedro@email.com</td>
                    <td style="padding: 12px;">Inativo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Pagination
              v-model="page4"
              :totalPages="25"
              :totalItems="623"
              :itemsPerPage="25"
              showPageInfo
            />
          </div>
        </div>
      </div>
    </div>
  `,
});

// Showcase completo
export const Showcase = () => ({
  components: { Pagination },
  setup() {
    const page1 = ref(1);
    const page2 = ref(5);
    const page3 = ref(3);
    const page4 = ref(10);
    const page5 = ref(7);
    const page6 = ref(50);
    return { page1, page2, page3, page4, page5, page6 };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Pagination Showcase</h2>

      <div style="display: grid; grid-template-columns: 1fr; gap: 40px;">
        <!-- Basic Small -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">Basic (5 pages)</h3>
          <Pagination v-model="page1" :totalPages="5" size="sm" />
        </div>

        <!-- With PhInfo -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">With Page PhInfo</h3>
          <Pagination v-model="page2" :totalPages="10" showPageInfo />
        </div>

        <!-- With Total Items -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">With Total Items PhInfo</h3>
          <Pagination v-model="page3" :totalPages="10" :totalItems="237" :itemsPerPage="25" showPageInfo />
        </div>

        <!-- With Page Input -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">With Page Input</h3>
          <Pagination v-model="page4" :totalPages="20" showPageInput />
        </div>

        <!-- Large Size Complete -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">Large + All Features</h3>
          <Pagination
            v-model="page5"
            :totalPages="15"
            :totalItems="352"
            :itemsPerPage="25"
            size="lg"
            showPageInput
            showPageInfo
          />
        </div>

        <!-- Many Pages -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">Many Pages (100 total)</h3>
          <Pagination
            v-model="page6"
            :totalPages="100"
            :totalItems="2487"
            :itemsPerPage="25"
            showPageInput
            showPageInfo
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
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-light</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa elemento <code>&lt;nav&gt;</code> com <code>aria-label</code></li>
          <li>Botões com <code>aria-label</code> descritivos</li>
          <li>Página atual com <code>aria-current="page"</code></li>
          <li>Estados disabled gerenciados corretamente</li>
          <li>Focus visível em todos os elementos interativos</li>
          <li>Navegação por teclado (Tab, Enter)</li>
          <li>Input numérico com labels acessíveis</li>
        </ul>
      </div>
    </div>
  `,
});
