// src/components/DataTable/DataTable.stories.jsx
import DataTable from './DataTable.vue';
import AvatarCell from './cells/AvatarCell.vue';
import ProgressCell from './cells/ProgressCell.vue';
import StatusCell from './cells/StatusCell.vue';

export default {
  title: 'Scuba/DataTable',
  component: DataTable,
  parameters: { layout: 'fullscreen' },
};

const rows = [
  {
    id: 1,
    responsavel: { name: 'Eva Correa', image: 'https://i.pravatar.cc/64?img=5' },
    tarefasPct: 13,
    tarefasLabel: '21/200',
    atraso: 3,
    ultima: '2 dias atrás',
    status: 'info',
  },
  {
    id: 2,
    responsavel: { name: 'Eva Correa', image: 'https://i.pravatar.cc/64?img=11' },
    tarefasPct: 13,
    tarefasLabel: '0/0',
    atraso: 3,
    ultima: '2 dias atrás',
    status: 'success',
  },
  {
    id: 3,
    responsavel: { name: 'Eva Correa', image: 'https://i.pravatar.cc/64?img=8' },
    tarefasPct: 100,
    tarefasLabel: '10/10',
    atraso: 3,
    ultima: '2 dias atrás',
    status: 'warning',
  },
];

const columns = [
  { key: 'responsavel', header: 'Responsável', sortable: true, width: '320px' },
  { key: 'tarefas', header: 'Tarefas', sortable: true, width: '300px' },
  { key: 'atraso', header: 'Em atraso', sortable: true, width: '140px', align: 'center' },
  { key: 'ultima', header: 'Última atividade', sortable: true, width: '200px' },
];

const actions = [
  { key: 'reminder', label: 'Enviar lembrete', icon: '✉️' },
  { key: 'export', label: 'Exportar CSV', icon: '⬇️' },
  { key: 'assign', label: 'Reatribuir', icon: '👤' },
];

export const Playground = {
  render: (args) => ({
    components: { DataTable, AvatarCell, ProgressCell, StatusCell },
    setup() {
      function onAction(payload) {
        // eslint-disable-next-line no-console
        console.log('Action click:', payload);
      }
      return { args, onAction };
    },
    template: `
      <DataTable
        v-bind="args"
        @action="onAction"
      >
        <!-- célula: Responsável -->
        <template #cell-responsavel="{ row }">
          <AvatarCell :name="row.responsavel.name" :image="row.responsavel.image" />
        </template>

        <!-- célula: Tarefas (barra de progresso) -->
        <template #cell-tarefas="{ row }">
          <ProgressCell :value="row.tarefasPct" :label="row.tarefasLabel" />
        </template>

        <!-- célula: Em atraso (texto simples) -->
        <template #cell-atraso="{ value }">
          <span style="display:inline-flex; width: 48px; justify-content: center">{{ value }}</span>
        </template>

        <!-- célula: Última atividade + status -->
        <template #cell-ultima="{ row }">
          <div style="display:flex; align-items:center; gap:12px">
            <span>{{ row.ultima }}</span>
            <StatusCell :status="row.status" />
          </div>
        </template>

        <!-- conteúdo expandido -->
        <template #expanded="{ row }">
          <div style="padding:12px 4px; color: var(--context-color-text-secondary, #555)">
            <strong>Detalhes de {{ row.responsavel.name }}</strong><br />
            Última atividade: {{ row.ultima }}<br />
            Em atraso: {{ row.atraso }} tarefa(s)
          </div>
        </template>
      </DataTable>
    `,
  }),
  args: {
    rows,
    columns,
    rowKey: 'id',
    selectable: true,
    expandable: true,
    actions,
  },
};