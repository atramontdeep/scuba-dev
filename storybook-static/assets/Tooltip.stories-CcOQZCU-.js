import{T as o}from"./Tooltip-aWuJp9S4.js";import{B as n}from"./Button-B2uSwTAf.js";import"./vue.esm-bundler-BXouRCJi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const Ft={title:"Scuba/Tooltip",component:o,tags:["autodocs"],argTypes:{content:{control:"text",description:"Conteúdo do tooltip"},position:{control:"select",options:["top","bottom","left","right"],description:"Posição do tooltip"},variant:{control:"select",options:["dark","light"],description:"Variante visual"},trigger:{control:"select",options:["hover","click","focus","manual"],description:"Modo de ativação"},showArrow:{control:"boolean",description:"Mostrar seta"},delay:{control:"number",description:"Delay para exibir (ms)"},offset:{control:"number",description:"Distância do elemento (px)"},disabled:{control:"boolean",description:"Desabilitar tooltip"},maxWidth:{control:"text",description:"Largura máxima"}}},t=Pt=>({components:{Tooltip:o,Button:n},setup(){return{args:Pt}},template:`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  `}),i=t.bind({});i.args={content:"Este é um tooltip de exemplo",position:"top",variant:"dark",trigger:"hover",showArrow:!0,delay:200,offset:8};i.parameters={docs:{description:{story:"Use os controles abaixo para testar diferentes configurações do tooltip."}}};const e=t.bind({});e.args={content:"Tooltip no topo",position:"top",variant:"dark"};const r=t.bind({});r.args={content:"Tooltip embaixo",position:"bottom",variant:"dark"};const a=t.bind({});a.args={content:"Tooltip à esquerda",position:"left",variant:"dark"};const s=t.bind({});s.args={content:"Tooltip à direita",position:"right",variant:"dark"};const l=t.bind({});l.args={content:"Tooltip escuro (padrão)",position:"top",variant:"dark"};const p=t.bind({});p.args={content:"Tooltip claro",position:"top",variant:"light"};const d=t.bind({});d.args={content:"Mostrado ao passar o mouse",position:"top",trigger:"hover"};const c=t.bind({});c.args={content:"Mostrado ao clicar",position:"top",trigger:"click"};const g=t.bind({});g.args={content:"Mostrado ao focar",position:"top",trigger:"focus"};const m=t.bind({});m.args={content:"Tooltip sem seta",position:"top",variant:"dark",showArrow:!1};const x=t.bind({});x.args={content:"Este é um tooltip com um texto muito longo que demonstra como o componente lida com conteúdo extenso. Ele tem largura máxima configurável.",position:"top",variant:"dark",maxWidth:"250px"};const v=t.bind({});v.args={content:"Este tooltip não será mostrado",position:"top",variant:"dark",disabled:!0};const u=()=>({components:{Tooltip:o,Button:n},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Positions</h2>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Top</h3>
          <Tooltip content="Tooltip no topo" position="top">
            <Button variant="solid" label="Top" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Bottom</h3>
          <Tooltip content="Tooltip embaixo" position="bottom">
            <Button variant="solid" label="Bottom" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Left</h3>
          <Tooltip content="Tooltip à esquerda" position="left">
            <Button variant="solid" label="Left" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Right</h3>
          <Tooltip content="Tooltip à direita" position="right">
            <Button variant="solid" label="Right" size="sm" />
          </Tooltip>
        </div>
      </div>
    </div>
  `}),f=()=>({components:{Tooltip:o,Button:n},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Variants</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Dark (Default)</h3>
          <Tooltip content="Tooltip escuro" variant="dark" position="top">
            <Button variant="solid" label="Dark Tooltip" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Light</h3>
          <Tooltip content="Tooltip claro" variant="light" position="top">
            <Button variant="solid" label="Light Tooltip" />
          </Tooltip>
        </div>
      </div>
    </div>
  `}),y=()=>({components:{Tooltip:o,Button:n},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Triggers</h2>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Hover (Default)</h3>
          <Tooltip content="Mostrado ao passar o mouse" trigger="hover" position="top">
            <Button variant="outline" label="Hover Me" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Click</h3>
          <Tooltip content="Mostrado ao clicar" trigger="click" position="top">
            <Button variant="outline" label="Click Me" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Focus</h3>
          <Tooltip content="Mostrado ao focar (Tab)" trigger="focus" position="top">
            <Button variant="outline" label="Focus Me" />
          </Tooltip>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <p style="color: #6b7280; line-height: 1.6; font-size: 14px;">
          <strong>Hover:</strong> Mostra ao passar o mouse<br/>
          <strong>Click:</strong> Mostra/esconde ao clicar<br/>
          <strong>Focus:</strong> Mostra quando o elemento recebe foco (útil para acessibilidade)
        </p>
      </div>
    </div>
  `}),h=()=>({components:{Tooltip:o,Button:n},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Arrow</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Com Seta (Default)</h3>
          <Tooltip content="Tooltip com seta" :showArrow="true" position="top">
            <Button variant="solid" label="With Arrow" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Sem Seta</h3>
          <Tooltip content="Tooltip sem seta" :showArrow="false" position="top">
            <Button variant="solid" label="No Arrow" />
          </Tooltip>
        </div>
      </div>
    </div>
  `}),b=()=>({components:{Tooltip:o},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif; display: flex; justify-content: center;">
      <Tooltip content="Clique para mais informações" position="right">
        <button style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--semantic-color-primary-500);
          color: white;
          border: none;
          cursor: pointer;
          font-size: 18px;
        ">
          <i class="ph ph-info"></i>
        </button>
      </Tooltip>
    </div>
  `}),T=()=>({components:{Tooltip:o,Button:n},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif; display: flex; justify-content: center;">
      <Tooltip position="top" maxWidth="300px">
        <template #content>
          <div style="text-align: left;">
            <div style="font-weight: 600; margin-bottom: 4px;">Título do Tooltip</div>
            <div style="font-size: 12px; opacity: 0.9;">
              Este tooltip usa um slot customizado para conteúdo mais complexo.
            </div>
          </div>
        </template>
        <Button variant="solid" label="Custom Content" />
      </Tooltip>
    </div>
  `}),z=()=>({components:{Tooltip:o,Button:n},template:`
    <div style="padding: 60px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Tooltip Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 60px; margin-bottom: 60px;">
        <!-- Top Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Top + Dark</div>
          <Tooltip content="Tooltip no topo escuro" position="top" variant="dark">
            <Button variant="solid" size="sm" label="Top" />
          </Tooltip>
        </div>

        <!-- Top Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Top + Light</div>
          <Tooltip content="Tooltip no topo claro" position="top" variant="light">
            <Button variant="solid" size="sm" label="Top" />
          </Tooltip>
        </div>

        <!-- Bottom Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Bottom + Dark</div>
          <Tooltip content="Tooltip embaixo escuro" position="bottom" variant="dark">
            <Button variant="solid" size="sm" label="Bottom" />
          </Tooltip>
        </div>

        <!-- Bottom Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Bottom + Light</div>
          <Tooltip content="Tooltip embaixo claro" position="bottom" variant="light">
            <Button variant="solid" size="sm" label="Bottom" />
          </Tooltip>
        </div>

        <!-- Left Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Left + Dark</div>
          <Tooltip content="Tooltip à esquerda escuro" position="left" variant="dark">
            <Button variant="solid" size="sm" label="Left" />
          </Tooltip>
        </div>

        <!-- Left Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Left + Light</div>
          <Tooltip content="Tooltip à esquerda claro" position="left" variant="light">
            <Button variant="solid" size="sm" label="Left" />
          </Tooltip>
        </div>

        <!-- Right Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Right + Dark</div>
          <Tooltip content="Tooltip à direita escuro" position="right" variant="dark">
            <Button variant="solid" size="sm" label="Right" />
          </Tooltip>
        </div>

        <!-- Right Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Right + Light</div>
          <Tooltip content="Tooltip à direita claro" position="right" variant="light">
            <Button variant="solid" size="sm" label="Right" />
          </Tooltip>
        </div>

        <!-- Click Trigger -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Click Trigger</div>
          <Tooltip content="Clique para alternar" position="top" trigger="click">
            <Button variant="outline" size="sm" label="Click" />
          </Tooltip>
        </div>

        <!-- No Arrow -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Sem Seta</div>
          <Tooltip content="Tooltip sem seta" position="top" :showArrow="false">
            <Button variant="outline" size="sm" label="No Arrow" />
          </Tooltip>
        </div>

        <!-- Long Text -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Texto Longo</div>
          <Tooltip content="Este é um tooltip com texto muito longo que demonstra quebra de linha" position="top" maxWidth="150px">
            <Button variant="outline" size="sm" label="Long Text" />
          </Tooltip>
        </div>

        <!-- Icon Button -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Com Ícone</div>
          <Tooltip content="Informação adicional" position="top">
            <button style="
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: var(--semantic-color-primary-500);
              color: white;
              border: none;
              cursor: pointer;
              font-size: 18px;
            ">
              <i class="ph ph-info"></i>
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  `}),w=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-inverted</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-inverted</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--shadow-md</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-fast</code></td><td style="text-align: right;">150ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--z-index-tooltip</code></td><td style="text-align: right;">1070</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa <code>role="tooltip"</code> para identificação semântica</li>
          <li>Atributo <code>aria-hidden</code> gerenciado dinamicamente</li>
          <li>Suporte a trigger por <code>focus</code> para navegação por teclado</li>
          <li>Posicionamento automático para evitar sair da viewport</li>
          <li>z-index mais alto (1070) para garantir visibilidade</li>
        </ul>
      </div>
    </div>
  `});var B,k,L;i.parameters={...i.parameters,docs:{...(B=i.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(L=(k=i.parameters)==null?void 0:k.docs)==null?void 0:L.source}}};var S,D,C;e.parameters={...e.parameters,docs:{...(S=e.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(C=(D=e.parameters)==null?void 0:D.docs)==null?void 0:C.source}}};var A,j,E;r.parameters={...r.parameters,docs:{...(A=r.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(E=(j=r.parameters)==null?void 0:j.docs)==null?void 0:E.source}}};var P,M,H;a.parameters={...a.parameters,docs:{...(P=a.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(H=(M=a.parameters)==null?void 0:M.docs)==null?void 0:H.source}}};var q,R,F;s.parameters={...s.parameters,docs:{...(q=s.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(F=(R=s.parameters)==null?void 0:R.docs)==null?void 0:F.source}}};var W,N,I;l.parameters={...l.parameters,docs:{...(W=l.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(I=(N=l.parameters)==null?void 0:N.docs)==null?void 0:I.source}}};var U,V,O;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(O=(V=p.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};var _,G,J;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(J=(G=d.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Q,X;c.parameters={...c.parameters,docs:{...(K=c.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(X=(Q=c.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;g.parameters={...g.parameters,docs:{...(Y=g.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...($=(Z=g.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var tt,ot,nt;m.parameters={...m.parameters,docs:{...(tt=m.parameters)==null?void 0:tt.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(nt=(ot=m.parameters)==null?void 0:ot.docs)==null?void 0:nt.source}}};var it,et,rt;x.parameters={...x.parameters,docs:{...(it=x.parameters)==null?void 0:it.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(rt=(et=x.parameters)==null?void 0:et.docs)==null?void 0:rt.source}}};var at,st,lt;v.parameters={...v.parameters,docs:{...(at=v.parameters)==null?void 0:at.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(lt=(st=v.parameters)==null?void 0:st.docs)==null?void 0:lt.source}}};var pt,dt,ct;u.parameters={...u.parameters,docs:{...(pt=u.parameters)==null?void 0:pt.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Positions</h2>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Top</h3>
          <Tooltip content="Tooltip no topo" position="top">
            <Button variant="solid" label="Top" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Bottom</h3>
          <Tooltip content="Tooltip embaixo" position="bottom">
            <Button variant="solid" label="Bottom" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Left</h3>
          <Tooltip content="Tooltip à esquerda" position="left">
            <Button variant="solid" label="Left" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Right</h3>
          <Tooltip content="Tooltip à direita" position="right">
            <Button variant="solid" label="Right" size="sm" />
          </Tooltip>
        </div>
      </div>
    </div>
  \`
})`,...(ct=(dt=u.parameters)==null?void 0:dt.docs)==null?void 0:ct.source}}};var gt,mt,xt;f.parameters={...f.parameters,docs:{...(gt=f.parameters)==null?void 0:gt.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Variants</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Dark (Default)</h3>
          <Tooltip content="Tooltip escuro" variant="dark" position="top">
            <Button variant="solid" label="Dark Tooltip" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Light</h3>
          <Tooltip content="Tooltip claro" variant="light" position="top">
            <Button variant="solid" label="Light Tooltip" />
          </Tooltip>
        </div>
      </div>
    </div>
  \`
})`,...(xt=(mt=f.parameters)==null?void 0:mt.docs)==null?void 0:xt.source}}};var vt,ut,ft;y.parameters={...y.parameters,docs:{...(vt=y.parameters)==null?void 0:vt.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Triggers</h2>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Hover (Default)</h3>
          <Tooltip content="Mostrado ao passar o mouse" trigger="hover" position="top">
            <Button variant="outline" label="Hover Me" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Click</h3>
          <Tooltip content="Mostrado ao clicar" trigger="click" position="top">
            <Button variant="outline" label="Click Me" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Focus</h3>
          <Tooltip content="Mostrado ao focar (Tab)" trigger="focus" position="top">
            <Button variant="outline" label="Focus Me" />
          </Tooltip>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <p style="color: #6b7280; line-height: 1.6; font-size: 14px;">
          <strong>Hover:</strong> Mostra ao passar o mouse<br/>
          <strong>Click:</strong> Mostra/esconde ao clicar<br/>
          <strong>Focus:</strong> Mostra quando o elemento recebe foco (útil para acessibilidade)
        </p>
      </div>
    </div>
  \`
})`,...(ft=(ut=y.parameters)==null?void 0:ut.docs)==null?void 0:ft.source}}};var yt,ht,bt;h.parameters={...h.parameters,docs:{...(yt=h.parameters)==null?void 0:yt.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Arrow</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Com Seta (Default)</h3>
          <Tooltip content="Tooltip com seta" :showArrow="true" position="top">
            <Button variant="solid" label="With Arrow" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Sem Seta</h3>
          <Tooltip content="Tooltip sem seta" :showArrow="false" position="top">
            <Button variant="solid" label="No Arrow" />
          </Tooltip>
        </div>
      </div>
    </div>
  \`
})`,...(bt=(ht=h.parameters)==null?void 0:ht.docs)==null?void 0:bt.source}}};var Tt,zt,wt;b.parameters={...b.parameters,docs:{...(Tt=b.parameters)==null?void 0:Tt.docs,source:{originalSource:`() => ({
  components: {
    Tooltip
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif; display: flex; justify-content: center;">
      <Tooltip content="Clique para mais informações" position="right">
        <button style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--semantic-color-primary-500);
          color: white;
          border: none;
          cursor: pointer;
          font-size: 18px;
        ">
          <i class="ph ph-info"></i>
        </button>
      </Tooltip>
    </div>
  \`
})`,...(wt=(zt=b.parameters)==null?void 0:zt.docs)==null?void 0:wt.source}}};var Bt,kt,Lt;T.parameters={...T.parameters,docs:{...(Bt=T.parameters)==null?void 0:Bt.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif; display: flex; justify-content: center;">
      <Tooltip position="top" maxWidth="300px">
        <template #content>
          <div style="text-align: left;">
            <div style="font-weight: 600; margin-bottom: 4px;">Título do Tooltip</div>
            <div style="font-size: 12px; opacity: 0.9;">
              Este tooltip usa um slot customizado para conteúdo mais complexo.
            </div>
          </div>
        </template>
        <Button variant="solid" label="Custom Content" />
      </Tooltip>
    </div>
  \`
})`,...(Lt=(kt=T.parameters)==null?void 0:kt.docs)==null?void 0:Lt.source}}};var St,Dt,Ct;z.parameters={...z.parameters,docs:{...(St=z.parameters)==null?void 0:St.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 60px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Tooltip Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 60px; margin-bottom: 60px;">
        <!-- Top Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Top + Dark</div>
          <Tooltip content="Tooltip no topo escuro" position="top" variant="dark">
            <Button variant="solid" size="sm" label="Top" />
          </Tooltip>
        </div>

        <!-- Top Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Top + Light</div>
          <Tooltip content="Tooltip no topo claro" position="top" variant="light">
            <Button variant="solid" size="sm" label="Top" />
          </Tooltip>
        </div>

        <!-- Bottom Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Bottom + Dark</div>
          <Tooltip content="Tooltip embaixo escuro" position="bottom" variant="dark">
            <Button variant="solid" size="sm" label="Bottom" />
          </Tooltip>
        </div>

        <!-- Bottom Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Bottom + Light</div>
          <Tooltip content="Tooltip embaixo claro" position="bottom" variant="light">
            <Button variant="solid" size="sm" label="Bottom" />
          </Tooltip>
        </div>

        <!-- Left Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Left + Dark</div>
          <Tooltip content="Tooltip à esquerda escuro" position="left" variant="dark">
            <Button variant="solid" size="sm" label="Left" />
          </Tooltip>
        </div>

        <!-- Left Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Left + Light</div>
          <Tooltip content="Tooltip à esquerda claro" position="left" variant="light">
            <Button variant="solid" size="sm" label="Left" />
          </Tooltip>
        </div>

        <!-- Right Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Right + Dark</div>
          <Tooltip content="Tooltip à direita escuro" position="right" variant="dark">
            <Button variant="solid" size="sm" label="Right" />
          </Tooltip>
        </div>

        <!-- Right Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Right + Light</div>
          <Tooltip content="Tooltip à direita claro" position="right" variant="light">
            <Button variant="solid" size="sm" label="Right" />
          </Tooltip>
        </div>

        <!-- Click Trigger -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Click Trigger</div>
          <Tooltip content="Clique para alternar" position="top" trigger="click">
            <Button variant="outline" size="sm" label="Click" />
          </Tooltip>
        </div>

        <!-- No Arrow -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Sem Seta</div>
          <Tooltip content="Tooltip sem seta" position="top" :showArrow="false">
            <Button variant="outline" size="sm" label="No Arrow" />
          </Tooltip>
        </div>

        <!-- Long Text -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Texto Longo</div>
          <Tooltip content="Este é um tooltip com texto muito longo que demonstra quebra de linha" position="top" maxWidth="150px">
            <Button variant="outline" size="sm" label="Long Text" />
          </Tooltip>
        </div>

        <!-- Icon Button -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Com Ícone</div>
          <Tooltip content="Informação adicional" position="top">
            <button style="
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: var(--semantic-color-primary-500);
              color: white;
              border: none;
              cursor: pointer;
              font-size: 18px;
            ">
              <i class="ph ph-info"></i>
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  \`
})`,...(Ct=(Dt=z.parameters)==null?void 0:Dt.docs)==null?void 0:Ct.source}}};var At,jt,Et;w.parameters={...w.parameters,docs:{...(At=w.parameters)==null?void 0:At.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-inverted</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-inverted</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--shadow-md</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-fast</code></td><td style="text-align: right;">150ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--z-index-tooltip</code></td><td style="text-align: right;">1070</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa <code>role="tooltip"</code> para identificação semântica</li>
          <li>Atributo <code>aria-hidden</code> gerenciado dinamicamente</li>
          <li>Suporte a trigger por <code>focus</code> para navegação por teclado</li>
          <li>Posicionamento automático para evitar sair da viewport</li>
          <li>z-index mais alto (1070) para garantir visibilidade</li>
        </ul>
      </div>
    </div>
  \`
})`,...(Et=(jt=w.parameters)==null?void 0:jt.docs)==null?void 0:Et.source}}};const Wt=["Playground","Top","Bottom","Left","Right","Dark","Light","HoverTrigger","ClickTrigger","FocusTrigger","NoArrow","LongText","Disabled","AllPositions","Variants","Triggers","ArrowOptions","WithIcon","CustomContent","Showcase","DesignTokens"];export{u as AllPositions,h as ArrowOptions,r as Bottom,c as ClickTrigger,T as CustomContent,l as Dark,w as DesignTokens,v as Disabled,g as FocusTrigger,d as HoverTrigger,a as Left,p as Light,x as LongText,m as NoArrow,i as Playground,s as Right,z as Showcase,e as Top,y as Triggers,f as Variants,b as WithIcon,Wt as __namedExportsOrder,Ft as default};
