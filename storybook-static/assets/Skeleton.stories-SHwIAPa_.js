import{c,a as g,b as G,y as H,p as J,o as h}from"./vue.esm-bundler-cjlVRrb_.js";import{_ as K}from"./_plugin-vue_export-helper-DlAUqK2U.js";const Q={key:0,class:"scuba-skeleton__shimmer"},W={__name:"Skeleton",props:{variant:{type:String,default:"text",validator:i=>["text","circular","rectangular","rounded"].includes(i)},width:{type:[String,Number],default:null},height:{type:[String,Number],default:null},noAnimation:{type:Boolean,default:!1}},setup(i){const e=i,j=c(()=>{const n=["scuba-skeleton"];return n.push(`scuba-skeleton--${e.variant}`),e.noAnimation&&n.push("scuba-skeleton--no-animation"),n}),q=c(()=>{const n={};return e.width&&(n.width=typeof e.width=="number"?`${e.width}px`:e.width),e.height&&(n.height=typeof e.height=="number"?`${e.height}px`:e.height),n});return(n,Y)=>(h(),g("div",{class:J(j.value),style:H(q.value)},[i.noAnimation?G("",!0):(h(),g("span",Q))],6))}},t=K(W,[["__scopeId","data-v-7d87cf89"]]),te={title:"Scuba/Skeleton",component:t,tags:["autodocs"],argTypes:{variant:{control:"select",options:["text","circular","rectangular","rounded"],description:"Variante do skeleton"},width:{control:"text",description:"Largura (px, %, rem, etc)"},height:{control:"text",description:"Altura (px, %, rem, etc)"},noAnimation:{control:"boolean",description:"Desabilitar animação"}}},X=i=>({components:{Skeleton:t},setup(){return{args:i}},template:'<Skeleton v-bind="args" />'}),o=X.bind({});o.args={variant:"text",width:"100%",height:null,noAnimation:!1};const a=()=>({components:{Skeleton:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 600px;">
      <Skeleton width="100%" />
      <Skeleton width="80%" style="margin-top: 8px;" />
      <Skeleton width="90%" style="margin-top: 8px;" />
      <Skeleton width="60%" style="margin-top: 8px;" />
    </div>
  `}),r=()=>({components:{Skeleton:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; display: flex; gap: 16px; align-items: center;">
      <Skeleton variant="circular" width="32px" height="32px" />
      <Skeleton variant="circular" width="40px" height="40px" />
      <Skeleton variant="circular" width="48px" height="48px" />
      <Skeleton variant="circular" width="64px" height="64px" />
    </div>
  `}),d=()=>({components:{Skeleton:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3>Rectangular</h3>
      <Skeleton variant="rectangular" width="100%" height="200px" />

      <h3 style="margin-top: 32px;">Rounded</h3>
      <Skeleton variant="rounded" width="100%" height="200px" />
    </div>
  `}),s=()=>({components:{Skeleton:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="max-width: 400px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
        <Skeleton variant="rounded" width="100%" height="200px" />
        <div style="margin-top: 16px;">
          <Skeleton width="60%" />
          <Skeleton width="100%" style="margin-top: 8px;" />
          <Skeleton width="80%" style="margin-top: 8px;" />
        </div>
        <div style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div style="flex: 1;">
            <Skeleton width="40%" />
            <Skeleton width="60%" style="margin-top: 4px;" />
          </div>
        </div>
      </div>
    </div>
  `}),l=()=>({components:{Skeleton:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 600px;">
      <div v-for="i in 5" :key="i" style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
        <Skeleton variant="circular" width="48px" height="48px" />
        <div style="flex: 1;">
          <Skeleton width="40%" />
          <Skeleton width="80%" style="margin-top: 4px;" />
        </div>
        <Skeleton variant="rounded" width="80px" height="32px" />
      </div>
    </div>
  `}),p=()=>({components:{Skeleton:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">
              <Skeleton width="60%" />
            </th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">
              <Skeleton width="70%" />
            </th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">
              <Skeleton width="50%" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
              <Skeleton width="80%" />
            </td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
              <Skeleton width="60%" />
            </td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
              <Skeleton width="40%" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  `}),m=()=>({components:{Skeleton:t},template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 600px;">
      <h3>Com animação (padrão)</h3>
      <Skeleton width="100%" />
      <Skeleton width="80%" style="margin-top: 8px;" />

      <h3 style="margin-top: 32px;">Sem animação</h3>
      <Skeleton width="100%" no-animation />
      <Skeleton width="80%" style="margin-top: 8px;" no-animation />
    </div>
  `}),x=()=>({template:`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Background</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border Radius</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">Text variant</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-md</code></td><td style="text-align: right;">Rounded variant</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Text:</strong> Loading de texto, parágrafos, títulos</li>
          <li><strong>Circular:</strong> Avatares, ícones circulares</li>
          <li><strong>Rectangular:</strong> Imagens, cards sem border-radius</li>
          <li><strong>Rounded:</strong> Imagens, cards, thumbnails</li>
          <li>Use skeleton loaders para melhorar a percepção de performance</li>
          <li>Combine diferentes variantes para criar layouts complexos</li>
          <li>Mantenha as proporções próximas ao conteúdo real</li>
          <li>Use no-animation em contextos onde a animação pode ser distrativa</li>
        </ul>
      </div>
    </div>
  `});var y,u,f;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`args => ({
  components: {
    Skeleton
  },
  setup() {
    return {
      args
    };
  },
  template: '<Skeleton v-bind="args" />'
})`,...(f=(u=o.parameters)==null?void 0:u.docs)==null?void 0:f.source}}};var v,b,k;a.parameters={...a.parameters,docs:{...(v=a.parameters)==null?void 0:v.docs,source:{originalSource:`() => ({
  components: {
    Skeleton
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 600px;">
      <Skeleton width="100%" />
      <Skeleton width="80%" style="margin-top: 8px;" />
      <Skeleton width="90%" style="margin-top: 8px;" />
      <Skeleton width="60%" style="margin-top: 8px;" />
    </div>
  \`
})`,...(k=(b=a.parameters)==null?void 0:b.docs)==null?void 0:k.source}}};var S,w,P;r.parameters={...r.parameters,docs:{...(S=r.parameters)==null?void 0:S.docs,source:{originalSource:`() => ({
  components: {
    Skeleton
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; display: flex; gap: 16px; align-items: center;">
      <Skeleton variant="circular" width="32px" height="32px" />
      <Skeleton variant="circular" width="40px" height="40px" />
      <Skeleton variant="circular" width="48px" height="48px" />
      <Skeleton variant="circular" width="64px" height="64px" />
    </div>
  \`
})`,...(P=(w=r.parameters)==null?void 0:w.docs)==null?void 0:P.source}}};var _,C,E;d.parameters={...d.parameters,docs:{...(_=d.parameters)==null?void 0:_.docs,source:{originalSource:`() => ({
  components: {
    Skeleton
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h3>Rectangular</h3>
      <Skeleton variant="rectangular" width="100%" height="200px" />

      <h3 style="margin-top: 32px;">Rounded</h3>
      <Skeleton variant="rounded" width="100%" height="200px" />
    </div>
  \`
})`,...(E=(C=d.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var z,R,T;s.parameters={...s.parameters,docs:{...(z=s.parameters)==null?void 0:z.docs,source:{originalSource:`() => ({
  components: {
    Skeleton
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <div style="max-width: 400px; border: 1px solid #e5e7eb; border-radius: 8px; padding: 16px;">
        <Skeleton variant="rounded" width="100%" height="200px" />
        <div style="margin-top: 16px;">
          <Skeleton width="60%" />
          <Skeleton width="100%" style="margin-top: 8px;" />
          <Skeleton width="80%" style="margin-top: 8px;" />
        </div>
        <div style="margin-top: 16px; display: flex; gap: 12px; align-items: center;">
          <Skeleton variant="circular" width="40px" height="40px" />
          <div style="flex: 1;">
            <Skeleton width="40%" />
            <Skeleton width="60%" style="margin-top: 4px;" />
          </div>
        </div>
      </div>
    </div>
  \`
})`,...(T=(R=s.parameters)==null?void 0:R.docs)==null?void 0:T.source}}};var A,L,U;l.parameters={...l.parameters,docs:{...(A=l.parameters)==null?void 0:A.docs,source:{originalSource:`() => ({
  components: {
    Skeleton
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 600px;">
      <div v-for="i in 5" :key="i" style="display: flex; gap: 16px; align-items: center; margin-bottom: 16px;">
        <Skeleton variant="circular" width="48px" height="48px" />
        <div style="flex: 1;">
          <Skeleton width="40%" />
          <Skeleton width="80%" style="margin-top: 4px;" />
        </div>
        <Skeleton variant="rounded" width="80px" height="32px" />
      </div>
    </div>
  \`
})`,...(U=(L=l.parameters)==null?void 0:L.docs)==null?void 0:U.source}}};var B,D,I;p.parameters={...p.parameters,docs:{...(B=p.parameters)==null?void 0:B.docs,source:{originalSource:`() => ({
  components: {
    Skeleton
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <table style="width: 100%; border-collapse: collapse;">
        <thead>
          <tr>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">
              <Skeleton width="60%" />
            </th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">
              <Skeleton width="70%" />
            </th>
            <th style="padding: 12px; text-align: left; border-bottom: 2px solid #e5e7eb;">
              <Skeleton width="50%" />
            </th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="i in 5" :key="i">
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
              <Skeleton width="80%" />
            </td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
              <Skeleton width="60%" />
            </td>
            <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">
              <Skeleton width="40%" />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  \`
})`,...(I=(D=p.parameters)==null?void 0:D.docs)==null?void 0:I.source}}};var N,F,$;m.parameters={...m.parameters,docs:{...(N=m.parameters)==null?void 0:N.docs,source:{originalSource:`() => ({
  components: {
    Skeleton
  },
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif; max-width: 600px;">
      <h3>Com animação (padrão)</h3>
      <Skeleton width="100%" />
      <Skeleton width="80%" style="margin-top: 8px;" />

      <h3 style="margin-top: 32px;">Sem animação</h3>
      <Skeleton width="100%" no-animation />
      <Skeleton width="80%" style="margin-top: 8px;" no-animation />
    </div>
  \`
})`,...($=(F=m.parameters)==null?void 0:F.docs)==null?void 0:$.source}}};var M,V,O;x.parameters={...x.parameters,docs:{...(M=x.parameters)==null?void 0:M.docs,source:{originalSource:`() => ({
  template: \`
    <div style="padding: 40px; font-family: Poppins, sans-serif;">
      <h2 style="margin-bottom: 24px;">Design Tokens Utilizados</h2>

      <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Colors</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--context-color-surface-secondary</code></td><td style="text-align: right;">Background</td></tr>
          </table>
        </div>

        <div>
          <h3 style="font-size: 18px; font-weight: 600; margin-bottom: 16px;">Border Radius</h3>
          <table style="width: 100%; font-size: 14px;">
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-sm</code></td><td style="text-align: right;">Text variant</td></tr>
            <tr><td style="padding: 8px 0;"><code>--border-radius-rounded-md</code></td><td style="text-align: right;">Rounded variant</td></tr>
          </table>
        </div>
      </div>

      <div style="margin-top: 40px; padding: 20px; background: #f9fafb; border-radius: 8px;">
        <h3 style="font-size: 16px; font-weight: 600; margin-bottom: 12px;">Uso Recomendado</h3>
        <ul style="color: #6b7280; line-height: 1.8; padding-left: 20px;">
          <li><strong>Text:</strong> Loading de texto, parágrafos, títulos</li>
          <li><strong>Circular:</strong> Avatares, ícones circulares</li>
          <li><strong>Rectangular:</strong> Imagens, cards sem border-radius</li>
          <li><strong>Rounded:</strong> Imagens, cards, thumbnails</li>
          <li>Use skeleton loaders para melhorar a percepção de performance</li>
          <li>Combine diferentes variantes para criar layouts complexos</li>
          <li>Mantenha as proporções próximas ao conteúdo real</li>
          <li>Use no-animation em contextos onde a animação pode ser distrativa</li>
        </ul>
      </div>
    </div>
  \`
})`,...(O=(V=x.parameters)==null?void 0:V.docs)==null?void 0:O.source}}};const ne=["Playground","Text","Circular","Shapes","CardLoading","ListLoading","TableLoading","NoAnimation","DesignTokens"];export{s as CardLoading,r as Circular,x as DesignTokens,l as ListLoading,m as NoAnimation,o as Playground,d as Shapes,p as TableLoading,a as Text,ne as __namedExportsOrder,te as default};
