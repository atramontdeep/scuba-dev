import tokens from '../tokens/design-tokens.js';

export default {
  title: 'Design System/Tokens/Border',
  parameters: {
    layout: 'fullscreen',
  },
};

const BorderWidthItem = ({ name, value }) => (
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
        minWidth: '150px',
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
        {value}px
      </div>
    </div>

    <div style={{
      width: '200px',
      height: '60px',
      background: 'white',
      border: `${value}px solid #0086cd`,
      borderRadius: '4px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      color: '#6b7280',
      fontSize: '13px',
      fontWeight: '500'
    }}>
      Border Width
    </div>
  </div>
);

const BorderRadiusItem = ({ name, value }) => (
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
        minWidth: '150px',
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
        {value}px
      </div>
    </div>

    <div style={{
      width: '120px',
      height: '80px',
      background: 'linear-gradient(135deg, #0086cd 0%, #0942a1 100%)',
      borderRadius: `${value}px`,
      boxShadow: '0 2px 8px rgba(0,0,0,0.1)'
    }} />
  </div>
);

export const BorderWidth = () => {
  const borderWidth = tokens.border?.width || {};

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Poppins, sans-serif' }}>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '16px' }}>
        {Object.entries(borderWidth).map(([key, value]) => {
          const widthValue = value.value || value;
          return <BorderWidthItem key={key} name={key} value={widthValue} />;
        })}
      </div>
    </div>
  );
};

export const BorderRadius = () => {
  const borderRadius = tokens.border?.radius || {};

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Poppins, sans-serif' }}>
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

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))', gap: '16px' }}>
        {Object.entries(borderRadius).map(([key, value]) => {
          const radiusValue = value.value || value;
          return <BorderRadiusItem key={key} name={key} value={radiusValue} />;
        })}
      </div>
    </div>
  );
};
