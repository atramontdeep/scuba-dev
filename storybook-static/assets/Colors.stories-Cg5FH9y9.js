import{g as o,h as l}from"./vue.esm-bundler-BXouRCJi.js";import{t as m}from"./design-tokens-C1rNQ-sn.js";const C={title:"Design System/Tokens/Colors",parameters:{layout:"fullscreen"}},g=({name:i,value:e,cssVar:r})=>o("div",{style:{display:"flex",flexDirection:"column",borderRadius:"8px",overflow:"hidden",boxShadow:"0 1px 3px rgba(0,0,0,0.1)",border:"1px solid #e5e7eb",background:"#ffffff",transition:"transform 0.2s, box-shadow 0.2s",cursor:"pointer",fontFamily:"Poppins, sans-serif"},onMouseEnter:n=>{n.currentTarget.style.transform="translateY(-2px)",n.currentTarget.style.boxShadow="0 4px 6px rgba(0,0,0,0.15)"},onMouseLeave:n=>{n.currentTarget.style.transform="translateY(0)",n.currentTarget.style.boxShadow="0 1px 3px rgba(0,0,0,0.1)"}},[o("div",{style:{width:"100%",height:"100px",background:e,border:e==="#ffffff"||e==="#fafafa"||e==="#f6f6f6"?"1px solid #e5e7eb":"none"}},null),o("div",{style:{padding:"16px"}},[o("div",{style:{fontWeight:"600",fontSize:"15px",marginBottom:"8px",color:"#111827",wordBreak:"break-word"}},[i]),o("div",{style:{fontSize:"13px",color:"#0086cd",fontFamily:"monospace",marginBottom:"6px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"0.5px"}},[e]),r&&o("div",{style:{fontSize:"11px",color:"#6b7280",fontFamily:"monospace",background:"#f9fafb",padding:"4px 6px",borderRadius:"4px",marginTop:"8px",wordBreak:"break-all"}},[r])])]),f=({title:i,colors:e,prefix:r=""})=>!e||Object.keys(e).length===0?null:o("div",{style:{marginBottom:"48px"}},[o("h2",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"20px",color:"#111827",fontFamily:"Poppins, sans-serif",paddingBottom:"12px",borderBottom:"2px solid #e5e7eb"}},[i]),o("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(220px, 1fr))",gap:"20px"}},[Object.entries(e).map(([n,a])=>{const p=a.value||a,t=r?`--${r}-${n}`:`--${n}`;return o(g,{key:n,name:n,value:p,cssVar:t},null)})])]),c=()=>{var n,a,p;const i=((n=m.primitives)==null?void 0:n.color)||{},e=((a=m.semantic)==null?void 0:a.color)||{},r=((p=m.context)==null?void 0:p.color)||{};return o("div",{style:{padding:"40px",maxWidth:"1400px",margin:"0 auto",fontFamily:"Poppins, sans-serif"}},[o("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827",fontFamily:"Poppins, sans-serif"}},[l("Colors")]),o("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"48px",fontFamily:"Poppins, sans-serif"}},[l("Paleta completa de cores do Scuba Design System")]),i&&Object.keys(i).length>0&&o("div",{style:{marginBottom:"56px"}},[o("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px",color:"#0086cd",fontFamily:"Poppins, sans-serif"}},[l("Primitive Colors")]),Object.entries(i).map(([t,s])=>typeof s=="object"&&!s.value?o(f,{key:t,title:t.charAt(0).toUpperCase()+t.slice(1),colors:s,prefix:`primitives-color-${t}`},null):o("div",{key:t,style:{marginBottom:"32px"}},[o("h3",{style:{fontSize:"20px",fontWeight:"600",marginBottom:"16px",color:"#111827",fontFamily:"Poppins, sans-serif"}},[t.charAt(0).toUpperCase()+t.slice(1)]),o("div",{style:{maxWidth:"240px"}},[o(g,{name:t,value:s.value||s,cssVar:`--primitives-color-${t}`},null)])]))]),e&&Object.keys(e).length>0&&o("div",{style:{marginBottom:"56px"}},[o("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px",color:"#0086cd",fontFamily:"Poppins, sans-serif"}},[l("Semantic Colors")]),Object.entries(e).map(([t,s])=>o(f,{key:t,title:t.charAt(0).toUpperCase()+t.slice(1),colors:s,prefix:`semantic-color-${t}`},null))]),r&&Object.keys(r).length>0&&o("div",{style:{marginBottom:"56px"}},[o("h2",{style:{fontSize:"28px",fontWeight:"700",marginBottom:"24px",color:"#0086cd",fontFamily:"Poppins, sans-serif"}},[l("Context Colors")]),Object.entries(r).map(([t,s])=>o(f,{key:t,title:t.charAt(0).toUpperCase()+t.slice(1),colors:s,prefix:`context-color-${t}`},null))])])};var x,d,y;c.parameters={...c.parameters,docs:{...(x=c.parameters)==null?void 0:x.docs,source:{originalSource:`() => {
  // Extrair todas as cores do objeto de tokens
  const primitiveColors = tokens.primitives?.color || {};
  const semanticColors = tokens.semantic?.color || {};
  const contextColors = tokens.context?.color || {};
  return <div style={{
    padding: '40px',
    maxWidth: '1400px',
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
        Colors
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '48px',
      fontFamily: 'Poppins, sans-serif'
    }}>
        Paleta completa de cores do Scuba Design System
      </p>

      {/* Cores Primitivas */}
      {primitiveColors && Object.keys(primitiveColors).length > 0 && <div style={{
      marginBottom: '56px'
    }}>
          <h2 style={{
        fontSize: '28px',
        fontWeight: '700',
        marginBottom: '24px',
        color: '#0086cd',
        fontFamily: 'Poppins, sans-serif'
      }}>
            Primitive Colors
          </h2>

          {Object.entries(primitiveColors).map(([colorName, colorValues]) => {
        if (typeof colorValues === 'object' && !colorValues.value) {
          return <ColorSection key={colorName} title={colorName.charAt(0).toUpperCase() + colorName.slice(1)} colors={colorValues} prefix={\`primitives-color-\${colorName}\`} />;
        } else {
          // Cor única (como "white")
          return <div key={colorName} style={{
            marginBottom: '32px'
          }}>
                  <h3 style={{
              fontSize: '20px',
              fontWeight: '600',
              marginBottom: '16px',
              color: '#111827',
              fontFamily: 'Poppins, sans-serif'
            }}>
                    {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
                  </h3>
                  <div style={{
              maxWidth: '240px'
            }}>
                    <ColorCard name={colorName} value={colorValues.value || colorValues} cssVar={\`--primitives-color-\${colorName}\`} />
                  </div>
                </div>;
        }
      })}
        </div>}

      {/* Cores Semânticas */}
      {semanticColors && Object.keys(semanticColors).length > 0 && <div style={{
      marginBottom: '56px'
    }}>
          <h2 style={{
        fontSize: '28px',
        fontWeight: '700',
        marginBottom: '24px',
        color: '#0086cd',
        fontFamily: 'Poppins, sans-serif'
      }}>
            Semantic Colors
          </h2>

          {Object.entries(semanticColors).map(([colorName, colorValues]) => <ColorSection key={colorName} title={colorName.charAt(0).toUpperCase() + colorName.slice(1)} colors={colorValues} prefix={\`semantic-color-\${colorName}\`} />)}
        </div>}

      {/* Cores Contextuais */}
      {contextColors && Object.keys(contextColors).length > 0 && <div style={{
      marginBottom: '56px'
    }}>
          <h2 style={{
        fontSize: '28px',
        fontWeight: '700',
        marginBottom: '24px',
        color: '#0086cd',
        fontFamily: 'Poppins, sans-serif'
      }}>
            Context Colors
          </h2>

          {Object.entries(contextColors).map(([contextName, contextValues]) => <ColorSection key={contextName} title={contextName.charAt(0).toUpperCase() + contextName.slice(1)} colors={contextValues} prefix={\`context-color-\${contextName}\`} />)}
        </div>}
    </div>;
}`,...(y=(d=c.parameters)==null?void 0:d.docs)==null?void 0:y.source}}};const v=["AllColors"];export{c as AllColors,v as __namedExportsOrder,C as default};
