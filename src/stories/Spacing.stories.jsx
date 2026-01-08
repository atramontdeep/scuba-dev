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
      padding: '20px',
      background: '#f9fafb',
      borderRadius: '8px',
      fontFamily: 'Poppins, sans-serif'
    }}>
      <div style={{
        display: 'flex',
        alignItems: 'center',
        marginBottom: '16px',
        gap: '16px'
      }}>
        <div style={{
          fontWeight: '600',
          fontSize: '14px',
          fontFamily: 'monospace',
          minWidth: '120px',
          color: '#111827'
        }}>
          {name}
        </div>
        <div style={{
          fontSize: '13px',
          color: '#6b7280',
          fontFamily: 'monospace',
          background: '#fff',
          padding: '4px 8px',
          borderRadius: '4px'
        }}>
          {value}
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <div style={{
          width: `${Math.min(numValue, 200)}px`,
          height: '40px',
          background: 'linear-gradient(135deg, #0086cd 0%, #0942a1 100%)',
          borderRadius: '4px',
          position: 'relative',
          boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'flex-end',
          padding: '0 12px'
        }}>
          <span style={{
            color: 'white',
            fontSize: '12px',
            fontWeight: '600',
            fontFamily: 'Poppins, sans-serif'
          }}>
            {value}
          </span>
        </div>
        {numValue > 200 && (
          <span style={{
            fontSize: '12px',
            color: '#6b7280',
            fontStyle: 'italic'
          }}>
            (preview truncated)
          </span>
        )}
      </div>
    </div>
  );
};

export const AllSpacing = () => {
  const spacing = tokens.spacing || {};

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Poppins, sans-serif' }}>
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

      <div style={{ display: 'grid', gridTemplateColumns: '1fr', gap: '0' }}>
        {Object.entries(spacing).map(([key, value]) => {
          const spacingValue = value.value || value;
          return <SpacingItem key={key} name={key} value={spacingValue} />;
        })}
      </div>
    </div>
  );
};
