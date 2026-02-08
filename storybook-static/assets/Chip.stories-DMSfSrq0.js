import{C as t}from"./Chip-Df3ee4E2.js";import{I as i}from"./PhPlus.vue-BvWHZ1J1.js";import{F as f}from"./PhX.vue-Bf36g03w.js";import"./vue.esm-bundler-BXouRCJi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const F={title:"Scuba/Chip",component:t,tags:["autodocs"],argTypes:{label:{control:"text",description:"Texto do chip"},count:{control:"boolean",description:"Exibir contador"},countValue:{control:"text",description:"Valor do contador"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do chip"},iconPosition:{control:"select",options:["left","right"],description:"Posição do ícone"},removable:{control:"boolean",description:"Exibe botão de remover"},clickable:{control:"boolean",description:"Chip clicável"},selected:{control:"boolean",description:"Chip selecionado"},disabled:{control:"boolean",description:"Chip desabilitado"}}},e=z=>({components:{Chip:t,PhPlus:i},setup(){return{args:z,PhPlus:i,handleClick:()=>{console.log("Chip clicked!")},handleRemove:()=>{console.log("Chip removed!")}}},template:'<Chip v-bind="args" :icon="args.icon ? PhPlus : null" @click="handleClick" @remove="handleRemove" />'});e.args={label:"Chip",count:!0,countValue:"32",size:"md",iconPosition:"left",removable:!0,clickable:!0,selected:!1,disabled:!1,icon:!0};const l=()=>({components:{Chip:t,PhPlus:i,PhX:f},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Estados do Chip</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Default</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable />
          <Chip label="Chip" :icon="PhPlus" removable />
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Hover (clickable)</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable clickable />
          <Chip label="Chip" :icon="PhPlus" removable clickable />
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Selected</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable selected />
          <Chip label="Chip" :icon="PhPlus" removable selected />
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Disabled</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable disabled />
          <Chip label="Chip" :icon="PhPlus" removable disabled />
        </div>
      </div>
    </div>
  `}),o=()=>({components:{Chip:t,PhPlus:i,PhX:f},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Tamanhos</h2>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Small (24px)</div>
          <div style="display: flex; gap: 12px;">
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable clickable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable selected />
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable disabled />
          </div>
        </div>

        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Medium (32px)</div>
          <div style="display: flex; gap: 12px;">
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable clickable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable selected />
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable disabled />
          </div>
        </div>

        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Large (40px)</div>
          <div style="display: flex; gap: 12px;">
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable clickable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable selected />
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable disabled />
          </div>
        </div>
      </div>
    </div>
  `}),n=()=>({components:{Chip:t,PhPlus:i},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Com Contador</h2>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <Chip label="Chip" count countValue="5" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="12" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="32" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="128" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="999+" :icon="PhPlus" removable />
      </div>
    </div>
  `}),s=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Estados</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Default:</strong></td><td style="text-align: right;">#E5E7EB</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Hover:</strong></td><td style="text-align: right;">#DBEAFE</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Selected:</strong></td><td style="text-align: right;">#BFDBFE / #1E40AF</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Disabled:</strong></td><td style="text-align: right;">#E5E7EB / #9CA3AF</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Tamanhos</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Small:</strong></td><td style="text-align: right;">24px altura</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Medium:</strong></td><td style="text-align: right;">32px altura</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Large:</strong></td><td style="text-align: right;">40px altura</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Use <code>count</code> para exibir números ou contadores</li>
          <li>Use <code>clickable</code> para tornar o chip interativo</li>
          <li>Use <code>selected</code> para indicar chips selecionados</li>
          <li>Use <code>removable</code> para permitir remoção</li>
          <li>Use <code>disabled</code> para indicar chips não disponíveis</li>
        </ul>
      </div>
    </div>
  `});var a,d,p;e.parameters={...e.parameters,docs:{...(a=e.parameters)==null?void 0:a.docs,source:{originalSource:`args => ({
  components: {
    Chip,
    PhPlus
  },
  setup() {
    const handleClick = () => {
      console.log('Chip clicked!');
    };
    const handleRemove = () => {
      console.log('Chip removed!');
    };
    return {
      args,
      PhPlus,
      handleClick,
      handleRemove
    };
  },
  template: '<Chip v-bind="args" :icon="args.icon ? PhPlus : null" @click="handleClick" @remove="handleRemove" />'
})`,...(p=(d=e.parameters)==null?void 0:d.docs)==null?void 0:p.source}}};var r,c,h;l.parameters={...l.parameters,docs:{...(r=l.parameters)==null?void 0:r.docs,source:{originalSource:`() => ({
  components: {
    Chip,
    PhPlus,
    PhX
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Estados do Chip</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Default</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable />
          <Chip label="Chip" :icon="PhPlus" removable />
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Hover (clickable)</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable clickable />
          <Chip label="Chip" :icon="PhPlus" removable clickable />
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Selected</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable selected />
          <Chip label="Chip" :icon="PhPlus" removable selected />
        </div>
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 16px;">Disabled</h3>
        <div style="display: flex; gap: 12px;">
          <Chip label="Chip" count countValue="32" :icon="PhPlus" removable disabled />
          <Chip label="Chip" :icon="PhPlus" removable disabled />
        </div>
      </div>
    </div>
  \`
})`,...(h=(c=l.parameters)==null?void 0:c.docs)==null?void 0:h.source}}};var m,b,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`() => ({
  components: {
    Chip,
    PhPlus,
    PhX
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Tamanhos</h2>

      <div style="display: flex; flex-direction: column; gap: 24px;">
        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Small (24px)</div>
          <div style="display: flex; gap: 12px;">
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable clickable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable selected />
            <Chip label="Chip" count="32" :icon="PhPlus" size="sm" removable disabled />
          </div>
        </div>

        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Medium (32px)</div>
          <div style="display: flex; gap: 12px;">
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable clickable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable selected />
            <Chip label="Chip" count="32" :icon="PhPlus" size="md" removable disabled />
          </div>
        </div>

        <div>
          <div style="margin-bottom: 8px; font-size: 14px; color: #6b7280;">Large (40px)</div>
          <div style="display: flex; gap: 12px;">
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable clickable />
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable selected />
            <Chip label="Chip" count="32" :icon="PhPlus" size="lg" removable disabled />
          </div>
        </div>
      </div>
    </div>
  \`
})`,...(u=(b=o.parameters)==null?void 0:b.docs)==null?void 0:u.source}}};var g,v,x;n.parameters={...n.parameters,docs:{...(g=n.parameters)==null?void 0:g.docs,source:{originalSource:`() => ({
  components: {
    Chip,
    PhPlus
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Com Contador</h2>

      <div style="display: flex; gap: 12px; flex-wrap: wrap;">
        <Chip label="Chip" count countValue="5" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="12" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="32" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="128" :icon="PhPlus" removable />
        <Chip label="Chip" count countValue="999+" :icon="PhPlus" removable />
      </div>
    </div>
  \`
})`,...(x=(v=n.parameters)==null?void 0:v.docs)==null?void 0:x.source}}};var P,C,y;s.parameters={...s.parameters,docs:{...(P=s.parameters)==null?void 0:P.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Estados</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Default:</strong></td><td style="text-align: right;">#E5E7EB</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Hover:</strong></td><td style="text-align: right;">#DBEAFE</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Selected:</strong></td><td style="text-align: right;">#BFDBFE / #1E40AF</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Disabled:</strong></td><td style="text-align: right;">#E5E7EB / #9CA3AF</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Tamanhos</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Small:</strong></td><td style="text-align: right;">24px altura</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Medium:</strong></td><td style="text-align: right;">32px altura</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Large:</strong></td><td style="text-align: right;">40px altura</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Use <code>count</code> para exibir números ou contadores</li>
          <li>Use <code>clickable</code> para tornar o chip interativo</li>
          <li>Use <code>selected</code> para indicar chips selecionados</li>
          <li>Use <code>removable</code> para permitir remoção</li>
          <li>Use <code>disabled</code> para indicar chips não disponíveis</li>
        </ul>
      </div>
    </div>
  \`
})`,...(y=(C=s.parameters)==null?void 0:C.docs)==null?void 0:y.source}}};const T=["Playground","States","Sizes","WithCounter","DesignTokens"];export{s as DesignTokens,e as Playground,o as Sizes,l as States,n as WithCounter,T as __namedExportsOrder,F as default};
