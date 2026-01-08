import{q as l,c as s,w as C,a as z,b as P,e as p,p as i,t as _,s as me,v as fe,o as w}from"./vue.esm-bundler-cjlVRrb_.js";import{_ as be}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ye={class:"scuba-toggle__container"},ue=["id","disabled","aria-label"],xe={__name:"Toggle",props:{modelValue:{type:Boolean,default:!1},label:{type:String,default:""},labelPosition:{type:String,default:"right",validator:e=>["left","right","none"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},disabled:{type:Boolean,default:!1},id:{type:String,default:null},ariaLabel:{type:String,default:""}},emits:["update:modelValue","change"],setup(e,{emit:o}){const n=e,r=o,a=l(n.modelValue),T=s(()=>n.id?n.id:"scuba-toggle-"+Math.random().toString(36).substr(2,9)),L=s(()=>a.value===!0),ae=s(()=>n.label&&n.labelPosition==="left"),oe=s(()=>n.label&&n.labelPosition==="right"),k=s(()=>"scuba-toggle__label"),ie=s(()=>{const t=["scuba-toggle"];return t.push("scuba-toggle--"+n.size),n.disabled&&t.push("scuba-toggle--disabled"),n.label||t.push("scuba-toggle--no-label"),t}),re=s(()=>{const t=["scuba-toggle__track"];return L.value?t.push("scuba-toggle__track--checked"):t.push("scuba-toggle__track--unchecked"),n.disabled&&t.push("scuba-toggle__track--disabled"),t}),pe=s(()=>{const t=["scuba-toggle__thumb"];return L.value&&t.push("scuba-toggle__thumb--checked"),t});C(()=>n.modelValue,t=>{a.value=t}),C(a,t=>{r("update:modelValue",t)});const ge=t=>{r("change",t)};return(t,S)=>(w(),z("label",{class:i(ie.value)},[ae.value?(w(),z("span",{key:0,class:i(k.value)},_(e.label),3)):P("",!0),p("div",ye,[me(p("input",{id:T.value,"onUpdate:modelValue":S[0]||(S[0]=ce=>a.value=ce),type:"checkbox",disabled:e.disabled,class:"scuba-toggle__input","aria-label":e.ariaLabel,onChange:ge},null,40,ue),[[fe,a.value]]),p("div",{class:i(re.value)},[p("div",{class:i(pe.value)},null,2)],2)]),oe.value?(w(),z("span",{key:1,class:i(k.value)},_(e.label),3)):P("",!0)],2))}},d=be(xe,[["__scopeId","data-v-c5d2c975"]]),Te={title:"Scuba/Toggle",component:d,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Tamanho do toggle"},labelPosition:{control:"select",options:["left","right","none"],description:"Posição do label"},label:{control:"text",description:"Texto do label"},disabled:{control:"boolean",description:"Estado desabilitado"}}},g=()=>({components:{Toggle:d},setup(){return{enabled:l(!0)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3 style="margin-bottom: 16px;">Status: {{ enabled ? 'Enabled' : 'Disabled' }}</h3>
      <Toggle v-model="enabled" label="Toggle me" />
    </div>
  `}),c=()=>({components:{Toggle:d},setup(){return{enabled:l(!1)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Enable notifications" />
    </div>
  `}),m=()=>({components:{Toggle:d},setup(){return{enabled:l(!0)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Small toggle" size="sm" />
    </div>
  `}),f=()=>({components:{Toggle:d},setup(){return{enabled:l(!0)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Medium toggle" size="md" />
    </div>
  `}),b=()=>({components:{Toggle:d},setup(){return{enabled:l(!0)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Large toggle" size="lg" />
    </div>
  `}),y=()=>({components:{Toggle:d},setup(){const e=l(!1),o=l(!0);return{enabled:e,enabledChecked:o}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Toggle v-model="enabled" label="Disabled (Off)" disabled />
        <Toggle v-model="enabledChecked" label="Disabled (On)" disabled />
      </div>
    </div>
  `}),u=()=>({components:{Toggle:d},setup(){return{enabled:l(!0)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Label on the left" labelPosition="left" />
    </div>
  `}),x=()=>({components:{Toggle:d},setup(){return{enabled:l(!0)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" ariaLabel="Toggle notifications" />
    </div>
  `}),v=()=>({components:{Toggle:d},setup(){const e=l(!1),o=l(!0),n=l(!1),r=l(!0),a=l(!1),T=l(!0);return{small:e,smallChecked:o,medium:n,mediumChecked:r,large:a,largeChecked:T}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Toggle Sizes & States</h2>

      <!-- Header -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 20px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">OFF</div>
        <div style="font-weight: 600; text-align: center;">ON</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SMALL -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">SMALL</div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="small" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="smallChecked" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle :modelValue="false" label="Label" size="sm" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="smallChecked" label="Label" size="sm" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 64px;" />
        </div>
      </div>

      <!-- MEDIUM -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">MEDIUM</div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="medium" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="mediumChecked" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle :modelValue="false" label="Label" size="md" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="mediumChecked" label="Label" size="md" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 64px;" />
        </div>
      </div>

      <!-- LARGE -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">LARGE</div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="large" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="largeChecked" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle :modelValue="false" label="Label" size="lg" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="largeChecked" label="Label" size="lg" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 64px;" />
        </div>
      </div>
    </div>
  `}),h=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-700</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px (sm height)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (md height)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-700</code></td><td style="text-align: right;">40px (sm width)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-800</code></td><td style="text-align: right;">48px (md width, lg height)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-1000</code></td><td style="text-align: right;">64px (lg width)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-full</code></td><td style="text-align: right;">9999px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-sm</code></td><td style="text-align: right;">Subtle shadow</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Nota</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          Toggle/Switch é usado para controles de on/off imediatos, enquanto Checkbox é usado para seleções que requerem confirmação.
        </p>
      </div>
    </div>
  `});var j,D,E;g.parameters={...g.parameters,docs:{...(j=g.parameters)==null?void 0:j.docs,source:{originalSource:`() => ({
  components: {
    Toggle
  },
  setup() {
    const enabled = ref(true);
    return {
      enabled
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3 style="margin-bottom: 16px;">Status: {{ enabled ? 'Enabled' : 'Disabled' }}</h3>
      <Toggle v-model="enabled" label="Toggle me" />
    </div>
  \`
})`,...(E=(D=g.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var M,V,A;c.parameters={...c.parameters,docs:{...(M=c.parameters)==null?void 0:M.docs,source:{originalSource:`() => ({
  components: {
    Toggle
  },
  setup() {
    const enabled = ref(false);
    return {
      enabled
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Enable notifications" />
    </div>
  \`
})`,...(A=(V=c.parameters)==null?void 0:V.docs)==null?void 0:A.source}}};var O,B,U;m.parameters={...m.parameters,docs:{...(O=m.parameters)==null?void 0:O.docs,source:{originalSource:`() => ({
  components: {
    Toggle
  },
  setup() {
    const enabled = ref(true);
    return {
      enabled
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Small toggle" size="sm" />
    </div>
  \`
})`,...(U=(B=m.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var I,N,q;f.parameters={...f.parameters,docs:{...(I=f.parameters)==null?void 0:I.docs,source:{originalSource:`() => ({
  components: {
    Toggle
  },
  setup() {
    const enabled = ref(true);
    return {
      enabled
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Medium toggle" size="md" />
    </div>
  \`
})`,...(q=(N=f.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};var F,R,G;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`() => ({
  components: {
    Toggle
  },
  setup() {
    const enabled = ref(true);
    return {
      enabled
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Large toggle" size="lg" />
    </div>
  \`
})`,...(G=(R=b.parameters)==null?void 0:R.docs)==null?void 0:G.source}}};var H,W,J;y.parameters={...y.parameters,docs:{...(H=y.parameters)==null?void 0:H.docs,source:{originalSource:`() => ({
  components: {
    Toggle
  },
  setup() {
    const enabled = ref(false);
    const enabledChecked = ref(true);
    return {
      enabled,
      enabledChecked
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Toggle v-model="enabled" label="Disabled (Off)" disabled />
        <Toggle v-model="enabledChecked" label="Disabled (On)" disabled />
      </div>
    </div>
  \`
})`,...(J=(W=y.parameters)==null?void 0:W.docs)==null?void 0:J.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`() => ({
  components: {
    Toggle
  },
  setup() {
    const enabled = ref(true);
    return {
      enabled
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" label="Label on the left" labelPosition="left" />
    </div>
  \`
})`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,$;x.parameters={...x.parameters,docs:{...(Y=x.parameters)==null?void 0:Y.docs,source:{originalSource:`() => ({
  components: {
    Toggle
  },
  setup() {
    const enabled = ref(true);
    return {
      enabled
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Toggle v-model="enabled" ariaLabel="Toggle notifications" />
    </div>
  \`
})`,...($=(Z=x.parameters)==null?void 0:Z.docs)==null?void 0:$.source}}};var ee,te,le;v.parameters={...v.parameters,docs:{...(ee=v.parameters)==null?void 0:ee.docs,source:{originalSource:`() => ({
  components: {
    Toggle
  },
  setup() {
    const small = ref(false);
    const smallChecked = ref(true);
    const medium = ref(false);
    const mediumChecked = ref(true);
    const large = ref(false);
    const largeChecked = ref(true);
    return {
      small,
      smallChecked,
      medium,
      mediumChecked,
      large,
      largeChecked
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Toggle Sizes & States</h2>

      <!-- Header -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 20px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">OFF</div>
        <div style="font-weight: 600; text-align: center;">ON</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SMALL -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">SMALL</div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="small" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="smallChecked" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle :modelValue="false" label="Label" size="sm" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="smallChecked" label="Label" size="sm" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 64px;" />
        </div>
      </div>

      <!-- MEDIUM -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">MEDIUM</div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="medium" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="mediumChecked" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle :modelValue="false" label="Label" size="md" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="mediumChecked" label="Label" size="md" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 64px;" />
        </div>
      </div>

      <!-- LARGE -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">LARGE</div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="large" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="largeChecked" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle :modelValue="false" label="Label" size="lg" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Toggle v-model="largeChecked" label="Label" size="lg" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 64px;" />
        </div>
      </div>
    </div>
  \`
})`,...(le=(te=v.parameters)==null?void 0:te.docs)==null?void 0:le.source}}};var ne,de,se;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-700</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px (sm height)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (md height)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-700</code></td><td style="text-align: right;">40px (sm width)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-800</code></td><td style="text-align: right;">48px (md width, lg height)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-1000</code></td><td style="text-align: right;">64px (lg width)</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-full</code></td><td style="text-align: right;">9999px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-sm</code></td><td style="text-align: right;">Subtle shadow</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Nota</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          Toggle/Switch é usado para controles de on/off imediatos, enquanto Checkbox é usado para seleções que requerem confirmação.
        </p>
      </div>
    </div>
  \`
})`,...(se=(de=h.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};const ze=["Playground","Default","Small","Medium","Large","Disabled","LabelLeft","NoLabel","AllSizesAndStates","DesignTokens"];export{v as AllSizesAndStates,c as Default,h as DesignTokens,y as Disabled,u as LabelLeft,b as Large,f as Medium,x as NoLabel,g as Playground,m as Small,ze as __namedExportsOrder,Te as default};
