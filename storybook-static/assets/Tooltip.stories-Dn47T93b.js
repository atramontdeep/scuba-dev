import{q as E,c as I,w as bo,B as To,C as wo,a as $,r as X,G as zo,g as Bo,E as ko,T as Lo,I as So,J as Y,o as A,b as K,y as Co,p as Q,e as Do,h as Eo,t as Ao}from"./vue.esm-bundler-cjlVRrb_.js";import{_ as jo}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as d}from"./Button-CsaQJ0tt.js";const Mo=["id","aria-hidden"],Po={class:"scuba-tooltip__text"},Ho={__name:"Tooltip",props:{content:{type:String,default:""},position:{type:String,default:"top",validator:n=>["top","bottom","left","right"].includes(n)},variant:{type:String,default:"dark",validator:n=>["dark","light"].includes(n)},trigger:{type:String,default:"hover",validator:n=>["hover","click","focus","manual"].includes(n)},showArrow:{type:Boolean,default:!0},delay:{type:Number,default:200},offset:{type:Number,default:8},disabled:{type:Boolean,default:!1},maxWidth:{type:String,default:"300px"},id:{type:String,default:null}},emits:["show","hide"],setup(n,{expose:lo,emit:po}){const o=n,N=po,m=E(null),u=E(null),i=E(!1),U=E({});let F=null,V=null;const co=I(()=>o.id?o.id:"scuba-tooltip-"+Math.random().toString(36).substr(2,9)),go=I(()=>{const t=["scuba-tooltip"];return t.push(`scuba-tooltip--${o.position}`),t.push(`scuba-tooltip--${o.variant}`),o.showArrow&&t.push("scuba-tooltip--with-arrow"),t}),mo=I(()=>{const t=["scuba-tooltip__arrow"];return t.push(`scuba-tooltip__arrow--${o.position}`),t}),S=()=>{o.disabled||(clearTimeout(V),o.delay>0?F=setTimeout(()=>{i.value=!0,N("show"),Y(()=>{C()})},o.delay):(i.value=!0,N("show"),Y(()=>{C()})))},c=()=>{clearTimeout(F),V=setTimeout(()=>{i.value=!1,N("hide")},100)},uo=()=>{o.trigger==="hover"&&S()},vo=()=>{o.trigger==="hover"&&c()},xo=()=>{(o.trigger==="focus"||o.trigger==="hover")&&S()},fo=()=>{(o.trigger==="focus"||o.trigger==="hover")&&c()},ho=()=>{o.trigger==="click"&&(i.value?c():S())},C=()=>{if(!m.value||!u.value)return;const t=m.value.getBoundingClientRect(),r=u.value.getBoundingClientRect();let a=0,s=0;const yo=o.showArrow?6:0,D=o.offset+yo;switch(o.position){case"top":a=t.top-r.height-D,s=t.left+t.width/2-r.width/2;break;case"bottom":a=t.bottom+D,s=t.left+t.width/2-r.width/2;break;case"left":a=t.top+t.height/2-r.height/2,s=t.left-r.width-D;break;case"right":a=t.top+t.height/2-r.height/2,s=t.right+D;break}const p=8;s<p?s=p:s+r.width>window.innerWidth-p&&(s=window.innerWidth-r.width-p),a<p?a=p:a+r.height>window.innerHeight-p&&(a=window.innerHeight-r.height-p),U.value={top:`${a+window.scrollY}px`,left:`${s+window.scrollX}px`,maxWidth:o.maxWidth}},O=t=>{o.trigger==="click"&&i.value&&m.value&&!m.value.contains(t.target)&&u.value&&!u.value.contains(t.target)&&c()},G=()=>{i.value&&C()},J=()=>{i.value&&C()};return bo(()=>o.disabled,t=>{t&&i.value&&c()}),To(()=>{document.addEventListener("click",O),window.addEventListener("scroll",G,!0),window.addEventListener("resize",J)}),wo(()=>{document.removeEventListener("click",O),window.removeEventListener("scroll",G,!0),window.removeEventListener("resize",J),clearTimeout(F),clearTimeout(V)}),lo({show:S,hide:c,isVisible:i}),(t,r)=>(A(),$("div",{ref_key:"tooltipWrapper",ref:m,class:"scuba-tooltip-wrapper",onMouseenter:uo,onMouseleave:vo,onFocus:xo,onBlur:fo,onClick:ho},[X(t.$slots,"default",{},void 0,!0),(A(),zo(So,{to:"body"},[Bo(Lo,{name:"scuba-tooltip"},{default:ko(()=>[i.value?(A(),$("div",{key:0,ref_key:"tooltipContent",ref:u,class:Q(go.value),style:Co(U.value),role:"tooltip",id:co.value,"aria-hidden":!i.value},[n.showArrow?(A(),$("div",{key:0,class:Q(mo.value)},null,2)):K("",!0),Do("div",Po,[X(t.$slots,"content",{},()=>[Eo(Ao(n.content),1)],!0)])],14,Mo)):K("",!0)]),_:3})]))],544))}},l=jo(Ho,[["__scopeId","data-v-5cb9029a"]]),Wo={title:"Scuba/Tooltip",component:l,tags:["autodocs"],argTypes:{content:{control:"text",description:"Conteúdo do tooltip"},position:{control:"select",options:["top","bottom","left","right"],description:"Posição do tooltip"},variant:{control:"select",options:["dark","light"],description:"Variante visual"},trigger:{control:"select",options:["hover","click","focus","manual"],description:"Modo de ativação"},showArrow:{control:"boolean",description:"Mostrar seta"},delay:{control:"number",description:"Delay para exibir (ms)"},offset:{control:"number",description:"Distância do elemento (px)"},disabled:{control:"boolean",description:"Desabilitar tooltip"},maxWidth:{control:"text",description:"Largura máxima"}}},e=n=>({components:{Tooltip:l,Button:d},setup(){return{args:n}},template:`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  `}),g=e.bind({});g.args={content:"Este é um tooltip de exemplo",position:"top",variant:"dark",trigger:"hover",showArrow:!0,delay:200,offset:8};g.parameters={docs:{description:{story:"Use os controles abaixo para testar diferentes configurações do tooltip."}}};const v=e.bind({});v.args={content:"Tooltip no topo",position:"top",variant:"dark"};const x=e.bind({});x.args={content:"Tooltip embaixo",position:"bottom",variant:"dark"};const f=e.bind({});f.args={content:"Tooltip à esquerda",position:"left",variant:"dark"};const h=e.bind({});h.args={content:"Tooltip à direita",position:"right",variant:"dark"};const y=e.bind({});y.args={content:"Tooltip escuro (padrão)",position:"top",variant:"dark"};const b=e.bind({});b.args={content:"Tooltip claro",position:"top",variant:"light"};const T=e.bind({});T.args={content:"Mostrado ao passar o mouse",position:"top",trigger:"hover"};const w=e.bind({});w.args={content:"Mostrado ao clicar",position:"top",trigger:"click"};const z=e.bind({});z.args={content:"Mostrado ao focar",position:"top",trigger:"focus"};const B=e.bind({});B.args={content:"Tooltip sem seta",position:"top",variant:"dark",showArrow:!1};const k=e.bind({});k.args={content:"Este é um tooltip com um texto muito longo que demonstra como o componente lida com conteúdo extenso. Ele tem largura máxima configurável.",position:"top",variant:"dark",maxWidth:"250px"};const L=e.bind({});L.args={content:"Este tooltip não será mostrado",position:"top",variant:"dark",disabled:!0};const j=()=>({components:{Tooltip:l,Button:d},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Positions</h2>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Top</h3>
          <Tooltip content="Tooltip no topo" position="top">
            <Button variant="solid" label="Top" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Bottom</h3>
          <Tooltip content="Tooltip embaixo" position="bottom">
            <Button variant="solid" label="Bottom" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Left</h3>
          <Tooltip content="Tooltip à esquerda" position="left">
            <Button variant="solid" label="Left" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Right</h3>
          <Tooltip content="Tooltip à direita" position="right">
            <Button variant="solid" label="Right" size="sm" />
          </Tooltip>
        </div>
      </div>
    </div>
  `}),M=()=>({components:{Tooltip:l,Button:d},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Variants</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Dark (Default)</h3>
          <Tooltip content="Tooltip escuro" variant="dark" position="top">
            <Button variant="solid" label="Dark Tooltip" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Light</h3>
          <Tooltip content="Tooltip claro" variant="light" position="top">
            <Button variant="solid" label="Light Tooltip" />
          </Tooltip>
        </div>
      </div>
    </div>
  `}),P=()=>({components:{Tooltip:l,Button:d},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Triggers</h2>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Hover (Default)</h3>
          <Tooltip content="Mostrado ao passar o mouse" trigger="hover" position="top">
            <Button variant="outline" label="Hover Me" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Click</h3>
          <Tooltip content="Mostrado ao clicar" trigger="click" position="top">
            <Button variant="outline" label="Click Me" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Focus</h3>
          <Tooltip content="Mostrado ao focar (Tab)" trigger="focus" position="top">
            <Button variant="outline" label="Focus Me" />
          </Tooltip>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <p style="color: #6b7280; line-height: 1.6; font-size: 14px;">
          <strong>Hover:</strong> Mostra ao passar o mouse<br/>
          <strong>Click:</strong> Mostra/esconde ao clicar<br/>
          <strong>Focus:</strong> Mostra quando o elemento recebe foco (útil para acessibilidade)
        </p>
      </div>
    </div>
  `}),H=()=>({components:{Tooltip:l,Button:d},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Arrow</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Com Seta (Default)</h3>
          <Tooltip content="Tooltip com seta" :showArrow="true" position="top">
            <Button variant="solid" label="With Arrow" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Sem Seta</h3>
          <Tooltip content="Tooltip sem seta" :showArrow="false" position="top">
            <Button variant="solid" label="No Arrow" />
          </Tooltip>
        </div>
      </div>
    </div>
  `}),R=()=>({components:{Tooltip:l},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif; display: flex; justify-content: center;">
      <Tooltip content="Clique para mais informações" position="right">
        <button style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--semantic-color-primary-500);
          color: white;
          border: none;
          cursor: pointer;
          font-size: 18px;
        ">
          <i class="ph ph-info"></i>
        </button>
      </Tooltip>
    </div>
  `}),_=()=>({components:{Tooltip:l,Button:d},template:`
    <div style="padding: 80px; font-family: Poppins, sans-serif; display: flex; justify-content: center;">
      <Tooltip position="top" maxWidth="300px">
        <template #content>
          <div style="text-align: left;">
            <div style="font-weight: 600; margin-bottom: 4px;">Título do Tooltip</div>
            <div style="font-size: 12px; opacity: 0.9;">
              Este tooltip usa um slot customizado para conteúdo mais complexo.
            </div>
          </div>
        </template>
        <Button variant="solid" label="Custom Content" />
      </Tooltip>
    </div>
  `}),q=()=>({components:{Tooltip:l,Button:d},template:`
    <div style="padding: 60px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Tooltip Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 60px; margin-bottom: 60px;">
        <!-- Top Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Top + Dark</div>
          <Tooltip content="Tooltip no topo escuro" position="top" variant="dark">
            <Button variant="solid" size="sm" label="Top" />
          </Tooltip>
        </div>

        <!-- Top Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Top + Light</div>
          <Tooltip content="Tooltip no topo claro" position="top" variant="light">
            <Button variant="solid" size="sm" label="Top" />
          </Tooltip>
        </div>

        <!-- Bottom Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Bottom + Dark</div>
          <Tooltip content="Tooltip embaixo escuro" position="bottom" variant="dark">
            <Button variant="solid" size="sm" label="Bottom" />
          </Tooltip>
        </div>

        <!-- Bottom Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Bottom + Light</div>
          <Tooltip content="Tooltip embaixo claro" position="bottom" variant="light">
            <Button variant="solid" size="sm" label="Bottom" />
          </Tooltip>
        </div>

        <!-- Left Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Left + Dark</div>
          <Tooltip content="Tooltip à esquerda escuro" position="left" variant="dark">
            <Button variant="solid" size="sm" label="Left" />
          </Tooltip>
        </div>

        <!-- Left Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Left + Light</div>
          <Tooltip content="Tooltip à esquerda claro" position="left" variant="light">
            <Button variant="solid" size="sm" label="Left" />
          </Tooltip>
        </div>

        <!-- Right Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Right + Dark</div>
          <Tooltip content="Tooltip à direita escuro" position="right" variant="dark">
            <Button variant="solid" size="sm" label="Right" />
          </Tooltip>
        </div>

        <!-- Right Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Right + Light</div>
          <Tooltip content="Tooltip à direita claro" position="right" variant="light">
            <Button variant="solid" size="sm" label="Right" />
          </Tooltip>
        </div>

        <!-- Click Trigger -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Click Trigger</div>
          <Tooltip content="Clique para alternar" position="top" trigger="click">
            <Button variant="outline" size="sm" label="Click" />
          </Tooltip>
        </div>

        <!-- No Arrow -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Sem Seta</div>
          <Tooltip content="Tooltip sem seta" position="top" :showArrow="false">
            <Button variant="outline" size="sm" label="No Arrow" />
          </Tooltip>
        </div>

        <!-- Long Text -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Texto Longo</div>
          <Tooltip content="Este é um tooltip com texto muito longo que demonstra quebra de linha" position="top" maxWidth="150px">
            <Button variant="outline" size="sm" label="Long Text" />
          </Tooltip>
        </div>

        <!-- Icon Button -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Com Ícone</div>
          <Tooltip content="Informação adicional" position="top">
            <button style="
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: var(--semantic-color-primary-500);
              color: white;
              border: none;
              cursor: pointer;
              font-size: 18px;
            ">
              <i class="ph ph-info"></i>
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  `}),W=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-inverted</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-inverted</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--shadow-md</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-fast</code></td><td style="text-align: right;">150ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--z-index-tooltip</code></td><td style="text-align: right;">1070</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa <code>role="tooltip"</code> para identificação semântica</li>
          <li>Atributo <code>aria-hidden</code> gerenciado dinamicamente</li>
          <li>Suporte a trigger por <code>focus</code> para navegação por teclado</li>
          <li>Posicionamento automático para evitar sair da viewport</li>
          <li>z-index mais alto (1070) para garantir visibilidade</li>
        </ul>
      </div>
    </div>
  `});var Z,tt,ot;g.parameters={...g.parameters,docs:{...(Z=g.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(ot=(tt=g.parameters)==null?void 0:tt.docs)==null?void 0:ot.source}}};var et,nt,it;v.parameters={...v.parameters,docs:{...(et=v.parameters)==null?void 0:et.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(it=(nt=v.parameters)==null?void 0:nt.docs)==null?void 0:it.source}}};var rt,at,st;x.parameters={...x.parameters,docs:{...(rt=x.parameters)==null?void 0:rt.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(st=(at=x.parameters)==null?void 0:at.docs)==null?void 0:st.source}}};var lt,pt,dt;f.parameters={...f.parameters,docs:{...(lt=f.parameters)==null?void 0:lt.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(dt=(pt=f.parameters)==null?void 0:pt.docs)==null?void 0:dt.source}}};var ct,gt,mt;h.parameters={...h.parameters,docs:{...(ct=h.parameters)==null?void 0:ct.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(mt=(gt=h.parameters)==null?void 0:gt.docs)==null?void 0:mt.source}}};var ut,vt,xt;y.parameters={...y.parameters,docs:{...(ut=y.parameters)==null?void 0:ut.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(xt=(vt=y.parameters)==null?void 0:vt.docs)==null?void 0:xt.source}}};var ft,ht,yt;b.parameters={...b.parameters,docs:{...(ft=b.parameters)==null?void 0:ft.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(yt=(ht=b.parameters)==null?void 0:ht.docs)==null?void 0:yt.source}}};var bt,Tt,wt;T.parameters={...T.parameters,docs:{...(bt=T.parameters)==null?void 0:bt.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(wt=(Tt=T.parameters)==null?void 0:Tt.docs)==null?void 0:wt.source}}};var zt,Bt,kt;w.parameters={...w.parameters,docs:{...(zt=w.parameters)==null?void 0:zt.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(kt=(Bt=w.parameters)==null?void 0:Bt.docs)==null?void 0:kt.source}}};var Lt,St,Ct;z.parameters={...z.parameters,docs:{...(Lt=z.parameters)==null?void 0:Lt.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(Ct=(St=z.parameters)==null?void 0:St.docs)==null?void 0:Ct.source}}};var Dt,Et,At;B.parameters={...B.parameters,docs:{...(Dt=B.parameters)==null?void 0:Dt.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(At=(Et=B.parameters)==null?void 0:Et.docs)==null?void 0:At.source}}};var jt,Mt,Pt;k.parameters={...k.parameters,docs:{...(jt=k.parameters)==null?void 0:jt.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(Pt=(Mt=k.parameters)==null?void 0:Mt.docs)==null?void 0:Pt.source}}};var Ht,Rt,_t;L.parameters={...L.parameters,docs:{...(Ht=L.parameters)==null?void 0:Ht.docs,source:{originalSource:`args => ({
  components: {
    Tooltip,
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: \`
    <div style="padding: 100px; display: flex; justify-content: center;">
      <Tooltip v-bind="args">
        <Button variant="solid" label="Hover me" />
      </Tooltip>
    </div>
  \`
})`,...(_t=(Rt=L.parameters)==null?void 0:Rt.docs)==null?void 0:_t.source}}};var qt,Wt,Nt;j.parameters={...j.parameters,docs:{...(qt=j.parameters)==null?void 0:qt.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Positions</h2>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Top</h3>
          <Tooltip content="Tooltip no topo" position="top">
            <Button variant="solid" label="Top" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Bottom</h3>
          <Tooltip content="Tooltip embaixo" position="bottom">
            <Button variant="solid" label="Bottom" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Left</h3>
          <Tooltip content="Tooltip à esquerda" position="left">
            <Button variant="solid" label="Left" size="sm" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Right</h3>
          <Tooltip content="Tooltip à direita" position="right">
            <Button variant="solid" label="Right" size="sm" />
          </Tooltip>
        </div>
      </div>
    </div>
  \`
})`,...(Nt=(Wt=j.parameters)==null?void 0:Wt.docs)==null?void 0:Nt.source}}};var Ft,Vt,It;M.parameters={...M.parameters,docs:{...(Ft=M.parameters)==null?void 0:Ft.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Variants</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Dark (Default)</h3>
          <Tooltip content="Tooltip escuro" variant="dark" position="top">
            <Button variant="solid" label="Dark Tooltip" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Light</h3>
          <Tooltip content="Tooltip claro" variant="light" position="top">
            <Button variant="solid" label="Light Tooltip" />
          </Tooltip>
        </div>
      </div>
    </div>
  \`
})`,...(It=(Vt=M.parameters)==null?void 0:Vt.docs)==null?void 0:It.source}}};var $t,Ut,Ot;P.parameters={...P.parameters,docs:{...($t=P.parameters)==null?void 0:$t.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Triggers</h2>

      <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Hover (Default)</h3>
          <Tooltip content="Mostrado ao passar o mouse" trigger="hover" position="top">
            <Button variant="outline" label="Hover Me" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Click</h3>
          <Tooltip content="Mostrado ao clicar" trigger="click" position="top">
            <Button variant="outline" label="Click Me" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Focus</h3>
          <Tooltip content="Mostrado ao focar (Tab)" trigger="focus" position="top">
            <Button variant="outline" label="Focus Me" />
          </Tooltip>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <p style="color: #6b7280; line-height: 1.6; font-size: 14px;">
          <strong>Hover:</strong> Mostra ao passar o mouse<br/>
          <strong>Click:</strong> Mostra/esconde ao clicar<br/>
          <strong>Focus:</strong> Mostra quando o elemento recebe foco (útil para acessibilidade)
        </p>
      </div>
    </div>
  \`
})`,...(Ot=(Ut=P.parameters)==null?void 0:Ut.docs)==null?void 0:Ot.source}}};var Gt,Jt,Xt;H.parameters={...H.parameters,docs:{...(Gt=H.parameters)==null?void 0:Gt.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Tooltip Arrow</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 80px; align-items: center; justify-items: center;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Com Seta (Default)</h3>
          <Tooltip content="Tooltip com seta" :showArrow="true" position="top">
            <Button variant="solid" label="With Arrow" />
          </Tooltip>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600; text-align: center;">Sem Seta</h3>
          <Tooltip content="Tooltip sem seta" :showArrow="false" position="top">
            <Button variant="solid" label="No Arrow" />
          </Tooltip>
        </div>
      </div>
    </div>
  \`
})`,...(Xt=(Jt=H.parameters)==null?void 0:Jt.docs)==null?void 0:Xt.source}}};var Yt,Kt,Qt;R.parameters={...R.parameters,docs:{...(Yt=R.parameters)==null?void 0:Yt.docs,source:{originalSource:`() => ({
  components: {
    Tooltip
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif; display: flex; justify-content: center;">
      <Tooltip content="Clique para mais informações" position="right">
        <button style="
          display: flex;
          align-items: center;
          justify-content: center;
          width: 32px;
          height: 32px;
          border-radius: 50%;
          background: var(--semantic-color-primary-500);
          color: white;
          border: none;
          cursor: pointer;
          font-size: 18px;
        ">
          <i class="ph ph-info"></i>
        </button>
      </Tooltip>
    </div>
  \`
})`,...(Qt=(Kt=R.parameters)==null?void 0:Kt.docs)==null?void 0:Qt.source}}};var Zt,to,oo;_.parameters={..._.parameters,docs:{...(Zt=_.parameters)==null?void 0:Zt.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 80px; font-family: Poppins, sans-serif; display: flex; justify-content: center;">
      <Tooltip position="top" maxWidth="300px">
        <template #content>
          <div style="text-align: left;">
            <div style="font-weight: 600; margin-bottom: 4px;">Título do Tooltip</div>
            <div style="font-size: 12px; opacity: 0.9;">
              Este tooltip usa um slot customizado para conteúdo mais complexo.
            </div>
          </div>
        </template>
        <Button variant="solid" label="Custom Content" />
      </Tooltip>
    </div>
  \`
})`,...(oo=(to=_.parameters)==null?void 0:to.docs)==null?void 0:oo.source}}};var eo,no,io;q.parameters={...q.parameters,docs:{...(eo=q.parameters)==null?void 0:eo.docs,source:{originalSource:`() => ({
  components: {
    Tooltip,
    Button
  },
  template: \`
    <div style="padding: 60px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Tooltip Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 60px; margin-bottom: 60px;">
        <!-- Top Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Top + Dark</div>
          <Tooltip content="Tooltip no topo escuro" position="top" variant="dark">
            <Button variant="solid" size="sm" label="Top" />
          </Tooltip>
        </div>

        <!-- Top Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Top + Light</div>
          <Tooltip content="Tooltip no topo claro" position="top" variant="light">
            <Button variant="solid" size="sm" label="Top" />
          </Tooltip>
        </div>

        <!-- Bottom Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Bottom + Dark</div>
          <Tooltip content="Tooltip embaixo escuro" position="bottom" variant="dark">
            <Button variant="solid" size="sm" label="Bottom" />
          </Tooltip>
        </div>

        <!-- Bottom Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Bottom + Light</div>
          <Tooltip content="Tooltip embaixo claro" position="bottom" variant="light">
            <Button variant="solid" size="sm" label="Bottom" />
          </Tooltip>
        </div>

        <!-- Left Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Left + Dark</div>
          <Tooltip content="Tooltip à esquerda escuro" position="left" variant="dark">
            <Button variant="solid" size="sm" label="Left" />
          </Tooltip>
        </div>

        <!-- Left Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Left + Light</div>
          <Tooltip content="Tooltip à esquerda claro" position="left" variant="light">
            <Button variant="solid" size="sm" label="Left" />
          </Tooltip>
        </div>

        <!-- Right Dark -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Right + Dark</div>
          <Tooltip content="Tooltip à direita escuro" position="right" variant="dark">
            <Button variant="solid" size="sm" label="Right" />
          </Tooltip>
        </div>

        <!-- Right Light -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Right + Light</div>
          <Tooltip content="Tooltip à direita claro" position="right" variant="light">
            <Button variant="solid" size="sm" label="Right" />
          </Tooltip>
        </div>

        <!-- Click Trigger -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Click Trigger</div>
          <Tooltip content="Clique para alternar" position="top" trigger="click">
            <Button variant="outline" size="sm" label="Click" />
          </Tooltip>
        </div>

        <!-- No Arrow -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Sem Seta</div>
          <Tooltip content="Tooltip sem seta" position="top" :showArrow="false">
            <Button variant="outline" size="sm" label="No Arrow" />
          </Tooltip>
        </div>

        <!-- Long Text -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Texto Longo</div>
          <Tooltip content="Este é um tooltip com texto muito longo que demonstra quebra de linha" position="top" maxWidth="150px">
            <Button variant="outline" size="sm" label="Long Text" />
          </Tooltip>
        </div>

        <!-- Icon Button -->
        <div style="text-align: center;">
          <div style="font-size: 14px; margin-bottom: 12px; color: #6b7280;">Com Ícone</div>
          <Tooltip content="Informação adicional" position="top">
            <button style="
              display: flex;
              align-items: center;
              justify-content: center;
              width: 32px;
              height: 32px;
              border-radius: 50%;
              background: var(--semantic-color-primary-500);
              color: white;
              border: none;
              cursor: pointer;
              font-size: 18px;
            ">
              <i class="ph ph-info"></i>
            </button>
          </Tooltip>
        </div>
      </div>
    </div>
  \`
})`,...(io=(no=q.parameters)==null?void 0:no.docs)==null?void 0:io.source}}};var ro,ao,so;W.parameters={...W.parameters,docs:{...(ro=W.parameters)==null?void 0:ro.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-inverted</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-inverted</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--shadow-md</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-fast</code></td><td style="text-align: right;">150ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--z-index-tooltip</code></td><td style="text-align: right;">1070</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa <code>role="tooltip"</code> para identificação semântica</li>
          <li>Atributo <code>aria-hidden</code> gerenciado dinamicamente</li>
          <li>Suporte a trigger por <code>focus</code> para navegação por teclado</li>
          <li>Posicionamento automático para evitar sair da viewport</li>
          <li>z-index mais alto (1070) para garantir visibilidade</li>
        </ul>
      </div>
    </div>
  \`
})`,...(so=(ao=W.parameters)==null?void 0:ao.docs)==null?void 0:so.source}}};const No=["Playground","Top","Bottom","Left","Right","Dark","Light","HoverTrigger","ClickTrigger","FocusTrigger","NoArrow","LongText","Disabled","AllPositions","Variants","Triggers","ArrowOptions","WithIcon","CustomContent","Showcase","DesignTokens"];export{j as AllPositions,H as ArrowOptions,x as Bottom,w as ClickTrigger,_ as CustomContent,y as Dark,W as DesignTokens,L as Disabled,z as FocusTrigger,T as HoverTrigger,f as Left,b as Light,k as LongText,B as NoArrow,g as Playground,h as Right,q as Showcase,v as Top,P as Triggers,M as Variants,R as WithIcon,No as __namedExportsOrder,Wo as default};
