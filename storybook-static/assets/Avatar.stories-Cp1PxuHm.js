import{A as n}from"./Avatar-y3BnyQgN.js";import"./vue.esm-bundler-cjlVRrb_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const _={title:"Scuba/Avatar",component:n,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg","xl"],description:"Tamanho do avatar"},shape:{control:"select",options:["circle","square"],description:"Forma do avatar"},variant:{control:"select",options:["neutral","primary","success","warning","error","info"],description:"Cor de fundo quando não tem imagem"},src:{control:"text",description:"URL da imagem"},alt:{control:"text",description:"Texto alternativo"},initials:{control:"text",description:"Iniciais do usuário"},icon:{control:"text",description:"Ícone Phosphor (ex: ph-user)"},badge:{control:"boolean",description:"Mostrar badge de status"},badgeVariant:{control:"select",options:["success","warning","error","neutral"],description:"Cor do badge"}}},s=U=>({components:{Avatar:n},setup(){return{args:U}},template:'<Avatar v-bind="args" />'}),t=s.bind({});t.args={initials:"AB",size:"md",variant:"primary"};const a=s.bind({});a.args={src:"https://i.pravatar.cc/150?img=1",alt:"PhUser Avatar",size:"md"};const e=s.bind({});e.args={initials:"AB",size:"md",variant:"primary"};const r=s.bind({});r.args={icon:"ph-user",size:"md",variant:"neutral"};const i=s.bind({});i.args={initials:"AB",size:"md",variant:"primary",badge:!0,badgeVariant:"success"};const o=()=>({components:{Avatar:n},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Sizes</h2>
      <div style="display: flex; align-items: center; gap: 16px;">
        <Avatar initials="XS" size="xs" variant="primary" />
        <Avatar initials="SM" size="sm" variant="primary" />
        <Avatar initials="MD" size="md" variant="primary" />
        <Avatar initials="LG" size="lg" variant="primary" />
        <Avatar initials="XL" size="xl" variant="primary" />
      </div>
    </div>
  `}),d=()=>({components:{Avatar:n},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Variants</h2>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Avatar initials="NT" variant="neutral" />
        <Avatar initials="PR" variant="primary" />
        <Avatar initials="SC" variant="success" />
        <Avatar initials="WR" variant="warning" />
        <Avatar initials="ER" variant="error" />
        <Avatar initials="IF" variant="info" />
      </div>
    </div>
  `}),p=()=>({components:{Avatar:n},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Shapes</h2>
      <div style="display: flex; gap: 16px;">
        <Avatar initials="CI" shape="circle" variant="primary" />
        <Avatar initials="SQ" shape="square" variant="primary" />
      </div>
    </div>
  `}),l=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizes</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px (xs)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-700</code></td><td style="text-align: right;">40px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-900</code></td><td style="text-align: right;">56px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-1100</code></td><td style="text-align: right;">72px (xl)</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-200</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-200</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-light</code></td></tr>
          </table>
        </div>
      </div>
    </div>
  `});var c,m,g;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Avatar
  },
  setup() {
    return {
      args
    };
  },
  template: '<Avatar v-bind="args" />'
})`,...(g=(m=t.parameters)==null?void 0:m.docs)==null?void 0:g.source}}};var v,y,x;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`args => ({
  components: {
    Avatar
  },
  setup() {
    return {
      args
    };
  },
  template: '<Avatar v-bind="args" />'
})`,...(x=(y=a.parameters)==null?void 0:y.docs)==null?void 0:x.source}}};var h,u,A;e.parameters={...e.parameters,docs:{...(h=e.parameters)==null?void 0:h.docs,source:{originalSource:`args => ({
  components: {
    Avatar
  },
  setup() {
    return {
      args
    };
  },
  template: '<Avatar v-bind="args" />'
})`,...(A=(u=e.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var f,b,z;r.parameters={...r.parameters,docs:{...(f=r.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    Avatar
  },
  setup() {
    return {
      args
    };
  },
  template: '<Avatar v-bind="args" />'
})`,...(z=(b=r.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var S,w,P;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    Avatar
  },
  setup() {
    return {
      args
    };
  },
  template: '<Avatar v-bind="args" />'
})`,...(P=(w=i.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var I,T,W;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`() => ({
  components: {
    Avatar
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Sizes</h2>
      <div style="display: flex; align-items: center; gap: 16px;">
        <Avatar initials="XS" size="xs" variant="primary" />
        <Avatar initials="SM" size="sm" variant="primary" />
        <Avatar initials="MD" size="md" variant="primary" />
        <Avatar initials="LG" size="lg" variant="primary" />
        <Avatar initials="XL" size="xl" variant="primary" />
      </div>
    </div>
  \`
})`,...(W=(T=o.parameters)==null?void 0:T.docs)==null?void 0:W.source}}};var C,R,D;d.parameters={...d.parameters,docs:{...(C=d.parameters)==null?void 0:C.docs,source:{originalSource:`() => ({
  components: {
    Avatar
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Variants</h2>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Avatar initials="NT" variant="neutral" />
        <Avatar initials="PR" variant="primary" />
        <Avatar initials="SC" variant="success" />
        <Avatar initials="WR" variant="warning" />
        <Avatar initials="ER" variant="error" />
        <Avatar initials="IF" variant="info" />
      </div>
    </div>
  \`
})`,...(D=(R=d.parameters)==null?void 0:R.docs)==null?void 0:D.source}}};var V,B,L;p.parameters={...p.parameters,docs:{...(V=p.parameters)==null?void 0:V.docs,source:{originalSource:`() => ({
  components: {
    Avatar
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Shapes</h2>
      <div style="display: flex; gap: 16px;">
        <Avatar initials="CI" shape="circle" variant="primary" />
        <Avatar initials="SQ" shape="square" variant="primary" />
      </div>
    </div>
  \`
})`,...(L=(B=p.parameters)==null?void 0:B.docs)==null?void 0:L.source}}};var M,k,q;l.parameters={...l.parameters,docs:{...(M=l.parameters)==null?void 0:M.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizes</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px (xs)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-600</code></td><td style="text-align: right;">32px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-700</code></td><td style="text-align: right;">40px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-900</code></td><td style="text-align: right;">56px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-1100</code></td><td style="text-align: right;">72px (xl)</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-200</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-200</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-light</code></td></tr>
          </table>
        </div>
      </div>
    </div>
  \`
})`,...(q=(k=l.parameters)==null?void 0:k.docs)==null?void 0:q.source}}};const G=["Playground","WithImage","WithInitials","WithIcon","WithBadge","AllSizes","AllVariants","Shapes","DesignTokens"];export{o as AllSizes,d as AllVariants,l as DesignTokens,t as Playground,p as Shapes,i as WithBadge,r as WithIcon,a as WithImage,e as WithInitials,G as __namedExportsOrder,_ as default};
