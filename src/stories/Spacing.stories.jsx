import tokens from '../tokens/design-tokens.js';

export default {
  title: 'Design System/Tokens/Spacing',
  parameters: {
    layout: 'fullscreen',
  },
};

const SpacingItem = ({ name, value }) => {
  const numValue = parseInt(value);
  
  return (
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
          minWidth: '120px'
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
      
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: `${Math.min(numValue, 200)}px`,
          height: '32px',
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          borderRadius: '4px',
          position: 'relative',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
          <span style={{
            position: 'absolute',
            right: '8px',
            top: '50%',
            transform: 'translateY(-50%)',
            color: 'white',
            fontSize: '12px',
            fontWeight: '600'
          }}>
            {value}
          </span>
        </div>
      </div>
    </div>
  );
};

export const AllSpacing = () => {
  const spacing = tokens.spacing || {};

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
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
    </div>
  );
};
