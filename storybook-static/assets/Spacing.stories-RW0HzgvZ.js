import{g as n,h as s}from"./vue.esm-bundler-cjlVRrb_.js";import{t as d}from"./design-tokens-C1rNQ-sn.js";const f={title:"Design System/Tokens/Spacing",parameters:{layout:"fullscreen"}},m=({name:i,value:e})=>{const t=parseInt(e);return n("div",{style:{marginBottom:"20px",padding:"20px",background:"#f9fafb",borderRadius:"8px",fontFamily:"Poppins, sans-serif"}},[n("div",{style:{display:"flex",alignItems:"center",marginBottom:"16px",gap:"16px"}},[n("div",{style:{fontWeight:"600",fontSize:"14px",fontFamily:"monospace",minWidth:"120px",color:"#111827"}},[i]),n("div",{style:{fontSize:"13px",color:"#6b7280",fontFamily:"monospace",background:"#fff",padding:"4px 8px",borderRadius:"4px"}},[e])]),n("div",{style:{display:"flex",alignItems:"center",gap:"12px"}},[n("div",{style:{width:`${Math.min(t,200)}px`,height:"40px",background:"linear-gradient(135deg, #0086cd 0%, #0942a1 100%)",borderRadius:"4px",position:"relative",boxShadow:"0 2px 4px rgba(0,0,0,0.1)",display:"flex",alignItems:"center",justifyContent:"flex-end",padding:"0 12px"}},[n("span",{style:{color:"white",fontSize:"12px",fontWeight:"600",fontFamily:"Poppins, sans-serif"}},[e])]),t>200&&n("span",{style:{fontSize:"12px",color:"#6b7280",fontStyle:"italic"}},[s("(preview truncated)")])])])},a=()=>{const i=d.spacing||{};return n("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto",fontFamily:"Poppins, sans-serif"}},[n("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827",fontFamily:"Poppins, sans-serif"}},[s("Spacing")]),n("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px",fontFamily:"Poppins, sans-serif"}},[s("Sistema de espaçamento do Scuba Design System")]),n("div",{style:{display:"grid",gridTemplateColumns:"1fr",gap:"0"}},[Object.entries(i).map(([e,t])=>{const l=t.value||t;return n(m,{key:e,name:e,value:l},null)})])])};var o,p,r;a.parameters={...a.parameters,docs:{...(o=a.parameters)==null?void 0:o.docs,source:{originalSource:`() => {
  const spacing = tokens.spacing || {};
  return <div style={{
    padding: '40px',
    maxWidth: '1200px',
    margin: '0 auto',
    fontFamily: 'Poppins, sans-serif'
  }}>
      <h1 style={{
      fontSize: '32px',
      fontWeight: '700',
      marginBottom: '8px',
      color: '#111827',
      fontFamily: 'Poppins, sans-serif'
    }}>
        Spacing
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px',
      fontFamily: 'Poppins, sans-serif'
    }}>
        Sistema de espaçamento do Scuba Design System
      </p>

      <div style={{
      display: 'grid',
      gridTemplateColumns: '1fr',
      gap: '0'
    }}>
        {Object.entries(spacing).map(([key, value]) => {
        const spacingValue = value.value || value;
        return <SpacingItem key={key} name={key} value={spacingValue} />;
      })}
      </div>
    </div>;
}`,...(r=(p=a.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};const x=["AllSpacing"];export{a as AllSpacing,x as __namedExportsOrder,f as default};
