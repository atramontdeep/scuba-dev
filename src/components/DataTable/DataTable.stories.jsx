// src/components/DataTable/DataTable.stories.jsx
import DataTable from './DataTable.vue';
import AvatarCell from './cells/AvatarCell.vue';
import ProgressCell from './cells/ProgressCell.vue';
import StatusCell from './cells/StatusCell.vue';

export default {
  title: 'Scuba/DataTable',
  component: DataTable,
  parameters: { 
    layout: 'padded',
    docs: {
      description: {
        component: 'Tabela de dados completa com seleção múltipla, ordenação, expansão de linhas e ações em lote.'
      }
    }
  },
  argTypes: {
    rows: {
      description: 'Array de objetos com os dados das linhas',
      control: 'object'
    },
    columns: {
      description: 'Array de objetos definindo as colunas (key, header, sortable, width, align)',
      control: 'object'
    },
    rowKey: {
      description: 'Chave única para identificar cada linha',
      control: 'text'
    },
    selectable: {
      description: 'Permite seleção múltipla de linhas',
      control: 'boolean'
    },
    expandable: {
      description: 'Permite expandir linhas para mostrar detalhes',
      control: 'boolean'
    },
    actions: {
      description: 'Array de ações disponíveis quando há linhas selecionadas',
      control: 'object'
    }
  }
};

// Mock data
const mockRows = [
  {
    id: 1,
    responsavel: { name: 'Ana Silva', image: 'https://i.pravatar.cc/64?img=5' },
    tarefas: { completed: 21, total: 200 },
    atraso: 3,
    ultima: '2 dias atrás',
    status: 'in-progress',
  },
  {
    id: 2,
    responsavel: { name: 'Carlos Santos', image: 'https://i.pravatar.cc/64?img=11' },
    tarefas: { completed: 0, total: 0 },
    atraso: 0,
    ultima: '5 dias atrás',
    status: 'not-started',
  },
  {
    id: 3,
    responsavel: { name: 'Maria Oliveira', image: 'https://i.pravatar.cc/64?img=8' },
    tarefas: { completed: 10, total: 10 },
    atraso: 0,
    ultima: '1 hora atrás',
    status: 'completed',
  },
  {
    id: 4,
    responsavel: { name: 'João Pereira', image: 'https://i.pravatar.cc/64?img=12' },
    tarefas: { completed: 45, total: 80 },
    atraso: 5,
    ultima: '3 dias atrás',
    status: 'about-to-expire',
  },
  {
    id: 5,
    responsavel: { name: 'Beatriz Costa', image: 'https://i.pravatar.cc/64?img=15' },
    tarefas: { completed: 90, total: 100 },
    atraso: 0,
    ultima: '30 minutos atrás',
    status: 'ready-for-approval',
  },
];

const columns = [
  { key: 'responsavel', header: 'Responsável', sortable: true, width: '280px' },
  { key: 'tarefas', header: 'Progresso', sortable: false, width: '260px' },
  { key: 'atraso', header: 'Em atraso', sortable: true, width: '120px', align: 'center' },
  { key: 'ultima', header: 'Última atividade', sortable: true, width: '180px' },
  { key: 'status', header: 'Status', sortable: false, width: '200px' },
];

const actions = [
  { key: 'reminder', label: 'Enviar lembrete', icon: 'ph ph-envelope' },
  { key: 'export', label: 'Exportar CSV', icon: 'ph ph-download' },
  { key: 'assign', label: 'Reatribuir', icon: 'ph ph-user-switch' },
];

// Template padrão
const Template = (args) => ({
  components: { DataTable, AvatarCell, ProgressCell, StatusCell },
  setup() {
    function onAction(payload) {
      console.log('🔥 Action:', payload.key, 'Rows:', payload.rows);
      alert(`Ação: ${payload.key}\nLinhas selecionadas: ${payload.rows.length}`);
    }
    
    function onSort(sort) {
      console.log('📊 Sort:', sort);
    }
    
    return { args, onAction, onSort };
  },
  template: `
    <DataTable
      v-bind="args"
      @action="onAction"
      @update:sort="onSort"
    >
      <!-- Célula: Responsável -->
      <template #cell-responsavel="{ row }">
        <AvatarCell 
          :name="row.responsavel.name" 
          :image="row.responsavel.image" 
        />
      </template>

      <!-- Célula: Progresso (barra) -->
      <template #cell-tarefas="{ row }">
        <ProgressCell 
          :value="row.tarefas.total > 0 ? (row.tarefas.completed / row.tarefas.total) * 100 : 0" 
          :label="\`\${row.tarefas.completed}/\${row.tarefas.total}\`" 
        />
      </template>

      <!-- Célula: Em atraso -->
      <template #cell-atraso="{ value }">
        <div style="display: flex; justify-content: center; width: 100%;">
          <span :style="{ 
            color: value > 0 ? '#EF4444' : '#6B7280',
            fontWeight: value > 0 ? 600 : 400
          }">
            {{ value }}
          </span>
        </div>
      </template>

      <!-- Célula: Última atividade -->
      <template #cell-ultima="{ value }">
        <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
      </template>

      <!-- Célula: Status -->
      <template #cell-status="{ row }">
        <StatusCell :status="row.status" />
      </template>

      <!-- Conteúdo expandido -->
      <template #expanded="{ row }">
        <div style="padding: 12px 0; color: #6B7280; font-size: 13px; line-height: 1.6;">
          <div style="margin-bottom: 8px;">
            <strong style="color: #1F2937;">Detalhes de {{ row.responsavel.name }}</strong>
          </div>
          <div>📅 Última atividade: {{ row.ultima }}</div>
          <div>⏰ Tarefas em atraso: {{ row.atraso }}</div>
          <div>✅ Progresso: {{ row.tarefas.completed }}/{{ row.tarefas.total }} tarefas</div>
        </div>
      </template>
    </DataTable>
  `,
});

// Stories
export const Default = Template.bind({});
Default.args = {
  rows: mockRows,
  columns: columns,
  rowKey: 'id',
  selectable: true,
  expandable: true,
  actions: actions,
};

export const OnlyTable = Template.bind({});
OnlyTable.args = {
  rows: mockRows,
  columns: columns,
  rowKey: 'id',
  selectable: false,
  expandable: false,
  actions: [],
};
OnlyTable.parameters = {
  docs: {
    description: {
      story: 'Tabela simples sem seleção ou expansão de linhas.'
    }
  }
};

export const WithSelection = Template.bind({});
WithSelection.args = {
  rows: mockRows,
  columns: columns,
  rowKey: 'id',
  selectable: true,
  expandable: false,
  actions: actions,
};
WithSelection.parameters = {
  docs: {
    description: {
      story: 'Tabela com seleção múltipla e ações em lote, mas sem expansão de linhas.'
    }
  }
};

export const AllStatuses = () => ({
  components: { DataTable, StatusCell },
  setup() {
    const statusRows = [
      { id: 1, name: 'Tarefa 1', status: 'not-started' },
      { id: 2, name: 'Tarefa 2', status: 'in-progress' },
      { id: 3, name: 'Tarefa 3', status: 'ready-for-approval' },
      { id: 4, name: 'Tarefa 4', status: 'audited' },
      { id: 5, name: 'Tarefa 5', status: 'about-to-expire' },
      { id: 6, name: 'Tarefa 6', status: 'expired' },
      { id: 7, name: 'Tarefa 7', status: 'completed' },
      { id: 8, name: 'Tarefa 8', status: 'waiting-response' },
      { id: 9, name: 'Tarefa 9', status: 'responded' },
      { id: 10, name: 'Tarefa 10', status: 'validating' },
      { id: 11, name: 'Tarefa 11', status: 'adjusting' },
      { id: 12, name: 'Tarefa 12', status: 'validated' },
    ];

    const statusColumns = [
      { key: 'name', header: 'Nome', width: '200px' },
      { key: 'status', header: 'Status', width: '250px' },
    ];

    return { statusRows, statusColumns };
  },
  template: `
    <DataTable
      :rows="statusRows"
      :columns="statusColumns"
      row-key="id"
      :selectable="false"
      :expandable="false"
      :actions="[]"
    >
      <template #cell-status="{ row }">
        <StatusCell :status="row.status" />
      </template>
    </DataTable>
  `,
});
AllStatuses.parameters = {
  docs: {
    description: {
      story: 'Demonstração de todos os status disponíveis no StatusCell.'
    }
  }
};

export const ProgressStates = () => ({
  components: { DataTable, ProgressCell },
  setup() {
    const progressRows = [
      { id: 1, name: 'Projeto A', progress: 0, label: '0/100' },
      { id: 2, name: 'Projeto B', progress: 13, label: '13/100' },
      { id: 3, name: 'Projeto C', progress: 50, label: '50/100' },
      { id: 4, name: 'Projeto D', progress: 87, label: '87/100' },
      { id: 5, name: 'Projeto E', progress: 100, label: '100/100' },
    ];

    const progressColumns = [
      { key: 'name', header: 'Projeto', width: '200px' },
      { key: 'progress', header: 'Progresso', width: '300px' },
    ];

    return { progressRows, progressColumns };
  },
  template: `
    <DataTable
      :rows="progressRows"
      :columns="progressColumns"
      row-key="id"
      :selectable="false"
      :expandable="false"
      :actions="[]"
    >
      <template #cell-progress="{ row }">
        <ProgressCell :value="row.progress" :label="row.label" />
      </template>
    </DataTable>
  `,
});
ProgressStates.parameters = {
  docs: {
    description: {
      story: 'Demonstração dos 3 estados da barra de progresso: 0%, 1-99%, e 100%.'
    }
  }
};
