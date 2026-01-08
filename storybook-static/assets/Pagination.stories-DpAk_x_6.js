import{q as o,c as x,w as Ce,a as m,e as d,b as D,p as P,F as ze,u as Ie,t as K,D as Se,o as u}from"./vue.esm-bundler-cjlVRrb_.js";import{_ as Le}from"./_plugin-vue_export-helper-DlAUqK2U.js";const _e=["aria-label"],Fe={class:"scuba-pagination__list"},Be={key:0,class:"scuba-pagination__item"},Ve=["disabled","aria-label"],Te={class:"scuba-pagination__item"},Ee=["disabled","aria-label"],We=["onClick","aria-label","aria-current"],ke={key:1,class:"scuba-pagination__ellipsis"},Me={class:"scuba-pagination__item"},Ne=["disabled","aria-label"],De={key:1,class:"scuba-pagination__item"},Ae=["disabled","aria-label"],$e={key:2,class:"scuba-pagination__item scuba-pagination__item--input"},Ue={class:"scuba-pagination__input-label"},qe=["value","max","aria-label"],je={key:0,class:"scuba-pagination__info"},Ge={__name:"Pagination",props:{modelValue:{type:Number,default:1},totalPages:{type:Number,required:!0},siblingCount:{type:Number,default:1},boundaryCount:{type:Number,default:1},showFirstLast:{type:Boolean,default:!0},showPageInput:{type:Boolean,default:!1},showPageInfo:{type:Boolean,default:!1},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},ariaLabel:{type:String,default:"Paginação"},previousLabel:{type:String,default:"Página anterior"},nextLabel:{type:String,default:"Próxima página"},firstLabel:{type:String,default:"Primeira página"},lastLabel:{type:String,default:"Última página"},pageLabel:{type:String,default:"Página"},pageInputLabel:{type:String,default:"Ir para:"},pageInputAriaLabel:{type:String,default:"Ir para página"},totalItems:{type:Number,default:null},itemsPerPage:{type:Number,default:10}},emits:["update:modelValue","change"],setup(e,{emit:g}){const n=e,l=g,h=o(n.modelValue),i=x(()=>n.modelValue),O=x(()=>i.value===1),H=x(()=>i.value===n.totalPages),ce=x(()=>{const t=["scuba-pagination"];return t.push(`scuba-pagination--${n.size}`),t}),me=x(()=>["scuba-pagination__input"]),ue=x(()=>{if(!n.totalItems)return`Página ${i.value} de ${n.totalPages}`;const t=(i.value-1)*n.itemsPerPage+1,a=Math.min(i.value*n.itemsPerPage,n.totalItems);return`${t}-${a} de ${n.totalItems}`}),he=x(()=>{const t=[],a=n.totalPages,p=i.value,J=n.siblingCount,c=n.boundaryCount;for(let r=1;r<=Math.min(c,a);r++)t.push(r);const Q=Math.max(p-J,c+1),R=Math.min(p+J,a-c);Q>c+1&&t.push("...");for(let r=Q;r<=R;r++)r>c&&r<=a-c&&t.push(r);R<a-c&&t.push("...");for(let r=Math.max(a-c+1,c+1);r<=a;r++)t.includes(r)||t.push(r);return t}),N=t=>{const a=["scuba-pagination__button"];return a.push(`scuba-pagination__button--${t}`),a},xe=t=>{const a=["scuba-pagination__button","scuba-pagination__button--page"];return t===i.value&&a.push("scuba-pagination__button--active"),a},b=t=>{t<1||t>n.totalPages||t===i.value||(l("update:modelValue",t),l("change",t),h.value=t)},Pe=()=>{b(1)},fe=()=>{b(n.totalPages)},be=()=>{b(i.value-1)},ye=()=>{b(i.value+1)},ve=t=>{h.value=t.target.value},we=()=>{const t=parseInt(h.value);!isNaN(t)&&t>=1&&t<=n.totalPages?b(t):h.value=i.value};return Ce(()=>n.modelValue,t=>{h.value=t}),(t,a)=>(u(),m("nav",{class:P(ce.value),"aria-label":e.ariaLabel},[d("ul",Fe,[e.showFirstLast?(u(),m("li",Be,[d("button",{class:P(N("first")),onClick:Pe,disabled:O.value,"aria-label":e.firstLabel},[...a[0]||(a[0]=[d("i",{class:"ph ph-caret-double-left"},null,-1)])],10,Ve)])):D("",!0),d("li",Te,[d("button",{class:P(N("prev")),onClick:be,disabled:O.value,"aria-label":e.previousLabel},[...a[1]||(a[1]=[d("i",{class:"ph ph-caret-left"},null,-1)])],10,Ee)]),(u(!0),m(ze,null,Ie(he.value,p=>(u(),m("li",{key:p,class:"scuba-pagination__item"},[p!=="..."?(u(),m("button",{key:0,class:P(xe(p)),onClick:J=>b(p),"aria-label":`${e.pageLabel} ${p}`,"aria-current":p===i.value?"page":void 0},K(p),11,We)):(u(),m("span",ke,[...a[2]||(a[2]=[d("i",{class:"ph ph-dots-three"},null,-1)])]))]))),128)),d("li",Me,[d("button",{class:P(N("next")),onClick:ye,disabled:H.value,"aria-label":e.nextLabel},[...a[3]||(a[3]=[d("i",{class:"ph ph-caret-right"},null,-1)])],10,Ne)]),e.showFirstLast?(u(),m("li",De,[d("button",{class:P(N("last")),onClick:fe,disabled:H.value,"aria-label":e.lastLabel},[...a[4]||(a[4]=[d("i",{class:"ph ph-caret-double-right"},null,-1)])],10,Ae)])):D("",!0),e.showPageInput?(u(),m("li",$e,[d("span",Ue,K(e.pageInputLabel),1),d("input",{type:"number",class:P(me.value),value:h.value,onInput:ve,onKeydown:Se(we,["enter"]),min:1,max:e.totalPages,"aria-label":e.pageInputAriaLabel},null,42,qe)])):D("",!0)]),e.showPageInfo?(u(),m("div",je,K(ue.value),1)):D("",!0)],10,_e))}},f=Le(Ge,[["__scopeId","data-v-fb8c5f63"]]),Oe={title:"Scuba/Pagination",component:f,tags:["autodocs"],argTypes:{modelValue:{control:"number",description:"Página atual (v-model)"},totalPages:{control:"number",description:"Total de páginas"},siblingCount:{control:"number",description:"Número de páginas vizinhas ao redor da página atual"},boundaryCount:{control:"number",description:"Número de páginas no início e fim"},showFirstLast:{control:"boolean",description:"Mostrar botões primeira/última página"},showPageInput:{control:"boolean",description:"Mostrar input para ir para página"},showPageInfo:{control:"boolean",description:"Mostrar informação de página"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho da paginação"},totalItems:{control:"number",description:"Total de itens (para info de página)"},itemsPerPage:{control:"number",description:"Itens por página"},onChange:{action:"changed"}}},s=e=>({components:{Pagination:f},setup(){return{currentPage:o(e.modelValue||1),args:e,handleChange:l=>{console.log("Page changed to:",l)}}},template:'<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'}),y=s.bind({});y.args={totalPages:10,siblingCount:1,boundaryCount:1,showFirstLast:!0,size:"md"};y.parameters={docs:{description:{story:"Use os controles abaixo para testar diferentes configurações da paginação."}}};const v=s.bind({});v.args={totalPages:10,showFirstLast:!0};const w=s.bind({});w.args={totalPages:5,showFirstLast:!0};const C=s.bind({});C.args={totalPages:100,showFirstLast:!0};const z=s.bind({});z.args={totalPages:20,showFirstLast:!0,showPageInput:!0};const I=s.bind({});I.args={totalPages:10,showFirstLast:!0,showPageInfo:!0};const S=s.bind({});S.args={totalPages:10,totalItems:237,itemsPerPage:25,showFirstLast:!0,showPageInfo:!0};const L=s.bind({});L.args={totalPages:10,showFirstLast:!1};const _=s.bind({});_.args={totalPages:10,size:"sm",showFirstLast:!0};const F=s.bind({});F.args={totalPages:10,size:"md",showFirstLast:!0};const B=s.bind({});B.args={totalPages:10,size:"lg",showFirstLast:!0};const V=s.bind({});V.args={totalPages:20,siblingCount:0,boundaryCount:1,showFirstLast:!0};const T=s.bind({});T.args={totalPages:20,siblingCount:1,boundaryCount:1,showFirstLast:!0};const E=s.bind({});E.args={totalPages:20,siblingCount:2,boundaryCount:1,showFirstLast:!0};const W=s.bind({});W.args={totalPages:20,siblingCount:1,boundaryCount:1,showFirstLast:!0};const k=s.bind({});k.args={totalPages:20,siblingCount:1,boundaryCount:2,showFirstLast:!0};const M=s.bind({});M.args={totalPages:50,totalItems:1234,itemsPerPage:25,siblingCount:1,boundaryCount:1,showFirstLast:!0,showPageInput:!0,showPageInfo:!0,size:"md"};const A=()=>({components:{Pagination:f},setup(){const e=o(5),g=o(5),n=o(5);return{page1:e,page2:g,page3:n}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Sizes</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Small</h3>
          <Pagination v-model="page1" :totalPages="10" size="sm" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Medium (Default)</h3>
          <Pagination v-model="page2" :totalPages="10" size="md" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Large</h3>
          <Pagination v-model="page3" :totalPages="10" size="lg" />
        </div>
      </div>
    </div>
  `}),$=()=>({components:{Pagination:f},setup(){const e=o(5),g=o(5),n=o(5),l=o(5);return{page1:e,page2:g,page3:n,page4:l}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Features</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Basic</h3>
          <Pagination v-model="page1" :totalPages="10" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">With Page Input</h3>
          <Pagination v-model="page2" :totalPages="20" showPageInput />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">With Page PhInfo</h3>
          <Pagination v-model="page3" :totalPages="10" showPageInfo />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Complete (All Features)</h3>
          <Pagination
            v-model="page4"
            :totalPages="20"
            :totalItems="487"
            :itemsPerPage="25"
            showPageInput
            showPageInfo
          />
        </div>
      </div>
    </div>
  `}),U=()=>({components:{Pagination:f},setup(){const e=o(10),g=o(10),n=o(10),l=o(10);return{page1:e,page2:g,page3:n,page4:l}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Configurations</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 0, BoundaryCount: 1</h3>
          <Pagination v-model="page1" :totalPages="20" :siblingCount="0" :boundaryCount="1" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 1, BoundaryCount: 1 (Default)</h3>
          <Pagination v-model="page2" :totalPages="20" :siblingCount="1" :boundaryCount="1" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 2, BoundaryCount: 1</h3>
          <Pagination v-model="page3" :totalPages="20" :siblingCount="2" :boundaryCount="1" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 1, BoundaryCount: 2</h3>
          <Pagination v-model="page4" :totalPages="20" :siblingCount="1" :boundaryCount="2" />
        </div>
      </div>
    </div>
  `}),q=()=>({components:{Pagination:f},setup(){const e=o(1),g=o(3),n=o(50),l=o(5);return{page1:e,page2:g,page3:n,page4:l}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Use Cases</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Poucas Páginas (5 páginas)</h3>
          <Pagination v-model="page1" :totalPages="5" />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Sem ellipsis quando há poucas páginas
          </p>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Navegação de Blog (15 páginas)</h3>
          <Pagination v-model="page2" :totalPages="15" showPageInfo />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Grande Dataset (100 páginas)</h3>
          <Pagination
            v-model="page3"
            :totalPages="100"
            :totalItems="2487"
            :itemsPerPage="25"
            showPageInput
            showPageInfo
          />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Com input para saltar rapidamente entre páginas
          </p>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Tabela de Dados</h3>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <div style="margin-bottom: 16px;">
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="border-bottom: 2px solid #e5e5e5;">
                    <th style="padding: 12px; text-align: left;">ID</th>
                    <th style="padding: 12px; text-align: left;">Nome</th>
                    <th style="padding: 12px; text-align: left;">Email</th>
                    <th style="padding: 12px; text-align: left;">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #e5e5e5;">
                    <td style="padding: 12px;">101</td>
                    <td style="padding: 12px;">João Silva</td>
                    <td style="padding: 12px;">joao@email.com</td>
                    <td style="padding: 12px;">Ativo</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e5e5e5;">
                    <td style="padding: 12px;">102</td>
                    <td style="padding: 12px;">Maria Santos</td>
                    <td style="padding: 12px;">maria@email.com</td>
                    <td style="padding: 12px;">Ativo</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e5e5e5;">
                    <td style="padding: 12px;">103</td>
                    <td style="padding: 12px;">Pedro Costa</td>
                    <td style="padding: 12px;">pedro@email.com</td>
                    <td style="padding: 12px;">Inativo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Pagination
              v-model="page4"
              :totalPages="25"
              :totalItems="623"
              :itemsPerPage="25"
              showPageInfo
            />
          </div>
        </div>
      </div>
    </div>
  `}),j=()=>({components:{Pagination:f},setup(){const e=o(1),g=o(5),n=o(3),l=o(10),h=o(7),i=o(50);return{page1:e,page2:g,page3:n,page4:l,page5:h,page6:i}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Pagination Showcase</h2>

      <div style="display: grid; grid-template-columns: 1fr; gap: 40px;">
        <!-- Basic Small -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">Basic (5 pages)</h3>
          <Pagination v-model="page1" :totalPages="5" size="sm" />
        </div>

        <!-- With PhInfo -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">With Page PhInfo</h3>
          <Pagination v-model="page2" :totalPages="10" showPageInfo />
        </div>

        <!-- With Total Items -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">With Total Items PhInfo</h3>
          <Pagination v-model="page3" :totalPages="10" :totalItems="237" :itemsPerPage="25" showPageInfo />
        </div>

        <!-- With Page Input -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">With Page Input</h3>
          <Pagination v-model="page4" :totalPages="20" showPageInput />
        </div>

        <!-- Large Size Complete -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">Large + All Features</h3>
          <Pagination
            v-model="page5"
            :totalPages="15"
            :totalItems="352"
            :itemsPerPage="25"
            size="lg"
            showPageInput
            showPageInfo
          />
        </div>

        <!-- Many Pages -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">Many Pages (100 total)</h3>
          <Pagination
            v-model="page6"
            :totalPages="100"
            :totalItems="2487"
            :itemsPerPage="25"
            showPageInput
            showPageInfo
          />
        </div>
      </div>
    </div>
  `}),G=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-light</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa elemento <code>&lt;nav&gt;</code> com <code>aria-label</code></li>
          <li>Botões com <code>aria-label</code> descritivos</li>
          <li>Página atual com <code>aria-current="page"</code></li>
          <li>Estados disabled gerenciados corretamente</li>
          <li>Focus visível em todos os elementos interativos</li>
          <li>Navegação por teclado (Tab, Enter)</li>
          <li>Input numérico com labels acessíveis</li>
        </ul>
      </div>
    </div>
  `});var X,Y,Z;y.parameters={...y.parameters,docs:{...(X=y.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(Z=(Y=y.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var tt,et,nt;v.parameters={...v.parameters,docs:{...(tt=v.parameters)==null?void 0:tt.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(nt=(et=v.parameters)==null?void 0:et.docs)==null?void 0:nt.source}}};var at,ot,st;w.parameters={...w.parameters,docs:{...(at=w.parameters)==null?void 0:at.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(st=(ot=w.parameters)==null?void 0:ot.docs)==null?void 0:st.source}}};var it,rt,dt;C.parameters={...C.parameters,docs:{...(it=C.parameters)==null?void 0:it.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(dt=(rt=C.parameters)==null?void 0:rt.docs)==null?void 0:dt.source}}};var gt,lt,pt;z.parameters={...z.parameters,docs:{...(gt=z.parameters)==null?void 0:gt.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(pt=(lt=z.parameters)==null?void 0:lt.docs)==null?void 0:pt.source}}};var ct,mt,ut;I.parameters={...I.parameters,docs:{...(ct=I.parameters)==null?void 0:ct.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(ut=(mt=I.parameters)==null?void 0:mt.docs)==null?void 0:ut.source}}};var ht,xt,Pt;S.parameters={...S.parameters,docs:{...(ht=S.parameters)==null?void 0:ht.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(Pt=(xt=S.parameters)==null?void 0:xt.docs)==null?void 0:Pt.source}}};var ft,bt,yt;L.parameters={...L.parameters,docs:{...(ft=L.parameters)==null?void 0:ft.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(yt=(bt=L.parameters)==null?void 0:bt.docs)==null?void 0:yt.source}}};var vt,wt,Ct;_.parameters={..._.parameters,docs:{...(vt=_.parameters)==null?void 0:vt.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(Ct=(wt=_.parameters)==null?void 0:wt.docs)==null?void 0:Ct.source}}};var zt,It,St;F.parameters={...F.parameters,docs:{...(zt=F.parameters)==null?void 0:zt.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(St=(It=F.parameters)==null?void 0:It.docs)==null?void 0:St.source}}};var Lt,_t,Ft;B.parameters={...B.parameters,docs:{...(Lt=B.parameters)==null?void 0:Lt.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(Ft=(_t=B.parameters)==null?void 0:_t.docs)==null?void 0:Ft.source}}};var Bt,Vt,Tt;V.parameters={...V.parameters,docs:{...(Bt=V.parameters)==null?void 0:Bt.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(Tt=(Vt=V.parameters)==null?void 0:Vt.docs)==null?void 0:Tt.source}}};var Et,Wt,kt;T.parameters={...T.parameters,docs:{...(Et=T.parameters)==null?void 0:Et.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(kt=(Wt=T.parameters)==null?void 0:Wt.docs)==null?void 0:kt.source}}};var Mt,Nt,Dt;E.parameters={...E.parameters,docs:{...(Mt=E.parameters)==null?void 0:Mt.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(Dt=(Nt=E.parameters)==null?void 0:Nt.docs)==null?void 0:Dt.source}}};var At,$t,Ut;W.parameters={...W.parameters,docs:{...(At=W.parameters)==null?void 0:At.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(Ut=($t=W.parameters)==null?void 0:$t.docs)==null?void 0:Ut.source}}};var qt,jt,Gt;k.parameters={...k.parameters,docs:{...(qt=k.parameters)==null?void 0:qt.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(Gt=(jt=k.parameters)==null?void 0:jt.docs)==null?void 0:Gt.source}}};var Jt,Kt,Ot;M.parameters={...M.parameters,docs:{...(Jt=M.parameters)==null?void 0:Jt.docs,source:{originalSource:`args => ({
  components: {
    Pagination
  },
  setup() {
    const currentPage = ref(args.modelValue || 1);
    const handleChange = page => {
      console.log('Page changed to:', page);
    };
    return {
      currentPage,
      args,
      handleChange
    };
  },
  template: '<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'
})`,...(Ot=(Kt=M.parameters)==null?void 0:Kt.docs)==null?void 0:Ot.source}}};var Ht,Qt,Rt;A.parameters={...A.parameters,docs:{...(Ht=A.parameters)==null?void 0:Ht.docs,source:{originalSource:`() => ({
  components: {
    Pagination
  },
  setup() {
    const page1 = ref(5);
    const page2 = ref(5);
    const page3 = ref(5);
    return {
      page1,
      page2,
      page3
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Sizes</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Small</h3>
          <Pagination v-model="page1" :totalPages="10" size="sm" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Medium (Default)</h3>
          <Pagination v-model="page2" :totalPages="10" size="md" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Large</h3>
          <Pagination v-model="page3" :totalPages="10" size="lg" />
        </div>
      </div>
    </div>
  \`
})`,...(Rt=(Qt=A.parameters)==null?void 0:Qt.docs)==null?void 0:Rt.source}}};var Xt,Yt,Zt;$.parameters={...$.parameters,docs:{...(Xt=$.parameters)==null?void 0:Xt.docs,source:{originalSource:`() => ({
  components: {
    Pagination
  },
  setup() {
    const page1 = ref(5);
    const page2 = ref(5);
    const page3 = ref(5);
    const page4 = ref(5);
    return {
      page1,
      page2,
      page3,
      page4
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Features</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Basic</h3>
          <Pagination v-model="page1" :totalPages="10" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">With Page Input</h3>
          <Pagination v-model="page2" :totalPages="20" showPageInput />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">With Page PhInfo</h3>
          <Pagination v-model="page3" :totalPages="10" showPageInfo />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Complete (All Features)</h3>
          <Pagination
            v-model="page4"
            :totalPages="20"
            :totalItems="487"
            :itemsPerPage="25"
            showPageInput
            showPageInfo
          />
        </div>
      </div>
    </div>
  \`
})`,...(Zt=(Yt=$.parameters)==null?void 0:Yt.docs)==null?void 0:Zt.source}}};var te,ee,ne;U.parameters={...U.parameters,docs:{...(te=U.parameters)==null?void 0:te.docs,source:{originalSource:`() => ({
  components: {
    Pagination
  },
  setup() {
    const page1 = ref(10);
    const page2 = ref(10);
    const page3 = ref(10);
    const page4 = ref(10);
    return {
      page1,
      page2,
      page3,
      page4
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Configurations</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 0, BoundaryCount: 1</h3>
          <Pagination v-model="page1" :totalPages="20" :siblingCount="0" :boundaryCount="1" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 1, BoundaryCount: 1 (Default)</h3>
          <Pagination v-model="page2" :totalPages="20" :siblingCount="1" :boundaryCount="1" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 2, BoundaryCount: 1</h3>
          <Pagination v-model="page3" :totalPages="20" :siblingCount="2" :boundaryCount="1" />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">SiblingCount: 1, BoundaryCount: 2</h3>
          <Pagination v-model="page4" :totalPages="20" :siblingCount="1" :boundaryCount="2" />
        </div>
      </div>
    </div>
  \`
})`,...(ne=(ee=U.parameters)==null?void 0:ee.docs)==null?void 0:ne.source}}};var ae,oe,se;q.parameters={...q.parameters,docs:{...(ae=q.parameters)==null?void 0:ae.docs,source:{originalSource:`() => ({
  components: {
    Pagination
  },
  setup() {
    const page1 = ref(1);
    const page2 = ref(3);
    const page3 = ref(50);
    const page4 = ref(5);
    return {
      page1,
      page2,
      page3,
      page4
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Pagination Use Cases</h2>

      <div style="display: flex; flex-direction: column; gap: 48px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Poucas Páginas (5 páginas)</h3>
          <Pagination v-model="page1" :totalPages="5" />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Sem ellipsis quando há poucas páginas
          </p>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Navegação de Blog (15 páginas)</h3>
          <Pagination v-model="page2" :totalPages="15" showPageInfo />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Grande Dataset (100 páginas)</h3>
          <Pagination
            v-model="page3"
            :totalPages="100"
            :totalItems="2487"
            :itemsPerPage="25"
            showPageInput
            showPageInfo
          />
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">
            Com input para saltar rapidamente entre páginas
          </p>
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 16px; font-weight: 600;">Tabela de Dados</h3>
          <div style="background: #f9fafb; padding: 20px; border-radius: 8px;">
            <div style="margin-bottom: 16px;">
              <table style="width: 100%; border-collapse: collapse;">
                <thead>
                  <tr style="border-bottom: 2px solid #e5e5e5;">
                    <th style="padding: 12px; text-align: left;">ID</th>
                    <th style="padding: 12px; text-align: left;">Nome</th>
                    <th style="padding: 12px; text-align: left;">Email</th>
                    <th style="padding: 12px; text-align: left;">Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style="border-bottom: 1px solid #e5e5e5;">
                    <td style="padding: 12px;">101</td>
                    <td style="padding: 12px;">João Silva</td>
                    <td style="padding: 12px;">joao@email.com</td>
                    <td style="padding: 12px;">Ativo</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e5e5e5;">
                    <td style="padding: 12px;">102</td>
                    <td style="padding: 12px;">Maria Santos</td>
                    <td style="padding: 12px;">maria@email.com</td>
                    <td style="padding: 12px;">Ativo</td>
                  </tr>
                  <tr style="border-bottom: 1px solid #e5e5e5;">
                    <td style="padding: 12px;">103</td>
                    <td style="padding: 12px;">Pedro Costa</td>
                    <td style="padding: 12px;">pedro@email.com</td>
                    <td style="padding: 12px;">Inativo</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <Pagination
              v-model="page4"
              :totalPages="25"
              :totalItems="623"
              :itemsPerPage="25"
              showPageInfo
            />
          </div>
        </div>
      </div>
    </div>
  \`
})`,...(se=(oe=q.parameters)==null?void 0:oe.docs)==null?void 0:se.source}}};var ie,re,de;j.parameters={...j.parameters,docs:{...(ie=j.parameters)==null?void 0:ie.docs,source:{originalSource:`() => ({
  components: {
    Pagination
  },
  setup() {
    const page1 = ref(1);
    const page2 = ref(5);
    const page3 = ref(3);
    const page4 = ref(10);
    const page5 = ref(7);
    const page6 = ref(50);
    return {
      page1,
      page2,
      page3,
      page4,
      page5,
      page6
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 40px; font-size: 24px; font-weight: 600;">Pagination Showcase</h2>

      <div style="display: grid; grid-template-columns: 1fr; gap: 40px;">
        <!-- Basic Small -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">Basic (5 pages)</h3>
          <Pagination v-model="page1" :totalPages="5" size="sm" />
        </div>

        <!-- With PhInfo -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">With Page PhInfo</h3>
          <Pagination v-model="page2" :totalPages="10" showPageInfo />
        </div>

        <!-- With Total Items -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">With Total Items PhInfo</h3>
          <Pagination v-model="page3" :totalPages="10" :totalItems="237" :itemsPerPage="25" showPageInfo />
        </div>

        <!-- With Page Input -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">With Page Input</h3>
          <Pagination v-model="page4" :totalPages="20" showPageInput />
        </div>

        <!-- Large Size Complete -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">Large + All Features</h3>
          <Pagination
            v-model="page5"
            :totalPages="15"
            :totalItems="352"
            :itemsPerPage="25"
            size="lg"
            showPageInput
            showPageInfo
          />
        </div>

        <!-- Many Pages -->
        <div>
          <h3 style="margin-bottom: 12px; font-size: 14px; font-weight: 600; color: #6b7280;">Many Pages (100 total)</h3>
          <Pagination
            v-model="page6"
            :totalPages="100"
            :totalItems="2487"
            :itemsPerPage="25"
            showPageInput
            showPageInfo
          />
        </div>
      </div>
    </div>
  \`
})`,...(de=(re=j.parameters)==null?void 0:re.docs)==null?void 0:de.source}}};var ge,le,pe;G.parameters={...G.parameters,docs:{...(ge=G.parameters)==null?void 0:ge.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-light</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Borders</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Acessibilidade</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li>Usa elemento <code>&lt;nav&gt;</code> com <code>aria-label</code></li>
          <li>Botões com <code>aria-label</code> descritivos</li>
          <li>Página atual com <code>aria-current="page"</code></li>
          <li>Estados disabled gerenciados corretamente</li>
          <li>Focus visível em todos os elementos interativos</li>
          <li>Navegação por teclado (Tab, Enter)</li>
          <li>Input numérico com labels acessíveis</li>
        </ul>
      </div>
    </div>
  \`
})`,...(pe=(le=G.parameters)==null?void 0:le.docs)==null?void 0:pe.source}}};const He=["Playground","Basic","FewPages","ManyPages","WithPageInput","WithPageInfo","WithTotalItems","WithoutFirstLast","Small","Medium","Large","SiblingCount0","SiblingCount1","SiblingCount2","BoundaryCount1","BoundaryCount2","Complete","AllSizes","AllFeatures","Configurations","UseCases","Showcase","DesignTokens"];export{$ as AllFeatures,A as AllSizes,v as Basic,W as BoundaryCount1,k as BoundaryCount2,M as Complete,U as Configurations,G as DesignTokens,w as FewPages,B as Large,C as ManyPages,F as Medium,y as Playground,j as Showcase,V as SiblingCount0,T as SiblingCount1,E as SiblingCount2,_ as Small,q as UseCases,I as WithPageInfo,z as WithPageInput,S as WithTotalItems,L as WithoutFirstLast,He as __namedExportsOrder,Oe as default};
