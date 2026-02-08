import{v as d,c as b,w as N,B as Ft,G as P,a as r,e as D,F as U,z as K,A as Ht,u as f,o as c,K as g,s as u,b as j,t as q,r as Mt,h as Ot}from"./vue.esm-bundler-BXouRCJi.js";import{_ as qt}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Rt=["aria-orientation"],Lt=["aria-selected","aria-controls","id","tabindex","disabled","onClick","onKeydown"],Nt={class:"scuba-tabs__label"},Ut={key:1,class:"scuba-tabs__badge"},Kt={class:"scuba-tabs__panels"},jt=["id","aria-labelledby"],Gt={__name:"Tabs",props:{modelValue:{type:[String,Number],default:null},tabs:{type:Array,required:!0,validator:o=>o.every(i=>typeof i=="object"&&"label"in i)},orientation:{type:String,default:"horizontal",validator:o=>["horizontal","vertical"].includes(o)},fullWidth:{type:Boolean,default:!1},showIcons:{type:Boolean,default:!1},id:{type:String,default:null}},emits:["update:modelValue","change"],setup(o,{emit:i}){const n=o,m=i,M=d(null),V=d({}),h=d(null),R=b(()=>n.id?`${n.id}-tab`:"scuba-tab-"+Math.random().toString(36).substr(2,9)),L=b(()=>n.id?`${n.id}-panel`:"scuba-panel-"+Math.random().toString(36).substr(2,9)),O=b(()=>n.modelValue!==null?n.tabs.find(t=>t.value===n.modelValue):n.tabs.find(t=>!t.disabled)||n.tabs[0]),Bt=b(()=>n.tabs.indexOf(O.value)),Wt=b(()=>{const t=["scuba-tabs"];return t.push("scuba-tabs--underline"),t.push(`scuba-tabs--${n.orientation}`),t}),Pt=b(()=>{const t=["scuba-tabs__list"];return n.fullWidth&&t.push("scuba-tabs__list--full-width"),t}),A=t=>t===O.value,Dt=t=>{const e=["scuba-tabs__tab"];return A(t)&&e.push("scuba-tabs__tab--active"),t.disabled&&e.push("scuba-tabs__tab--disabled"),e},$t=t=>{const e=["scuba-tabs__panel"];return A(t)&&e.push("scuba-tabs__panel--active"),e},B=t=>{t.disabled||(m("update:modelValue",t.value),m("change",t),P(()=>{x()}))},W=t=>{const e=n.tabs.filter(p=>!p.disabled);if(e.length===0)return;let s=e.indexOf(O.value)+t;s<0?s=e.length-1:s>=e.length&&(s=0),B(e[s])},Et=()=>{const t=n.tabs.find(e=>!e.disabled);t&&B(t)},kt=()=>{const t=n.tabs.filter(e=>!e.disabled);t.length>0&&B(t[t.length-1])},x=()=>{if(!M.value||!h.value)return;const e=h.value.querySelectorAll(".scuba-tabs__tab")[Bt.value];if(!e)return;const a=e.getBoundingClientRect(),s=h.value.getBoundingClientRect();n.orientation==="horizontal"?V.value={width:`${a.width}px`,transform:`translateX(${a.left-s.left}px)`}:V.value={height:`${a.height}px`,transform:`translateY(${a.top-s.top}px)`}};return N(()=>n.modelValue,()=>{P(()=>{x()})}),N(()=>n.tabs,()=>{P(()=>{x()})},{deep:!0}),Ft(()=>{if(n.modelValue===null){const t=n.tabs.find(e=>!e.disabled);t&&m("update:modelValue",t.value)}P(()=>{x()}),window.addEventListener("resize",x)}),(t,e)=>(c(),r("div",{class:f(Wt.value)},[D("div",{ref_key:"tabListRef",ref:h,class:f(Pt.value),role:"tablist","aria-orientation":o.orientation},[(c(!0),r(U,null,K(o.tabs,(a,s)=>(c(),r("button",{key:a.value||s,class:f(Dt(a)),role:"tab","aria-selected":A(a),"aria-controls":`${L.value}-${s}`,id:`${R.value}-${s}`,tabindex:A(a)?0:-1,disabled:a.disabled,onClick:p=>B(a),onKeydown:[e[0]||(e[0]=g(u(p=>W(1),["prevent"]),["right"])),e[1]||(e[1]=g(u(p=>W(-1),["prevent"]),["left"])),e[2]||(e[2]=g(u(p=>W(1),["prevent"]),["down"])),e[3]||(e[3]=g(u(p=>W(-1),["prevent"]),["up"])),g(u(Et,["prevent"]),["home"]),g(u(kt,["prevent"]),["end"])]},[a.icon&&o.showIcons?(c(),r("i",{key:0,class:f(["ph",a.icon,"scuba-tabs__icon"])},null,2)):j("",!0),D("span",Nt,q(a.label),1),a.badge?(c(),r("span",Ut,q(a.badge),1)):j("",!0)],42,Lt))),128)),D("div",{ref_key:"indicator",ref:M,class:"scuba-tabs__indicator",style:Ht(V.value)},null,4)],10,Rt),D("div",Kt,[(c(!0),r(U,null,K(o.tabs,(a,s)=>(c(),r("div",{key:a.value||s,class:f($t(a)),role:"tabpanel",id:`${L.value}-${s}`,"aria-labelledby":`${R.value}-${s}`,tabindex:0},[Mt(t.$slots,a.value||`panel-${s}`,{tab:a},()=>[Ot(q(a.content),1)],!0)],10,jt))),128))])],2))}},I=qt(Gt,[["__scopeId","data-v-36f0cf02"]]),H=[{value:"tab1",label:"Tab 1",icon:"ph-house",content:"Conteúdo da Tab 1"},{value:"tab2",label:"Tab 2",icon:"ph-user",content:"Conteúdo da Tab 2"},{value:"tab3",label:"Tab 3",icon:"ph-gear",content:"Conteúdo da Tab 3"}],Yt=[{value:"inbox",label:"Inbox",icon:"ph-inbox",badge:"12",content:"Mensagens na caixa de entrada"},{value:"drafts",label:"Rascunhos",icon:"ph-note",badge:"3",content:"Seus rascunhos salvos"},{value:"sent",label:"Enviados",icon:"ph-paper-plane-tilt",content:"Mensagens enviadas"},{value:"trash",label:"Lixeira",icon:"ph-trash",content:"Itens na lixeira"}],Xt=[{value:"1",label:"Dashboard",icon:"ph-house",content:"Dashboard content"},{value:"2",label:"Analytics",icon:"ph-chart-line",content:"Analytics content"},{value:"3",label:"PhUsers",icon:"ph-users",content:"PhUsers content"},{value:"4",label:"Settings",icon:"ph-gear",content:"Settings content"},{value:"5",label:"Reports",icon:"ph-file-text",content:"Reports content"},{value:"6",label:"Messages",icon:"ph-envelope",content:"Messages content"},{value:"7",label:"PhCalendar",icon:"ph-calendar",content:"PhCalendar content"},{value:"8",label:"Tasks",icon:"ph-check-square",content:"Tasks content"}],Zt={title:"Scuba/Tabs",component:I,tags:["autodocs"],argTypes:{tabs:{control:"object",description:"Array de tabs"},modelValue:{control:"text",description:"Tab ativa (v-model)"},orientation:{control:"select",options:["horizontal","vertical"],description:"Orientação das tabs"},fullWidth:{control:"boolean",description:"Tabs ocupam largura total"},showIcons:{control:"boolean",description:"Exibir ícones nas tabs"}}},l=o=>({components:{Tabs:I},setup(){var n;const i=d(o.modelValue||((n=o.tabs[0])==null?void 0:n.value));return{args:o,activeTab:i}},template:'<Tabs v-bind="args" v-model="activeTab" />'}),v=l.bind({});v.args={tabs:H,modelValue:"tab1",orientation:"horizontal",showIcons:!1};v.parameters={docs:{description:{story:"Use os controles abaixo para testar diferentes configurações das tabs."}}};const y=l.bind({});y.args={tabs:H,modelValue:"tab1",orientation:"horizontal",showIcons:!1};const T=l.bind({});T.args={tabs:[{value:"home",label:"Home",icon:"ph-house",content:"Home content"},{value:"profile",label:"Perfil",icon:"ph-user",content:"Profile content"},{value:"settings",label:"Configurações",icon:"ph-gear",content:"Settings content"},{value:"notifications",label:"Notificações",icon:"ph-bell",content:"Notifications content"}],modelValue:"home",showIcons:!0};const w=l.bind({});w.args={tabs:Yt,modelValue:"inbox",showIcons:!0};const z=l.bind({});z.args={tabs:[{value:"tab1",label:"Tab 1",content:"Conteúdo da Tab 1"},{value:"tab2",label:"Tab 2 (Disabled)",content:"Conteúdo da Tab 2",disabled:!0},{value:"tab3",label:"Tab 3",content:"Conteúdo da Tab 3"}],modelValue:"tab1"};const S=l.bind({});S.args={tabs:H,modelValue:"tab1",fullWidth:!0};const C=l.bind({});C.args={tabs:Xt,modelValue:"1"};const _=l.bind({});_.args={tabs:H,modelValue:"tab1",orientation:"vertical"};const $=()=>({components:{Tabs:I},setup(){const o=d("overview");return{tabs:[{value:"overview",label:"Overview",icon:"ph-house"},{value:"details",label:"Details",icon:"ph-info"},{value:"settings",label:"Settings",icon:"ph-gear"}],activeTab:o}},template:`
    <Tabs :tabs="tabs" v-model="activeTab">
      <template #overview>
        <div style="padding: 24px;">
          <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600;">Overview</h3>
          <p style="color: #6b7280; line-height: 1.6;">
            Este é um exemplo de conteúdo customizado usando slots.
            Você pode adicionar qualquer conteúdo HTML aqui.
          </p>
        </div>
      </template>

      <template #details>
        <div style="padding: 24px;">
          <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600;">Details</h3>
          <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </template>

      <template #settings>
        <div style="padding: 24px;">
          <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600;">Settings</h3>
          <p style="color: #6b7280; line-height: 1.6;">
            Configure suas preferências aqui.
          </p>
        </div>
      </template>
    </Tabs>
  `}),E=()=>({components:{Tabs:I},setup(){const o=d("tab1"),i=d("tab1");return{tabs:[{value:"tab1",label:"Tab 1",icon:"ph-house",content:"Conteúdo da Tab 1"},{value:"tab2",label:"Tab 2",icon:"ph-user",content:"Conteúdo da Tab 2"},{value:"tab3",label:"Tab 3",icon:"ph-gear",content:"Conteúdo da Tab 3"}],activeTab1:o,activeTab2:i}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tabs Orientations</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <!-- Horizontal -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Horizontal (Default)</h3>
          <Tabs :tabs="tabs" v-model="activeTab1" orientation="horizontal" />
        </div>

        <!-- Vertical -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Vertical</h3>
          <div style="max-width: 600px;">
            <Tabs :tabs="tabs" v-model="activeTab2" orientation="vertical" />
          </div>
        </div>
      </div>
    </div>
  `}),k=()=>({components:{Tabs:I},setup(){const o=d("tab1"),i=d("home"),n=d("inbox"),m=d("tab1");return{basicTabs:[{value:"tab1",label:"Tab 1",content:"Conteúdo 1"},{value:"tab2",label:"Tab 2",content:"Conteúdo 2"},{value:"tab3",label:"Tab 3",content:"Conteúdo 3"}],iconTabs:[{value:"home",label:"Home",icon:"ph-house",content:"Home content"},{value:"profile",label:"Perfil",icon:"ph-user",content:"Profile content"},{value:"settings",label:"Config",icon:"ph-gear",content:"Settings content"}],badgeTabs:[{value:"inbox",label:"Inbox",badge:"12",content:"Inbox content"},{value:"drafts",label:"Drafts",badge:"3",content:"Drafts content"},{value:"sent",label:"Sent",content:"Sent content"}],active1:o,active2:i,active3:n,active4:m}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Tabs Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px;">
        <!-- Basic -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Basic</h3>
          <Tabs :tabs="basicTabs" v-model="active1"  />
        </div>

        <!-- With Icons -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">With Icons</h3>
          <Tabs :tabs="iconTabs" v-model="active2"  showIcons />
        </div>

        <!-- With Badges -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">With Badges</h3>
          <Tabs :tabs="badgeTabs" v-model="active3"  />
        </div>

        <!-- Full Width -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Full Width</h3>
          <Tabs :tabs="basicTabs" v-model="active4"  fullWidth />
        </div>
      </div>
    </div>
  `}),F=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Surfaces & Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">20px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography & Others</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-bold</code></td><td style="text-align: right;">700</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa <code>role="tablist"</code> e <code>role="tab"</code> para semântica ARIA</li>
          <li>Navegação por teclado: setas, Home, End</li>
          <li>Atributos <code>aria-selected</code> e <code>aria-controls</code> gerenciados</li>
          <li>Foco visível com outline</li>
          <li>Tabs desabilitadas com <code>tabindex="-1"</code></li>
        </ul>
      </div>
    </div>
  `});var G,Y,X;v.parameters={...v.parameters,docs:{...(G=v.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  components: {
    Tabs
  },
  setup() {
    const activeTab = ref(args.modelValue || args.tabs[0]?.value);
    return {
      args,
      activeTab
    };
  },
  template: '<Tabs v-bind="args" v-model="activeTab" />'
})`,...(X=(Y=v.parameters)==null?void 0:Y.docs)==null?void 0:X.source}}};var J,Q,Z;y.parameters={...y.parameters,docs:{...(J=y.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    Tabs
  },
  setup() {
    const activeTab = ref(args.modelValue || args.tabs[0]?.value);
    return {
      args,
      activeTab
    };
  },
  template: '<Tabs v-bind="args" v-model="activeTab" />'
})`,...(Z=(Q=y.parameters)==null?void 0:Q.docs)==null?void 0:Z.source}}};var tt,et,nt;T.parameters={...T.parameters,docs:{...(tt=T.parameters)==null?void 0:tt.docs,source:{originalSource:`args => ({
  components: {
    Tabs
  },
  setup() {
    const activeTab = ref(args.modelValue || args.tabs[0]?.value);
    return {
      args,
      activeTab
    };
  },
  template: '<Tabs v-bind="args" v-model="activeTab" />'
})`,...(nt=(et=T.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var at,ot,st;w.parameters={...w.parameters,docs:{...(at=w.parameters)==null?void 0:at.docs,source:{originalSource:`args => ({
  components: {
    Tabs
  },
  setup() {
    const activeTab = ref(args.modelValue || args.tabs[0]?.value);
    return {
      args,
      activeTab
    };
  },
  template: '<Tabs v-bind="args" v-model="activeTab" />'
})`,...(st=(ot=w.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var it,dt,lt;z.parameters={...z.parameters,docs:{...(it=z.parameters)==null?void 0:it.docs,source:{originalSource:`args => ({
  components: {
    Tabs
  },
  setup() {
    const activeTab = ref(args.modelValue || args.tabs[0]?.value);
    return {
      args,
      activeTab
    };
  },
  template: '<Tabs v-bind="args" v-model="activeTab" />'
})`,...(lt=(dt=z.parameters)==null?void 0:dt.docs)==null?void 0:lt.source}}};var rt,ct,pt;S.parameters={...S.parameters,docs:{...(rt=S.parameters)==null?void 0:rt.docs,source:{originalSource:`args => ({
  components: {
    Tabs
  },
  setup() {
    const activeTab = ref(args.modelValue || args.tabs[0]?.value);
    return {
      args,
      activeTab
    };
  },
  template: '<Tabs v-bind="args" v-model="activeTab" />'
})`,...(pt=(ct=S.parameters)==null?void 0:ct.docs)==null?void 0:pt.source}}};var bt,gt,ut;C.parameters={...C.parameters,docs:{...(bt=C.parameters)==null?void 0:bt.docs,source:{originalSource:`args => ({
  components: {
    Tabs
  },
  setup() {
    const activeTab = ref(args.modelValue || args.tabs[0]?.value);
    return {
      args,
      activeTab
    };
  },
  template: '<Tabs v-bind="args" v-model="activeTab" />'
})`,...(ut=(gt=C.parameters)==null?void 0:gt.docs)==null?void 0:ut.source}}};var vt,mt,ht;_.parameters={..._.parameters,docs:{...(vt=_.parameters)==null?void 0:vt.docs,source:{originalSource:`args => ({
  components: {
    Tabs
  },
  setup() {
    const activeTab = ref(args.modelValue || args.tabs[0]?.value);
    return {
      args,
      activeTab
    };
  },
  template: '<Tabs v-bind="args" v-model="activeTab" />'
})`,...(ht=(mt=_.parameters)==null?void 0:mt.docs)==null?void 0:ht.source}}};var xt,ft,yt;$.parameters={...$.parameters,docs:{...(xt=$.parameters)==null?void 0:xt.docs,source:{originalSource:`() => ({
  components: {
    Tabs
  },
  setup() {
    const activeTab = ref('overview');
    const tabs = [{
      value: 'overview',
      label: 'Overview',
      icon: 'ph-house'
    }, {
      value: 'details',
      label: 'Details',
      icon: 'ph-info'
    }, {
      value: 'settings',
      label: 'Settings',
      icon: 'ph-gear'
    }];
    return {
      tabs,
      activeTab
    };
  },
  template: \`
    <Tabs :tabs="tabs" v-model="activeTab">
      <template #overview>
        <div style="padding: 24px;">
          <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600;">Overview</h3>
          <p style="color: #6b7280; line-height: 1.6;">
            Este é um exemplo de conteúdo customizado usando slots.
            Você pode adicionar qualquer conteúdo HTML aqui.
          </p>
        </div>
      </template>

      <template #details>
        <div style="padding: 24px;">
          <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600;">Details</h3>
          <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
            <li>Item 1</li>
            <li>Item 2</li>
            <li>Item 3</li>
          </ul>
        </div>
      </template>

      <template #settings>
        <div style="padding: 24px;">
          <h3 style="margin-bottom: 16px; font-size: 20px; font-weight: 600;">Settings</h3>
          <p style="color: #6b7280; line-height: 1.6;">
            Configure suas preferências aqui.
          </p>
        </div>
      </template>
    </Tabs>
  \`
})`,...(yt=(ft=$.parameters)==null?void 0:ft.docs)==null?void 0:yt.source}}};var Tt,wt,zt;E.parameters={...E.parameters,docs:{...(Tt=E.parameters)==null?void 0:Tt.docs,source:{originalSource:`() => ({
  components: {
    Tabs
  },
  setup() {
    const activeTab1 = ref('tab1');
    const activeTab2 = ref('tab1');
    const tabs = [{
      value: 'tab1',
      label: 'Tab 1',
      icon: 'ph-house',
      content: 'Conteúdo da Tab 1'
    }, {
      value: 'tab2',
      label: 'Tab 2',
      icon: 'ph-user',
      content: 'Conteúdo da Tab 2'
    }, {
      value: 'tab3',
      label: 'Tab 3',
      icon: 'ph-gear',
      content: 'Conteúdo da Tab 3'
    }];
    return {
      tabs,
      activeTab1,
      activeTab2
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tabs Orientations</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <!-- Horizontal -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Horizontal (Default)</h3>
          <Tabs :tabs="tabs" v-model="activeTab1" orientation="horizontal" />
        </div>

        <!-- Vertical -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Vertical</h3>
          <div style="max-width: 600px;">
            <Tabs :tabs="tabs" v-model="activeTab2" orientation="vertical" />
          </div>
        </div>
      </div>
    </div>
  \`
})`,...(zt=(wt=E.parameters)==null?void 0:wt.docs)==null?void 0:zt.source}}};var St,Ct,_t;k.parameters={...k.parameters,docs:{...(St=k.parameters)==null?void 0:St.docs,source:{originalSource:`() => ({
  components: {
    Tabs
  },
  setup() {
    const active1 = ref('tab1');
    const active2 = ref('home');
    const active3 = ref('inbox');
    const active4 = ref('tab1');
    const basicTabs = [{
      value: 'tab1',
      label: 'Tab 1',
      content: 'Conteúdo 1'
    }, {
      value: 'tab2',
      label: 'Tab 2',
      content: 'Conteúdo 2'
    }, {
      value: 'tab3',
      label: 'Tab 3',
      content: 'Conteúdo 3'
    }];
    const iconTabs = [{
      value: 'home',
      label: 'Home',
      icon: 'ph-house',
      content: 'Home content'
    }, {
      value: 'profile',
      label: 'Perfil',
      icon: 'ph-user',
      content: 'Profile content'
    }, {
      value: 'settings',
      label: 'Config',
      icon: 'ph-gear',
      content: 'Settings content'
    }];
    const badgeTabs = [{
      value: 'inbox',
      label: 'Inbox',
      badge: '12',
      content: 'Inbox content'
    }, {
      value: 'drafts',
      label: 'Drafts',
      badge: '3',
      content: 'Drafts content'
    }, {
      value: 'sent',
      label: 'Sent',
      content: 'Sent content'
    }];
    return {
      basicTabs,
      iconTabs,
      badgeTabs,
      active1,
      active2,
      active3,
      active4
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Tabs Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px;">
        <!-- Basic -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Basic</h3>
          <Tabs :tabs="basicTabs" v-model="active1"  />
        </div>

        <!-- With Icons -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">With Icons</h3>
          <Tabs :tabs="iconTabs" v-model="active2"  showIcons />
        </div>

        <!-- With Badges -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">With Badges</h3>
          <Tabs :tabs="badgeTabs" v-model="active3"  />
        </div>

        <!-- Full Width -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Full Width</h3>
          <Tabs :tabs="basicTabs" v-model="active4"  fullWidth />
        </div>
      </div>
    </div>
  \`
})`,...(_t=(Ct=k.parameters)==null?void 0:Ct.docs)==null?void 0:_t.source}}};var It,Vt,At;F.parameters={...F.parameters,docs:{...(It=F.parameters)==null?void 0:It.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Surfaces & Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">20px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography & Others</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-bold</code></td><td style="text-align: right;">700</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa <code>role="tablist"</code> e <code>role="tab"</code> para semântica ARIA</li>
          <li>Navegação por teclado: setas, Home, End</li>
          <li>Atributos <code>aria-selected</code> e <code>aria-controls</code> gerenciados</li>
          <li>Foco visível com outline</li>
          <li>Tabs desabilitadas com <code>tabindex="-1"</code></li>
        </ul>
      </div>
    </div>
  \`
})`,...(At=(Vt=F.parameters)==null?void 0:Vt.docs)==null?void 0:At.source}}};const te=["Playground","Basic","WithIcons","WithBadges","WithDisabled","FullWidth","ManyTabs","Vertical","CustomContent","AllOrientations","Showcase","DesignTokens"];export{E as AllOrientations,y as Basic,$ as CustomContent,F as DesignTokens,S as FullWidth,C as ManyTabs,v as Playground,k as Showcase,_ as Vertical,w as WithBadges,z as WithDisabled,T as WithIcons,te as __namedExportsOrder,Zt as default};
