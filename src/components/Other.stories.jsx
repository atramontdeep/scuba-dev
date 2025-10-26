import tokens from '../tokens/design-tokens.js';

export default {
  title: 'Design System/Tokens/Other',
  parameters: {
    layout: 'fullscreen',
  },
};

const RadiusItem = ({ name, value }) => (
  <div style={{ 
    marginBottom: '20px',
    padding: '16px',
    background: '#f9fafb',
    borderRadius: '8px'
  }}>
    <div style={{ 
      display: 'flex', 
      alignItems: 'center',
      marginBottom: '12px'
    }}>
      <div style={{ 
        fontWeight: '600',
        fontSize: '14px',
        fontFamily: 'monospace',
        minWidth: '150px'
      }}>
        {name}
      </div>
      <div style={{ 
        fontSize: '13px',
        color: '#6b7280',
        fontFamily: 'monospace'
      }}>
        {value}
      </div>
    </div>
    
    <div style={{
      width: '120px',
      height: '80px',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      borderRadius: value,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }} />
  </div>
);

const ShadowItem = ({ name, value }) => (
  <div style={{ 
    marginBottom: '20px',
    padding: '16px',
    background: '#f9fafb',
    borderRadius: '8px'
  }}>
    <div style={{ 
      fontWeight: '600',
      fontSize: '14px',
      fontFamily: 'monospace',
      marginBottom: '8px'
    }}>
      {name}
    </div>
    <div style={{ 
      fontSize: '12px',
      color: '#6b7280',
      fontFamily: 'monospace',
      marginBottom: '16px',
      padding: '8px',
      background: '#fff',
      borderRadius: '4px',
      overflow: 'auto'
    }}>
      {value}
    </div>
    
    <div style={{
      width: '200px',
      height: '100px',
      background: 'white',
      borderRadius: '8px',
      boxShadow: value,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6b7280',
      fontSize: '14px'
    }}>
      Example
    </div>
  </div>
);

export const BorderRadius = () => {
  const borderRadius = tokens.borderRadius || tokens.radius || {};

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
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
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '16px' }}>
        {Object.entries(borderRadius).map(([key, value]) => {
          const radiusValue = value.value || value;
          return <RadiusItem key={key} name={key} value={radiusValue} />;
        })}
      </div>
    </div>
  );
};

export const Shadows = () => {
  const shadows = tokens.shadows || tokens.shadow || {};

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
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
      
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '16px' }}>
        {Object.entries(shadows).map(([key, value]) => {
          const shadowValue = value.value || value;
          return <ShadowItem key={key} name={key} value={shadowValue} />;
        })}
      </div>
    </div>
  );
};

export const AllTokens = () => {
  const allGroups = Object.keys(tokens);

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
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
          
          return (
            <div key={group} style={{
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
            </div>
          );
        })}
      </div>

      <div style={{ marginTop: '60px' }}>
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
          <div style={{ color: '#fbbf24' }}>.meu-componente {'{'}</div>
          <div style={{ paddingLeft: '20px' }}>
            <span style={{ color: '#a78bfa' }}>background</span>: <span style={{ color: '#34d399' }}>var(--color-primary-500)</span>;
          </div>
          <div style={{ paddingLeft: '20px' }}>
            <span style={{ color: '#a78bfa' }}>padding</span>: <span style={{ color: '#34d399' }}>var(--spacing-md)</span>;
          </div>
          <div style={{ paddingLeft: '20px' }}>
            <span style={{ color: '#a78bfa' }}>border-radius</span>: <span style={{ color: '#34d399' }}>var(--radius-base)</span>;
          </div>
          <div style={{ color: '#fbbf24' }}>{'}'}</div>
        </div>
      </div>
    </div>
  );
};
