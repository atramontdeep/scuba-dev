import{A as r}from"./Avatar-CUNj3rZn.js";import"./vue.esm-bundler-BXouRCJi.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const k={title:"Scuba/Avatar",component:r,tags:["autodocs"],argTypes:{size:{control:"select",options:["xs","sm","md","lg"],description:"Tamanho do avatar"},variant:{control:"select",options:["default","hover","disabled"],description:"Cor de fundo quando não tem imagem"},src:{control:"text",description:"URL da imagem"},initials:{control:"text",description:"Iniciais do usuário"}}},d=P=>({components:{Avatar:r},setup(){return{args:P}},template:'<Avatar v-bind="args" />'}),t=d.bind({});t.args={initials:"AB",size:"md",variant:"default"};const a=d.bind({});a.args={src:"https://i.pravatar.cc/150?img=1",size:"md"};const n=d.bind({});n.args={initials:"AB",size:"md",variant:"default"};const s=()=>({components:{Avatar:r},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Sizes</h2>
      <div style="display: flex; align-items: center; gap: 16px;">
        <Avatar initials="XS" size="xs" variant="default" />
        <Avatar initials="SM" size="sm" variant="default" />
        <Avatar initials="MD" size="md" variant="default" />
        <Avatar initials="LG" size="lg" variant="default" />
      </div>
    </div>
  `}),e=()=>({components:{Avatar:r},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Variants</h2>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Avatar initials="DF" variant="default" />
        <Avatar initials="HV" variant="hover" />
        <Avatar initials="DS" variant="disabled" />
      </div>
    </div>
  `}),i=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizes</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>xs:</strong></td><td style="text-align: right;">24x24</td></tr>
            <tr><td style="padding: 8px 0;"><strong>sm:</strong></td><td style="text-align: right;">32x32</td></tr>
            <tr><td style="padding: 8px 0;"><strong>md:</strong></td><td style="text-align: right;">48x48</td></tr>
            <tr><td style="padding: 8px 0;"><strong>lg:</strong></td><td style="text-align: right;">64x64</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Variants</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>default:</strong></td><td style="text-align: right;">color-icon-secondary</td></tr>
            <tr><td style="padding: 8px 0;"><strong>hover:</strong></td><td style="text-align: right;">color-surface-inverted</td></tr>
            <tr><td style="padding: 8px 0;"><strong>disabled:</strong></td><td style="text-align: right;">neutral-200 / icon-action</td></tr>
          </table>
        </div>
      </div>
    </div>
  `});var o,l,p;t.parameters={...t.parameters,docs:{...(o=t.parameters)==null?void 0:o.docs,source:{originalSource:`args => ({
  components: {
    Avatar
  },
  setup() {
    return {
      args
    };
  },
  template: '<Avatar v-bind="args" />'
})`,...(p=(l=t.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};var g,m,v;a.parameters={...a.parameters,docs:{...(g=a.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Avatar
  },
  setup() {
    return {
      args
    };
  },
  template: '<Avatar v-bind="args" />'
})`,...(v=(m=a.parameters)==null?void 0:m.docs)==null?void 0:v.source}}};var c,x,y;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`args => ({
  components: {
    Avatar
  },
  setup() {
    return {
      args
    };
  },
  template: '<Avatar v-bind="args" />'
})`,...(y=(x=n.parameters)==null?void 0:x.docs)==null?void 0:y.source}}};var f,u,h;s.parameters={...s.parameters,docs:{...(f=s.parameters)==null?void 0:f.docs,source:{originalSource:`() => ({
  components: {
    Avatar
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Sizes</h2>
      <div style="display: flex; align-items: center; gap: 16px;">
        <Avatar initials="XS" size="xs" variant="default" />
        <Avatar initials="SM" size="sm" variant="default" />
        <Avatar initials="MD" size="md" variant="default" />
        <Avatar initials="LG" size="lg" variant="default" />
      </div>
    </div>
  \`
})`,...(h=(u=s.parameters)==null?void 0:u.docs)==null?void 0:h.source}}};var A,b,z;e.parameters={...e.parameters,docs:{...(A=e.parameters)==null?void 0:A.docs,source:{originalSource:`() => ({
  components: {
    Avatar
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Avatar Variants</h2>
      <div style="display: flex; gap: 16px; flex-wrap: wrap;">
        <Avatar initials="DF" variant="default" />
        <Avatar initials="HV" variant="hover" />
        <Avatar initials="DS" variant="disabled" />
      </div>
    </div>
  \`
})`,...(z=(b=e.parameters)==null?void 0:b.docs)==null?void 0:z.source}}};var S,w,D;i.parameters={...i.parameters,docs:{...(S=i.parameters)==null?void 0:S.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizes</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>xs:</strong></td><td style="text-align: right;">24x24</td></tr>
            <tr><td style="padding: 8px 0;"><strong>sm:</strong></td><td style="text-align: right;">32x32</td></tr>
            <tr><td style="padding: 8px 0;"><strong>md:</strong></td><td style="text-align: right;">48x48</td></tr>
            <tr><td style="padding: 8px 0;"><strong>lg:</strong></td><td style="text-align: right;">64x64</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Variants</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>default:</strong></td><td style="text-align: right;">color-icon-secondary</td></tr>
            <tr><td style="padding: 8px 0;"><strong>hover:</strong></td><td style="text-align: right;">color-surface-inverted</td></tr>
            <tr><td style="padding: 8px 0;"><strong>disabled:</strong></td><td style="text-align: right;">neutral-200 / icon-action</td></tr>
          </table>
        </div>
      </div>
    </div>
  \`
})`,...(D=(w=i.parameters)==null?void 0:w.docs)==null?void 0:D.source}}};const M=["Playground","WithImage","WithInitials","AllSizes","AllVariants","DesignTokens"];export{s as AllSizes,e as AllVariants,i as DesignTokens,t as Playground,a as WithImage,n as WithInitials,M as __namedExportsOrder,k as default};
