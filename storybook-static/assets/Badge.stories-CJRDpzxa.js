import{c as x,a as r,b as h,u as f,r as ve,e as Be,o as d,h as ze,t as we}from"./vue.esm-bundler-BXouRCJi.js";import{_ as Se}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Le={key:1,class:"scuba-badge__label"},Re=["aria-label"],Pe={__name:"Badge",props:{variant:{type:String,default:"neutral",validator:e=>["neutral","primary","success","warning","error","info"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},label:{type:String,default:""},iconLeft:{type:String,default:""},iconRight:{type:String,default:""},removable:{type:Boolean,default:!1},rounded:{type:Boolean,default:!1},removeAriaLabel:{type:String,default:"Remove"}},emits:["remove"],setup(e,{emit:me}){const n=e,ue=me,ye=x(()=>{const a=["scuba-badge"];return a.push("scuba-badge--"+n.variant),a.push("scuba-badge--"+n.size),n.rounded&&a.push("scuba-badge--rounded"),n.removable&&a.push("scuba-badge--removable"),a}),be=x(()=>n.iconLeft?"ph "+n.iconLeft+" scuba-badge__icon-left":""),xe=x(()=>n.iconRight?"ph "+n.iconRight+" scuba-badge__icon-right":""),he=x(()=>"scuba-badge__remove"),fe=a=>{ue("remove",a)};return(a,S)=>(d(),r("span",{class:f(ye.value)},[e.iconLeft?(d(),r("i",{key:0,class:f(be.value),"aria-hidden":"true"},null,2)):h("",!0),e.label||a.$slots.default?(d(),r("span",Le,[ve(a.$slots,"default",{},()=>[ze(we(e.label),1)],!0)])):h("",!0),e.iconRight?(d(),r("i",{key:2,class:f(xe.value),"aria-hidden":"true"},null,2)):h("",!0),e.removable?(d(),r("button",{key:3,type:"button",class:f(he.value),onClick:fe,"aria-label":e.removeAriaLabel},[...S[0]||(S[0]=[Be("i",{class:"ph ph-x"},null,-1)])],10,Re)):h("",!0)],2))}},w=Se(Pe,[["__scopeId","data-v-29998bbd"]]),Ie={title:"Scuba/Badge",component:w,tags:["autodocs"],argTypes:{variant:{control:"select",options:["neutral","primary","success","warning","error","info"],description:"Variante visual do badge"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do badge"},label:{control:"text",description:"Texto do badge"},rounded:{control:"boolean",description:"Badge arredondado (pill shape)"},removable:{control:"boolean",description:"Permite remover o badge"},iconLeft:{control:"text",description:"Ícone esquerda (ex: ph-star)"},iconRight:{control:"text",description:"Ícone direita (ex: ph-arrow-right)"}}},t=e=>({components:{Badge:w},setup(){return{args:e}},template:'<Badge v-bind="args" />'}),s=t.bind({});s.args={variant:"primary",size:"md",label:"Badge",iconLeft:"ph-star"};const o=t.bind({});o.args={variant:"neutral",label:"Neutral"};const i=t.bind({});i.args={variant:"primary",label:"Primary"};const l=t.bind({});l.args={variant:"success",label:"Success",iconLeft:"ph-check-circle"};const p=t.bind({});p.args={variant:"warning",label:"Warning",iconLeft:"ph-warning"};const c=t.bind({});c.args={variant:"error",label:"Error",iconLeft:"ph-x-circle"};const g=t.bind({});g.args={variant:"info",label:"Info",iconLeft:"ph-info"};const m=t.bind({});m.args={size:"sm",label:"Small",variant:"primary"};const u=t.bind({});u.args={size:"md",label:"Medium",variant:"primary"};const y=t.bind({});y.args={size:"lg",label:"Large",variant:"primary"};const b=t.bind({});b.args={label:"Rounded Badge",variant:"primary",rounded:!0};const v=()=>({components:{Badge:w},setup(){return{handleRemove:()=>{alert("Badge removed!")}}},template:'<Badge label="Removable" variant="primary" removable @remove="handleRemove" />'}),B=()=>({components:{Badge:w},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Badge Variants</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px;">
        <Badge label="Neutral" variant="neutral" />
        <Badge label="Primary" variant="primary" />
        <Badge label="Success" variant="success" iconLeft="ph-check-circle" />
        <Badge label="PhWarning" variant="warning" iconLeft="ph-warning" />
        <Badge label="Error" variant="error" iconLeft="ph-x-circle" />
        <Badge label="PhInfo" variant="info" iconLeft="ph-info" />
      </div>

      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Badge Sizes</h2>

      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 32px;">
        <Badge label="Small" size="sm" variant="primary" />
        <Badge label="Medium" size="md" variant="primary" />
        <Badge label="Large" size="lg" variant="primary" />
      </div>

      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Badge Styles</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <Badge label="Default" variant="primary" />
        <Badge label="Rounded" variant="primary" rounded />
        <Badge label="With Icon" variant="primary" iconLeft="ph-star" />
        <Badge label="Removable" variant="primary" removable />
        <Badge label="Icon + Removable" variant="primary" iconLeft="ph-check" removable />
      </div>
    </div>
  `}),z=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Semantic Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-200</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-100</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-info-light</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--scale-400</code></td><td style="text-align: right;">20px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
          </table>
        </div>
      </div>
    </div>
  `});var L,R,P;s.parameters={...s.parameters,docs:{...(L=s.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(P=(R=s.parameters)==null?void 0:R.docs)==null?void 0:P.source}}};var k,T,I;o.parameters={...o.parameters,docs:{...(k=o.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(I=(T=o.parameters)==null?void 0:T.docs)==null?void 0:I.source}}};var _,C,E;i.parameters={...i.parameters,docs:{...(_=i.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(E=(C=i.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var N,V,D;l.parameters={...l.parameters,docs:{...(N=l.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(D=(V=l.parameters)==null?void 0:V.docs)==null?void 0:D.source}}};var W,M,A;p.parameters={...p.parameters,docs:{...(W=p.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(A=(M=p.parameters)==null?void 0:M.docs)==null?void 0:A.source}}};var U,$,q;c.parameters={...c.parameters,docs:{...(U=c.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(q=($=c.parameters)==null?void 0:$.docs)==null?void 0:q.source}}};var O,j,F;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(F=(j=g.parameters)==null?void 0:j.docs)==null?void 0:F.source}}};var G,H,J;m.parameters={...m.parameters,docs:{...(G=m.parameters)==null?void 0:G.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(J=(H=m.parameters)==null?void 0:H.docs)==null?void 0:J.source}}};var K,Q,X;u.parameters={...u.parameters,docs:{...(K=u.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(X=(Q=u.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(ee=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var te,ae,ne;b.parameters={...b.parameters,docs:{...(te=b.parameters)==null?void 0:te.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(ne=(ae=b.parameters)==null?void 0:ae.docs)==null?void 0:ne.source}}};var re,de,se;v.parameters={...v.parameters,docs:{...(re=v.parameters)==null?void 0:re.docs,source:{originalSource:`() => ({
  components: {
    Badge
  },
  setup() {
    const handleRemove = () => {
      alert('Badge removed!');
    };
    return {
      handleRemove
    };
  },
  template: '<Badge label="Removable" variant="primary" removable @remove="handleRemove" />'
})`,...(se=(de=v.parameters)==null?void 0:de.docs)==null?void 0:se.source}}};var oe,ie,le;B.parameters={...B.parameters,docs:{...(oe=B.parameters)==null?void 0:oe.docs,source:{originalSource:`() => ({
  components: {
    Badge
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Badge Variants</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-bottom: 32px;">
        <Badge label="Neutral" variant="neutral" />
        <Badge label="Primary" variant="primary" />
        <Badge label="Success" variant="success" iconLeft="ph-check-circle" />
        <Badge label="PhWarning" variant="warning" iconLeft="ph-warning" />
        <Badge label="Error" variant="error" iconLeft="ph-x-circle" />
        <Badge label="PhInfo" variant="info" iconLeft="ph-info" />
      </div>

      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Badge Sizes</h2>

      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 32px;">
        <Badge label="Small" size="sm" variant="primary" />
        <Badge label="Medium" size="md" variant="primary" />
        <Badge label="Large" size="lg" variant="primary" />
      </div>

      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Badge Styles</h2>

      <div style="display: flex; flex-wrap: wrap; gap: 12px;">
        <Badge label="Default" variant="primary" />
        <Badge label="Rounded" variant="primary" rounded />
        <Badge label="With Icon" variant="primary" iconLeft="ph-star" />
        <Badge label="Removable" variant="primary" removable />
        <Badge label="Icon + Removable" variant="primary" iconLeft="ph-check" removable />
      </div>
    </div>
  \`
})`,...(le=(ie=B.parameters)==null?void 0:ie.docs)==null?void 0:le.source}}};var pe,ce,ge;z.parameters={...z.parameters,docs:{...(pe=z.parameters)==null?void 0:pe.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Semantic Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-200</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-100</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-info-light</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--scale-400</code></td><td style="text-align: right;">20px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">64px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
          </table>
        </div>
      </div>
    </div>
  \`
})`,...(ge=(ce=z.parameters)==null?void 0:ce.docs)==null?void 0:ge.source}}};const _e=["Playground","Neutral","Primary","Success","Warning","Error","Info","Small","Medium","Large","Rounded","Removable","AllVariants","DesignTokens"];export{B as AllVariants,z as DesignTokens,c as Error,g as Info,y as Large,u as Medium,o as Neutral,s as Playground,i as Primary,v as Removable,b as Rounded,m as Small,l as Success,p as Warning,_e as __namedExportsOrder,Ie as default};
