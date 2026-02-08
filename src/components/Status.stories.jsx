import { computed } from 'vue';
import Status from './Status/Status.vue';

// Mapeamento de status para variantes semânticas
const STATUS_MAP = {
  'Em resposta': 'answering',
  'Respondido': 'answered',
  'Em validação': 'validating',
  'Validado': 'validated',
  'Em ajuste': 'adjusting',
  'Em ajuste de auditoria': 'adjusting-auditing',
  'Em auditoria': 'auditing',
  'Auditado': 'audited',
  'Aprovado': 'approved',
  'Expirada': 'expired',
  'Não iniciada': 'answering',
  'Em andamento': 'answered',
  'Para aprovação': 'validated',
  'A expirar': 'adjusting-auditing',
  'Concluída': 'approved',
  'Auditada': 'audited',
};

export default {
  title: 'Scuba/Status',
  component: Status,
  tags: ['autodocs'],
  argTypes: {
    status: {
      control: 'select',
      options: Object.keys(STATUS_MAP),
      description: 'Status do chip',
      defaultValue: 'Aprovado'
    }
  },
};

const Template = (args) => ({
  components: { Status },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'answering');
    return { args, variant };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>',
});

// Playground
export const Playground = Template.bind({});
Playground.args = {
  status: 'Aprovado',
};

// Answering
export const Answering = Template.bind({});
Answering.args = {
  status: 'Em resposta',
};

// Answered
export const Answered = Template.bind({});
Answered.args = {
  status: 'Respondido',
};

// Validating
export const Validating = Template.bind({});
Validating.args = {
  status: 'Em validação',
};

// Validated
export const Validated = Template.bind({});
Validated.args = {
  status: 'Validado',
};

// Adjusting
export const Adjusting = Template.bind({});
Adjusting.args = {
  status: 'Em ajuste',
};

// Adjusting Auditing
export const AdjustingAuditing = Template.bind({});
AdjustingAuditing.args = {
  status: 'Em ajuste de auditoria',
};

// Auditing
export const Auditing = Template.bind({});
Auditing.args = {
  status: 'Em auditoria',
};

// Audited
export const Audited = Template.bind({});
Audited.args = {
  status: 'Auditado',
};

// Approved
export const Approved = Template.bind({});
Approved.args = {
  status: 'Aprovado',
};

// Expired
export const Expired = Template.bind({});
Expired.args = {
  status: 'Expirada',
};

// All Variants
export const AllVariants = () => ({
  components: { Status },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Status Chips - Todas as Variantes</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <Status variant="answering">Em resposta</Status>
        <Status variant="answered">Respondido</Status>
        <Status variant="validating">Em validação</Status>
        <Status variant="validated">Validado</Status>
        <Status variant="adjusting">Em ajuste</Status>
        <Status variant="adjusting-auditing">Em ajuste de auditoria</Status>
        <Status variant="auditing">Em auditoria</Status>
        <Status variant="audited">Auditado</Status>
        <Status variant="approved">Aprovado</Status>
        <Status variant="expired">Expirada</Status>
      </div>

      <h2 style="margin: 48px 0 32px;">Indicadores</h2>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 180px; color: #6b7280;">Answering:</span>
          <Status variant="answering">Em resposta</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 180px; color: #6b7280;">Answered:</span>
          <Status variant="answered">Respondido</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 180px; color: #6b7280;">Validating:</span>
          <Status variant="validating">Em validação</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 180px; color: #6b7280;">Validated:</span>
          <Status variant="validated">Validado</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 180px; color: #6b7280;">Adjusting:</span>
          <Status variant="adjusting">Em ajuste</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 180px; color: #6b7280;">Adjusting Auditing:</span>
          <Status variant="adjusting-auditing">Em ajuste de auditoria</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 180px; color: #6b7280;">Auditing:</span>
          <Status variant="auditing">Em auditoria</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 180px; color: #6b7280;">Audited:</span>
          <Status variant="audited">Auditado</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 180px; color: #6b7280;">Approved:</span>
          <Status variant="approved">Aprovado</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 180px; color: #6b7280;">Expired:</span>
          <Status variant="expired">Expirada</Status>
        </div>
      </div>
    </div>
  `,
});

// Use Cases - In Table
export const InTable = () => ({
  components: { Status },
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Status em Tabelas</h2>

      <table style="width: 100%; border-collapse: collapse; border: 1px solid #e5e7eb;">
        <thead>
          <tr style="background: #f9fafb;">
            <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">Coleta</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">Empresa</th>
            <th style="padding: 12px; text-align: left; border: 1px solid #e5e7eb;">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q1 2024</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa A</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="approved">Concluída</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q2 2024</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa B</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="answered">Em andamento</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q3 2024</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa C</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="adjusting-auditing">A expirar</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q4 2024</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa D</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="answering">Não iniciada</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q1 2023</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa E</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="expired">Expirada</Status>
            </td>
          </tr>
        </tbody>
      </table>
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
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Status Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-answering</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-answered</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-validating</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-validated</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-adjusting</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-adjusting-auditing</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-auditing</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-audited</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-approved</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-expired</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Status Colors (Text)</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-answering-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-answered-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-validating-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-validated-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-adjusting-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-adjusting-auditing-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-auditing-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-audited-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-approved-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-expired-text</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px (vertical)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px (horizontal)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Mapeamento de Variantes</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>answering:</strong> Em resposta</li>
          <li><strong>answered:</strong> Respondido</li>
          <li><strong>validating:</strong> Em validação</li>
          <li><strong>validated:</strong> Validado</li>
          <li><strong>adjusting:</strong> Em ajuste</li>
          <li><strong>adjusting-auditing:</strong> Em ajuste de auditoria</li>
          <li><strong>auditing:</strong> Em auditoria</li>
          <li><strong>audited:</strong> Auditado / Auditada</li>
          <li><strong>approved:</strong> Aprovado</li>
          <li><strong>expired:</strong> Expirada</li>
          <li>Mantenha textos curtos e diretos (máximo 2-3 palavras)</li>
          <li>Use variantes consistentemente através do sistema</li>
        </ul>
      </div>
    </div>
  `,
});
