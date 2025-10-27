import{c as n,a as o}from"./vue.esm-bundler-3CChPgpK.js";import{t as r}from"./design-tokens-Cmsm5939.js";const z={title:"Design System/Tokens/Other",parameters:{layout:"fullscreen"}},v=({name:t,value:e})=>n("div",{style:{marginBottom:"20px",padding:"16px",background:"#f9fafb",borderRadius:"8px"}},[n("div",{style:{display:"flex",alignItems:"center",marginBottom:"12px"}},[n("div",{style:{fontWeight:"600",fontSize:"14px",fontFamily:"monospace",minWidth:"150px"}},[t]),n("div",{style:{fontSize:"13px",color:"#6b7280",fontFamily:"monospace"}},[e])]),n("div",{style:{width:"120px",height:"80px",background:"linear-gradient(135deg, #667eea 0%, #764ba2 100%)",borderRadius:e,boxShadow:"0 2px 8px rgba(0,0,0,0.1)"}},null)]),h=({name:t,value:e})=>n("div",{style:{marginBottom:"20px",padding:"16px",background:"#f9fafb",borderRadius:"8px"}},[n("div",{style:{fontWeight:"600",fontSize:"14px",fontFamily:"monospace",marginBottom:"8px"}},[t]),n("div",{style:{fontSize:"12px",color:"#6b7280",fontFamily:"monospace",marginBottom:"16px",padding:"8px",background:"#fff",borderRadius:"4px",overflow:"auto"}},[e]),n("div",{style:{width:"200px",height:"100px",background:"white",borderRadius:"8px",boxShadow:e,display:"flex",alignItems:"center",justifyContent:"center",color:"#6b7280",fontSize:"14px"}},[o("Example")])]),i=()=>{const t=r.borderRadius||r.radius||{};return n("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto"}},[n("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827"}},[o("Border Radius")]),n("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px"}},[o("Raios de borda do Scuba Design System")]),n("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(350px, 1fr))",gap:"16px"}},[Object.entries(t).map(([e,a])=>{const s=a.value||a;return n(v,{key:e,name:e,value:s},null)})])])},d=()=>{const t=r.shadows||r.shadow||{};return n("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto"}},[n("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827"}},[o("Shadows")]),n("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px"}},[o("Sombras do Scuba Design System")]),n("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(400px, 1fr))",gap:"16px"}},[Object.entries(t).map(([e,a])=>{const s=a.value||a;return n(h,{key:e,name:e,value:s},null)})])])},p=()=>{const t=Object.keys(r);return n("div",{style:{padding:"40px",maxWidth:"1200px",margin:"0 auto"}},[n("h1",{style:{fontSize:"32px",fontWeight:"700",marginBottom:"8px",color:"#111827"}},[o("All Design Tokens")]),n("p",{style:{fontSize:"16px",color:"#6b7280",marginBottom:"40px"}},[o("Visão geral de todos os tokens do Scuba Design System")]),n("div",{style:{display:"grid",gridTemplateColumns:"repeat(auto-fill, minmax(250px, 1fr))",gap:"16px"}},[t.map(e=>{const a=r[e],s=typeof a=="object"?Object.keys(a).length:1;return n("div",{key:e,style:{padding:"20px",background:"#f9fafb",borderRadius:"8px",border:"1px solid #e5e7eb"}},[n("div",{style:{fontSize:"18px",fontWeight:"600",marginBottom:"8px",color:"#111827",textTransform:"capitalize"}},[e]),n("div",{style:{fontSize:"13px",color:"#6b7280"}},[s,o(" "),s===1?"token":"tokens"])])})]),n("div",{style:{marginTop:"60px"}},[n("h2",{style:{fontSize:"24px",fontWeight:"600",marginBottom:"20px",color:"#111827"}},[o("Como usar")]),n("div",{style:{padding:"24px",background:"#1f2937",borderRadius:"8px",color:"#e5e7eb",fontFamily:"monospace",fontSize:"14px",overflowX:"auto"}},[n("div",null,["/* No CSS */"]),n("div",{style:{color:"#fbbf24"}},[o(".meu-componente "),"{"]),n("div",{style:{paddingLeft:"20px"}},[n("span",{style:{color:"#a78bfa"}},[o("background")]),o(": "),n("span",{style:{color:"#34d399"}},[o("var(--color-primary-500)")]),o(";")]),n("div",{style:{paddingLeft:"20px"}},[n("span",{style:{color:"#a78bfa"}},[o("padding")]),o(": "),n("span",{style:{color:"#34d399"}},[o("var(--spacing-md)")]),o(";")]),n("div",{style:{paddingLeft:"20px"}},[n("span",{style:{color:"#a78bfa"}},[o("border-radius")]),o(": "),n("span",{style:{color:"#34d399"}},[o("var(--radius-base)")]),o(";")]),n("div",{style:{color:"#fbbf24"}},["}"])])])])};var l,m,c;i.parameters={...i.parameters,docs:{...(l=i.parameters)==null?void 0:l.docs,source:{originalSource:`() => {
  const borderRadius = tokens.borderRadius || tokens.radius || {};
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
        Border Radius
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px'
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
        return <RadiusItem key={key} name={key} value={radiusValue} />;
      })}
      </div>
    </div>;
}`,...(c=(m=i.parameters)==null?void 0:m.docs)==null?void 0:c.source}}};var u,x,g;d.parameters={...d.parameters,docs:{...(u=d.parameters)==null?void 0:u.docs,source:{originalSource:`() => {
  const shadows = tokens.shadows || tokens.shadow || {};
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
        Shadows
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px'
    }}>
        Sombras do Scuba Design System
      </p>
      
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))',
      gap: '16px'
    }}>
        {Object.entries(shadows).map(([key, value]) => {
        const shadowValue = value.value || value;
        return <ShadowItem key={key} name={key} value={shadowValue} />;
      })}
      </div>
    </div>;
}`,...(g=(x=d.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};var y,f,b;p.parameters={...p.parameters,docs:{...(y=p.parameters)==null?void 0:y.docs,source:{originalSource:`() => {
  const allGroups = Object.keys(tokens);
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
        All Design Tokens
      </h1>
      <p style={{
      fontSize: '16px',
      color: '#6b7280',
      marginBottom: '40px'
    }}>
        Visão geral de todos os tokens do Scuba Design System
      </p>
      
      <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
      gap: '16px'
    }}>
        {allGroups.map(group => {
        const groupTokens = tokens[group];
        const count = typeof groupTokens === 'object' ? Object.keys(groupTokens).length : 1;
        return <div key={group} style={{
          padding: '20px',
          background: '#f9fafb',
          borderRadius: '8px',
          border: '1px solid #e5e7eb'
        }}>
              <div style={{
            fontSize: '18px',
            fontWeight: '600',
            marginBottom: '8px',
            color: '#111827',
            textTransform: 'capitalize'
          }}>
                {group}
              </div>
              <div style={{
            fontSize: '13px',
            color: '#6b7280'
          }}>
                {count} {count === 1 ? 'token' : 'tokens'}
              </div>
            </div>;
      })}
      </div>

      <div style={{
      marginTop: '60px'
    }}>
        <h2 style={{
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '20px',
        color: '#111827'
      }}>
          Como usar
        </h2>
        
        <div style={{
        padding: '24px',
        background: '#1f2937',
        borderRadius: '8px',
        color: '#e5e7eb',
        fontFamily: 'monospace',
        fontSize: '14px',
        overflowX: 'auto'
      }}>
          <div>{'/* No CSS */'}</div>
          <div style={{
          color: '#fbbf24'
        }}>.meu-componente {'{'}</div>
          <div style={{
          paddingLeft: '20px'
        }}>
            <span style={{
            color: '#a78bfa'
          }}>background</span>: <span style={{
            color: '#34d399'
          }}>var(--color-primary-500)</span>;
          </div>
          <div style={{
          paddingLeft: '20px'
        }}>
            <span style={{
            color: '#a78bfa'
          }}>padding</span>: <span style={{
            color: '#34d399'
          }}>var(--spacing-md)</span>;
          </div>
          <div style={{
          paddingLeft: '20px'
        }}>
            <span style={{
            color: '#a78bfa'
          }}>border-radius</span>: <span style={{
            color: '#34d399'
          }}>var(--radius-base)</span>;
          </div>
          <div style={{
          color: '#fbbf24'
        }}>{'}'}</div>
        </div>
      </div>
    </div>;
}`,...(b=(f=p.parameters)==null?void 0:f.docs)==null?void 0:b.source}}};const B=["BorderRadius","Shadows","AllTokens"];export{p as AllTokens,i as BorderRadius,d as Shadows,B as __namedExportsOrder,z as default};
