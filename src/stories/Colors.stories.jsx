import tokens from '../tokens/design-tokens.js';

export default {
  title: 'Design System/Tokens/Colors',
  parameters: {
    layout: 'fullscreen',
  },
};

const ColorSwatch = ({ name, value }) => (
  <div style={{ 
    display: 'flex', 
    alignItems: 'center', 
    marginBottom: '12px',
    padding: '8px',
    borderRadius: '4px',
    background: '#f9fafb'
  }}>
    <div style={{
      width: '80px',
      height: '40px',
      background: value,
      borderRadius: '4px',
      border: '1px solid #e5e7eb',
      marginRight: '16px',
      boxShadow: '0 1px 2px rgba(0,0,0,0.05)'
    }} />
    <div>
      <div style={{ 
        fontWeight: '600', 
        fontSize: '14px',
        marginBottom: '4px',
        fontFamily: 'monospace'
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
  </div>
);

const ColorScale = ({ title, colors }) => (
  <div style={{ marginBottom: '32px' }}>
    <h3 style={{ 
      fontSize: '18px', 
      fontWeight: '600', 
      marginBottom: '16px',
      color: '#111827'
    }}>
      {title}
    </h3>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '8px' }}>
      {Object.entries(colors).map(([key, value]) => {
        const colorValue = value.value || value;
        return <ColorSwatch key={key} name={key} value={colorValue} />;
      })}
    </div>
  </div>
);

export const AllColors = () => {
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

  return (
    <div style={{ padding: '40px', maxWidth: '1200px', margin: '0 auto' }}>
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
      
      {Object.entries(colorGroups).map(([groupName, colors]) => (
        <ColorScale 
          key={groupName} 
          title={groupName.charAt(0).toUpperCase() + groupName.slice(1)} 
          colors={colors} 
        />
      ))}
    </div>
  );
};
