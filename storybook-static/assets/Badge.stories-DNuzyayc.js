import{B as x}from"./Badge-CJwoGRhK.js";import"./vue.esm-bundler-cjlVRrb_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const oe={title:"Scuba/Badge",component:x,tags:["autodocs"],argTypes:{variant:{control:"select",options:["neutral","primary","success","warning","error","info"],description:"Variante visual do badge"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do badge"},label:{control:"text",description:"Texto do badge"},rounded:{control:"boolean",description:"Badge arredondado (pill shape)"},removable:{control:"boolean",description:"Permite remover o badge"},iconLeft:{control:"text",description:"Ícone esquerda (ex: ph-star)"},iconRight:{control:"text",description:"Ícone direita (ex: ph-arrow-right)"}}},e=b=>({components:{Badge:x},setup(){return{args:b}},template:'<Badge v-bind="args" />'}),t=e.bind({});t.args={variant:"primary",size:"md",label:"Badge",iconLeft:"ph-star"};const a=e.bind({});a.args={variant:"neutral",label:"Neutral"};const n=e.bind({});n.args={variant:"primary",label:"Primary"};const r=e.bind({});r.args={variant:"success",label:"Success",iconLeft:"ph-check-circle"};const d=e.bind({});d.args={variant:"warning",label:"Warning",iconLeft:"ph-warning"};const i=e.bind({});i.args={variant:"error",label:"Error",iconLeft:"ph-x-circle"};const s=e.bind({});s.args={variant:"info",label:"Info",iconLeft:"ph-info"};const o=e.bind({});o.args={size:"sm",label:"Small",variant:"primary"};const l=e.bind({});l.args={size:"md",label:"Medium",variant:"primary"};const p=e.bind({});p.args={size:"lg",label:"Large",variant:"primary"};const g=e.bind({});g.args={label:"Rounded Badge",variant:"primary",rounded:!0};const c=()=>({components:{Badge:x},setup(){return{handleRemove:()=>{alert("Badge removed!")}}},template:'<Badge label="Removable" variant="primary" removable @remove="handleRemove" />'}),m=()=>({components:{Badge:x},template:`
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
  `}),y=()=>({template:`
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
  `});var h,u,v;t.parameters={...t.parameters,docs:{...(h=t.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(v=(u=t.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var f,B,z;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(z=(B=a.parameters)==null?void 0:B.docs)==null?void 0:z.source}}};var w,S,L;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(L=(S=n.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var R,P,T;r.parameters={...r.parameters,docs:{...(R=r.parameters)==null?void 0:R.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(T=(P=r.parameters)==null?void 0:P.docs)==null?void 0:T.source}}};var k,I,E;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(E=(I=d.parameters)==null?void 0:I.docs)==null?void 0:E.source}}};var W,D,M;i.parameters={...i.parameters,docs:{...(W=i.parameters)==null?void 0:W.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(M=(D=i.parameters)==null?void 0:D.docs)==null?void 0:M.source}}};var N,V,_;s.parameters={...s.parameters,docs:{...(N=s.parameters)==null?void 0:N.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(_=(V=s.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var A,C,U;o.parameters={...o.parameters,docs:{...(A=o.parameters)==null?void 0:A.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(U=(C=o.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var q,O,j;l.parameters={...l.parameters,docs:{...(q=l.parameters)==null?void 0:q.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(j=(O=l.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var F,G,H;p.parameters={...p.parameters,docs:{...(F=p.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(H=(G=p.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,K,Q;g.parameters={...g.parameters,docs:{...(J=g.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    Badge
  },
  setup() {
    return {
      args
    };
  },
  template: '<Badge v-bind="args" />'
})`,...(Q=(K=g.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Y,Z;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`() => ({
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
})`,...(Z=(Y=c.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var $,ee,te;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`() => ({
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
})`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,re;y.parameters={...y.parameters,docs:{...(ae=y.parameters)==null?void 0:ae.docs,source:{originalSource:`() => ({
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
})`,...(re=(ne=y.parameters)==null?void 0:ne.docs)==null?void 0:re.source}}};const le=["Playground","Neutral","Primary","Success","Warning","Error","Info","Small","Medium","Large","Rounded","Removable","AllVariants","DesignTokens"];export{m as AllVariants,y as DesignTokens,i as Error,s as Info,p as Large,l as Medium,a as Neutral,t as Playground,n as Primary,c as Removable,g as Rounded,o as Small,r as Success,d as Warning,le as __namedExportsOrder,oe as default};
