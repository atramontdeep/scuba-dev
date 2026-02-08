import{c as a,a as p,b as B,u as c,e as x,t as E,o as m}from"./vue.esm-bundler-BXouRCJi.js";import{_ as N}from"./_plugin-vue_export-helper-DlAUqK2U.js";const I=["aria-label"],U=["stroke-width"],O=["stroke-width"],j={__name:"Spinner",props:{size:{type:String,default:"md",validator:t=>["xs","sm","md","lg","xl"].includes(t)},variant:{type:String,default:"primary",validator:t=>["primary","neutral","success","warning","error","info"].includes(t)},label:{type:String,default:""},ariaLabel:{type:String,default:"Loading"}},setup(t){const n=t,g=a(()=>({xs:"4",sm:"4",md:"3",lg:"3",xl:"2"})[n.size]||"3"),W=a(()=>{const e=["scuba-spinner-wrapper"];return n.label&&e.push("scuba-spinner-wrapper--with-label"),e}),D=a(()=>{const e=["scuba-spinner"];return e.push("scuba-spinner--"+n.size),e.push("scuba-spinner--"+n.variant),e}),A=a(()=>{const e=["scuba-spinner__label"];return e.push("scuba-spinner__label--"+n.size),e});return(e,q)=>(m(),p("div",{class:c(W.value),"aria-label":t.ariaLabel,role:"status"},[(m(),p("svg",{class:c(D.value),viewBox:"0 0 50 50"},[x("circle",{class:"scuba-spinner__track",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":g.value},null,8,U),x("circle",{class:"scuba-spinner__circle",cx:"25",cy:"25",r:"20",fill:"none","stroke-width":g.value},null,8,O)],2)),t.label?(m(),p("span",{key:0,class:c(A.value)},E(t.label),3)):B("",!0)],10,I))}},o=N(j,[["__scopeId","data-v-58859cef"]]),H={title:"Scuba/Spinner",component:o,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Tamanho do spinner"},variant:{control:"select",options:["primary","neutral","success","warning","error","info"],description:"Cor do spinner"},label:{control:"text",description:"Texto abaixo do spinner"}}},V=t=>({components:{Spinner:o},setup(){return{args:t}},template:'<Spinner v-bind="args" />'}),s=V.bind({});s.args={size:"md",variant:"primary"};const r=V.bind({});r.args={size:"md",variant:"primary",label:"Loading..."};const i=()=>({components:{Spinner:o},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Spinner Sizes</h2>
      <div style="display: flex; align-items: center; gap: 32px;">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </div>
    </div>
  `}),l=()=>({components:{Spinner:o},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Spinner Variants</h2>
      <div style="display: flex; gap: 32px; flex-wrap: wrap;">
        <Spinner variant="primary" label="Primary" />
        <Spinner variant="neutral" label="Neutral" />
        <Spinner variant="success" label="Success" />
        <Spinner variant="warning" label="PhWarning" />
        <Spinner variant="error" label="Error" />
        <Spinner variant="info" label="PhInfo" />
      </div>
    </div>
  `}),d=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizes</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--scale-300</code></td><td style="text-align: right;">16px (xs)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-400</code></td><td style="text-align: right;">20px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-800</code></td><td style="text-align: right;">48px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-1000</code></td><td style="text-align: right;">64px (xl)</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-normal</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-normal</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-normal</code></td></tr>
          </table>
        </div>
      </div>
    </div>
  `});var y,u,b;s.parameters={...s.parameters,docs:{...(y=s.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    Spinner
  },
  setup() {
    return {
      args
    };
  },
  template: '<Spinner v-bind="args" />'
})`,...(b=(u=s.parameters)==null?void 0:u.docs)==null?void 0:b.source}}};var v,h,f;r.parameters={...r.parameters,docs:{...(v=r.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    Spinner
  },
  setup() {
    return {
      args
    };
  },
  template: '<Spinner v-bind="args" />'
})`,...(f=(h=r.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};var S,z,w;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`() => ({
  components: {
    Spinner
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Spinner Sizes</h2>
      <div style="display: flex; align-items: center; gap: 32px;">
        <Spinner size="xs" />
        <Spinner size="sm" />
        <Spinner size="md" />
        <Spinner size="lg" />
        <Spinner size="xl" />
      </div>
    </div>
  \`
})`,...(w=(z=i.parameters)==null?void 0:z.docs)==null?void 0:w.source}}};var _,P,k;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`() => ({
  components: {
    Spinner
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Spinner Variants</h2>
      <div style="display: flex; gap: 32px; flex-wrap: wrap;">
        <Spinner variant="primary" label="Primary" />
        <Spinner variant="neutral" label="Neutral" />
        <Spinner variant="success" label="Success" />
        <Spinner variant="warning" label="PhWarning" />
        <Spinner variant="error" label="Error" />
        <Spinner variant="info" label="PhInfo" />
      </div>
    </div>
  \`
})`,...(k=(P=l.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var C,T,L;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizes</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--scale-300</code></td><td style="text-align: right;">16px (xs)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-400</code></td><td style="text-align: right;">20px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-800</code></td><td style="text-align: right;">48px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-1000</code></td><td style="text-align: right;">64px (xl)</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-normal</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-normal</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-normal</code></td></tr>
          </table>
        </div>
      </div>
    </div>
  \`
})`,...(L=(T=d.parameters)==null?void 0:T.docs)==null?void 0:L.source}}};const J=["Playground","WithLabel","AllSizes","AllVariants","DesignTokens"];export{i as AllSizes,l as AllVariants,d as DesignTokens,s as Playground,r as WithLabel,J as __namedExportsOrder,H as default};
