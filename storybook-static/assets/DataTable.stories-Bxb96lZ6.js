import{n as L,q as me,c as W,P as ce,a as l,b as g,e as m,H as p,t as y,F as k,u as z,p as T,g as M,o as a,G as ue,y as V,r as O,h as fe}from"./vue.esm-bundler-cjlVRrb_.js";import{C as H}from"./Checkbox-DlfbFmyF.js";import{B as ve}from"./Button-CsaQJ0tt.js";import{_ as ie}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as R}from"./TaskBar-axOWGFFw.js";import{S as j}from"./Status-2yRhwmvL.js";import{B as A}from"./Breadcrumb-BjsoTfAy.js";function ge(t,f){const n=L(new Set),d=L(new Set),c=me({key:null,dir:null}),v=W(()=>t.length?t.every(o=>n.has(o[f])):!1),s=W(()=>n.size>0&&!v.value);function $(){v.value?n.clear():t.forEach(o=>n.add(o[f]))}function I(o){n.has(o)?n.delete(o):n.add(o)}function F(o){d.has(o)?d.delete(o):d.add(o)}function w(o){if(c.value.key!==o){c.value={key:o,dir:"asc"};return}c.value.dir==="asc"?c.value.dir="desc":c.value.dir==="desc"?c.value.dir=null:c.value={key:o,dir:"asc"}}function D(o){const r=c.value;if(!r.key||!r.dir)return o;const i=r.key,e=r.dir==="asc"?1:-1;return[...o].sort((u,pe)=>{const b=u[i],x=pe[i];return b==null&&x==null?0:b==null?-1*e:x==null?1*e:typeof b=="string"&&typeof x=="string"?b.localeCompare(x)*e:(b>x?1:b<x?-1:0)*e})}return{selected:n,expanded:d,sort:c,allSelected:v,someSelected:s,toggleAll:$,toggleRow:I,toggleExpanded:F,setSort:w,sortRows:D}}const be={class:"dt-wrapper"},xe={key:0,class:"dt-toolbar",role:"region","aria-label":"Ações em lote"},ye={class:"dt-toolbar__info"},he={class:"dt-toolbar__counter"},we={class:"dt-toolbar__actions"},ke={class:"dt-table"},Te={key:0,class:"dt-th dt-th--checkbox"},Se={key:1,class:"dt-th dt-th--expander"},Be=["onClick"],Ce={key:0,class:"dt-td dt-td--checkbox"},Ae={key:1,class:"dt-td dt-td--expander"},Ee=["onClick","aria-expanded"],De={key:0,class:"dt-row--expanded"},ze={key:0},Pe={key:1},_e=["colspan"],Re={__name:"DataTable",props:{rows:{type:Array,required:!0},columns:{type:Array,required:!0},rowKey:{type:String,default:"id"},selectable:{type:Boolean,default:!0},expandable:{type:Boolean,default:!0},actions:{type:Array,default:()=>[]}},emits:["action","update:sort"],setup(t,{emit:f}){const n=t,d=f,{rows:c,rowKey:v}=ce(n),s=ge(c.value,v.value),$=W(()=>s.sortRows(c.value));function I(r){const i=c.value.filter(e=>s.selected.has(e[n.rowKey]));d("action",{key:r.key,rows:i})}function F(r){r.sortable&&(s.setSort(r.key),d("update:sort",s.sort.value))}function w(r){return s.expanded.has(r[n.rowKey])}function D(r){if(!r.sortable)return"";const i=s.sort.value.key,e=s.sort.value.dir;return i!==r.key?"ph-arrows-down-up":e==="asc"?"ph-arrow-up":"ph-arrow-down"}function o(r){const i=D(r);return i?"ph "+i+" dt-sort-icon":""}return(r,i)=>(a(),l("div",be,[t.selectable&&p(s).selected.size>0?(a(),l("div",xe,[m("div",ye,[i[1]||(i[1]=m("i",{class:"ph ph-minus-circle dt-toolbar__icon"},null,-1)),m("span",he,y(p(s).selected.size)+" selecionado"+y(p(s).selected.size>1?"s":""),1)]),i[2]||(i[2]=m("div",{class:"dt-toolbar__divider"},null,-1)),m("div",we,[(a(!0),l(k,null,z(t.actions,e=>(a(),ue(ve,{key:e.key,variant:"text",size:"sm","icon-left":e.icon,label:e.label,onClick:u=>I(e)},null,8,["icon-left","label","onClick"]))),128))])])):g("",!0),m("table",ke,[m("thead",null,[m("tr",{class:T({"dt-header-selected":p(s).selected.size>0})},[t.selectable?(a(),l("th",Te,[M(H,{"model-value":p(s).allSelected,indeterminate:p(s).someSelected,size:"sm","onUpdate:modelValue":i[0]||(i[0]=e=>p(s).toggleAll()),"aria-label":"Selecionar tudo"},null,8,["model-value","indeterminate"])])):g("",!0),t.expandable?(a(),l("th",Se)):g("",!0),(a(!0),l(k,null,z(t.columns,e=>(a(),l("th",{key:e.key,class:T(["dt-th",{"dt-th--sortable":e.sortable}]),style:V({width:e.width}),onClick:u=>F(e)},[m("div",{class:"dt-th__content",style:V({justifyContent:e.align==="right"?"flex-end":e.align==="center"?"center":"flex-start"})},[m("span",null,y(e.header),1),e.sortable&&D(e)?(a(),l("i",{key:0,class:T(o(e))},null,2)):g("",!0)],4)],14,Be))),128))],2)]),m("tbody",null,[(a(!0),l(k,null,z($.value,e=>(a(),l(k,{key:e[p(v)]},[m("tr",{class:T({"dt-row--selected":p(s).selected.has(e[p(v)])})},[t.selectable?(a(),l("td",Ce,[M(H,{"model-value":p(s).selected.has(e[p(v)]),size:"sm","onUpdate:modelValue":u=>p(s).toggleRow(e[p(v)]),"aria-label":`Selecionar linha ${e[p(v)]}`},null,8,["model-value","onUpdate:modelValue","aria-label"])])):g("",!0),t.expandable?(a(),l("td",Ae,[m("button",{class:"dt-expander",onClick:u=>p(s).toggleExpanded(e[p(v)]),"aria-expanded":w(e)},[m("i",{class:T(["ph ph-caret-right",{"dt-expander--expanded":w(e)}])},null,2)],8,Ee)])):g("",!0),(a(!0),l(k,null,z(t.columns,u=>(a(),l("td",{key:u.key,class:"dt-td",style:V({textAlign:u.align||"left",width:u.width})},[O(r.$slots,"cell-"+u.key,{row:e,value:e[u.key]},()=>[fe(y(e[u.key]),1)],!0)],4))),128))],2),t.expandable&&w(e)?(a(),l("tr",De,[t.selectable?(a(),l("td",ze)):g("",!0),t.expandable?(a(),l("td",Pe)):g("",!0),m("td",{colspan:t.columns.length,class:"dt-td dt-td--expanded"},[O(r.$slots,"expanded",{row:e},()=>[i[3]||(i[3]=m("div",{class:"dt-expanded-default"}," Sem detalhes ",-1))],!0)],8,_e)])):g("",!0)],64))),128))])])]))}},h=ie(Re,[["__scopeId","data-v-7ce01d3f"]]),je={class:"dt-avatar"},$e=["src","alt"],Ie={key:1,class:"dt-avatar__fallback"},Fe={class:"dt-avatar__name"},Ve={__name:"AvatarCell",props:{name:{type:String,required:!0},image:{type:String,default:""}},setup(t){return(f,n)=>{var d;return a(),l("div",je,[t.image?(a(),l("img",{key:0,src:t.image,alt:t.name},null,8,$e)):(a(),l("div",Ie,y(((d=t.name)==null?void 0:d[0])??"?"),1)),m("span",Fe,y(t.name),1)])}}},K=ie(Ve,[["__scopeId","data-v-7fda72da"]]),He={title:"Scuba/DataTable",component:h,tags:["autodocs"],argTypes:{rows:{control:"object",description:"Array de objetos com os dados das linhas"},columns:{control:"object",description:"Array de objetos definindo as colunas (key, header, sortable, width, align)"},rowKey:{control:"text",description:"Chave única para identificar cada linha"},selectable:{control:"boolean",description:"Permite seleção múltipla de linhas"},expandable:{control:"boolean",description:"Permite expandir linhas para mostrar detalhes"},actions:{control:"object",description:"Array de ações disponíveis quando há linhas selecionadas"}}},N=[{id:1,responsavel:{name:"Ana Silva",image:"https://i.pravatar.cc/64?img=5"},tarefas:{completed:21,total:200},atraso:3,ultima:"2 dias atrás",status:"in-progress"},{id:2,responsavel:{name:"Carlos Santos",image:"https://i.pravatar.cc/64?img=11"},tarefas:{completed:0,total:0},atraso:0,ultima:"5 dias atrás",status:"not-started"},{id:3,responsavel:{name:"Maria Oliveira",image:"https://i.pravatar.cc/64?img=8"},tarefas:{completed:10,total:10},atraso:0,ultima:"1 hora atrás",status:"completed"},{id:4,responsavel:{name:"João Pereira",image:"https://i.pravatar.cc/64?img=12"},tarefas:{completed:45,total:80},atraso:5,ultima:"3 dias atrás",status:"about-to-expire"},{id:5,responsavel:{name:"Beatriz Costa",image:"https://i.pravatar.cc/64?img=15"},tarefas:{completed:90,total:100},atraso:0,ultima:"30 minutos atrás",status:"ready-for-approval"}],q=[{key:"responsavel",header:"Responsável",sortable:!0,width:"280px"},{key:"tarefas",header:"Progresso",sortable:!1,width:"260px"},{key:"atraso",header:"Em atraso",sortable:!0,width:"120px",align:"center"},{key:"ultima",header:"Última atividade",sortable:!0,width:"180px"},{key:"status",header:"Status",sortable:!1,width:"200px"}],de=[{key:"reminder",label:"Enviar lembrete",icon:"ph ph-envelope"},{key:"export",label:"Exportar CSV",icon:"ph ph-download"},{key:"assign",label:"Reatribuir",icon:"ph ph-user-switch"}],E=[{label:"Home",href:"#"},{label:"Components",href:"#"},{label:"DataTable"}],S=t=>({components:{DataTable:h,AvatarCell:K,TaskBar:R,Status:j,Breadcrumb:A},setup(){function f(d){console.log("Action:",d.key,"Rows:",d.rows),alert(`Ação: ${d.key}
Linhas selecionadas: ${d.rows.length}`)}function n(d){console.log("Sort:",d)}return{args:t,onAction:f,onSort:n,breadcrumbItems:E}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Breadcrumb :items="breadcrumbItems" style="margin-bottom: 8px;" />

      <h1 style="margin: 0 0 4px 0; font-size: 32px; font-weight: 600; color: #111827;">
        DataTable
      </h1>

      <p style="margin: 0 0 32px 0; font-size: 16px; color: #6B7280; line-height: 1.5;">
        Tabela de dados completa com seleção múltipla, ordenação, expansão de linhas e ações em lote.
      </p>

      <DataTable
        v-bind="args"
        @action="onAction"
        @update:sort="onSort"
      >
        <!-- Célula: Responsável -->
        <template #cell-responsavel="{ row }">
          <AvatarCell
            :name="row.responsavel.name"
            :image="row.responsavel.image"
          />
        </template>

        <!-- Célula: Progresso -->
        <template #cell-tarefas="{ row }">
          <TaskBar
            :current="row.tarefas.completed"
            :total="row.tarefas.total"
          />
        </template>

        <!-- Célula: Em atraso -->
        <template #cell-atraso="{ value }">
          <div style="display: flex; justify-content: center; width: 100%;">
            <span :style="{
              color: value > 0 ? '#EF4444' : '#6B7280',
              fontWeight: value > 0 ? 600 : 400
            }">
              {{ value }}
            </span>
          </div>
        </template>

        <!-- Célula: Última atividade -->
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>

        <!-- Célula: Status -->
        <template #cell-status="{ row }">
          <Status :status="row.status" />
        </template>

        <!-- Conteúdo expandido -->
        <template #expanded="{ row }">
          <div style="padding: 12px 0; color: #6B7280; font-size: 13px; line-height: 1.6;">
            <div style="margin-bottom: 8px;">
              <strong style="color: #1F2937;">Detalhes de {{ row.responsavel.name }}</strong>
            </div>
            <div>Última atividade: {{ row.ultima }}</div>
            <div>Tarefas em atraso: {{ row.atraso }}</div>
            <div>Progresso: {{ row.tarefas.completed }}/{{ row.tarefas.total }} tarefas</div>
          </div>
        </template>
      </DataTable>
    </div>
  `});S.args={rows:N,columns:q,rowKey:"id",selectable:!0,expandable:!0,actions:de};const B=t=>({components:{DataTable:h,AvatarCell:K,TaskBar:R,Status:j,Breadcrumb:A},setup(){return{args:t,breadcrumbItems:E}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Breadcrumb :items="breadcrumbItems" style="margin-bottom: 8px;" />

      <h2 style="margin: 0 0 4px 0; font-size: 24px; font-weight: 600; color: #111827;">
        Tabela Simples
      </h2>

      <p style="margin: 0 0 32px 0; font-size: 14px; color: #6B7280;">
        Tabela sem seleção ou expansão de linhas.
      </p>

      <DataTable v-bind="args">
        <template #cell-responsavel="{ row }">
          <AvatarCell
            :name="row.responsavel.name"
            :image="row.responsavel.image"
          />
        </template>
        <template #cell-tarefas="{ row }">
          <TaskBar
            :current="row.tarefas.completed"
            :total="row.tarefas.total"
          />
        </template>
        <template #cell-atraso="{ value }">
          <div style="display: flex; justify-content: center; width: 100%;">
            <span :style="{
              color: value > 0 ? '#EF4444' : '#6B7280',
              fontWeight: value > 0 ? 600 : 400
            }">
              {{ value }}
            </span>
          </div>
        </template>
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>
        <template #cell-status="{ row }">
          <Status :status="row.status" />
        </template>
      </DataTable>
    </div>
  `});B.args={rows:N,columns:q,rowKey:"id",selectable:!1,expandable:!1,actions:[]};const C=t=>({components:{DataTable:h,AvatarCell:K,TaskBar:R,Status:j,Breadcrumb:A},setup(){function f(n){console.log("Action:",n.key,"Rows:",n.rows),alert(`Ação: ${n.key}
Linhas selecionadas: ${n.rows.length}`)}return{args:t,onAction:f,breadcrumbItems:E}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Breadcrumb :items="breadcrumbItems" style="margin-bottom: 8px;" />

      <h2 style="margin: 0 0 4px 0; font-size: 24px; font-weight: 600; color: #111827;">
        Com Seleção Múltipla
      </h2>

      <p style="margin: 0 0 32px 0; font-size: 14px; color: #6B7280;">
        Tabela com seleção múltipla e ações em lote, mas sem expansão de linhas.
      </p>

      <DataTable v-bind="args" @action="onAction">
        <template #cell-responsavel="{ row }">
          <AvatarCell
            :name="row.responsavel.name"
            :image="row.responsavel.image"
          />
        </template>
        <template #cell-tarefas="{ row }">
          <TaskBar
            :current="row.tarefas.completed"
            :total="row.tarefas.total"
          />
        </template>
        <template #cell-atraso="{ value }">
          <div style="display: flex; justify-content: center; width: 100%;">
            <span :style="{
              color: value > 0 ? '#EF4444' : '#6B7280',
              fontWeight: value > 0 ? 600 : 400
            }">
              {{ value }}
            </span>
          </div>
        </template>
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>
        <template #cell-status="{ row }">
          <Status :status="row.status" />
        </template>
      </DataTable>
    </div>
  `});C.args={rows:N,columns:q,rowKey:"id",selectable:!0,expandable:!1,actions:de};const P=()=>({components:{DataTable:h,Status:j,Breadcrumb:A},setup(){return{statusRows:[{id:1,name:"Tarefa 1",status:"not-started"},{id:2,name:"Tarefa 2",status:"in-progress"},{id:3,name:"Tarefa 3",status:"ready-for-approval"},{id:4,name:"Tarefa 4",status:"audited"},{id:5,name:"Tarefa 5",status:"about-to-expire"},{id:6,name:"Tarefa 6",status:"expired"},{id:7,name:"Tarefa 7",status:"completed"},{id:8,name:"Tarefa 8",status:"waiting-response"},{id:9,name:"Tarefa 9",status:"responded"},{id:10,name:"Tarefa 10",status:"validating"},{id:11,name:"Tarefa 11",status:"adjusting"},{id:12,name:"Tarefa 12",status:"validated"}],statusColumns:[{key:"name",header:"Nome",width:"200px"},{key:"status",header:"Status",width:"250px"}],breadcrumbItems:E}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Breadcrumb :items="breadcrumbItems" style="margin-bottom: 8px;" />

      <h2 style="margin: 0 0 4px 0; font-size: 24px; font-weight: 600; color: #111827;">
        Todos os Status
      </h2>

      <p style="margin: 0 0 32px 0; font-size: 14px; color: #6B7280;">
        Demonstração de todos os status disponíveis no componente Status.
      </p>

      <DataTable
        :rows="statusRows"
        :columns="statusColumns"
        row-key="id"
        :selectable="false"
        :expandable="false"
        :actions="[]"
      >
        <template #cell-status="{ row }">
          <Status :status="row.status" />
        </template>
      </DataTable>
    </div>
  `}),_=()=>({components:{DataTable:h,TaskBar:R,Breadcrumb:A},setup(){return{progressRows:[{id:1,name:"Projeto A",completed:0,total:100},{id:2,name:"Projeto B",completed:13,total:100},{id:3,name:"Projeto C",completed:50,total:100},{id:4,name:"Projeto D",completed:87,total:100},{id:5,name:"Projeto E",completed:100,total:100}],progressColumns:[{key:"name",header:"Projeto",width:"200px"},{key:"progress",header:"Progresso",width:"300px"}],breadcrumbItems:E}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Breadcrumb :items="breadcrumbItems" style="margin-bottom: 8px;" />

      <h2 style="margin: 0 0 4px 0; font-size: 24px; font-weight: 600; color: #111827;">
        Estados de Progresso
      </h2>

      <p style="margin: 0 0 32px 0; font-size: 14px; color: #6B7280;">
        Demonstração dos estados da barra de progresso: 0%, 1-99%, e 100%.
      </p>

      <DataTable
        :rows="progressRows"
        :columns="progressColumns"
        row-key="id"
        :selectable="false"
        :expandable="false"
        :actions="[]"
      >
        <template #cell-progress="{ row }">
          <TaskBar :current="row.completed" :total="row.total" />
        </template>
      </DataTable>
    </div>
  `});var U,G,J;S.parameters={...S.parameters,docs:{...(U=S.parameters)==null?void 0:U.docs,source:{originalSource:`args => ({
  components: {
    DataTable,
    AvatarCell,
    TaskBar,
    Status,
    Breadcrumb
  },
  setup() {
    function onAction(payload) {
      console.log('Action:', payload.key, 'Rows:', payload.rows);
      alert(\`Ação: \${payload.key}\\nLinhas selecionadas: \${payload.rows.length}\`);
    }
    function onSort(sort) {
      console.log('Sort:', sort);
    }
    return {
      args,
      onAction,
      onSort,
      breadcrumbItems
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Breadcrumb :items="breadcrumbItems" style="margin-bottom: 8px;" />

      <h1 style="margin: 0 0 4px 0; font-size: 32px; font-weight: 600; color: #111827;">
        DataTable
      </h1>

      <p style="margin: 0 0 32px 0; font-size: 16px; color: #6B7280; line-height: 1.5;">
        Tabela de dados completa com seleção múltipla, ordenação, expansão de linhas e ações em lote.
      </p>

      <DataTable
        v-bind="args"
        @action="onAction"
        @update:sort="onSort"
      >
        <!-- Célula: Responsável -->
        <template #cell-responsavel="{ row }">
          <AvatarCell
            :name="row.responsavel.name"
            :image="row.responsavel.image"
          />
        </template>

        <!-- Célula: Progresso -->
        <template #cell-tarefas="{ row }">
          <TaskBar
            :current="row.tarefas.completed"
            :total="row.tarefas.total"
          />
        </template>

        <!-- Célula: Em atraso -->
        <template #cell-atraso="{ value }">
          <div style="display: flex; justify-content: center; width: 100%;">
            <span :style="{
              color: value > 0 ? '#EF4444' : '#6B7280',
              fontWeight: value > 0 ? 600 : 400
            }">
              {{ value }}
            </span>
          </div>
        </template>

        <!-- Célula: Última atividade -->
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>

        <!-- Célula: Status -->
        <template #cell-status="{ row }">
          <Status :status="row.status" />
        </template>

        <!-- Conteúdo expandido -->
        <template #expanded="{ row }">
          <div style="padding: 12px 0; color: #6B7280; font-size: 13px; line-height: 1.6;">
            <div style="margin-bottom: 8px;">
              <strong style="color: #1F2937;">Detalhes de {{ row.responsavel.name }}</strong>
            </div>
            <div>Última atividade: {{ row.ultima }}</div>
            <div>Tarefas em atraso: {{ row.atraso }}</div>
            <div>Progresso: {{ row.tarefas.completed }}/{{ row.tarefas.total }} tarefas</div>
          </div>
        </template>
      </DataTable>
    </div>
  \`
})`,...(J=(G=S.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};var Q,X,Y;B.parameters={...B.parameters,docs:{...(Q=B.parameters)==null?void 0:Q.docs,source:{originalSource:`args => ({
  components: {
    DataTable,
    AvatarCell,
    TaskBar,
    Status,
    Breadcrumb
  },
  setup() {
    return {
      args,
      breadcrumbItems
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Breadcrumb :items="breadcrumbItems" style="margin-bottom: 8px;" />

      <h2 style="margin: 0 0 4px 0; font-size: 24px; font-weight: 600; color: #111827;">
        Tabela Simples
      </h2>

      <p style="margin: 0 0 32px 0; font-size: 14px; color: #6B7280;">
        Tabela sem seleção ou expansão de linhas.
      </p>

      <DataTable v-bind="args">
        <template #cell-responsavel="{ row }">
          <AvatarCell
            :name="row.responsavel.name"
            :image="row.responsavel.image"
          />
        </template>
        <template #cell-tarefas="{ row }">
          <TaskBar
            :current="row.tarefas.completed"
            :total="row.tarefas.total"
          />
        </template>
        <template #cell-atraso="{ value }">
          <div style="display: flex; justify-content: center; width: 100%;">
            <span :style="{
              color: value > 0 ? '#EF4444' : '#6B7280',
              fontWeight: value > 0 ? 600 : 400
            }">
              {{ value }}
            </span>
          </div>
        </template>
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>
        <template #cell-status="{ row }">
          <Status :status="row.status" />
        </template>
      </DataTable>
    </div>
  \`
})`,...(Y=(X=B.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,ee,te;C.parameters={...C.parameters,docs:{...(Z=C.parameters)==null?void 0:Z.docs,source:{originalSource:`args => ({
  components: {
    DataTable,
    AvatarCell,
    TaskBar,
    Status,
    Breadcrumb
  },
  setup() {
    function onAction(payload) {
      console.log('Action:', payload.key, 'Rows:', payload.rows);
      alert(\`Ação: \${payload.key}\\nLinhas selecionadas: \${payload.rows.length}\`);
    }
    return {
      args,
      onAction,
      breadcrumbItems
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Breadcrumb :items="breadcrumbItems" style="margin-bottom: 8px;" />

      <h2 style="margin: 0 0 4px 0; font-size: 24px; font-weight: 600; color: #111827;">
        Com Seleção Múltipla
      </h2>

      <p style="margin: 0 0 32px 0; font-size: 14px; color: #6B7280;">
        Tabela com seleção múltipla e ações em lote, mas sem expansão de linhas.
      </p>

      <DataTable v-bind="args" @action="onAction">
        <template #cell-responsavel="{ row }">
          <AvatarCell
            :name="row.responsavel.name"
            :image="row.responsavel.image"
          />
        </template>
        <template #cell-tarefas="{ row }">
          <TaskBar
            :current="row.tarefas.completed"
            :total="row.tarefas.total"
          />
        </template>
        <template #cell-atraso="{ value }">
          <div style="display: flex; justify-content: center; width: 100%;">
            <span :style="{
              color: value > 0 ? '#EF4444' : '#6B7280',
              fontWeight: value > 0 ? 600 : 400
            }">
              {{ value }}
            </span>
          </div>
        </template>
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>
        <template #cell-status="{ row }">
          <Status :status="row.status" />
        </template>
      </DataTable>
    </div>
  \`
})`,...(te=(ee=C.parameters)==null?void 0:ee.docs)==null?void 0:te.source}}};var ae,ne,se;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`() => ({
  components: {
    DataTable,
    Status,
    Breadcrumb
  },
  setup() {
    const statusRows = [{
      id: 1,
      name: 'Tarefa 1',
      status: 'not-started'
    }, {
      id: 2,
      name: 'Tarefa 2',
      status: 'in-progress'
    }, {
      id: 3,
      name: 'Tarefa 3',
      status: 'ready-for-approval'
    }, {
      id: 4,
      name: 'Tarefa 4',
      status: 'audited'
    }, {
      id: 5,
      name: 'Tarefa 5',
      status: 'about-to-expire'
    }, {
      id: 6,
      name: 'Tarefa 6',
      status: 'expired'
    }, {
      id: 7,
      name: 'Tarefa 7',
      status: 'completed'
    }, {
      id: 8,
      name: 'Tarefa 8',
      status: 'waiting-response'
    }, {
      id: 9,
      name: 'Tarefa 9',
      status: 'responded'
    }, {
      id: 10,
      name: 'Tarefa 10',
      status: 'validating'
    }, {
      id: 11,
      name: 'Tarefa 11',
      status: 'adjusting'
    }, {
      id: 12,
      name: 'Tarefa 12',
      status: 'validated'
    }];
    const statusColumns = [{
      key: 'name',
      header: 'Nome',
      width: '200px'
    }, {
      key: 'status',
      header: 'Status',
      width: '250px'
    }];
    return {
      statusRows,
      statusColumns,
      breadcrumbItems
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Breadcrumb :items="breadcrumbItems" style="margin-bottom: 8px;" />

      <h2 style="margin: 0 0 4px 0; font-size: 24px; font-weight: 600; color: #111827;">
        Todos os Status
      </h2>

      <p style="margin: 0 0 32px 0; font-size: 14px; color: #6B7280;">
        Demonstração de todos os status disponíveis no componente Status.
      </p>

      <DataTable
        :rows="statusRows"
        :columns="statusColumns"
        row-key="id"
        :selectable="false"
        :expandable="false"
        :actions="[]"
      >
        <template #cell-status="{ row }">
          <Status :status="row.status" />
        </template>
      </DataTable>
    </div>
  \`
})`,...(se=(ne=P.parameters)==null?void 0:ne.docs)==null?void 0:se.source}}};var oe,le,re;_.parameters={..._.parameters,docs:{...(oe=_.parameters)==null?void 0:oe.docs,source:{originalSource:`() => ({
  components: {
    DataTable,
    TaskBar,
    Breadcrumb
  },
  setup() {
    const progressRows = [{
      id: 1,
      name: 'Projeto A',
      completed: 0,
      total: 100
    }, {
      id: 2,
      name: 'Projeto B',
      completed: 13,
      total: 100
    }, {
      id: 3,
      name: 'Projeto C',
      completed: 50,
      total: 100
    }, {
      id: 4,
      name: 'Projeto D',
      completed: 87,
      total: 100
    }, {
      id: 5,
      name: 'Projeto E',
      completed: 100,
      total: 100
    }];
    const progressColumns = [{
      key: 'name',
      header: 'Projeto',
      width: '200px'
    }, {
      key: 'progress',
      header: 'Progresso',
      width: '300px'
    }];
    return {
      progressRows,
      progressColumns,
      breadcrumbItems
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Breadcrumb :items="breadcrumbItems" style="margin-bottom: 8px;" />

      <h2 style="margin: 0 0 4px 0; font-size: 24px; font-weight: 600; color: #111827;">
        Estados de Progresso
      </h2>

      <p style="margin: 0 0 32px 0; font-size: 14px; color: #6B7280;">
        Demonstração dos estados da barra de progresso: 0%, 1-99%, e 100%.
      </p>

      <DataTable
        :rows="progressRows"
        :columns="progressColumns"
        row-key="id"
        :selectable="false"
        :expandable="false"
        :actions="[]"
      >
        <template #cell-progress="{ row }">
          <TaskBar :current="row.completed" :total="row.total" />
        </template>
      </DataTable>
    </div>
  \`
})`,...(re=(le=_.parameters)==null?void 0:le.docs)==null?void 0:re.source}}};const Ue=["Playground","OnlyTable","WithSelection","AllStatuses","ProgressStates"];export{P as AllStatuses,B as OnlyTable,S as Playground,_ as ProgressStates,C as WithSelection,Ue as __namedExportsOrder,He as default};
