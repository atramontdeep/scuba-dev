import{c as P,w as ue,B as me,C as fe,p as u,g as O,D as T,T as C,E as ge,o as l,a as p,b as d,u as ye,e as m,r as D,h as xe,t as he,J as ve,v as t}from"./vue.esm-bundler-BXouRCJi.js";import{F as be}from"./PhX.vue-Bf36g03w.js";import{B as i}from"./Button-B2uSwTAf.js";import{_ as we}from"./_plugin-vue_export-helper-DlAUqK2U.js";/* empty css                                                              *//* empty css                                                               */const Be=["aria-labelledby"],ke={class:"scuba-drawer__header"},Oe=["id"],De={class:"scuba-drawer__body"},ze={key:0,class:"scuba-drawer__footer"},Se={key:0,class:"scuba-drawer__footer-actions"},Pe={class:"scuba-drawer__footer-actions-right"},Te={__name:"Drawer",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:""},placement:{type:String,default:"right",validator:e=>["left","right","top","bottom"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg","full"].includes(e)},closable:{type:Boolean,default:!0},closeOnBackdrop:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0},showTertiaryButton:{type:Boolean,default:!1},tertiaryButtonLabel:{type:String,default:"Limpar"},showSecondaryButton:{type:Boolean,default:!1},secondaryButtonLabel:{type:String,default:"Cancelar"},showPrimaryButton:{type:Boolean,default:!1},primaryButtonLabel:{type:String,default:"Confirmar"},buttonSize:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)}},emits:["update:modelValue","close","open","tertiary-click","secondary-click","primary-click"],setup(e,{emit:o}){const n=e,a=o,z=P(()=>"drawer-title-"+Math.random().toString(36).substr(2,9)),le=P(()=>["scuba-drawer",`scuba-drawer--${n.placement}`,`scuba-drawer--${n.size}`]),k=()=>{a("update:modelValue",!1),a("close")},se=()=>{n.closeOnBackdrop&&k()},S=s=>{s.key==="Escape"&&n.modelValue&&n.closeOnEscape&&k()},de=()=>{a("tertiary-click")},pe=()=>{a("secondary-click")},ce=()=>{a("primary-click")};return ue(()=>n.modelValue,s=>{s?(a("open"),document.body.style.overflow="hidden"):document.body.style.overflow=""}),me(()=>{document.addEventListener("keydown",S)}),fe(()=>{document.removeEventListener("keydown",S),document.body.style.overflow=""}),(s,Ce)=>(l(),u(ge,{to:"body"},[O(C,{name:"scuba-drawer-backdrop"},{default:T(()=>[e.modelValue?(l(),p("div",{key:0,class:"scuba-drawer__backdrop",onClick:se})):d("",!0)]),_:1}),O(C,{name:`scuba-drawer-${e.placement}`},{default:T(()=>[e.modelValue?(l(),p("div",{key:0,class:ye(le.value),role:"dialog","aria-modal":"true","aria-labelledby":z.value},[m("div",ke,[m("h2",{id:z.value,class:"scuba-drawer__title"},[D(s.$slots,"title",{},()=>[xe(he(e.title),1)],!0)],8,Oe),e.closable?(l(),p("button",{key:0,class:"scuba-drawer__close",onClick:k,"aria-label":"Close drawer"},[O(ve(be),{size:24,weight:"bold"})])):d("",!0)]),m("div",De,[D(s.$slots,"default",{},void 0,!0)]),s.$slots.footer||e.showTertiaryButton||e.showSecondaryButton||e.showPrimaryButton?(l(),p("div",ze,[D(s.$slots,"footer",{},()=>[e.showTertiaryButton||e.showSecondaryButton||e.showPrimaryButton?(l(),p("div",Se,[e.showTertiaryButton?(l(),u(i,{key:0,variant:"text",size:e.buttonSize,label:e.tertiaryButtonLabel,onClick:de,class:"scuba-drawer__button-tertiary"},null,8,["size","label"])):d("",!0),m("div",Pe,[e.showSecondaryButton?(l(),u(i,{key:0,variant:"outline",size:e.buttonSize,label:e.secondaryButtonLabel,onClick:pe,class:"scuba-drawer__button-secondary"},null,8,["size","label"])):d("",!0),e.showPrimaryButton?(l(),u(i,{key:1,variant:"solid",size:e.buttonSize,label:e.primaryButtonLabel,onClick:ce,class:"scuba-drawer__button-primary"},null,8,["size","label"])):d("",!0)])])):d("",!0)],!0)])):d("",!0)],10,Be)):d("",!0)]),_:3},8,["name"])]))}},r=we(Te,[["__scopeId","data-v-3ff3b69f"]]),Re={title:"Scuba/Drawer",component:r,tags:["autodocs"],argTypes:{placement:{control:"select",options:["left","right","top","bottom"],description:"Posição do drawer"},size:{control:"select",options:["sm","md","lg","full"],description:"Tamanho do drawer"},closable:{control:"boolean",description:"Mostra botão de fechar"},closeOnBackdrop:{control:"boolean",description:"Fecha ao clicar fora"},closeOnEscape:{control:"boolean",description:"Fecha ao pressionar ESC"},showTertiaryButton:{control:"boolean",description:"Exibe botão terciário (text variant) à esquerda"},tertiaryButtonLabel:{control:"text",description:"Texto do botão terciário"},showSecondaryButton:{control:"boolean",description:"Exibe botão secundário (outline variant) à direita"},secondaryButtonLabel:{control:"text",description:"Texto do botão secundário"},showPrimaryButton:{control:"boolean",description:"Exibe botão primário (solid variant) à direita"},primaryButtonLabel:{control:"text",description:"Texto do botão primário"},buttonSize:{control:"select",options:["sm","md","lg"],description:"Tamanho dos botões no rodapé"}}},c=e=>({components:{Drawer:r,Button:i},setup(){const o=t(!1);return{args:e,isOpen:o}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Open Drawer</Button>
      <Drawer v-bind="args" v-model="isOpen">
        <p>Drawer content goes here. You can add any content you want.</p>
        <p style="margin-top: 16px; color: #6b7280;">
          This is a flexible container for side panels, forms, details, and more.
        </p>
      </Drawer>
    </div>
  `});c.args={title:"Drawer Title",placement:"right",size:"md",closable:!0,closeOnBackdrop:!0,closeOnEscape:!0};const f=()=>({components:{Drawer:r,Button:i},setup(){return{isOpen:t(!1)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Open Right Drawer</Button>
      <Drawer v-model="isOpen" title="Basic Drawer">
        <h3>Welcome to the drawer!</h3>
        <p style="margin-top: 16px; color: #6b7280;">
          This is a basic drawer with default settings. It slides in from the right side.
        </p>
      </Drawer>
    </div>
  `}),g=()=>({components:{Drawer:r,Button:i},setup(){const e=t(!1),o=t(!1),n=t(!1),a=t(!1);return{leftOpen:e,rightOpen:o,topOpen:n,bottomOpen:a}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Button @click="leftOpen = true">Left Drawer</Button>
        <Button @click="rightOpen = true">Right Drawer</Button>
        <Button @click="topOpen = true">Top Drawer</Button>
        <Button @click="bottomOpen = true">Bottom Drawer</Button>
      </div>

      <Drawer v-model="leftOpen" title="Left Drawer" placement="left">
        <p>This drawer slides in from the left side.</p>
      </Drawer>

      <Drawer v-model="rightOpen" title="Right Drawer" placement="right">
        <p>This drawer slides in from the right side.</p>
      </Drawer>

      <Drawer v-model="topOpen" title="Top Drawer" placement="top">
        <p>This drawer slides in from the top.</p>
      </Drawer>

      <Drawer v-model="bottomOpen" title="Bottom Drawer" placement="bottom">
        <p>This drawer slides in from the bottom.</p>
      </Drawer>
    </div>
  `}),y=()=>({components:{Drawer:r,Button:i},setup(){const e=t(!1),o=t(!1),n=t(!1),a=t(!1);return{smallOpen:e,mediumOpen:o,largeOpen:n,fullOpen:a}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Button @click="smallOpen = true">Small (320px)</Button>
        <Button @click="mediumOpen = true">Medium (480px)</Button>
        <Button @click="largeOpen = true">Large (640px)</Button>
        <Button @click="fullOpen = true">Full Width</Button>
      </div>

      <Drawer v-model="smallOpen" title="Small Drawer" size="sm">
        <p>This is a small drawer (320px wide).</p>
      </Drawer>

      <Drawer v-model="mediumOpen" title="Medium Drawer" size="md">
        <p>This is a medium drawer (480px wide).</p>
      </Drawer>

      <Drawer v-model="largeOpen" title="Large Drawer" size="lg">
        <p>This is a large drawer (640px wide).</p>
      </Drawer>

      <Drawer v-model="fullOpen" title="Full Width Drawer" size="full">
        <p>This drawer takes the full viewport width.</p>
      </Drawer>
    </div>
  `}),x=()=>({components:{Drawer:r,Button:i},setup(){const e=t(!1);return{isOpen:e,handleSave:()=>{console.log("Saved!"),e.value=!1},handleCancel:()=>{e.value=!1}}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Open Form Drawer</Button>
      <Drawer v-model="isOpen" title="Edit Profile">
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <p style="color: #6b7280;">Update your profile information below.</p>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Name</label>
            <input type="text" value="John Doe" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 4px; font-family: Poppins;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Email</label>
            <input type="email" value="john@example.com" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 4px; font-family: Poppins;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Bio</label>
            <textarea rows="4" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 4px; font-family: Poppins; resize: vertical;">Product designer and developer.</textarea>
          </div>
        </div>
        <template #footer>
          <div style="display: flex; justify-content: flex-end; gap: 12px;">
            <Button variant="secondary" @click="handleCancel">Cancel</Button>
            <Button variant="primary" @click="handleSave">Save Changes</Button>
          </div>
        </template>
      </Drawer>
    </div>
  `}),h=()=>({components:{Drawer:r,Button:i},setup(){return{isOpen:t(!1)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">View Product Details</Button>
      <Drawer v-model="isOpen" title="Product Details" size="md">
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div style="background: #f3f4f6; border-radius: 8px; height: 200px; display: flex; align-items: center; justify-content: center; color: #9ca3af;">
            Product PhImage
          </div>

          <div>
            <h3 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 600;">Wireless Headphones</h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">Premium noise-canceling headphones</p>
          </div>

          <div>
            <p style="margin: 0 0 4px 0; font-size: 28px; font-weight: 700; color: #0942a1;">$299.99</p>
            <p style="margin: 0; color: #059669; font-size: 14px;">In Stock</p>
          </div>

          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Features</h4>
            <ul style="margin: 0; padding-left: 20px; color: #6b7280; line-height: 1.8;">
              <li>Active Noise Cancellation</li>
              <li>30-hour battery life</li>
              <li>Premium audio quality</li>
              <li>Comfortable over-ear design</li>
              <li>Bluetooth 5.0 connectivity</li>
            </ul>
          </div>
        </div>
        <template #footer>
          <div style="display: flex; gap: 12px;">
            <Button variant="secondary" style="flex: 1;">Add to Wishlist</Button>
            <Button variant="primary" style="flex: 1;">Add to Cart</Button>
          </div>
        </template>
      </Drawer>
    </div>
  `}),v=()=>({components:{Drawer:r,Button:i},setup(){return{isOpen:t(!1),notifications:[{id:1,title:"New message",message:"You have a new message from Sarah",time:"5 min ago",unread:!0},{id:2,title:"Update available",message:"Version 2.0 is now available",time:"1 hour ago",unread:!0},{id:3,title:"Task completed",message:"Your export is ready to download",time:"2 hours ago",unread:!1},{id:4,title:"Meeting reminder",message:"Team meeting starts in 30 minutes",time:"3 hours ago",unread:!1}]}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">View Notifications</Button>
      <Drawer v-model="isOpen" title="Notifications" placement="right" size="sm">
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div
            v-for="notif in notifications"
            :key="notif.id"
            style="padding: 16px; background: #f9fafb; border-radius: 8px; border-left: 3px solid;"
            :style="{ borderLeftColor: notif.unread ? '#0942a1' : 'transparent' }"
          >
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 4px;">
              <h4 style="margin: 0; font-size: 14px; font-weight: 600;">{{ notif.title }}</h4>
              <span v-if="notif.unread" style="width: 8px; height: 8px; background: #0942a1; border-radius: 50%;"></span>
            </div>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">{{ notif.message }}</p>
            <p style="margin: 0; color: #9ca3af; font-size: 12px;">{{ notif.time }}</p>
          </div>
        </div>
      </Drawer>
    </div>
  `}),b=()=>({components:{Drawer:r,Button:i},setup(){return{isOpen:t(!1)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Open Settings</Button>
      <Drawer v-model="isOpen" title="Settings" size="md">
        <div style="display: flex; flex-direction: column; gap: 32px;">
          <div>
            <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Appearance</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <input type="checkbox" checked style="width: 18px; height: 18px;" />
                <div>
                  <div style="font-weight: 500;">Dark Mode</div>
                  <div style="font-size: 14px; color: #6b7280;">Use dark theme across the app</div>
                </div>
              </label>
              <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <div>
                  <div style="font-weight: 500;">Compact Mode</div>
                  <div style="font-size: 14px; color: #6b7280;">Reduce spacing for more density</div>
                </div>
              </label>
            </div>
          </div>

          <div>
            <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Notifications</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <input type="checkbox" checked style="width: 18px; height: 18px;" />
                <div>
                  <div style="font-weight: 500;">Email Notifications</div>
                  <div style="font-size: 14px; color: #6b7280;">Receive updates via email</div>
                </div>
              </label>
              <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <input type="checkbox" checked style="width: 18px; height: 18px;" />
                <div>
                  <div style="font-weight: 500;">Push Notifications</div>
                  <div style="font-size: 14px; color: #6b7280;">Receive browser notifications</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  `}),w=()=>({components:{Drawer:r,Button:i},setup(){const e=t(!1);return{isOpen:e,handleClear:()=>{console.log("Limpar clicked")},handleCancel:()=>{console.log("Cancelar clicked"),e.value=!1},handleApply:()=>{console.log("Aplicar filtros clicked"),e.value=!1}}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Abrir Filtros</Button>
      <Drawer
        v-model="isOpen"
        title="Filtros"
        :showTertiaryButton="true"
        tertiaryButtonLabel="Limpar"
        :showSecondaryButton="true"
        secondaryButtonLabel="Cancelar"
        :showPrimaryButton="true"
        primaryButtonLabel="Aplicar filtros"
        @tertiary-click="handleClear"
        @secondary-click="handleCancel"
        @primary-click="handleApply"
      >
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Situação</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Em resposta</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Respondido</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Em validação</span>
              </label>
            </div>
          </div>

          <div>
            <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Temas materiais</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Emissões GEE</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Gestão hídrica</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Diversidade e Inclusão</span>
              </label>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  `}),B=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Close button hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Header/footer border</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Title</td></tr>
            <tr><td style="padding: 8px 0;"><code>rgba(0, 0, 0, 0.5)</code></td><td style="text-align: right;">Backdrop</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xl</code></td><td style="text-align: right;">20px (title)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-tight</code></td><td style="text-align: right;">1.25</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">24px (header/footer vertical)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xl</code></td><td style="text-align: right;">32px (padding)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects & Layout</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>box-shadow</code></td><td style="text-align: right;">Elevation</td></tr>
            <tr><td style="padding: 8px 0;"><code>backdrop-filter</code></td><td style="text-align: right;">Blur(2px)</td></tr>
            <tr><td style="padding: 8px 0;"><code>z-index: 1000/1001</code></td><td style="text-align: right;">Overlay layers</td></tr>
            <tr><td style="padding: 8px 0;"><code>transition: 0.3s</code></td><td style="text-align: right;">Slide animation</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Right Placement:</strong> Use para formulários, detalhes e configurações</li>
          <li><strong>Left Placement:</strong> Use para navegação secundária e filtros</li>
          <li><strong>Top/Bottom:</strong> Use para notificações e mensagens temporárias</li>
          <li><strong>Size SM:</strong> Use para quick actions e notificações (320px)</li>
          <li><strong>Size MD:</strong> Use para formulários simples e detalhes (480px)</li>
          <li><strong>Size LG:</strong> Use para formulários complexos e wizards (640px)</li>
          <li><strong>Size Full:</strong> Use para experiências imersivas e editores</li>
          <li><strong>Footer:</strong> Use para ações principais (salvar, cancelar, etc.)</li>
          <li>Sempre forneça título claro e descritivo</li>
          <li>Use closeOnBackdrop para UX melhor (padrão: true)</li>
          <li>Organize conteúdo com espaçamento adequado</li>
        </ul>
      </div>
    </div>
  `});var E,L,U;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    Drawer,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      args,
      isOpen
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Open Drawer</Button>
      <Drawer v-bind="args" v-model="isOpen">
        <p>Drawer content goes here. You can add any content you want.</p>
        <p style="margin-top: 16px; color: #6b7280;">
          This is a flexible container for side panels, forms, details, and more.
        </p>
      </Drawer>
    </div>
  \`
})`,...(U=(L=c.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var F,A,N;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`() => ({
  components: {
    Drawer,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Open Right Drawer</Button>
      <Drawer v-model="isOpen" title="Basic Drawer">
        <h3>Welcome to the drawer!</h3>
        <p style="margin-top: 16px; color: #6b7280;">
          This is a basic drawer with default settings. It slides in from the right side.
        </p>
      </Drawer>
    </div>
  \`
})`,...(N=(A=f.parameters)==null?void 0:A.docs)==null?void 0:N.source}}};var R,M,V;g.parameters={...g.parameters,docs:{...(R=g.parameters)==null?void 0:R.docs,source:{originalSource:`() => ({
  components: {
    Drawer,
    Button
  },
  setup() {
    const leftOpen = ref(false);
    const rightOpen = ref(false);
    const topOpen = ref(false);
    const bottomOpen = ref(false);
    return {
      leftOpen,
      rightOpen,
      topOpen,
      bottomOpen
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Button @click="leftOpen = true">Left Drawer</Button>
        <Button @click="rightOpen = true">Right Drawer</Button>
        <Button @click="topOpen = true">Top Drawer</Button>
        <Button @click="bottomOpen = true">Bottom Drawer</Button>
      </div>

      <Drawer v-model="leftOpen" title="Left Drawer" placement="left">
        <p>This drawer slides in from the left side.</p>
      </Drawer>

      <Drawer v-model="rightOpen" title="Right Drawer" placement="right">
        <p>This drawer slides in from the right side.</p>
      </Drawer>

      <Drawer v-model="topOpen" title="Top Drawer" placement="top">
        <p>This drawer slides in from the top.</p>
      </Drawer>

      <Drawer v-model="bottomOpen" title="Bottom Drawer" placement="bottom">
        <p>This drawer slides in from the bottom.</p>
      </Drawer>
    </div>
  \`
})`,...(V=(M=g.parameters)==null?void 0:M.docs)==null?void 0:V.source}}};var W,I,$;y.parameters={...y.parameters,docs:{...(W=y.parameters)==null?void 0:W.docs,source:{originalSource:`() => ({
  components: {
    Drawer,
    Button
  },
  setup() {
    const smallOpen = ref(false);
    const mediumOpen = ref(false);
    const largeOpen = ref(false);
    const fullOpen = ref(false);
    return {
      smallOpen,
      mediumOpen,
      largeOpen,
      fullOpen
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Button @click="smallOpen = true">Small (320px)</Button>
        <Button @click="mediumOpen = true">Medium (480px)</Button>
        <Button @click="largeOpen = true">Large (640px)</Button>
        <Button @click="fullOpen = true">Full Width</Button>
      </div>

      <Drawer v-model="smallOpen" title="Small Drawer" size="sm">
        <p>This is a small drawer (320px wide).</p>
      </Drawer>

      <Drawer v-model="mediumOpen" title="Medium Drawer" size="md">
        <p>This is a medium drawer (480px wide).</p>
      </Drawer>

      <Drawer v-model="largeOpen" title="Large Drawer" size="lg">
        <p>This is a large drawer (640px wide).</p>
      </Drawer>

      <Drawer v-model="fullOpen" title="Full Width Drawer" size="full">
        <p>This drawer takes the full viewport width.</p>
      </Drawer>
    </div>
  \`
})`,...($=(I=y.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var j,_,q;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`() => ({
  components: {
    Drawer,
    Button
  },
  setup() {
    const isOpen = ref(false);
    const handleSave = () => {
      console.log('Saved!');
      isOpen.value = false;
    };
    const handleCancel = () => {
      isOpen.value = false;
    };
    return {
      isOpen,
      handleSave,
      handleCancel
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Open Form Drawer</Button>
      <Drawer v-model="isOpen" title="Edit Profile">
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <p style="color: #6b7280;">Update your profile information below.</p>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Name</label>
            <input type="text" value="John Doe" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 4px; font-family: Poppins;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Email</label>
            <input type="email" value="john@example.com" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 4px; font-family: Poppins;" />
          </div>
          <div>
            <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">Bio</label>
            <textarea rows="4" style="width: 100%; padding: 10px; border: 1px solid #d1d5db; border-radius: 4px; font-family: Poppins; resize: vertical;">Product designer and developer.</textarea>
          </div>
        </div>
        <template #footer>
          <div style="display: flex; justify-content: flex-end; gap: 12px;">
            <Button variant="secondary" @click="handleCancel">Cancel</Button>
            <Button variant="primary" @click="handleSave">Save Changes</Button>
          </div>
        </template>
      </Drawer>
    </div>
  \`
})`,...(q=(_=x.parameters)==null?void 0:_.docs)==null?void 0:q.source}}};var G,Y,H;h.parameters={...h.parameters,docs:{...(G=h.parameters)==null?void 0:G.docs,source:{originalSource:`() => ({
  components: {
    Drawer,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">View Product Details</Button>
      <Drawer v-model="isOpen" title="Product Details" size="md">
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div style="background: #f3f4f6; border-radius: 8px; height: 200px; display: flex; align-items: center; justify-content: center; color: #9ca3af;">
            Product PhImage
          </div>

          <div>
            <h3 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 600;">Wireless Headphones</h3>
            <p style="margin: 0; color: #6b7280; font-size: 14px;">Premium noise-canceling headphones</p>
          </div>

          <div>
            <p style="margin: 0 0 4px 0; font-size: 28px; font-weight: 700; color: #0942a1;">$299.99</p>
            <p style="margin: 0; color: #059669; font-size: 14px;">In Stock</p>
          </div>

          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 16px; font-weight: 600;">Features</h4>
            <ul style="margin: 0; padding-left: 20px; color: #6b7280; line-height: 1.8;">
              <li>Active Noise Cancellation</li>
              <li>30-hour battery life</li>
              <li>Premium audio quality</li>
              <li>Comfortable over-ear design</li>
              <li>Bluetooth 5.0 connectivity</li>
            </ul>
          </div>
        </div>
        <template #footer>
          <div style="display: flex; gap: 12px;">
            <Button variant="secondary" style="flex: 1;">Add to Wishlist</Button>
            <Button variant="primary" style="flex: 1;">Add to Cart</Button>
          </div>
        </template>
      </Drawer>
    </div>
  \`
})`,...(H=(Y=h.parameters)==null?void 0:Y.docs)==null?void 0:H.source}}};var J,X,K;v.parameters={...v.parameters,docs:{...(J=v.parameters)==null?void 0:J.docs,source:{originalSource:`() => ({
  components: {
    Drawer,
    Button
  },
  setup() {
    const isOpen = ref(false);
    const notifications = [{
      id: 1,
      title: 'New message',
      message: 'You have a new message from Sarah',
      time: '5 min ago',
      unread: true
    }, {
      id: 2,
      title: 'Update available',
      message: 'Version 2.0 is now available',
      time: '1 hour ago',
      unread: true
    }, {
      id: 3,
      title: 'Task completed',
      message: 'Your export is ready to download',
      time: '2 hours ago',
      unread: false
    }, {
      id: 4,
      title: 'Meeting reminder',
      message: 'Team meeting starts in 30 minutes',
      time: '3 hours ago',
      unread: false
    }];
    return {
      isOpen,
      notifications
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">View Notifications</Button>
      <Drawer v-model="isOpen" title="Notifications" placement="right" size="sm">
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div
            v-for="notif in notifications"
            :key="notif.id"
            style="padding: 16px; background: #f9fafb; border-radius: 8px; border-left: 3px solid;"
            :style="{ borderLeftColor: notif.unread ? '#0942a1' : 'transparent' }"
          >
            <div style="display: flex; justify-content: space-between; align-items: start; margin-bottom: 4px;">
              <h4 style="margin: 0; font-size: 14px; font-weight: 600;">{{ notif.title }}</h4>
              <span v-if="notif.unread" style="width: 8px; height: 8px; background: #0942a1; border-radius: 50%;"></span>
            </div>
            <p style="margin: 0 0 8px 0; color: #6b7280; font-size: 14px;">{{ notif.message }}</p>
            <p style="margin: 0; color: #9ca3af; font-size: 12px;">{{ notif.time }}</p>
          </div>
        </div>
      </Drawer>
    </div>
  \`
})`,...(K=(X=v.parameters)==null?void 0:X.docs)==null?void 0:K.source}}};var Q,Z,ee;b.parameters={...b.parameters,docs:{...(Q=b.parameters)==null?void 0:Q.docs,source:{originalSource:`() => ({
  components: {
    Drawer,
    Button
  },
  setup() {
    const isOpen = ref(false);
    return {
      isOpen
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Open Settings</Button>
      <Drawer v-model="isOpen" title="Settings" size="md">
        <div style="display: flex; flex-direction: column; gap: 32px;">
          <div>
            <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Appearance</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <input type="checkbox" checked style="width: 18px; height: 18px;" />
                <div>
                  <div style="font-weight: 500;">Dark Mode</div>
                  <div style="font-size: 14px; color: #6b7280;">Use dark theme across the app</div>
                </div>
              </label>
              <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <div>
                  <div style="font-weight: 500;">Compact Mode</div>
                  <div style="font-size: 14px; color: #6b7280;">Reduce spacing for more density</div>
                </div>
              </label>
            </div>
          </div>

          <div>
            <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Notifications</h3>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <input type="checkbox" checked style="width: 18px; height: 18px;" />
                <div>
                  <div style="font-weight: 500;">Email Notifications</div>
                  <div style="font-size: 14px; color: #6b7280;">Receive updates via email</div>
                </div>
              </label>
              <label style="display: flex; align-items: center; gap: 12px; cursor: pointer;">
                <input type="checkbox" checked style="width: 18px; height: 18px;" />
                <div>
                  <div style="font-weight: 500;">Push Notifications</div>
                  <div style="font-size: 14px; color: #6b7280;">Receive browser notifications</div>
                </div>
              </label>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  \`
})`,...(ee=(Z=b.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ne,ie;w.parameters={...w.parameters,docs:{...(te=w.parameters)==null?void 0:te.docs,source:{originalSource:`() => ({
  components: {
    Drawer,
    Button
  },
  setup() {
    const isOpen = ref(false);
    const handleClear = () => {
      console.log('Limpar clicked');
    };
    const handleCancel = () => {
      console.log('Cancelar clicked');
      isOpen.value = false;
    };
    const handleApply = () => {
      console.log('Aplicar filtros clicked');
      isOpen.value = false;
    };
    return {
      isOpen,
      handleClear,
      handleCancel,
      handleApply
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Abrir Filtros</Button>
      <Drawer
        v-model="isOpen"
        title="Filtros"
        :showTertiaryButton="true"
        tertiaryButtonLabel="Limpar"
        :showSecondaryButton="true"
        secondaryButtonLabel="Cancelar"
        :showPrimaryButton="true"
        primaryButtonLabel="Aplicar filtros"
        @tertiary-click="handleClear"
        @secondary-click="handleCancel"
        @primary-click="handleApply"
      >
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <div>
            <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Situação</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Em resposta</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Respondido</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Em validação</span>
              </label>
            </div>
          </div>

          <div>
            <h3 style="margin: 0 0 16px 0; font-size: 16px; font-weight: 600;">Temas materiais</h3>
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Emissões GEE</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Gestão hídrica</span>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; cursor: pointer;">
                <input type="checkbox" style="width: 18px; height: 18px;" />
                <span>Diversidade e Inclusão</span>
              </label>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  \`
})`,...(ie=(ne=w.parameters)==null?void 0:ne.docs)==null?void 0:ie.source}}};var ae,oe,re;B.parameters={...B.parameters,docs:{...(ae=B.parameters)==null?void 0:ae.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Close button hover</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">Header/footer border</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Title</td></tr>
            <tr><td style="padding: 8px 0;"><code>rgba(0, 0, 0, 0.5)</code></td><td style="text-align: right;">Backdrop</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xl</code></td><td style="text-align: right;">20px (title)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-line-height-tight</code></td><td style="text-align: right;">1.25</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">24px (header/footer vertical)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xl</code></td><td style="text-align: right;">32px (padding)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects & Layout</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>box-shadow</code></td><td style="text-align: right;">Elevation</td></tr>
            <tr><td style="padding: 8px 0;"><code>backdrop-filter</code></td><td style="text-align: right;">Blur(2px)</td></tr>
            <tr><td style="padding: 8px 0;"><code>z-index: 1000/1001</code></td><td style="text-align: right;">Overlay layers</td></tr>
            <tr><td style="padding: 8px 0;"><code>transition: 0.3s</code></td><td style="text-align: right;">Slide animation</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Right Placement:</strong> Use para formulários, detalhes e configurações</li>
          <li><strong>Left Placement:</strong> Use para navegação secundária e filtros</li>
          <li><strong>Top/Bottom:</strong> Use para notificações e mensagens temporárias</li>
          <li><strong>Size SM:</strong> Use para quick actions e notificações (320px)</li>
          <li><strong>Size MD:</strong> Use para formulários simples e detalhes (480px)</li>
          <li><strong>Size LG:</strong> Use para formulários complexos e wizards (640px)</li>
          <li><strong>Size Full:</strong> Use para experiências imersivas e editores</li>
          <li><strong>Footer:</strong> Use para ações principais (salvar, cancelar, etc.)</li>
          <li>Sempre forneça título claro e descritivo</li>
          <li>Use closeOnBackdrop para UX melhor (padrão: true)</li>
          <li>Organize conteúdo com espaçamento adequado</li>
        </ul>
      </div>
    </div>
  \`
})`,...(re=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:re.source}}};const Me=["Playground","BasicUsage","Placements","Sizes","WithFooter","ProductDetails","NotificationsPanel","SettingsPanel","WithActionButtons","DesignTokens"];export{f as BasicUsage,B as DesignTokens,v as NotificationsPanel,g as Placements,c as Playground,h as ProductDetails,b as SettingsPanel,y as Sizes,w as WithActionButtons,x as WithFooter,Me as __namedExportsOrder,Re as default};
