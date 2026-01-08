import{B as b}from"./Breadcrumb-BjsoTfAy.js";import"./vue.esm-bundler-cjlVRrb_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n=[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category",href:"/products/category"},{label:"Item",href:"/products/category/item"}],Ie=[{label:"Home",href:"/",icon:"ph-house"},{label:"Documents",href:"/documents",icon:"ph-folder"},{label:"Projects",href:"/documents/projects",icon:"ph-folder-open"},{label:"Current Project",href:"/documents/projects/current",icon:"ph-file"}],I=[{label:"Home",href:"/"},{label:"Level 1",href:"/level1"},{label:"Level 2",href:"/level1/level2"},{label:"Level 3",href:"/level1/level2/level3"},{label:"Level 4",href:"/level1/level2/level3/level4"},{label:"Level 5",href:"/level1/level2/level3/level4/level5"},{label:"Level 6",href:"/level1/level2/level3/level4/level5/level6"},{label:"Current Page",href:"/level1/level2/level3/level4/level5/level6/current"}],Ce={title:"Scuba/Breadcrumb",component:b,tags:["autodocs"],argTypes:{items:{control:"object",description:"Array de itens do breadcrumb"},separator:{control:"text",description:"Separador entre itens"},separatorIcon:{control:"text",description:"Ícone separador (Phosphor)"},maxItems:{control:"number",description:"Número máximo de itens visíveis"},size:{control:"select",options:["xs"],description:"Tamanho do breadcrumb"},ariaLabel:{control:"text",description:"Label para acessibilidade"},onClick:{action:"clicked"}}},e=x=>({components:{Breadcrumb:b},setup(){return{args:x,handleClick:B=>{console.log("Breadcrumb clicked:",B)}}},template:'<Breadcrumb v-bind="args" @click="handleClick" />'}),t=e.bind({});t.args={items:n,separatorIcon:"ph-caret-right",size:"xs"};t.parameters={docs:{description:{story:"Use os controles abaixo para testar diferentes configurações do breadcrumb."}}};const r=e.bind({});r.args={items:n,separatorIcon:"ph-caret-right"};const o=e.bind({});o.args={items:Ie,separatorIcon:"ph-caret-right"};const a=e.bind({});a.args={items:n,separator:"/",separatorIcon:""};const s=e.bind({});s.args={items:n,separator:"-",separatorIcon:""};const l=e.bind({});l.args={items:n,separatorIcon:"ph-caret-right"};const i=e.bind({});i.args={items:n,separatorIcon:"ph-arrow-right"};const d=e.bind({});d.args={items:I,maxItems:3,separatorIcon:"ph-caret-right"};const c=e.bind({});c.args={items:I,maxItems:4,separatorIcon:"ph-caret-right"};const p=e.bind({});p.args={items:I,maxItems:5,separatorIcon:"ph-caret-right"};const m=e.bind({});m.args={items:[{label:"Home",href:"/"},{label:"Products",href:"/products",disabled:!0},{label:"Category",href:"/products/category"},{label:"Item",href:"/products/category/item"}]};const h=e.bind({});h.args={items:[{label:"Home"},{label:"Products"},{label:"Category"},{label:"Current Item"}]};const g=e.bind({});g.args={items:[{label:"Dashboard",href:"/dashboard",icon:"ph-house"},{label:"E-commerce",href:"/dashboard/ecommerce",icon:"ph-shopping-cart"},{label:"Produtos",href:"/dashboard/ecommerce/products",icon:"ph-package"},{label:"Eletrônicos",href:"/dashboard/ecommerce/products/electronics",icon:"ph-laptop"},{label:"Smartphone XYZ",href:"/dashboard/ecommerce/products/electronics/xyz"}],separatorIcon:"ph-caret-right"};const u=()=>({components:{Breadcrumb:b},setup(){return{items:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category",href:"/products/category"},{label:"Item"}]}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Breadcrumb Separators</h2>

      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Caret Right (Default)</h3>
          <Breadcrumb :items="items" separatorIcon="ph-caret-right" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Arrow Right</h3>
          <Breadcrumb :items="items" separatorIcon="ph-arrow-right" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Slash (/)</h3>
          <Breadcrumb :items="items" separator="/" :separatorIcon="null" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Greater Than (>)</h3>
          <Breadcrumb :items="items" separator=">" :separatorIcon="null" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Dash (-)</h3>
          <Breadcrumb :items="items" separator="-" :separatorIcon="null" />
        </div>
      </div>
    </div>
  `}),f=()=>({components:{Breadcrumb:b},setup(){return{manyItems:[{label:"Home",href:"/"},{label:"Level 1",href:"/level1"},{label:"Level 2",href:"/level1/level2"},{label:"Level 3",href:"/level1/level2/level3"},{label:"Level 4",href:"/level1/level2/level3/level4"},{label:"Level 5",href:"/level1/level2/level3/level4/level5"},{label:"Current Page"}]}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Breadcrumb Max Items</h2>

      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">All Items (No Limit)</h3>
          <Breadcrumb :items="manyItems" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 3 Items</h3>
          <Breadcrumb :items="manyItems" :maxItems="3" />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Clique nos três pontos para expandir
          </p>
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 4 Items</h3>
          <Breadcrumb :items="manyItems" :maxItems="4" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 5 Items</h3>
          <Breadcrumb :items="manyItems" :maxItems="5" />
        </div>
      </div>
    </div>
  `}),v=()=>({components:{Breadcrumb:b},setup(){return{basicItems:[{label:"Home",href:"/"},{label:"Products",href:"/products"},{label:"Category",href:"/products/category"},{label:"Item"}],iconItems:[{label:"Home",href:"/",icon:"ph-house"},{label:"Documents",href:"/docs",icon:"ph-folder"},{label:"Projects",href:"/docs/projects",icon:"ph-folder-open"},{label:"Current",icon:"ph-file"}],manyItems:[{label:"Home",href:"/"},{label:"L1",href:"/l1"},{label:"L2",href:"/l1/l2"},{label:"L3",href:"/l1/l2/l3"},{label:"L4",href:"/l1/l2/l3/l4"},{label:"L5",href:"/l1/l2/l3/l4/l5"},{label:"Current"}]}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Breadcrumb Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); gap: 40px;">
        <!-- Basic -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Basic</h3>
          <Breadcrumb :items="basicItems" />
        </div>

        <!-- With Icons -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">With Icons</h3>
          <Breadcrumb :items="iconItems" />
        </div>

        <!-- Slash Separator -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Slash Separator</h3>
          <Breadcrumb :items="basicItems" separator="/" :separatorIcon="null" />
        </div>

        <!-- Arrow Separator -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Arrow Separator</h3>
          <Breadcrumb :items="basicItems" separatorIcon="ph-arrow-right" />
        </div>

        <!-- Max 3 Items -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 3 Items (Collapsed)</h3>
          <Breadcrumb :items="manyItems" :maxItems="3" />
        </div>

        <!-- Max 4 Items -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 4 Items (Collapsed)</h3>
          <Breadcrumb :items="manyItems" :maxItems="4" />
        </div>
      </div>
    </div>
  `}),y=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-icon-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-regular</code></td><td style="text-align: right;">400</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa elemento <code>&lt;nav&gt;</code> com <code>aria-label</code></li>
          <li>Lista ordenada (<code>&lt;ol&gt;</code>) para hierarquia</li>
          <li>Atributo <code>aria-current="page"</code> no item atual</li>
          <li>Separadores com <code>aria-hidden="true"</code></li>
          <li>Focus visível em links e botão de expansão</li>
          <li>Suporte a navegação por teclado</li>
        </ul>
      </div>
    </div>
  `});var k,w,C;t.parameters={...t.parameters,docs:{...(k=t.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(C=(w=t.parameters)==null?void 0:w.docs)==null?void 0:C.source}}};var z,S,L;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(L=(S=r.parameters)==null?void 0:S.docs)==null?void 0:L.source}}};var M,P,A;o.parameters={...o.parameters,docs:{...(M=o.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(A=(P=o.parameters)==null?void 0:P.docs)==null?void 0:A.source}}};var D,T,H;a.parameters={...a.parameters,docs:{...(D=a.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(H=(T=a.parameters)==null?void 0:T.docs)==null?void 0:H.source}}};var E,j,W;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(W=(j=s.parameters)==null?void 0:j.docs)==null?void 0:W.source}}};var _,R,N;l.parameters={...l.parameters,docs:{...(_=l.parameters)==null?void 0:_.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(N=(R=l.parameters)==null?void 0:R.docs)==null?void 0:N.source}}};var U,q,O;i.parameters={...i.parameters,docs:{...(U=i.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(O=(q=i.parameters)==null?void 0:q.docs)==null?void 0:O.source}}};var F,G,Y;d.parameters={...d.parameters,docs:{...(F=d.parameters)==null?void 0:F.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(Y=(G=d.parameters)==null?void 0:G.docs)==null?void 0:Y.source}}};var X,Z,J;c.parameters={...c.parameters,docs:{...(X=c.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(J=(Z=c.parameters)==null?void 0:Z.docs)==null?void 0:J.source}}};var K,Q,V;p.parameters={...p.parameters,docs:{...(K=p.parameters)==null?void 0:K.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(V=(Q=p.parameters)==null?void 0:Q.docs)==null?void 0:V.source}}};var $,ee,te;m.parameters={...m.parameters,docs:{...($=m.parameters)==null?void 0:$.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(te=(ee=m.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ne,re,oe;h.parameters={...h.parameters,docs:{...(ne=h.parameters)==null?void 0:ne.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(oe=(re=h.parameters)==null?void 0:re.docs)==null?void 0:oe.source}}};var ae,se,le;g.parameters={...g.parameters,docs:{...(ae=g.parameters)==null?void 0:ae.docs,source:{originalSource:`args => ({
  components: {
    Breadcrumb
  },
  setup() {
    const handleClick = event => {
      console.log('Breadcrumb clicked:', event);
    };
    return {
      args,
      handleClick
    };
  },
  template: '<Breadcrumb v-bind="args" @click="handleClick" />'
})`,...(le=(se=g.parameters)==null?void 0:se.docs)==null?void 0:le.source}}};var ie,de,ce;u.parameters={...u.parameters,docs:{...(ie=u.parameters)==null?void 0:ie.docs,source:{originalSource:`() => ({
  components: {
    Breadcrumb
  },
  setup() {
    const items = [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Category',
      href: '/products/category'
    }, {
      label: 'Item'
    }];
    return {
      items
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Breadcrumb Separators</h2>

      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Caret Right (Default)</h3>
          <Breadcrumb :items="items" separatorIcon="ph-caret-right" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Arrow Right</h3>
          <Breadcrumb :items="items" separatorIcon="ph-arrow-right" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Slash (/)</h3>
          <Breadcrumb :items="items" separator="/" :separatorIcon="null" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Greater Than (>)</h3>
          <Breadcrumb :items="items" separator=">" :separatorIcon="null" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Dash (-)</h3>
          <Breadcrumb :items="items" separator="-" :separatorIcon="null" />
        </div>
      </div>
    </div>
  \`
})`,...(ce=(de=u.parameters)==null?void 0:de.docs)==null?void 0:ce.source}}};var pe,me,he;f.parameters={...f.parameters,docs:{...(pe=f.parameters)==null?void 0:pe.docs,source:{originalSource:`() => ({
  components: {
    Breadcrumb
  },
  setup() {
    const manyItems = [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Level 1',
      href: '/level1'
    }, {
      label: 'Level 2',
      href: '/level1/level2'
    }, {
      label: 'Level 3',
      href: '/level1/level2/level3'
    }, {
      label: 'Level 4',
      href: '/level1/level2/level3/level4'
    }, {
      label: 'Level 5',
      href: '/level1/level2/level3/level4/level5'
    }, {
      label: 'Current Page'
    }];
    return {
      manyItems
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Breadcrumb Max Items</h2>

      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">All Items (No Limit)</h3>
          <Breadcrumb :items="manyItems" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 3 Items</h3>
          <Breadcrumb :items="manyItems" :maxItems="3" />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Clique nos três pontos para expandir
          </p>
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 4 Items</h3>
          <Breadcrumb :items="manyItems" :maxItems="4" />
        </div>

        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 5 Items</h3>
          <Breadcrumb :items="manyItems" :maxItems="5" />
        </div>
      </div>
    </div>
  \`
})`,...(he=(me=f.parameters)==null?void 0:me.docs)==null?void 0:he.source}}};var ge,be,xe;v.parameters={...v.parameters,docs:{...(ge=v.parameters)==null?void 0:ge.docs,source:{originalSource:`() => ({
  components: {
    Breadcrumb
  },
  setup() {
    const basicItems = [{
      label: 'Home',
      href: '/'
    }, {
      label: 'Products',
      href: '/products'
    }, {
      label: 'Category',
      href: '/products/category'
    }, {
      label: 'Item'
    }];
    const iconItems = [{
      label: 'Home',
      href: '/',
      icon: 'ph-house'
    }, {
      label: 'Documents',
      href: '/docs',
      icon: 'ph-folder'
    }, {
      label: 'Projects',
      href: '/docs/projects',
      icon: 'ph-folder-open'
    }, {
      label: 'Current',
      icon: 'ph-file'
    }];
    const manyItems = [{
      label: 'Home',
      href: '/'
    }, {
      label: 'L1',
      href: '/l1'
    }, {
      label: 'L2',
      href: '/l1/l2'
    }, {
      label: 'L3',
      href: '/l1/l2/l3'
    }, {
      label: 'L4',
      href: '/l1/l2/l3/l4'
    }, {
      label: 'L5',
      href: '/l1/l2/l3/l4/l5'
    }, {
      label: 'Current'
    }];
    return {
      basicItems,
      iconItems,
      manyItems
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Breadcrumb Showcase</h2>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(500px, 1fr)); gap: 40px;">
        <!-- Basic -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Basic</h3>
          <Breadcrumb :items="basicItems" />
        </div>

        <!-- With Icons -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">With Icons</h3>
          <Breadcrumb :items="iconItems" />
        </div>

        <!-- Slash Separator -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Slash Separator</h3>
          <Breadcrumb :items="basicItems" separator="/" :separatorIcon="null" />
        </div>

        <!-- Arrow Separator -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Arrow Separator</h3>
          <Breadcrumb :items="basicItems" separatorIcon="ph-arrow-right" />
        </div>

        <!-- Max 3 Items -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 3 Items (Collapsed)</h3>
          <Breadcrumb :items="manyItems" :maxItems="3" />
        </div>

        <!-- Max 4 Items -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 16px; font-weight: 600;">Max 4 Items (Collapsed)</h3>
          <Breadcrumb :items="manyItems" :maxItems="4" />
        </div>
      </div>
    </div>
  \`
})`,...(xe=(be=v.parameters)==null?void 0:be.docs)==null?void 0:xe.source}}};var ue,fe,ve;y.parameters={...y.parameters,docs:{...(ue=y.parameters)==null?void 0:ue.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-icon-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-regular</code></td><td style="text-align: right;">400</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa elemento <code>&lt;nav&gt;</code> com <code>aria-label</code></li>
          <li>Lista ordenada (<code>&lt;ol&gt;</code>) para hierarquia</li>
          <li>Atributo <code>aria-current="page"</code> no item atual</li>
          <li>Separadores com <code>aria-hidden="true"</code></li>
          <li>Focus visível em links e botão de expansão</li>
          <li>Suporte a navegação por teclado</li>
        </ul>
      </div>
    </div>
  \`
})`,...(ve=(fe=y.parameters)==null?void 0:fe.docs)==null?void 0:ve.source}}};const ze=["Playground","Basic","WithIcons","SlashSeparator","DashSeparator","ChevronSeparator","ArrowSeparator","MaxItems3","MaxItems4","MaxItems5","WithDisabled","TextOnly","RealisticExample","AllSeparators","MaxItemsShowcase","Showcase","DesignTokens"];export{u as AllSeparators,i as ArrowSeparator,r as Basic,l as ChevronSeparator,s as DashSeparator,y as DesignTokens,d as MaxItems3,c as MaxItems4,p as MaxItems5,f as MaxItemsShowcase,t as Playground,g as RealisticExample,v as Showcase,a as SlashSeparator,h as TextOnly,m as WithDisabled,o as WithIcons,ze as __namedExportsOrder,Ce as default};
