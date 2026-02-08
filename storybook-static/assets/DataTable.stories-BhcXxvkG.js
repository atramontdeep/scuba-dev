import{n as L,v as ce,c as N,P as pe,a as s,e as d,J as i,g as $,t as y,F as S,z as D,b as g,o as n,p as ue,D as me,u as x,A as G,r as q,h as ve}from"./vue.esm-bundler-BXouRCJi.js";import{C as z}from"./Checkbox-rZRf0UbM.js";import{T as fe}from"./Tooltip-aWuJp9S4.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{T as R}from"./TaskBar-Cely3S57.js";import{S as F}from"./Status-C94A-7Hq.js";function ge(a,v){const o=L(new Set),p=L(new Set),u=ce({key:null,dir:null}),f=N(()=>a.length?a.every(l=>o.has(l[v])):!1),t=N(()=>o.size>0&&!f.value);function O(){f.value?o.clear():a.forEach(l=>o.add(l[v]))}function U(l){o.has(l)?o.delete(l):o.add(l)}function j(l){p.has(l)?p.delete(l):p.add(l)}function T(l){if(u.value.key!==l){u.value={key:l,dir:"asc"};return}u.value.dir==="asc"?u.value.dir="desc":u.value.dir==="desc"?u.value.dir=null:u.value={key:l,dir:"asc"}}function _(l){const r=u.value;if(!r.key||!r.dir)return l;const c=r.key,e=r.dir==="asc"?1:-1;return[...l].sort((m,de)=>{const w=m[c],b=de[c];return w==null&&b==null?0:w==null?-1*e:b==null?1*e:typeof w=="string"&&typeof b=="string"?w.localeCompare(b)*e:(w>b?1:w<b?-1:0)*e})}return{selected:o,expanded:p,sort:u,allSelected:f,someSelected:t,toggleAll:O,toggleRow:U,toggleExpanded:j,setSort:T,sortRows:_}}const we={class:"dt-wrapper"},be={class:"dt-table"},ye={key:0,class:"dt-header-selected"},he={class:"dt-th dt-th--checkbox"},Te=["colspan"],Se={class:"dt-selection-bar"},xe={class:"dt-selection-bar__counter"},ke={class:"dt-selection-bar__actions"},Ae=["onClick","aria-label"],Ce={key:1},_e={key:0,class:"dt-th dt-th--checkbox"},De={key:1,class:"dt-th dt-th--expander"},Pe=["onClick"],Be={key:0,class:"dt-td dt-td--checkbox"},Ne={key:1,class:"dt-td dt-td--expander"},Re=["onClick","aria-expanded"],Fe={key:0,class:"dt-row--expanded"},Ie={key:0},Oe={key:1},Ue=["colspan"],je={__name:"DataTable",props:{rows:{type:Array,required:!0},columns:{type:Array,required:!0},rowKey:{type:String,default:"id"},selectable:{type:Boolean,default:!0},expandable:{type:Boolean,default:!0},actions:{type:Array,default:()=>[]}},emits:["action","update:sort"],setup(a,{emit:v}){const o=a,p=v,{rows:u,rowKey:f}=pe(o),t=ge(u.value,f.value),O=N(()=>t.sortRows(u.value));N(()=>selectable&&t.selected.size>0);function U(r){const c=u.value.filter(e=>t.selected.has(e[o.rowKey]));p("action",{key:r.key,rows:c})}function j(r){r.sortable&&(t.setSort(r.key),p("update:sort",t.sort.value))}function T(r){return t.expanded.has(r[o.rowKey])}function _(r){if(!r.sortable)return"";const c=t.sort.value.key,e=t.sort.value.dir;return c!==r.key?"ph-arrows-down-up":e==="asc"?"ph-arrow-up":"ph-arrow-down"}function l(r){const c=_(r);return c?"ph "+c+" dt-sort-icon":""}return(r,c)=>(n(),s("div",we,[d("table",be,[d("thead",null,[a.selectable&&i(t).selected.size>0?(n(),s("tr",ye,[d("th",he,[$(z,{"model-value":i(t).allSelected,indeterminate:i(t).someSelected,size:"sm","onUpdate:modelValue":c[0]||(c[0]=e=>i(t).toggleAll()),"aria-label":"Selecionar tudo"},null,8,["model-value","indeterminate"])]),d("th",{colspan:a.columns.length+(a.expandable?1:0),class:"dt-th dt-th--selection-bar"},[d("div",Se,[d("span",xe,y(i(t).selected.size)+" selecionado"+y(i(t).selected.size>1?"s":""),1),c[2]||(c[2]=d("div",{class:"dt-selection-bar__divider"},null,-1)),d("div",ke,[(n(!0),s(S,null,D(a.actions,e=>(n(),ue(fe,{key:e.key,content:e.label,position:"top"},{default:me(()=>[d("button",{class:"dt-selection-bar__action-btn",onClick:m=>U(e),"aria-label":e.label},[d("i",{class:x(e.icon)},null,2)],8,Ae)]),_:2},1032,["content"]))),128))])])],8,Te)])):(n(),s("tr",Ce,[a.selectable?(n(),s("th",_e,[$(z,{"model-value":i(t).allSelected,indeterminate:i(t).someSelected,size:"sm","onUpdate:modelValue":c[1]||(c[1]=e=>i(t).toggleAll()),"aria-label":"Selecionar tudo"},null,8,["model-value","indeterminate"])])):g("",!0),a.expandable?(n(),s("th",De)):g("",!0),(n(!0),s(S,null,D(a.columns,e=>(n(),s("th",{key:e.key,class:x(["dt-th",{"dt-th--sortable":e.sortable}]),style:G({width:e.width}),onClick:m=>j(e)},[d("div",{class:"dt-th__content",style:G({justifyContent:e.align==="right"?"flex-end":e.align==="center"?"center":"flex-start"})},[d("span",null,y(e.header),1),e.sortable&&_(e)?(n(),s("i",{key:0,class:x(l(e))},null,2)):g("",!0)],4)],14,Pe))),128))]))]),d("tbody",null,[(n(!0),s(S,null,D(O.value,e=>(n(),s(S,{key:e[i(f)]},[d("tr",{class:x({"dt-row--selected":i(t).selected.has(e[i(f)])})},[a.selectable?(n(),s("td",Be,[$(z,{"model-value":i(t).selected.has(e[i(f)]),size:"sm","onUpdate:modelValue":m=>i(t).toggleRow(e[i(f)]),"aria-label":`Selecionar linha ${e[i(f)]}`},null,8,["model-value","onUpdate:modelValue","aria-label"])])):g("",!0),a.expandable?(n(),s("td",Ne,[d("button",{class:"dt-expander",onClick:m=>i(t).toggleExpanded(e[i(f)]),"aria-expanded":T(e)},[d("i",{class:x(T(e)?"ph ph-caret-circle-down":"ph ph-caret-circle-right")},null,2)],8,Re)])):g("",!0),(n(!0),s(S,null,D(a.columns,m=>(n(),s("td",{key:m.key,class:"dt-td",style:G({textAlign:m.align||"left",width:m.width})},[q(r.$slots,"cell-"+m.key,{row:e,value:e[m.key]},()=>[ve(y(e[m.key]),1)],!0)],4))),128))],2),a.expandable&&T(e)?(n(),s("tr",Fe,[a.selectable?(n(),s("td",Ie)):g("",!0),a.expandable?(n(),s("td",Oe)):g("",!0),d("td",{colspan:a.columns.length,class:"dt-td dt-td--expanded"},[q(r.$slots,"expanded",{row:e},()=>[c[3]||(c[3]=d("div",{class:"dt-expanded-default"}," Sem detalhes ",-1))],!0)],8,Ue)])):g("",!0)],64))),128))])])]))}},h=re(je,[["__scopeId","data-v-4bb1f965"]]),$e={class:"dt-avatar"},Ge=["src","alt"],ze={key:1,class:"dt-avatar__fallback"},Ee={class:"dt-avatar__name"},Ve={__name:"AvatarCell",props:{name:{type:String,required:!0},image:{type:String,default:""}},setup(a){return(v,o)=>{var p;return n(),s("div",$e,[a.image?(n(),s("img",{key:0,src:a.image,alt:a.name},null,8,Ge)):(n(),s("div",ze,y(((p=a.name)==null?void 0:p[0])??"?"),1)),d("span",Ee,y(a.name),1)])}}},E=re(Ve,[["__scopeId","data-v-7fda72da"]]),He={title:"Scuba/DataTable",component:h,tags:["autodocs"],argTypes:{rows:{control:"object",description:"Array de objetos com os dados das linhas"},columns:{control:"object",description:"Array de objetos definindo as colunas (key, header, sortable, width, align)"},rowKey:{control:"text",description:"Chave única para identificar cada linha"},selectable:{control:"boolean",description:"Permite seleção múltipla de linhas"},expandable:{control:"boolean",description:"Permite expandir linhas para mostrar detalhes"},actions:{control:"object",description:"Array de ações disponíveis quando há linhas selecionadas (com tooltips)"}}},I={"not-started":{variant:"gray",label:"Não iniciada"},"in-progress":{variant:"blue",label:"Em andamento"},"ready-for-approval":{variant:"blue-dark",label:"Para aprovação"},audited:{variant:"teal",label:"Auditada"},"about-to-expire":{variant:"orange",label:"A expirar"},expired:{variant:"red",label:"Expirada"},completed:{variant:"green",label:"Concluída"},"waiting-response":{variant:"gray",label:"Em resposta"},responded:{variant:"cyan",label:"Respondido"},validating:{variant:"purple",label:"Em validação"},adjusting:{variant:"pink",label:"Em ajuste"},validated:{variant:"blue-dark",label:"Validado"}},V=[{id:1,responsavel:{name:"Ana Silva",image:"https://i.pravatar.cc/64?img=5"},tarefas:{completed:21,total:200},ultima:"2 dias atrás",status:"in-progress"},{id:2,responsavel:{name:"Carlos Santos",image:"https://i.pravatar.cc/64?img=11"},tarefas:{completed:0,total:0},ultima:"5 dias atrás",status:"not-started"},{id:3,responsavel:{name:"Maria Oliveira",image:"https://i.pravatar.cc/64?img=8"},tarefas:{completed:10,total:10},ultima:"1 hora atrás",status:"completed"},{id:4,responsavel:{name:"João Pereira",image:"https://i.pravatar.cc/64?img=12"},tarefas:{completed:45,total:80},ultima:"3 dias atrás",status:"about-to-expire"},{id:5,responsavel:{name:"Beatriz Costa",image:"https://i.pravatar.cc/64?img=15"},tarefas:{completed:90,total:100},ultima:"30 minutos atrás",status:"ready-for-approval"}],K=[{key:"responsavel",header:"Responsável",sortable:!0,width:"280px"},{key:"tarefas",header:"Progresso",sortable:!1,width:"260px"},{key:"ultima",header:"Última atividade",sortable:!0,width:"180px"},{key:"status",header:"Status",sortable:!1,width:"200px"}],ie=[{key:"reminder",label:"Enviar lembrete",icon:"ph ph-envelope"},{key:"export",label:"Exportar CSV",icon:"ph ph-download"},{key:"assign",label:"Reatribuir",icon:"ph ph-user-switch"}],k=a=>({components:{DataTable:h,AvatarCell:E,TaskBar:R,Status:F},setup(){function v(p){console.log("Action:",p.key,"Rows:",p.rows),alert(`Ação: ${p.key}
Linhas selecionadas: ${p.rows.length}`)}function o(p){console.log("Sort:",p)}return{args:a,onAction:v,onSort:o,STATUS_CONFIG:I}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DataTable
        v-bind="args"
        @action="onAction"
        @update:sort="onSort"
      >
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

        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>

        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>

        <template #expanded="{ row }">
          <div style="padding: 12px 0; color: #6B7280; font-size: 13px; line-height: 1.6;">
            <div style="margin-bottom: 8px;">
              <strong style="color: #1F2937;">Detalhes de {{ row.responsavel.name }}</strong>
            </div>
            <div>Última atividade: {{ row.ultima }}</div>
            <div>Progresso: {{ row.tarefas.completed }}/{{ row.tarefas.total }} tarefas</div>
          </div>
        </template>
      </DataTable>
    </div>
  `});k.args={rows:V,columns:K,rowKey:"id",selectable:!0,expandable:!0,actions:ie};const A=a=>({components:{DataTable:h,AvatarCell:E,TaskBar:R,Status:F},setup(){return{args:a,STATUS_CONFIG:I}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
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
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>
        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>
      </DataTable>
    </div>
  `});A.args={rows:V,columns:K,rowKey:"id",selectable:!1,expandable:!1,actions:[]};const C=a=>({components:{DataTable:h,AvatarCell:E,TaskBar:R,Status:F},setup(){function v(o){console.log("Action:",o.key,"Rows:",o.rows),alert(`Ação: ${o.key}
Linhas selecionadas: ${o.rows.length}`)}return{args:a,onAction:v,STATUS_CONFIG:I}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
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
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>
        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>
      </DataTable>
    </div>
  `});C.args={rows:V,columns:K,rowKey:"id",selectable:!0,expandable:!1,actions:ie};const P=()=>({components:{DataTable:h,Status:F},setup(){return{statusRows:[{id:1,name:"Tarefa 1",status:"not-started"},{id:2,name:"Tarefa 2",status:"in-progress"},{id:3,name:"Tarefa 3",status:"ready-for-approval"},{id:4,name:"Tarefa 4",status:"audited"},{id:5,name:"Tarefa 5",status:"about-to-expire"},{id:6,name:"Tarefa 6",status:"expired"},{id:7,name:"Tarefa 7",status:"completed"},{id:8,name:"Tarefa 8",status:"waiting-response"},{id:9,name:"Tarefa 9",status:"responded"},{id:10,name:"Tarefa 10",status:"validating"},{id:11,name:"Tarefa 11",status:"adjusting"},{id:12,name:"Tarefa 12",status:"validated"}],statusColumns:[{key:"name",header:"Nome",width:"200px"},{key:"status",header:"Status",width:"250px"}],STATUS_CONFIG:I}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DataTable
        :rows="statusRows"
        :columns="statusColumns"
        row-key="id"
        :selectable="false"
        :expandable="false"
        :actions="[]"
      >
        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>
      </DataTable>
    </div>
  `}),B=()=>({components:{DataTable:h,TaskBar:R},setup(){return{progressRows:[{id:1,name:"Projeto A",completed:0,total:100},{id:2,name:"Projeto B",completed:13,total:100},{id:3,name:"Projeto C",completed:50,total:100},{id:4,name:"Projeto D",completed:87,total:100},{id:5,name:"Projeto E",completed:100,total:100}],progressColumns:[{key:"name",header:"Projeto",width:"200px"},{key:"progress",header:"Progresso",width:"300px"}]}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
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
  `});var J,M,W;k.parameters={...k.parameters,docs:{...(J=k.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    DataTable,
    AvatarCell,
    TaskBar,
    Status
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
      STATUS_CONFIG
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DataTable
        v-bind="args"
        @action="onAction"
        @update:sort="onSort"
      >
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

        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>

        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>

        <template #expanded="{ row }">
          <div style="padding: 12px 0; color: #6B7280; font-size: 13px; line-height: 1.6;">
            <div style="margin-bottom: 8px;">
              <strong style="color: #1F2937;">Detalhes de {{ row.responsavel.name }}</strong>
            </div>
            <div>Última atividade: {{ row.ultima }}</div>
            <div>Progresso: {{ row.tarefas.completed }}/{{ row.tarefas.total }} tarefas</div>
          </div>
        </template>
      </DataTable>
    </div>
  \`
})`,...(W=(M=k.parameters)==null?void 0:M.docs)==null?void 0:W.source}}};var H,Q,X;A.parameters={...A.parameters,docs:{...(H=A.parameters)==null?void 0:H.docs,source:{originalSource:`args => ({
  components: {
    DataTable,
    AvatarCell,
    TaskBar,
    Status
  },
  setup() {
    return {
      args,
      STATUS_CONFIG
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
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
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>
        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>
      </DataTable>
    </div>
  \`
})`,...(X=(Q=A.parameters)==null?void 0:Q.docs)==null?void 0:X.source}}};var Y,Z,ee;C.parameters={...C.parameters,docs:{...(Y=C.parameters)==null?void 0:Y.docs,source:{originalSource:`args => ({
  components: {
    DataTable,
    AvatarCell,
    TaskBar,
    Status
  },
  setup() {
    function onAction(payload) {
      console.log('Action:', payload.key, 'Rows:', payload.rows);
      alert(\`Ação: \${payload.key}\\nLinhas selecionadas: \${payload.rows.length}\`);
    }
    return {
      args,
      onAction,
      STATUS_CONFIG
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
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
        <template #cell-ultima="{ value }">
          <span style="color: #6B7280; font-size: 13px;">{{ value }}</span>
        </template>
        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>
      </DataTable>
    </div>
  \`
})`,...(ee=(Z=C.parameters)==null?void 0:Z.docs)==null?void 0:ee.source}}};var ae,te,ne;P.parameters={...P.parameters,docs:{...(ae=P.parameters)==null?void 0:ae.docs,source:{originalSource:`() => ({
  components: {
    DataTable,
    Status
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
      STATUS_CONFIG
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DataTable
        :rows="statusRows"
        :columns="statusColumns"
        row-key="id"
        :selectable="false"
        :expandable="false"
        :actions="[]"
      >
        <template #cell-status="{ row }">
          <Status :variant="STATUS_CONFIG[row.status].variant">
            {{ STATUS_CONFIG[row.status].label }}
          </Status>
        </template>
      </DataTable>
    </div>
  \`
})`,...(ne=(te=P.parameters)==null?void 0:te.docs)==null?void 0:ne.source}}};var se,oe,le;B.parameters={...B.parameters,docs:{...(se=B.parameters)==null?void 0:se.docs,source:{originalSource:`() => ({
  components: {
    DataTable,
    TaskBar
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
      progressColumns
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
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
})`,...(le=(oe=B.parameters)==null?void 0:oe.docs)==null?void 0:le.source}}};const Qe=["Playground","OnlyTable","WithSelection","AllStatuses","ProgressStates"];export{P as AllStatuses,A as OnlyTable,k as Playground,B as ProgressStates,C as WithSelection,Qe as __namedExportsOrder,He as default};
