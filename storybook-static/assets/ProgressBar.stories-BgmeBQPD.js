import{c as p,a as s,e as v,b as l,y as j,p as h,t as y,o as a,q as F,K as G}from"./vue.esm-bundler-cjlVRrb_.js";import{_ as H}from"./_plugin-vue_export-helper-DlAUqK2U.js";const J=["aria-valuenow","aria-label"],Q={key:0,class:"scuba-progress__bar-animated"},R={key:0,class:"scuba-progress__footer"},X={key:0,class:"scuba-progress__support-text"},Y={key:1,class:"scuba-progress__percentage"},Z={__name:"ProgressBar",props:{value:{type:Number,default:0,validator:e=>e>=0&&e<=100},size:{type:String,default:"sm",validator:e=>["sm"].includes(e)},supportText:{type:String,default:""},showPercentage:{type:Boolean,default:!0},animated:{type:Boolean,default:!1},ariaLabel:{type:String,default:"Progress"}},setup(e){const r=e,K=p(()=>{const t=["scuba-progress"];return t.push(`scuba-progress--${r.size}`),t}),M=p(()=>"scuba-progress__track"),O=p(()=>{const t=["scuba-progress__bar"];return r.animated&&t.push("scuba-progress__bar--animated"),t}),$=p(()=>({width:r.value+"%"}));return(t,ee)=>(a(),s("div",{class:h(K.value)},[v("div",{class:h(M.value)},[v("div",{class:h(O.value),style:j($.value),role:"progressbar","aria-valuenow":e.value,"aria-valuemin":"0","aria-valuemax":"100","aria-label":e.ariaLabel},[e.animated?(a(),s("div",Q)):l("",!0)],14,J)],2),e.supportText||e.showPercentage?(a(),s("div",R,[e.supportText?(a(),s("span",X,y(e.supportText),1)):l("",!0),e.showPercentage?(a(),s("span",Y,y(e.value)+"%",1)):l("",!0)])):l("",!0)],2))}},m=H(Z,[["__scopeId","data-v-e0a8f0ac"]]),se={title:"Scuba/ProgressBar",component:m,tags:["autodocs"],argTypes:{value:{control:{type:"range",min:0,max:100,step:1},description:"Valor do progresso (0-100)"},size:{control:"select",options:["sm"],description:"Tamanho da barra (apenas sm)"},supportText:{control:"text",description:"Texto de suporte (abaixo à esquerda)"},showPercentage:{control:"boolean",description:"Mostrar porcentagem (abaixo à direita)"},animated:{control:"boolean",description:"Animação de progresso"}}},x=e=>({components:{ProgressBar:m},setup(){return{args:e}},template:'<ProgressBar v-bind="args" />'}),o=x.bind({});o.args={value:65,size:"sm",showPercentage:!0,supportText:"Uploading files..."};const n=x.bind({});n.args={value:75,size:"sm",showPercentage:!0};const d=x.bind({});d.args={value:45,size:"sm",showPercentage:!0,supportText:"Processing..."};const i=x.bind({});i.args={value:60,size:"sm",showPercentage:!0,supportText:"Loading",animated:!0};const c=()=>({components:{ProgressBar:m},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Progress Bar Examples</h2>
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Basic</h3>
          <ProgressBar :value="75" supportText="Uploading..." showPercentage />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">With Animation</h3>
          <ProgressBar :value="60" supportText="Processing" showPercentage animated />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Without Support Text</h3>
          <ProgressBar :value="45" showPercentage />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Without Percentage</h3>
          <ProgressBar :value="90" supportText="Almost done" :showPercentage="false" />
        </div>
      </div>
    </div>
  `}),g=()=>({components:{ProgressBar:m},setup(){const e=F(0),r=setInterval(()=>{e.value>=100?e.value=0:e.value+=1},50);return G(()=>{clearInterval(r)}),{progress:e}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Animated Progress</h2>
      <ProgressBar :value="progress" supportText="Auto Incrementing" showPercentage animated />
    </div>
  `}),u=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus</code></td><td>Progress bar (single)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td><td>Track & bar 2 (triple)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td><td>Border 0%</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td>Background 1-99%</td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-blue-900</code></td><td>Background 100%</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td>Support text & %</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>Single height</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>DataTable height</code></td><td style="text-align: right;">28px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">Single variant</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">DataTable variant</td></tr>
          </table>
        </div>
      </div>
    </div>
  `});var f,b,P;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<ProgressBar v-bind="args" />'
})`,...(P=(b=o.parameters)==null?void 0:b.docs)==null?void 0:P.source}}};var B,w,T;n.parameters={...n.parameters,docs:{...(B=n.parameters)==null?void 0:B.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<ProgressBar v-bind="args" />'
})`,...(T=(w=n.parameters)==null?void 0:w.docs)==null?void 0:T.source}}};var z,S,_;d.parameters={...d.parameters,docs:{...(z=d.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<ProgressBar v-bind="args" />'
})`,...(_=(S=d.parameters)==null?void 0:S.docs)==null?void 0:_.source}}};var k,A,D;i.parameters={...i.parameters,docs:{...(k=i.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    ProgressBar
  },
  setup() {
    return {
      args
    };
  },
  template: '<ProgressBar v-bind="args" />'
})`,...(D=(A=i.parameters)==null?void 0:A.docs)==null?void 0:D.source}}};var W,C,I;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`() => ({
  components: {
    ProgressBar
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Progress Bar Examples</h2>
      <div style="display: flex; flex-direction: column; gap: 32px;">
        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Basic</h3>
          <ProgressBar :value="75" supportText="Uploading..." showPercentage />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">With Animation</h3>
          <ProgressBar :value="60" supportText="Processing" showPercentage animated />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Without Support Text</h3>
          <ProgressBar :value="45" showPercentage />
        </div>

        <div>
          <h3 style="margin-bottom: 16px; font-size: 18px; font-weight: 600;">Without Percentage</h3>
          <ProgressBar :value="90" supportText="Almost done" :showPercentage="false" />
        </div>
      </div>
    </div>
  \`
})`,...(I=(C=c.parameters)==null?void 0:C.docs)==null?void 0:I.source}}};var U,V,E;g.parameters={...g.parameters,docs:{...(U=g.parameters)==null?void 0:U.docs,source:{originalSource:`() => ({
  components: {
    ProgressBar
  },
  setup() {
    const progress = ref(0);
    const interval = setInterval(() => {
      if (progress.value >= 100) {
        progress.value = 0;
      } else {
        progress.value += 1;
      }
    }, 50);
    onBeforeUnmount(() => {
      clearInterval(interval);
    });
    return {
      progress
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Animated Progress</h2>
      <ProgressBar :value="progress" supportText="Auto Incrementing" showPercentage animated />
    </div>
  \`
})`,...(E=(V=g.parameters)==null?void 0:V.docs)==null?void 0:E.source}}};var L,N,q;u.parameters={...u.parameters,docs:{...(L=u.parameters)==null?void 0:L.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus</code></td><td>Progress bar (single)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action</code></td><td>Track & bar 2 (triple)</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td><td>Border 0%</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td>Background 1-99%</td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-blue-900</code></td><td>Background 100%</td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-text-secondary</code></td><td>Support text & %</td></tr>
          </table>
        </div>
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Sizing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>Single height</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>DataTable height</code></td><td style="text-align: right;">28px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-pill</code></td><td style="text-align: right;">Single variant</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">DataTable variant</td></tr>
          </table>
        </div>
      </div>
    </div>
  \`
})`,...(q=(N=u.parameters)==null?void 0:N.docs)==null?void 0:q.source}}};const ae=["Playground","Basic","WithSupportText","Animated","AllVariants","AnimatedDemo","DesignTokens"];export{c as AllVariants,i as Animated,g as AnimatedDemo,n as Basic,u as DesignTokens,o as Playground,d as WithSupportText,ae as __namedExportsOrder,se as default};
