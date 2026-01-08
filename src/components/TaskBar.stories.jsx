import TaskBar from './TaskBar/TaskBar.vue';

export default {
  title: 'Scuba/TaskBar',
  component: TaskBar,
  tags: ['autodocs'],
  argTypes: {
    current: {
      control: 'number',
      description: 'Valor atual (número de tarefas concluídas)'
    },
    total: {
      control: 'number',
      description: 'Total de tarefas'
    },
  },
};

const Template = (args) => ({
  components: { TaskBar },
  setup() {
    return { args };
  },
  template: '<TaskBar v-bind="args" />',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  current: 21,
  total: 200,
};

// Empty (0%)
export const Empty = Template.bind({});
Empty.args = {
  current: 0,
  total: 200,
};

// Low Progress (11%)
export const LowProgress = Template.bind({});
LowProgress.args = {
  current: 21,
  total: 200,
};

// Medium Progress (56%)
export const MediumProgress = Template.bind({});
MediumProgress.args = {
  current: 45,
  total: 80,
};

// High Progress (80%)
export const HighProgress = Template.bind({});
HighProgress.args = {
  current: 160,
  total: 200,
};

// Complete (100%)
export const Complete = Template.bind({});
Complete.args = {
  current: 10,
  total: 10,
};

// All States
export const AllStates = () => ({
  components: { TaskBar },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">TaskBar States</h2>
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Empty - 0%</h3>
          <TaskBar :current="0" :total="200" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Low Progress - 11%</h3>
          <TaskBar :current="21" :total="200" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Medium Progress - 56%</h3>
          <TaskBar :current="45" :total="80" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">High Progress - 90%</h3>
          <TaskBar :current="90" :total="100" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Complete - 100%</h3>
          <TaskBar :current="10" :total="10" />
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
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td><td>Border 0%</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td><td>Progress fill (1-99%)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td>Background (1-99%)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-blue-900</code></td><td>Background 100%</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td>Text (0-99%)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td><td>Text 100%</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>Height</code></td><td style="text-align: right;">28px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 32px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso</h3>
        <p style="color: #6b7280; line-height: 1.8;">
          O componente TaskBar é ideal para exibir progresso de tarefas em DataTables.
          Ele automaticamente calcula a porcentagem com base nos valores <code>current</code> e <code>total</code>.
        </p>
        <pre style="margin-top: 12px; padding: 12px; background: white; border-radius: 4px; overflow-x: auto;"><code>&lt;TaskBar :current="45" :total="80" /&gt;</code></pre>
      </div>
    </div>
  `,
});
