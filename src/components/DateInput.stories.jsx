import { ref } from 'vue';
import DateInput from './DateInput/DateInput.vue';

export default {
  title: 'Scuba/DateInput',
  component: DateInput,
  tags: ['autodocs'],
  argTypes: {
    format: {
      control: 'select',
      options: ['MM/DD/YYYY', 'DD/MM/YYYY', 'YYYY-MM-DD'],
      description: 'Formato de exibição da data'
    },
    size: {
      control: 'select',
      options: ['sm', 'md', 'lg'],
      description: 'Tamanho do input'
    },
    error: {
      control: 'boolean',
      description: 'Estado de erro'
    },
    disabled: {
      control: 'boolean',
      description: 'Desabilita o input'
    },
    clearable: {
      control: 'boolean',
      description: 'Mostra botão de limpar'
    },
    showToday: {
      control: 'boolean',
      description: 'Mostra botão "Today" no calendário'
    }
  },
};

// Playground
export const Playground = (args) => ({
  components: { DateInput },
  setup() {
    const selectedDate = ref(new Date());

    const handleChange = (date) => {
      console.log('Date changed:', date);
    };

    return { args, selectedDate, handleChange };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DateInput v-bind="args" v-model="selectedDate" @change="handleChange" />
      <p style="margin-top: 16px; color: #6b7280;">
        Selected: {{ selectedDate ? selectedDate.toLocaleDateString() : 'None' }}
      </p>
    </div>
  `,
});
Playground.args = {
  placeholder: 'Select a date',
  format: 'MM/DD/YYYY',
  size: 'md',
  error: false,
  disabled: false,
  clearable: true,
  showToday: true
};

// Basic Usage
export const BasicUsage = () => ({
  components: { DateInput },
  setup() {
    const date = ref(null);
    return { date };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Basic Date Input</h2>
      <DateInput v-model="date" placeholder="Select date" />
      <p style="margin-top: 16px; color: #6b7280;">
        Selected: {{ date ? date.toLocaleDateString() : 'None' }}
      </p>
    </div>
  `,
});

// With Default Value
export const WithDefaultValue = () => ({
  components: { DateInput },
  setup() {
    const date = ref(new Date(2024, 0, 15)); // January 15, 2024
    return { date };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">With Default Value</h2>
      <DateInput v-model="date" />
    </div>
  `,
});

// Sizes
export const Sizes = () => ({
  components: { DateInput },
  setup() {
    const dateSmall = ref(null);
    const dateMedium = ref(null);
    const dateLarge = ref(null);
    return { dateSmall, dateMedium, dateLarge };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Tamanhos</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Small (32px)</h3>
        <DateInput v-model="dateSmall" size="sm" placeholder="Small date input" />
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Medium (40px)</h3>
        <DateInput v-model="dateMedium" size="md" placeholder="Medium date input" />
      </div>

      <div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Large (48px)</h3>
        <DateInput v-model="dateLarge" size="lg" placeholder="Large date input" />
      </div>
    </div>
  `,
});

// Date Formats
export const DateFormats = () => ({
  components: { DateInput },
  setup() {
    const date1 = ref(new Date());
    const date2 = ref(new Date());
    const date3 = ref(new Date());
    return { date1, date2, date3 };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Formatos de Data</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">MM/DD/YYYY (US Format)</h3>
        <DateInput v-model="date1" format="MM/DD/YYYY" />
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">DD/MM/YYYY (European Format)</h3>
        <DateInput v-model="date2" format="DD/MM/YYYY" />
      </div>

      <div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">YYYY-MM-DD (ISO Format)</h3>
        <DateInput v-model="date3" format="YYYY-MM-DD" />
      </div>
    </div>
  `,
});

// Error State
export const ErrorState = () => ({
  components: { DateInput },
  setup() {
    const date = ref(null);
    return { date };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Estado de Erro</h2>
      <DateInput v-model="date" error placeholder="Invalid date" />
      <p style="margin-top: 8px; color: #dc2626; font-size: 14px;">Please select a valid date</p>
    </div>
  `,
});

// Disabled State
export const DisabledState = () => ({
  components: { DateInput },
  setup() {
    const date = ref(new Date());
    return { date };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Estado Desabilitado</h2>
      <DateInput v-model="date" disabled />
    </div>
  `,
});

// With Min/Max Dates
export const WithMinMaxDates = () => ({
  components: { DateInput },
  setup() {
    const date = ref(null);
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);

    return { date, minDate, maxDate };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Com Datas Mínima e Máxima</h2>
      <DateInput
        v-model="date"
        :min-date="minDate"
        :max-date="maxDate"
        placeholder="Select date (current month only)"
      />
      <p style="margin-top: 16px; color: #6b7280; font-size: 14px;">
        Only dates in the current month are selectable
      </p>
    </div>
  `,
});

// Without Clear Button
export const WithoutClearButton = () => ({
  components: { DateInput },
  setup() {
    const date = ref(new Date());
    return { date };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Sem Botão de Limpar</h2>
      <DateInput v-model="date" :clearable="false" />
    </div>
  `,
});

// Without Today Button
export const WithoutTodayButton = () => ({
  components: { DateInput },
  setup() {
    const date = ref(null);
    return { date };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Sem Botão "Today"</h2>
      <DateInput v-model="date" :show-today="false" placeholder="Select date" />
    </div>
  `,
});

// Form Example
export const FormExample = () => ({
  components: { DateInput },
  setup() {
    const startDate = ref(null);
    const endDate = ref(null);

    const handleSubmit = () => {
      console.log('Start:', startDate.value);
      console.log('End:', endDate.value);
      alert(`Selected range: ${startDate.value?.toLocaleDateString()} - ${endDate.value?.toLocaleDateString()}`);
    };

    return { startDate, endDate, handleSubmit };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Exemplo em Formulário</h2>

      <form @submit.prevent="handleSubmit" style="max-width: 400px;">
        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">
            Start Date
          </label>
          <DateInput v-model="startDate" placeholder="Select start date" />
        </div>

        <div style="margin-bottom: 24px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">
            End Date
          </label>
          <DateInput v-model="endDate" placeholder="Select end date" />
        </div>

        <button
          type="submit"
          style="padding: 10px 20px; background: #0942a1; color: white; border: none; border-radius: 4px; cursor: pointer; font-family: Poppins; font-weight: 600;"
        >
          Submit
        </button>
      </form>
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
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Disabled bg</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-primary</code></td><td style="text-align: right;">Border</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">PhCalendar border</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Text</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Icons</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-tertiary</code></td><td style="text-align: right;">Placeholder</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-primary-500/600</code></td><td style="text-align: right;">Selected day</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-red-500/100</code></td><td style="text-align: right;">Error state</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px (weekdays)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">4px (sm padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px (md padding, gap)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">12px (lg padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px (calendar padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px (input, days)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-md</code></td><td style="text-align: right;">8px (calendar)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>box-shadow</code></td><td style="text-align: right;">Focus & PhCalendar</td></tr>
            <tr><td style="padding: 8px 0;"><code>transition: 0.2s</code></td><td style="text-align: right;">Interactions</td></tr>
            <tr><td style="padding: 8px 0;"><code>z-index: 1000</code></td><td style="text-align: right;">PhCalendar overlay</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Format:</strong> Use o formato apropriado para sua região (MM/DD/YYYY para US, DD/MM/YYYY para BR/EU)</li>
          <li><strong>Min/Max Dates:</strong> Use para restringir seleção a períodos válidos (ex: datas futuras)</li>
          <li><strong>Clearable:</strong> Permita limpar quando a data é opcional</li>
          <li><strong>Today Button:</strong> Facilita seleção rápida da data atual</li>
          <li><strong>Error State:</strong> Combine com mensagem de erro clara</li>
          <li><strong>Disabled:</strong> Use quando a data não pode ser editada temporariamente</li>
          <li>Sempre forneça um placeholder descritivo</li>
          <li>Para ranges de data, use dois DateInputs separados</li>
          <li>Considere validação de data mínima menor que máxima</li>
          <li>Forneça feedback visual quando uma data é selecionada</li>
        </ul>
      </div>
    </div>
  `,
});
