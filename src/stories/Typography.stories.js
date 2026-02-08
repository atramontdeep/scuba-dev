export default {
  title: 'Design System/Tokens/Typography',
  parameters: {
    docs: {
      description: {
        component: 'Estilos de tipografia do Scuba Design System. Todos os textos usam Poppins e context-color-text-primary.'
      }
    }
  }
};

// Showcase de todos os Headings
export const Headings = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Headings do Scuba</h2>
      
      <!-- H1 -->
      <div style="margin-bottom: 48px; padding-bottom: 32px; border-bottom: 1px solid #e5e7eb;">
        <h1 style="
          font-family: var(--type-font-family-body, 'Poppins', sans-serif);
          font-size: 32px;
          font-weight: 700;
          line-height: 40px;
          color: var(--context-color-text-primary, #191919);
          margin: 0 0 16px 0;
        ">
          H1 Heading
        </h1>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; font-size: 14px; color: #6b7280;">
          <div><strong>Pixel:</strong> 32px</div>
          <div><strong>Rem:</strong> 2rem</div>
          <div><strong>Line Height:</strong> 40px</div>
          <div><strong>Weight:</strong> Bold (700)</div>
        </div>
        <div style="margin-top: 12px; padding: 12px; background: #f9fafb; border-radius: 4px; font-size: 13px; color: #6b7280;">
          Token: <code>$heading-4xl</code>
        </div>
      </div>

      <!-- H2 -->
      <div style="margin-bottom: 48px; padding-bottom: 32px; border-bottom: 1px solid #e5e7eb;">
        <h2 style="
          font-family: var(--type-font-family-body, 'Poppins', sans-serif);
          font-size: 24px;
          font-weight: 700;
          line-height: 32px;
          color: var(--context-color-text-primary, #191919);
          margin: 0 0 16px 0;
        ">
          H2 Heading
        </h2>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; font-size: 14px; color: #6b7280;">
          <div><strong>Pixel:</strong> 24px</div>
          <div><strong>Rem:</strong> 1.5rem</div>
          <div><strong>Line Height:</strong> 32px</div>
          <div><strong>Weight:</strong> Bold (700)</div>
        </div>
        <div style="margin-top: 12px; padding: 12px; background: #f9fafb; border-radius: 4px; font-size: 13px; color: #6b7280;">
          Token: <code>$heading-3xl</code>
        </div>
      </div>

      <!-- H3 -->
      <div style="margin-bottom: 48px; padding-bottom: 32px; border-bottom: 1px solid #e5e7eb;">
        <h3 style="
          font-family: var(--type-font-family-body, 'Poppins', sans-serif);
          font-size: 20px;
          font-weight: 700;
          line-height: 32px;
          color: var(--context-color-text-primary, #191919);
          margin: 0 0 16px 0;
        ">
          H3 Heading
        </h3>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; font-size: 14px; color: #6b7280;">
          <div><strong>Pixel:</strong> 20px</div>
          <div><strong>Rem:</strong> 1.25rem</div>
          <div><strong>Line Height:</strong> 32px</div>
          <div><strong>Weight:</strong> Bold (700)</div>
        </div>
        <div style="margin-top: 12px; padding: 12px; background: #f9fafb; border-radius: 4px; font-size: 13px; color: #6b7280;">
          Token: <code>$heading-2xl</code>
        </div>
      </div>

      <!-- H4 -->
      <div style="margin-bottom: 48px; padding-bottom: 32px; border-bottom: 1px solid #e5e7eb;">
        <h4 style="
          font-family: var(--type-font-family-body, 'Poppins', sans-serif);
          font-size: 16px;
          font-weight: 700;
          line-height: 24px;
          color: var(--context-color-text-primary, #191919);
          margin: 0 0 16px 0;
        ">
          H4 Heading
        </h4>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; font-size: 14px; color: #6b7280;">
          <div><strong>Pixel:</strong> 16px</div>
          <div><strong>Rem:</strong> 1rem</div>
          <div><strong>Line Height:</strong> 24px</div>
          <div><strong>Weight:</strong> Bold (700)</div>
        </div>
        <div style="margin-top: 12px; padding: 12px; background: #f9fafb; border-radius: 4px; font-size: 13px; color: #6b7280;">
          Token: <code>$heading-xl</code>
        </div>
      </div>

      <!-- H5 -->
      <div style="margin-bottom: 48px;">
        <h5 style="
          font-family: var(--type-font-family-body, 'Poppins', sans-serif);
          font-size: 14px;
          font-weight: 700;
          line-height: 20px;
          color: var(--context-color-text-primary, #191919);
          margin: 0 0 16px 0;
        ">
          H5 Heading
        </h5>
        <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; font-size: 14px; color: #6b7280;">
          <div><strong>Pixel:</strong> 14px</div>
          <div><strong>Rem:</strong> 0.875rem</div>
          <div><strong>Line Height:</strong> 20px</div>
          <div><strong>Weight:</strong> Bold (700)</div>
        </div>
        <div style="margin-top: 12px; padding: 12px; background: #f9fafb; border-radius: 4px; font-size: 13px; color: #6b7280;">
          Token: <code>$heading-lg</code>
        </div>
      </div>
    </div>
  `,
});

// Guia de Classes CSS
export const CSSClasses = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Classes CSS Recomendadas</h2>
      
      <div style="margin-bottom: 32px; padding: 20px; background: #eff6ff; border-left: 4px solid #0086cd; border-radius: 4px;">
        <p style="margin: 0 0 12px; color: #1e3a8a; line-height: 1.6; font-weight: 600;">
          💡 Abordagem Scuba: Classes Utilitárias
        </p>
        <p style="margin: 0; color: #1e3a8a; line-height: 1.6;">
          Use <strong>classes utilitárias</strong> em vez de componentes Vue. 
          Componentes só se necessário para lógica adicional.
        </p>
      </div>

      <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Código CSS</h3>
      <div style="background: #1e293b; color: #e2e8f0; padding: 24px; border-radius: 8px; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.8; overflow-x: auto; margin-bottom: 32px;">
<pre style="margin: 0;">/* typography.css */

.heading-4xl {
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
  font-size: 32px;
  line-height: 40px;
  font-weight: 700;
  color: var(--context-color-text-primary, #191919);
}

.heading-3xl {
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
  font-size: 24px;
  line-height: 32px;
  font-weight: 700;
  color: var(--context-color-text-primary, #191919);
}

.heading-2xl {
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
  font-size: 20px;
  line-height: 32px;
  font-weight: 700;
  color: var(--context-color-text-primary, #191919);
}

.heading-xl {
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
  font-size: 16px;
  line-height: 24px;
  font-weight: 700;
  color: var(--context-color-text-primary, #191919);
}

.heading-lg {
  font-family: var(--type-font-family-body, 'Poppins', sans-serif);
  font-size: 14px;
  line-height: 20px;
  font-weight: 700;
  color: var(--context-color-text-primary, #191919);
}</pre>
      </div>

      <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Como Usar</h3>
      <div style="background: #1e293b; color: #e2e8f0; padding: 24px; border-radius: 8px; font-family: 'Courier New', monospace; font-size: 13px; line-height: 1.8;">
<pre style="margin: 0;">&lt;h1 class="heading-4xl"&gt;Título Principal&lt;/h1&gt;
&lt;h2 class="heading-3xl"&gt;Subtítulo&lt;/h2&gt;
&lt;h3 class="heading-2xl"&gt;Seção&lt;/h3&gt;</pre>
      </div>
    </div>
  `,
});

// Tabela de Tokens
export const DesignTokens = () => ({
  template: `
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Tokens de Tipografia</h2>
      
      <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
        <thead>
          <tr style="background: #f9fafb; text-align: left;">
            <th style="padding: 12px; border-bottom: 2px solid #e5e7eb; font-weight: 600;">Token</th>
            <th style="padding: 12px; border-bottom: 2px solid #e5e7eb; font-weight: 600;">Valor</th>
            <th style="padding: 12px; border-bottom: 2px solid #e5e7eb; font-weight: 600;">Uso</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><code>--type-font-family-body</code></td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Poppins, sans-serif</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Fonte padrão</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><code>--type-font-weight-bold</code></td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">700</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Headings</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><code>--type-font-weight-semibold</code></td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">600</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Labels, botões</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><code>--type-font-weight-medium</code></td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">500</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Subtítulos</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><code>--type-font-weight-regular</code></td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">400</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Body text</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><code>--context-color-text-primary</code></td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">#191919</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Cor padrão</td>
          </tr>
          <tr>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><code>--context-color-text-secondary</code></td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">#555555</td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Texto secundário</td>
          </tr>
        </tbody>
      </table>
    </div>
  `,
});
