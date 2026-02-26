import VerticalBars from './VerticalBars/VerticalBars.vue';

// Status scenario — reproduces the Figma design using Scuba status tokens
const STATUS_ITEMS = [
  {
    label: 'Em resposta',
    value: 100,
    color: 'var(--semantic-color-status-answering)',
    textColor: 'var(--semantic-color-status-answering-text)',
  },
  {
    label: 'Respondido',
    value: 65,
    color: 'var(--semantic-color-status-answered)',
    textColor: 'var(--semantic-color-status-answered-text)',
  },
  {
    label: 'Em validação',
    value: 44,
    color: 'var(--semantic-color-status-validating)',
    textColor: 'var(--semantic-color-status-validating-text)',
  },
  {
    label: 'Em ajuste',
    value: 23,
    color: 'var(--semantic-color-status-adjusting)',
    textColor: 'var(--semantic-color-status-adjusting-text)',
  },
  {
    label: 'Validado',
    value: 20,
    color: 'var(--semantic-color-status-validated)',
    textColor: 'var(--semantic-color-status-validated-text)',
  },
  {
    label: 'Em auditoria',
    value: 31,
    color: 'var(--semantic-color-status-auditing)',
    textColor: 'var(--semantic-color-status-auditing-text)',
  },
  {
    label: 'Em ajuste de auditoria',
    value: 40,
    color: 'var(--semantic-color-status-adjusting-auditing)',
    textColor: 'var(--semantic-color-status-adjusting-auditing-text)',
  },
  {
    label: 'Auditado',
    value: 42,
    color: 'var(--semantic-color-status-audited)',
    textColor: 'var(--semantic-color-status-audited-text)',
  },
  {
    label: 'Aprovado',
    value: 59,
    color: 'var(--semantic-color-status-approved)',
    textColor: 'var(--semantic-color-status-approved-text)',
  },
];

// Generic scenario — custom colors, not tied to any semantic system
const SALES_ITEMS = [
  { label: 'Jan', value: 320, color: '#4e79a7', textColor: '#ffffff' },
  { label: 'Fev', value: 180, color: '#4e79a7', textColor: '#ffffff' },
  { label: 'Mar', value: 450, color: '#4e79a7', textColor: '#ffffff' },
  { label: 'Abr', value: 90,  color: '#4e79a7', textColor: '#ffffff' },
  { label: 'Mai', value: 270, color: '#4e79a7', textColor: '#ffffff' },
  { label: 'Jun', value: 510, color: '#4e79a7', textColor: '#ffffff' },
];

const RISK_ITEMS = [
  { label: 'Baixo',    value: 80,  color: '#63d59e', textColor: '#0e3a29' },
  { label: 'Médio',   value: 45,  color: '#eae055', textColor: '#615d21' },
  { label: 'Alto',     value: 22,  color: '#ffa145', textColor: '#792d0d' },
  { label: 'Crítico',  value: 8,   color: '#ea2255', textColor: '#ffffff' },
];

export default {
  title: 'Scuba/VerticalBars',
  component: VerticalBars,
  tags: ['autodocs'],
  argTypes: {
    maxHeight: {
      control: { type: 'range', min: 60, max: 300, step: 10 },
      description: 'Altura máxima das barras em pixels',
    },
    minHeightForInlineLabel: {
      control: { type: 'range', min: 20, max: 80, step: 4 },
      description: 'Altura mínima (px) para o valor aparecer dentro da barra. Abaixo disso, flutua acima.',
    },
  },
};

// Playground
export const Playground = (args) => ({
  components: { VerticalBars },
  setup() {
    return { args };
  },
  template: '<div style="padding: 40px;"><VerticalBars v-bind="args" /></div>',
});
Playground.args = {
  items: STATUS_ITEMS,
  maxHeight: 120,
  minHeightForInlineLabel: 36,
};

// Status — reprodução fiel do Figma
export const StatusBars = () => ({
  components: { VerticalBars },
  setup() {
    return { items: STATUS_ITEMS };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 700px;">
      <h2 style="margin-bottom: 24px; font-size: 18px; font-weight: 600;">Quantidades por Status</h2>
      <VerticalBars :items="items" :maxHeight="120" />
    </div>
  `,
});

// Cenário genérico — cores customizadas sem semântica de status
export const CustomColors = () => ({
  components: { VerticalBars },
  setup() {
    return { salesItems: SALES_ITEMS, riskItems: RISK_ITEMS };
  },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif; display: flex; flex-direction: column; gap: 48px; max-width: 700px;">
      <div>
        <h2 style="margin-bottom: 24px; font-size: 18px; font-weight: 600;">Vendas Mensais</h2>
        <VerticalBars :items="salesItems" :maxHeight="120" />
      </div>
      <div>
        <h2 style="margin-bottom: 24px; font-size: 18px; font-weight: 600;">Itens por Nível de Risco</h2>
        <VerticalBars :items="riskItems" :maxHeight="120" />
      </div>
    </div>
  `,
});

// Demonstração do comportamento de label flutuante
export const FloatingLabelBehavior = () => ({
  components: { VerticalBars },
  setup() {
    const items = [
      { label: 'Grande',   value: 100, color: '#70cdff', textColor: '#06327a' },
      { label: 'Médio',   value: 50,  color: '#bab8f4', textColor: '#1b28b5' },
      { label: 'Pequeno', value: 25,  color: '#cff5e8', textColor: '#245900' },
      { label: 'Mínimo',  value: 10,  color: '#ef7efc', textColor: '#792d0d' },
      { label: 'Micro',   value: 4,   color: '#eae055', textColor: '#615d21' },
    ];
    return { items };
  },
  template: `
    <div style="padding: 48px 40px 40px; font-family: Poppins, sans-serif; max-width: 500px;">
      <h2 style="margin-bottom: 24px; font-size: 18px; font-weight: 600;">Label Flutuante</h2>
      <p style="margin-bottom: 32px; font-size: 14px; color: #6b7280;">
        Quando a barra é muito pequena para acomodar o valor, ele flutua acima automaticamente.
      </p>
      <VerticalBars :items="items" :maxHeight="120" :minHeightForInlineLabel="36" />
    </div>
  `,
});
