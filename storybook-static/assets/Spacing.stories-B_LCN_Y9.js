import{c as e,a as i}from"./vue.esm-bundler-3CChPgpK.js";import{t as l}from"./design-tokens-Cmsm5939.js";const x={title:"Design System/Tokens/Spacing",parameters:{layout:"fullscreen"}},m=({name:o,value:n})=>{const t=parseInt(n);return e("div",{style:{marginBottom:"20px",padding:"16px",background:"#f9fafb",borderRadius:"8px"}},[e("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"}},[e("div",{style:{fontWeight:"600",fontSize:"14px",fontFamily:"monospace",minWidth:"120px"}},[o]),e("div",{style:{fontSize:"13px",color:"#6b7280",fontFamily:"monospace"}},[n])]),e("div",{style:{display:"flex",alignItems:"center",gap:"12px"}},[e("div",{style:{width:`${Math.min(t,200)}px`,height:"32px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:"4px",position:"relative",boxShadow:"0 2px 4px rgba(0,0,0,0.1)"}},[e("span",{style:{position:"absolute",right:"8px",top:"50%",transform:"translateY(-50%)",color:"white",fontSize:"12px",fontWeight:"600"}},[n])])])])},a=()=>{const o=l.spacing||{};return e("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto"}},[e("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827"}},[i("Spacing")]),e("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px"}},[i("Sistema de espaçamento do Scuba Design System")]),Object.entries(o).map(([n,t])=>{const c=t.value||t;return e(m,{key:n,name:n,value:c},null)})])};var s,p,r;a.parameters={...a.parameters,docs:{...(s=a.parameters)==null?void 0:s.docs,source:{originalSource:`() => {
  const spacing = tokens.spacing || {};
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
        Spacing
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px'
    }}>
        Sistema de espaçamento do Scuba Design System
      </p>
      
      {Object.entries(spacing).map(([key, value]) => {
      const spacingValue = value.value || value;
      return <SpacingItem key={key} name={key} value={spacingValue} />;
    })}
    </div>;
}`,...(r=(p=a.parameters)==null?void 0:p.docs)==null?void 0:r.source}}};const u=["AllSpacing"];export{a as AllSpacing,u as __namedExportsOrder,x as default};
