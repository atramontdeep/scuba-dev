import{v as c,c as d,w as K,B as vt,C as ft,a as o,b as u,e as l,u as r,h as Dt,t as b,x as Z,H as kt,I as It,F,z as A,J as ee,o as s}from"./vue.esm-bundler-BXouRCJi.js";/* empty css                                                              */import{_ as wt}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Lt=["for"],St={key:0,class:r("scuba-input__required")},Tt={key:1,class:r("scuba-input__optional")},_t=["aria-label"],Et={key:0,class:r("scuba-input__tooltip")},Pt=["id","placeholder","disabled","readonly","rows","maxlength"],Ct=["id","type","placeholder","disabled","readonly","maxlength","min","max","step"],Mt=["aria-label"],Rt={key:2,class:"scuba-input__picker scuba-input__date-picker"},zt={class:"scuba-input__date-picker-header"},Bt={class:"scuba-input__date-picker-title"},Ft={class:"scuba-input__date-picker-weekdays"},At={class:"scuba-input__date-picker-days"},Ht=["onClick","disabled"],Nt={key:3,class:"scuba-input__picker scuba-input__time-picker"},Vt={class:"scuba-input__time-picker-columns"},$t={class:"scuba-input__time-picker-column"},Ut={class:"scuba-input__time-picker-list"},Ot=["onClick"],qt={class:"scuba-input__time-picker-column"},Wt={class:"scuba-input__time-picker-list"},Qt=["onClick"],jt={__name:"Input",props:{modelValue:{type:[String,Number],default:""},type:{type:String,default:"text",validator:n=>["text","password","email","number","tel","url","search","date","time","datetime-local","textarea"].includes(n)},label:{type:String,default:""},placeholder:{type:String,default:"Placeholder"},required:{type:Boolean,default:!1},optional:{type:Boolean,default:!1},helpText:{type:String,default:""},hint:{type:String,default:"Hint"},error:{type:String,default:""},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},iconLeft:{type:String,default:""},iconRight:{type:String,default:""},fullWidth:{type:Boolean,default:!1},id:{type:String,default:null},rows:{type:Number,default:4},maxlength:{type:Number,default:null},min:{type:Number,default:null},max:{type:Number,default:null},step:{type:Number,default:null}},emits:["update:modelValue","blur","focus","input","help-click"],setup(n,{emit:je}){const i=n,B=je,U=c(null),g=c(i.modelValue),O=c(!1),k=c(!1),I=c(!1),y=c(!1),x=c(!1),Je=c(null),q=c(null),h=c(new Date().getMonth()),v=c(new Date().getFullYear()),W=d(()=>i.id?i.id:"scuba-input-"+Math.random().toString(36).substr(2,9)),Ye=d(()=>i.type==="password"&&k.value?"text":i.type),Q=d(()=>i.type==="password"),Xe=d(()=>"Ajuda para "+i.label),Ge=d(()=>k.value?"Ocultar senha":"Mostrar senha"),Ke=d(()=>k.value?"ph ph-eye-slash":"ph ph-eye"),Ze=d(()=>{const t=["scuba-input-wrapper"];return i.fullWidth&&t.push("scuba-input-wrapper--full-width"),t}),et=d(()=>{const t=["scuba-input__label"];return i.disabled&&t.push("scuba-input__label--disabled"),t}),tt=d(()=>"scuba-input__icon scuba-input__icon--left"),nt=d(()=>"scuba-input__icon scuba-input__icon--right"),at=d(()=>"scuba-input__field scuba-input__textarea"),it=d(()=>{const t=["scuba-input__container"];return i.disabled&&t.push("scuba-input__container--disabled"),i.error&&t.push("scuba-input__container--error"),O.value&&t.push("scuba-input__container--focused"),i.iconLeft&&t.push("scuba-input__container--with-icon-left"),(i.iconRight||Q.value)&&t.push("scuba-input__container--with-icon-right"),t}),ot=d(()=>{const t=["scuba-input__hint"];return i.error&&t.push("scuba-input__hint--error"),t});K(()=>i.modelValue,t=>{g.value=t}),K(g,t=>{B("update:modelValue",t)});const j=t=>{O.value=!1,B("blur",t)},J=t=>{O.value=!0,B("focus",t)},Y=t=>{if(i.type==="tel"){let e=t.target.value.replace(/\D/g,"");e.length>11&&(e=e.slice(0,11)),e.length<=10?e=e.replace(/^(\d{2})(\d{4})(\d{0,4}).*/,"($1) $2-$3"):e=e.replace(/^(\d{2})(\d{5})(\d{0,4}).*/,"($1) $2-$3"),e=e.replace(/-$/,""),g.value=e,t.target.value=e}B("input",t)},st=()=>{k.value=!k.value},lt=["Janeiro","Fevereiro","Março","Abril","Maio","Junho","Julho","Agosto","Setembro","Outubro","Novembro","Dezembro"],rt=["Dom","Seg","Ter","Qua","Qui","Sex","Sáb"],dt=(t,e)=>new Date(e,t+1,0).getDate(),pt=(t,e)=>new Date(e,t,1).getDay(),ct=d(()=>{const t=dt(h.value,v.value),e=pt(h.value,v.value),a=[];for(let m=0;m<e;m++)a.push(null);for(let m=1;m<=t;m++)a.push(m);return a}),ut=()=>{i.type==="date"&&!i.disabled&&!i.readonly&&(y.value=!y.value,x.value=!1)},ht=()=>{i.type==="time"&&!i.disabled&&!i.readonly&&(x.value=!x.value,y.value=!1)},mt=t=>{if(!t)return;const e=new Date(v.value,h.value,t),a=e.toISOString().split("T")[0];g.value=a,Je.value=e,y.value=!1},gt=()=>{h.value===0?(h.value=11,v.value--):h.value--},bt=()=>{h.value===11?(h.value=0,v.value++):h.value++},X=(t,e)=>{const a=`${String(t).padStart(2,"0")}:${String(e).padStart(2,"0")}`;g.value=a,q.value={hour:t,minute:e},x.value=!1},yt=Array.from({length:24},(t,e)=>e),xt=Array.from({length:60},(t,e)=>e),G=t=>{U.value&&!U.value.contains(t.target)&&(y.value=!1,x.value=!1)};return vt(()=>{document.addEventListener("click",G)}),ft(()=>{document.removeEventListener("click",G)}),(t,e)=>(s(),o("div",{class:r(Ze.value),ref_key:"inputWrapperRef",ref:U},[n.label?(s(),o("label",{key:0,for:W.value,class:r(et.value)},[Dt(b(n.label)+" ",1),n.required?(s(),o("span",St,"*")):u("",!0),n.optional?(s(),o("span",Tt,"opcional")):u("",!0),n.helpText?(s(),o("button",{key:2,type:"button",class:r("scuba-input__help-button"),"aria-label":Xe.value,onMouseenter:e[0]||(e[0]=a=>I.value=!0),onMouseleave:e[1]||(e[1]=a=>I.value=!1),onFocus:e[2]||(e[2]=a=>I.value=!0),onBlur:e[3]||(e[3]=a=>I.value=!1)},[e[7]||(e[7]=l("i",{class:r("ph ph-question")},null,-1)),I.value?(s(),o("span",Et,b(n.helpText),1)):u("",!0)],40,_t)):u("",!0)],10,Lt)):u("",!0),l("div",{class:r(it.value)},[n.iconLeft?(s(),o("span",{key:0,class:r(tt.value)},[l("i",{class:r("ph "+n.iconLeft)},null,2)],2)):u("",!0),n.type==="textarea"?Z((s(),o("textarea",{key:1,id:W.value,"onUpdate:modelValue":e[4]||(e[4]=a=>g.value=a),placeholder:n.placeholder,disabled:n.disabled,readonly:n.readonly,rows:n.rows,maxlength:n.maxlength,class:r(at.value),onBlur:j,onFocus:J,onInput:Y},null,42,Pt)),[[kt,g.value]]):Z((s(),o("input",{key:2,id:W.value,"onUpdate:modelValue":e[5]||(e[5]=a=>g.value=a),type:Ye.value,placeholder:n.placeholder,disabled:n.disabled,readonly:n.readonly,maxlength:n.maxlength,min:n.min,max:n.max,step:n.step,class:r("scuba-input__field"),onBlur:j,onFocus:J,onInput:Y,onClick:e[6]||(e[6]=a=>n.type==="date"?ut():n.type==="time"?ht():null)},null,40,Ct)),[[It,g.value]]),n.iconRight||Q.value?(s(),o("span",{key:3,class:r(nt.value)},[Q.value?(s(),o("button",{key:0,type:"button",class:r("scuba-input__toggle-button"),onClick:st,"aria-label":Ge.value},[l("i",{class:r(Ke.value)},null,2)],8,Mt)):n.iconRight?(s(),o("i",{key:1,class:r("ph "+n.iconRight)},null,2)):u("",!0)],2)):u("",!0)],2),n.hint||n.error?(s(),o("div",{key:1,class:r(ot.value)},b(n.error||n.hint),3)):u("",!0),y.value&&n.type==="date"?(s(),o("div",Rt,[l("div",zt,[l("button",{type:"button",onClick:gt,class:"scuba-input__date-picker-nav"},[...e[8]||(e[8]=[l("i",{class:"ph ph-caret-left"},null,-1)])]),l("span",Bt,b(lt[h.value])+" "+b(v.value),1),l("button",{type:"button",onClick:bt,class:"scuba-input__date-picker-nav"},[...e[9]||(e[9]=[l("i",{class:"ph ph-caret-right"},null,-1)])])]),l("div",Ft,[(s(),o(F,null,A(rt,a=>l("div",{key:a,class:"scuba-input__date-picker-weekday"},b(a),1)),64))]),l("div",At,[(s(!0),o(F,null,A(ct.value,(a,m)=>(s(),o("button",{key:m,type:"button",class:r(["scuba-input__date-picker-day",{"scuba-input__date-picker-day--empty":!a}]),onClick:f=>mt(a),disabled:!a},b(a||""),11,Ht))),128))])])):u("",!0),x.value&&n.type==="time"?(s(),o("div",Nt,[l("div",Vt,[l("div",$t,[e[10]||(e[10]=l("div",{class:"scuba-input__time-picker-header"},"Hora",-1)),l("div",Ut,[(s(!0),o(F,null,A(ee(yt),a=>(s(),o("button",{key:a,type:"button",class:"scuba-input__time-picker-item",onClick:m=>{var f;return X(a,((f=q.value)==null?void 0:f.minute)||0)}},b(String(a).padStart(2,"0")),9,Ot))),128))])]),l("div",qt,[e[11]||(e[11]=l("div",{class:"scuba-input__time-picker-header"},"Minuto",-1)),l("div",Wt,[(s(!0),o(F,null,A(ee(xt),a=>(s(),o("button",{key:a,type:"button",class:"scuba-input__time-picker-item",onClick:m=>{var f;return X(((f=q.value)==null?void 0:f.hour)||0,a)}},b(String(a).padStart(2,"0")),9,Qt))),128))])])])])):u("",!0)],2))}},$=wt(jt,[["__scopeId","data-v-38c34e48"]]),te={Nenhum:"","👤 Usuário":"ph-user","🔒 Cadeado":"ph-lock","✉️ Email":"ph-envelope","📞 Telefone":"ph-phone","📅 Calendário":"ph-calendar","🕐 Relógio":"ph-clock","🔍 Busca":"ph-magnifying-glass","👁️ Olho":"ph-eye","👁️‍🗨️ Olho Fechado":"ph-eye-slash","❤️ Coração":"ph-heart","⭐ Estrela":"ph-star","🔔 Sino":"ph-bell","⚙️ Engrenagem":"ph-gear","🏠 Casa":"ph-house","📍 Pin":"ph-map-pin","🛒 Carrinho":"ph-shopping-cart","💳 Cartão":"ph-credit-card","💰 Dólar":"ph-currency-dollar","🔗 Link":"ph-link","📄 Arquivo":"ph-file","📁 Pasta":"ph-folder","🖼️ Imagem":"ph-image","🎥 Vídeo":"ph-video","🎵 Música":"ph-music-note","✓ PhCheck":"ph-check","✕ PhX":"ph-x","+ PhPlus":"ph-plus","− Minus":"ph-minus","→ Seta Direita":"ph-arrow-right","← Seta Esquerda":"ph-arrow-left","↑ Seta Cima":"ph-arrow-up","↓ Seta Baixo":"ph-arrow-down","ℹ️ PhInfo":"ph-info","⚠️ Aviso":"ph-warning","❓ Pergunta":"ph-question","@ Arroba":"ph-at","# Hash":"ph-hash","Aa Texto":"ph-text-aa","📎 Anexo":"ph-paperclip","⬇️ PhDownload":"ph-download","⬆️ PhUpload":"ph-upload","🗑️ Lixeira":"ph-trash","✏️ Lápis":"ph-pencil","↗️ Compartilhar":"ph-share"},Gt={title:"Scuba/Input",component:$,tags:["autodocs"],argTypes:{type:{control:"select",options:["text","password","email","number","tel","url","search","date","time","datetime-local","textarea"],description:"Tipo do input"},label:{control:"text",description:"Label do campo"},placeholder:{control:"text",description:"Placeholder"},hint:{control:"text",description:"Texto de ajuda"},error:{control:"text",description:"Mensagem de erro"},required:{control:"boolean",description:"Campo obrigatório"},optional:{control:"boolean",description:'Mostrar "opcional"'},disabled:{control:"boolean",description:"Desabilitado"},readonly:{control:"boolean",description:"Somente leitura"},helpText:{control:"text",description:"Texto de ajuda (botão ?)"},iconLeft:{control:"select",options:te,description:"🎨 Ícone esquerda"},iconRight:{control:"select",options:te,description:"🎨 Ícone direita"},fullWidth:{control:"boolean",description:"Largura total"}}},p=n=>({components:{Input:$},setup(){return{args:n}},template:'<Input v-bind="args" />'}),D=p.bind({});D.args={type:"text",label:"Label",placeholder:"Placeholder",hint:"Hint",iconLeft:"ph-lock",iconRight:"ph-eye"};D.parameters={docs:{description:{story:"🎨 Use os controles abaixo para testar diferentes combinações de ícones, estados e propriedades. Veja todos os ícones em [phosphoricons.com](https://phosphoricons.com/)"}}};const w=p.bind({});w.args={type:"text",label:"Nome",placeholder:"Digite seu nome",hint:"Campo obrigatório",iconLeft:"ph-user"};const L=p.bind({});L.args={type:"password",label:"Senha",placeholder:"Digite sua senha",hint:"Mínimo 8 caracteres",iconLeft:"ph-lock"};const S=p.bind({});S.args={type:"email",label:"Email",placeholder:"seu@email.com",hint:"Digite um email válido",iconLeft:"ph-envelope"};const T=p.bind({});T.args={type:"tel",label:"Telefone",placeholder:"(00) 00000-0000",hint:"Digite seu telefone",iconLeft:"ph-phone"};const _=p.bind({});_.args={type:"search",label:"Buscar",placeholder:"Buscar...",hint:"Digite para buscar",iconLeft:"ph-magnifying-glass"};const E=p.bind({});E.args={type:"number",label:"Quantidade",placeholder:"0",hint:"Digite a quantidade",iconLeft:"ph-hash",min:0,max:100};const P=p.bind({});P.args={type:"date",label:"Data",hint:"Selecione uma data",iconLeft:"ph-calendar"};const C=p.bind({});C.args={type:"time",label:"Horário",hint:"Selecione um horário",iconLeft:"ph-clock"};const M=p.bind({});M.args={type:"textarea",label:"Mensagem",placeholder:"Digite sua mensagem",hint:"Máximo 500 caracteres",rows:4,maxlength:500};const R=p.bind({});R.args={type:"text",label:"Label",placeholder:"Placeholder",error:"Este campo é obrigatório",iconLeft:"ph-lock",iconRight:"ph-eye"};const z=p.bind({});z.args={type:"text",label:"Label",placeholder:"Placeholder",hint:"Hint",disabled:!0,iconLeft:"ph-lock"};const H=()=>({components:{Input:$},template:`
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
  `}),N=()=>({components:{Input:$},template:`
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
  `}),V=()=>({template:`
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
  `});var ne,ae,ie;D.parameters={...D.parameters,docs:{...(ne=D.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(ie=(ae=D.parameters)==null?void 0:ae.docs)==null?void 0:ie.source}}};var oe,se,le;w.parameters={...w.parameters,docs:{...(oe=w.parameters)==null?void 0:oe.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(le=(se=w.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var re,de,pe;L.parameters={...L.parameters,docs:{...(re=L.parameters)==null?void 0:re.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(pe=(de=L.parameters)==null?void 0:de.docs)==null?void 0:pe.source}}};var ce,ue,he;S.parameters={...S.parameters,docs:{...(ce=S.parameters)==null?void 0:ce.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(he=(ue=S.parameters)==null?void 0:ue.docs)==null?void 0:he.source}}};var me,ge,be;T.parameters={...T.parameters,docs:{...(me=T.parameters)==null?void 0:me.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(be=(ge=T.parameters)==null?void 0:ge.docs)==null?void 0:be.source}}};var ye,xe,ve;_.parameters={..._.parameters,docs:{...(ye=_.parameters)==null?void 0:ye.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(ve=(xe=_.parameters)==null?void 0:xe.docs)==null?void 0:ve.source}}};var fe,De,ke;E.parameters={...E.parameters,docs:{...(fe=E.parameters)==null?void 0:fe.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(ke=(De=E.parameters)==null?void 0:De.docs)==null?void 0:ke.source}}};var Ie,we,Le;P.parameters={...P.parameters,docs:{...(Ie=P.parameters)==null?void 0:Ie.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(Le=(we=P.parameters)==null?void 0:we.docs)==null?void 0:Le.source}}};var Se,Te,_e;C.parameters={...C.parameters,docs:{...(Se=C.parameters)==null?void 0:Se.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(_e=(Te=C.parameters)==null?void 0:Te.docs)==null?void 0:_e.source}}};var Ee,Pe,Ce;M.parameters={...M.parameters,docs:{...(Ee=M.parameters)==null?void 0:Ee.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(Ce=(Pe=M.parameters)==null?void 0:Pe.docs)==null?void 0:Ce.source}}};var Me,Re,ze;R.parameters={...R.parameters,docs:{...(Me=R.parameters)==null?void 0:Me.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(ze=(Re=R.parameters)==null?void 0:Re.docs)==null?void 0:ze.source}}};var Be,Fe,Ae;z.parameters={...z.parameters,docs:{...(Be=z.parameters)==null?void 0:Be.docs,source:{originalSource:`args => ({
  components: {
    Input
  },
  setup() {
    return {
      args
    };
  },
  template: '<Input v-bind="args" />'
})`,...(Ae=(Fe=z.parameters)==null?void 0:Fe.docs)==null?void 0:Ae.source}}};var He,Ne,Ve;H.parameters={...H.parameters,docs:{...(He=H.parameters)==null?void 0:He.docs,source:{originalSource:`() => ({
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
})`,...(Ve=(Ne=H.parameters)==null?void 0:Ne.docs)==null?void 0:Ve.source}}};var $e,Ue,Oe;N.parameters={...N.parameters,docs:{...($e=N.parameters)==null?void 0:$e.docs,source:{originalSource:`() => ({
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
})`,...(Oe=(Ue=N.parameters)==null?void 0:Ue.docs)==null?void 0:Oe.source}}};var qe,We,Qe;V.parameters={...V.parameters,docs:{...(qe=V.parameters)==null?void 0:qe.docs,source:{originalSource:`() => ({
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
})`,...(Qe=(We=V.parameters)==null?void 0:We.docs)==null?void 0:Qe.source}}};const Kt=["Playground","Text","Password","Email","PhoneInput","Search","Number","Date","Time","Textarea","WithError","Disabled","AllStates","AllTypes","DesignTokens"];export{H as AllStates,N as AllTypes,P as Date,V as DesignTokens,z as Disabled,S as Email,E as Number,L as Password,T as PhoneInput,D as Playground,_ as Search,w as Text,M as Textarea,C as Time,R as WithError,Kt as __namedExportsOrder,Gt as default};
