import{c as o,a as l}from"./vue.esm-bundler-3CChPgpK.js";import{t as a}from"./design-tokens-Cmsm5939.js";const f={title:"Design System/Tokens/Colors",parameters:{layout:"fullscreen"}},d=({name:e,value:n})=>o("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px",padding:"8px",borderRadius:"4px",background:"#f9fafb"}},[o("div",{style:{width:"80px",height:"40px",background:n,borderRadius:"4px",border:"1px solid #e5e7eb",marginRight:"16px",boxShadow:"0 1px 2px rgba(0,0,0,0.05)"}},null),o("div",null,[o("div",{style:{fontWeight:"600",fontSize:"14px",marginBottom:"4px",fontFamily:"monospace"}},[e]),o("div",{style:{fontSize:"13px",color:"#6b7280",fontFamily:"monospace"}},[n])])]),x=({title:e,colors:n})=>o("div",{style:{marginBottom:"32px"}},[o("h3",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"16px",color:"#111827"}},[e]),o("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(300px, 1fr))",gap:"8px"}},[Object.entries(n).map(([r,t])=>{const m=t.value||t;return o(d,{key:r,name:r,value:m},null)})])]),s=()=>{const e={},n=a.colors||a.color||{};return Object.entries(n).forEach(([r,t])=>{typeof t=="object"&&!t.value?e[r]=t:(e.Other||(e.Other={}),e.Other[r]=t)}),o("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto"}},[o("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827"}},[l("Colors")]),o("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px"}},[l("Paleta de cores do Scuba Design System")]),Object.entries(e).map(([r,t])=>o(x,{key:r,title:r.charAt(0).toUpperCase()+r.slice(1),colors:t},null))])};var i,p,c;s.parameters={...s.parameters,docs:{...(i=s.parameters)==null?void 0:i.docs,source:{originalSource:`() => {
  const colorGroups = {};

  // Organizar cores em grupos
  const colors = tokens.colors || tokens.color || {};
  Object.entries(colors).forEach(([key, value]) => {
    if (typeof value === 'object' && !value.value) {
      // É um grupo (ex: primary.50, primary.100)
      colorGroups[key] = value;
    } else {
      // É uma cor única
      if (!colorGroups['Other']) colorGroups['Other'] = {};
      colorGroups['Other'][key] = value;
    }
  });
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
        Colors
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px'
    }}>
        Paleta de cores do Scuba Design System
      </p>
      
      {Object.entries(colorGroups).map(([groupName, colors]) => <ColorScale key={groupName} title={groupName.charAt(0).toUpperCase() + groupName.slice(1)} colors={colors} />)}
    </div>;
}`,...(c=(p=s.parameters)==null?void 0:p.docs)==null?void 0:c.source}}};const y=["AllColors"];export{s as AllColors,y as __namedExportsOrder,f as default};
