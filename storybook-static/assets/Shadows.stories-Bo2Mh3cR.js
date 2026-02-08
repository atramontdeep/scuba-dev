import{g as n,h as e}from"./vue.esm-bundler-BXouRCJi.js";import{t as r}from"./design-tokens-C1rNQ-sn.js";const h={title:"Design System/Tokens/Shadows",parameters:{layout:"fullscreen"}},f=({name:s,value:o})=>n("div",{style:{marginBottom:"24px",padding:"24px",background:"#f9fafb",borderRadius:"8px",fontFamily:"Poppins, sans-serif"}},[n("div",{style:{fontWeight:"600",fontSize:"14px",fontFamily:"monospace",marginBottom:"12px",color:"#111827"}},[s]),n("div",{style:{fontSize:"12px",color:"#6b7280",fontFamily:"monospace",marginBottom:"20px",padding:"12px",background:"#fff",borderRadius:"4px",overflow:"auto",border:"1px solid #e5e7eb"}},[o]),n("div",{style:{width:"200px",height:"100px",background:"white",borderRadius:"8px",boxShadow:o,display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280",fontSize:"14px",fontWeight:"500"}},[e("Shadow Preview")])]),a=()=>{const s=r.shadows||r.shadow||{},o=Object.keys(s).length>0;return n("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto",fontFamily:"Poppins, sans-serif"}},[n("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827",fontFamily:"Poppins, sans-serif"}},[e("Shadows")]),n("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px",fontFamily:"Poppins, sans-serif"}},[e("Sistema de sombras do Scuba Design System")]),!o&&n("div",{style:{padding:"40px",background:"#fef3c7",borderRadius:"8px",border:"1px solid #fbbf24",textAlign:"center"}},[n("div",{style:{fontSize:"18px",fontWeight:"600",color:"#92400e",marginBottom:"8px"}},[e("Nenhuma sombra configurada")]),n("div",{style:{fontSize:"14px",color:"#b45309"}},[e("Adicione tokens de sombra em src/tokens/tokens.json para visualizá-los aqui.")])]),o&&n("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(400px, 1fr))",gap:"20px"}},[Object.entries(s).map(([t,i])=>{const m=i.value||i;return n(f,{key:t,name:t,value:m},null)})])])};var d,p,l;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`() => {
  const shadows = tokens.shadows || tokens.shadow || {};
  const hasShadows = Object.keys(shadows).length > 0;
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
        Shadows
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px',
      fontFamily: 'Poppins, sans-serif'
    }}>
        Sistema de sombras do Scuba Design System
      </p>

      {!hasShadows && <div style={{
      padding: '40px',
      background: '#fef3c7',
      borderRadius: '8px',
      border: '1px solid #fbbf24',
      textAlign: 'center'
    }}>
          <div style={{
        fontSize: '18px',
        fontWeight: '600',
        color: '#92400e',
        marginBottom: '8px'
      }}>
            Nenhuma sombra configurada
          </div>
          <div style={{
        fontSize: '14px',
        color: '#b45309'
      }}>
            Adicione tokens de sombra em src/tokens/tokens.json para visualizá-los aqui.
          </div>
        </div>}

      {hasShadows && <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
      gap: '20px'
    }}>
          {Object.entries(shadows).map(([key, value]) => {
        const shadowValue = value.value || value;
        return <ShadowItem key={key} name={key} value={shadowValue} />;
      })}
        </div>}
    </div>;
}`,...(l=(p=a.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const g=["AllShadows"];export{a as AllShadows,g as __namedExportsOrder,h as default};
