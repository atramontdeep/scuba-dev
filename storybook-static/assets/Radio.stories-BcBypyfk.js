import{q as a,c as i,w,a as o,b as V,e as z,p as s,t as O,s as ue,L as ve,o as r}from"./vue.esm-bundler-cjlVRrb_.js";import{_ as ge}from"./_plugin-vue_export-helper-DlAUqK2U.js";const fe={class:"scuba-radio__container"},ye=["id","value","name","disabled"],be={key:0,class:"scuba-radio__dot"},xe={__name:"Radio",props:{modelValue:{type:[String,Number,Boolean],default:null},value:{type:[String,Number,Boolean],required:!0},label:{type:String,default:""},name:{type:String,required:!0},labelPosition:{type:String,default:"right",validator:e=>["left","right","none"].includes(e)},size:{type:String,default:"md",validator:e=>["sm","md","lg"].includes(e)},disabled:{type:Boolean,default:!1},id:{type:String,default:null}},emits:["update:modelValue","change"],setup(e,{emit:h}){const l=e,L=h,n=a(l.modelValue),de=i(()=>l.id?l.id:"scuba-radio-"+Math.random().toString(36).substr(2,9)),R=i(()=>n.value===l.value),ie=i(()=>l.label&&l.labelPosition==="left"),ne=i(()=>l.label&&l.labelPosition==="right"),oe=i(()=>"scuba-radio__label scuba-radio__label--left"),se=i(()=>"scuba-radio__label scuba-radio__label--right"),re=i(()=>{const t=["scuba-radio"];return t.push("scuba-radio--"+l.size),l.disabled&&t.push("scuba-radio--disabled"),l.label||t.push("scuba-radio--no-label"),t}),pe=i(()=>{const t=["scuba-radio__circle"];return R.value&&t.push("scuba-radio__circle--checked"),l.disabled&&t.push("scuba-radio__circle--disabled"),R.value||t.push("scuba-radio__circle--unchecked"),t});w(()=>l.modelValue,t=>{n.value=t}),w(n,t=>{L("update:modelValue",t)});const ce=t=>{L("change",t)};return(t,S)=>(r(),o("label",{class:s(re.value)},[ie.value?(r(),o("span",{key:0,class:s(oe.value)},O(e.label),3)):V("",!0),z("div",fe,[ue(z("input",{id:de.value,"onUpdate:modelValue":S[0]||(S[0]=me=>n.value=me),type:"radio",value:e.value,name:e.name,disabled:e.disabled,class:"scuba-radio__input",onChange:ce},null,40,ye),[[ve,n.value]]),z("div",{class:s(pe.value)},[R.value?(r(),o("div",be)):V("",!0)],2)]),ne.value?(r(),o("span",{key:1,class:s(se.value)},O(e.label),3)):V("",!0)],2))}},d=ge(xe,[["__scopeId","data-v-7f523b14"]]),Ve={title:"Scuba/Radio",component:d,tags:["autodocs"],argTypes:{size:{control:"select",options:["sm","md","lg"],description:"Tamanho do radio button"},labelPosition:{control:"select",options:["left","right","none"],description:"Posição do label"},label:{control:"text",description:"Texto do label"},disabled:{control:"boolean",description:"Estado desabilitado"},name:{control:"text",description:"Nome do grupo de radio buttons"},value:{control:"text",description:"Valor do radio button"}}},p=()=>({components:{Radio:d},setup(){return{selectedValue:a("option1")}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3 style="margin-bottom: 16px;">Selected: {{ selectedValue }}</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="playground" value="option1" label="Option 1" />
        <Radio v-model="selectedValue" name="playground" value="option2" label="Option 2" />
        <Radio v-model="selectedValue" name="playground" value="option3" label="Option 3" />
      </div>
    </div>
  `}),c=()=>({components:{Radio:d},setup(){return{selectedValue:a("option1")}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="default" value="option1" label="Option 1" />
        <Radio v-model="selectedValue" name="default" value="option2" label="Option 2" />
        <Radio v-model="selectedValue" name="default" value="option3" label="Option 3" />
      </div>
    </div>
  `}),m=()=>({components:{Radio:d},setup(){return{selectedValue:a("option1")}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="small" value="option1" label="Small Option 1" size="sm" />
        <Radio v-model="selectedValue" name="small" value="option2" label="Small Option 2" size="sm" />
        <Radio v-model="selectedValue" name="small" value="option3" label="Small Option 3" size="sm" />
      </div>
    </div>
  `}),u=()=>({components:{Radio:d},setup(){return{selectedValue:a("option1")}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="medium" value="option1" label="Medium Option 1" size="md" />
        <Radio v-model="selectedValue" name="medium" value="option2" label="Medium Option 2" size="md" />
        <Radio v-model="selectedValue" name="medium" value="option3" label="Medium Option 3" size="md" />
      </div>
    </div>
  `}),v=()=>({components:{Radio:d},setup(){return{selectedValue:a("option1")}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="large" value="option1" label="Large Option 1" size="lg" />
        <Radio v-model="selectedValue" name="large" value="option2" label="Large Option 2" size="lg" />
        <Radio v-model="selectedValue" name="large" value="option3" label="Large Option 3" size="lg" />
      </div>
    </div>
  `}),g=()=>({components:{Radio:d},setup(){return{selectedValue:a("option1")}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="disabled" value="option1" label="Option 1 (Disabled)" disabled />
        <Radio v-model="selectedValue" name="disabled" value="option2" label="Option 2 (Disabled Selected)" disabled />
        <Radio v-model="selectedValue" name="disabled" value="option3" label="Option 3" />
      </div>
    </div>
  `}),f=()=>({components:{Radio:d},setup(){return{selectedValue:a("option1")}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="label-left" value="option1" label="Label Left 1" labelPosition="left" />
        <Radio v-model="selectedValue" name="label-left" value="option2" label="Label Left 2" labelPosition="left" />
        <Radio v-model="selectedValue" name="label-left" value="option3" label="Label Left 3" labelPosition="left" />
      </div>
    </div>
  `}),y=()=>({components:{Radio:d},setup(){return{selectedValue:a("option1")}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; gap: 16px;">
        <Radio v-model="selectedValue" name="no-label" value="option1" />
        <Radio v-model="selectedValue" name="no-label" value="option2" />
        <Radio v-model="selectedValue" name="no-label" value="option3" />
      </div>
    </div>
  `}),b=()=>({components:{Radio:d},setup(){const e=a("option1"),h=a("option1"),l=a("option1");return{small:e,medium:h,large:l}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Radio Button Sizes & States</h2>

      <!-- Header -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 20px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">SELECTED</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SMALL -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">SMALL</div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-default" value="default" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-selected" value="option1" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-disabled" value="disabled" label="Label" size="sm" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-focus" value="focus" label="Label" size="sm" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 999px;" />
        </div>
      </div>

      <!-- MEDIUM -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">MEDIUM</div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-default" value="default" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-selected" value="option1" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-disabled" value="disabled" label="Label" size="md" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-focus" value="focus" label="Label" size="md" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 999px;" />
        </div>
      </div>

      <!-- LARGE -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">LARGE</div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-default" value="default" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-selected" value="option1" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-disabled" value="disabled" label="Label" size="lg" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-focus" value="focus" label="Label" size="lg" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 999px;" />
        </div>
      </div>
    </div>
  `}),x=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-700</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-regular</code></td><td style="text-align: right;">400</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-300</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-400</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-full</code></td><td style="text-align: right;">9999px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Nota</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          Radio buttons sempre devem ser usados em grupos com o mesmo <code>name</code> para garantir que apenas uma opção possa ser selecionada por vez.
        </p>
      </div>
    </div>
  `});var P,_,D;p.parameters={...p.parameters,docs:{...(P=p.parameters)==null?void 0:P.docs,source:{originalSource:`() => ({
  components: {
    Radio
  },
  setup() {
    const selectedValue = ref('option1');
    return {
      selectedValue
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3 style="margin-bottom: 16px;">Selected: {{ selectedValue }}</h3>
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="playground" value="option1" label="Option 1" />
        <Radio v-model="selectedValue" name="playground" value="option2" label="Option 2" />
        <Radio v-model="selectedValue" name="playground" value="option3" label="Option 3" />
      </div>
    </div>
  \`
})`,...(D=(_=p.parameters)==null?void 0:_.docs)==null?void 0:D.source}}};var E,j,M;c.parameters={...c.parameters,docs:{...(E=c.parameters)==null?void 0:E.docs,source:{originalSource:`() => ({
  components: {
    Radio
  },
  setup() {
    const selectedValue = ref('option1');
    return {
      selectedValue
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="default" value="option1" label="Option 1" />
        <Radio v-model="selectedValue" name="default" value="option2" label="Option 2" />
        <Radio v-model="selectedValue" name="default" value="option3" label="Option 3" />
      </div>
    </div>
  \`
})`,...(M=(j=c.parameters)==null?void 0:j.docs)==null?void 0:M.source}}};var A,C,k;m.parameters={...m.parameters,docs:{...(A=m.parameters)==null?void 0:A.docs,source:{originalSource:`() => ({
  components: {
    Radio
  },
  setup() {
    const selectedValue = ref('option1');
    return {
      selectedValue
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="small" value="option1" label="Small Option 1" size="sm" />
        <Radio v-model="selectedValue" name="small" value="option2" label="Small Option 2" size="sm" />
        <Radio v-model="selectedValue" name="small" value="option3" label="Small Option 3" size="sm" />
      </div>
    </div>
  \`
})`,...(k=(C=m.parameters)==null?void 0:C.docs)==null?void 0:k.source}}};var T,B,U;u.parameters={...u.parameters,docs:{...(T=u.parameters)==null?void 0:T.docs,source:{originalSource:`() => ({
  components: {
    Radio
  },
  setup() {
    const selectedValue = ref('option1');
    return {
      selectedValue
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="medium" value="option1" label="Medium Option 1" size="md" />
        <Radio v-model="selectedValue" name="medium" value="option2" label="Medium Option 2" size="md" />
        <Radio v-model="selectedValue" name="medium" value="option3" label="Medium Option 3" size="md" />
      </div>
    </div>
  \`
})`,...(U=(B=u.parameters)==null?void 0:B.docs)==null?void 0:U.source}}};var N,I,q;v.parameters={...v.parameters,docs:{...(N=v.parameters)==null?void 0:N.docs,source:{originalSource:`() => ({
  components: {
    Radio
  },
  setup() {
    const selectedValue = ref('option1');
    return {
      selectedValue
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="large" value="option1" label="Large Option 1" size="lg" />
        <Radio v-model="selectedValue" name="large" value="option2" label="Large Option 2" size="lg" />
        <Radio v-model="selectedValue" name="large" value="option3" label="Large Option 3" size="lg" />
      </div>
    </div>
  \`
})`,...(q=(I=v.parameters)==null?void 0:I.docs)==null?void 0:q.source}}};var F,G,H;g.parameters={...g.parameters,docs:{...(F=g.parameters)==null?void 0:F.docs,source:{originalSource:`() => ({
  components: {
    Radio
  },
  setup() {
    const selectedValue = ref('option1');
    return {
      selectedValue
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="disabled" value="option1" label="Option 1 (Disabled)" disabled />
        <Radio v-model="selectedValue" name="disabled" value="option2" label="Option 2 (Disabled Selected)" disabled />
        <Radio v-model="selectedValue" name="disabled" value="option3" label="Option 3" />
      </div>
    </div>
  \`
})`,...(H=(G=g.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var W,J,K;f.parameters={...f.parameters,docs:{...(W=f.parameters)==null?void 0:W.docs,source:{originalSource:`() => ({
  components: {
    Radio
  },
  setup() {
    const selectedValue = ref('option1');
    return {
      selectedValue
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; flex-direction: column; gap: 16px;">
        <Radio v-model="selectedValue" name="label-left" value="option1" label="Label Left 1" labelPosition="left" />
        <Radio v-model="selectedValue" name="label-left" value="option2" label="Label Left 2" labelPosition="left" />
        <Radio v-model="selectedValue" name="label-left" value="option3" label="Label Left 3" labelPosition="left" />
      </div>
    </div>
  \`
})`,...(K=(J=f.parameters)==null?void 0:J.docs)==null?void 0:K.source}}};var Q,X,Y;y.parameters={...y.parameters,docs:{...(Q=y.parameters)==null?void 0:Q.docs,source:{originalSource:`() => ({
  components: {
    Radio
  },
  setup() {
    const selectedValue = ref('option1');
    return {
      selectedValue
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="display: flex; gap: 16px;">
        <Radio v-model="selectedValue" name="no-label" value="option1" />
        <Radio v-model="selectedValue" name="no-label" value="option2" />
        <Radio v-model="selectedValue" name="no-label" value="option3" />
      </div>
    </div>
  \`
})`,...(Y=(X=y.parameters)==null?void 0:X.docs)==null?void 0:Y.source}}};var Z,$,ee;b.parameters={...b.parameters,docs:{...(Z=b.parameters)==null?void 0:Z.docs,source:{originalSource:`() => ({
  components: {
    Radio
  },
  setup() {
    const small = ref('option1');
    const medium = ref('option1');
    const large = ref('option1');
    return {
      small,
      medium,
      large
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Radio Button Sizes & States</h2>

      <!-- Header -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 20px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">SELECTED</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SMALL -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">SMALL</div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-default" value="default" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-selected" value="option1" label="Label" size="sm" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-disabled" value="disabled" label="Label" size="sm" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="small" name="small-focus" value="focus" label="Label" size="sm" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 999px;" />
        </div>
      </div>

      <!-- MEDIUM -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">MEDIUM</div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-default" value="default" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-selected" value="option1" label="Label" size="md" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-disabled" value="disabled" label="Label" size="md" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="medium" name="medium-focus" value="focus" label="Label" size="md" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 999px;" />
        </div>
      </div>

      <!-- LARGE -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">LARGE</div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-default" value="default" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-selected" value="option1" label="Label" size="lg" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-disabled" value="disabled" label="Label" size="lg" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Radio v-model="large" name="large-focus" value="focus" label="Label" size="lg" style="outline: 2px solid var(--context-color-border-focus); outline-offset: 2px; border-radius: 999px;" />
        </div>
      </div>
    </div>
  \`
})`,...(ee=($=b.parameters)==null?void 0:$.docs)==null?void 0:ee.source}}};var te,le,ae;x.parameters={...x.parameters,docs:{...(te=x.parameters)==null?void 0:te.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-700</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-disabled</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-base</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-regular</code></td><td style="text-align: right;">400</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-300</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-400</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--scale-500</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border & Effects</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-width-border-md</code></td><td style="text-align: right;">2px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-full</code></td><td style="text-align: right;">9999px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--transition-base</code></td><td style="text-align: right;">200ms</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Nota</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          Radio buttons sempre devem ser usados em grupos com o mesmo <code>name</code> para garantir que apenas uma opção possa ser selecionada por vez.
        </p>
      </div>
    </div>
  \`
})`,...(ae=(le=x.parameters)==null?void 0:le.docs)==null?void 0:ae.source}}};const ze=["Playground","Default","Small","Medium","Large","Disabled","LabelLeft","NoLabel","AllSizesAndStates","DesignTokens"];export{b as AllSizesAndStates,c as Default,x as DesignTokens,g as Disabled,f as LabelLeft,v as Large,u as Medium,y as NoLabel,p as Playground,m as Small,ze as __namedExportsOrder,Ve as default};
