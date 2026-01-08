import{q as W,c as a,B as Ke,C as He,a as s,b as p,e as h,g as Ze,p as r,h as Je,t as v,D as f,x as I,E as Ge,T as Qe,o as d,F as Xe,u as Ye}from"./vue.esm-bundler-cjlVRrb_.js";/* empty css                                                               */import{_ as et}from"./_plugin-vue_export-helper-DlAUqK2U.js";const tt=["for"],ot={key:0,class:"scuba-select__required"},nt=["onKeydown","aria-expanded","aria-controls","aria-label"],lt={key:0,class:"scuba-select__icon scuba-select__icon--left"},at={class:"scuba-select__icon scuba-select__icon--right"},st=["id"],dt=["onClick","onMouseenter","aria-selected","tabindex"],rt={class:"scuba-select__option-text"},it={key:1,class:"ph ph-check scuba-select__option-check"},ct={key:0,class:"scuba-select__empty"},pt={__name:"Select",props:{modelValue:{type:[String,Number,Object],default:null},options:{type:Array,default:()=>[],validator:n=>n.every(u=>typeof u=="object"&&"value"in u&&"label"in u)},label:{type:String,default:""},placeholder:{type:String,default:"Selecione uma opção"},required:{type:Boolean,default:!1},hint:{type:String,default:""},error:{type:String,default:""},disabled:{type:Boolean,default:!1},iconLeft:{type:String,default:""},size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},fullWidth:{type:Boolean,default:!1},id:{type:String,default:null},ariaLabel:{type:String,default:""},emptyMessage:{type:String,default:"Nenhuma opção disponível"},searchable:{type:Boolean,default:!1}},emits:["update:modelValue","change","open","close"],setup(n,{emit:u}){const o=n,M=u,N=W(null),c=W(!1),m=W(-1),U=a(()=>o.id?o.id:"scuba-select-"+Math.random().toString(36).substr(2,9)),$=a(()=>U.value+"-dropdown"),B=a(()=>o.options.find(e=>e.value===o.modelValue)),Pe=a(()=>B.value?B.value.label:o.placeholder),We=a(()=>{const e=["scuba-select-wrapper"];return o.fullWidth&&e.push("scuba-select-wrapper--full-width"),e}),Ne=a(()=>{const e=["scuba-select__label"];return o.disabled&&e.push("scuba-select__label--disabled"),e}),Be=a(()=>{const e=["scuba-select__container"];return e.push(`scuba-select__container--${o.size}`),o.disabled&&e.push("scuba-select__container--disabled"),o.error&&e.push("scuba-select__container--error"),c.value&&e.push("scuba-select__container--open"),o.iconLeft&&e.push("scuba-select__container--with-icon-left"),e}),Fe=a(()=>{const e=["scuba-select__dropdown"];return e.push(`scuba-select__dropdown--${o.size}`),e}),Ae=a(()=>{const e=["scuba-select__selected-text"];return B.value||e.push("scuba-select__selected-text--placeholder"),e}),Re=a(()=>{const e=["ph","ph-caret-down","scuba-select__chevron"];return c.value&&e.push("scuba-select__chevron--open"),e}),Ue=a(()=>{const e=["scuba-select__hint"];return o.error&&e.push("scuba-select__hint--error"),e}),D=e=>e.value===o.modelValue,$e=(e,g)=>{const t=["scuba-select__option"];return D(e)&&t.push("scuba-select__option--selected"),g===m.value&&t.push("scuba-select__option--highlighted"),e.disabled&&t.push("scuba-select__option--disabled"),t},F=()=>{o.disabled||(c.value?T():j())},j=()=>{c.value=!0,m.value=o.options.findIndex(e=>e.value===o.modelValue),M("open")},T=()=>{c.value=!1,m.value=-1,M("close")},je=e=>{e.disabled||o.disabled||(M("update:modelValue",e.value),M("change",e),T())},K=e=>{var b;if(!c.value){j();return}if(o.options.filter(A=>!A.disabled).length===0)return;let t=m.value+e;for(t<0?t=o.options.length-1:t>=o.options.length&&(t=0);(b=o.options[t])!=null&&b.disabled;)t+=e,t<0&&(t=o.options.length-1),t>=o.options.length&&(t=0);m.value=t},H=e=>{N.value&&!N.value.contains(e.target)&&T()};return Ke(()=>{document.addEventListener("click",H)}),He(()=>{document.removeEventListener("click",H)}),(e,g)=>(d(),s("div",{class:r(We.value),ref_key:"selectWrapper",ref:N},[n.label?(d(),s("label",{key:0,for:U.value,class:r(Ne.value)},[Je(v(n.label)+" ",1),n.required?(d(),s("span",ot,"*")):p("",!0)],10,tt)):p("",!0),h("div",{class:r(Be.value),onClick:F,onKeydown:[f(I(F,["prevent"]),["enter"]),f(I(F,["prevent"]),["space"]),f(T,["escape"]),g[0]||(g[0]=f(I(t=>K(1),["prevent"]),["down"])),g[1]||(g[1]=f(I(t=>K(-1),["prevent"]),["up"]))],tabindex:"0",role:"combobox","aria-expanded":c.value,"aria-haspopup":!0,"aria-controls":$.value,"aria-label":n.ariaLabel},[n.iconLeft?(d(),s("span",lt,[h("i",{class:r("ph "+n.iconLeft)},null,2)])):p("",!0),h("span",{class:r(Ae.value)},v(Pe.value),3),h("span",at,[h("i",{class:r(Re.value)},null,2)])],42,nt),Ze(Qe,{name:"scuba-select-dropdown"},{default:Ge(()=>[c.value?(d(),s("div",{key:0,id:$.value,class:r(Fe.value),role:"listbox"},[(d(!0),s(Xe,null,Ye(n.options,(t,b)=>(d(),s("div",{key:t.value,class:r($e(t,b)),onClick:A=>je(t),onMouseenter:A=>m.value=b,role:"option","aria-selected":D(t),tabindex:D(t)?0:-1},[t.icon?(d(),s("i",{key:0,class:r("ph "+t.icon+" scuba-select__option-icon")},null,2)):p("",!0),h("span",rt,v(t.label),1),D(t)?(d(),s("i",it)):p("",!0)],42,dt))),128)),n.options.length===0?(d(),s("div",ct,v(n.emptyMessage),1)):p("",!0)],10,st)):p("",!0)]),_:1}),n.hint||n.error?(d(),s("div",{key:1,class:r(Ue.value)},v(n.error||n.hint),3)):p("",!0)],2))}},R=et(pt,[["__scopeId","data-v-5dee5797"]]),ut={Nenhum:"","👤 Usuário":"ph-user","🔒 Cadeado":"ph-lock","✉️ Email":"ph-envelope","📞 Telefone":"ph-phone","📅 Calendário":"ph-calendar","🕐 Relógio":"ph-clock","🔍 Busca":"ph-magnifying-glass","🏠 Casa":"ph-house","📍 Pin":"ph-map-pin","🛒 Carrinho":"ph-shopping-cart","💳 Cartão":"ph-credit-card","⚙️ Engrenagem":"ph-gear","🔔 Sino":"ph-bell","⭐ Estrela":"ph-star"},i=[{value:"1",label:"Opção 1",icon:"ph-user"},{value:"2",label:"Opção 2",icon:"ph-house"},{value:"3",label:"Opção 3",icon:"ph-gear"},{value:"4",label:"Opção 4 Desabilitada",icon:"ph-lock",disabled:!0},{value:"5",label:"Opção 5",icon:"ph-star"}],gt=[{value:"br",label:"Brasil",icon:"ph-flag"},{value:"us",label:"Estados Unidos",icon:"ph-flag"},{value:"uk",label:"Reino Unido",icon:"ph-flag"},{value:"fr",label:"França",icon:"ph-flag"},{value:"de",label:"Alemanha",icon:"ph-flag"},{value:"es",label:"Espanha",icon:"ph-flag"},{value:"it",label:"Itália",icon:"ph-flag"},{value:"jp",label:"Japão",icon:"ph-flag"},{value:"cn",label:"China",icon:"ph-flag"},{value:"in",label:"Índia",icon:"ph-flag"}],bt={title:"Scuba/Select",component:R,tags:["autodocs"],argTypes:{options:{control:"object",description:"Array de opções para o select"},modelValue:{control:"text",description:"Valor selecionado (v-model)"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do select"},label:{control:"text",description:"Label do campo"},placeholder:{control:"text",description:"Texto placeholder"},required:{control:"boolean",description:"Campo obrigatório"},hint:{control:"text",description:"Texto de ajuda"},error:{control:"text",description:"Mensagem de erro"},disabled:{control:"boolean",description:"Estado desabilitado"},iconLeft:{control:"select",options:ut,description:"Ícone esquerda"},fullWidth:{control:"boolean",description:"Largura total"},emptyMessage:{control:"text",description:"Mensagem quando sem opções"}}},l=n=>({components:{Select:R},setup(){const u=W(n.modelValue||null);return{args:n,modelValue:u}},template:'<Select v-bind="args" v-model="modelValue" />'}),x=l.bind({});x.args={options:i,label:"Selecione uma opção",placeholder:"Escolha...",size:"md",hint:"Escolha a melhor opção para você",iconLeft:"ph-gear"};x.parameters={docs:{description:{story:"Use os controles abaixo para testar diferentes combinações de propriedades."}}};const y=l.bind({});y.args={options:i,label:"Select Small",placeholder:"Selecione...",size:"sm",hint:"Tamanho pequeno"};const S=l.bind({});S.args={options:i,label:"Select Medium",placeholder:"Selecione...",size:"md",hint:"Tamanho médio (padrão)"};const z=l.bind({});z.args={options:i,label:"Select Large",placeholder:"Selecione...",size:"lg",hint:"Tamanho grande"};const E=l.bind({});E.args={options:i,label:"Com ícone",placeholder:"Selecione...",size:"md",iconLeft:"ph-gear"};const w=l.bind({});w.args={options:i,label:"Campo obrigatório",placeholder:"Selecione...",size:"md",required:!0,hint:"Este campo é obrigatório"};const O=l.bind({});O.args={options:i,label:"Com erro",placeholder:"Selecione...",size:"md",error:"Por favor, selecione uma opção válida"};const _=l.bind({});_.args={options:i,label:"Desabilitado",placeholder:"Selecione...",size:"md",disabled:!0,hint:"Este campo está desabilitado"};const V=l.bind({});V.args={options:[],label:"Sem opções",placeholder:"Selecione...",size:"md",emptyMessage:"Nenhuma opção disponível"};const C=l.bind({});C.args={options:i,label:"Largura total",placeholder:"Selecione...",size:"md",fullWidth:!0};const k=l.bind({});k.args={options:gt,label:"Selecione um país",placeholder:"Escolha o país...",size:"md",iconLeft:"ph-map-pin"};const L=l.bind({});L.args={options:[{value:"home",label:"Página Inicial",icon:"ph-house"},{value:"settings",label:"Configurações",icon:"ph-gear"},{value:"profile",label:"Perfil",icon:"ph-user"},{value:"notifications",label:"Notificações",icon:"ph-bell"},{value:"favorites",label:"Favoritos",icon:"ph-heart"}],label:"Menu de navegação",placeholder:"Ir para...",size:"md"};const q=()=>({components:{Select:R},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Select Sizes & States</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
        <!-- Small Size -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Small</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Select Small"
            placeholder="Selecione..."
            size="sm"
          />
        </div>

        <!-- Medium Size -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Medium (Default)</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Select Medium"
            placeholder="Selecione..."
            size="md"
          />
        </div>

        <!-- Large Size -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Large</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Select Large"
            placeholder="Selecione..."
            size="lg"
          />
        </div>

        <!-- With Icon -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Com Ícone</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1', icon: 'ph-user' },
              { value: '2', label: 'Opção 2', icon: 'ph-house' },
              { value: '3', label: 'Opção 3', icon: 'ph-gear' }
            ]"
            label="Com ícone"
            placeholder="Selecione..."
            iconLeft="ph-gear"
            size="md"
          />
        </div>

        <!-- Required -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Obrigatório</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Campo obrigatório"
            placeholder="Selecione..."
            required
            hint="Este campo é obrigatório"
            size="md"
          />
        </div>

        <!-- With Error -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Com Erro</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Com erro"
            placeholder="Selecione..."
            error="Por favor, selecione uma opção"
            size="md"
          />
        </div>

        <!-- Disabled -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Desabilitado</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Desabilitado"
            placeholder="Selecione..."
            disabled
            size="md"
          />
        </div>

        <!-- Empty -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Sem Opções</h3>
          <Select
            :options="[]"
            label="Sem opções"
            placeholder="Selecione..."
            emptyMessage="Nenhuma opção disponível"
            size="md"
          />
        </div>
      </div>
    </div>
  `}),P=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-error</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-error</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded</code></td><td style="text-align: right;">8px</td></tr>
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
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px</td></tr>
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
            <tr><td style="padding: 8px 0;"><code>--shadow-lg</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-fast</code></td><td style="text-align: right;">150ms</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Z-Index</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          O dropdown usa <code style="background: white; padding: 4px 8px; border-radius: 4px;">--z-index-dropdown: 1000</code> para garantir que fique sobre outros elementos.
        </p>
      </div>
    </div>
  `});var Z,J,G;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(G=(J=x.parameters)==null?void 0:J.docs)==null?void 0:G.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var ee,te,oe;S.parameters={...S.parameters,docs:{...(ee=S.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(oe=(te=S.parameters)==null?void 0:te.docs)==null?void 0:oe.source}}};var ne,le,ae;z.parameters={...z.parameters,docs:{...(ne=z.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(ae=(le=z.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};var se,de,re;E.parameters={...E.parameters,docs:{...(se=E.parameters)==null?void 0:se.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(re=(de=E.parameters)==null?void 0:de.docs)==null?void 0:re.source}}};var ie,ce,pe;w.parameters={...w.parameters,docs:{...(ie=w.parameters)==null?void 0:ie.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(pe=(ce=w.parameters)==null?void 0:ce.docs)==null?void 0:pe.source}}};var ue,ge,me;O.parameters={...O.parameters,docs:{...(ue=O.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(me=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:me.source}}};var he,xe,be;_.parameters={..._.parameters,docs:{...(he=_.parameters)==null?void 0:he.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(be=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ve,fe,ye;V.parameters={...V.parameters,docs:{...(ve=V.parameters)==null?void 0:ve.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(ye=(fe=V.parameters)==null?void 0:fe.docs)==null?void 0:ye.source}}};var Se,ze,Ee;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(Ee=(ze=C.parameters)==null?void 0:ze.docs)==null?void 0:Ee.source}}};var we,Oe,_e;k.parameters={...k.parameters,docs:{...(we=k.parameters)==null?void 0:we.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(_e=(Oe=k.parameters)==null?void 0:Oe.docs)==null?void 0:_e.source}}};var Ve,Ce,ke;L.parameters={...L.parameters,docs:{...(Ve=L.parameters)==null?void 0:Ve.docs,source:{originalSource:`args => ({
  components: {
    Select
  },
  setup() {
    const modelValue = ref(args.modelValue || null);
    return {
      args,
      modelValue
    };
  },
  template: '<Select v-bind="args" v-model="modelValue" />'
})`,...(ke=(Ce=L.parameters)==null?void 0:Ce.docs)==null?void 0:ke.source}}};var Le,Me,De;q.parameters={...q.parameters,docs:{...(Le=q.parameters)==null?void 0:Le.docs,source:{originalSource:`() => ({
  components: {
    Select
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Select Sizes & States</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
        <!-- Small Size -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Small</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Select Small"
            placeholder="Selecione..."
            size="sm"
          />
        </div>

        <!-- Medium Size -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Medium (Default)</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Select Medium"
            placeholder="Selecione..."
            size="md"
          />
        </div>

        <!-- Large Size -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Large</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Select Large"
            placeholder="Selecione..."
            size="lg"
          />
        </div>

        <!-- With Icon -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Com Ícone</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1', icon: 'ph-user' },
              { value: '2', label: 'Opção 2', icon: 'ph-house' },
              { value: '3', label: 'Opção 3', icon: 'ph-gear' }
            ]"
            label="Com ícone"
            placeholder="Selecione..."
            iconLeft="ph-gear"
            size="md"
          />
        </div>

        <!-- Required -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Obrigatório</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Campo obrigatório"
            placeholder="Selecione..."
            required
            hint="Este campo é obrigatório"
            size="md"
          />
        </div>

        <!-- With Error -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Com Erro</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Com erro"
            placeholder="Selecione..."
            error="Por favor, selecione uma opção"
            size="md"
          />
        </div>

        <!-- Disabled -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Desabilitado</h3>
          <Select
            :options="[
              { value: '1', label: 'Opção 1' },
              { value: '2', label: 'Opção 2' },
              { value: '3', label: 'Opção 3' }
            ]"
            label="Desabilitado"
            placeholder="Selecione..."
            disabled
            size="md"
          />
        </div>

        <!-- Empty -->
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Sem Opções</h3>
          <Select
            :options="[]"
            label="Sem opções"
            placeholder="Selecione..."
            emptyMessage="Nenhuma opção disponível"
            size="md"
          />
        </div>
      </div>
    </div>
  \`
})`,...(De=(Me=q.parameters)==null?void 0:Me.docs)==null?void 0:De.source}}};var Te,Ie,qe;P.parameters={...P.parameters,docs:{...(Te=P.parameters)==null?void 0:Te.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-error</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-error</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded</code></td><td style="text-align: right;">8px</td></tr>
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
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px</td></tr>
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
            <tr><td style="padding: 8px 0;"><code>--shadow-lg</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-fast</code></td><td style="text-align: right;">150ms</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Z-Index</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          O dropdown usa <code style="background: white; padding: 4px 8px; border-radius: 4px;">--z-index-dropdown: 1000</code> para garantir que fique sobre outros elementos.
        </p>
      </div>
    </div>
  \`
})`,...(qe=(Ie=P.parameters)==null?void 0:Ie.docs)==null?void 0:qe.source}}};const vt=["Playground","Small","Medium","Large","WithIcon","Required","WithError","Disabled","Empty","FullWidth","ManyOptions","WithOptionIcons","AllSizesAndStates","DesignTokens"];export{q as AllSizesAndStates,P as DesignTokens,_ as Disabled,V as Empty,C as FullWidth,z as Large,k as ManyOptions,S as Medium,x as Playground,w as Required,y as Small,O as WithError,E as WithIcon,L as WithOptionIcons,vt as __namedExportsOrder,bt as default};
