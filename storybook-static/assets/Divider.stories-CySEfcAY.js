import{c as x,a as g,b as R,r as W,p as j,o as v}from"./vue.esm-bundler-cjlVRrb_.js";import{_ as G}from"./_plugin-vue_export-helper-DlAUqK2U.js";const K=["role"],Q={key:0,class:"scuba-divider__text"},X={__name:"Divider",props:{orientation:{type:String,default:"horizontal",validator:t=>["horizontal","vertical"].includes(t)},textAlign:{type:String,default:"center",validator:t=>["left","center","right"].includes(t)},dashed:{type:Boolean,default:!1}},setup(t){const n=t,M=x(()=>{const i=["scuba-divider"];return i.push(`scuba-divider--${n.orientation}`),n.dashed&&i.push("scuba-divider--dashed"),n.textAlign&&n.orientation==="horizontal"&&i.push(`scuba-divider--text-${n.textAlign}`),i}),O=x(()=>(n.orientation==="vertical","separator"));return(i,Z)=>(v(),g("div",{class:j(M.value),role:O.value},[i.$slots.default?(v(),g("span",Q,[W(i.$slots,"default",{},void 0,!0)])):R("",!0)],10,K))}},e=G(X,[["__scopeId","data-v-3948735c"]]),ie={title:"Scuba/Divider",component:e,tags:["autodocs"],argTypes:{orientation:{control:"select",options:["horizontal","vertical"],description:"Orientação do divider"},textAlign:{control:"select",options:["left","center","right"],description:"Alinhamento do texto (apenas horizontal)"},dashed:{control:"boolean",description:"Linha tracejada"}}},Y=t=>({components:{Divider:e},setup(){return{args:t}},template:'<Divider v-bind="args"><template v-if="args.text">{{ args.text }}</template></Divider>'}),o=Y.bind({});o.args={orientation:"horizontal",textAlign:"center",dashed:!1,text:""};const a=()=>({components:{Divider:e},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider />
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  `}),s=()=>({components:{Divider:e},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider>Texto centralizado</Divider>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  `}),r=()=>({components:{Divider:e},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3>Esquerda</h3>
      <Divider text-align="left">Seção 1</Divider>
      <p>Conteúdo da seção 1</p>

      <h3 style="margin-top: 32px;">Centro</h3>
      <Divider text-align="center">Seção 2</Divider>
      <p>Conteúdo da seção 2</p>

      <h3 style="margin-top: 32px;">Direita</h3>
      <Divider text-align="right">Seção 3</Divider>
      <p>Conteúdo da seção 3</p>
    </div>
  `}),d=()=>({components:{Divider:e},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider dashed />
      <p>Sed do eiusmod tempor incididunt.</p>
      <Divider dashed>Com texto</Divider>
      <p>Ut labore et dolore magna aliqua.</p>
    </div>
  `}),p=()=>({components:{Divider:e},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <span>Texto 1</span>
      <Divider orientation="vertical" />
      <span>Texto 2</span>
      <Divider orientation="vertical" />
      <span>Texto 3</span>
    </div>
  `}),l=()=>({components:{Divider:e},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <span>Item A</span>
      <Divider orientation="vertical" dashed />
      <span>Item B</span>
      <Divider orientation="vertical" dashed />
      <span>Item C</span>
    </div>
  `}),c=()=>({components:{Divider:e},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Casos de Uso</h2>

      <div style="margin-bottom: 48px;">
        <h3>Separação de seções</h3>
        <p>Informações do usuário</p>
        <Divider>Configurações</Divider>
        <p>Preferências do sistema</p>
        <Divider>Ações</Divider>
        <button style="padding: 8px 16px;">Salvar</button>
      </div>

      <div style="margin-bottom: 48px;">
        <h3>Navegação inline</h3>
        <div>
          <a href="#" style="color: #0942a1;">Home</a>
          <Divider orientation="vertical" />
          <a href="#" style="color: #0942a1;">Produtos</a>
          <Divider orientation="vertical" />
          <a href="#" style="color: #0942a1;">Sobre</a>
          <Divider orientation="vertical" />
          <a href="#" style="color: #0942a1;">Contato</a>
        </div>
      </div>

      <div>
        <h3>Lista de itens</h3>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="color: #6b7280;">Status:</span>
          <span>Ativo</span>
          <Divider orientation="vertical" />
          <span style="color: #6b7280;">Criado em:</span>
          <span>12/01/2024</span>
          <Divider orientation="vertical" />
          <span style="color: #6b7280;">Autor:</span>
          <span>João Silva</span>
        </div>
      </div>
    </div>
  `}),m=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Border color</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Text color</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Horizontal:</strong> Separar seções de conteúdo, formulários, listas</li>
          <li><strong>Vertical:</strong> Separar itens inline, navegação, breadcrumbs</li>
          <li><strong>Com texto:</strong> Adicionar contexto à separação</li>
          <li><strong>Dashed:</strong> Separações menos proeminentes, seções opcionais</li>
          <li>Use com moderação para não poluir visualmente a interface</li>
          <li>Mantenha consistência no uso de solid vs dashed</li>
        </ul>
      </div>
    </div>
  `});var h,y,f;o.parameters={...o.parameters,docs:{...(h=o.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Divider
  },
  setup() {
    return {
      args
    };
  },
  template: '<Divider v-bind="args"><template v-if="args.text">{{ args.text }}</template></Divider>'
})`,...(f=(y=o.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var u,b,D;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`() => ({
  components: {
    Divider
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider />
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  \`
})`,...(D=(b=a.parameters)==null?void 0:b.docs)==null?void 0:D.source}}};var S,E,z;s.parameters={...s.parameters,docs:{...(S=s.parameters)==null?void 0:S.docs,source:{originalSource:`() => ({
  components: {
    Divider
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      <Divider>Texto centralizado</Divider>
      <p>Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    </div>
  \`
})`,...(z=(E=s.parameters)==null?void 0:E.docs)==null?void 0:z.source}}};var C,A,P;r.parameters={...r.parameters,docs:{...(C=r.parameters)==null?void 0:C.docs,source:{originalSource:`() => ({
  components: {
    Divider
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3>Esquerda</h3>
      <Divider text-align="left">Seção 1</Divider>
      <p>Conteúdo da seção 1</p>

      <h3 style="margin-top: 32px;">Centro</h3>
      <Divider text-align="center">Seção 2</Divider>
      <p>Conteúdo da seção 2</p>

      <h3 style="margin-top: 32px;">Direita</h3>
      <Divider text-align="right">Seção 3</Divider>
      <p>Conteúdo da seção 3</p>
    </div>
  \`
})`,...(P=(A=r.parameters)==null?void 0:A.docs)==null?void 0:P.source}}};var w,T,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`() => ({
  components: {
    Divider
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <p>Lorem ipsum dolor sit amet.</p>
      <Divider dashed />
      <p>Sed do eiusmod tempor incididunt.</p>
      <Divider dashed>Com texto</Divider>
      <p>Ut labore et dolore magna aliqua.</p>
    </div>
  \`
})`,...(_=(T=d.parameters)==null?void 0:T.docs)==null?void 0:_.source}}};var U,F,k;p.parameters={...p.parameters,docs:{...(U=p.parameters)==null?void 0:U.docs,source:{originalSource:`() => ({
  components: {
    Divider
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <span>Texto 1</span>
      <Divider orientation="vertical" />
      <span>Texto 2</span>
      <Divider orientation="vertical" />
      <span>Texto 3</span>
    </div>
  \`
})`,...(k=(F=p.parameters)==null?void 0:F.docs)==null?void 0:k.source}}};var B,I,L;l.parameters={...l.parameters,docs:{...(B=l.parameters)==null?void 0:B.docs,source:{originalSource:`() => ({
  components: {
    Divider
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <span>Item A</span>
      <Divider orientation="vertical" dashed />
      <span>Item B</span>
      <Divider orientation="vertical" dashed />
      <span>Item C</span>
    </div>
  \`
})`,...(L=(I=l.parameters)==null?void 0:I.docs)==null?void 0:L.source}}};var q,V,H;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`() => ({
  components: {
    Divider
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Casos de Uso</h2>

      <div style="margin-bottom: 48px;">
        <h3>Separação de seções</h3>
        <p>Informações do usuário</p>
        <Divider>Configurações</Divider>
        <p>Preferências do sistema</p>
        <Divider>Ações</Divider>
        <button style="padding: 8px 16px;">Salvar</button>
      </div>

      <div style="margin-bottom: 48px;">
        <h3>Navegação inline</h3>
        <div>
          <a href="#" style="color: #0942a1;">Home</a>
          <Divider orientation="vertical" />
          <a href="#" style="color: #0942a1;">Produtos</a>
          <Divider orientation="vertical" />
          <a href="#" style="color: #0942a1;">Sobre</a>
          <Divider orientation="vertical" />
          <a href="#" style="color: #0942a1;">Contato</a>
        </div>
      </div>

      <div>
        <h3>Lista de itens</h3>
        <div style="display: flex; align-items: center; gap: 12px;">
          <span style="color: #6b7280;">Status:</span>
          <span>Ativo</span>
          <Divider orientation="vertical" />
          <span style="color: #6b7280;">Criado em:</span>
          <span>12/01/2024</span>
          <Divider orientation="vertical" />
          <span style="color: #6b7280;">Autor:</span>
          <span>João Silva</span>
        </div>
      </div>
    </div>
  \`
})`,...(H=(V=c.parameters)==null?void 0:V.docs)==null?void 0:H.source}}};var $,N,J;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Border color</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Text color</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Horizontal:</strong> Separar seções de conteúdo, formulários, listas</li>
          <li><strong>Vertical:</strong> Separar itens inline, navegação, breadcrumbs</li>
          <li><strong>Com texto:</strong> Adicionar contexto à separação</li>
          <li><strong>Dashed:</strong> Separações menos proeminentes, seções opcionais</li>
          <li>Use com moderação para não poluir visualmente a interface</li>
          <li>Mantenha consistência no uso de solid vs dashed</li>
        </ul>
      </div>
    </div>
  \`
})`,...(J=(N=m.parameters)==null?void 0:N.docs)==null?void 0:J.source}}};const ne=["Playground","Horizontal","WithText","TextAlignment","Dashed","Vertical","VerticalDashed","UseCases","DesignTokens"];export{d as Dashed,m as DesignTokens,a as Horizontal,o as Playground,r as TextAlignment,c as UseCases,p as Vertical,l as VerticalDashed,s as WithText,ne as __namedExportsOrder,ie as default};
