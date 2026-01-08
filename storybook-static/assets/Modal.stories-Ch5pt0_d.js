import{q as o,c as b,w as $e,B as Ke,J as P,C as je,G as He,g as H,E as W,T as G,I as We,o as p,a as u,b as x,y as Ge,x as Ze,p as Je,e as D,r as V,t as Qe}from"./vue.esm-bundler-cjlVRrb_.js";import{_ as Ye}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as l}from"./Button-CsaQJ0tt.js";const et=["aria-labelledby","aria-describedby"],tt={key:0,class:"scuba-modal__header"},ot=["id"],at=["id"],nt={key:1,class:"scuba-modal__footer"},lt={__name:"Modal",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:""},size:{type:String,default:"md",validator:t=>["sm","md","lg","xl","full"].includes(t)},showClose:{type:Boolean,default:!0},closeOnBackdrop:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},lockScroll:{type:Boolean,default:!0},persistent:{type:Boolean,default:!1},zIndex:{type:Number,default:null},id:{type:String,default:null}},emits:["update:modelValue","open","close","opened","closed"],setup(t,{expose:d,emit:g}){const a=t,i=g,A=o(null),f=o(null),s=o([]),m=b(()=>a.modelValue),_=b(()=>a.id?`${a.id}-title`:"scuba-modal-title-"+Math.random().toString(36).substr(2,9)),N=b(()=>a.id?`${a.id}-description`:"scuba-modal-description-"+Math.random().toString(36).substr(2,9)),Ie=b(()=>{const e=["scuba-modal"];return e.push(`scuba-modal--${a.size}`),e}),U=()=>{i("update:modelValue",!0),i("open"),P(()=>{R(),K(),i("opened")})},v=()=>{a.persistent||(i("update:modelValue",!1),i("close"),P(()=>{$(),T(),i("closed")}))},Re=()=>{a.closeOnBackdrop&&!a.persistent&&v()},I=e=>{e.key==="Escape"&&a.closeOnEscape&&m.value&&!a.persistent&&v()},R=()=>{if(f.value=document.activeElement,!A.value)return;const e=["a[href]","button:not([disabled])","textarea:not([disabled])","input:not([disabled])","select:not([disabled])",'[tabindex]:not([tabindex="-1"])'];s.value=Array.from(A.value.querySelectorAll(e.join(","))),s.value.length>0&&s.value[0].focus()},Xe=e=>{if(!m.value||s.value.length===0)return;const r=s.value[0],j=s.value[s.value.length-1];e.shiftKey?document.activeElement===r&&(e.preventDefault(),j.focus()):document.activeElement===j&&(e.preventDefault(),r.focus())},X=e=>{e.key==="Tab"&&Xe(e)},$=()=>{f.value&&f.value.focus&&f.value.focus()},K=()=>{if(!a.lockScroll)return;const e=window.innerWidth-document.documentElement.clientWidth;document.body.style.overflow="hidden",e>0&&(document.body.style.paddingRight=`${e}px`)},T=()=>{a.lockScroll&&(document.body.style.overflow="",document.body.style.paddingRight="")};return $e(()=>a.modelValue,e=>{e?U():($(),T())}),Ke(()=>{document.addEventListener("keydown",I),document.addEventListener("keydown",X),m.value&&P(()=>{R(),K()})}),je(()=>{document.removeEventListener("keydown",I),document.removeEventListener("keydown",X),T()}),d({open:U,close:v}),(e,r)=>(p(),He(We,{to:"body"},[H(G,{name:"scuba-modal-backdrop"},{default:W(()=>[m.value?(p(),u("div",{key:0,class:"scuba-modal-backdrop",onClick:Re,style:Ge({zIndex:t.zIndex})},[H(G,{name:"scuba-modal"},{default:W(()=>[m.value?(p(),u("div",{key:0,ref_key:"modalContent",ref:A,class:Je(Ie.value),role:"dialog","aria-modal":!0,"aria-labelledby":_.value,"aria-describedby":N.value,onClick:r[0]||(r[0]=Ze(()=>{},["stop"]))},[e.$slots.header||t.title?(p(),u("div",tt,[V(e.$slots,"header",{},()=>[D("h2",{id:_.value,class:"scuba-modal__title"},Qe(t.title),9,ot)],!0),t.showClose?(p(),u("button",{key:0,class:"scuba-modal__close",onClick:v,"aria-label":"Fechar modal",type:"button"},[...r[1]||(r[1]=[D("i",{class:"ph ph-x"},null,-1)])])):x("",!0)])):x("",!0),D("div",{id:N.value,class:"scuba-modal__body"},[V(e.$slots,"default",{},void 0,!0)],8,at),e.$slots.footer?(p(),u("div",nt,[V(e.$slots,"footer",{},void 0,!0)])):x("",!0)],10,et)):x("",!0)]),_:3})],4)):x("",!0)]),_:3})]))}},n=Ye(lt,[["__scopeId","data-v-dcd30df8"]]),pt={title:"Scuba/Modal",component:n,tags:["autodocs"],argTypes:{modelValue:{control:"boolean",description:"Estado aberto/fechado (v-model)"},title:{control:"text",description:"Título do modal"},size:{control:"select",options:["sm","md","lg","xl","full"],description:"Tamanho do modal"},showClose:{control:"boolean",description:"Mostrar botão de fechar"},closeOnBackdrop:{control:"boolean",description:"Fechar ao clicar no backdrop"},closeOnEscape:{control:"boolean",description:"Fechar ao pressionar ESC"},lockScroll:{control:"boolean",description:"Bloquear scroll do body"},persistent:{control:"boolean",description:"Modal persistente (não fecha)"},onOpen:{action:"opened"},onClose:{action:"closed"}}},it=t=>({components:{Modal:n,Button:l},setup(){const d=o(!1);return{isOpen:d,openModal:()=>{d.value=!0},closeModal:()=>{d.value=!1},args:t}},template:`
    <div>
      <Button variant="solid" label="Abrir Modal" @click="openModal" />
      <Modal v-bind="args" v-model="isOpen">
        <p>Este é o conteúdo do modal. Você pode adicionar qualquer conteúdo aqui.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="closeModal" />
          <Button variant="solid" label="Confirmar" @click="closeModal" />
        </template>
      </Modal>
    </div>
  `}),c=it.bind({});c.args={title:"Título do Modal",size:"md",showClose:!0,closeOnBackdrop:!0,closeOnEscape:!0,lockScroll:!0,persistent:!1};c.parameters={docs:{description:{story:"Use os controles abaixo para testar diferentes configurações do modal."}}};const h=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Small Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Small Modal" size="sm">
        <p>Este é um modal pequeno. Ideal para confirmações simples e alertas.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="OK" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `}),y=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Medium Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Medium Modal" size="md">
        <p>Este é um modal médio (padrão). Adequado para a maioria dos casos de uso.</p>
        <p>Você pode adicionar múltiplos parágrafos e conteúdo mais complexo aqui.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Salvar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `}),M=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Large Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Large Modal" size="lg">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Conteúdo Extenso</h3>
          <p style="margin-bottom: 16px;">Este é um modal grande, ideal para formulários complexos ou conteúdo extenso.</p>
          <p style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Confirmar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `}),k=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Extra Large Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Extra Large Modal" size="xl">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Modal Muito Grande</h3>
          <p style="margin-bottom: 16px;">Este modal é extra grande, perfeito para dashboards, editores ou visualizações complexas.</p>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 24px;">
            <div style="padding: 16px; background: #f9fafb; border-radius: 8px;">
              <h4 style="margin-bottom: 8px; font-weight: 600;">Seção 1</h4>
              <p style="font-size: 14px; color: #6b7280;">Conteúdo da primeira seção</p>
            </div>
            <div style="padding: 16px; background: #f9fafb; border-radius: 8px;">
              <h4 style="margin-bottom: 8px; font-weight: 600;">Seção 2</h4>
              <p style="font-size: 14px; color: #6b7280;">Conteúdo da segunda seção</p>
            </div>
          </div>
        </div>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Salvar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `}),E=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Full Screen Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Full Screen Modal" size="full">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Modal Tela Cheia</h3>
          <p style="margin-bottom: 16px;">Este modal ocupa quase toda a tela, ideal para experiências imersivas.</p>
          <p style="margin-bottom: 16px;">Perfeito para editores, visualizadores de mídia, ou qualquer conteúdo que necessite máximo espaço.</p>
          <div style="height: 400px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 600;">
            Área de Conteúdo Ampla
          </div>
        </div>
        <template #footer>
          <Button variant="text" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `}),O=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Modal Sem Botão Fechar" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Sem Botão Fechar" :showClose="false">
        <p>Este modal não tem o botão PhX no canto superior direito.</p>
        <p>Você precisa usar os botões de ação no rodapé.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `}),z=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Modal Persistente" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Modal Persistente" :persistent="true">
        <p>Este modal não pode ser fechado clicando fora ou pressionando ESC.</p>
        <p>Você deve usar o botão de ação para fechá-lo.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `}),B=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Sem Fechar no Backdrop" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Clique Fora Desabilitado" :closeOnBackdrop="false">
        <p>Este modal não fecha ao clicar no backdrop (área escura).</p>
        <p>Use o botão PhX ou os botões de ação para fechar.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="OK" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `}),S=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Modal com Scroll" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Modal com Conteúdo Longo" size="md">
        <div>
          <p style="margin-bottom: 16px;">Este modal tem conteúdo longo que requer scroll interno.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 1</h3>
          <p style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 2</h3>
          <p style="margin-bottom: 16px;">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 3</h3>
          <p style="margin-bottom: 16px;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 4</h3>
          <p style="margin-bottom: 16px;">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 5</h3>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <template #footer>
          <Button variant="text" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `}),w=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Formulário Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Criar Novo Usuário" size="md">
        <form @submit.prevent="isOpen = false" style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Nome Completo</label>
            <input type="text" placeholder="Digite o nome" style="width: 100%; padding: 10px 12px; border: 1px solid #e5e5e5; border-radius: 8px; font-size: 16px;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Email</label>
            <input type="email" placeholder="email@exemplo.com" style="width: 100%; padding: 10px 12px; border: 1px solid #e5e5e5; border-radius: 8px; font-size: 16px;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Função</label>
            <select style="width: 100%; padding: 10px 12px; border: 1px solid #e5e5e5; border-radius: 8px; font-size: 16px;">
              <option>Administrador</option>
              <option>Editor</option>
              <option>Visualizador</option>
            </select>
          </div>
        </form>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Criar Usuário" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `}),F=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Deletar Item" iconLeft="ph-trash" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Confirmar Exclusão" size="sm">
        <div>
          <p style="margin-bottom: 16px;">Tem certeza que deseja deletar este item?</p>
          <p style="color: #921535; font-size: 14px;">Esta ação não pode ser desfeita.</p>
        </div>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Deletar" iconLeft="ph-trash" @click="isOpen = false" style="background: #fe7e71;" />
        </template>
      </Modal>
    </div>
  `}),C=()=>({components:{Modal:n,Button:l},setup(){return{isOpen:o(!1)}},template:`
    <div>
      <Button variant="solid" label="Header Customizado" @click="isOpen = true" />
      <Modal v-model="isOpen" size="md">
        <template #header>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">
              <i class="ph ph-star"></i>
            </div>
            <div>
              <h2 style="margin: 0; font-size: 20px; font-weight: 600;">Header Customizado</h2>
              <p style="margin: 0; font-size: 14px; color: #6b7280;">Com ícone e subtítulo</p>
            </div>
          </div>
        </template>
        <p>Este modal tem um header totalmente customizado usando slots.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  `}),q=()=>({components:{Modal:n,Button:l},setup(){const t=o(!1),d=o(!1),g=o(!1),a=o(!1),i=o(!1);return{modalSm:t,modalMd:d,modalLg:g,modalXl:a,modalFull:i}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Modal Sizes</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 16px;">
        <Button variant="outline" label="Small" size="sm" @click="modalSm = true" />
        <Button variant="outline" label="Medium" size="sm" @click="modalMd = true" />
        <Button variant="outline" label="Large" size="sm" @click="modalLg = true" />
        <Button variant="outline" label="Extra Large" size="sm" @click="modalXl = true" />
        <Button variant="outline" label="Full Screen" size="sm" @click="modalFull = true" />
      </div>

      <Modal v-model="modalSm" title="Small Modal" size="sm">
        <p>Este é um modal pequeno.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" size="sm" @click="modalSm = false" />
        </template>
      </Modal>

      <Modal v-model="modalMd" title="Medium Modal" size="md">
        <p>Este é um modal médio (padrão).</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalMd = false" />
        </template>
      </Modal>

      <Modal v-model="modalLg" title="Large Modal" size="lg">
        <p>Este é um modal grande.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalLg = false" />
        </template>
      </Modal>

      <Modal v-model="modalXl" title="Extra Large Modal" size="xl">
        <p>Este é um modal extra grande.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalXl = false" />
        </template>
      </Modal>

      <Modal v-model="modalFull" title="Full Screen Modal" size="full">
        <p>Este é um modal tela cheia.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalFull = false" />
        </template>
      </Modal>
    </div>
  `}),L=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-icon-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-icon-secondary</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders & Radius</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-lg</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">40px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xl</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-tight</code></td><td style="text-align: right;">1.25</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-2xl</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-fast</code></td><td style="text-align: right;">150ms</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Z-Index</h3>
        <table style="width: 100%; font-size: 14px;">
          <tr><td style="padding: 4px 0;"><code>--z-index-modal-backdrop</code></td><td style="text-align: right;">1040</td></tr>
          <tr><td style="padding: 4px 0;"><code>--z-index-modal</code></td><td style="text-align: right;">1050</td></tr>
        </table>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade & Funcionalidades</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Focus Trap:</strong> Foco permanece dentro do modal quando aberto</li>
          <li><strong>ESC PhKey:</strong> Fecha o modal ao pressionar ESC (configurável)</li>
          <li><strong>Backdrop Click:</strong> Fecha ao clicar fora (configurável)</li>
          <li><strong>Scroll PhLock:</strong> Bloqueia scroll do body quando aberto</li>
          <li><strong>Focus Restore:</strong> Restaura foco ao elemento anterior ao fechar</li>
          <li><strong>ARIA:</strong> Usa <code>role="dialog"</code> e <code>aria-modal="true"</code></li>
          <li><strong>Teleport:</strong> Renderiza no body para evitar problemas de z-index</li>
          <li><strong>Animações:</strong> Transições suaves de entrada e saída</li>
          <li><strong>Responsivo:</strong> Adapta-se a diferentes tamanhos de tela</li>
        </ul>
      </div>
    </div>
  `});var Z,J,Q;c.parameters={...c.parameters,docs:{...(Z=c.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    const openModal = () => {
      isOpen.value = true;
    };
    const closeModal = () => {
      isOpen.value = false;
    };
    return {
      isOpen,
      openModal,
      closeModal,
      args
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Abrir Modal" @click="openModal" />
      <Modal v-bind="args" v-model="isOpen">
        <p>Este é o conteúdo do modal. Você pode adicionar qualquer conteúdo aqui.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="closeModal" />
          <Button variant="solid" label="Confirmar" @click="closeModal" />
        </template>
      </Modal>
    </div>
  \`
})`,...(Q=(J=c.parameters)==null?void 0:J.docs)==null?void 0:Q.source}}};var Y,ee,te;h.parameters={...h.parameters,docs:{...(Y=h.parameters)==null?void 0:Y.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Small Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Small Modal" size="sm">
        <p>Este é um modal pequeno. Ideal para confirmações simples e alertas.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="OK" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(te=(ee=h.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var oe,ae,ne;y.parameters={...y.parameters,docs:{...(oe=y.parameters)==null?void 0:oe.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Medium Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Medium Modal" size="md">
        <p>Este é um modal médio (padrão). Adequado para a maioria dos casos de uso.</p>
        <p>Você pode adicionar múltiplos parágrafos e conteúdo mais complexo aqui.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Salvar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(ne=(ae=y.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var le,ie,de;M.parameters={...M.parameters,docs:{...(le=M.parameters)==null?void 0:le.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Large Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Large Modal" size="lg">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Conteúdo Extenso</h3>
          <p style="margin-bottom: 16px;">Este é um modal grande, ideal para formulários complexos ou conteúdo extenso.</p>
          <p style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
        </div>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Confirmar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(de=(ie=M.parameters)==null?void 0:ie.docs)==null?void 0:de.source}}};var se,re,pe;k.parameters={...k.parameters,docs:{...(se=k.parameters)==null?void 0:se.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Extra Large Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Extra Large Modal" size="xl">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Modal Muito Grande</h3>
          <p style="margin-bottom: 16px;">Este modal é extra grande, perfeito para dashboards, editores ou visualizações complexas.</p>
          <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; margin-top: 24px;">
            <div style="padding: 16px; background: #f9fafb; border-radius: 8px;">
              <h4 style="margin-bottom: 8px; font-weight: 600;">Seção 1</h4>
              <p style="font-size: 14px; color: #6b7280;">Conteúdo da primeira seção</p>
            </div>
            <div style="padding: 16px; background: #f9fafb; border-radius: 8px;">
              <h4 style="margin-bottom: 8px; font-weight: 600;">Seção 2</h4>
              <p style="font-size: 14px; color: #6b7280;">Conteúdo da segunda seção</p>
            </div>
          </div>
        </div>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Salvar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(pe=(re=k.parameters)==null?void 0:re.docs)==null?void 0:pe.source}}};var ce,me,ue;E.parameters={...E.parameters,docs:{...(ce=E.parameters)==null?void 0:ce.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Full Screen Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Full Screen Modal" size="full">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Modal Tela Cheia</h3>
          <p style="margin-bottom: 16px;">Este modal ocupa quase toda a tela, ideal para experiências imersivas.</p>
          <p style="margin-bottom: 16px;">Perfeito para editores, visualizadores de mídia, ou qualquer conteúdo que necessite máximo espaço.</p>
          <div style="height: 400px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-size: 24px; font-weight: 600;">
            Área de Conteúdo Ampla
          </div>
        </div>
        <template #footer>
          <Button variant="text" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(ue=(me=E.parameters)==null?void 0:me.docs)==null?void 0:ue.source}}};var xe,ge,fe;O.parameters={...O.parameters,docs:{...(xe=O.parameters)==null?void 0:xe.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Modal Sem Botão Fechar" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Sem Botão Fechar" :showClose="false">
        <p>Este modal não tem o botão PhX no canto superior direito.</p>
        <p>Você precisa usar os botões de ação no rodapé.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(fe=(ge=O.parameters)==null?void 0:ge.docs)==null?void 0:fe.source}}};var ve,be,he;z.parameters={...z.parameters,docs:{...(ve=z.parameters)==null?void 0:ve.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Modal Persistente" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Modal Persistente" :persistent="true">
        <p>Este modal não pode ser fechado clicando fora ou pressionando ESC.</p>
        <p>Você deve usar o botão de ação para fechá-lo.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(he=(be=z.parameters)==null?void 0:be.docs)==null?void 0:he.source}}};var ye,Me,ke;B.parameters={...B.parameters,docs:{...(ye=B.parameters)==null?void 0:ye.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Sem Fechar no Backdrop" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Clique Fora Desabilitado" :closeOnBackdrop="false">
        <p>Este modal não fecha ao clicar no backdrop (área escura).</p>
        <p>Use o botão PhX ou os botões de ação para fechar.</p>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="OK" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(ke=(Me=B.parameters)==null?void 0:Me.docs)==null?void 0:ke.source}}};var Ee,Oe,ze;S.parameters={...S.parameters,docs:{...(Ee=S.parameters)==null?void 0:Ee.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Modal com Scroll" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Modal com Conteúdo Longo" size="md">
        <div>
          <p style="margin-bottom: 16px;">Este modal tem conteúdo longo que requer scroll interno.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 1</h3>
          <p style="margin-bottom: 16px;">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 2</h3>
          <p style="margin-bottom: 16px;">Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 3</h3>
          <p style="margin-bottom: 16px;">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 4</h3>
          <p style="margin-bottom: 16px;">Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.</p>
          <h3 style="margin: 24px 0 16px; font-size: 18px; font-weight: 600;">Seção 5</h3>
          <p>Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem.</p>
        </div>
        <template #footer>
          <Button variant="text" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(ze=(Oe=S.parameters)==null?void 0:Oe.docs)==null?void 0:ze.source}}};var Be,Se,we;w.parameters={...w.parameters,docs:{...(Be=w.parameters)==null?void 0:Be.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Formulário Modal" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Criar Novo Usuário" size="md">
        <form @submit.prevent="isOpen = false" style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Nome Completo</label>
            <input type="text" placeholder="Digite o nome" style="width: 100%; padding: 10px 12px; border: 1px solid #e5e5e5; border-radius: 8px; font-size: 16px;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Email</label>
            <input type="email" placeholder="email@exemplo.com" style="width: 100%; padding: 10px 12px; border: 1px solid #e5e5e5; border-radius: 8px; font-size: 16px;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Função</label>
            <select style="width: 100%; padding: 10px 12px; border: 1px solid #e5e5e5; border-radius: 8px; font-size: 16px;">
              <option>Administrador</option>
              <option>Editor</option>
              <option>Visualizador</option>
            </select>
          </div>
        </form>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Criar Usuário" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(we=(Se=w.parameters)==null?void 0:Se.docs)==null?void 0:we.source}}};var Fe,Ce,qe;F.parameters={...F.parameters,docs:{...(Fe=F.parameters)==null?void 0:Fe.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Deletar Item" iconLeft="ph-trash" @click="isOpen = true" />
      <Modal v-model="isOpen" title="Confirmar Exclusão" size="sm">
        <div>
          <p style="margin-bottom: 16px;">Tem certeza que deseja deletar este item?</p>
          <p style="color: #921535; font-size: 14px;">Esta ação não pode ser desfeita.</p>
        </div>
        <template #footer>
          <Button variant="text" label="Cancelar" @click="isOpen = false" />
          <Button variant="solid" label="Deletar" iconLeft="ph-trash" @click="isOpen = false" style="background: #fe7e71;" />
        </template>
      </Modal>
    </div>
  \`
})`,...(qe=(Ce=F.parameters)==null?void 0:Ce.docs)==null?void 0:qe.source}}};var Le,Ae,Te;C.parameters={...C.parameters,docs:{...(Le=C.parameters)==null?void 0:Le.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div>
      <Button variant="solid" label="Header Customizado" @click="isOpen = true" />
      <Modal v-model="isOpen" size="md">
        <template #header>
          <div style="display: flex; align-items: center; gap: 12px;">
            <div style="width: 40px; height: 40px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-size: 20px;">
              <i class="ph ph-star"></i>
            </div>
            <div>
              <h2 style="margin: 0; font-size: 20px; font-weight: 600;">Header Customizado</h2>
              <p style="margin: 0; font-size: 14px; color: #6b7280;">Com ícone e subtítulo</p>
            </div>
          </div>
        </template>
        <p>Este modal tem um header totalmente customizado usando slots.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="isOpen = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(Te=(Ae=C.parameters)==null?void 0:Ae.docs)==null?void 0:Te.source}}};var Pe,De,Ve;q.parameters={...q.parameters,docs:{...(Pe=q.parameters)==null?void 0:Pe.docs,source:{originalSource:`() => ({
  components: {
    Modal,
    Button
  },
  setup() {
    const modalSm = ref(false);
    const modalMd = ref(false);
    const modalLg = ref(false);
    const modalXl = ref(false);
    const modalFull = ref(false);
    return {
      modalSm,
      modalMd,
      modalLg,
      modalXl,
      modalFull
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Modal Sizes</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 16px;">
        <Button variant="outline" label="Small" size="sm" @click="modalSm = true" />
        <Button variant="outline" label="Medium" size="sm" @click="modalMd = true" />
        <Button variant="outline" label="Large" size="sm" @click="modalLg = true" />
        <Button variant="outline" label="Extra Large" size="sm" @click="modalXl = true" />
        <Button variant="outline" label="Full Screen" size="sm" @click="modalFull = true" />
      </div>

      <Modal v-model="modalSm" title="Small Modal" size="sm">
        <p>Este é um modal pequeno.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" size="sm" @click="modalSm = false" />
        </template>
      </Modal>

      <Modal v-model="modalMd" title="Medium Modal" size="md">
        <p>Este é um modal médio (padrão).</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalMd = false" />
        </template>
      </Modal>

      <Modal v-model="modalLg" title="Large Modal" size="lg">
        <p>Este é um modal grande.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalLg = false" />
        </template>
      </Modal>

      <Modal v-model="modalXl" title="Extra Large Modal" size="xl">
        <p>Este é um modal extra grande.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalXl = false" />
        </template>
      </Modal>

      <Modal v-model="modalFull" title="Full Screen Modal" size="full">
        <p>Este é um modal tela cheia.</p>
        <template #footer>
          <Button variant="solid" label="Fechar" @click="modalFull = false" />
        </template>
      </Modal>
    </div>
  \`
})`,...(Ve=(De=q.parameters)==null?void 0:De.docs)==null?void 0:Ve.source}}};var _e,Ne,Ue;L.parameters={...L.parameters,docs:{...(_e=L.parameters)==null?void 0:_e.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-icon-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-icon-secondary</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders & Radius</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-lg</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">40px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xl</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-tight</code></td><td style="text-align: right;">1.25</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-normal</code></td><td style="text-align: right;">1.5</td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-2xl</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-fast</code></td><td style="text-align: right;">150ms</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Z-Index</h3>
        <table style="width: 100%; font-size: 14px;">
          <tr><td style="padding: 4px 0;"><code>--z-index-modal-backdrop</code></td><td style="text-align: right;">1040</td></tr>
          <tr><td style="padding: 4px 0;"><code>--z-index-modal</code></td><td style="text-align: right;">1050</td></tr>
        </table>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade & Funcionalidades</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Focus Trap:</strong> Foco permanece dentro do modal quando aberto</li>
          <li><strong>ESC PhKey:</strong> Fecha o modal ao pressionar ESC (configurável)</li>
          <li><strong>Backdrop Click:</strong> Fecha ao clicar fora (configurável)</li>
          <li><strong>Scroll PhLock:</strong> Bloqueia scroll do body quando aberto</li>
          <li><strong>Focus Restore:</strong> Restaura foco ao elemento anterior ao fechar</li>
          <li><strong>ARIA:</strong> Usa <code>role="dialog"</code> e <code>aria-modal="true"</code></li>
          <li><strong>Teleport:</strong> Renderiza no body para evitar problemas de z-index</li>
          <li><strong>Animações:</strong> Transições suaves de entrada e saída</li>
          <li><strong>Responsivo:</strong> Adapta-se a diferentes tamanhos de tela</li>
        </ul>
      </div>
    </div>
  \`
})`,...(Ue=(Ne=L.parameters)==null?void 0:Ne.docs)==null?void 0:Ue.source}}};const ct=["Playground","Small","Medium","Large","ExtraLarge","FullScreen","NoCloseButton","Persistent","NoCloseOnBackdrop","WithScroll","FormModal","ConfirmationModal","CustomHeader","AllSizes","DesignTokens"];export{q as AllSizes,F as ConfirmationModal,C as CustomHeader,L as DesignTokens,k as ExtraLarge,w as FormModal,E as FullScreen,M as Large,y as Medium,O as NoCloseButton,B as NoCloseOnBackdrop,z as Persistent,c as Playground,h as Small,S as WithScroll,ct as __namedExportsOrder,pt as default};
