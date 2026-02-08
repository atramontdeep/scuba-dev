import{g as n,h as i}from"./vue.esm-bundler-BXouRCJi.js";import{t as l}from"./design-tokens-C1rNQ-sn.js";const H={title:"Design System/Tokens/Typography",parameters:{layout:"fullscreen"}},F=({label:a,value:t,type:o="fontSize"})=>{const e=o==="fontSize"?{fontSize:t.value||t}:o==="fontWeight"?{fontWeight:t.value||t}:o==="lineHeight"?{lineHeight:t.value||t}:{};return n("div",{style:{marginBottom:"24px",padding:"20px",background:"#f9fafb",borderRadius:"8px"}},[n("div",{style:{fontWeight:"600",fontSize:"14px",fontFamily:"monospace",marginBottom:"8px",color:"#6b7280"}},[a,n("span",{style:{marginLeft:"12px",color:"#9ca3af"}},[t.value||t])]),n("div",{style:{...e,color:"#111827",marginTop:"12px"}},[i("The quick brown fox jumps over the lazy dog")])])},W=({name:a,value:t})=>n("div",{style:{marginBottom:"24px",padding:"20px",background:"#f9fafb",borderRadius:"8px"}},[n("div",{style:{fontWeight:"600",fontSize:"14px",fontFamily:"monospace",marginBottom:"12px",color:"#111827"}},[a]),n("div",{style:{fontSize:"13px",color:"#6b7280",fontFamily:"monospace",marginBottom:"16px",padding:"8px",background:"#fff",borderRadius:"4px"}},[t.value||t]),n("div",{style:{fontFamily:t.value||t,fontSize:"18px",color:"#111827"}},[i("The quick brown fox jumps over the lazy dog")])]),r=()=>{const t=(l.typography||{}).fontSize||{};return n("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto"}},[n("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827"}},[i("Font Sizes")]),n("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px"}},[i("Escala tipográfica do Scuba Design System")]),Object.entries(t).map(([o,e])=>n(F,{key:o,label:o,value:e,type:"fontSize"},null))])},s=()=>{const t=(l.typography||{}).fontWeight||{};return n("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto"}},[n("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827"}},[i("Font Weights")]),n("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px"}},[i("Pesos de fonte do Scuba Design System")]),Object.entries(t).map(([o,e])=>n(F,{key:o,label:o,value:e,type:"fontWeight"},null))])},p=()=>{const t=(l.typography||{}).fontFamily||{};return n("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto"}},[n("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827"}},[i("Font Families")]),n("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px"}},[i("Famílias tipográficas do Scuba Design System")]),Object.entries(t).map(([o,e])=>n(W,{key:o,name:o,value:e},null))])},m=()=>{const t=(l.typography||{}).lineHeight||{};return n("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto"}},[n("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827"}},[i("Line Heights")]),n("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px"}},[i("Alturas de linha do Scuba Design System")]),Object.entries(t).map(([o,e])=>n("div",{key:o,style:{marginBottom:"32px",padding:"20px",background:"#f9fafb",borderRadius:"8px"}},[n("div",{style:{fontWeight:"600",fontSize:"14px",fontFamily:"monospace",marginBottom:"12px",color:"#111827"}},[o,n("span",{style:{marginLeft:"12px",color:"#9ca3af"}},[e.value||e])]),n("div",{style:{lineHeight:e.value||e,fontSize:"16px",color:"#374151"}},[i("Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.")])]))])};var g,y,c;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`() => {
  const typography = tokens.typography || {};
  const fontSizes = typography.fontSize || {};
  return <div style={{
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
      <h1 style={{
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#111827'
    }}>
        Font Sizes
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px'
    }}>
        Escala tipográfica do Scuba Design System
      </p>
      
      {Object.entries(fontSizes).map(([key, value]) => <Typespecimen key={key} label={key} value={value} type="fontSize" />)}
    </div>;
}`,...(c=(y=r.parameters)==null?void 0:y.docs)==null?void 0:c.source}}};var d,x,f;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const typography = tokens.typography || {};
  const fontWeights = typography.fontWeight || {};
  return <div style={{
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
      <h1 style={{
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#111827'
    }}>
        Font Weights
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px'
    }}>
        Pesos de fonte do Scuba Design System
      </p>
      
      {Object.entries(fontWeights).map(([key, value]) => <Typespecimen key={key} label={key} value={value} type="fontWeight" />)}
    </div>;
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};var h,u,S;p.parameters={...p.parameters,docs:{...(h=p.parameters)==null?void 0:h.docs,source:{originalSource:`() => {
  const typography = tokens.typography || {};
  const fontFamilies = typography.fontFamily || {};
  return <div style={{
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
      <h1 style={{
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#111827'
    }}>
        Font Families
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px'
    }}>
        Famílias tipográficas do Scuba Design System
      </p>
      
      {Object.entries(fontFamilies).map(([key, value]) => <FontFamilyItem key={key} name={key} value={value} />)}
    </div>;
}`,...(S=(u=p.parameters)==null?void 0:u.docs)==null?void 0:S.source}}};var b,v,z;m.parameters={...m.parameters,docs:{...(b=m.parameters)==null?void 0:b.docs,source:{originalSource:`() => {
  const typography = tokens.typography || {};
  const lineHeights = typography.lineHeight || {};
  return <div style={{
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto'
  }}>
      <h1 style={{
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#111827'
    }}>
        Line Heights
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px'
    }}>
        Alturas de linha do Scuba Design System
      </p>
      
      {Object.entries(lineHeights).map(([key, value]) => <div key={key} style={{
      marginBottom: '32px',
      padding: '20px',
      background: '#f9fafb',
      borderRadius: '8px'
    }}>
          <div style={{
        fontWeight: '600',
        fontSize: '14px',
        fontFamily: 'monospace',
        marginBottom: '12px',
        color: '#111827'
      }}>
            {key}
            <span style={{
          marginLeft: '12px',
          color: '#9ca3af'
        }}>
              {value.value || value}
            </span>
          </div>
          <div style={{
        lineHeight: value.value || value,
        fontSize: '16px',
        color: '#374151'
      }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </div>
        </div>)}
    </div>;
}`,...(z=(v=m.parameters)==null?void 0:v.docs)==null?void 0:z.source}}};const D=["FontSizes","FontWeights","FontFamilies","LineHeights"];export{p as FontFamilies,r as FontSizes,s as FontWeights,m as LineHeights,D as __namedExportsOrder,H as default};
