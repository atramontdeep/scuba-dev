import{q as B,c as o,w as N,a as i,b as p,e as S,p as n,h as Qe,t as F,s as U,z as $e,A as Xe,o as l}from"./vue.esm-bundler-cjlVRrb_.js";/* empty css                                                              */import{_ as Ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Je=["for"],Ke={key:0,class:n("scuba-input__required")},Ye={key:1,class:n("scuba-input__optional")},Ze=["aria-label"],et=["id","placeholder","disabled","readonly","rows","maxlength"],tt=["id","type","placeholder","disabled","readonly","maxlength","min","max","step"],nt=["aria-label"],at={__name:"Input",props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text",validator:e=>["text","password","email","number","tel","url","search","date","time","datetime-local","textarea"].includes(e)},label:{type:String,default:""},placeholder:{type:String,default:"Placeholder"},required:{type:Boolean,default:!1},optional:{type:Boolean,default:!1},helpText:{type:String,default:""},hint:{type:String,default:"Hint"},error:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},iconLeft:{type:String,default:""},iconRight:{type:String,default:""},fullWidth:{type:Boolean,default:!1},id:{type:String,default:null},rows:{type:Number,default:4},maxlength:{type:Number,default:null},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:null}},emits:["update:modelValue","blur","focus","input","help-click"],setup(e,{emit:ze}){const a=e,L=ze,d=B(a.modelValue),M=B(!1),u=B(!1),R=o(()=>a.id?a.id:"scuba-input-"+Math.random().toString(36).substr(2,9)),Be=o(()=>a.type==="password"&&u.value?"text":a.type),z=o(()=>a.type==="password"),Ve=o(()=>"Ajuda para "+a.label),Ae=o(()=>u.value?"Ocultar senha":"Mostrar senha"),He=o(()=>u.value?"ph ph-eye-slash":"ph ph-eye"),Ne=o(()=>{const t=["scuba-input-wrapper"];return a.fullWidth&&t.push("scuba-input-wrapper--full-width"),t}),Fe=o(()=>{const t=["scuba-input__label"];return a.disabled&&t.push("scuba-input__label--disabled"),t}),Ue=o(()=>"scuba-input__icon scuba-input__icon--left"),qe=o(()=>"scuba-input__icon scuba-input__icon--right"),Oe=o(()=>"scuba-input__field scuba-input__textarea"),_e=o(()=>{const t=["scuba-input__container"];return a.disabled&&t.push("scuba-input__container--disabled"),a.error&&t.push("scuba-input__container--error"),M.value&&t.push("scuba-input__container--focused"),a.iconLeft&&t.push("scuba-input__container--with-icon-left"),(a.iconRight||z.value)&&t.push("scuba-input__container--with-icon-right"),t}),We=o(()=>{const t=["scuba-input__hint"];return a.error&&t.push("scuba-input__hint--error"),t});N(()=>a.modelValue,t=>{d.value=t}),N(d,t=>{L("update:modelValue",t)});const V=t=>{M.value=!1,L("blur",t)},A=t=>{M.value=!0,L("focus",t)},H=t=>{L("input",t)},je=()=>{u.value=!u.value};return(t,s)=>(l(),i("div",{class:n(Ne.value)},[e.label?(l(),i("label",{key:0,for:R.value,class:n(Fe.value)},[Qe(F(e.label)+" ",1),e.required?(l(),i("span",Ke,"*")):p("",!0),e.optional?(l(),i("span",Ye,"opcional")):p("",!0),e.helpText?(l(),i("button",{key:2,type:"button",class:n("scuba-input__help-button"),"aria-label":Ve.value,onClick:s[0]||(s[0]=k=>t.$emit("help-click"))},[...s[3]||(s[3]=[S("i",{class:n("ph ph-question")},null,-1)])],8,Ze)):p("",!0)],10,Je)):p("",!0),S("div",{class:n(_e.value)},[e.iconLeft?(l(),i("span",{key:0,class:n(Ue.value)},[S("i",{class:n("ph "+e.iconLeft)},null,2)],2)):p("",!0),e.type==="textarea"?U((l(),i("textarea",{key:1,id:R.value,"onUpdate:modelValue":s[1]||(s[1]=k=>d.value=k),placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,rows:e.rows,maxlength:e.maxlength,class:n(Oe.value),onBlur:V,onFocus:A,onInput:H},null,42,et)),[[$e,d.value]]):U((l(),i("input",{key:2,id:R.value,"onUpdate:modelValue":s[2]||(s[2]=k=>d.value=k),type:Be.value,placeholder:e.placeholder,disabled:e.disabled,readonly:e.readonly,maxlength:e.maxlength,min:e.min,max:e.max,step:e.step,class:n("scuba-input__field"),onBlur:V,onFocus:A,onInput:H},null,40,tt)),[[Xe,d.value]]),e.iconRight||z.value?(l(),i("span",{key:3,class:n(qe.value)},[z.value?(l(),i("button",{key:0,type:"button",class:n("scuba-input__toggle-button"),onClick:je,"aria-label":Ae.value},[S("i",{class:n(He.value)},null,2)],8,nt)):e.iconRight?(l(),i("i",{key:1,class:n("ph "+e.iconRight)},null,2)):p("",!0)],2)):p("",!0)],2),e.hint||e.error?(l(),i("div",{key:1,class:n(We.value)},F(e.error||e.hint),3)):p("",!0)],2))}},C=Ge(at,[["__scopeId","data-v-2b4ec59c"]]),q={Nenhum:"","👤 Usuário":"ph-user","🔒 Cadeado":"ph-lock","✉️ Email":"ph-envelope","📞 Telefone":"ph-phone","📅 Calendário":"ph-calendar","🕐 Relógio":"ph-clock","🔍 Busca":"ph-magnifying-glass","👁️ Olho":"ph-eye","👁️‍🗨️ Olho Fechado":"ph-eye-slash","❤️ Coração":"ph-heart","⭐ Estrela":"ph-star","🔔 Sino":"ph-bell","⚙️ Engrenagem":"ph-gear","🏠 Casa":"ph-house","📍 Pin":"ph-map-pin","🛒 Carrinho":"ph-shopping-cart","💳 Cartão":"ph-credit-card","💰 Dólar":"ph-currency-dollar","🔗 Link":"ph-link","📄 Arquivo":"ph-file","📁 Pasta":"ph-folder","🖼️ Imagem":"ph-image","🎥 Vídeo":"ph-video","🎵 Música":"ph-music-note","✓ PhCheck":"ph-check","✕ PhX":"ph-x","+ PhPlus":"ph-plus","− Minus":"ph-minus","→ Seta Direita":"ph-arrow-right","← Seta Esquerda":"ph-arrow-left","↑ Seta Cima":"ph-arrow-up","↓ Seta Baixo":"ph-arrow-down","ℹ️ PhInfo":"ph-info","⚠️ Aviso":"ph-warning","❓ Pergunta":"ph-question","@ Arroba":"ph-at","# Hash":"ph-hash","Aa Texto":"ph-text-aa","📎 Anexo":"ph-paperclip","⬇️ PhDownload":"ph-download","⬆️ PhUpload":"ph-upload","🗑️ Lixeira":"ph-trash","✏️ Lápis":"ph-pencil","↗️ Compartilhar":"ph-share"},rt={title:"Scuba/Input",component:C,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","password","email","number","tel","url","search","date","time","datetime-local","textarea"],description:"Tipo do input"},label:{control:"text",description:"Label do campo"},placeholder:{control:"text",description:"Placeholder"},hint:{control:"text",description:"Texto de ajuda"},error:{control:"text",description:"Mensagem de erro"},required:{control:"boolean",description:"Campo obrigatório"},optional:{control:"boolean",description:'Mostrar "opcional"'},disabled:{control:"boolean",description:"Desabilitado"},readonly:{control:"boolean",description:"Somente leitura"},helpText:{control:"text",description:"Texto de ajuda (botão ?)"},iconLeft:{control:"select",options:q,description:"🎨 Ícone esquerda"},iconRight:{control:"select",options:q,description:"🎨 Ícone direita"},fullWidth:{control:"boolean",description:"Largura total"}}},r=e=>({components:{Input:C},setup(){return{args:e}},template:'<Input v-bind="args" />'}),c=r.bind({});c.args={type:"text",label:"Label",placeholder:"Placeholder",hint:"Hint",iconLeft:"ph-lock",iconRight:"ph-eye"};c.parameters={docs:{description:{story:"🎨 Use os controles abaixo para testar diferentes combinações de ícones, estados e propriedades. Veja todos os ícones em [phosphoricons.com](https://phosphoricons.com/)"}}};const h=r.bind({});h.args={type:"text",label:"Nome",placeholder:"Digite seu nome",hint:"Campo obrigatório",iconLeft:"ph-user"};const m=r.bind({});m.args={type:"password",label:"Senha",placeholder:"Digite sua senha",hint:"Mínimo 8 caracteres",iconLeft:"ph-lock"};const g=r.bind({});g.args={type:"email",label:"Email",placeholder:"seu@email.com",hint:"Digite um email válido",iconLeft:"ph-envelope"};const x=r.bind({});x.args={type:"tel",label:"Telefone",placeholder:"(00) 00000-0000",hint:"Digite seu telefone",iconLeft:"ph-phone"};const b=r.bind({});b.args={type:"search",label:"Buscar",placeholder:"Buscar...",hint:"Digite para buscar",iconLeft:"ph-magnifying-glass"};const y=r.bind({});y.args={type:"number",label:"Quantidade",placeholder:"0",hint:"Digite a quantidade",iconLeft:"ph-hash",min:0,max:100};const f=r.bind({});f.args={type:"date",label:"Data",hint:"Selecione uma data",iconLeft:"ph-calendar"};const v=r.bind({});v.args={type:"time",label:"Horário",hint:"Selecione um horário",iconLeft:"ph-clock"};const I=r.bind({});I.args={type:"textarea",label:"Mensagem",placeholder:"Digite sua mensagem",hint:"Máximo 500 caracteres",rows:4,maxlength:500};const D=r.bind({});D.args={type:"text",label:"Label",placeholder:"Placeholder",error:"Este campo é obrigatório",iconLeft:"ph-lock",iconRight:"ph-eye"};const w=r.bind({});w.args={type:"text",label:"Label",placeholder:"Placeholder",hint:"Hint",disabled:!0,iconLeft:"ph-lock"};const T=()=>({components:{Input:C},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Input States</h2>
      
      <!-- Header -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 24px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">ERROR</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
      </div>

      <!-- Text Input -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Text Input</div>
        <div>
          <Input 
            type="text"
            label="Label"
            placeholder="Placeholder"
            hint="Hint"
            iconLeft="ph-lock"
            iconRight="ph-eye"
          />
        </div>
        <div>
          <Input 
            type="text"
            label="Label"
            placeholder="Placeholder"
            error="Este campo é obrigatório"
            iconLeft="ph-lock"
            iconRight="ph-eye"
          />
        </div>
        <div>
          <Input 
            type="text"
            label="Label"
            placeholder="Placeholder"
            hint="Hint"
            disabled
            iconLeft="ph-lock"
          />
        </div>
      </div>

      <!-- Password -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Password</div>
        <div>
          <Input 
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            hint="Mínimo 8 caracteres"
            iconLeft="ph-lock"
          />
        </div>
        <div>
          <Input 
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            error="Senha muito curta"
            iconLeft="ph-lock"
          />
        </div>
        <div>
          <Input 
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            hint="Mínimo 8 caracteres"
            disabled
            iconLeft="ph-lock"
          />
        </div>
      </div>

      <!-- Email -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Email</div>
        <div>
          <Input 
            type="email"
            label="Email"
            placeholder="seu@email.com"
            hint="Digite um email válido"
            iconLeft="ph-envelope"
          />
        </div>
        <div>
          <Input 
            type="email"
            label="Email"
            placeholder="seu@email.com"
            error="Email inválido"
            iconLeft="ph-envelope"
          />
        </div>
        <div>
          <Input 
            type="email"
            label="Email"
            placeholder="seu@email.com"
            hint="Digite um email válido"
            disabled
            iconLeft="ph-envelope"
          />
        </div>
      </div>

      <!-- Textarea -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Textarea</div>
        <div>
          <Input 
            type="textarea"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            hint="Máximo 500 caracteres"
            :rows="4"
          />
        </div>
        <div>
          <Input 
            type="textarea"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            error="Mensagem muito longa"
            :rows="4"
          />
        </div>
        <div>
          <Input 
            type="textarea"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            hint="Máximo 500 caracteres"
            disabled
            :rows="4"
          />
        </div>
      </div>
    </div>
  `}),E=()=>({components:{Input:C},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Input Types</h2>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <!-- Text -->
        <Input 
          type="text"
          label="Text"
          placeholder="Digite texto"
          hint="Campo de texto padrão"
          iconLeft="ph-text-aa"
        />

        <!-- Password -->
        <Input 
          type="password"
          label="Password"
          placeholder="Digite sua senha"
          hint="Senha com toggle"
          iconLeft="ph-lock"
        />

        <!-- Email -->
        <Input 
          type="email"
          label="Email"
          placeholder="seu@email.com"
          hint="Digite seu email"
          iconLeft="ph-envelope"
        />

        <!-- Phone -->
        <Input 
          type="tel"
          label="Telefone"
          placeholder="(00) 00000-0000"
          hint="Digite seu telefone"
          iconLeft="ph-phone"
        />

        <!-- Search -->
        <Input 
          type="search"
          label="Buscar"
          placeholder="Buscar..."
          hint="Campo de busca"
          iconLeft="ph-magnifying-glass"
        />

        <!-- URL -->
        <Input 
          type="url"
          label="Website"
          placeholder="https://exemplo.com"
          hint="Digite uma URL"
          iconLeft="ph-link"
        />

        <!-- Number -->
        <Input 
          type="number"
          label="Quantidade"
          placeholder="0"
          hint="Digite um número"
          iconLeft="ph-hash"
          :min="0"
          :max="100"
        />

        <!-- Date -->
        <Input 
          type="date"
          label="Data"
          hint="Selecione uma data"
          iconLeft="ph-calendar"
        />

        <!-- Time -->
        <Input 
          type="time"
          label="Horário"
          hint="Selecione um horário"
          iconLeft="ph-clock"
        />

        <!-- Datetime Local -->
        <Input 
          type="datetime-local"
          label="Data e Hora"
          hint="Selecione data e hora"
          iconLeft="ph-calendar"
        />
      </div>

      <!-- Textarea Full Width -->
      <div style="margin-top: 32px;">
        <Input 
          type="textarea"
          label="Mensagem"
          placeholder="Digite sua mensagem aqui..."
          hint="Campo de texto longo"
          :rows="6"
          :full-width="true"
        />
      </div>
    </div>
  `}),P=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens & Icons</h2>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Phosphor Icons</h3>
          <div style="padding: 20px; background: #f9fafb; border-radius: 8px; margin-bottom: 16px;">
            <p style="font-size: 14px; color: #6b7280; margin-bottom: 12px;">
              Todos os ícones usam a biblioteca <strong>Phosphor Icons</strong>.
            </p>
            <p style="font-size: 14px; color: #6b7280; margin-bottom: 12px;">
              Para usar, adicione <code style="background: white; padding: 2px 6px; border-radius: 4px;">iconLeft="ph-nome"</code>
            </p>
            <a 
              href="https://phosphoricons.com/" 
              target="_blank" 
              style="
                display: inline-block;
                padding: 8px 16px;
                background: #0086cd;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                font-size: 14px;
                font-weight: 600;
              "
            >
              Ver todos os ícones →
            </a>
          </div>

          <h4 style="font-size: 16px; font-weight: 600; margin: 20px 0 12px;">Ícones Mais Usados</h4>
          <table style="width: 100%; font-size: 13px;">
            <tr><td style="padding: 6px 0;"><code>ph-user</code></td><td>👤 Usuário</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-lock</code></td><td>🔒 Cadeado</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-envelope</code></td><td>✉️ Email</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-phone</code></td><td>📞 Telefone</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-calendar</code></td><td>📅 Calendário</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-clock</code></td><td>🕐 Relógio</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-magnifying-glass</code></td><td>🔍 Busca</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-eye</code></td><td>👁️ Olho</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Design Tokens</h3>
          <table style="width: 100%; font-size: 13px;">
            <tr style="border-bottom: 1px solid #e5e7eb;"><th style="text-align: left; padding: 8px 0;">Token</th><th style="text-align: right; padding: 8px 0;">Valor</th></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td><td style="text-align: right;">#eeeeee</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td><td style="text-align: right;">#0086cd</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
          </table>
        </div>
      </div>
    </div>
  `});var O,_,W;c.parameters={...c.parameters,docs:{...(O=c.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(W=(_=c.parameters)==null?void 0:_.docs)==null?void 0:W.source}}};var j,Q,$;h.parameters={...h.parameters,docs:{...(j=h.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...($=(Q=h.parameters)==null?void 0:Q.docs)==null?void 0:$.source}}};var X,G,J;m.parameters={...m.parameters,docs:{...(X=m.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(J=(G=m.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var K,Y,Z;g.parameters={...g.parameters,docs:{...(K=g.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(Z=(Y=g.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,te,ne;x.parameters={...x.parameters,docs:{...(ee=x.parameters)==null?void 0:ee.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(ne=(te=x.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var ae,oe,ie;b.parameters={...b.parameters,docs:{...(ae=b.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(ie=(oe=b.parameters)==null?void 0:oe.docs)==null?void 0:ie.source}}};var le,re,se;y.parameters={...y.parameters,docs:{...(le=y.parameters)==null?void 0:le.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(se=(re=y.parameters)==null?void 0:re.docs)==null?void 0:se.source}}};var pe,de,ce;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(ce=(de=f.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var ue,he,me;v.parameters={...v.parameters,docs:{...(ue=v.parameters)==null?void 0:ue.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(me=(he=v.parameters)==null?void 0:he.docs)==null?void 0:me.source}}};var ge,xe,be;I.parameters={...I.parameters,docs:{...(ge=I.parameters)==null?void 0:ge.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(be=(xe=I.parameters)==null?void 0:xe.docs)==null?void 0:be.source}}};var ye,fe,ve;D.parameters={...D.parameters,docs:{...(ye=D.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(ve=(fe=D.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};var Ie,De,we;w.parameters={...w.parameters,docs:{...(Ie=w.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(we=(De=w.parameters)==null?void 0:De.docs)==null?void 0:we.source}}};var Le,ke,Se;T.parameters={...T.parameters,docs:{...(Le=T.parameters)==null?void 0:Le.docs,source:{originalSource:`() => ({
  components: {
    Input
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Input States</h2>
      
      <!-- Header -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 24px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">ERROR</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
      </div>

      <!-- Text Input -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Text Input</div>
        <div>
          <Input 
            type="text"
            label="Label"
            placeholder="Placeholder"
            hint="Hint"
            iconLeft="ph-lock"
            iconRight="ph-eye"
          />
        </div>
        <div>
          <Input 
            type="text"
            label="Label"
            placeholder="Placeholder"
            error="Este campo é obrigatório"
            iconLeft="ph-lock"
            iconRight="ph-eye"
          />
        </div>
        <div>
          <Input 
            type="text"
            label="Label"
            placeholder="Placeholder"
            hint="Hint"
            disabled
            iconLeft="ph-lock"
          />
        </div>
      </div>

      <!-- Password -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Password</div>
        <div>
          <Input 
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            hint="Mínimo 8 caracteres"
            iconLeft="ph-lock"
          />
        </div>
        <div>
          <Input 
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            error="Senha muito curta"
            iconLeft="ph-lock"
          />
        </div>
        <div>
          <Input 
            type="password"
            label="Senha"
            placeholder="Digite sua senha"
            hint="Mínimo 8 caracteres"
            disabled
            iconLeft="ph-lock"
          />
        </div>
      </div>

      <!-- Email -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Email</div>
        <div>
          <Input 
            type="email"
            label="Email"
            placeholder="seu@email.com"
            hint="Digite um email válido"
            iconLeft="ph-envelope"
          />
        </div>
        <div>
          <Input 
            type="email"
            label="Email"
            placeholder="seu@email.com"
            error="Email inválido"
            iconLeft="ph-envelope"
          />
        </div>
        <div>
          <Input 
            type="email"
            label="Email"
            placeholder="seu@email.com"
            hint="Digite um email válido"
            disabled
            iconLeft="ph-envelope"
          />
        </div>
      </div>

      <!-- Textarea -->
      <div style="display: grid; grid-template-columns: 200px repeat(3, 1fr); gap: 32px; margin-bottom: 32px; align-items: start;">
        <div style="padding-top: 32px; font-weight: 600;">Textarea</div>
        <div>
          <Input 
            type="textarea"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            hint="Máximo 500 caracteres"
            :rows="4"
          />
        </div>
        <div>
          <Input 
            type="textarea"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            error="Mensagem muito longa"
            :rows="4"
          />
        </div>
        <div>
          <Input 
            type="textarea"
            label="Mensagem"
            placeholder="Digite sua mensagem"
            hint="Máximo 500 caracteres"
            disabled
            :rows="4"
          />
        </div>
      </div>
    </div>
  \`
})`,...(Se=(ke=T.parameters)==null?void 0:ke.docs)==null?void 0:Se.source}}};var Te,Ee,Pe;E.parameters={...E.parameters,docs:{...(Te=E.parameters)==null?void 0:Te.docs,source:{originalSource:`() => ({
  components: {
    Input
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Input Types</h2>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <!-- Text -->
        <Input 
          type="text"
          label="Text"
          placeholder="Digite texto"
          hint="Campo de texto padrão"
          iconLeft="ph-text-aa"
        />

        <!-- Password -->
        <Input 
          type="password"
          label="Password"
          placeholder="Digite sua senha"
          hint="Senha com toggle"
          iconLeft="ph-lock"
        />

        <!-- Email -->
        <Input 
          type="email"
          label="Email"
          placeholder="seu@email.com"
          hint="Digite seu email"
          iconLeft="ph-envelope"
        />

        <!-- Phone -->
        <Input 
          type="tel"
          label="Telefone"
          placeholder="(00) 00000-0000"
          hint="Digite seu telefone"
          iconLeft="ph-phone"
        />

        <!-- Search -->
        <Input 
          type="search"
          label="Buscar"
          placeholder="Buscar..."
          hint="Campo de busca"
          iconLeft="ph-magnifying-glass"
        />

        <!-- URL -->
        <Input 
          type="url"
          label="Website"
          placeholder="https://exemplo.com"
          hint="Digite uma URL"
          iconLeft="ph-link"
        />

        <!-- Number -->
        <Input 
          type="number"
          label="Quantidade"
          placeholder="0"
          hint="Digite um número"
          iconLeft="ph-hash"
          :min="0"
          :max="100"
        />

        <!-- Date -->
        <Input 
          type="date"
          label="Data"
          hint="Selecione uma data"
          iconLeft="ph-calendar"
        />

        <!-- Time -->
        <Input 
          type="time"
          label="Horário"
          hint="Selecione um horário"
          iconLeft="ph-clock"
        />

        <!-- Datetime Local -->
        <Input 
          type="datetime-local"
          label="Data e Hora"
          hint="Selecione data e hora"
          iconLeft="ph-calendar"
        />
      </div>

      <!-- Textarea Full Width -->
      <div style="margin-top: 32px;">
        <Input 
          type="textarea"
          label="Mensagem"
          placeholder="Digite sua mensagem aqui..."
          hint="Campo de texto longo"
          :rows="6"
          :full-width="true"
        />
      </div>
    </div>
  \`
})`,...(Pe=(Ee=E.parameters)==null?void 0:Ee.docs)==null?void 0:Pe.source}}};var Ce,Me,Re;P.parameters={...P.parameters,docs:{...(Ce=P.parameters)==null?void 0:Ce.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens & Icons</h2>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Phosphor Icons</h3>
          <div style="padding: 20px; background: #f9fafb; border-radius: 8px; margin-bottom: 16px;">
            <p style="font-size: 14px; color: #6b7280; margin-bottom: 12px;">
              Todos os ícones usam a biblioteca <strong>Phosphor Icons</strong>.
            </p>
            <p style="font-size: 14px; color: #6b7280; margin-bottom: 12px;">
              Para usar, adicione <code style="background: white; padding: 2px 6px; border-radius: 4px;">iconLeft="ph-nome"</code>
            </p>
            <a 
              href="https://phosphoricons.com/" 
              target="_blank" 
              style="
                display: inline-block;
                padding: 8px 16px;
                background: #0086cd;
                color: white;
                text-decoration: none;
                border-radius: 4px;
                font-size: 14px;
                font-weight: 600;
              "
            >
              Ver todos os ícones →
            </a>
          </div>

          <h4 style="font-size: 16px; font-weight: 600; margin: 20px 0 12px;">Ícones Mais Usados</h4>
          <table style="width: 100%; font-size: 13px;">
            <tr><td style="padding: 6px 0;"><code>ph-user</code></td><td>👤 Usuário</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-lock</code></td><td>🔒 Cadeado</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-envelope</code></td><td>✉️ Email</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-phone</code></td><td>📞 Telefone</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-calendar</code></td><td>📅 Calendário</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-clock</code></td><td>🕐 Relógio</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-magnifying-glass</code></td><td>🔍 Busca</td></tr>
            <tr><td style="padding: 6px 0;"><code>ph-eye</code></td><td>👁️ Olho</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Design Tokens</h3>
          <table style="width: 100%; font-size: 13px;">
            <tr style="border-bottom: 1px solid #e5e7eb;"><th style="text-align: left; padding: 8px 0;">Token</th><th style="text-align: right; padding: 8px 0;">Valor</th></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td><td style="text-align: right;">#eeeeee</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td><td style="text-align: right;">#0086cd</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
          </table>
        </div>
      </div>
    </div>
  \`
})`,...(Re=(Me=P.parameters)==null?void 0:Me.docs)==null?void 0:Re.source}}};const st=["Playground","Text","Password","Email","PhoneInput","Search","Number","Date","Time","Textarea","WithError","Disabled","AllStates","AllTypes","DesignTokens"];export{T as AllStates,E as AllTypes,f as Date,P as DesignTokens,w as Disabled,g as Email,y as Number,m as Password,x as PhoneInput,c as Playground,b as Search,h as Text,I as Textarea,v as Time,D as WithError,st as __namedExportsOrder,rt as default};
