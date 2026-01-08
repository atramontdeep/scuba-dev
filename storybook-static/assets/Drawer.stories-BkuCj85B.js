import{c as z,w as oe,B as ae,C as re,G as se,g as b,E as P,T as S,I as le,o as l,a as p,b as c,p as de,e as O,r as D,h as pe,t as ce,H as me,q as t}from"./vue.esm-bundler-cjlVRrb_.js";import{F as fe}from"./PhX.vue-AGWIzYYk.js";import{_ as ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as r}from"./Button-CsaQJ0tt.js";/* empty css                                                              *//* empty css                                                               */const ue=["aria-labelledby"],xe={class:"scuba-drawer__header"},ye=["id"],he={class:"scuba-drawer__body"},ve={key:0,class:"scuba-drawer__footer"},we={__name:"Drawer",props:{modelValue:{type:Boolean,default:!1},title:{type:String,default:""},placement:{type:String,default:"right",validator:e=>["left","right","top","bottom"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg","full"].includes(e)},closable:{type:Boolean,default:!0},closeOnBackdrop:{type:Boolean,default:!0},closeOnEscape:{type:Boolean,default:!0}},emits:["update:modelValue","close","open"],setup(e,{emit:i}){const n=e,s=i,B=z(()=>"drawer-title-"+Math.random().toString(36).substr(2,9)),ne=z(()=>["scuba-drawer",`scuba-drawer--${n.placement}`,`scuba-drawer--${n.size}`]),w=()=>{s("update:modelValue",!1),s("close")},ie=()=>{n.closeOnBackdrop&&w()},k=a=>{a.key==="Escape"&&n.modelValue&&n.closeOnEscape&&w()};return oe(()=>n.modelValue,a=>{a?(s("open"),document.body.style.overflow="hidden"):document.body.style.overflow=""}),ae(()=>{document.addEventListener("keydown",k)}),re(()=>{document.removeEventListener("keydown",k),document.body.style.overflow=""}),(a,be)=>(l(),se(le,{to:"body"},[b(S,{name:"scuba-drawer-backdrop"},{default:P(()=>[e.modelValue?(l(),p("div",{key:0,class:"scuba-drawer__backdrop",onClick:ie})):c("",!0)]),_:1}),b(S,{name:`scuba-drawer-${e.placement}`},{default:P(()=>[e.modelValue?(l(),p("div",{key:0,class:de(ne.value),role:"dialog","aria-modal":"true","aria-labelledby":B.value},[O("div",xe,[O("h2",{id:B.value,class:"scuba-drawer__title"},[D(a.$slots,"title",{},()=>[pe(ce(e.title),1)],!0)],8,ye),e.closable?(l(),p("button",{key:0,class:"scuba-drawer__close",onClick:w,"aria-label":"Close drawer"},[b(me(fe),{size:24,weight:"bold"})])):c("",!0)]),O("div",he,[D(a.$slots,"default",{},void 0,!0)]),a.$slots.footer?(l(),p("div",ve,[D(a.$slots,"footer",{},void 0,!0)])):c("",!0)],10,ue)):c("",!0)]),_:3},8,["name"])]))}},o=ge(we,[["__scopeId","data-v-a685d31a"]]),Se={title:"Scuba/Drawer",component:o,tags:["autodocs"],argTypes:{placement:{control:"select",options:["left","right","top","bottom"],description:"Posição do drawer"},size:{control:"select",options:["sm","md","lg","full"],description:"Tamanho do drawer"},closable:{control:"boolean",description:"Mostra botão de fechar"},closeOnBackdrop:{control:"boolean",description:"Fecha ao clicar fora"},closeOnEscape:{control:"boolean",description:"Fecha ao pressionar ESC"}}},d=e=>({components:{Drawer:o,Button:r},setup(){const i=t(!1);return{args:e,isOpen:i}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Open Drawer</Button>
      <Drawer v-bind="args" v-model="isOpen">
        <p>Drawer content goes here. You can add any content you want.</p>
        <p style="margin-top: 16px; color: #6b7280;">
          This is a flexible container for side panels, forms, details, and more.
        </p>
      </Drawer>
    </div>
  `});d.args={title:"Drawer Title",placement:"right",size:"md",closable:!0,closeOnBackdrop:!0,closeOnEscape:!0};const m=()=>({components:{Drawer:o,Button:r},setup(){return{isOpen:t(!1)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Button @click="isOpen = true">Open Right Drawer</Button>
      <Drawer v-model="isOpen" title="Basic Drawer">
        <h3>Welcome to the drawer!</h3>
        <p style="margin-top: 16px; color: #6b7280;">
          This is a basic drawer with default settings. It slides in from the right side.
        </p>
      </Drawer>
    </div>
  `}),f=()=>({components:{Drawer:o,Button:r},setup(){const e=t(!1),i=t(!1),n=t(!1),s=t(!1);return{leftOpen:e,rightOpen:i,topOpen:n,bottomOpen:s}},template:`
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
  `}),g=()=>({components:{Drawer:o,Button:r},setup(){const e=t(!1),i=t(!1),n=t(!1),s=t(!1);return{smallOpen:e,mediumOpen:i,largeOpen:n,fullOpen:s}},template:`
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
  `}),u=()=>({components:{Drawer:o,Button:r},setup(){const e=t(!1);return{isOpen:e,handleSave:()=>{console.log("Saved!"),e.value=!1},handleCancel:()=>{e.value=!1}}},template:`
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
  `}),x=()=>({components:{Drawer:o,Button:r},setup(){return{isOpen:t(!1)}},template:`
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
  `}),y=()=>({components:{Drawer:o,Button:r},setup(){return{isOpen:t(!1),notifications:[{id:1,title:"New message",message:"You have a new message from Sarah",time:"5 min ago",unread:!0},{id:2,title:"Update available",message:"Version 2.0 is now available",time:"1 hour ago",unread:!0},{id:3,title:"Task completed",message:"Your export is ready to download",time:"2 hours ago",unread:!1},{id:4,title:"Meeting reminder",message:"Team meeting starts in 30 minutes",time:"3 hours ago",unread:!1}]}},template:`
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
  `}),h=()=>({components:{Drawer:o,Button:r},setup(){return{isOpen:t(!1)}},template:`
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
  `}),v=()=>({template:`
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
  `});var T,E,C;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
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
})`,...(C=(E=d.parameters)==null?void 0:E.docs)==null?void 0:C.source}}};var U,_,F;m.parameters={...m.parameters,docs:{...(U=m.parameters)==null?void 0:U.docs,source:{originalSource:`() => ({
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
})`,...(F=(_=m.parameters)==null?void 0:_.docs)==null?void 0:F.source}}};var N,L,M;f.parameters={...f.parameters,docs:{...(N=f.parameters)==null?void 0:N.docs,source:{originalSource:`() => ({
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
})`,...(M=(L=f.parameters)==null?void 0:L.docs)==null?void 0:M.source}}};var V,R,W;g.parameters={...g.parameters,docs:{...(V=g.parameters)==null?void 0:V.docs,source:{originalSource:`() => ({
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
})`,...(W=(R=g.parameters)==null?void 0:R.docs)==null?void 0:W.source}}};var A,I,$;u.parameters={...u.parameters,docs:{...(A=u.parameters)==null?void 0:A.docs,source:{originalSource:`() => ({
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
})`,...($=(I=u.parameters)==null?void 0:I.docs)==null?void 0:$.source}}};var j,q,Y;x.parameters={...x.parameters,docs:{...(j=x.parameters)==null?void 0:j.docs,source:{originalSource:`() => ({
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
})`,...(Y=(q=x.parameters)==null?void 0:q.docs)==null?void 0:Y.source}}};var H,G,J;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`() => ({
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
})`,...(J=(G=y.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var X,K,Q;h.parameters={...h.parameters,docs:{...(X=h.parameters)==null?void 0:X.docs,source:{originalSource:`() => ({
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
})`,...(Q=(K=h.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var Z,ee,te;v.parameters={...v.parameters,docs:{...(Z=v.parameters)==null?void 0:Z.docs,source:{originalSource:`() => ({
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
})`,...(te=(ee=v.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};const Te=["Playground","BasicUsage","Placements","Sizes","WithFooter","ProductDetails","NotificationsPanel","SettingsPanel","DesignTokens"];export{m as BasicUsage,v as DesignTokens,y as NotificationsPanel,f as Placements,d as Playground,x as ProductDetails,h as SettingsPanel,g as Sizes,u as WithFooter,Te as __namedExportsOrder,Se as default};
