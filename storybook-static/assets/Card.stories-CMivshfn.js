import{c as q,a as d,b as y,e as G,r as x,u as J,o as n,t as K}from"./vue.esm-bundler-BXouRCJi.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as W}from"./Button-B2uSwTAf.js";const R={key:0,class:"scuba-card__header"},X={key:0,class:"scuba-card__title"},Z={class:"scuba-card__body"},ee={key:1,class:"scuba-card__footer"},te={__name:"Card",props:{header:{type:String,default:""},variant:{type:String,default:"default",validator:a=>["default","outlined","elevated"].includes(a)},padding:{type:String,default:"md",validator:a=>["none","sm","md","lg"].includes(a)},hoverable:{type:Boolean,default:!1}},setup(a){const h=a,Y=q(()=>{const e=["scuba-card"];return e.push("scuba-card--"+h.variant),e.push("scuba-card--padding-"+h.padding),h.hoverable&&e.push("scuba-card--hoverable"),e});return(e,ae)=>(n(),d("div",{class:J(Y.value)},[e.$slots.header||a.header?(n(),d("div",R,[x(e.$slots,"header",{},()=>[a.header?(n(),d("h3",X,K(a.header),1)):y("",!0)],!0)])):y("",!0),G("div",Z,[x(e.$slots,"default",{},void 0,!0)]),e.$slots.footer?(n(),d("div",ee,[x(e.$slots,"footer",{},void 0,!0)])):y("",!0)],2))}},t=Q(te,[["__scopeId","data-v-7b0085b6"]]),se={title:"Scuba/Card",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["default","outlined","elevated"],description:"Estilo visual do card"},padding:{control:"select",options:["none","sm","md","lg"],description:"Espaçamento interno"},header:{control:"text",description:"Texto do cabeçalho"},hoverable:{control:"boolean",description:"Efeito hover"}}},r=()=>({components:{Card:t,Button:W},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card header="Card Title">
        <p style="margin: 0;">This is the card content. You can put any content here.</p>
      </Card>
    </div>
  `}),s=()=>({components:{Card:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card header="Default Card">
        <p style="margin: 0;">This is a default card with standard border.</p>
      </Card>
    </div>
  `}),i=()=>({components:{Card:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card variant="outlined" header="Outlined Card">
        <p style="margin: 0;">This card has a thicker border for emphasis.</p>
      </Card>
    </div>
  `}),o=()=>({components:{Card:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card variant="elevated" header="Elevated Card">
        <p style="margin: 0;">This card has a shadow for depth.</p>
      </Card>
    </div>
  `}),p=()=>({components:{Card:t,Button:W},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card header="Card with Footer">
        <p style="margin: 0;">This card has a footer with actions.</p>
        <template #footer>
          <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <Button variant="text" label="Cancel" />
            <Button variant="solid" label="Save" />
          </div>
        </template>
      </Card>
    </div>
  `}),l=()=>({components:{Card:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card variant="elevated" header="Hoverable Card" hoverable>
        <p style="margin: 0;">Hover over this card to see the effect!</p>
      </Card>
    </div>
  `}),c=()=>({components:{Card:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card padding="none">
        <img src="https://picsum.photos/400/200" alt="Sample" style="width: 100%; display: block;" />
        <div style="padding: 24px;">
          <h3 style="margin: 0 0 8px 0;">PhImage Card</h3>
          <p style="margin: 0;">This card has no padding to accommodate a full-width image.</p>
        </div>
      </Card>
    </div>
  `}),m=()=>({components:{Card:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Card Padding Variants</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 800px;">
        <Card padding="sm" header="Small Padding">
          <p style="margin: 0;">Card with small padding</p>
        </Card>
        <Card padding="md" header="Medium Padding">
          <p style="margin: 0;">Card with medium padding</p>
        </Card>
        <Card padding="lg" header="Large Padding">
          <p style="margin: 0;">Card with large padding</p>
        </Card>
        <Card padding="none" header="No Padding">
          <div style="padding: 16px;">
            <p style="margin: 0;">Card with no padding (manual padding added to content)</p>
          </div>
        </Card>
      </div>
    </div>
  `}),g=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">40px (lg)</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Shadow</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-md</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-lg</code></td></tr>
          </table>
        </div>
      </div>
    </div>
  `});var f,u,v;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`() => ({
  components: {
    Card,
    Button
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card header="Card Title">
        <p style="margin: 0;">This is the card content. You can put any content here.</p>
      </Card>
    </div>
  \`
})`,...(v=(u=r.parameters)==null?void 0:u.docs)==null?void 0:v.source}}};var C,b,w;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => ({
  components: {
    Card
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card header="Default Card">
        <p style="margin: 0;">This is a default card with standard border.</p>
      </Card>
    </div>
  \`
})`,...(w=(b=s.parameters)==null?void 0:b.docs)==null?void 0:w.source}}};var P,S,T;i.parameters={...i.parameters,docs:{...(P=i.parameters)==null?void 0:P.docs,source:{originalSource:`() => ({
  components: {
    Card
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card variant="outlined" header="Outlined Card">
        <p style="margin: 0;">This card has a thicker border for emphasis.</p>
      </Card>
    </div>
  \`
})`,...(T=(S=i.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var _,B,k;o.parameters={...o.parameters,docs:{...(_=o.parameters)==null?void 0:_.docs,source:{originalSource:`() => ({
  components: {
    Card
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card variant="elevated" header="Elevated Card">
        <p style="margin: 0;">This card has a shadow for depth.</p>
      </Card>
    </div>
  \`
})`,...(k=(B=o.parameters)==null?void 0:B.docs)==null?void 0:k.source}}};var z,D,E;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`() => ({
  components: {
    Card,
    Button
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card header="Card with Footer">
        <p style="margin: 0;">This card has a footer with actions.</p>
        <template #footer>
          <div style="display: flex; gap: 12px; justify-content: flex-end;">
            <Button variant="text" label="Cancel" />
            <Button variant="solid" label="Save" />
          </div>
        </template>
      </Card>
    </div>
  \`
})`,...(E=(D=p.parameters)==null?void 0:D.docs)==null?void 0:E.source}}};var H,N,O;l.parameters={...l.parameters,docs:{...(H=l.parameters)==null?void 0:H.docs,source:{originalSource:`() => ({
  components: {
    Card
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card variant="elevated" header="Hoverable Card" hoverable>
        <p style="margin: 0;">Hover over this card to see the effect!</p>
      </Card>
    </div>
  \`
})`,...(O=(N=l.parameters)==null?void 0:N.docs)==null?void 0:O.source}}};var $,F,V;c.parameters={...c.parameters,docs:{...($=c.parameters)==null?void 0:$.docs,source:{originalSource:`() => ({
  components: {
    Card
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 400px;">
      <Card padding="none">
        <img src="https://picsum.photos/400/200" alt="Sample" style="width: 100%; display: block;" />
        <div style="padding: 24px;">
          <h3 style="margin: 0 0 8px 0;">PhImage Card</h3>
          <p style="margin: 0;">This card has no padding to accommodate a full-width image.</p>
        </div>
      </Card>
    </div>
  \`
})`,...(V=(F=c.parameters)==null?void 0:F.docs)==null?void 0:V.source}}};var I,j,A;m.parameters={...m.parameters,docs:{...(I=m.parameters)==null?void 0:I.docs,source:{originalSource:`() => ({
  components: {
    Card
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Card Padding Variants</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 24px; max-width: 800px;">
        <Card padding="sm" header="Small Padding">
          <p style="margin: 0;">Card with small padding</p>
        </Card>
        <Card padding="md" header="Medium Padding">
          <p style="margin: 0;">Card with medium padding</p>
        </Card>
        <Card padding="lg" header="Large Padding">
          <p style="margin: 0;">Card with large padding</p>
        </Card>
        <Card padding="none" header="No Padding">
          <div style="padding: 16px;">
            <p style="margin: 0;">Card with no padding (manual padding added to content)</p>
          </div>
        </Card>
      </div>
    </div>
  \`
})`,...(A=(j=m.parameters)==null?void 0:j.docs)==null?void 0:A.source}}};var L,M,U;g.parameters={...g.parameters,docs:{...(L=g.parameters)==null?void 0:L.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-lg</code></td><td style="text-align: right;">40px (lg)</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Shadow</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-md</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--shadow-lg</code></td></tr>
          </table>
        </div>
      </div>
    </div>
  \`
})`,...(U=(M=g.parameters)==null?void 0:M.docs)==null?void 0:U.source}}};const ie=["Playground","Default","Outlined","Elevated","WithFooter","Hoverable","NoPadding","AllPaddings","DesignTokens"];export{m as AllPaddings,s as Default,g as DesignTokens,o as Elevated,l as Hoverable,c as NoPadding,i as Outlined,r as Playground,p as WithFooter,ie as __namedExportsOrder,se as default};
