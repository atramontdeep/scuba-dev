import tokens from '../tokens/design-tokens.js';

export default {
  title: 'Design System/Tokens/Typography',
  parameters: {
    layout: 'fullscreen',
  },
};

const Typespecimen = ({ label, value, type = 'fontSize' }) => {
  const style = type === 'fontSize' 
    ? { fontSize: value.value || value }
    : type === 'fontWeight'
    ? { fontWeight: value.value || value }
    : type === 'lineHeight'
    ? { lineHeight: value.value || value }
    : {};

  return (
    <div style={{ 
      marginBottom: '24px',
      padding: '20px',
      background: '#f9fafb',
      borderRadius: '8px'
    }}>
      <div style={{ 
        fontWeight: '600',
        fontSize: '14px',
        fontFamily: 'monospace',
        marginBottom: '8px',
        color: '#6b7280'
      }}>
        {label}
        <span style={{ marginLeft: '12px', color: '#9ca3af' }}>
          {value.value || value}
        </span>
      </div>
      
      <div style={{
        ...style,
        color: '#111827',
        marginTop: '12px'
      }}>
        The quick brown fox jumps over the lazy dog
      </div>
    </div>
  );
};

const FontFamilyItem = ({ name, value }) => (
  <div style={{ 
    marginBottom: '24px',
    padding: '20px',
    background: '#f9fafb',
    borderRadius: '8px'
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
      fontSize: '13px',
      color: '#6b7280',
      fontFamily: 'monospace',
      marginBottom: '16px',
      padding: '8px',
      background: '#fff',
      borderRadius: '4px'
    }}>
      {value.value || value}
    </div>
    <div style={{
      fontFamily: value.value || value,
      fontSize: '18px',
      color: '#111827'
    }}>
      The quick brown fox jumps over the lazy dog
    </div>
  </div>
);

export const FontSizes = () => {
  const typography = tokens.typography || {};
  const fontSizes = typography.fontSize || {};

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: '700', 
        marginBottom: '8px',
        color: '#111827'
      }}>
        Font Sizes
      </h1>
      <p style={{ 
        fontSize: '16px', 
        color: '#6b7280', 
        marginBottom: '40px' 
      }}>
        Escala tipográfica do Scuba Design System
      </p>
      
      {Object.entries(fontSizes).map(([key, value]) => (
        <Typespecimen key={key} label={key} value={value} type="fontSize" />
      ))}
    </div>
  );
};

export const FontWeights = () => {
  const typography = tokens.typography || {};
  const fontWeights = typography.fontWeight || {};

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: '700', 
        marginBottom: '8px',
        color: '#111827'
      }}>
        Font Weights
      </h1>
      <p style={{ 
        fontSize: '16px', 
        color: '#6b7280', 
        marginBottom: '40px' 
      }}>
        Pesos de fonte do Scuba Design System
      </p>
      
      {Object.entries(fontWeights).map(([key, value]) => (
        <Typespecimen key={key} label={key} value={value} type="fontWeight" />
      ))}
    </div>
  );
};

export const FontFamilies = () => {
  const typography = tokens.typography || {};
  const fontFamilies = typography.fontFamily || {};

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: '700', 
        marginBottom: '8px',
        color: '#111827'
      }}>
        Font Families
      </h1>
      <p style={{ 
        fontSize: '16px', 
        color: '#6b7280', 
        marginBottom: '40px' 
      }}>
        Famílias tipográficas do Scuba Design System
      </p>
      
      {Object.entries(fontFamilies).map(([key, value]) => (
        <FontFamilyItem key={key} name={key} value={value} />
      ))}
    </div>
  );
};

export const LineHeights = () => {
  const typography = tokens.typography || {};
  const lineHeights = typography.lineHeight || {};

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
      <h1 style={{ 
        fontSize: '32px', 
        fontWeight: '700', 
        marginBottom: '8px',
        color: '#111827'
      }}>
        Line Heights
      </h1>
      <p style={{ 
        fontSize: '16px', 
        color: '#6b7280', 
        marginBottom: '40px' 
      }}>
        Alturas de linha do Scuba Design System
      </p>
      
      {Object.entries(lineHeights).map(([key, value]) => (
        <div key={key} style={{ 
          marginBottom: '32px',
          padding: '20px',
          background: '#f9fafb',
          borderRadius: '8px'
        }}>
          <div style={{ 
            fontWeight: '600',
            fontSize: '14px',
            fontFamily: 'monospace',
            marginBottom: '12px',
            color: '#111827'
          }}>
            {key}
            <span style={{ marginLeft: '12px', color: '#9ca3af' }}>
              {value.value || value}
            </span>
          </div>
          <div style={{
            lineHeight: value.value || value,
            fontSize: '16px',
            color: '#374151'
          }}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.
          </div>
        </div>
      ))}
    </div>
  );
};
