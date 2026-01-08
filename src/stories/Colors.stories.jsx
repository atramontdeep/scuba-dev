import tokens from '../tokens/design-tokens.js';

export default {
  title: 'Design System/Tokens/Colors',
  parameters: {
    layout: 'fullscreen',
  },
};

const ColorCard = ({ name, value, cssVar }) => (
  <div style={{
    display: 'flex',
    flexDirection: 'column',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 1px 3px rgba(0,0,0,0.1)',
    border: '1px solid #e5e7eb',
    background: '#ffffff',
    transition: 'transform 0.2s, box-shadow 0.2s',
    cursor: 'pointer',
    fontFamily: 'Poppins, sans-serif'
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = 'translateY(-2px)';
    e.currentTarget.style.boxShadow = '0 4px 6px rgba(0,0,0,0.15)';
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = 'translateY(0)';
    e.currentTarget.style.boxShadow = '0 1px 3px rgba(0,0,0,0.1)';
  }}
  >
    <div style={{
      width: '100%',
      height: '100px',
      background: value,
      border: value === '#ffffff' || value === '#fafafa' || value === '#f6f6f6' ? '1px solid #e5e7eb' : 'none'
    }} />

    <div style={{ padding: '16px' }}>
      <div style={{
        fontWeight: '600',
        fontSize: '15px',
        marginBottom: '8px',
        color: '#111827',
        wordBreak: 'break-word'
      }}>
        {name}
      </div>

      <div style={{
        fontSize: '13px',
        color: '#0086cd',
        fontFamily: 'monospace',
        marginBottom: '6px',
        fontWeight: '600',
        textTransform: 'uppercase',
        letterSpacing: '0.5px'
      }}>
        {value}
      </div>

      {cssVar && (
        <div style={{
          fontSize: '11px',
          color: '#6b7280',
          fontFamily: 'monospace',
          background: '#f9fafb',
          padding: '4px 6px',
          borderRadius: '4px',
          marginTop: '8px',
          wordBreak: 'break-all'
        }}>
          {cssVar}
        </div>
      )}
    </div>
  </div>
);

const ColorSection = ({ title, colors, prefix = '' }) => {
  if (!colors || Object.keys(colors).length === 0) return null;

  return (
    <div style={{ marginBottom: '48px' }}>
      <h2 style={{
        fontSize: '24px',
        fontWeight: '600',
        marginBottom: '20px',
        color: '#111827',
        fontFamily: 'Poppins, sans-serif',
        paddingBottom: '12px',
        borderBottom: '2px solid #e5e7eb'
      }}>
        {title}
      </h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(auto-fill, minmax(220px, 1fr))',
        gap: '20px'
      }}>
        {Object.entries(colors).map(([key, value]) => {
          const colorValue = value.value || value;
          const cssVarName = prefix ? `--${prefix}-${key}` : `--${key}`;

          return (
            <ColorCard
              key={key}
              name={key}
              value={colorValue}
              cssVar={cssVarName}
            />
          );
        })}
      </div>
    </div>
  );
};

export const AllColors = () => {
  // Extrair todas as cores do objeto de tokens
  const primitiveColors = tokens.primitives?.color || {};
  const semanticColors = tokens.semantic?.color || {};
  const contextColors = tokens.context?.color || {};

  return (
    <div style={{ padding: '40px', maxWidth: '1400px', margin: '0 auto', fontFamily: 'Poppins, sans-serif' }}>
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
      {primitiveColors && Object.keys(primitiveColors).length > 0 && (
        <div style={{ marginBottom: '56px' }}>
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
              return (
                <ColorSection
                  key={colorName}
                  title={colorName.charAt(0).toUpperCase() + colorName.slice(1)}
                  colors={colorValues}
                  prefix={`primitives-color-${colorName}`}
                />
              );
            } else {
              // Cor única (como "white")
              return (
                <div key={colorName} style={{ marginBottom: '32px' }}>
                  <h3 style={{
                    fontSize: '20px',
                    fontWeight: '600',
                    marginBottom: '16px',
                    color: '#111827',
                    fontFamily: 'Poppins, sans-serif'
                  }}>
                    {colorName.charAt(0).toUpperCase() + colorName.slice(1)}
                  </h3>
                  <div style={{ maxWidth: '240px' }}>
                    <ColorCard
                      name={colorName}
                      value={colorValues.value || colorValues}
                      cssVar={`--primitives-color-${colorName}`}
                    />
                  </div>
                </div>
              );
            }
          })}
        </div>
      )}

      {/* Cores Semânticas */}
      {semanticColors && Object.keys(semanticColors).length > 0 && (
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '24px',
            color: '#0086cd',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Semantic Colors
          </h2>

          {Object.entries(semanticColors).map(([colorName, colorValues]) => (
            <ColorSection
              key={colorName}
              title={colorName.charAt(0).toUpperCase() + colorName.slice(1)}
              colors={colorValues}
              prefix={`semantic-color-${colorName}`}
            />
          ))}
        </div>
      )}

      {/* Cores Contextuais */}
      {contextColors && Object.keys(contextColors).length > 0 && (
        <div style={{ marginBottom: '56px' }}>
          <h2 style={{
            fontSize: '28px',
            fontWeight: '700',
            marginBottom: '24px',
            color: '#0086cd',
            fontFamily: 'Poppins, sans-serif'
          }}>
            Context Colors
          </h2>

          {Object.entries(contextColors).map(([contextName, contextValues]) => (
            <ColorSection
              key={contextName}
              title={contextName.charAt(0).toUpperCase() + contextName.slice(1)}
              colors={contextValues}
              prefix={`context-color-${contextName}`}
            />
          ))}
        </div>
      )}
    </div>
  );
};
