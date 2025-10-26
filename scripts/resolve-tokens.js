#!/usr/bin/env node

/**
 * Script melhorado para resolver referências de tokens do Figma
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOKENS_JSON_PATH = path.join(__dirname, '../src/tokens/tokens.json');
const DESIGN_TOKENS_JS = path.join(__dirname, '../src/tokens/design-tokens.js');
const TOKENS_CSS_PATH = path.join(__dirname, '../src/styles/tokens.css');

console.log('🔄 Resolvendo tokens do Figma...\n');

if (!fs.existsSync(TOKENS_JSON_PATH)) {
  console.error('❌ tokens.json não encontrado!');
  process.exit(1);
}

const tokens = JSON.parse(fs.readFileSync(TOKENS_JSON_PATH, 'utf8'));
console.log('✅ tokens.json carregado');

// Função para obter valor de um caminho no objeto
function getValueByPath(obj, pathStr) {
  const path = pathStr.split('.');
  let current = obj;
  
  for (const key of path) {
    if (current && typeof current === 'object' && key in current) {
      current = current[key];
    } else {
      return null;
    }
  }
  
  return current;
}

// Função para resolver uma referência
function resolveValue(value, tokens, maxDepth = 10) {
  if (maxDepth <= 0) {
    console.warn('⚠️  Max depth atingido, possível referência circular');
    return value;
  }
  
  // Se não for string ou não tiver formato de referência
  if (typeof value !== 'string' || !value.startsWith('{') || !value.endsWith('}')) {
    return value;
  }
  
  // Extrair path da referência: {semantic.color.primary} -> semantic.color.primary
  const refPath = value.slice(1, -1);
  
  // Buscar o valor
  const referenced = getValueByPath(tokens, refPath);
  
  if (referenced === null) {
    console.warn(`⚠️  Referência não encontrada: ${value}`);
    return value;
  }
  
  // Se o valor referenciado é um objeto com .value
  if (typeof referenced === 'object' && referenced !== null && 'value' in referenced) {
    // Resolver recursivamente
    return resolveValue(referenced.value, tokens, maxDepth - 1);
  }
  
  // Se é um valor direto
  return referenced;
}

// Função para processar o objeto de tokens recursivamente
function processTokens(obj, tokens, prefix = '') {
  const result = {};
  
  for (const [key, value] of Object.entries(obj)) {
    // Pular metadados
    if (key === 'type' || key === 'description' || key.startsWith('$')) {
      continue;
    }
    
    if (value && typeof value === 'object') {
      // Se tem propriedade 'value', é um token final
      if ('value' in value) {
        let resolved = resolveValue(value.value, tokens);
        
        // Adicionar unidade px para números quando apropriado
        if (typeof resolved === 'number') {
          // Font sizes, line heights, spacing sempre em px
          if (prefix.includes('font-size') || 
              prefix.includes('line-height') || 
              prefix.includes('spacing') || 
              prefix.includes('scale') ||
              prefix.includes('paragraph')) {
            resolved = `${resolved}px`;
          }
        }
        
        result[key] = resolved;
      } else {
        // É um objeto aninhado, processar recursivamente
        const newPrefix = prefix ? `${prefix}-${key}` : key;
        result[key] = processTokens(value, tokens, newPrefix);
      }
    } else {
      result[key] = value;
    }
  }
  
  return result;
}

console.log('🔍 Resolvendo referências...');
const resolved = processTokens(tokens, tokens);

console.log('✅ Referências resolvidas');

// Salvar design-tokens.js
const jsContent = `/**
 * Design Tokens Resolvidos do Scuba Design System
 * Auto-gerado - não edite manualmente
 */

export default ${JSON.stringify(resolved, null, 2)};
`;

fs.writeFileSync(DESIGN_TOKENS_JS, jsContent);
console.log('✅ design-tokens.js atualizado');

// Gerar CSS
function objectToCSS(obj, prefix = '') {
  let css = '';
  
  for (const [key, value] of Object.entries(obj)) {
    const varName = prefix ? `${prefix}-${key}` : key;
    
    if (value && typeof value === 'object') {
      // Recursivo para objetos aninhados
      css += objectToCSS(value, varName);
    } else if (value !== null && value !== undefined) {
      // Token final
      css += `  --${varName}: ${value};\n`;
    }
  }
  
  return css;
}

const cssContent = `:root {\n${objectToCSS(resolved)}}

/* Fonte Poppins */
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap');

body {
  font-family: 'Poppins', sans-serif;
}
`;

fs.writeFileSync(TOKENS_CSS_PATH, cssContent);
console.log('✅ tokens.css gerado');

// Estatísticas
function countTokens(obj) {
  let count = 0;
  for (const [key, value] of Object.entries(obj)) {
    if (value && typeof value === 'object') {
      count += countTokens(value);
    } else {
      count++;
    }
  }
  return count;
}

const totalTokens = countTokens(resolved);
const groups = Object.keys(resolved).length;

console.log('\n✨ Concluído!');
console.log(`📊 Grupos: ${groups}`);
console.log(`🎯 Total de tokens: ${totalTokens}`);

console.log('\n👀 Grupos:');
Object.keys(resolved).forEach(g => {
  const count = typeof resolved[g] === 'object' ? countTokens(resolved[g]) : 1;
  console.log(`   - ${g} (${count} tokens)`);
});

console.log('\n🚀 Recarregue o Storybook!\n');
