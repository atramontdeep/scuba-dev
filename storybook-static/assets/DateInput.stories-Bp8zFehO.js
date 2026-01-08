import{q as n,c as h,B as Qt,C as Xt,a as f,e as u,g as Y,G as Zt,b as U,H as S,p as W,x as A,E as te,T as ee,o as g,t as N,F as G,u as H}from"./vue.esm-bundler-cjlVRrb_.js";import{I as ae}from"./PhCalendarBlank.vue-BPVO6Knt.js";import{H as ne}from"./PhCaretLeft.vue-BWMa-pwi.js";import{G as oe}from"./PhCaretRight.vue-DRBJmxFI.js";import{F as de}from"./PhX.vue-AGWIzYYk.js";import{_ as se}from"./_plugin-vue_export-helper-DlAUqK2U.js";const re=["value","placeholder","disabled"],le={class:"scuba-date-input__calendar-header"},ie={class:"scuba-date-input__month-year"},pe={class:"scuba-date-input__calendar-grid"},ce=["onClick"],me={key:0,class:"scuba-date-input__calendar-footer"},ue={__name:"DateInput",props:{modelValue:{type:[Date,String,null],default:null},placeholder:{type:String,default:"Select date"},format:{type:String,default:"MM/DD/YYYY"},size:{type:String,default:"md",validator:a=>["sm","md","lg"].includes(a)},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},clearable:{type:Boolean,default:!0},showToday:{type:Boolean,default:!0},minDate:{type:Date,default:null},maxDate:{type:Date,default:null}},emits:["update:modelValue","focus","blur","change"],setup(a,{emit:d}){const e=a,r=d,y=n(null),Ct=n(null),x=n(!1),L=n(!1),s=n(new Date().getMonth()),p=n(new Date().getFullYear()),kt=["Su","Mo","Tu","We","Th","Fr","Sa"],Ft=["January","February","March","April","May","June","July","August","September","October","November","December"],q=h(()=>({sm:16,md:20,lg:24})[e.size]),Bt=h(()=>["scuba-date-input__container",`scuba-date-input__container--${e.size}`,{"scuba-date-input__container--focused":L.value,"scuba-date-input__container--error":e.error,"scuba-date-input__container--disabled":e.disabled}]),Tt=h(()=>["scuba-date-input__input"]),Lt=h(()=>{if(!e.modelValue)return"";const t=typeof e.modelValue=="string"?new Date(e.modelValue):e.modelValue;return Wt(t,e.format)}),Vt=h(()=>`${Ft[s.value]} ${p.value}`),Ut=h(()=>{const t=new Date(p.value,s.value,1),c=new Date(p.value,s.value+1,0),o=new Date(p.value,s.value,0),m=t.getDay(),w=c.getDate(),V=o.getDate(),D=[];for(let i=m;i>0;i--){const b=new Date(p.value,s.value-1,V-i+1);D.push(b)}for(let i=1;i<=w;i++){const b=new Date(p.value,s.value,i);D.push(b)}const Kt=42-D.length;for(let i=1;i<=Kt;i++){const b=new Date(p.value,s.value+1,i);D.push(b)}return D}),Wt=(t,c)=>{const o=new Date(t),m=String(o.getDate()).padStart(2,"0"),w=String(o.getMonth()+1).padStart(2,"0"),V=o.getFullYear();return c.replace("DD",m).replace("MM",w).replace("YYYY",V)},O=(t,c)=>{if(!t||!c)return!1;const o=new Date(t),m=new Date(c);return o.getDate()===m.getDate()&&o.getMonth()===m.getMonth()&&o.getFullYear()===m.getFullYear()},Nt=t=>O(t,new Date),qt=t=>t.getMonth()===s.value,R=t=>!!(e.minDate&&t<e.minDate||e.maxDate&&t>e.maxDate),Ot=t=>t?["scuba-date-input__day",{"scuba-date-input__day--today":Nt(t),"scuba-date-input__day--selected":O(t,e.modelValue),"scuba-date-input__day--other-month":!qt(t),"scuba-date-input__day--disabled":R(t)}]:"",Rt=()=>{if(!e.disabled&&(x.value=!x.value,x.value&&e.modelValue)){const t=typeof e.modelValue=="string"?new Date(e.modelValue):e.modelValue;s.value=t.getMonth(),p.value=t.getFullYear()}},$=t=>{R(t)||(r("update:modelValue",t),r("change",t),x.value=!1)},$t=()=>{$(new Date)},Jt=()=>{r("update:modelValue",null),r("change",null)},At=()=>{s.value===0?(s.value=11,p.value--):s.value--},Gt=()=>{s.value===11?(s.value=0,p.value++):s.value++},Ht=t=>{e.disabled||(L.value=!0,r("focus",t))},jt=t=>{L.value=!1,r("blur",t)},J=t=>{y.value&&!y.value.contains(t.target)&&(x.value=!1)};return Qt(()=>{document.addEventListener("click",J)}),Xt(()=>{document.removeEventListener("click",J)}),(t,c)=>(g(),f("div",{class:"scuba-date-input",ref_key:"dateInputRef",ref:y},[u("div",{class:W(Bt.value),onClick:Rt},[Y(S(ae),{size:q.value,weight:"regular",class:"scuba-date-input__icon"},null,8,["size"]),u("input",{ref_key:"inputRef",ref:Ct,type:"text",value:Lt.value,placeholder:a.placeholder,disabled:a.disabled,class:W(Tt.value),onFocus:Ht,onBlur:jt,readonly:""},null,42,re),a.modelValue&&!a.disabled&&a.clearable?(g(),Zt(S(de),{key:0,size:q.value,weight:"regular",class:"scuba-date-input__clear",onClick:A(Jt,["stop"])},null,8,["size"])):U("",!0)],2),Y(ee,{name:"scuba-date-calendar-fade"},{default:te(()=>[x.value?(g(),f("div",{key:0,class:"scuba-date-input__calendar",onClick:c[0]||(c[0]=A(()=>{},["stop"]))},[u("div",le,[u("button",{class:"scuba-date-input__nav-button",onClick:At,"aria-label":"Previous month"},[Y(S(ne),{size:20,weight:"regular"})]),u("div",ie,N(Vt.value),1),u("button",{class:"scuba-date-input__nav-button",onClick:Gt,"aria-label":"Next month"},[Y(S(oe),{size:20,weight:"regular"})])]),u("div",pe,[(g(),f(G,null,H(kt,o=>u("div",{key:o,class:"scuba-date-input__weekday"},N(o),1)),64)),(g(!0),f(G,null,H(Ut.value,(o,m)=>(g(),f("div",{key:m,class:W(Ot(o)),onClick:w=>$(o)},N(o?o.getDate():""),11,ce))),128))]),a.showToday?(g(),f("div",me,[u("button",{class:"scuba-date-input__today-button",onClick:$t}," Today ")])):U("",!0)])):U("",!0)]),_:1})],512))}},l=se(ue,[["__scopeId","data-v-88da2ce2"]]),be={title:"Scuba/DateInput",component:l,tags:["autodocs"],argTypes:{format:{control:"select",options:["MM/DD/YYYY","DD/MM/YYYY","YYYY-MM-DD"],description:"Formato de exibição da data"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do input"},error:{control:"boolean",description:"Estado de erro"},disabled:{control:"boolean",description:"Desabilita o input"},clearable:{control:"boolean",description:"Mostra botão de limpar"},showToday:{control:"boolean",description:'Mostra botão "Today" no calendário'}}},v=a=>({components:{DateInput:l},setup(){const d=n(new Date);return{args:a,selectedDate:d,handleChange:r=>{console.log("Date changed:",r)}}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DateInput v-bind="args" v-model="selectedDate" @change="handleChange" />
      <p style="margin-top: 16px; color: #6b7280;">
        Selected: {{ selectedDate ? selectedDate.toLocaleDateString() : 'None' }}
      </p>
    </div>
  `});v.args={placeholder:"Select a date",format:"MM/DD/YYYY",size:"md",error:!1,disabled:!1,clearable:!0,showToday:!0};const M=()=>({components:{DateInput:l},setup(){return{date:n(null)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Basic Date Input</h2>
      <DateInput v-model="date" placeholder="Select date" />
      <p style="margin-top: 16px; color: #6b7280;">
        Selected: {{ date ? date.toLocaleDateString() : 'None' }}
      </p>
    </div>
  `}),z=()=>({components:{DateInput:l},setup(){return{date:n(new Date(2024,0,15))}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">With Default Value</h2>
      <DateInput v-model="date" />
    </div>
  `}),I=()=>({components:{DateInput:l},setup(){const a=n(null),d=n(null),e=n(null);return{dateSmall:a,dateMedium:d,dateLarge:e}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Tamanhos</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Small (32px)</h3>
        <DateInput v-model="dateSmall" size="sm" placeholder="Small date input" />
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Medium (40px)</h3>
        <DateInput v-model="dateMedium" size="md" placeholder="Medium date input" />
      </div>

      <div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Large (48px)</h3>
        <DateInput v-model="dateLarge" size="lg" placeholder="Large date input" />
      </div>
    </div>
  `}),_=()=>({components:{DateInput:l},setup(){const a=n(new Date),d=n(new Date),e=n(new Date);return{date1:a,date2:d,date3:e}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Formatos de Data</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">MM/DD/YYYY (US Format)</h3>
        <DateInput v-model="date1" format="MM/DD/YYYY" />
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">DD/MM/YYYY (European Format)</h3>
        <DateInput v-model="date2" format="DD/MM/YYYY" />
      </div>

      <div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">YYYY-MM-DD (ISO Format)</h3>
        <DateInput v-model="date3" format="YYYY-MM-DD" />
      </div>
    </div>
  `}),E=()=>({components:{DateInput:l},setup(){return{date:n(null)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Estado de Erro</h2>
      <DateInput v-model="date" error placeholder="Invalid date" />
      <p style="margin-top: 8px; color: #dc2626; font-size: 14px;">Please select a valid date</p>
    </div>
  `}),P=()=>({components:{DateInput:l},setup(){return{date:n(new Date)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Estado Desabilitado</h2>
      <DateInput v-model="date" disabled />
    </div>
  `}),C=()=>({components:{DateInput:l},setup(){const a=n(null),d=new Date,e=new Date(d.getFullYear(),d.getMonth(),1),r=new Date(d.getFullYear(),d.getMonth()+1,0);return{date:a,minDate:e,maxDate:r}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Com Datas Mínima e Máxima</h2>
      <DateInput
        v-model="date"
        :min-date="minDate"
        :max-date="maxDate"
        placeholder="Select date (current month only)"
      />
      <p style="margin-top: 16px; color: #6b7280; font-size: 14px;">
        Only dates in the current month are selectable
      </p>
    </div>
  `}),k=()=>({components:{DateInput:l},setup(){return{date:n(new Date)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Sem Botão de Limpar</h2>
      <DateInput v-model="date" :clearable="false" />
    </div>
  `}),F=()=>({components:{DateInput:l},setup(){return{date:n(null)}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Sem Botão "Today"</h2>
      <DateInput v-model="date" :show-today="false" placeholder="Select date" />
    </div>
  `}),B=()=>({components:{DateInput:l},setup(){const a=n(null),d=n(null);return{startDate:a,endDate:d,handleSubmit:()=>{var r,y;console.log("Start:",a.value),console.log("End:",d.value),alert(`Selected range: ${(r=a.value)==null?void 0:r.toLocaleDateString()} - ${(y=d.value)==null?void 0:y.toLocaleDateString()}`)}}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Exemplo em Formulário</h2>

      <form @submit.prevent="handleSubmit" style="max-width: 400px;">
        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">
            Start Date
          </label>
          <DateInput v-model="startDate" placeholder="Select start date" />
        </div>

        <div style="margin-bottom: 24px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">
            End Date
          </label>
          <DateInput v-model="endDate" placeholder="Select end date" />
        </div>

        <button
          type="submit"
          style="padding: 10px 20px; background: #0942a1; color: white; border: none; border-radius: 4px; cursor: pointer; font-family: Poppins; font-weight: 600;"
        >
          Submit
        </button>
      </form>
    </div>
  `}),T=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Disabled bg</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-primary</code></td><td style="text-align: right;">Border</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">PhCalendar border</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Text</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Icons</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-tertiary</code></td><td style="text-align: right;">Placeholder</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-primary-500/600</code></td><td style="text-align: right;">Selected day</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-red-500/100</code></td><td style="text-align: right;">Error state</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px (weekdays)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">4px (sm padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px (md padding, gap)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">12px (lg padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px (calendar padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px (input, days)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-md</code></td><td style="text-align: right;">8px (calendar)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>box-shadow</code></td><td style="text-align: right;">Focus & PhCalendar</td></tr>
            <tr><td style="padding: 8px 0;"><code>transition: 0.2s</code></td><td style="text-align: right;">Interactions</td></tr>
            <tr><td style="padding: 8px 0;"><code>z-index: 1000</code></td><td style="text-align: right;">PhCalendar overlay</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Format:</strong> Use o formato apropriado para sua região (MM/DD/YYYY para US, DD/MM/YYYY para BR/EU)</li>
          <li><strong>Min/Max Dates:</strong> Use para restringir seleção a períodos válidos (ex: datas futuras)</li>
          <li><strong>Clearable:</strong> Permita limpar quando a data é opcional</li>
          <li><strong>Today Button:</strong> Facilita seleção rápida da data atual</li>
          <li><strong>Error State:</strong> Combine com mensagem de erro clara</li>
          <li><strong>Disabled:</strong> Use quando a data não pode ser editada temporariamente</li>
          <li>Sempre forneça um placeholder descritivo</li>
          <li>Para ranges de data, use dois DateInputs separados</li>
          <li>Considere validação de data mínima menor que máxima</li>
          <li>Forneça feedback visual quando uma data é selecionada</li>
        </ul>
      </div>
    </div>
  `});var j,K,Q;v.parameters={...v.parameters,docs:{...(j=v.parameters)==null?void 0:j.docs,source:{originalSource:`args => ({
  components: {
    DateInput
  },
  setup() {
    const selectedDate = ref(new Date());
    const handleChange = date => {
      console.log('Date changed:', date);
    };
    return {
      args,
      selectedDate,
      handleChange
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <DateInput v-bind="args" v-model="selectedDate" @change="handleChange" />
      <p style="margin-top: 16px; color: #6b7280;">
        Selected: {{ selectedDate ? selectedDate.toLocaleDateString() : 'None' }}
      </p>
    </div>
  \`
})`,...(Q=(K=v.parameters)==null?void 0:K.docs)==null?void 0:Q.source}}};var X,Z,tt;M.parameters={...M.parameters,docs:{...(X=M.parameters)==null?void 0:X.docs,source:{originalSource:`() => ({
  components: {
    DateInput
  },
  setup() {
    const date = ref(null);
    return {
      date
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Basic Date Input</h2>
      <DateInput v-model="date" placeholder="Select date" />
      <p style="margin-top: 16px; color: #6b7280;">
        Selected: {{ date ? date.toLocaleDateString() : 'None' }}
      </p>
    </div>
  \`
})`,...(tt=(Z=M.parameters)==null?void 0:Z.docs)==null?void 0:tt.source}}};var et,at,nt;z.parameters={...z.parameters,docs:{...(et=z.parameters)==null?void 0:et.docs,source:{originalSource:`() => ({
  components: {
    DateInput
  },
  setup() {
    const date = ref(new Date(2024, 0, 15)); // January 15, 2024
    return {
      date
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">With Default Value</h2>
      <DateInput v-model="date" />
    </div>
  \`
})`,...(nt=(at=z.parameters)==null?void 0:at.docs)==null?void 0:nt.source}}};var ot,dt,st;I.parameters={...I.parameters,docs:{...(ot=I.parameters)==null?void 0:ot.docs,source:{originalSource:`() => ({
  components: {
    DateInput
  },
  setup() {
    const dateSmall = ref(null);
    const dateMedium = ref(null);
    const dateLarge = ref(null);
    return {
      dateSmall,
      dateMedium,
      dateLarge
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Tamanhos</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Small (32px)</h3>
        <DateInput v-model="dateSmall" size="sm" placeholder="Small date input" />
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Medium (40px)</h3>
        <DateInput v-model="dateMedium" size="md" placeholder="Medium date input" />
      </div>

      <div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Large (48px)</h3>
        <DateInput v-model="dateLarge" size="lg" placeholder="Large date input" />
      </div>
    </div>
  \`
})`,...(st=(dt=I.parameters)==null?void 0:dt.docs)==null?void 0:st.source}}};var rt,lt,it;_.parameters={..._.parameters,docs:{...(rt=_.parameters)==null?void 0:rt.docs,source:{originalSource:`() => ({
  components: {
    DateInput
  },
  setup() {
    const date1 = ref(new Date());
    const date2 = ref(new Date());
    const date3 = ref(new Date());
    return {
      date1,
      date2,
      date3
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Formatos de Data</h2>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">MM/DD/YYYY (US Format)</h3>
        <DateInput v-model="date1" format="MM/DD/YYYY" />
      </div>

      <div style="margin-bottom: 24px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">DD/MM/YYYY (European Format)</h3>
        <DateInput v-model="date2" format="DD/MM/YYYY" />
      </div>

      <div>
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">YYYY-MM-DD (ISO Format)</h3>
        <DateInput v-model="date3" format="YYYY-MM-DD" />
      </div>
    </div>
  \`
})`,...(it=(lt=_.parameters)==null?void 0:lt.docs)==null?void 0:it.source}}};var pt,ct,mt;E.parameters={...E.parameters,docs:{...(pt=E.parameters)==null?void 0:pt.docs,source:{originalSource:`() => ({
  components: {
    DateInput
  },
  setup() {
    const date = ref(null);
    return {
      date
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Estado de Erro</h2>
      <DateInput v-model="date" error placeholder="Invalid date" />
      <p style="margin-top: 8px; color: #dc2626; font-size: 14px;">Please select a valid date</p>
    </div>
  \`
})`,...(mt=(ct=E.parameters)==null?void 0:ct.docs)==null?void 0:mt.source}}};var ut,gt,yt;P.parameters={...P.parameters,docs:{...(ut=P.parameters)==null?void 0:ut.docs,source:{originalSource:`() => ({
  components: {
    DateInput
  },
  setup() {
    const date = ref(new Date());
    return {
      date
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Estado Desabilitado</h2>
      <DateInput v-model="date" disabled />
    </div>
  \`
})`,...(yt=(gt=P.parameters)==null?void 0:gt.docs)==null?void 0:yt.source}}};var xt,ht,ft;C.parameters={...C.parameters,docs:{...(xt=C.parameters)==null?void 0:xt.docs,source:{originalSource:`() => ({
  components: {
    DateInput
  },
  setup() {
    const date = ref(null);
    const today = new Date();
    const minDate = new Date(today.getFullYear(), today.getMonth(), 1);
    const maxDate = new Date(today.getFullYear(), today.getMonth() + 1, 0);
    return {
      date,
      minDate,
      maxDate
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Com Datas Mínima e Máxima</h2>
      <DateInput
        v-model="date"
        :min-date="minDate"
        :max-date="maxDate"
        placeholder="Select date (current month only)"
      />
      <p style="margin-top: 16px; color: #6b7280; font-size: 14px;">
        Only dates in the current month are selectable
      </p>
    </div>
  \`
})`,...(ft=(ht=C.parameters)==null?void 0:ht.docs)==null?void 0:ft.source}}};var Dt,bt,vt;k.parameters={...k.parameters,docs:{...(Dt=k.parameters)==null?void 0:Dt.docs,source:{originalSource:`() => ({
  components: {
    DateInput
  },
  setup() {
    const date = ref(new Date());
    return {
      date
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Sem Botão de Limpar</h2>
      <DateInput v-model="date" :clearable="false" />
    </div>
  \`
})`,...(vt=(bt=k.parameters)==null?void 0:bt.docs)==null?void 0:vt.source}}};var wt,Yt,St;F.parameters={...F.parameters,docs:{...(wt=F.parameters)==null?void 0:wt.docs,source:{originalSource:`() => ({
  components: {
    DateInput
  },
  setup() {
    const date = ref(null);
    return {
      date
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Sem Botão "Today"</h2>
      <DateInput v-model="date" :show-today="false" placeholder="Select date" />
    </div>
  \`
})`,...(St=(Yt=F.parameters)==null?void 0:Yt.docs)==null?void 0:St.source}}};var Mt,zt,It;B.parameters={...B.parameters,docs:{...(Mt=B.parameters)==null?void 0:Mt.docs,source:{originalSource:`() => ({
  components: {
    DateInput
  },
  setup() {
    const startDate = ref(null);
    const endDate = ref(null);
    const handleSubmit = () => {
      console.log('Start:', startDate.value);
      console.log('End:', endDate.value);
      alert(\`Selected range: \${startDate.value?.toLocaleDateString()} - \${endDate.value?.toLocaleDateString()}\`);
    };
    return {
      startDate,
      endDate,
      handleSubmit
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Exemplo em Formulário</h2>

      <form @submit.prevent="handleSubmit" style="max-width: 400px;">
        <div style="margin-bottom: 16px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">
            Start Date
          </label>
          <DateInput v-model="startDate" placeholder="Select start date" />
        </div>

        <div style="margin-bottom: 24px;">
          <label style="display: block; margin-bottom: 8px; font-weight: 600; font-size: 14px;">
            End Date
          </label>
          <DateInput v-model="endDate" placeholder="Select end date" />
        </div>

        <button
          type="submit"
          style="padding: 10px 20px; background: #0942a1; color: white; border: none; border-radius: 4px; cursor: pointer; font-family: Poppins; font-weight: 600;"
        >
          Submit
        </button>
      </form>
    </div>
  \`
})`,...(It=(zt=B.parameters)==null?void 0:zt.docs)==null?void 0:It.source}}};var _t,Et,Pt;T.parameters={...T.parameters,docs:{...(_t=T.parameters)==null?void 0:_t.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-primary</code></td><td style="text-align: right;">Background</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Disabled bg</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-primary</code></td><td style="text-align: right;">Border</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-secondary</code></td><td style="text-align: right;">PhCalendar border</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-primary</code></td><td style="text-align: right;">Text</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td style="text-align: right;">Icons</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-tertiary</code></td><td style="text-align: right;">Placeholder</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-primary-500/600</code></td><td style="text-align: right;">Selected day</td></tr>
            <tr><td style="padding: 8px 0;"><code>--color-red-500/100</code></td><td style="text-align: right;">Error state</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px (sm)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px (md)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px (lg)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-xs</code></td><td style="text-align: right;">12px (weekdays)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-medium</code></td><td style="text-align: right;">500</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing & Border</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">4px (sm padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">8px (md padding, gap)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">12px (lg padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">16px (calendar padding)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">4px (input, days)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-md</code></td><td style="text-align: right;">8px (calendar)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-width-border-sm</code></td><td style="text-align: right;">1px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>box-shadow</code></td><td style="text-align: right;">Focus & PhCalendar</td></tr>
            <tr><td style="padding: 8px 0;"><code>transition: 0.2s</code></td><td style="text-align: right;">Interactions</td></tr>
            <tr><td style="padding: 8px 0;"><code>z-index: 1000</code></td><td style="text-align: right;">PhCalendar overlay</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Format:</strong> Use o formato apropriado para sua região (MM/DD/YYYY para US, DD/MM/YYYY para BR/EU)</li>
          <li><strong>Min/Max Dates:</strong> Use para restringir seleção a períodos válidos (ex: datas futuras)</li>
          <li><strong>Clearable:</strong> Permita limpar quando a data é opcional</li>
          <li><strong>Today Button:</strong> Facilita seleção rápida da data atual</li>
          <li><strong>Error State:</strong> Combine com mensagem de erro clara</li>
          <li><strong>Disabled:</strong> Use quando a data não pode ser editada temporariamente</li>
          <li>Sempre forneça um placeholder descritivo</li>
          <li>Para ranges de data, use dois DateInputs separados</li>
          <li>Considere validação de data mínima menor que máxima</li>
          <li>Forneça feedback visual quando uma data é selecionada</li>
        </ul>
      </div>
    </div>
  \`
})`,...(Pt=(Et=T.parameters)==null?void 0:Et.docs)==null?void 0:Pt.source}}};const ve=["Playground","BasicUsage","WithDefaultValue","Sizes","DateFormats","ErrorState","DisabledState","WithMinMaxDates","WithoutClearButton","WithoutTodayButton","FormExample","DesignTokens"];export{M as BasicUsage,_ as DateFormats,T as DesignTokens,P as DisabledState,E as ErrorState,B as FormExample,v as Playground,I as Sizes,z as WithDefaultValue,C as WithMinMaxDates,k as WithoutClearButton,F as WithoutTodayButton,ve as __namedExportsOrder,be as default};
