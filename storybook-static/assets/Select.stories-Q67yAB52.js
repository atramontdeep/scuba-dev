import{v as S,c as d,B as Ze,C as Je,a,b as i,e as m,g as Ge,u as c,h as Qe,t as x,K as y,s as P,D as Xe,T as Ye,o as s,F as et,z as tt}from"./vue.esm-bundler-BXouRCJi.js";/* empty css                                                               */import{_ as ot}from"./_plugin-vue_export-helper-DlAUqK2U.js";const nt=["for"],lt={key:0,class:"scuba-select__required"},at={key:1,class:"scuba-select__optional"},st=["aria-label"],dt={key:0,class:"scuba-select__tooltip"},rt=["onKeydown","aria-expanded","aria-controls","aria-label"],it={key:0,class:"scuba-select__icon scuba-select__icon--left"},ct={class:"scuba-select__icon scuba-select__icon--right"},pt=["id"],ut=["onClick","onMouseenter","aria-selected","tabindex"],gt={class:"scuba-select__option-text"},mt={key:1,class:"ph ph-check scuba-select__option-check"},ht={key:0,class:"scuba-select__empty"},xt={__name:"Select",props:{modelValue:{type:[String,Number,Object],default:null},options:{type:Array,default:()=>[],validator:n=>n.every(g=>typeof g=="object"&&"value"in g&&"label"in g)},label:{type:String,default:""},placeholder:{type:String,default:"Selecione uma opção"},required:{type:Boolean,default:!1},optional:{type:Boolean,default:!1},helpText:{type:String,default:""},hint:{type:String,default:""},error:{type:String,default:""},disabled:{type:Boolean,default:!1},iconLeft:{type:String,default:""},size:{type:String,default:"md",validator:n=>["sm","md","lg"].includes(n)},fullWidth:{type:Boolean,default:!1},id:{type:String,default:null},ariaLabel:{type:String,default:""},emptyMessage:{type:String,default:"Nenhuma opção disponível"},searchable:{type:Boolean,default:!1}},emits:["update:modelValue","change","open","close"],setup(n,{emit:g}){const o=n,D=g,N=S(null),u=S(!1),h=S(-1),v=S(!1),U=d(()=>o.id?o.id:"scuba-select-"+Math.random().toString(36).substr(2,9)),j=d(()=>U.value+"-dropdown"),F=d(()=>o.options.find(e=>e.value===o.modelValue)),We=d(()=>F.value?F.value.label:o.placeholder),Be=d(()=>"Ajuda para "+o.label),Ne=d(()=>{const e=["scuba-select-wrapper"];return o.fullWidth&&e.push("scuba-select-wrapper--full-width"),e}),Fe=d(()=>{const e=["scuba-select__label"];return o.disabled&&e.push("scuba-select__label--disabled"),e}),Ae=d(()=>{const e=["scuba-select__container"];return e.push(`scuba-select__container--${o.size}`),o.disabled&&e.push("scuba-select__container--disabled"),o.error&&e.push("scuba-select__container--error"),u.value&&e.push("scuba-select__container--open"),o.iconLeft&&e.push("scuba-select__container--with-icon-left"),e}),$e=d(()=>{const e=["scuba-select__dropdown"];return e.push(`scuba-select__dropdown--${o.size}`),e}),Re=d(()=>{const e=["scuba-select__selected-text"];return F.value||e.push("scuba-select__selected-text--placeholder"),e}),Ue=d(()=>{const e=["ph","ph-caret-down","scuba-select__chevron"];return u.value&&e.push("scuba-select__chevron--open"),e}),je=d(()=>{const e=["scuba-select__hint"];return o.error&&e.push("scuba-select__hint--error"),e}),I=e=>e.value===o.modelValue,Ke=(e,l)=>{const t=["scuba-select__option"];return I(e)&&t.push("scuba-select__option--selected"),l===h.value&&t.push("scuba-select__option--highlighted"),e.disabled&&t.push("scuba-select__option--disabled"),t},A=()=>{o.disabled||(u.value?q():K())},K=()=>{u.value=!0,h.value=o.options.findIndex(e=>e.value===o.modelValue),D("open")},q=()=>{u.value=!1,h.value=-1,D("close")},He=e=>{e.disabled||o.disabled||(D("update:modelValue",e.value),D("change",e),q())},H=e=>{var f;if(!u.value){K();return}if(o.options.filter($=>!$.disabled).length===0)return;let t=h.value+e;for(t<0?t=o.options.length-1:t>=o.options.length&&(t=0);(f=o.options[t])!=null&&f.disabled;)t+=e,t<0&&(t=o.options.length-1),t>=o.options.length&&(t=0);h.value=t},Z=e=>{N.value&&!N.value.contains(e.target)&&q()};return Ze(()=>{document.addEventListener("click",Z)}),Je(()=>{document.removeEventListener("click",Z)}),(e,l)=>(s(),a("div",{class:c(Ne.value),ref_key:"selectWrapper",ref:N},[n.label?(s(),a("label",{key:0,for:U.value,class:c(Fe.value)},[Qe(x(n.label)+" ",1),n.required?(s(),a("span",lt,"*")):i("",!0),n.optional?(s(),a("span",at,"opcional")):i("",!0),n.helpText?(s(),a("button",{key:2,type:"button",class:"scuba-select__help-button","aria-label":Be.value,onMouseenter:l[0]||(l[0]=t=>v.value=!0),onMouseleave:l[1]||(l[1]=t=>v.value=!1),onFocus:l[2]||(l[2]=t=>v.value=!0),onBlur:l[3]||(l[3]=t=>v.value=!1)},[l[6]||(l[6]=m("i",{class:"ph ph-question"},null,-1)),v.value?(s(),a("span",dt,x(n.helpText),1)):i("",!0)],40,st)):i("",!0)],10,nt)):i("",!0),m("div",{class:c(Ae.value),onClick:A,onKeydown:[y(P(A,["prevent"]),["enter"]),y(P(A,["prevent"]),["space"]),y(q,["escape"]),l[4]||(l[4]=y(P(t=>H(1),["prevent"]),["down"])),l[5]||(l[5]=y(P(t=>H(-1),["prevent"]),["up"]))],tabindex:"0",role:"combobox","aria-expanded":u.value,"aria-haspopup":!0,"aria-controls":j.value,"aria-label":n.ariaLabel},[n.iconLeft?(s(),a("span",it,[m("i",{class:c("ph "+n.iconLeft)},null,2)])):i("",!0),m("span",{class:c(Re.value)},x(We.value),3),m("span",ct,[m("i",{class:c(Ue.value)},null,2)])],42,rt),Ge(Ye,{name:"scuba-select-dropdown"},{default:Xe(()=>[u.value?(s(),a("div",{key:0,id:j.value,class:c($e.value),role:"listbox"},[(s(!0),a(et,null,tt(n.options,(t,f)=>(s(),a("div",{key:t.value,class:c(Ke(t,f)),onClick:$=>He(t),onMouseenter:$=>h.value=f,role:"option","aria-selected":I(t),tabindex:I(t)?0:-1},[t.icon?(s(),a("i",{key:0,class:c("ph "+t.icon+" scuba-select__option-icon")},null,2)):i("",!0),m("span",gt,x(t.label),1),I(t)?(s(),a("i",mt)):i("",!0)],42,ut))),128)),n.options.length===0?(s(),a("div",ht,x(n.emptyMessage),1)):i("",!0)],10,pt)):i("",!0)]),_:1}),n.hint||n.error?(s(),a("div",{key:1,class:c(je.value)},x(n.error||n.hint),3)):i("",!0)],2))}},R=ot(xt,[["__scopeId","data-v-4a998eb9"]]),bt={Nenhum:"","👤 Usuário":"ph-user","🔒 Cadeado":"ph-lock","✉️ Email":"ph-envelope","📞 Telefone":"ph-phone","📅 Calendário":"ph-calendar","🕐 Relógio":"ph-clock","🔍 Busca":"ph-magnifying-glass","🏠 Casa":"ph-house","📍 Pin":"ph-map-pin","🛒 Carrinho":"ph-shopping-cart","💳 Cartão":"ph-credit-card","⚙️ Engrenagem":"ph-gear","🔔 Sino":"ph-bell","⭐ Estrela":"ph-star"},p=[{value:"1",label:"Opção 1",icon:"ph-user"},{value:"2",label:"Opção 2",icon:"ph-house"},{value:"3",label:"Opção 3",icon:"ph-gear"},{value:"4",label:"Opção 4 Desabilitada",icon:"ph-lock",disabled:!0},{value:"5",label:"Opção 5",icon:"ph-star"}],vt=[{value:"br",label:"Brasil",icon:"ph-flag"},{value:"us",label:"Estados Unidos",icon:"ph-flag"},{value:"uk",label:"Reino Unido",icon:"ph-flag"},{value:"fr",label:"França",icon:"ph-flag"},{value:"de",label:"Alemanha",icon:"ph-flag"},{value:"es",label:"Espanha",icon:"ph-flag"},{value:"it",label:"Itália",icon:"ph-flag"},{value:"jp",label:"Japão",icon:"ph-flag"},{value:"cn",label:"China",icon:"ph-flag"},{value:"in",label:"Índia",icon:"ph-flag"}],zt={title:"Scuba/Select",component:R,tags:["autodocs"],argTypes:{options:{control:"object",description:"Array de opções para o select"},modelValue:{control:"text",description:"Valor selecionado (v-model)"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do select"},label:{control:"text",description:"Label do campo"},placeholder:{control:"text",description:"Texto placeholder"},required:{control:"boolean",description:"Campo obrigatório"},hint:{control:"text",description:"Texto de ajuda"},error:{control:"text",description:"Mensagem de erro"},disabled:{control:"boolean",description:"Estado desabilitado"},iconLeft:{control:"select",options:bt,description:"Ícone esquerda"},fullWidth:{control:"boolean",description:"Largura total"},emptyMessage:{control:"text",description:"Mensagem quando sem opções"}}},r=n=>({components:{Select:R},setup(){const g=S(n.modelValue||null);return{args:n,modelValue:g}},template:'<Select v-bind="args" v-model="modelValue" />'}),b=r.bind({});b.args={options:p,label:"Selecione uma opção",placeholder:"Escolha...",size:"md",hint:"Escolha a melhor opção para você",iconLeft:"ph-gear"};b.parameters={docs:{description:{story:"Use os controles abaixo para testar diferentes combinações de propriedades."}}};const z=r.bind({});z.args={options:p,label:"Select Small",placeholder:"Selecione...",size:"sm",hint:"Tamanho pequeno"};const E=r.bind({});E.args={options:p,label:"Select Medium",placeholder:"Selecione...",size:"md",hint:"Tamanho médio (padrão)"};const w=r.bind({});w.args={options:p,label:"Select Large",placeholder:"Selecione...",size:"lg",hint:"Tamanho grande"};const O=r.bind({});O.args={options:p,label:"Com ícone",placeholder:"Selecione...",size:"md",iconLeft:"ph-gear"};const V=r.bind({});V.args={options:p,label:"Campo obrigatório",placeholder:"Selecione...",size:"md",required:!0,hint:"Este campo é obrigatório"};const _=r.bind({});_.args={options:p,label:"Com erro",placeholder:"Selecione...",size:"md",error:"Por favor, selecione uma opção válida"};const C=r.bind({});C.args={options:p,label:"Desabilitado",placeholder:"Selecione...",size:"md",disabled:!0,hint:"Este campo está desabilitado"};const k=r.bind({});k.args={options:[],label:"Sem opções",placeholder:"Selecione...",size:"md",emptyMessage:"Nenhuma opção disponível"};const L=r.bind({});L.args={options:p,label:"Largura total",placeholder:"Selecione...",size:"md",fullWidth:!0};const M=r.bind({});M.args={options:vt,label:"Selecione um país",placeholder:"Escolha o país...",size:"md",iconLeft:"ph-map-pin"};const T=r.bind({});T.args={options:[{value:"home",label:"Página Inicial",icon:"ph-house"},{value:"settings",label:"Configurações",icon:"ph-gear"},{value:"profile",label:"Perfil",icon:"ph-user"},{value:"notifications",label:"Notificações",icon:"ph-bell"},{value:"favorites",label:"Favoritos",icon:"ph-heart"}],label:"Menu de navegação",placeholder:"Ir para...",size:"md"};const W=()=>({components:{Select:R},template:`
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
  `}),B=()=>({template:`
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
  `});var J,G,Q;b.parameters={...b.parameters,docs:{...(J=b.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
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
})`,...(Q=(G=b.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Y,ee;z.parameters={...z.parameters,docs:{...(X=z.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
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
})`,...(ee=(Y=z.parameters)==null?void 0:Y.docs)==null?void 0:ee.source}}};var te,oe,ne;E.parameters={...E.parameters,docs:{...(te=E.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
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
})`,...(ne=(oe=E.parameters)==null?void 0:oe.docs)==null?void 0:ne.source}}};var le,ae,se;w.parameters={...w.parameters,docs:{...(le=w.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
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
})`,...(se=(ae=w.parameters)==null?void 0:ae.docs)==null?void 0:se.source}}};var de,re,ie;O.parameters={...O.parameters,docs:{...(de=O.parameters)==null?void 0:de.docs,source:{originalSource:`args => ({
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
})`,...(ie=(re=O.parameters)==null?void 0:re.docs)==null?void 0:ie.source}}};var ce,pe,ue;V.parameters={...V.parameters,docs:{...(ce=V.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
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
})`,...(ue=(pe=V.parameters)==null?void 0:pe.docs)==null?void 0:ue.source}}};var ge,me,he;_.parameters={..._.parameters,docs:{...(ge=_.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
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
})`,...(he=(me=_.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var xe,be,ve;C.parameters={...C.parameters,docs:{...(xe=C.parameters)==null?void 0:xe.docs,source:{originalSource:`args => ({
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
})`,...(ve=(be=C.parameters)==null?void 0:be.docs)==null?void 0:ve.source}}};var fe,ye,Se;k.parameters={...k.parameters,docs:{...(fe=k.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
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
})`,...(Se=(ye=k.parameters)==null?void 0:ye.docs)==null?void 0:Se.source}}};var ze,Ee,we;L.parameters={...L.parameters,docs:{...(ze=L.parameters)==null?void 0:ze.docs,source:{originalSource:`args => ({
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
})`,...(we=(Ee=L.parameters)==null?void 0:Ee.docs)==null?void 0:we.source}}};var Oe,Ve,_e;M.parameters={...M.parameters,docs:{...(Oe=M.parameters)==null?void 0:Oe.docs,source:{originalSource:`args => ({
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
})`,...(_e=(Ve=M.parameters)==null?void 0:Ve.docs)==null?void 0:_e.source}}};var Ce,ke,Le;T.parameters={...T.parameters,docs:{...(Ce=T.parameters)==null?void 0:Ce.docs,source:{originalSource:`args => ({
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
})`,...(Le=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Le.source}}};var Me,Te,De;W.parameters={...W.parameters,docs:{...(Me=W.parameters)==null?void 0:Me.docs,source:{originalSource:`() => ({
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
})`,...(De=(Te=W.parameters)==null?void 0:Te.docs)==null?void 0:De.source}}};var Ie,qe,Pe;B.parameters={...B.parameters,docs:{...(Ie=B.parameters)==null?void 0:Ie.docs,source:{originalSource:`() => ({
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
})`,...(Pe=(qe=B.parameters)==null?void 0:qe.docs)==null?void 0:Pe.source}}};const Et=["Playground","Small","Medium","Large","WithIcon","Required","WithError","Disabled","Empty","FullWidth","ManyOptions","WithOptionIcons","AllSizesAndStates","DesignTokens"];export{W as AllSizesAndStates,B as DesignTokens,C as Disabled,k as Empty,L as FullWidth,w as Large,M as ManyOptions,E as Medium,b as Playground,V as Required,z as Small,_ as WithError,O as WithIcon,T as WithOptionIcons,Et as __namedExportsOrder,zt as default};
