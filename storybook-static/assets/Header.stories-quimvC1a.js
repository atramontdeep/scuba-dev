import{c as j,a as p,e as g,b as u,r as c,p as R,o as m,h as b,t as h}from"./vue.esm-bundler-cjlVRrb_.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as a}from"./Breadcrumb-BjsoTfAy.js";const $={class:"scuba-header__breadcrumb"},q={key:0,class:"scuba-header__title-section"},L={class:"scuba-header__title"},M={key:0,class:"scuba-header__description"},W={__name:"Header",props:{title:{type:String,default:null},description:{type:String,default:null}},setup(e){const I=j(()=>["scuba-header"]);return(n,O)=>(m(),p("header",{class:R(I.value)},[g("div",$,[c(n.$slots,"breadcrumb",{},void 0,!0)]),e.title||n.$slots.title?(m(),p("div",q,[g("h1",L,[c(n.$slots,"title",{},()=>[b(h(e.title),1)],!0)]),e.description||n.$slots.description?(m(),p("div",M,[c(n.$slots,"description",{},()=>[b(h(e.description),1)],!0)])):u("",!0)])):u("",!0)],2))}},t=V(W,[["__scopeId","data-v-61ecb8f9"]]),K={title:"Scuba/Header",component:t,tags:["autodocs"],argTypes:{title:{control:"text",description:"Título da página"},description:{control:"text",description:"Descrição opcional da página"}}},N=[{label:"Home",href:"#"},{label:"Components",href:"#"},{label:"Header"}],r=e=>({components:{Header:t,Breadcrumb:a},setup(){return{args:e,breadcrumbItems:N}},template:`
    <Header v-bind="args">
      <template #breadcrumb>
        <Breadcrumb :items="breadcrumbItems" />
      </template>
    </Header>
  `});r.args={title:"Page Title",description:"This is an optional description that provides additional context about the page."};const s=()=>({components:{Header:t,Breadcrumb:a},setup(){return{items:[{label:"Home",href:"#"},{label:"Dashboard"}]}},template:`
    <Header title="Dashboard">
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  `}),i=()=>({components:{Header:t,Breadcrumb:a},setup(){return{items:[{label:"Home",href:"#"},{label:"Projects"}]}},template:`
    <Header
      title="Projects"
      description="View and manage all your projects in one place."
    >
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  `}),o=()=>({components:{Header:t,Breadcrumb:a},setup(){return{items:[{label:"Home",href:"#"},{label:"Settings",href:"#"},{label:"Team"}]}},template:`
    <Header title="Team Settings">
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
      <template #description>
        <p style="margin: 0;">Manage your team members, roles, and permissions</p>
      </template>
    </Header>
  `}),d=()=>({components:{Header:t,Breadcrumb:a},setup(){return{items:[{label:"Home",href:"#"},{label:"Analytics",href:"#"},{label:"Reports",href:"#"},{label:"Annual Summary"}]}},template:`
    <Header
      title="Annual Performance Report and Analytics Dashboard"
      description="This comprehensive dashboard provides detailed insights into your organization's performance metrics, key performance indicators, and growth trends throughout the fiscal year."
    >
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  `}),l=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Title:</strong> 32px, weight 600</td><td style="text-align: right;">H1</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Description:</strong> 16px, color #6B7280</td><td style="text-align: right;">Body</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Line height:</strong> 1.25 (title), 1.5 (description)</td><td style="text-align: right;">Spacing</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Breadcrumb → Title:</strong></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Title → Description:</strong></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Container padding:</strong></td><td style="text-align: right;">40px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Title:</strong></td><td style="text-align: right;">#111827</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Description:</strong></td><td style="text-align: right;">#6B7280</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Breadcrumb:</strong> Sempre inclua breadcrumb para navegação contextual</li>
          <li><strong>Title:</strong> Use para o título principal da página (obrigatório)</li>
          <li><strong>Description:</strong> Informações adicionais ou contexto da página (opcional)</li>
          <li>O componente Header agora segue o padrão de apresentação do design system</li>
          <li>Espaçamento fixo: 8px entre breadcrumb e título, 4px entre título e descrição</li>
          <li>Use breadcrumb para indicar a hierarquia de navegação</li>
          <li>Mantenha títulos concisos e descritivos</li>
          <li>Use a descrição para fornecer contexto adicional quando necessário</li>
        </ul>
      </div>
    </div>
  `});var x,y,f;r.parameters={...r.parameters,docs:{...(x=r.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    Header,
    Breadcrumb
  },
  setup() {
    return {
      args,
      breadcrumbItems
    };
  },
  template: \`
    <Header v-bind="args">
      <template #breadcrumb>
        <Breadcrumb :items="breadcrumbItems" />
      </template>
    </Header>
  \`
})`,...(f=(y=r.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};var H,v,B;s.parameters={...s.parameters,docs:{...(H=s.parameters)==null?void 0:H.docs,source:{originalSource:`() => ({
  components: {
    Header,
    Breadcrumb
  },
  setup() {
    const items = [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Dashboard'
    }];
    return {
      items
    };
  },
  template: \`
    <Header title="Dashboard">
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  \`
})`,...(B=(v=s.parameters)==null?void 0:v.docs)==null?void 0:B.source}}};var D,T,E;i.parameters={...i.parameters,docs:{...(D=i.parameters)==null?void 0:D.docs,source:{originalSource:`() => ({
  components: {
    Header,
    Breadcrumb
  },
  setup() {
    const items = [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Projects'
    }];
    return {
      items
    };
  },
  template: \`
    <Header
      title="Projects"
      description="View and manage all your projects in one place."
    >
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  \`
})`,...(E=(T=i.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var S,w,z;o.parameters={...o.parameters,docs:{...(S=o.parameters)==null?void 0:S.docs,source:{originalSource:`() => ({
  components: {
    Header,
    Breadcrumb
  },
  setup() {
    const items = [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Settings',
      href: '#'
    }, {
      label: 'Team'
    }];
    return {
      items
    };
  },
  template: \`
    <Header title="Team Settings">
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
      <template #description>
        <p style="margin: 0;">Manage your team members, roles, and permissions</p>
      </template>
    </Header>
  \`
})`,...(z=(w=o.parameters)==null?void 0:w.docs)==null?void 0:z.source}}};var _,P,k;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => ({
  components: {
    Header,
    Breadcrumb
  },
  setup() {
    const items = [{
      label: 'Home',
      href: '#'
    }, {
      label: 'Analytics',
      href: '#'
    }, {
      label: 'Reports',
      href: '#'
    }, {
      label: 'Annual Summary'
    }];
    return {
      items
    };
  },
  template: \`
    <Header
      title="Annual Performance Report and Analytics Dashboard"
      description="This comprehensive dashboard provides detailed insights into your organization's performance metrics, key performance indicators, and growth trends throughout the fiscal year."
    >
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  \`
})`,...(k=(P=d.parameters)==null?void 0:P.docs)==null?void 0:k.source}}};var C,U,A;l.parameters={...l.parameters,docs:{...(C=l.parameters)==null?void 0:C.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Title:</strong> 32px, weight 600</td><td style="text-align: right;">H1</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Description:</strong> 16px, color #6B7280</td><td style="text-align: right;">Body</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Line height:</strong> 1.25 (title), 1.5 (description)</td><td style="text-align: right;">Spacing</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Breadcrumb → Title:</strong></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Title → Description:</strong></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Container padding:</strong></td><td style="text-align: right;">40px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Title:</strong></td><td style="text-align: right;">#111827</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Description:</strong></td><td style="text-align: right;">#6B7280</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Breadcrumb:</strong> Sempre inclua breadcrumb para navegação contextual</li>
          <li><strong>Title:</strong> Use para o título principal da página (obrigatório)</li>
          <li><strong>Description:</strong> Informações adicionais ou contexto da página (opcional)</li>
          <li>O componente Header agora segue o padrão de apresentação do design system</li>
          <li>Espaçamento fixo: 8px entre breadcrumb e título, 4px entre título e descrição</li>
          <li>Use breadcrumb para indicar a hierarquia de navegação</li>
          <li>Mantenha títulos concisos e descritivos</li>
          <li>Use a descrição para fornecer contexto adicional quando necessário</li>
        </ul>
      </div>
    </div>
  \`
})`,...(A=(U=l.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};const Q=["Playground","Basic","WithDescription","WithCustomDescription","LongContent","DesignTokens"];export{s as Basic,l as DesignTokens,d as LongContent,r as Playground,o as WithCustomDescription,i as WithDescription,Q as __namedExportsOrder,K as default};
