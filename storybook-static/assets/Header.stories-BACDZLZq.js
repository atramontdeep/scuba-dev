import{c as G,a as s,b,r as h,e as J,u as K,o,h as x,t as y}from"./vue.esm-bundler-BXouRCJi.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{B as r}from"./Breadcrumb-Dw5RbtGd.js";const X={key:0,class:"scuba-header__breadcrumb"},Y={key:1,class:"scuba-header__title-section"},Z={class:"scuba-header__title"},ee={key:0,class:"scuba-header__description"},te={__name:"Header",props:{title:{type:String,default:null},description:{type:String,default:null},showBreadcrumb:{type:Boolean,default:!0},showDescription:{type:Boolean,default:!0}},setup(e){const F=G(()=>["scuba-header"]);return(n,re)=>(o(),s("header",{class:K(F.value)},[e.showBreadcrumb&&n.$slots.breadcrumb?(o(),s("div",X,[h(n.$slots,"breadcrumb",{},void 0,!0)])):b("",!0),e.title||n.$slots.title?(o(),s("div",Y,[J("h1",Z,[h(n.$slots,"title",{},()=>[x(y(e.title),1)],!0)]),e.showDescription&&(e.description||n.$slots.description)?(o(),s("div",ee,[h(n.$slots,"description",{},()=>[x(y(e.description),1)],!0)])):b("",!0)])):b("",!0)],2))}},t=Q(te,[["__scopeId","data-v-51704cd1"]]),ie={title:"Scuba/Header",component:t,tags:["autodocs"],argTypes:{title:{control:"text",description:"Título da página"},description:{control:"text",description:"Descrição opcional da página"},showBreadcrumb:{control:"boolean",description:"Exibe o breadcrumb"},showDescription:{control:"boolean",description:"Exibe a descrição"}}},ne=[{label:"Home",href:"#"},{label:"Components",href:"#"},{label:"Header"}],a=e=>({components:{Header:t,Breadcrumb:r},setup(){return{args:e,breadcrumbItems:ne}},template:`
    <Header v-bind="args">
      <template #breadcrumb>
        <Breadcrumb :items="breadcrumbItems" />
      </template>
    </Header>
  `});a.args={title:"Page Title",description:"This is an optional description that provides additional context about the page.",showBreadcrumb:!0,showDescription:!0};const i=()=>({components:{Header:t,Breadcrumb:r},setup(){return{items:[{label:"Home",href:"#"},{label:"Dashboard"}]}},template:`
    <Header title="Dashboard">
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  `}),d=()=>({components:{Header:t,Breadcrumb:r},setup(){return{items:[{label:"Home",href:"#"},{label:"Projects"}]}},template:`
    <Header
      title="Projects"
      description="View and manage all your projects in one place."
    >
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  `}),l=()=>({components:{Header:t,Breadcrumb:r},setup(){return{items:[{label:"Home",href:"#"},{label:"Settings",href:"#"},{label:"Team"}]}},template:`
    <Header title="Team Settings">
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
      <template #description>
        <p style="margin: 0;">Manage your team members, roles, and permissions</p>
      </template>
    </Header>
  `}),p=()=>({components:{Header:t,Breadcrumb:r},setup(){return{items:[{label:"Home",href:"#"},{label:"Analytics",href:"#"},{label:"Reports",href:"#"},{label:"Annual Summary"}]}},template:`
    <Header
      title="Annual Performance Report and Analytics Dashboard"
      description="This comprehensive dashboard provides detailed insights into your organization's performance metrics, key performance indicators, and growth trends throughout the fiscal year."
    >
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  `}),c=()=>({components:{Header:t},template:`
    <Header
      title="Page Title"
      description="This page has no breadcrumb navigation."
      :showBreadcrumb="false"
    />
  `}),m=()=>({components:{Header:t,Breadcrumb:r},setup(){return{items:[{label:"Home",href:"#"},{label:"Dashboard"}]}},template:`
    <Header
      title="Dashboard"
      :showDescription="false"
    >
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  `}),g=()=>({components:{Header:t},template:`
    <Header
      title="Simple Page Title"
      :showBreadcrumb="false"
      :showDescription="false"
    />
  `}),u=()=>({template:`
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
  `});var f,H,B;a.parameters={...a.parameters,docs:{...(f=a.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
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
})`,...(B=(H=a.parameters)==null?void 0:H.docs)==null?void 0:B.source}}};var v,D,w;i.parameters={...i.parameters,docs:{...(v=i.parameters)==null?void 0:v.docs,source:{originalSource:`() => ({
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
})`,...(w=(D=i.parameters)==null?void 0:D.docs)==null?void 0:w.source}}};var T,S,E;d.parameters={...d.parameters,docs:{...(T=d.parameters)==null?void 0:T.docs,source:{originalSource:`() => ({
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
})`,...(E=(S=d.parameters)==null?void 0:S.docs)==null?void 0:E.source}}};var z,P,_;l.parameters={...l.parameters,docs:{...(z=l.parameters)==null?void 0:z.docs,source:{originalSource:`() => ({
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
})`,...(_=(P=l.parameters)==null?void 0:P.docs)==null?void 0:_.source}}};var k,C,U;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => ({
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
})`,...(U=(C=p.parameters)==null?void 0:C.docs)==null?void 0:U.source}}};var A,W,I;c.parameters={...c.parameters,docs:{...(A=c.parameters)==null?void 0:A.docs,source:{originalSource:`() => ({
  components: {
    Header
  },
  template: \`
    <Header
      title="Page Title"
      description="This page has no breadcrumb navigation."
      :showBreadcrumb="false"
    />
  \`
})`,...(I=(W=c.parameters)==null?void 0:W.docs)==null?void 0:I.source}}};var j,R,$;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`() => ({
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
    <Header
      title="Dashboard"
      :showDescription="false"
    >
      <template #breadcrumb>
        <Breadcrumb :items="items" />
      </template>
    </Header>
  \`
})`,...($=(R=m.parameters)==null?void 0:R.docs)==null?void 0:$.source}}};var O,V,q;g.parameters={...g.parameters,docs:{...(O=g.parameters)==null?void 0:O.docs,source:{originalSource:`() => ({
  components: {
    Header
  },
  template: \`
    <Header
      title="Simple Page Title"
      :showBreadcrumb="false"
      :showDescription="false"
    />
  \`
})`,...(q=(V=g.parameters)==null?void 0:V.docs)==null?void 0:q.source}}};var L,M,N;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => ({
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
})`,...(N=(M=u.parameters)==null?void 0:M.docs)==null?void 0:N.source}}};const de=["Playground","Basic","WithDescription","WithCustomDescription","LongContent","WithoutBreadcrumb","WithoutDescription","TitleOnly","DesignTokens"];export{i as Basic,u as DesignTokens,p as LongContent,a as Playground,g as TitleOnly,l as WithCustomDescription,d as WithDescription,c as WithoutBreadcrumb,m as WithoutDescription,de as __namedExportsOrder,ie as default};
