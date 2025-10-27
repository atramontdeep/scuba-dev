import{r as I,l as ue,e as k,s as ce,f as n,g as f,j as r,u as c,t as b,F as A,x as $,n as x,c as W,o as t,y as pe,z as w,k as L,a as V}from"./vue.esm-bundler-3CChPgpK.js";import{C as M}from"./Checkbox-DJH72dM8.js";import{B as me}from"./Button-C1ie5oX8.js";import{_ as B}from"./_plugin-vue_export-helper-DlAUqK2U.js";function ve(a,v){const o=I(new Set),s=I(new Set),m=ue({key:null,dir:null}),i=k(()=>a.length?a.every(d=>o.has(d[v])):!1),l=k(()=>o.size>0&&!i.value);function F(){i.value?o.clear():a.forEach(d=>o.add(d[v]))}function j(d){o.has(d)?o.delete(d):o.add(d)}function z(d){s.has(d)?s.delete(d):s.add(d)}function S(d){if(m.value.key!==d){m.value={key:d,dir:"asc"};return}m.value.dir==="asc"?m.value.dir="desc":m.value.dir==="desc"?m.value.dir=null:m.value={key:d,dir:"asc"}}function P(d){const u=m.value;if(!u.key||!u.dir)return d;const p=u.key,e=u.dir==="asc"?1:-1;return[...d].sort((g,ie)=>{const y=g[p],h=ie[p];return y==null&&h==null?0:y==null?-1*e:h==null?1*e:typeof y=="string"&&typeof h=="string"?y.localeCompare(h)*e:(y>h?1:y<h?-1:0)*e})}return{selected:o,expanded:s,sort:m,allSelected:i,someSelected:l,toggleAll:F,toggleRow:j,toggleExpanded:z,setSort:S,sortRows:P}}const ge={class:"dt-wrapper"},fe={key:0,class:"dt-toolbar",role:"region","aria-label":"Ações em lote"},be={class:"dt-toolbar__info"},we={class:"dt-toolbar__counter"},ye={class:"dt-toolbar__actions"},he={class:"dt-table"},xe={key:0,class:"dt-th dt-th--checkbox"},Ce={key:1,class:"dt-th dt-th--expander"},De=["onClick"],ke={key:0,class:"dt-td dt-td--checkbox"},Se={key:1,class:"dt-td dt-td--expander"},Ae=["onClick","aria-expanded"],Te={key:0,class:"dt-row--expanded"},Ee={key:0},_e={key:1},Fe=["colspan"],Pe={__name:"DataTable",props:{rows:{type:Array,required:!0},columns:{type:Array,required:!0},rowKey:{type:String,default:"id"},selectable:{type:Boolean,default:!0},expandable:{type:Boolean,default:!0},actions:{type:Array,default:()=>[]}},emits:["action","update:sort"],setup(a,{emit:v}){const o=a,s=v,{rows:m,rowKey:i}=ce(o),l=ve(m.value,i.value),F=k(()=>l.sortRows(m.value));function j(u){const p=m.value.filter(e=>l.selected.has(e[o.rowKey]));s("action",{key:u.key,rows:p})}function z(u){u.sortable&&(l.setSort(u.key),s("update:sort",l.sort.value))}function S(u){return l.expanded.has(u[o.rowKey])}function P(u){if(!u.sortable)return"";const p=l.sort.value.key,e=l.sort.value.dir;return p!==u.key?"ph-arrows-down-up":e==="asc"?"ph-arrow-up":"ph-arrow-down"}function d(u){const p=P(u);return p?"ph "+p+" dt-sort-icon":""}return(u,p)=>(t(),n("div",ge,[a.selectable&&c(l).selected.size>0?(t(),n("div",fe,[r("div",be,[p[1]||(p[1]=r("i",{class:"ph ph-minus-circle dt-toolbar__icon"},null,-1)),r("span",we,b(c(l).selected.size)+" selecionado"+b(c(l).selected.size>1?"s":""),1)]),p[2]||(p[2]=r("div",{class:"dt-toolbar__divider"},null,-1)),r("div",ye,[(t(!0),n(A,null,$(a.actions,e=>(t(),pe(me,{key:e.key,variant:"text",size:"sm","icon-left":e.icon,label:e.label,onClick:g=>j(e)},null,8,["icon-left","label","onClick"]))),128))])])):f("",!0),r("table",he,[r("thead",null,[r("tr",{class:x({"dt-header-selected":c(l).selected.size>0})},[a.selectable?(t(),n("th",xe,[W(M,{"model-value":c(l).allSelected,indeterminate:c(l).someSelected,size:"sm","onUpdate:modelValue":p[0]||(p[0]=e=>c(l).toggleAll()),"aria-label":"Selecionar tudo"},null,8,["model-value","indeterminate"])])):f("",!0),a.expandable?(t(),n("th",Ce)):f("",!0),(t(!0),n(A,null,$(a.columns,e=>(t(),n("th",{key:e.key,class:x(["dt-th",{"dt-th--sortable":e.sortable}]),style:w({width:e.width}),onClick:g=>z(e)},[r("div",{class:"dt-th__content",style:w({justifyContent:e.align==="right"?"flex-end":e.align==="center"?"center":"flex-start"})},[r("span",null,b(e.header),1),e.sortable&&P(e)?(t(),n("i",{key:0,class:x(d(e))},null,2)):f("",!0)],4)],14,De))),128))],2)]),r("tbody",null,[(t(!0),n(A,null,$(F.value,e=>(t(),n(A,{key:e[c(i)]},[r("tr",{class:x({"dt-row--selected":c(l).selected.has(e[c(i)])})},[a.selectable?(t(),n("td",ke,[W(M,{"model-value":c(l).selected.has(e[c(i)]),size:"sm","onUpdate:modelValue":g=>c(l).toggleRow(e[c(i)]),"aria-label":`Selecionar linha ${e[c(i)]}`},null,8,["model-value","onUpdate:modelValue","aria-label"])])):f("",!0),a.expandable?(t(),n("td",Se,[r("button",{class:"dt-expander",onClick:g=>c(l).toggleExpanded(e[c(i)]),"aria-expanded":S(e)},[r("i",{class:x(["ph ph-caret-right",{"dt-expander--expanded":S(e)}])},null,2)],8,Ae)])):f("",!0),(t(!0),n(A,null,$(a.columns,g=>(t(),n("td",{key:g.key,class:"dt-td",style:w({textAlign:g.align||"left",width:g.width})},[L(u.$slots,"cell-"+g.key,{row:e,value:e[g.key]},()=>[V(b(e[g.key]),1)],!0)],4))),128))],2),a.expandable&&S(e)?(t(),n("tr",Te,[a.selectable?(t(),n("td",Ee)):f("",!0),a.expandable?(t(),n("td",_e)):f("",!0),r("td",{colspan:a.columns.length,class:"dt-td dt-td--expanded"},[L(u.$slots,"expanded",{row:e},()=>[p[3]||(p[3]=r("div",{class:"dt-expanded-default"}," Sem detalhes ",-1))],!0)],8,Fe)])):f("",!0)],64))),128))])])]))}},R=B(Pe,[["__scopeId","data-v-7ce01d3f"]]),$e={class:"dt-avatar"},Be=["src","alt"],Re={key:1,class:"dt-avatar__fallback"},je={class:"dt-avatar__name"},ze={__name:"AvatarCell",props:{name:{type:String,required:!0},image:{type:String,default:""}},setup(a){return(v,o)=>{var s;return t(),n("div",$e,[a.image?(t(),n("img",{key:0,src:a.image,alt:a.name},null,8,Be)):(t(),n("div",Re,b(((s=a.name)==null?void 0:s[0])??"?"),1)),r("span",je,b(a.name),1)])}}},Ve=B(ze,[["__scopeId","data-v-7fda72da"]]),Ne={class:"progress-cell"},Ke={key:0,class:"progress-label"},qe={__name:"ProgressCell",props:{value:{type:Number,required:!0},label:{type:String,default:""}},setup(a){const v=a,o=k(()=>Math.max(0,Math.min(100,v.value))),s=k(()=>o.value===0?"empty":o.value===100?"complete":"partial"),m={empty:{barColor:"#FFFFFF",fillColor:"transparent",textColor:"#6B7280",borderColor:"#E5E7EB"},partial:{barColor:"#DBEAFE",fillColor:"#60A5FA",textColor:"#1F2937",borderColor:"#93C5FD"},complete:{barColor:"#1E40AF",fillColor:"#1E40AF",textColor:"#FFFFFF",borderColor:"#1E40AF"}},i=k(()=>m[s.value]);return(l,F)=>(t(),n("div",Ne,[r("div",{class:x(["progress-bar",`progress-bar--${s.value}`]),style:w({"--bar-bg":i.value.barColor,"--fill-bg":i.value.fillColor,"--border-color":i.value.borderColor})},[r("div",{class:"progress-fill",style:w({width:`${o.value}%`})},null,4),r("span",{class:"progress-text",style:w({color:i.value.textColor})},[V(b(Math.round(o.value))+"% ",1),a.label?(t(),n("span",Ke,"("+b(a.label)+")",1)):f("",!0)],4)],6)]))}},le=B(qe,[["__scopeId","data-v-e0478141"]]),Ie={__name:"StatusCell",props:{status:{type:String,required:!0,validator:a=>["not-started","in-progress","ready-for-approval","audited","about-to-expire","expired","completed","waiting-response","responded","validating","adjusting","validated"].includes(a)}},setup(a){const s={"not-started":{label:"Não iniciada",color:"#D1D5DB"},"in-progress":{label:"Em andamento",color:"#60A5FA"},"ready-for-approval":{label:"Pronta para aprovação",color:"#38BDF8"},audited:{label:"Auditada",color:"#3B82F6"},"about-to-expire":{label:"A expirar",color:"#FB923C"},expired:{label:"Expirada",color:"#EF4444"},completed:{label:"Concluída",color:"#22C55E"},"waiting-response":{label:"Aguardando resposta",color:"#60A5FA"},responded:{label:"Respondido",color:"#38BDF8"},validating:{label:"Em validação",color:"#C084FC"},adjusting:{label:"Em ajuste",color:"#3B82F6"},validated:{label:"Validado",color:"#10B981"}}[a.status];return(m,i)=>(t(),n("span",{class:"status-badge",style:w({"--status-color":c(s).color})},[i[0]||(i[0]=r("span",{class:"status-dot"},null,-1)),V(" "+b(c(s).label),1)],4))}},re=B(Ie,[["__scopeId","data-v-9608b6dd"]]),Ue={title:"Scuba/DataTable",component:R,parameters:{layout:"padded",docs:{description:{component:"Tabela de dados completa com seleção múltipla, ordenação, expansão de linhas e ações em lote."}}},argTypes:{rows:{description:"Array de objetos com os dados das linhas",control:"object"},columns:{description:"Array de objetos definindo as colunas (key, header, sortable, width, align)",control:"object"},rowKey:{description:"Chave única para identificar cada linha",control:"text"},selectable:{description:"Permite seleção múltipla de linhas",control:"boolean"},expandable:{description:"Permite expandir linhas para mostrar detalhes",control:"boolean"},actions:{description:"Array de ações disponíveis quando há linhas selecionadas",control:"object"}}},N=[{id:1,responsavel:{name:"Ana Silva",image:"https://i.pravatar.cc/64?img=5"},tarefas:{completed:21,total:200},atraso:3,ultima:"2 dias atrás",status:"in-progress"},{id:2,responsavel:{name:"Carlos Santos",image:"https://i.pravatar.cc/64?img=11"},tarefas:{completed:0,total:0},atraso:0,ultima:"5 dias atrás",status:"not-started"},{id:3,responsavel:{name:"Maria Oliveira",image:"https://i.pravatar.cc/64?img=8"},tarefas:{completed:10,total:10},atraso:0,ultima:"1 hora atrás",status:"completed"},{id:4,responsavel:{name:"João Pereira",image:"https://i.pravatar.cc/64?img=12"},tarefas:{completed:45,total:80},atraso:5,ultima:"3 dias atrás",status:"about-to-expire"},{id:5,responsavel:{name:"Beatriz Costa",image:"https://i.pravatar.cc/64?img=15"},tarefas:{completed:90,total:100},atraso:0,ultima:"30 minutos atrás",status:"ready-for-approval"}],K=[{key:"responsavel",header:"Responsável",sortable:!0,width:"280px"},{key:"tarefas",header:"Progresso",sortable:!1,width:"260px"},{key:"atraso",header:"Em atraso",sortable:!0,width:"120px",align:"center"},{key:"ultima",header:"Última atividade",sortable:!0,width:"180px"},{key:"status",header:"Status",sortable:!1,width:"200px"}],de=[{key:"reminder",label:"Enviar lembrete",icon:"ph ph-envelope"},{key:"export",label:"Exportar CSV",icon:"ph ph-download"},{key:"assign",label:"Reatribuir",icon:"ph ph-user-switch"}],q=a=>({components:{DataTable:R,AvatarCell:Ve,ProgressCell:le,StatusCell:re},setup(){function v(s){console.log("🔥 Action:",s.key,"Rows:",s.rows),alert(`Ação: ${s.key}
Linhas selecionadas: ${s.rows.length}`)}function o(s){console.log("📊 Sort:",s)}return{args:a,onAction:v,onSort:o}},template:`
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

      <!-- Célula: Progresso (barra) -->
      <template #cell-tarefas="{ row }">
        <ProgressCell 
          :value="row.tarefas.total > 0 ? (row.tarefas.completed / row.tarefas.total) * 100 : 0" 
          :label="\`\${row.tarefas.completed}/\${row.tarefas.total}\`" 
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
        <StatusCell :status="row.status" />
      </template>

      <!-- Conteúdo expandido -->
      <template #expanded="{ row }">
        <div style="padding: 12px 0; color: #6B7280; font-size: 13px; line-height: 1.6;">
          <div style="margin-bottom: 8px;">
            <strong style="color: #1F2937;">Detalhes de {{ row.responsavel.name }}</strong>
          </div>
          <div>📅 Última atividade: {{ row.ultima }}</div>
          <div>⏰ Tarefas em atraso: {{ row.atraso }}</div>
          <div>✅ Progresso: {{ row.tarefas.completed }}/{{ row.tarefas.total }} tarefas</div>
        </div>
      </template>
    </DataTable>
  `}),T=q.bind({});T.args={rows:N,columns:K,rowKey:"id",selectable:!0,expandable:!0,actions:de};const C=q.bind({});C.args={rows:N,columns:K,rowKey:"id",selectable:!1,expandable:!1,actions:[]};C.parameters={docs:{description:{story:"Tabela simples sem seleção ou expansão de linhas."}}};const D=q.bind({});D.args={rows:N,columns:K,rowKey:"id",selectable:!0,expandable:!1,actions:de};D.parameters={docs:{description:{story:"Tabela com seleção múltipla e ações em lote, mas sem expansão de linhas."}}};const E=()=>({components:{DataTable:R,StatusCell:re},setup(){return{statusRows:[{id:1,name:"Tarefa 1",status:"not-started"},{id:2,name:"Tarefa 2",status:"in-progress"},{id:3,name:"Tarefa 3",status:"ready-for-approval"},{id:4,name:"Tarefa 4",status:"audited"},{id:5,name:"Tarefa 5",status:"about-to-expire"},{id:6,name:"Tarefa 6",status:"expired"},{id:7,name:"Tarefa 7",status:"completed"},{id:8,name:"Tarefa 8",status:"waiting-response"},{id:9,name:"Tarefa 9",status:"responded"},{id:10,name:"Tarefa 10",status:"validating"},{id:11,name:"Tarefa 11",status:"adjusting"},{id:12,name:"Tarefa 12",status:"validated"}],statusColumns:[{key:"name",header:"Nome",width:"200px"},{key:"status",header:"Status",width:"250px"}]}},template:`
    <DataTable
      :rows="statusRows"
      :columns="statusColumns"
      row-key="id"
      :selectable="false"
      :expandable="false"
      :actions="[]"
    >
      <template #cell-status="{ row }">
        <StatusCell :status="row.status" />
      </template>
    </DataTable>
  `});E.parameters={docs:{description:{story:"Demonstração de todos os status disponíveis no StatusCell."}}};const _=()=>({components:{DataTable:R,ProgressCell:le},setup(){return{progressRows:[{id:1,name:"Projeto A",progress:0,label:"0/100"},{id:2,name:"Projeto B",progress:13,label:"13/100"},{id:3,name:"Projeto C",progress:50,label:"50/100"},{id:4,name:"Projeto D",progress:87,label:"87/100"},{id:5,name:"Projeto E",progress:100,label:"100/100"}],progressColumns:[{key:"name",header:"Projeto",width:"200px"},{key:"progress",header:"Progresso",width:"300px"}]}},template:`
    <DataTable
      :rows="progressRows"
      :columns="progressColumns"
      row-key="id"
      :selectable="false"
      :expandable="false"
      :actions="[]"
    >
      <template #cell-progress="{ row }">
        <ProgressCell :value="row.progress" :label="row.label" />
      </template>
    </DataTable>
  `});_.parameters={docs:{description:{story:"Demonstração dos 3 estados da barra de progresso: 0%, 1-99%, e 100%."}}};var O,U,H;T.parameters={...T.parameters,docs:{...(O=T.parameters)==null?void 0:O.docs,source:{originalSource:`args => ({
  components: {
    DataTable,
    AvatarCell,
    ProgressCell,
    StatusCell
  },
  setup() {
    function onAction(payload) {
      console.log('🔥 Action:', payload.key, 'Rows:', payload.rows);
      alert(\`Ação: \${payload.key}\\nLinhas selecionadas: \${payload.rows.length}\`);
    }
    function onSort(sort) {
      console.log('📊 Sort:', sort);
    }
    return {
      args,
      onAction,
      onSort
    };
  },
  template: \`
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

      <!-- Célula: Progresso (barra) -->
      <template #cell-tarefas="{ row }">
        <ProgressCell 
          :value="row.tarefas.total > 0 ? (row.tarefas.completed / row.tarefas.total) * 100 : 0" 
          :label="\\\`\\\${row.tarefas.completed}/\\\${row.tarefas.total}\\\`" 
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
        <StatusCell :status="row.status" />
      </template>

      <!-- Conteúdo expandido -->
      <template #expanded="{ row }">
        <div style="padding: 12px 0; color: #6B7280; font-size: 13px; line-height: 1.6;">
          <div style="margin-bottom: 8px;">
            <strong style="color: #1F2937;">Detalhes de {{ row.responsavel.name }}</strong>
          </div>
          <div>📅 Última atividade: {{ row.ultima }}</div>
          <div>⏰ Tarefas em atraso: {{ row.atraso }}</div>
          <div>✅ Progresso: {{ row.tarefas.completed }}/{{ row.tarefas.total }} tarefas</div>
        </div>
      </template>
    </DataTable>
  \`
})`,...(H=(U=T.parameters)==null?void 0:U.docs)==null?void 0:H.source}}};var J,G,Q;C.parameters={...C.parameters,docs:{...(J=C.parameters)==null?void 0:J.docs,source:{originalSource:`args => ({
  components: {
    DataTable,
    AvatarCell,
    ProgressCell,
    StatusCell
  },
  setup() {
    function onAction(payload) {
      console.log('🔥 Action:', payload.key, 'Rows:', payload.rows);
      alert(\`Ação: \${payload.key}\\nLinhas selecionadas: \${payload.rows.length}\`);
    }
    function onSort(sort) {
      console.log('📊 Sort:', sort);
    }
    return {
      args,
      onAction,
      onSort
    };
  },
  template: \`
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

      <!-- Célula: Progresso (barra) -->
      <template #cell-tarefas="{ row }">
        <ProgressCell 
          :value="row.tarefas.total > 0 ? (row.tarefas.completed / row.tarefas.total) * 100 : 0" 
          :label="\\\`\\\${row.tarefas.completed}/\\\${row.tarefas.total}\\\`" 
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
        <StatusCell :status="row.status" />
      </template>

      <!-- Conteúdo expandido -->
      <template #expanded="{ row }">
        <div style="padding: 12px 0; color: #6B7280; font-size: 13px; line-height: 1.6;">
          <div style="margin-bottom: 8px;">
            <strong style="color: #1F2937;">Detalhes de {{ row.responsavel.name }}</strong>
          </div>
          <div>📅 Última atividade: {{ row.ultima }}</div>
          <div>⏰ Tarefas em atraso: {{ row.atraso }}</div>
          <div>✅ Progresso: {{ row.tarefas.completed }}/{{ row.tarefas.total }} tarefas</div>
        </div>
      </template>
    </DataTable>
  \`
})`,...(Q=(G=C.parameters)==null?void 0:G.docs)==null?void 0:Q.source}}};var X,Y,Z;D.parameters={...D.parameters,docs:{...(X=D.parameters)==null?void 0:X.docs,source:{originalSource:`args => ({
  components: {
    DataTable,
    AvatarCell,
    ProgressCell,
    StatusCell
  },
  setup() {
    function onAction(payload) {
      console.log('🔥 Action:', payload.key, 'Rows:', payload.rows);
      alert(\`Ação: \${payload.key}\\nLinhas selecionadas: \${payload.rows.length}\`);
    }
    function onSort(sort) {
      console.log('📊 Sort:', sort);
    }
    return {
      args,
      onAction,
      onSort
    };
  },
  template: \`
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

      <!-- Célula: Progresso (barra) -->
      <template #cell-tarefas="{ row }">
        <ProgressCell 
          :value="row.tarefas.total > 0 ? (row.tarefas.completed / row.tarefas.total) * 100 : 0" 
          :label="\\\`\\\${row.tarefas.completed}/\\\${row.tarefas.total}\\\`" 
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
        <StatusCell :status="row.status" />
      </template>

      <!-- Conteúdo expandido -->
      <template #expanded="{ row }">
        <div style="padding: 12px 0; color: #6B7280; font-size: 13px; line-height: 1.6;">
          <div style="margin-bottom: 8px;">
            <strong style="color: #1F2937;">Detalhes de {{ row.responsavel.name }}</strong>
          </div>
          <div>📅 Última atividade: {{ row.ultima }}</div>
          <div>⏰ Tarefas em atraso: {{ row.atraso }}</div>
          <div>✅ Progresso: {{ row.tarefas.completed }}/{{ row.tarefas.total }} tarefas</div>
        </div>
      </template>
    </DataTable>
  \`
})`,...(Z=(Y=D.parameters)==null?void 0:Y.docs)==null?void 0:Z.source}}};var ee,ae,te;E.parameters={...E.parameters,docs:{...(ee=E.parameters)==null?void 0:ee.docs,source:{originalSource:`() => ({
  components: {
    DataTable,
    StatusCell
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
      statusColumns
    };
  },
  template: \`
    <DataTable
      :rows="statusRows"
      :columns="statusColumns"
      row-key="id"
      :selectable="false"
      :expandable="false"
      :actions="[]"
    >
      <template #cell-status="{ row }">
        <StatusCell :status="row.status" />
      </template>
    </DataTable>
  \`
})`,...(te=(ae=E.parameters)==null?void 0:ae.docs)==null?void 0:te.source}}};var se,ne,oe;_.parameters={..._.parameters,docs:{...(se=_.parameters)==null?void 0:se.docs,source:{originalSource:`() => ({
  components: {
    DataTable,
    ProgressCell
  },
  setup() {
    const progressRows = [{
      id: 1,
      name: 'Projeto A',
      progress: 0,
      label: '0/100'
    }, {
      id: 2,
      name: 'Projeto B',
      progress: 13,
      label: '13/100'
    }, {
      id: 3,
      name: 'Projeto C',
      progress: 50,
      label: '50/100'
    }, {
      id: 4,
      name: 'Projeto D',
      progress: 87,
      label: '87/100'
    }, {
      id: 5,
      name: 'Projeto E',
      progress: 100,
      label: '100/100'
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
    <DataTable
      :rows="progressRows"
      :columns="progressColumns"
      row-key="id"
      :selectable="false"
      :expandable="false"
      :actions="[]"
    >
      <template #cell-progress="{ row }">
        <ProgressCell :value="row.progress" :label="row.label" />
      </template>
    </DataTable>
  \`
})`,...(oe=(ne=_.parameters)==null?void 0:ne.docs)==null?void 0:oe.source}}};const He=["Default","OnlyTable","WithSelection","AllStatuses","ProgressStates"];export{E as AllStatuses,T as Default,C as OnlyTable,_ as ProgressStates,D as WithSelection,He as __namedExportsOrder,Ue as default};
