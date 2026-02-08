import DataTable from './DataTable.vue';
import AvatarCell from './cells/AvatarCell.vue';
import TaskBar from '../TaskBar/TaskBar.vue';
import Status from '../Status/Status.vue';

export default {
  title: 'Scuba/DataTable',
  component: DataTable,
  tags: ['autodocs'],
  argTypes: {
    rows: {
      control: 'object',
      description: 'Array de objetos com os dados das linhas'
    },
    columns: {
      control: 'object',
      description: 'Array de objetos definindo as colunas (key, header, sortable, width, align)'
    },
    rowKey: {
      control: 'text',
      description: 'Chave única para identificar cada linha'
    },
    selectable: {
      control: 'boolean',
      description: 'Permite seleção múltipla de linhas'
    },
    expandable: {
      control: 'boolean',
      description: 'Permite expandir linhas para mostrar detalhes'
    },
    actions: {
      control: 'object',
      description: 'Array de ações disponíveis quando há linhas selecionadas (com tooltips)'
    }
  }
};

// Mock data
const STATUS_CONFIG = {
  'not-started': { variant: 'gray', label: 'Não iniciada' },
  'in-progress': { variant: 'blue', label: 'Em andamento' },
  'ready-for-approval': { variant: 'blue-dark', label: 'Para aprovação' },
  'audited': { variant: 'teal', label: 'Auditada' },
  'about-to-expire': { variant: 'orange', label: 'A expirar' },
  'expired': { variant: 'red', label: 'Expirada' },
  'completed': { variant: 'green', label: 'Concluída' },
  'waiting-response': { variant: 'gray', label: 'Em resposta' },
  'responded': { variant: 'cyan', label: 'Respondido' },
  'validating': { variant: 'purple', label: 'Em validação' },
  'adjusting': { variant: 'pink', label: 'Em ajuste' },
  'validated': { variant: 'blue-dark', label: 'Validado' },
};

const mockRows = [
  {
    id: 1,
    responsavel: { name: 'Ana Silva', image: 'https://i.pravatar.cc/64?img=5' },
    tarefas: { completed: 21, total: 200 },
    ultima: '2 dias atrás',
    status: 'in-progress',
  },
  {
    id: 2,
    responsavel: { name: 'Carlos Santos', image: 'https://i.pravatar.cc/64?img=11' },
    tarefas: { completed: 0, total: 0 },
    ultima: '5 dias atrás',
    status: 'not-started',
  },
  {
    id: 3,
    responsavel: { name: 'Maria Oliveira', image: 'https://i.pravatar.cc/64?img=8' },
    tarefas: { completed: 10, total: 10 },
    ultima: '1 hora atrás',
    status: 'completed',
  },
  {
    id: 4,
    responsavel: { name: 'João Pereira', image: 'https://i.pravatar.cc/64?img=12' },
    tarefas: { completed: 45, total: 80 },
    ultima: '3 dias atrás',
    status: 'about-to-expire',
  },
  {
    id: 5,
    responsavel: { name: 'Beatriz Costa', image: 'https://i.pravatar.cc/64?img=15' },
    tarefas: { completed: 90, total: 100 },
    ultima: '30 minutos atrás',
    status: 'ready-for-approval',
  },
];

const columns = [
  { key: 'responsavel', header: 'Responsável', sortable: true, width: '280px' },
  { key: 'tarefas', header: 'Progresso', sortable: false, width: '260px' },
  { key: 'ultima', header: 'Última atividade', sortable: true, width: '180px' },
  { key: 'status', header: 'Status', sortable: false, width: '200px' },
];

const actions = [
  { key: 'reminder', label: 'Enviar lembrete', icon: 'ph ph-envelope' },
  { key: 'export', label: 'Exportar CSV', icon: 'ph ph-download' },
  { key: 'assign', label: 'Reatribuir', icon: 'ph ph-user-switch' },
];

// Playground
export const Playground = (args) => ({
  components: { DataTable, AvatarCell, TaskBar, Status },
  setup() {
    function onAction(payload) {
      console.log('Action:', payload.key, 'Rows:', payload.rows);
      alert(`Ação: ${payload.key}\nLinhas selecionadas: ${payload.rows.length}`);
    }

    function onSort(sort) {
      console.log('Sort:', sort);
    }

    return { args, onAction, onSort, STATUS_CONFIG };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DataTable
        v-bind="args"
        @action="onAction"
        @update:sort="onSort"
      >
        <template #cell-responsavel="{ row }">
          <AvatarCell
            :name="row.responsavel.name"
            :image="row.responsavel.image"
          />
        </template>

        <template #cell-tarefas="{ row }">
          <TaskBar
            :current="row.tarefas.completed"
            :total="row.tarefas.total"
          />
        </template>

        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>

        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>

        <template #expanded="{ row }">
          <div style="padding: 12px 0; color: #6B7280; font-size: 13px; line-height: 1.6;">
            <div style="margin-bottom: 8px;">
              <strong style="color: #1F2937;">Detalhes de {{ row.responsavel.name }}</strong>
            </div>
            <div>Última atividade: {{ row.ultima }}</div>
            <div>Progresso: {{ row.tarefas.completed }}/{{ row.tarefas.total }} tarefas</div>
          </div>
        </template>
      </DataTable>
    </div>
  `,
});
Playground.args = {
  rows: mockRows,
  columns: columns,
  rowKey: 'id',
  selectable: true,
  expandable: true,
  actions: actions,
};

// Only Table
export const OnlyTable = (args) => ({
  components: { DataTable, AvatarCell, TaskBar, Status },
  setup() {
    return { args, STATUS_CONFIG };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DataTable v-bind="args">
        <template #cell-responsavel="{ row }">
          <AvatarCell
            :name="row.responsavel.name"
            :image="row.responsavel.image"
          />
        </template>
        <template #cell-tarefas="{ row }">
          <TaskBar
            :current="row.tarefas.completed"
            :total="row.tarefas.total"
          />
        </template>
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>
        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>
      </DataTable>
    </div>
  `,
});
OnlyTable.args = {
  rows: mockRows,
  columns: columns,
  rowKey: 'id',
  selectable: false,
  expandable: false,
  actions: [],
};

// With Selection
export const WithSelection = (args) => ({
  components: { DataTable, AvatarCell, TaskBar, Status },
  setup() {
    function onAction(payload) {
      console.log('Action:', payload.key, 'Rows:', payload.rows);
      alert(`Ação: ${payload.key}\nLinhas selecionadas: ${payload.rows.length}`);
    }

    return { args, onAction, STATUS_CONFIG };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DataTable v-bind="args" @action="onAction">
        <template #cell-responsavel="{ row }">
          <AvatarCell
            :name="row.responsavel.name"
            :image="row.responsavel.image"
          />
        </template>
        <template #cell-tarefas="{ row }">
          <TaskBar
            :current="row.tarefas.completed"
            :total="row.tarefas.total"
          />
        </template>
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>
        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>
      </DataTable>
    </div>
  `,
});
WithSelection.args = {
  rows: mockRows,
  columns: columns,
  rowKey: 'id',
  selectable: true,
  expandable: false,
  actions: actions,
};

// All Statuses
export const AllStatuses = () => ({
  components: { DataTable, Status },
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

    return { statusRows, statusColumns, STATUS_CONFIG };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DataTable
        :rows="statusRows"
        :columns="statusColumns"
        row-key="id"
        :selectable="false"
        :expandable="false"
        :actions="[]"
      >
        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>
      </DataTable>
    </div>
  `,
});

// Progress States
export const ProgressStates = () => ({
  components: { DataTable, TaskBar },
  setup() {
    const progressRows = [
      { id: 1, name: 'Projeto A', completed: 0, total: 100 },
      { id: 2, name: 'Projeto B', completed: 13, total: 100 },
      { id: 3, name: 'Projeto C', completed: 50, total: 100 },
      { id: 4, name: 'Projeto D', completed: 87, total: 100 },
      { id: 5, name: 'Projeto E', completed: 100, total: 100 },
    ];

    const progressColumns = [
      { key: 'name', header: 'Projeto', width: '200px' },
      { key: 'progress', header: 'Progresso', width: '300px' },
    ];

    return { progressRows, progressColumns };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DataTable
        :rows="progressRows"
        :columns="progressColumns"
        row-key="id"
        :selectable="false"
        :expandable="false"
        :actions="[]"
      >
        <template #cell-progress="{ row }">
          <TaskBar :current="row.completed" :total="row.total" />
        </template>
      </DataTable>
    </div>
  `,
});
