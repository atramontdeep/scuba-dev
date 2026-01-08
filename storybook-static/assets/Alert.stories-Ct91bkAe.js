import{c as b,a as n,b as g,e as y,p as A,t as w,r as te,o as r,h as se,q as ne}from"./vue.esm-bundler-cjlVRrb_.js";import{_ as re}from"./_plugin-vue_export-helper-DlAUqK2U.js";const ae={key:0,class:"scuba-alert__icon-container"},oe={class:"scuba-alert__content"},ie={key:0,class:"scuba-alert__title"},le={key:1,class:"scuba-alert__message"},ce=["aria-label"],de={__name:"Alert",props:{variant:{type:String,default:"info",validator:e=>["success","warning","error","info"].includes(e)},title:{type:String,default:""},message:{type:String,default:""},icon:{type:String,default:""},showIcon:{type:Boolean,default:!0},closable:{type:Boolean,default:!1},closeAriaLabel:{type:String,default:"Close"}},emits:["close"],setup(e,{emit:v}){const p=e,K=v,Q={success:"ph-check-circle",warning:"ph-warning",error:"ph-x-circle",info:"ph-info"},R=b(()=>{const t=["scuba-alert"];return t.push("scuba-alert--"+p.variant),p.closable&&t.push("scuba-alert--closable"),t}),Z=b(()=>"ph "+(p.icon||Q[p.variant])+" scuba-alert__icon"),ee=t=>{K("close",t)};return(t,x)=>(r(),n("div",{class:A(R.value),role:"alert"},[e.showIcon?(r(),n("div",ae,[y("i",{class:A(Z.value),"aria-hidden":"true"},null,2)])):g("",!0),y("div",oe,[e.title?(r(),n("div",ie,w(e.title),1)):g("",!0),e.message||t.$slots.default?(r(),n("div",le,[te(t.$slots,"default",{},()=>[se(w(e.message),1)],!0)])):g("",!0)]),e.closable?(r(),n("button",{key:1,type:"button",class:"scuba-alert__close",onClick:ee,"aria-label":e.closeAriaLabel},[...x[0]||(x[0]=[y("i",{class:"ph ph-x"},null,-1)])],8,ce)):g("",!0)],2))}},h=re(de,[["__scopeId","data-v-a78b3cc4"]]),me={title:"Scuba/Alert",component:h,tags:["autodocs"],argTypes:{variant:{control:"select",options:["success","warning","error","info"],description:"Tipo de alerta"},title:{control:"text",description:"Título do alerta"},message:{control:"text",description:"Mensagem do alerta"},showIcon:{control:"boolean",description:"Mostrar ícone"},closable:{control:"boolean",description:"Permitir fechar"},icon:{control:"text",description:"Ícone personalizado"}}},s=e=>({components:{Alert:h},setup(){return{args:e}},template:'<Alert v-bind="args" />'}),a=s.bind({});a.args={variant:"info",title:"Information",message:"This is an informational alert message."};const o=s.bind({});o.args={variant:"success",title:"Success!",message:"Your operation completed successfully."};const i=s.bind({});i.args={variant:"warning",title:"Warning",message:"Please review the information before proceeding."};const l=s.bind({});l.args={variant:"error",title:"Error",message:"An error occurred while processing your request."};const c=s.bind({});c.args={variant:"info",title:"Information",message:"Here is some important information for you."};const m=()=>({components:{Alert:h},setup(){const e=ne(!0);return{visible:e,handleClose:()=>{e.value=!1,setTimeout(()=>{e.value=!0},2e3)}}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Alert
        v-if="visible"
        variant="info"
        title="Closable Alert"
        message="Click the PhX button to close this alert."
        closable
        @close="handleClose"
      />
      <p v-else style="color: #6b7280; margin-top: 16px;">Alert closed. It will reappear in 2 seconds.</p>
    </div>
  `}),d=s.bind({});d.args={variant:"info",title:"No Icon",message:"This alert has no icon.",showIcon:!1};const u=()=>({components:{Alert:h},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Alert Variants</h2>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Alert
          variant="success"
          title="Success"
          message="Your operation completed successfully."
        />
        <Alert
          variant="warning"
          title="PhWarning"
          message="Please review the information before proceeding."
        />
        <Alert
          variant="error"
          title="Error"
          message="An error occurred while processing your request."
        />
        <Alert
          variant="info"
          title="Information"
          message="Here is some important information for you."
        />
      </div>
    </div>
  `}),f=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-dark</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-info-light</code></td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>
      </div>
    </div>
  `});var S,C,_;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: '<Alert v-bind="args" />'
})`,...(_=(C=a.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};var I,k,P;o.parameters={...o.parameters,docs:{...(I=o.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: '<Alert v-bind="args" />'
})`,...(P=(k=o.parameters)==null?void 0:k.docs)==null?void 0:P.source}}};var T,z,E;i.parameters={...i.parameters,docs:{...(T=i.parameters)==null?void 0:T.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: '<Alert v-bind="args" />'
})`,...(E=(z=i.parameters)==null?void 0:z.docs)==null?void 0:E.source}}};var V,W,B;l.parameters={...l.parameters,docs:{...(V=l.parameters)==null?void 0:V.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: '<Alert v-bind="args" />'
})`,...(B=(W=l.parameters)==null?void 0:W.docs)==null?void 0:B.source}}};var D,q,N;c.parameters={...c.parameters,docs:{...(D=c.parameters)==null?void 0:D.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: '<Alert v-bind="args" />'
})`,...(N=(q=c.parameters)==null?void 0:q.docs)==null?void 0:N.source}}};var H,Y,L;m.parameters={...m.parameters,docs:{...(H=m.parameters)==null?void 0:H.docs,source:{originalSource:`() => ({
  components: {
    Alert
  },
  setup() {
    const visible = ref(true);
    const handleClose = () => {
      visible.value = false;
      setTimeout(() => {
        visible.value = true;
      }, 2000);
    };
    return {
      visible,
      handleClose
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <Alert
        v-if="visible"
        variant="info"
        title="Closable Alert"
        message="Click the PhX button to close this alert."
        closable
        @close="handleClose"
      />
      <p v-else style="color: #6b7280; margin-top: 16px;">Alert closed. It will reappear in 2 seconds.</p>
    </div>
  \`
})`,...(L=(Y=m.parameters)==null?void 0:Y.docs)==null?void 0:L.source}}};var M,U,X;d.parameters={...d.parameters,docs:{...(M=d.parameters)==null?void 0:M.docs,source:{originalSource:`args => ({
  components: {
    Alert
  },
  setup() {
    return {
      args
    };
  },
  template: '<Alert v-bind="args" />'
})`,...(X=(U=d.parameters)==null?void 0:U.docs)==null?void 0:X.source}}};var $,O,j;u.parameters={...u.parameters,docs:{...($=u.parameters)==null?void 0:$.docs,source:{originalSource:`() => ({
  components: {
    Alert
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Alert Variants</h2>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Alert
          variant="success"
          title="Success"
          message="Your operation completed successfully."
        />
        <Alert
          variant="warning"
          title="PhWarning"
          message="Please review the information before proceeding."
        />
        <Alert
          variant="error"
          title="Error"
          message="An error occurred while processing your request."
        />
        <Alert
          variant="info"
          title="Information"
          message="Here is some important information for you."
        />
      </div>
    </div>
  \`
})`,...(j=(O=u.parameters)==null?void 0:O.docs)==null?void 0:j.source}}};var F,G,J;f.parameters={...f.parameters,docs:{...(F=f.parameters)==null?void 0:F.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-success-dark</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-warning-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-error-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-info-light</code></td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-4xs</code></td><td style="text-align: right;">4px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>
      </div>
    </div>
  \`
})`,...(J=(G=f.parameters)==null?void 0:G.docs)==null?void 0:J.source}}};const ue=["Playground","Success","Warning","Error","Info","Closable","WithoutIcon","AllVariants","DesignTokens"];export{u as AllVariants,m as Closable,f as DesignTokens,l as Error,c as Info,a as Playground,o as Success,i as Warning,d as WithoutIcon,ue as __namedExportsOrder,me as default};
