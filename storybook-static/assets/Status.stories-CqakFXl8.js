import{c as it}from"./vue.esm-bundler-BXouRCJi.js";import{S as y}from"./Status-C94A-7Hq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const dt={"Não iniciada":"gray","Em resposta":"gray","Em auditoria":"teal-light","Em andamento":"blue","Para aprovação":"blue-dark",Validado:"blue-dark",Respondido:"cyan","Em validação":"purple","Em ajuste":"pink",Expirada:"red","A expirar":"orange",Auditada:"teal",Concluída:"green",Auditado:"yellow",Aprovado:"green-approved","Em ajuste de auditoria":"audit-adjustment"},ct={title:"Scuba/Status",component:y,tags:["autodocs"],argTypes:{status:{control:"select",options:Object.keys(dt),description:"Status do chip",defaultValue:"Aprovado"}}},t=m=>({components:{Status:y},setup(){const rt=it(()=>dt[m.status]||"gray");return{args:m,variant:rt}},template:'<Status :variant="variant">{{ args.status }}</Status>'}),a=t.bind({});a.args={status:"Aprovado"};const e=t.bind({});e.args={status:"Não iniciada"};const s=t.bind({});s.args={status:"Em andamento"};const n=t.bind({});n.args={status:"Em validação"};const d=t.bind({});d.args={status:"Em ajuste"};const r=t.bind({});r.args={status:"Expirada"};const i=t.bind({});i.args={status:"A expirar"};const o=t.bind({});o.args={status:"Auditada"};const l=t.bind({});l.args={status:"Concluída"};const p=t.bind({});p.args={status:"Auditado"};const c=t.bind({});c.args={status:"Respondido"};const g=()=>({components:{Status:y},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Status Chips - Todas as Cores</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <Status variant="gray">Não iniciada</Status>
        <Status variant="blue">Em andamento</Status>
        <Status variant="purple">Em validação</Status>
        <Status variant="pink">Em ajuste</Status>
        <Status variant="red">Expirada</Status>
        <Status variant="orange">A expirar</Status>
        <Status variant="yellow">Em ajuste</Status>
        <Status variant="green">Concluída</Status>
        <Status variant="teal">Auditada</Status>
        <Status variant="cyan">Respondido</Status>
      </div>

      <h2 style="margin: 48px 0 32px;">Coletas (Example)</h2>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Gray:</span>
          <Status variant="gray">Não iniciada</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Blue:</span>
          <Status variant="blue">Em andamento</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Blue Dark:</span>
          <Status variant="blue-dark">Para aprovação</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Red:</span>
          <Status variant="red">Expirada</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Orange:</span>
          <Status variant="orange">A expirar</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Teal:</span>
          <Status variant="teal">Auditada</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Green:</span>
          <Status variant="green">Concluída</Status>
        </div>
      </div>

      <h2 style="margin: 48px 0 32px;">Indicadores (Example)</h2>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Gray:</span>
          <Status variant="gray">Em resposta</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Cyan:</span>
          <Status variant="cyan">Respondido</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Purple:</span>
          <Status variant="purple">Em validação</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Pink:</span>
          <Status variant="pink">Em ajuste</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Blue Dark:</span>
          <Status variant="blue-dark">Validado</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Teal Light:</span>
          <Status variant="teal-light">Em auditoria</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Yellow:</span>
          <Status variant="yellow">Auditado</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Green Approved:</span>
          <Status variant="green-approved">Aprovado</Status>
        </div>
      </div>
    </div>
  `}),u=()=>({components:{Status:y},template:`
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
              <Status variant="green">Concluída</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q2 2024</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa B</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="blue">Em andamento</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q3 2024</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa C</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="orange">A expirar</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q4 2024</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa D</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="gray">Não iniciada</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q1 2023</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa E</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="red">Expirada</Status>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `}),x=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Status Colors (Background)</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-gray-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-blue-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-purple-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-pink-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-red-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-orange-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-yellow-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-green-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-teal-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-cyan-background</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Status Colors (Text)</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-gray-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-blue-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-purple-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-pink-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-red-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-orange-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-yellow-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-green-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-teal-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-cyan-text</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
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
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Gray:</strong> Status neutro, não iniciado, em espera, em resposta</li>
          <li><strong>Blue:</strong> Em andamento</li>
          <li><strong>Blue Dark:</strong> Para aprovação, validado</li>
          <li><strong>Purple:</strong> Em validação, em revisão</li>
          <li><strong>Pink:</strong> Em ajuste, necessita atenção</li>
          <li><strong>Red:</strong> Expirada, cancelada, rejeitada</li>
          <li><strong>Orange:</strong> A expirar, urgente, atenção</li>
          <li><strong>Yellow:</strong> Auditado</li>
          <li><strong>Green:</strong> Concluída, finalizada com sucesso</li>
          <li><strong>Green Approved:</strong> Aprovado</li>
          <li><strong>Teal:</strong> Auditada</li>
          <li><strong>Teal Light:</strong> Em auditoria</li>
          <li><strong>Cyan:</strong> Respondido, processado</li>
          <li>Mantenha textos curtos e diretos (máximo 2-3 palavras)</li>
          <li>Use cores consistentemente através do sistema</li>
        </ul>
      </div>
    </div>
  `});var v,b,S;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    Status
  },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'gray');
    return {
      args,
      variant
    };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>'
})`,...(S=(b=a.parameters)==null?void 0:b.docs)==null?void 0:S.source}}};var h,f,E;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Status
  },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'gray');
    return {
      args,
      variant
    };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>'
})`,...(E=(f=e.parameters)==null?void 0:f.docs)==null?void 0:E.source}}};var w,A,k;s.parameters={...s.parameters,docs:{...(w=s.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    Status
  },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'gray');
    return {
      args,
      variant
    };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>'
})`,...(k=(A=s.parameters)==null?void 0:A.docs)==null?void 0:k.source}}};var T,C,P;n.parameters={...n.parameters,docs:{...(T=n.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    Status
  },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'gray');
    return {
      args,
      variant
    };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>'
})`,...(P=(C=n.parameters)==null?void 0:C.docs)==null?void 0:P.source}}};var z,B,G;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    Status
  },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'gray');
    return {
      args,
      variant
    };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>'
})`,...(G=(B=d.parameters)==null?void 0:B.docs)==null?void 0:G.source}}};var U,D,R;r.parameters={...r.parameters,docs:{...(U=r.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    Status
  },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'gray');
    return {
      args,
      variant
    };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>'
})`,...(R=(D=r.parameters)==null?void 0:D.docs)==null?void 0:R.source}}};var j,_,M;i.parameters={...i.parameters,docs:{...(j=i.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    Status
  },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'gray');
    return {
      args,
      variant
    };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>'
})`,...(M=(_=i.parameters)==null?void 0:_.docs)==null?void 0:M.source}}};var Q,N,O;o.parameters={...o.parameters,docs:{...(Q=o.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  components: {
    Status
  },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'gray');
    return {
      args,
      variant
    };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>'
})`,...(O=(N=o.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var V,Y,I;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    Status
  },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'gray');
    return {
      args,
      variant
    };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>'
})`,...(I=(Y=l.parameters)==null?void 0:Y.docs)==null?void 0:I.source}}};var L,q,F;p.parameters={...p.parameters,docs:{...(L=p.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    Status
  },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'gray');
    return {
      args,
      variant
    };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>'
})`,...(F=(q=p.parameters)==null?void 0:q.docs)==null?void 0:F.source}}};var H,J,K;c.parameters={...c.parameters,docs:{...(H=c.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    Status
  },
  setup() {
    const variant = computed(() => STATUS_MAP[args.status] || 'gray');
    return {
      args,
      variant
    };
  },
  template: '<Status :variant="variant">{{ args.status }}</Status>'
})`,...(K=(J=c.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var W,X,Z;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`() => ({
  components: {
    Status
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Status Chips - Todas as Cores</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center;">
        <Status variant="gray">Não iniciada</Status>
        <Status variant="blue">Em andamento</Status>
        <Status variant="purple">Em validação</Status>
        <Status variant="pink">Em ajuste</Status>
        <Status variant="red">Expirada</Status>
        <Status variant="orange">A expirar</Status>
        <Status variant="yellow">Em ajuste</Status>
        <Status variant="green">Concluída</Status>
        <Status variant="teal">Auditada</Status>
        <Status variant="cyan">Respondido</Status>
      </div>

      <h2 style="margin: 48px 0 32px;">Coletas (Example)</h2>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Gray:</span>
          <Status variant="gray">Não iniciada</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Blue:</span>
          <Status variant="blue">Em andamento</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Blue Dark:</span>
          <Status variant="blue-dark">Para aprovação</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Red:</span>
          <Status variant="red">Expirada</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Orange:</span>
          <Status variant="orange">A expirar</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Teal:</span>
          <Status variant="teal">Auditada</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Green:</span>
          <Status variant="green">Concluída</Status>
        </div>
      </div>

      <h2 style="margin: 48px 0 32px;">Indicadores (Example)</h2>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Gray:</span>
          <Status variant="gray">Em resposta</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Cyan:</span>
          <Status variant="cyan">Respondido</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Purple:</span>
          <Status variant="purple">Em validação</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Pink:</span>
          <Status variant="pink">Em ajuste</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Blue Dark:</span>
          <Status variant="blue-dark">Validado</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Teal Light:</span>
          <Status variant="teal-light">Em auditoria</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Yellow:</span>
          <Status variant="yellow">Auditado</Status>
        </div>
        <div style="display: flex; align-items: center; gap: 16px;">
          <span style="width: 120px; color: #6b7280;">Green Approved:</span>
          <Status variant="green-approved">Aprovado</Status>
        </div>
      </div>
    </div>
  \`
})`,...(Z=(X=g.parameters)==null?void 0:X.docs)==null?void 0:Z.source}}};var $,tt,at;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`() => ({
  components: {
    Status
  },
  template: \`
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
              <Status variant="green">Concluída</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q2 2024</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa B</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="blue">Em andamento</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q3 2024</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa C</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="orange">A expirar</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q4 2024</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa D</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="gray">Não iniciada</Status>
            </td>
          </tr>
          <tr>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Coleta Q1 2023</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">Empresa E</td>
            <td style="padding: 12px; border: 1px solid #e5e7eb;">
              <Status variant="red">Expirada</Status>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  \`
})`,...(at=(tt=u.parameters)==null?void 0:tt.docs)==null?void 0:at.source}}};var et,st,nt;x.parameters={...x.parameters,docs:{...(et=x.parameters)==null?void 0:et.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Status Colors (Background)</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-gray-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-blue-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-purple-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-pink-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-red-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-orange-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-yellow-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-green-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-teal-background</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-cyan-background</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Status Colors (Text)</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-gray-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-blue-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-purple-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-pink-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-red-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-orange-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-yellow-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-green-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-teal-text</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-status-cyan-text</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
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
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Gray:</strong> Status neutro, não iniciado, em espera, em resposta</li>
          <li><strong>Blue:</strong> Em andamento</li>
          <li><strong>Blue Dark:</strong> Para aprovação, validado</li>
          <li><strong>Purple:</strong> Em validação, em revisão</li>
          <li><strong>Pink:</strong> Em ajuste, necessita atenção</li>
          <li><strong>Red:</strong> Expirada, cancelada, rejeitada</li>
          <li><strong>Orange:</strong> A expirar, urgente, atenção</li>
          <li><strong>Yellow:</strong> Auditado</li>
          <li><strong>Green:</strong> Concluída, finalizada com sucesso</li>
          <li><strong>Green Approved:</strong> Aprovado</li>
          <li><strong>Teal:</strong> Auditada</li>
          <li><strong>Teal Light:</strong> Em auditoria</li>
          <li><strong>Cyan:</strong> Respondido, processado</li>
          <li>Mantenha textos curtos e diretos (máximo 2-3 palavras)</li>
          <li>Use cores consistentemente através do sistema</li>
        </ul>
      </div>
    </div>
  \`
})`,...(nt=(st=x.parameters)==null?void 0:st.docs)==null?void 0:nt.source}}};const gt=["Playground","Gray","Blue","Purple","Pink","Red","Orange","Yellow","Green","Teal","Cyan","AllVariants","InTable","DesignTokens"];export{g as AllVariants,s as Blue,c as Cyan,x as DesignTokens,e as Gray,l as Green,u as InTable,i as Orange,d as Pink,a as Playground,n as Purple,r as Red,p as Teal,o as Yellow,gt as __namedExportsOrder,ct as default};
