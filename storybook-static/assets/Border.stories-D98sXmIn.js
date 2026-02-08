import{g as e,h as t}from"./vue.esm-bundler-BXouRCJi.js";import{t as g}from"./design-tokens-C1rNQ-sn.js";const v={title:"Design System/Tokens/Border",parameters:{layout:"fullscreen"}},c=({name:o,value:n})=>e("div",{style:{marginBottom:"20px",padding:"20px",background:"#f9fafb",borderRadius:"8px",fontFamily:"Poppins, sans-serif"}},[e("div",{style:{display:"flex",alignItems:"center",marginBottom:"16px",gap:"16px"}},[e("div",{style:{fontWeight:"600",fontSize:"14px",fontFamily:"monospace",minWidth:"150px",color:"#111827"}},[o]),e("div",{style:{fontSize:"13px",color:"#6b7280",fontFamily:"monospace",background:"#fff",padding:"4px 8px",borderRadius:"4px"}},[n,t("px")])]),e("div",{style:{width:"200px",height:"60px",background:"white",border:`${n}px solid #0086cd`,borderRadius:"4px",display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280",fontSize:"13px",fontWeight:"500"}},[t("Border Width")])]),y=({name:o,value:n})=>e("div",{style:{marginBottom:"20px",padding:"20px",background:"#f9fafb",borderRadius:"8px",fontFamily:"Poppins, sans-serif"}},[e("div",{style:{display:"flex",alignItems:"center",marginBottom:"16px",gap:"16px"}},[e("div",{style:{fontWeight:"600",fontSize:"14px",fontFamily:"monospace",minWidth:"150px",color:"#111827"}},[o]),e("div",{style:{fontSize:"13px",color:"#6b7280",fontFamily:"monospace",background:"#fff",padding:"4px 8px",borderRadius:"4px"}},[n,t("px")])]),e("div",{style:{width:"120px",height:"80px",background:"linear-gradient(135deg, #0086cd 0%, #0942a1 100%)",borderRadius:`${n}px`,boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}},null)]),a=()=>{var n;const o=((n=g.border)==null?void 0:n.width)||{};return e("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto",fontFamily:"Poppins, sans-serif"}},[e("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827",fontFamily:"Poppins, sans-serif"}},[t("Border Width")]),e("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px",fontFamily:"Poppins, sans-serif"}},[t("Espessuras de borda do Scuba Design System")]),e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))",gap:"16px"}},[Object.entries(o).map(([i,r])=>{const d=r.value||r;return e(c,{key:i,name:i,value:d},null)})])])},s=()=>{var n;const o=((n=g.border)==null?void 0:n.radius)||{};return e("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto",fontFamily:"Poppins, sans-serif"}},[e("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827",fontFamily:"Poppins, sans-serif"}},[t("Border Radius")]),e("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px",fontFamily:"Poppins, sans-serif"}},[t("Raios de borda do Scuba Design System")]),e("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))",gap:"16px"}},[Object.entries(o).map(([i,r])=>{const d=r.value||r;return e(y,{key:i,name:i,value:d},null)})])])};var p,l,m;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`() => {
  const borderWidth = tokens.border?.width || {};
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
        Border Width
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px',
      fontFamily: 'Poppins, sans-serif'
    }}>
        Espessuras de borda do Scuba Design System
      </p>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '16px'
    }}>
        {Object.entries(borderWidth).map(([key, value]) => {
        const widthValue = value.value || value;
        return <BorderWidthItem key={key} name={key} value={widthValue} />;
      })}
      </div>
    </div>;
}`,...(m=(l=a.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var u,x,f;s.parameters={...s.parameters,docs:{...(u=s.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const borderRadius = tokens.border?.radius || {};
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
        Border Radius
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px',
      fontFamily: 'Poppins, sans-serif'
    }}>
        Raios de borda do Scuba Design System
      </p>

      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
      gap: '16px'
    }}>
        {Object.entries(borderRadius).map(([key, value]) => {
        const radiusValue = value.value || value;
        return <BorderRadiusItem key={key} name={key} value={radiusValue} />;
      })}
      </div>
    </div>;
}`,...(f=(x=s.parameters)==null?void 0:x.docs)==null?void 0:f.source}}};const B=["BorderWidth","BorderRadius"];export{s as BorderRadius,a as BorderWidth,B as __namedExportsOrder,v as default};
