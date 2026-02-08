import{v as w,c as R,a as t,e as a,b as i,g as l,s as c,u as p,D as d,T as r,o as s,t as A,F as j,z as K}from"./vue.esm-bundler-BXouRCJi.js";import{A as Q}from"./Avatar-CUNj3rZn.js";import{_ as U}from"./_plugin-vue_export-helper-DlAUqK2U.js";const W={class:"scuba-sidenav__content"},X={key:0,class:"scuba-sidenav__label"},Y={key:0,class:"scuba-sidenav__section-divider"},ee={key:1,class:"scuba-sidenav__section-spacing"},ae={key:0,class:"scuba-sidenav__section-title"},ne={key:0,class:"scuba-sidenav__label"},te={key:0,class:"scuba-sidenav__label"},se={key:0,class:"scuba-sidenav__label"},ie={key:0,class:"scuba-sidenav__label"},oe={key:2,class:"scuba-sidenav__section-divider"},le={key:3,class:"scuba-sidenav__section-spacing"},de={key:0,class:"scuba-sidenav__section-title"},re={key:0,class:"scuba-sidenav__label"},pe={key:0,class:"scuba-sidenav__label"},ue={key:0,class:"scuba-sidenav__label"},ve={key:4,class:"scuba-sidenav__section-divider"},ce={key:5,class:"scuba-sidenav__section-spacing"},ge={key:0,class:"scuba-sidenav__section-title"},he={key:0,class:"scuba-sidenav__label"},me={key:0,class:"scuba-sidenav__label"},fe={key:0,class:"scuba-sidenav__label"},_e={class:"scuba-sidenav__footer"},Ce={key:0,class:"scuba-sidenav__user-info"},be={class:"scuba-sidenav__user-name"},ye={class:"scuba-sidenav__user-company"},xe={key:0,class:"scuba-sidenav__dropdown"},Ne={class:"scuba-sidenav__language-selector"},ke=["onClick","aria-label","innerHTML"],we={__name:"SideNavigation",props:{userName:{type:String,default:"Name"},userCompany:{type:String,default:"Company"},avatarInitials:{type:String,default:"AB"},defaultActive:{type:String,default:"data-collection"},currentLanguage:{type:String,default:"pt"}},emits:["navigate","menu-action","language-change"],setup(g,{emit:h}){const M=g,b=h,n=w(!1),f=w(!1),u=w(M.defaultActive),$=[{code:"pt",label:"Português",svg:`<svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_469_1034)">
<rect x="2" y="2" width="28" height="28" rx="14" fill="#70CDFF"/>
<path d="M16 30C23.732 30 30 23.732 30 16C30 8.26801 23.732 2 16 2C8.26801 2 2 8.26801 2 16C2 23.732 8.26801 30 16 30Z" fill="#6DA544"/>
<path d="M16 7.47827L27.5652 16L16 24.5217L4.43481 16L16 7.47827Z" fill="#FFDA44"/>
<path d="M16 20.8695C18.6894 20.8695 20.8696 18.6893 20.8696 16C20.8696 13.3106 18.6894 11.1304 16 11.1304C13.3107 11.1304 11.1305 13.3106 11.1305 16C11.1305 18.6893 13.3107 20.8695 16 20.8695Z" fill="#F0F0F0"/>
<path d="M13.5652 15.6956C12.7184 15.6956 11.9012 15.8244 11.132 16.0634C11.166 18.7234 13.3319 20.8695 16 20.8695C17.6498 20.8695 19.1069 20.0483 19.9877 18.7932C18.4807 16.9066 16.1619 15.6956 13.5652 15.6956V15.6956Z" fill="#0052B4"/>
<path d="M20.7793 16.9329C20.8379 16.6308 20.8695 16.3192 20.8695 16C20.8695 13.3105 18.6894 11.1304 16 11.1304C13.9933 11.1304 12.2706 12.3445 11.5251 14.078C12.1841 13.9415 12.8664 13.8696 13.5653 13.8696C16.3935 13.8695 18.9521 15.0452 20.7793 16.9329V16.9329Z" fill="#0052B4"/>
</g>
<defs>
<clipPath id="clip0_469_1034">
<rect x="2" y="2" width="28" height="28" rx="14" fill="white"/>
</clipPath>
</defs>
</svg>`},{code:"en",label:"English",svg:`<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_469_1036)">
<g clip-path="url(#clip1_469_1036)">
<path d="M14 28C21.732 28 28 21.732 28 14C28 6.26801 21.732 0 14 0C6.26801 0 0 6.26801 0 14C0 21.732 6.26801 28 14 28Z" fill="#F0F0F0"/>
<path d="M2.89407 5.4765C1.79436 6.90729 0.965136 8.55639 0.4823 10.3479H7.76547L2.89407 5.4765Z" fill="#0052B4"/>
<path d="M27.5177 10.3479C27.0348 8.55645 26.2056 6.90735 25.1059 5.47656L20.2346 10.3479H27.5177Z" fill="#0052B4"/>
<path d="M0.4823 17.6523C0.96519 19.4437 1.79442 21.0928 2.89407 22.5236L7.76531 17.6523H0.4823Z" fill="#0052B4"/>
<path d="M22.5234 2.89413C21.0927 1.79442 19.4436 0.96519 17.6521 0.4823V7.76542L22.5234 2.89413Z" fill="#0052B4"/>
<path d="M5.47656 25.1059C6.90735 26.2056 8.55645 27.0349 10.3479 27.5177V20.2347L5.47656 25.1059Z" fill="#0052B4"/>
<path d="M10.3479 0.4823C8.5564 0.96519 6.9073 1.79442 5.47656 2.89407L10.3479 7.76536V0.4823Z" fill="#0052B4"/>
<path d="M17.6522 27.5177C19.4437 27.0349 21.0928 26.2056 22.5235 25.106L17.6522 20.2347V27.5177Z" fill="#0052B4"/>
<path d="M20.2346 17.6523L25.1059 22.5236C26.2056 21.0929 27.0348 19.4437 27.5177 17.6523H20.2346Z" fill="#0052B4"/>
<path d="M27.8815 12.1739H15.8262H15.8261V0.118508C15.2283 0.0406875 14.6189 0 14 0C13.381 0 12.7717 0.0406875 12.1739 0.118508V12.1738V12.1739H0.118508C0.0406875 12.7717 0 13.3811 0 14C0 14.619 0.0406875 15.2283 0.118508 15.8261H12.1738H12.1739V27.8815C12.7717 27.9593 13.381 28 14 28C14.6189 28 15.2283 27.9594 15.8261 27.8815V15.8262V15.8261H27.8815C27.9593 15.2283 28 14.619 28 14C28 13.3811 27.9593 12.7717 27.8815 12.1739Z" fill="#D80027"/>
<path d="M17.6522 17.6523L23.8995 23.8996C24.1868 23.6123 24.4609 23.312 24.7224 23.0008L19.3739 17.6522H17.6522V17.6523Z" fill="#D80027"/>
<path d="M10.3478 17.6522H10.3477L4.10046 23.8994C4.38768 24.1868 4.68797 24.4609 4.99925 24.7224L10.3478 19.3737V17.6522Z" fill="#D80027"/>
<path d="M10.3478 10.3479V10.3478L4.10053 4.10046C3.8132 4.38768 3.5391 4.68797 3.27759 4.99925L8.62619 10.3479H10.3478V10.3479Z" fill="#D80027"/>
<path d="M17.6522 10.3479L23.8996 4.10053C23.6123 3.8132 23.312 3.53911 23.0008 3.27765L17.6522 8.62625V10.3479Z" fill="#D80027"/>
</g>
</g>
<defs>
<clipPath id="clip0_469_1036">
<rect width="28" height="28" fill="white"/>
</clipPath>
<clipPath id="clip1_469_1036">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>`},{code:"es",label:"Español",svg:`<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clip-path="url(#clip0_469_1037)">
<path d="M11.5652 13.6957C10.7184 13.6957 9.90119 13.8245 9.13196 14.0635C9.16603 16.7235 11.3319 18.8696 14 18.8696C15.6498 18.8696 17.1069 18.0484 17.9877 16.7932C16.4807 14.9067 14.1619 13.6957 11.5652 13.6957Z" fill="#0052B4"/>
<path d="M18.7793 14.933C18.8379 14.6309 18.8695 14.3192 18.8695 14C18.8695 11.3106 16.6894 9.13049 14 9.13049C11.9933 9.13049 10.2706 10.3446 9.52515 12.0781C10.1841 11.9415 10.8664 11.8696 11.5653 11.8696C14.3935 11.8696 16.9521 13.0452 18.7793 14.933Z" fill="#0052B4"/>
<g clip-path="url(#clip1_469_1037)">
<path d="M0 14C0 15.7125 0.308055 17.3529 0.870789 18.8696L14 20.087L27.1292 18.8696C27.6919 17.3529 28 15.7125 28 14C28 12.2875 27.6919 10.6471 27.1292 9.13048L14 7.91309L0.870789 9.13048C0.308055 10.6471 0 12.2875 0 14H0Z" fill="#FFDA44"/>
<path d="M27.1293 9.13046C25.1512 3.7993 20.0196 0 14.0001 0C7.98055 0 2.84895 3.7993 0.87085 9.13046H27.1293Z" fill="#D80027"/>
<path d="M0.87085 18.8696C2.84895 24.2007 7.98055 28 14.0001 28C20.0196 28 25.1512 24.2007 27.1293 18.8696H0.87085Z" fill="#D80027"/>
</g>
</g>
<defs>
<clipPath id="clip0_469_1037">
<rect width="28" height="28" fill="white"/>
</clipPath>
<clipPath id="clip1_469_1037">
<rect width="28" height="28" fill="white"/>
</clipPath>
</defs>
</svg>`}],T=R(()=>({"scuba-sidenav":!0,"scuba-sidenav--expanded":n.value})),O=()=>{n.value=!0},G=()=>{n.value=!1,f.value=!1},q=()=>{f.value=!f.value},v=m=>{u.value=m,b("navigate",m)},k=m=>{b("menu-action",m),f.value=!1},J=m=>{b("language-change",m)};return(m,e)=>(s(),t("nav",{class:p(T.value),onMouseenter:O,onMouseleave:G},[a("div",W,[a("a",{href:"#",class:p(["scuba-sidenav__item",{active:u.value==="home"}]),onClick:e[0]||(e[0]=c(o=>v("home"),["prevent"]))},[e[14]||(e[14]=a("i",{class:"ph ph-house"},null,-1)),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("span",X,"Início")):i("",!0)]),_:1})],2),n.value?i("",!0):(s(),t("div",Y)),n.value?(s(),t("div",ee)):i("",!0),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("div",ae,"CARBONO")):i("",!0)]),_:1}),a("a",{href:"#",class:p(["scuba-sidenav__item",{active:u.value==="emissions"}]),onClick:e[1]||(e[1]=c(o=>v("emissions"),["prevent"]))},[e[15]||(e[15]=a("i",{class:"ph ph-globe-hemisphere-west"},null,-1)),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("span",ne,"Emissões")):i("",!0)]),_:1})],2),a("a",{href:"#",class:p(["scuba-sidenav__item",{active:u.value==="audit"}]),onClick:e[2]||(e[2]=c(o=>v("audit"),["prevent"]))},[e[16]||(e[16]=a("i",{class:"ph ph-shield-check"},null,-1)),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("span",te,"Auditoria")):i("",!0)]),_:1})],2),a("a",{href:"#",class:p(["scuba-sidenav__item",{active:u.value==="methodologies"}]),onClick:e[3]||(e[3]=c(o=>v("methodologies"),["prevent"]))},[e[17]||(e[17]=a("i",{class:"ph ph-calculator"},null,-1)),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("span",se,"Metodologias")):i("",!0)]),_:1})],2),a("a",{href:"#",class:p(["scuba-sidenav__item",{active:u.value==="carbon-ia"}]),onClick:e[4]||(e[4]=c(o=>v("carbon-ia"),["prevent"]))},[e[18]||(e[18]=a("i",{class:"ph ph-leaf"},null,-1)),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("span",ie,"Carbono IA")):i("",!0)]),_:1})],2),n.value?i("",!0):(s(),t("div",oe)),n.value?(s(),t("div",le)):i("",!0),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("div",de,"REPORTE ESG")):i("",!0)]),_:1}),a("a",{href:"#",class:p(["scuba-sidenav__item",{active:u.value==="config"}]),onClick:e[5]||(e[5]=c(o=>v("config"),["prevent"]))},[e[19]||(e[19]=a("i",{class:"ph ph-gear"},null,-1)),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("span",re,"Configuração")):i("",!0)]),_:1})],2),a("a",{href:"#",class:p(["scuba-sidenav__item",{active:u.value==="data-collection"}]),onClick:e[6]||(e[6]=c(o=>v("data-collection"),["prevent"]))},[e[20]||(e[20]=a("i",{class:"ph ph-file-text"},null,-1)),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("span",pe,"Coleta de dados")):i("",!0)]),_:1})],2),a("a",{href:"#",class:p(["scuba-sidenav__item",{active:u.value==="my-items"}]),onClick:e[7]||(e[7]=c(o=>v("my-items"),["prevent"]))},[e[21]||(e[21]=a("i",{class:"ph ph-file-arrow-up"},null,-1)),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("span",ue,"Meus itens")):i("",!0)]),_:1})],2),n.value?i("",!0):(s(),t("div",ve)),n.value?(s(),t("div",ce)):i("",!0),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("div",ge,"GESTÃO")):i("",!0)]),_:1}),a("a",{href:"#",class:p(["scuba-sidenav__item",{active:u.value==="esg-management"}]),onClick:e[8]||(e[8]=c(o=>v("esg-management"),["prevent"]))},[e[22]||(e[22]=a("i",{class:"ph ph-chart-pie-slice"},null,-1)),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("span",he,"Gestão ESG")):i("",!0)]),_:1})],2),a("a",{href:"#",class:p(["scuba-sidenav__item",{active:u.value==="files"}]),onClick:e[9]||(e[9]=c(o=>v("files"),["prevent"]))},[e[23]||(e[23]=a("i",{class:"ph ph-database"},null,-1)),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("span",me,"Arquivos")):i("",!0)]),_:1})],2),a("a",{href:"#",class:p(["scuba-sidenav__item",{active:u.value==="access"}]),onClick:e[10]||(e[10]=c(o=>v("access"),["prevent"]))},[e[24]||(e[24]=a("i",{class:"ph ph-users-three"},null,-1)),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("span",fe,"Acessos")):i("",!0)]),_:1})],2)]),a("div",_e,[l(Q,{initials:g.avatarInitials,size:"lg",variant:"neutral"},null,8,["initials"]),l(r,{name:"fade"},{default:d(()=>[n.value?(s(),t("div",Ce,[a("div",be,A(g.userName),1),a("div",ye,A(g.userCompany),1)])):i("",!0)]),_:1}),a("button",{class:"scuba-sidenav__menu-button",onClick:q,"aria-label":"Menu"},[...e[25]||(e[25]=[a("i",{class:"ph ph-dots-three"},null,-1)])]),l(r,{name:"fade"},{default:d(()=>[f.value?(s(),t("div",xe,[a("button",{class:"scuba-sidenav__dropdown-item",onClick:e[11]||(e[11]=o=>k("change-company"))},[...e[26]||(e[26]=[a("i",{class:"ph ph-buildings"},null,-1),a("span",null,"Trocar empresa",-1)])]),a("button",{class:"scuba-sidenav__dropdown-item",onClick:e[12]||(e[12]=o=>k("profile"))},[...e[27]||(e[27]=[a("i",{class:"ph ph-user-circle"},null,-1),a("span",null,"Perfil",-1)])]),a("button",{class:"scuba-sidenav__dropdown-item",onClick:e[13]||(e[13]=o=>k("logout"))},[...e[28]||(e[28]=[a("i",{class:"ph ph-sign-out"},null,-1),a("span",null,"Sair",-1)])]),e[30]||(e[30]=a("div",{class:"scuba-sidenav__dropdown-divider"},null,-1)),a("div",Ne,[(s(),t(j,null,K($,o=>a("button",{key:o.code,class:p(["scuba-sidenav__language-btn",{active:g.currentLanguage===o.code}]),onClick:Me=>J(o.code),"aria-label":o.label,innerHTML:o.svg},null,10,ke)),64)),e[29]||(e[29]=a("span",{class:"scuba-sidenav__language-label"},"Português",-1))])])):i("",!0)]),_:1})])],34))}},C=U(we,[["__scopeId","data-v-7ff13a05"]]),Le={title:"Scuba/SideNavigation",component:C,tags:["autodocs"],argTypes:{userName:{control:"text",description:"Nome do usuário"},userCompany:{control:"text",description:"Nome da empresa"},avatarInitials:{control:"text",description:"Iniciais do avatar"},defaultActive:{control:"text",description:"Item ativo por padrão"}}},_=g=>({components:{SideNavigation:C},setup(){return{args:g,handleNavigate:n=>{console.log("Navigate to:",n)},handleMenuAction:n=>{console.log("Menu action:",n)},handleLanguageChange:n=>{console.log("Language changed to:",n)}}},template:`
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <SideNavigation
        v-bind="args"
        @navigate="handleNavigate"
        @menu-action="handleMenuAction"
        @language-change="handleLanguageChange"
      />
      <div style="flex: 1; padding: 40px;">
        <h1 style="font-size: 32px; font-weight: 600; color: #111827; margin-bottom: 8px;">Main Content Area</h1>
        <p style="color: #6B7280; font-size: 16px;">
          Passe o mouse sobre a sidebar à esquerda para expandir.
        </p>
        <p style="color: #6B7280; font-size: 16px; margin-top: 16px;">
          Clique nos 3 pontinhos no header expandido para abrir o menu com opções de perfil e idioma.
        </p>
      </div>
    </div>
  `});_.args={userName:"Name",userCompany:"Company",avatarInitials:"AB",defaultActive:"data-collection",currentLanguage:"pt"};const y=()=>({components:{SideNavigation:C},setup(){return{handleNavigate:h=>{console.log("Navigate to:",h)}}},template:`
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <SideNavigation
        user-name="João Silva"
        user-company="Acme Corp"
        avatar-initials="JS"
        default-active="home"
        @navigate="handleNavigate"
      />
      <div style="flex: 1; padding: 40px;">
        <h2 style="font-size: 24px; font-weight: 600; color: #111827; margin-bottom: 8px;">
          Estado Colapsado (Default)
        </h2>
        <p style="color: #6B7280; font-size: 14px;">
          A navegação começa colapsada, mostrando apenas os ícones.
        </p>
      </div>
    </div>
  `}),x=()=>({components:{SideNavigation:C},setup(){return{handleNavigate:h=>{console.log("Navigate to:",h)}}},template:`
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <div style="width: 240px;">
        <SideNavigation
          user-name="Maria Santos"
          user-company="Tech Solutions"
          avatar-initials="MS"
          default-active="emissions"
          @navigate="handleNavigate"
          style="width: 240px;"
          class="scuba-sidenav--expanded"
        />
      </div>
      <div style="flex: 1; padding: 40px;">
        <h2 style="font-size: 24px; font-weight: 600; color: #111827; margin-bottom: 8px;">
          Estado Expandido
        </h2>
        <p style="color: #6B7280; font-size: 14px;">
          Ao passar o mouse, a sidebar expande revelando os labels e opções adicionais.
        </p>
      </div>
    </div>
  `}),N=()=>({components:{SideNavigation:C},setup(){return{handleNavigate:h=>{console.log("Navigate to:",h)}}},template:`
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <SideNavigation
        user-name="Carlos Pereira"
        user-company="Green Energy"
        avatar-initials="CP"
        default-active="data-collection"
        @navigate="handleNavigate"
      />
      <div style="flex: 1; padding: 40px;">
        <h2 style="font-size: 24px; font-weight: 600; color: #111827; margin-bottom: 8px;">
          Item Ativo (Coleta de dados)
        </h2>
        <p style="color: #6B7280; font-size: 14px;">
          O item "Coleta de dados" está marcado como ativo com fundo azul.
        </p>
      </div>
    </div>
  `});var S,F,L;_.parameters={..._.parameters,docs:{...(S=_.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    SideNavigation
  },
  setup() {
    const handleNavigate = item => {
      console.log('Navigate to:', item);
    };
    const handleMenuAction = action => {
      console.log('Menu action:', action);
    };
    const handleLanguageChange = lang => {
      console.log('Language changed to:', lang);
    };
    return {
      args,
      handleNavigate,
      handleMenuAction,
      handleLanguageChange
    };
  },
  template: \`
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <SideNavigation
        v-bind="args"
        @navigate="handleNavigate"
        @menu-action="handleMenuAction"
        @language-change="handleLanguageChange"
      />
      <div style="flex: 1; padding: 40px;">
        <h1 style="font-size: 32px; font-weight: 600; color: #111827; margin-bottom: 8px;">Main Content Area</h1>
        <p style="color: #6B7280; font-size: 16px;">
          Passe o mouse sobre a sidebar à esquerda para expandir.
        </p>
        <p style="color: #6B7280; font-size: 16px; margin-top: 16px;">
          Clique nos 3 pontinhos no header expandido para abrir o menu com opções de perfil e idioma.
        </p>
      </div>
    </div>
  \`
})`,...(L=(F=_.parameters)==null?void 0:F.docs)==null?void 0:L.source}}};var B,E,P;y.parameters={...y.parameters,docs:{...(B=y.parameters)==null?void 0:B.docs,source:{originalSource:`() => ({
  components: {
    SideNavigation
  },
  setup() {
    const handleNavigate = item => {
      console.log('Navigate to:', item);
    };
    return {
      handleNavigate
    };
  },
  template: \`
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <SideNavigation
        user-name="João Silva"
        user-company="Acme Corp"
        avatar-initials="JS"
        default-active="home"
        @navigate="handleNavigate"
      />
      <div style="flex: 1; padding: 40px;">
        <h2 style="font-size: 24px; font-weight: 600; color: #111827; margin-bottom: 8px;">
          Estado Colapsado (Default)
        </h2>
        <p style="color: #6B7280; font-size: 14px;">
          A navegação começa colapsada, mostrando apenas os ícones.
        </p>
      </div>
    </div>
  \`
})`,...(P=(E=y.parameters)==null?void 0:E.docs)==null?void 0:P.source}}};var Z,z,V;x.parameters={...x.parameters,docs:{...(Z=x.parameters)==null?void 0:Z.docs,source:{originalSource:`() => ({
  components: {
    SideNavigation
  },
  setup() {
    const handleNavigate = item => {
      console.log('Navigate to:', item);
    };
    return {
      handleNavigate
    };
  },
  template: \`
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <div style="width: 240px;">
        <SideNavigation
          user-name="Maria Santos"
          user-company="Tech Solutions"
          avatar-initials="MS"
          default-active="emissions"
          @navigate="handleNavigate"
          style="width: 240px;"
          class="scuba-sidenav--expanded"
        />
      </div>
      <div style="flex: 1; padding: 40px;">
        <h2 style="font-size: 24px; font-weight: 600; color: #111827; margin-bottom: 8px;">
          Estado Expandido
        </h2>
        <p style="color: #6B7280; font-size: 14px;">
          Ao passar o mouse, a sidebar expande revelando os labels e opções adicionais.
        </p>
      </div>
    </div>
  \`
})`,...(V=(z=x.parameters)==null?void 0:z.docs)==null?void 0:V.source}}};var H,D,I;N.parameters={...N.parameters,docs:{...(H=N.parameters)==null?void 0:H.docs,source:{originalSource:`() => ({
  components: {
    SideNavigation
  },
  setup() {
    const handleNavigate = item => {
      console.log('Navigate to:', item);
    };
    return {
      handleNavigate
    };
  },
  template: \`
    <div style="position: relative; height: 100vh; font-family: Poppins, sans-serif; display: flex; background: #F9FAFB;">
      <SideNavigation
        user-name="Carlos Pereira"
        user-company="Green Energy"
        avatar-initials="CP"
        default-active="data-collection"
        @navigate="handleNavigate"
      />
      <div style="flex: 1; padding: 40px;">
        <h2 style="font-size: 24px; font-weight: 600; color: #111827; margin-bottom: 8px;">
          Item Ativo (Coleta de dados)
        </h2>
        <p style="color: #6B7280; font-size: 14px;">
          O item "Coleta de dados" está marcado como ativo com fundo azul.
        </p>
      </div>
    </div>
  \`
})`,...(I=(D=N.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};const Be=["Playground","EstadoColapsado","EstadoExpandido","ComItemAtivo"];export{N as ComItemAtivo,y as EstadoColapsado,x as EstadoExpandido,_ as Playground,Be as __namedExportsOrder,Le as default};
