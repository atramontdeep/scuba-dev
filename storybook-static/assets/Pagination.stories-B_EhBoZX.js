import{c as m,a as h,e as c,t as M,F as H,z as K,u as k,o as x,v as a}from"./vue.esm-bundler-BXouRCJi.js";import{_ as ye}from"./_plugin-vue_export-helper-DlAUqK2U.js";const be={class:"scuba-pagination__per-page"},ve={class:"scuba-pagination__label"},Ce=["value"],we=["value"],ze={class:"scuba-pagination__info"},Ie=["aria-label"],Se=["disabled","aria-label"],Le=["onClick","aria-label","aria-current"],_e=["disabled","aria-label"],Fe={__name:"Pagination",props:{modelValue:{type:Number,default:1},totalItems:{type:Number,required:!0},itemsPerPage:{type:Number,default:10},perPageOptions:{type:Array,default:()=>[10,25,50,100]},siblingCount:{type:Number,default:1},boundaryCount:{type:Number,default:1},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},ariaLabel:{type:String,default:"Paginação"},previousLabel:{type:String,default:"Página anterior"},nextLabel:{type:String,default:"Próxima página"},pageLabel:{type:String,default:"Página"},perPageLabel:{type:String,default:"Itens por página"},ofLabel:{type:String,default:"de"}},emits:["update:modelValue","update:itemsPerPage","change"],setup(e,{emit:l}){const n=e,i=l,d=m(()=>n.modelValue),f=m(()=>Math.ceil(n.totalItems/n.itemsPerPage)),le=m(()=>d.value===1),pe=m(()=>d.value===f.value),ce=m(()=>{const t=["scuba-pagination"];return t.push(`scuba-pagination--${n.size}`),t}),me=m(()=>{const t=(d.value-1)*n.itemsPerPage+1,o=Math.min(d.value*n.itemsPerPage,n.totalItems);return`${t}-${o} ${n.ofLabel} ${n.totalItems}`}),ue=m(()=>{const t=[],o=f.value,g=d.value,j=n.siblingCount,p=n.boundaryCount;for(let r=1;r<=Math.min(p,o);r++)t.push(r);const G=Math.max(g-j,p+1),J=Math.min(g+j,o-p);G>p+1&&t.push("...");for(let r=G;r<=J;r++)r>p&&r<=o-p&&t.push(r);J<o-p&&t.push("...");for(let r=Math.max(o-p+1,p+1);r<=o;r++)t.includes(r)||t.push(r);return t}),he=t=>{const o=["scuba-pagination__button","scuba-pagination__button--page"];return t===d.value&&o.push("scuba-pagination__button--active"),o},O=t=>{t<1||t>f.value||t===d.value||(i("update:modelValue",t),i("change",t))},xe=()=>{O(d.value-1)},Pe=()=>{O(d.value+1)},fe=t=>{const o=parseInt(t.target.value);i("update:itemsPerPage",o),d.value!==1&&i("update:modelValue",1)};return(t,o)=>(x(),h("div",{class:k(ce.value)},[c("div",be,[c("label",ve,M(e.perPageLabel),1),c("select",{value:e.itemsPerPage,onChange:fe,class:"scuba-pagination__select"},[(x(!0),h(H,null,K(e.perPageOptions,g=>(x(),h("option",{key:g,value:g},M(g),9,we))),128))],40,Ce)]),c("div",ze,M(me.value),1),c("nav",{class:"scuba-pagination__nav","aria-label":e.ariaLabel},[c("button",{class:k(["scuba-pagination__button","scuba-pagination__button--nav"]),onClick:xe,disabled:le.value,"aria-label":e.previousLabel},[...o[0]||(o[0]=[c("i",{class:"ph ph-caret-left"},null,-1)])],8,Se),t.page!=="..."?(x(!0),h(H,{key:0},K(ue.value,g=>(x(),h("button",{key:g,class:k(he(g)),onClick:j=>O(g),"aria-label":`${e.pageLabel} ${g}`,"aria-current":g===d.value?"page":void 0},M(g),11,Le))),128)):(x(),h("span",{key:`ellipsis-${t.page}`,class:"scuba-pagination__ellipsis"}," ... ")),c("button",{class:k(["scuba-pagination__button","scuba-pagination__button--nav"]),onClick:Pe,disabled:pe.value,"aria-label":e.nextLabel},[...o[1]||(o[1]=[c("i",{class:"ph ph-caret-right"},null,-1)])],8,_e)],8,Ie)],2))}},u=ye(Fe,[["__scopeId","data-v-6e00f38e"]]),Te={title:"Scuba/Pagination",component:u,tags:["autodocs"],argTypes:{modelValue:{control:"number",description:"Página atual (v-model)"},totalPages:{control:"number",description:"Total de páginas"},siblingCount:{control:"number",description:"Número de páginas vizinhas ao redor da página atual"},boundaryCount:{control:"number",description:"Número de páginas no início e fim"},showFirstLast:{control:"boolean",description:"Mostrar botões primeira/última página"},showPageInput:{control:"boolean",description:"Mostrar input para ir para página"},showPageInfo:{control:"boolean",description:"Mostrar informação de página"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho da paginação"},totalItems:{control:"number",description:"Total de itens (para info de página)"},itemsPerPage:{control:"number",description:"Itens por página"},onChange:{action:"changed"}}},s=e=>({components:{Pagination:u},setup(){return{currentPage:a(e.modelValue||1),args:e,handleChange:i=>{console.log("Page changed to:",i)}}},template:'<Pagination v-bind="args" v-model="currentPage" @change="handleChange" />'}),P=s.bind({});P.args={totalPages:10,totalItems:237,itemsPerPage:25,siblingCount:1,boundaryCount:1,showFirstLast:!0,showPageInfo:!0,size:"md"};P.parameters={docs:{description:{story:"Use os controles abaixo para testar diferentes configurações da paginação."}}};const y=s.bind({});y.args={totalPages:10,showFirstLast:!0};const b=s.bind({});b.args={totalPages:5,showFirstLast:!0};const v=s.bind({});v.args={totalPages:100,showFirstLast:!0};const C=s.bind({});C.args={totalPages:20,showFirstLast:!0,showPageInput:!0};const w=s.bind({});w.args={totalPages:10,showFirstLast:!0,showPageInfo:!0};const z=s.bind({});z.args={totalPages:10,totalItems:237,itemsPerPage:25,showFirstLast:!0,showPageInfo:!0};const I=s.bind({});I.args={totalPages:10,showFirstLast:!1};const S=s.bind({});S.args={totalPages:10,size:"sm",showFirstLast:!0};const L=s.bind({});L.args={totalPages:10,size:"md",showFirstLast:!0};const _=s.bind({});_.args={totalPages:10,size:"lg",showFirstLast:!0};const F=s.bind({});F.args={totalPages:20,siblingCount:0,boundaryCount:1,showFirstLast:!0};const B=s.bind({});B.args={totalPages:20,siblingCount:1,boundaryCount:1,showFirstLast:!0};const E=s.bind({});E.args={totalPages:20,siblingCount:2,boundaryCount:1,showFirstLast:!0};const T=s.bind({});T.args={totalPages:20,siblingCount:1,boundaryCount:1,showFirstLast:!0};const V=s.bind({});V.args={totalPages:20,siblingCount:1,boundaryCount:2,showFirstLast:!0};const W=s.bind({});W.args={totalPages:50,totalItems:1234,itemsPerPage:25,siblingCount:1,boundaryCount:1,showFirstLast:!0,showPageInput:!0,showPageInfo:!0,size:"md"};const D=()=>({components:{Pagination:u},setup(){const e=a(5),l=a(5),n=a(5);return{page1:e,page2:l,page3:n}},template:`
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
  `}),A=()=>({components:{Pagination:u},setup(){const e=a(5),l=a(5),n=a(5),i=a(5);return{page1:e,page2:l,page3:n,page4:i}},template:`
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
  `}),N=()=>({components:{Pagination:u},setup(){const e=a(10),l=a(10),n=a(10),i=a(10);return{page1:e,page2:l,page3:n,page4:i}},template:`
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
  `}),U=()=>({components:{Pagination:u},setup(){const e=a(1),l=a(3),n=a(50),i=a(5);return{page1:e,page2:l,page3:n,page4:i}},template:`
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
  `}),$=()=>({components:{Pagination:u},setup(){const e=a(1),l=a(5),n=a(3),i=a(10),d=a(7),f=a(50);return{page1:e,page2:l,page3:n,page4:i,page5:d,page6:f}},template:`
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
  `}),q=()=>({template:`
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
  `});var Q,R,X;P.parameters={...P.parameters,docs:{...(Q=P.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
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
})`,...(X=(R=P.parameters)==null?void 0:R.docs)==null?void 0:X.source}}};var Y,Z,tt;y.parameters={...y.parameters,docs:{...(Y=y.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
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
})`,...(tt=(Z=y.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var et,nt,at;b.parameters={...b.parameters,docs:{...(et=b.parameters)==null?void 0:et.docs,source:{originalSource:`args => ({
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
})`,...(at=(nt=b.parameters)==null?void 0:nt.docs)==null?void 0:at.source}}};var ot,st,it;v.parameters={...v.parameters,docs:{...(ot=v.parameters)==null?void 0:ot.docs,source:{originalSource:`args => ({
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
})`,...(it=(st=v.parameters)==null?void 0:st.docs)==null?void 0:it.source}}};var rt,dt,gt;C.parameters={...C.parameters,docs:{...(rt=C.parameters)==null?void 0:rt.docs,source:{originalSource:`args => ({
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
})`,...(gt=(dt=C.parameters)==null?void 0:dt.docs)==null?void 0:gt.source}}};var lt,pt,ct;w.parameters={...w.parameters,docs:{...(lt=w.parameters)==null?void 0:lt.docs,source:{originalSource:`args => ({
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
})`,...(ct=(pt=w.parameters)==null?void 0:pt.docs)==null?void 0:ct.source}}};var mt,ut,ht;z.parameters={...z.parameters,docs:{...(mt=z.parameters)==null?void 0:mt.docs,source:{originalSource:`args => ({
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
})`,...(ht=(ut=z.parameters)==null?void 0:ut.docs)==null?void 0:ht.source}}};var xt,Pt,ft;I.parameters={...I.parameters,docs:{...(xt=I.parameters)==null?void 0:xt.docs,source:{originalSource:`args => ({
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
})`,...(ft=(Pt=I.parameters)==null?void 0:Pt.docs)==null?void 0:ft.source}}};var yt,bt,vt;S.parameters={...S.parameters,docs:{...(yt=S.parameters)==null?void 0:yt.docs,source:{originalSource:`args => ({
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
})`,...(vt=(bt=S.parameters)==null?void 0:bt.docs)==null?void 0:vt.source}}};var Ct,wt,zt;L.parameters={...L.parameters,docs:{...(Ct=L.parameters)==null?void 0:Ct.docs,source:{originalSource:`args => ({
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
})`,...(zt=(wt=L.parameters)==null?void 0:wt.docs)==null?void 0:zt.source}}};var It,St,Lt;_.parameters={..._.parameters,docs:{...(It=_.parameters)==null?void 0:It.docs,source:{originalSource:`args => ({
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
})`,...(Lt=(St=_.parameters)==null?void 0:St.docs)==null?void 0:Lt.source}}};var _t,Ft,Bt;F.parameters={...F.parameters,docs:{...(_t=F.parameters)==null?void 0:_t.docs,source:{originalSource:`args => ({
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
})`,...(Bt=(Ft=F.parameters)==null?void 0:Ft.docs)==null?void 0:Bt.source}}};var Et,Tt,Vt;B.parameters={...B.parameters,docs:{...(Et=B.parameters)==null?void 0:Et.docs,source:{originalSource:`args => ({
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
})`,...(Vt=(Tt=B.parameters)==null?void 0:Tt.docs)==null?void 0:Vt.source}}};var Wt,Mt,kt;E.parameters={...E.parameters,docs:{...(Wt=E.parameters)==null?void 0:Wt.docs,source:{originalSource:`args => ({
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
})`,...(kt=(Mt=E.parameters)==null?void 0:Mt.docs)==null?void 0:kt.source}}};var Dt,At,Nt;T.parameters={...T.parameters,docs:{...(Dt=T.parameters)==null?void 0:Dt.docs,source:{originalSource:`args => ({
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
})`,...(Nt=(At=T.parameters)==null?void 0:At.docs)==null?void 0:Nt.source}}};var Ut,$t,qt;V.parameters={...V.parameters,docs:{...(Ut=V.parameters)==null?void 0:Ut.docs,source:{originalSource:`args => ({
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
})`,...(qt=($t=V.parameters)==null?void 0:$t.docs)==null?void 0:qt.source}}};var Ot,jt,Gt;W.parameters={...W.parameters,docs:{...(Ot=W.parameters)==null?void 0:Ot.docs,source:{originalSource:`args => ({
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
})`,...(Gt=(jt=W.parameters)==null?void 0:jt.docs)==null?void 0:Gt.source}}};var Jt,Ht,Kt;D.parameters={...D.parameters,docs:{...(Jt=D.parameters)==null?void 0:Jt.docs,source:{originalSource:`() => ({
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
})`,...(Kt=(Ht=D.parameters)==null?void 0:Ht.docs)==null?void 0:Kt.source}}};var Qt,Rt,Xt;A.parameters={...A.parameters,docs:{...(Qt=A.parameters)==null?void 0:Qt.docs,source:{originalSource:`() => ({
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
})`,...(Xt=(Rt=A.parameters)==null?void 0:Rt.docs)==null?void 0:Xt.source}}};var Yt,Zt,te;N.parameters={...N.parameters,docs:{...(Yt=N.parameters)==null?void 0:Yt.docs,source:{originalSource:`() => ({
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
})`,...(te=(Zt=N.parameters)==null?void 0:Zt.docs)==null?void 0:te.source}}};var ee,ne,ae;U.parameters={...U.parameters,docs:{...(ee=U.parameters)==null?void 0:ee.docs,source:{originalSource:`() => ({
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
})`,...(ae=(ne=U.parameters)==null?void 0:ne.docs)==null?void 0:ae.source}}};var oe,se,ie;$.parameters={...$.parameters,docs:{...(oe=$.parameters)==null?void 0:oe.docs,source:{originalSource:`() => ({
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
})`,...(ie=(se=$.parameters)==null?void 0:se.docs)==null?void 0:ie.source}}};var re,de,ge;q.parameters={...q.parameters,docs:{...(re=q.parameters)==null?void 0:re.docs,source:{originalSource:`() => ({
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
})`,...(ge=(de=q.parameters)==null?void 0:de.docs)==null?void 0:ge.source}}};const Ve=["Playground","Basic","FewPages","ManyPages","WithPageInput","WithPageInfo","WithTotalItems","WithoutFirstLast","Small","Medium","Large","SiblingCount0","SiblingCount1","SiblingCount2","BoundaryCount1","BoundaryCount2","Complete","AllSizes","AllFeatures","Configurations","UseCases","Showcase","DesignTokens"];export{A as AllFeatures,D as AllSizes,y as Basic,T as BoundaryCount1,V as BoundaryCount2,W as Complete,N as Configurations,q as DesignTokens,b as FewPages,_ as Large,v as ManyPages,L as Medium,P as Playground,$ as Showcase,F as SiblingCount0,B as SiblingCount1,E as SiblingCount2,S as Small,U as UseCases,w as WithPageInfo,C as WithPageInput,z as WithTotalItems,I as WithoutFirstLast,Ve as __namedExportsOrder,Te as default};
