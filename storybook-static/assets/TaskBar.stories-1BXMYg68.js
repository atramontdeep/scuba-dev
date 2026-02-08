import{T as p}from"./TaskBar-Cely3S57.js";import"./vue.esm-bundler-BXouRCJi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const V={title:"Scuba/TaskBar",component:p,tags:["autodocs"],argTypes:{current:{control:"number",description:"Valor atual (número de tarefas concluídas)"},total:{control:"number",description:"Total de tarefas"}}},t=U=>({components:{TaskBar:p},setup(){return{args:U}},template:'<TaskBar v-bind="args" />'}),e=t.bind({});e.args={current:21,total:200};const r=t.bind({});r.args={current:0,total:200};const o=t.bind({});o.args={current:21,total:200};const n=t.bind({});n.args={current:45,total:80};const a=t.bind({});a.args={current:160,total:200};const s=t.bind({});s.args={current:10,total:10};const d=()=>({components:{TaskBar:p},template:`
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
  `}),i=()=>({template:`
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
  `});var c,l,g;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    TaskBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<TaskBar v-bind="args" />'
})`,...(g=(l=e.parameters)==null?void 0:l.docs)==null?void 0:g.source}}};var m,x,u;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`args => ({
  components: {
    TaskBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<TaskBar v-bind="args" />'
})`,...(u=(x=r.parameters)==null?void 0:x.docs)==null?void 0:u.source}}};var y,h,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    TaskBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<TaskBar v-bind="args" />'
})`,...(f=(h=o.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var b,v,T;n.parameters={...n.parameters,docs:{...(b=n.parameters)==null?void 0:b.docs,source:{originalSource:`args => ({
  components: {
    TaskBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<TaskBar v-bind="args" />'
})`,...(T=(v=n.parameters)==null?void 0:v.docs)==null?void 0:T.source}}};var k,B,w;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    TaskBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<TaskBar v-bind="args" />'
})`,...(w=(B=a.parameters)==null?void 0:B.docs)==null?void 0:w.source}}};var z,P,S;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    TaskBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<TaskBar v-bind="args" />'
})`,...(S=(P=s.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var E,C,D;d.parameters={...d.parameters,docs:{...(E=d.parameters)==null?void 0:E.docs,source:{originalSource:`() => ({
  components: {
    TaskBar
  },
  template: \`
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
  \`
})`,...(D=(C=d.parameters)==null?void 0:C.docs)==null?void 0:D.source}}};var H,L,M;i.parameters={...i.parameters,docs:{...(H=i.parameters)==null?void 0:H.docs,source:{originalSource:`() => ({
  template: \`
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
  \`
})`,...(M=(L=i.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};const j=["Playground","Empty","LowProgress","MediumProgress","HighProgress","Complete","AllStates","DesignTokens"];export{d as AllStates,s as Complete,i as DesignTokens,r as Empty,a as HighProgress,o as LowProgress,n as MediumProgress,e as Playground,j as __namedExportsOrder,V as default};
