import{C as b}from"./Checkbox-DlfbFmyF.js";import"./vue.esm-bundler-cjlVRrb_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const oe={title:"Scuba/Checkbox",component:b,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"Estado do checkbox (v-model)"},label:{control:"text",description:"Texto do label"},labelPosition:{control:"select",options:["left","right","none"],description:"Posição do label"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do checkbox"},indeterminate:{control:"boolean",description:"Estado indeterminado (hífen)"},disabled:{control:"boolean",description:"Desabilitado"}}},e=le=>({components:{Checkbox:b},setup(){return{args:le}},template:'<Checkbox v-bind="args" />'}),t=e.bind({});t.args={modelValue:!1,label:"Label",labelPosition:"right",size:"md",indeterminate:!1,disabled:!1};const i=e.bind({});i.args={modelValue:!1,label:"Label",labelPosition:"right",size:"md"};const n=e.bind({});n.args={modelValue:!0,label:"Label",labelPosition:"right",size:"md"};const l=e.bind({});l.args={modelValue:!1,label:"Label",labelPosition:"right",size:"md",indeterminate:!0};const d=e.bind({});d.args={modelValue:!1,label:"Label",labelPosition:"right",size:"md",disabled:!0};const s=e.bind({});s.args={modelValue:!0,label:"Label",labelPosition:"right",size:"md",disabled:!0};const a=e.bind({});a.args={modelValue:!1,label:"Label",labelPosition:"right",size:"md",indeterminate:!0,disabled:!0};const o=e.bind({});o.args={modelValue:!1,label:"Label",labelPosition:"left",size:"md"};const r=e.bind({});r.args={modelValue:!1,label:"",labelPosition:"none",size:"md"};const p=e.bind({});p.args={modelValue:!1,label:"Label",labelPosition:"right",size:"sm"};const c=e.bind({});c.args={modelValue:!1,label:"Label",labelPosition:"right",size:"lg"};const m=()=>({components:{Checkbox:b},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Checkbox States</h2>
      
      <!-- Size Headers -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 24px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SMALL -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Small (16px)</h3>
        
        <!-- Unchecked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Unchecked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Checked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Checked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="sm" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="sm" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="sm" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Indeterminate -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Indeterminate</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" indeterminate />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" indeterminate disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" indeterminate style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>
      </div>

      <!-- MEDIUM -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Medium (20px)</h3>
        
        <!-- Unchecked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Unchecked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Checked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Checked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="md" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="md" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="md" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Indeterminate -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Indeterminate</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" indeterminate />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" indeterminate disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" indeterminate style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>
      </div>

      <!-- LARGE -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Large (24px)</h3>
        
        <!-- Unchecked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Unchecked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Checked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Checked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="lg" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="lg" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="lg" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Indeterminate -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Indeterminate</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" indeterminate />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" indeterminate disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" indeterminate style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>
      </div>
    </div>
  `}),g=()=>({components:{Checkbox:b},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Label Positions</h2>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Label Right (Default)</h3>
          <Checkbox :modelValue="false" label="Label" labelPosition="right" size="md" />
        </div>

        <div>
          <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Label Left</h3>
          <Checkbox :modelValue="false" label="Label" labelPosition="left" size="md" />
        </div>

        <div>
          <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">No Label</h3>
          <Checkbox :modelValue="false" labelPosition="none" size="md" />
        </div>
      </div>
    </div>
  `}),x=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td><td style="text-align: right;">#0086cd</td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td><td style="text-align: right;">#0942a1</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td><td style="text-align: right;">#555555</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-dark</code></td><td style="text-align: right;">#0086cd</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">#191919</td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td><td style="text-align: right;">#ffffff</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizes</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Small</strong></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Medium</strong></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Large</strong></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-lg</code></td><td style="text-align: right;">18px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Icons</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">PhCheck</td><td style="text-align: right;"><code>ph-check</code></td></tr>
            <tr><td style="padding: 8px 0;">Minus (Indeterminate)</td><td style="text-align: right;"><code>ph-minus</code></td></tr>
            <tr><td style="padding: 8px 0;">Biblioteca</td><td style="text-align: right;">Phosphor Icons</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">💡 Estados</h3>
        <ul style="color: #6b7280; line-height: 1.8; margin-left: 20px;">
          <li><strong>Unchecked:</strong> Borda cinza, fundo transparente</li>
          <li><strong>Checked:</strong> Fundo azul (#0086cd), ícone check branco</li>
          <li><strong>Indeterminate:</strong> Fundo azul (#0086cd), ícone hífen branco</li>
          <li><strong>Disabled:</strong> Opacidade 50%, cores desabilitadas</li>
          <li><strong>Focus:</strong> Outline azul 3px (#0086cd)</li>
          <li><strong>Hover:</strong> Borda/fundo azul escuro (#0942a1)</li>
        </ul>
      </div>
    </div>
  `});var y,f,u;t.parameters={...t.parameters,docs:{...(y=t.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(u=(f=t.parameters)==null?void 0:f.docs)==null?void 0:u.source}}};var h,v,k;i.parameters={...i.parameters,docs:{...(h=i.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(k=(v=i.parameters)==null?void 0:v.docs)==null?void 0:k.source}}};var z,C,L;n.parameters={...n.parameters,docs:{...(z=n.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(L=(C=n.parameters)==null?void 0:C.docs)==null?void 0:L.source}}};var V,w,j;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(j=(w=l.parameters)==null?void 0:w.docs)==null?void 0:j.source}}};var P,S,D;d.parameters={...d.parameters,docs:{...(P=d.parameters)==null?void 0:P.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(D=(S=d.parameters)==null?void 0:S.docs)==null?void 0:D.source}}};var I,U,E;s.parameters={...s.parameters,docs:{...(I=s.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(E=(U=s.parameters)==null?void 0:U.docs)==null?void 0:E.source}}};var M,T,A;a.parameters={...a.parameters,docs:{...(M=a.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(A=(T=a.parameters)==null?void 0:T.docs)==null?void 0:A.source}}};var F,B,O;o.parameters={...o.parameters,docs:{...(F=o.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(O=(B=o.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var H,N,R;r.parameters={...r.parameters,docs:{...(H=r.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(R=(N=r.parameters)==null?void 0:N.docs)==null?void 0:R.source}}};var _,G,q;p.parameters={...p.parameters,docs:{...(_=p.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(q=(G=p.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var J,K,Q;c.parameters={...c.parameters,docs:{...(J=c.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    Checkbox
  },
  setup() {
    return {
      args
    };
  },
  template: '<Checkbox v-bind="args" />'
})`,...(Q=(K=c.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var W,X,Y;m.parameters={...m.parameters,docs:{...(W=m.parameters)==null?void 0:W.docs,source:{originalSource:`() => ({
  components: {
    Checkbox
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Checkbox States</h2>
      
      <!-- Size Headers -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 24px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SMALL -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Small (16px)</h3>
        
        <!-- Unchecked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Unchecked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Checked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Checked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="sm" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="sm" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="sm" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Indeterminate -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Indeterminate</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" indeterminate />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" indeterminate disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="sm" indeterminate style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>
      </div>

      <!-- MEDIUM -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Medium (20px)</h3>
        
        <!-- Unchecked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Unchecked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Checked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Checked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="md" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="md" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="md" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Indeterminate -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Indeterminate</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" indeterminate />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" indeterminate disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="md" indeterminate style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>
      </div>

      <!-- LARGE -->
      <div style="margin-bottom: 48px;">
        <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 24px;">Large (24px)</h3>
        
        <!-- Unchecked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Unchecked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Checked -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Checked</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="lg" />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="lg" disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="true" label="Label" size="lg" style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>

        <!-- Indeterminate -->
        <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 40px; margin-bottom: 20px; align-items: center;">
          <div style="font-weight: 500;">Indeterminate</div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" indeterminate />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" indeterminate disabled />
          </div>
          <div style="display: flex; justify-content: center;">
            <Checkbox :modelValue="false" label="Label" size="lg" indeterminate style="outline: 3px solid #0086cd; outline-offset: 2px; border-radius: 4px; padding: 4px;" />
          </div>
        </div>
      </div>
    </div>
  \`
})`,...(Y=(X=m.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`() => ({
  components: {
    Checkbox
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Label Positions</h2>
      
      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Label Right (Default)</h3>
          <Checkbox :modelValue="false" label="Label" labelPosition="right" size="md" />
        </div>

        <div>
          <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Label Left</h3>
          <Checkbox :modelValue="false" label="Label" labelPosition="left" size="md" />
        </div>

        <div>
          <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">No Label</h3>
          <Checkbox :modelValue="false" labelPosition="none" size="md" />
        </div>
      </div>
    </div>
  \`
})`,...(ee=($=g.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,ie,ne;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td><td style="text-align: right;">#0086cd</td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td><td style="text-align: right;">#0942a1</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td><td style="text-align: right;">#555555</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-dark</code></td><td style="text-align: right;">#0086cd</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">#191919</td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td><td style="text-align: right;">#ffffff</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizes</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Small</strong></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Medium</strong></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Large</strong></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-lg</code></td><td style="text-align: right;">18px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Icons</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">PhCheck</td><td style="text-align: right;"><code>ph-check</code></td></tr>
            <tr><td style="padding: 8px 0;">Minus (Indeterminate)</td><td style="text-align: right;"><code>ph-minus</code></td></tr>
            <tr><td style="padding: 8px 0;">Biblioteca</td><td style="text-align: right;">Phosphor Icons</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">💡 Estados</h3>
        <ul style="color: #6b7280; line-height: 1.8; margin-left: 20px;">
          <li><strong>Unchecked:</strong> Borda cinza, fundo transparente</li>
          <li><strong>Checked:</strong> Fundo azul (#0086cd), ícone check branco</li>
          <li><strong>Indeterminate:</strong> Fundo azul (#0086cd), ícone hífen branco</li>
          <li><strong>Disabled:</strong> Opacidade 50%, cores desabilitadas</li>
          <li><strong>Focus:</strong> Outline azul 3px (#0086cd)</li>
          <li><strong>Hover:</strong> Borda/fundo azul escuro (#0942a1)</li>
        </ul>
      </div>
    </div>
  \`
})`,...(ne=(ie=x.parameters)==null?void 0:ie.docs)==null?void 0:ne.source}}};const re=["Playground","Unchecked","Checked","Indeterminate","DisabledUnchecked","DisabledChecked","DisabledIndeterminate","LabelLeft","NoLabel","Small","Large","AllStates","LabelPositions","DesignTokens"];export{m as AllStates,n as Checked,x as DesignTokens,s as DisabledChecked,a as DisabledIndeterminate,d as DisabledUnchecked,l as Indeterminate,o as LabelLeft,g as LabelPositions,c as Large,r as NoLabel,t as Playground,p as Small,i as Unchecked,re as __namedExportsOrder,oe as default};
