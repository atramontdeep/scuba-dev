import tokens from '../tokens/design-tokens.js';

export default {
  title: 'Design System/Tokens/Shadows',
  parameters: {
    layout: 'fullscreen',
  },
};

const ShadowItem = ({ name, value }) => (
  <div style={{
    marginBottom: '24px',
    padding: '24px',
    background: '#f9fafb',
    borderRadius: '8px',
    fontFamily: 'Poppins, sans-serif'
  }}>
    <div style={{
      fontWeight: '600',
      fontSize: '14px',
      fontFamily: 'monospace',
      marginBottom: '12px',
      color: '#111827'
    }}>
      {name}
    </div>
    <div style={{
      fontSize: '12px',
      color: '#6b7280',
      fontFamily: 'monospace',
      marginBottom: '20px',
      padding: '12px',
      background: '#fff',
      borderRadius: '4px',
      overflow: 'auto',
      border: '1px solid #e5e7eb'
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
      fontSize: '14px',
      fontWeight: '500'
    }}>
      Shadow Preview
    </div>
  </div>
);

export const AllShadows = () => {
  const shadows = tokens.shadows || tokens.shadow || {};
  const hasShadows = Object.keys(shadows).length > 0;

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto', fontFamily: 'Poppins, sans-serif' }}>
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

      {!hasShadows && (
        <div style={{
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
        </div>
      )}

      {hasShadows && (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(400px, 1fr))', gap: '20px' }}>
          {Object.entries(shadows).map(([key, value]) => {
            const shadowValue = value.value || value;
            return <ShadowItem key={key} name={key} value={shadowValue} />;
          })}
        </div>
      )}
    </div>
  );
};
