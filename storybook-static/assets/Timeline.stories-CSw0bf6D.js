import{a as s,e as r,b as q,t as f,F as b,z as T,o as i,r as K,p as Q}from"./vue.esm-bundler-BXouRCJi.js";import{C as W}from"./CardHistory-Clu2Y5qT.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Y={class:"scuba-timeline"},Z={class:"scuba-timeline__header"},tt={class:"scuba-timeline__title"},et=["href"],it={class:"scuba-timeline__content"},at={class:"scuba-timeline__date"},nt={class:"scuba-timeline__items"},st={__name:"Timeline",props:{title:{type:String,default:"Últimas atividades"},linkText:{type:String,default:""},linkHref:{type:String,default:"#"},timelineGroups:{type:Array,required:!0,validator:t=>t.every(e=>typeof e=="object"&&"date"in e&&"items"in e&&Array.isArray(e.items))}},setup(t){return(e,rt)=>(i(),s("div",Y,[r("div",Z,[r("h2",tt,f(t.title),1),t.linkText&&t.linkHref?(i(),s("a",{key:0,href:t.linkHref,class:"scuba-timeline__link"},f(t.linkText),9,et)):q("",!0)]),r("div",it,[(i(!0),s(b,null,T(t.timelineGroups,(y,v)=>(i(),s("div",{key:v,class:"scuba-timeline__group"},[r("h3",at,f(y.date),1),r("div",nt,[K(e.$slots,`group-${v}`,{group:y},()=>[(i(!0),s(b,null,T(y.items,(h,V)=>(i(),Q(W,{key:V,status:h.status,userName:h.userName,indicatorItem:h.indicatorItem},null,8,["status","userName","indicatorItem"]))),128))],!0)])]))),128))])]))}},x=X(st,[["__scopeId","data-v-dfa31c78"]]),pt={title:"Scuba/Timeline",component:x,tags:["autodocs"],argTypes:{title:{control:"text",description:"Título da timeline"},linkText:{control:"text",description:"Texto do link no cabeçalho"},linkHref:{control:"text",description:"URL do link no cabeçalho"},timelineGroups:{control:"object",description:"Array de grupos de atividades agrupadas por data"}}},n=[{date:"2 de novembro",items:[{status:"validou",userName:"Natálio Sousa",indicatorItem:"GRI.v2 304-1.a"},{status:"enviou-para-ajuste-validacao",userName:"José Mendes",indicatorItem:"GRI.v2 302-1"},{status:"respondeu",userName:"Maria da Silva",indicatorItem:"GRI.v2 302-1"},{status:"aprovou",userName:"Rafael Almeida",indicatorItem:"GRI.v2 305-2.a"}]},{date:"1 de novembro",items:[{status:"validou",userName:"Maria Oliveira",indicatorItem:"GRI.v2 302-1.c"},{status:"enviou-para-ajuste-auditoria",userName:"Carlos Santos",indicatorItem:"SASB EM-MD-160a.1"},{status:"validou",userName:"Natálio Sousa",indicatorItem:"GRI.v2 305-2.a"}]},{date:"31 de outubro",items:[{status:"respondeu",userName:"Ana Paula",indicatorItem:"GRI.v2 401-1"},{status:"aprovou",userName:"João Silva",indicatorItem:"GRI.v2 403-2"}]}],m=t=>({components:{Timeline:x},setup(){return{args:t}},template:'<Timeline v-bind="args" />'}),a=m.bind({});a.args={title:"Últimas atividades",linkText:"Histórico",linkHref:"#",timelineGroups:n};a.parameters={docs:{description:{story:"Use os controles abaixo para testar diferentes configurações da Timeline."}}};const o=m.bind({});o.args={title:"Últimas atividades",linkText:"",linkHref:"",timelineGroups:n};const d=m.bind({});d.args={title:"Histórico de mudanças",linkText:"Ver tudo",linkHref:"#",timelineGroups:n};const l=m.bind({});l.args={title:"Últimas atividades",linkText:"Histórico",linkHref:"#",timelineGroups:[{date:"2 de novembro",items:[{status:"validou",userName:"Natálio Sousa",indicatorItem:"GRI.v2 304-1.a"},{status:"aprovou",userName:"Rafael Almeida",indicatorItem:"GRI.v2 305-2.a"}]}]};const p=m.bind({});p.args={title:"Últimas atividades",linkText:"Histórico",linkHref:"#",timelineGroups:[{date:"3 de novembro",items:[{status:"validou",userName:"Natálio Sousa",indicatorItem:"GRI.v2 304-1.a"},{status:"enviou-para-ajuste-validacao",userName:"José Mendes",indicatorItem:"GRI.v2 302-1"},{status:"respondeu",userName:"Maria da Silva",indicatorItem:"GRI.v2 302-1"}]},{date:"2 de novembro",items:[{status:"validou",userName:"Natálio Sousa",indicatorItem:"GRI.v2 304-1.a"},{status:"enviou-para-ajuste-validacao",userName:"José Mendes",indicatorItem:"GRI.v2 302-1"},{status:"respondeu",userName:"Maria da Silva",indicatorItem:"GRI.v2 302-1"},{status:"aprovou",userName:"Rafael Almeida",indicatorItem:"GRI.v2 305-2.a"}]},{date:"1 de novembro",items:[{status:"validou",userName:"Maria Oliveira",indicatorItem:"GRI.v2 302-1.c"},{status:"enviou-para-ajuste-auditoria",userName:"Carlos Santos",indicatorItem:"SASB EM-MD-160a.1"},{status:"validou",userName:"Natálio Sousa",indicatorItem:"GRI.v2 305-2.a"}]},{date:"31 de outubro",items:[{status:"respondeu",userName:"Ana Paula",indicatorItem:"GRI.v2 401-1"},{status:"aprovou",userName:"João Silva",indicatorItem:"GRI.v2 403-2"},{status:"validou",userName:"Pedro Santos",indicatorItem:"GRI.v2 404-1"}]},{date:"30 de outubro",items:[{status:"respondeu",userName:"Carla Souza",indicatorItem:"GRI.v2 405-1"},{status:"enviou-para-ajuste-validacao",userName:"Marcos Lima",indicatorItem:"GRI.v2 406-1"}]}]};const c=()=>({components:{Timeline:x},setup(){return{timelineGroups:n}},template:`
    <div style="height: 600px; padding: 20px; background: #f3f4f6;">
      <Timeline
        title="Últimas atividades"
        linkText="Histórico"
        linkHref="#"
        :timelineGroups="timelineGroups"
      />
    </div>
  `}),g=()=>({components:{Timeline:x},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; background: #f9fafb;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Timeline - Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(344px, 1fr)); gap: 40px;">
        <!-- Timeline padrão -->
        <div style="height: 600px; background: white; border-radius: 8px; padding: 20px;">
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Timeline Padrão</h3>
          <Timeline
            title="Últimas atividades"
            linkText="Histórico"
            linkHref="#"
            :timelineGroups="${JSON.stringify(n)}"
          />
        </div>

        <!-- Timeline sem link -->
        <div style="height: 600px; background: white; border-radius: 8px; padding: 20px;">
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Sem Link</h3>
          <Timeline
            title="Últimas atividades"
            linkText=""
            linkHref=""
            :timelineGroups="${JSON.stringify(n)}"
          />
        </div>
      </div>
    </div>
  `}),u=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Dimensões</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">Largura fixa</td><td style="text-align: right;">344px</td></tr>
            <tr><td style="padding: 8px 0;">Altura</td><td style="text-align: right;">100% (container)</td></tr>
            <tr><td style="padding: 8px 0;">Scroll</td><td style="text-align: right;">vertical (auto)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography - Título</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xl</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Cor texto</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography - Link</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td><td style="text-align: right;">Cor link</td></tr>
            <tr><td style="padding: 8px 0;">text-decoration</td><td style="text-align: right;">underline</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography - Data</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Cor texto</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Espaçamento</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">Gap entre grupos</td><td style="text-align: right;"><code>--spacing-lg</code></td></tr>
            <tr><td style="padding: 8px 0;">Gap entre itens</td><td style="text-align: right;"><code>--spacing-xs</code></td></tr>
            <tr><td style="padding: 8px 0;">Padding lateral</td><td style="text-align: right;"><code>--spacing-md</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Scrollbar</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">Largura</td><td style="text-align: right;">6px</td></tr>
            <tr><td style="padding: 8px 0;">Track</td><td style="text-align: right;"><code>--context-color-surface-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;">Thumb</td><td style="text-align: right;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;">Border radius</td><td style="text-align: right;">pill</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Estrutura do Componente</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Largura fixa de 344px</li>
          <li>Altura 100% do container pai</li>
          <li>Header com título e link opcional (flex space-between)</li>
          <li>Content com scroll vertical automático</li>
          <li>Grupos organizados por data</li>
          <li>Cada grupo contém múltiplos CardHistory</li>
          <li>Scrollbar customizada para melhor aparência</li>
          <li>Usa CardHistory component para os itens</li>
        </ul>
      </div>
    </div>
  `});var k,I,G;a.parameters={...a.parameters,docs:{...(k=a.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    Timeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<Timeline v-bind="args" />'
})`,...(G=(I=a.parameters)==null?void 0:I.docs)==null?void 0:G.source}}};var S,z,w;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    Timeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<Timeline v-bind="args" />'
})`,...(w=(z=o.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var N,_,H;d.parameters={...d.parameters,docs:{...(N=d.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    Timeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<Timeline v-bind="args" />'
})`,...(H=(_=d.parameters)==null?void 0:_.docs)==null?void 0:H.source}}};var R,C,A;l.parameters={...l.parameters,docs:{...(R=l.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    Timeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<Timeline v-bind="args" />'
})`,...(A=(C=l.parameters)==null?void 0:C.docs)==null?void 0:A.source}}};var E,D,L;p.parameters={...p.parameters,docs:{...(E=p.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    Timeline
  },
  setup() {
    return {
      args
    };
  },
  template: '<Timeline v-bind="args" />'
})`,...(L=(D=p.parameters)==null?void 0:D.docs)==null?void 0:L.source}}};var M,P,J;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`() => ({
  components: {
    Timeline
  },
  setup() {
    return {
      timelineGroups: sampleTimelineGroups
    };
  },
  template: \`
    <div style="height: 600px; padding: 20px; background: #f3f4f6;">
      <Timeline
        title="Últimas atividades"
        linkText="Histórico"
        linkHref="#"
        :timelineGroups="timelineGroups"
      />
    </div>
  \`
})`,...(J=(P=c.parameters)==null?void 0:P.docs)==null?void 0:J.source}}};var j,B,F;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`() => ({
  components: {
    Timeline
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; background: #f9fafb;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Timeline - Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(344px, 1fr)); gap: 40px;">
        <!-- Timeline padrão -->
        <div style="height: 600px; background: white; border-radius: 8px; padding: 20px;">
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Timeline Padrão</h3>
          <Timeline
            title="Últimas atividades"
            linkText="Histórico"
            linkHref="#"
            :timelineGroups="\${JSON.stringify(sampleTimelineGroups)}"
          />
        </div>

        <!-- Timeline sem link -->
        <div style="height: 600px; background: white; border-radius: 8px; padding: 20px;">
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Sem Link</h3>
          <Timeline
            title="Últimas atividades"
            linkText=""
            linkHref=""
            :timelineGroups="\${JSON.stringify(sampleTimelineGroups)}"
          />
        </div>
      </div>
    </div>
  \`
})`,...(F=(B=g.parameters)==null?void 0:B.docs)==null?void 0:F.source}}};var O,U,$;u.parameters={...u.parameters,docs:{...(O=u.parameters)==null?void 0:O.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Dimensões</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">Largura fixa</td><td style="text-align: right;">344px</td></tr>
            <tr><td style="padding: 8px 0;">Altura</td><td style="text-align: right;">100% (container)</td></tr>
            <tr><td style="padding: 8px 0;">Scroll</td><td style="text-align: right;">vertical (auto)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography - Título</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xl</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Cor texto</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography - Link</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td><td style="text-align: right;">Cor link</td></tr>
            <tr><td style="padding: 8px 0;">text-decoration</td><td style="text-align: right;">underline</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography - Data</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Cor texto</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Espaçamento</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">Gap entre grupos</td><td style="text-align: right;"><code>--spacing-lg</code></td></tr>
            <tr><td style="padding: 8px 0;">Gap entre itens</td><td style="text-align: right;"><code>--spacing-xs</code></td></tr>
            <tr><td style="padding: 8px 0;">Padding lateral</td><td style="text-align: right;"><code>--spacing-md</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Scrollbar</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;">Largura</td><td style="text-align: right;">6px</td></tr>
            <tr><td style="padding: 8px 0;">Track</td><td style="text-align: right;"><code>--context-color-surface-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;">Thumb</td><td style="text-align: right;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;">Border radius</td><td style="text-align: right;">pill</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Estrutura do Componente</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Largura fixa de 344px</li>
          <li>Altura 100% do container pai</li>
          <li>Header com título e link opcional (flex space-between)</li>
          <li>Content com scroll vertical automático</li>
          <li>Grupos organizados por data</li>
          <li>Cada grupo contém múltiplos CardHistory</li>
          <li>Scrollbar customizada para melhor aparência</li>
          <li>Usa CardHistory component para os itens</li>
        </ul>
      </div>
    </div>
  \`
})`,...($=(U=u.parameters)==null?void 0:U.docs)==null?void 0:$.source}}};const mt=["Playground","SemLink","TituloCustomizado","PoucosItens","MuitosItens","EmContainerFixo","Showcase","DesignTokens"];export{u as DesignTokens,c as EmContainerFixo,p as MuitosItens,a as Playground,l as PoucosItens,o as SemLink,g as Showcase,d as TituloCustomizado,mt as __namedExportsOrder,pt as default};
