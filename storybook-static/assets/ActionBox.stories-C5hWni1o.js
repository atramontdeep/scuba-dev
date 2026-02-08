import{v as O,w as g,c as F,a as m,p as h,b as e,e as C,s as G,t as v,q as N,u as U,o}from"./vue.esm-bundler-BXouRCJi.js";import{A as j}from"./Avatar-CUNj3rZn.js";import{C as q}from"./Chip-Df3ee4E2.js";import{C as R}from"./Checkbox-rZRf0UbM.js";import{G as H}from"./PhCaretRight.vue-CsxJLk1X.js";import{_ as J}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{I as s}from"./PhPlus.vue-BvWHZ1J1.js";const K={class:"scuba-action-box__content"},Q={class:"scuba-action-box__title"},W={key:0,class:"scuba-action-box__subtitle"},X={__name:"ActionBox",props:{title:{type:String,required:!0},subtitle:{type:String,default:""},showCheckbox:{type:Boolean,default:!1},checked:{type:Boolean,default:!1},showAvatar:{type:Boolean,default:!1},avatarInitials:{type:String,default:"AB"},avatarSrc:{type:String,default:""},showSubtitle:{type:Boolean,default:!1},showChip:{type:Boolean,default:!1},chipLabel:{type:String,default:"Chip"},chipCount:{type:Boolean,default:!1},chipCountValue:{type:[String,Number],default:"32"},chipIcon:{type:[Object,Function],default:null},showIcon:{type:Boolean,default:!1},icon:{type:[Object,Function],default:()=>H},clickable:{type:Boolean,default:!0}},emits:["click","checkbox-change"],setup(t,{emit:b}){const n=t,a=b,l=O(n.checked);g(()=>n.checked,c=>{l.value=c}),g(l,c=>{a("checkbox-change",c)});const L=F(()=>["scuba-action-box",{"scuba-action-box--clickable":n.clickable}]),E=()=>{n.clickable&&a("click")},D=()=>{};return(c,r)=>(o(),m("div",{class:U(L.value),onClick:E},[t.showCheckbox?(o(),h(R,{key:0,modelValue:l.value,"onUpdate:modelValue":r[0]||(r[0]=M=>l.value=M),showLabel:!1,onClick:r[1]||(r[1]=G(()=>{},["stop"])),onChange:D,class:"scuba-action-box__checkbox"},null,8,["modelValue"])):e("",!0),t.showAvatar?(o(),h(j,{key:1,initials:t.avatarInitials,src:t.avatarSrc,size:"md",variant:"default",class:"scuba-action-box__avatar"},null,8,["initials","src"])):e("",!0),C("div",K,[C("h3",Q,v(t.title),1),t.showSubtitle&&t.subtitle?(o(),m("p",W,v(t.subtitle),1)):e("",!0)]),t.showChip?(o(),h(q,{key:2,label:t.chipLabel,count:t.chipCount,countValue:t.chipCountValue,icon:t.chipIcon,size:"md",class:"scuba-action-box__chip"},null,8,["label","count","countValue","icon"])):e("",!0),t.showIcon?(o(),h(N(t.icon),{key:3,size:24,class:"scuba-action-box__icon"})):e("",!0)],2))}},x=J(X,[["__scopeId","data-v-4308c9e3"]]),et={title:"Scuba/ActionBox",component:x,tags:["autodocs"],argTypes:{title:{control:"text",description:"Título do ActionBox (sempre visível)"},subtitle:{control:"text",description:"Subtítulo/contexto"},showCheckbox:{control:"boolean",description:"Mostrar checkbox"},checked:{control:"boolean",description:"Estado do checkbox"},showAvatar:{control:"boolean",description:"Mostrar avatar"},avatarInitials:{control:"text",description:"Iniciais do avatar"},showSubtitle:{control:"boolean",description:"Mostrar subtítulo"},showChip:{control:"boolean",description:"Mostrar chip"},chipLabel:{control:"text",description:"Texto do chip"},chipCount:{control:"boolean",description:"Mostrar contador no chip"},chipCountValue:{control:"text",description:"Valor do contador"},showIcon:{control:"boolean",description:"Mostrar ícone à direita"},clickable:{control:"boolean",description:"ActionBox clicável"}}},i=t=>({components:{ActionBox:x,PhPlus:s},setup(){return{args:t,PhPlus:s,handleClick:()=>{console.log("ActionBox clicked!")},handleCheckboxChange:a=>{console.log("Checkbox changed:",a)}}},template:'<ActionBox v-bind="args" :chipIcon="args.chipCount ? PhPlus : null" @click="handleClick" @checkbox-change="handleCheckboxChange" />'});i.args={title:"Title",subtitle:"Context",showCheckbox:!0,checked:!1,showAvatar:!0,avatarInitials:"AB",showSubtitle:!0,showChip:!0,chipLabel:"Chip",chipCount:!0,chipCountValue:"32",showIcon:!0,clickable:!0};const p=()=>({components:{ActionBox:x,PhPlus:s},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Variações do ActionBox</h2>

      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px;">
        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Completo (todos os elementos)</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem checkbox</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem avatar</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem subtítulo</h3>
          <ActionBox
            title="Title"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem chip</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem ícone</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Mínimo (apenas título)</h3>
          <ActionBox title="Title" />
        </div>
      </div>
    </div>
  `}),d=()=>({components:{ActionBox:x,PhPlus:s},setup(){return{PhPlus:s}},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Lista de ActionBoxes</h2>

      <div style="display: flex; flex-direction: column; gap: 8px; max-width: 600px;">
        <ActionBox
          title="Item 1"
          subtitle="Description for item 1"
          showCheckbox
          showAvatar
          avatarInitials="A1"
          showSubtitle
          showChip
          chipLabel="Chip"
          :chipCount="true"
          chipCountValue="5"
          :chipIcon="PhPlus"
          showIcon
        />
        <ActionBox
          title="Item 2"
          subtitle="Description for item 2"
          showCheckbox
          :checked="true"
          showAvatar
          avatarInitials="A2"
          showSubtitle
          showChip
          chipLabel="Chip"
          :chipCount="true"
          chipCountValue="12"
          :chipIcon="PhPlus"
          showIcon
        />
        <ActionBox
          title="Item 3"
          subtitle="Description for item 3"
          showCheckbox
          showAvatar
          avatarInitials="A3"
          showSubtitle
          showChip
          chipLabel="Chip"
          :chipCount="true"
          chipCountValue="32"
          :chipIcon="PhPlus"
          showIcon
        />
      </div>
    </div>
  `}),u=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Estrutura</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Padding:</strong></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Gap:</strong></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Border:</strong></td><td style="text-align: right;">1px solid #E5E7EB</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Border Radius:</strong></td><td style="text-align: right;">8px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Tipografia</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Título:</strong></td><td style="text-align: right;">16px / 600</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Subtítulo:</strong></td><td style="text-align: right;">14px / 400</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Componentes Opcionais</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Checkbox:</strong> Controlado por <code>showCheckbox</code></li>
          <li><strong>Avatar:</strong> Controlado por <code>showAvatar</code></li>
          <li><strong>Subtítulo:</strong> Controlado por <code>showSubtitle</code></li>
          <li><strong>Chip:</strong> Controlado por <code>showChip</code></li>
          <li><strong>Ícone:</strong> Controlado por <code>showIcon</code></li>
          <li><strong>Título:</strong> Sempre visível (obrigatório)</li>
        </ul>
      </div>
    </div>
  `});var w,f,y;i.parameters={...i.parameters,docs:{...(w=i.parameters)==null?void 0:w.docs,source:{originalSource:`args => ({
  components: {
    ActionBox,
    PhPlus
  },
  setup() {
    const handleClick = () => {
      console.log('ActionBox clicked!');
    };
    const handleCheckboxChange = checked => {
      console.log('Checkbox changed:', checked);
    };
    return {
      args,
      PhPlus,
      handleClick,
      handleCheckboxChange
    };
  },
  template: '<ActionBox v-bind="args" :chipIcon="args.chipCount ? PhPlus : null" @click="handleClick" @checkbox-change="handleCheckboxChange" />'
})`,...(y=(f=i.parameters)==null?void 0:f.docs)==null?void 0:y.source}}};var k,B,A;p.parameters={...p.parameters,docs:{...(k=p.parameters)==null?void 0:k.docs,source:{originalSource:`() => ({
  components: {
    ActionBox,
    PhPlus
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px;">Variações do ActionBox</h2>

      <div style="display: flex; flex-direction: column; gap: 16px; max-width: 600px;">
        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Completo (todos os elementos)</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem checkbox</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem avatar</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem subtítulo</h3>
          <ActionBox
            title="Title"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem chip</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showIcon
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Sem ícone</h3>
          <ActionBox
            title="Title"
            subtitle="Context"
            showCheckbox
            showAvatar
            avatarInitials="AB"
            showSubtitle
            showChip
            chipLabel="Chip"
            :chipCount="true"
            chipCountValue="32"
            :chipIcon="PhPlus"
          />
        </div>

        <div>
          <h3 style="font-size: 14px; color: #6B7280; margin-bottom: 8px;">Mínimo (apenas título)</h3>
          <ActionBox title="Title" />
        </div>
      </div>
    </div>
  \`
})`,...(A=(B=p.parameters)==null?void 0:B.docs)==null?void 0:A.source}}};var I,P,S;d.parameters={...d.parameters,docs:{...(I=d.parameters)==null?void 0:I.docs,source:{originalSource:`() => ({
  components: {
    ActionBox,
    PhPlus
  },
  setup() {
    return {
      PhPlus
    };
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Lista de ActionBoxes</h2>

      <div style="display: flex; flex-direction: column; gap: 8px; max-width: 600px;">
        <ActionBox
          title="Item 1"
          subtitle="Description for item 1"
          showCheckbox
          showAvatar
          avatarInitials="A1"
          showSubtitle
          showChip
          chipLabel="Chip"
          :chipCount="true"
          chipCountValue="5"
          :chipIcon="PhPlus"
          showIcon
        />
        <ActionBox
          title="Item 2"
          subtitle="Description for item 2"
          showCheckbox
          :checked="true"
          showAvatar
          avatarInitials="A2"
          showSubtitle
          showChip
          chipLabel="Chip"
          :chipCount="true"
          chipCountValue="12"
          :chipIcon="PhPlus"
          showIcon
        />
        <ActionBox
          title="Item 3"
          subtitle="Description for item 3"
          showCheckbox
          showAvatar
          avatarInitials="A3"
          showSubtitle
          showChip
          chipLabel="Chip"
          :chipCount="true"
          chipCountValue="32"
          :chipIcon="PhPlus"
          showIcon
        />
      </div>
    </div>
  \`
})`,...(S=(P=d.parameters)==null?void 0:P.docs)==null?void 0:S.source}}};var V,z,T;u.parameters={...u.parameters,docs:{...(V=u.parameters)==null?void 0:V.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Estrutura</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Padding:</strong></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Gap:</strong></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Border:</strong></td><td style="text-align: right;">1px solid #E5E7EB</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Border Radius:</strong></td><td style="text-align: right;">8px</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Tipografia</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><strong>Título:</strong></td><td style="text-align: right;">16px / 600</td></tr>
            <tr><td style="padding: 8px 0;"><strong>Subtítulo:</strong></td><td style="text-align: right;">14px / 400</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Componentes Opcionais</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Checkbox:</strong> Controlado por <code>showCheckbox</code></li>
          <li><strong>Avatar:</strong> Controlado por <code>showAvatar</code></li>
          <li><strong>Subtítulo:</strong> Controlado por <code>showSubtitle</code></li>
          <li><strong>Chip:</strong> Controlado por <code>showChip</code></li>
          <li><strong>Ícone:</strong> Controlado por <code>showIcon</code></li>
          <li><strong>Título:</strong> Sempre visível (obrigatório)</li>
        </ul>
      </div>
    </div>
  \`
})`,...(T=(z=u.parameters)==null?void 0:z.docs)==null?void 0:T.source}}};const it=["Playground","Variations","ListExample","DesignTokens"];export{u as DesignTokens,d as ListExample,i as Playground,p as Variations,it as __namedExportsOrder,et as default};
