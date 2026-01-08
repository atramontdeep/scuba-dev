import{B as c}from"./Button-CsaQJ0tt.js";import"./vue.esm-bundler-cjlVRrb_.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const q={title:"Scuba/Button",component:c,tags:["autodocs"],argTypes:{variant:{control:"select",options:["solid","outline","text"],description:"Variante visual do botão"},size:{control:"select",options:["sm","md","lg"],description:"Tamanho do botão"},label:{control:"text",description:"Texto do botão"},disabled:{control:"boolean",description:"Estado desabilitado"},iconLeft:{control:"text",description:"Ícone esquerda (ex: ph-user, ph-star)"},iconRight:{control:"text",description:"Ícone direita (ex: ph-arrow-right, ph-check)"},fullWidth:{control:"boolean",description:"Largura total"},onClick:{action:"clicked"}}},t=F=>({components:{Button:c},setup(){return{args:F}},template:'<Button v-bind="args" />'}),e=t.bind({});e.args={variant:"solid",size:"md",label:"Label",iconRight:"ph-arrow-right"};e.parameters={docs:{description:{story:"🎨 Use os controles abaixo para testar diferentes combinações de ícones, estados e propriedades. Veja todos os ícones em [phosphoricons.com](https://phosphoricons.com/)"}}};const i=t.bind({});i.args={variant:"solid",size:"md",label:"Label",iconRight:"ph-arrow-right"};const n=t.bind({});n.args={variant:"outline",size:"md",label:"Label",iconRight:"ph-arrow-right"};const o=t.bind({});o.args={variant:"text",size:"md",label:"Label",iconRight:"ph-arrow-right"};const r=t.bind({});r.args={variant:"solid",size:"sm",label:"Label",iconLeft:"ph-heart",iconRight:"ph-arrow-right"};const a=t.bind({});a.args={variant:"solid",size:"md",label:"Label",iconLeft:"ph-heart",iconRight:"ph-arrow-right"};const d=t.bind({});d.args={variant:"solid",size:"lg",label:"Label",iconLeft:"ph-heart",iconRight:"ph-arrow-right"};const l=t.bind({});l.args={variant:"solid",size:"md",label:"Label",iconLeft:"ph-heart",iconRight:"ph-arrow-right",disabled:!0};const s=()=>({components:{Button:c},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Button Variants & States</h2>
      
      <!-- Header -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 20px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">HOVER</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SOLID -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">SOLID</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="background: var(--semantic-color-primary-600)" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="outline: 2px solid var(--semantic-color-primary-default); outline-offset: 2px;" />
        </div>
      </div>

      <!-- OUTLINE -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">OUTLINE</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="background: var(--context-color-surface-action-hover); border-color: var(--context-color-border-action-hover);" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="border-color: var(--context-color-border-focus); outline: 2px solid var(--context-color-surface-focus-light); outline-offset: 0;" />
        </div>
      </div>

      <!-- TEXT -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">TEXT</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="background: var(--context-color-surface-action-hover);" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="outline: 2px solid var(--context-color-surface-focus-light); outline-offset: 0;" />
        </div>
      </div>

      <!-- Sizes -->
      <h2 style="margin: 48px 0 32px; font-size: 24px; font-weight: 600;">Button Sizes</h2>
      
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; align-items: center;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">SOLID</div>
        <div style="font-weight: 600; text-align: center;">OUTLINE</div>
        <div style="font-weight: 600; text-align: center;">TEXT</div>
        <div></div>
      </div>

      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-top: 20px; align-items: center;">
        <div style="font-weight: 600;">SMALL</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" size="sm" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" size="sm" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" size="sm" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-top: 20px; align-items: center;">
        <div style="font-weight: 600;">MEDIUM</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" size="md" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" size="md" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" size="md" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-top: 20px; align-items: center;">
        <div style="font-weight: 600;">LARGE</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" size="lg" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" size="lg" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" size="lg" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
      </div>
    </div>
  `}),p=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-700</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-300</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-700</code></td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Context Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-disabled</code></td></tr>
          </table>
        </div>
      </div>
      
      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">💡 Nota</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          Todos os tokens têm fallbacks para garantir compatibilidade. Por exemplo:<br/>
          <code style="background: white; padding: 4px 8px; border-radius: 4px; margin-top: 8px; display: inline-block;">
            var(--semantic-color-primary-500, var(--primitives-color-blue-500, #0086cd))
          </code>
        </p>
      </div>
    </div>
  `});var g,h,y;e.parameters={...e.parameters,docs:{...(g=e.parameters)==null?void 0:g.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(y=(h=e.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var x,v,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(f=(v=i.parameters)==null?void 0:v.docs)==null?void 0:f.source}}};var u,m,b;n.parameters={...n.parameters,docs:{...(u=n.parameters)==null?void 0:u.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(b=(m=n.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};var L,w,B;o.parameters={...o.parameters,docs:{...(L=o.parameters)==null?void 0:L.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(B=(w=o.parameters)==null?void 0:w.docs)==null?void 0:B.source}}};var z,R,j;r.parameters={...r.parameters,docs:{...(z=r.parameters)==null?void 0:z.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(j=(R=r.parameters)==null?void 0:R.docs)==null?void 0:j.source}}};var S,T,E;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(E=(T=a.parameters)==null?void 0:T.docs)==null?void 0:E.source}}};var k,D,O;d.parameters={...d.parameters,docs:{...(k=d.parameters)==null?void 0:k.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(O=(D=d.parameters)==null?void 0:D.docs)==null?void 0:O.source}}};var I,U,A;l.parameters={...l.parameters,docs:{...(I=l.parameters)==null?void 0:I.docs,source:{originalSource:`args => ({
  components: {
    Button
  },
  setup() {
    return {
      args
    };
  },
  template: '<Button v-bind="args" />'
})`,...(A=(U=l.parameters)==null?void 0:U.docs)==null?void 0:A.source}}};var C,P,M;s.parameters={...s.parameters,docs:{...(C=s.parameters)==null?void 0:C.docs,source:{originalSource:`() => ({
  components: {
    Button
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 32px; font-size: 24px; font-weight: 600;">Button Variants & States</h2>
      
      <!-- Header -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 20px;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">DEFAULT</div>
        <div style="font-weight: 600; text-align: center;">HOVER</div>
        <div style="font-weight: 600; text-align: center;">DISABLED</div>
        <div style="font-weight: 600; text-align: center;">FOCUS</div>
      </div>

      <!-- SOLID -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">SOLID</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="background: var(--semantic-color-primary-600)" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="outline: 2px solid var(--semantic-color-primary-default); outline-offset: 2px;" />
        </div>
      </div>

      <!-- OUTLINE -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">OUTLINE</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="background: var(--context-color-surface-action-hover); border-color: var(--context-color-border-action-hover);" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="border-color: var(--context-color-border-focus); outline: 2px solid var(--context-color-surface-focus-light); outline-offset: 0;" />
        </div>
      </div>

      <!-- TEXT -->
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-bottom: 30px; align-items: center;">
        <div style="font-weight: 600;">TEXT</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="background: var(--context-color-surface-action-hover);" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" disabled />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" style="outline: 2px solid var(--context-color-surface-focus-light); outline-offset: 0;" />
        </div>
      </div>

      <!-- Sizes -->
      <h2 style="margin: 48px 0 32px; font-size: 24px; font-weight: 600;">Button Sizes</h2>
      
      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; align-items: center;">
        <div></div>
        <div style="font-weight: 600; text-align: center;">SOLID</div>
        <div style="font-weight: 600; text-align: center;">OUTLINE</div>
        <div style="font-weight: 600; text-align: center;">TEXT</div>
        <div></div>
      </div>

      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-top: 20px; align-items: center;">
        <div style="font-weight: 600;">SMALL</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" size="sm" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" size="sm" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" size="sm" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-top: 20px; align-items: center;">
        <div style="font-weight: 600;">MEDIUM</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" size="md" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" size="md" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" size="md" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 150px repeat(4, 1fr); gap: 20px; margin-top: 20px; align-items: center;">
        <div style="font-weight: 600;">LARGE</div>
        <div style="display: flex; justify-content: center;">
          <Button variant="solid" size="lg" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="outline" size="lg" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
        <div style="display: flex; justify-content: center;">
          <Button variant="text" size="lg" label="Label" iconLeft="ph-heart" iconRight="ph-arrow-right" />
        </div>
      </div>
    </div>
  \`
})`,...(M=(P=s.parameters)==null?void 0:P.docs)==null?void 0:M.source}}};var N,V,X;p.parameters={...p.parameters,docs:{...(N=p.parameters)==null?void 0:N.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px; font-size: 24px; font-weight: 600;">Design Tokens Utilizados</h2>
      
      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-600</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-primary-700</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--primitives-color-white</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-300</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-500</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--semantic-color-neutral-700</code></td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Typography</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--type-font-family-body</code></td><td style="text-align: right;">Poppins</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-sm</code></td><td style="text-align: right;">14px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-md</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-size-body-lg</code></td><td style="text-align: right;">18px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--type-font-weight-semibold</code></td><td style="text-align: right;">600</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Spacing</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--spacing-3xs</code></td><td style="text-align: right;">8px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-2xs</code></td><td style="text-align: right;">12px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-xs</code></td><td style="text-align: right;">16px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-sm</code></td><td style="text-align: right;">20px</td></tr>
            <tr><td style="padding: 8px 0;"><code>--spacing-md</code></td><td style="text-align: right;">24px</td></tr>
          </table>
        </div>
        
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Context Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-action-hover</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-focus-light</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-action</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-border-focus</code></td></tr>
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-disabled</code></td></tr>
          </table>
        </div>
      </div>
      
      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">💡 Nota</h3>
        <p style="color: #6b7280; line-height: 1.6;">
          Todos os tokens têm fallbacks para garantir compatibilidade. Por exemplo:<br/>
          <code style="background: white; padding: 4px 8px; border-radius: 4px; margin-top: 8px; display: inline-block;">
            var(--semantic-color-primary-500, var(--primitives-color-blue-500, #0086cd))
          </code>
        </p>
      </div>
    </div>
  \`
})`,...(X=(V=p.parameters)==null?void 0:V.docs)==null?void 0:X.source}}};const W=["Playground","Solid","Outline","Text","Small","Medium","Large","Disabled","AllVariantsAndStates","DesignTokens"];export{s as AllVariantsAndStates,p as DesignTokens,l as Disabled,d as Large,a as Medium,n as Outline,e as Playground,r as Small,i as Solid,o as Text,W as __namedExportsOrder,q as default};
