#!/usr/bin/env node

/**
 * Sincronizador de Design Tokens do Figma - Versão Melhorada
 * Transforma tokens.json do Figma em CSS custom properties
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOKENS_JSON_PATH = path.join(__dirname, '../src/tokens/tokens.json');
const DESIGN_TOKENS_JS = path.join(__dirname, '../src/tokens/design-tokens.js');
const TOKENS_CSS_PATH = path.join(__dirname, '../src/styles/tokens.css');

console.log('🎨 Sincronizando Design Tokens...\n');

// Verificar se existe tokens.json
if (!fs.existsSync(TOKENS_JSON_PATH)) {
  console.log('⚠️  tokens.json não encontrado em src/tokens/');
  console.log('\n📋 Execute primeiro:');
  console.log('   node scripts/merge-tokens-simple.js <pasta-figma>\n');
  process.exit(0);
}

// Ler tokens
const tokensRaw = fs.readFileSync(TOKENS_JSON_PATH, 'utf8');
const tokens = JSON.parse(tokensRaw);

console.log('✅ tokens.json carregado');

// Função para extrair valor do token
function getTokenValue(token) {
  if (typeof token === 'string' || typeof token === 'number') {
    return token;
  }
  if (token && typeof token === 'object') {
    return token.value || token.$value || token;
  }
  return token;
}

// Função para transformar tokens em CSS custom properties
function tokenToCSS(obj, prefix = '') {
  let css = '';
  
  for (const [key, value] of Object.entries(obj)) {
    const cssVarName = prefix ? `${prefix}-${key}` : key;
    
    // Pular metadados
    if (key.startsWith('$') || key === 'type' || key === 'description') {
      continue;
    }
    
    if (typeof value === 'object' && value !== null && !value.value && !value.$value) {
      // Objeto aninhado
      css += tokenToCSS(value, cssVarName);
    } else {
      // Token final
      const tokenValue = getTokenValue(value);
      
      // Pular valores vazios ou inválidos
      if (tokenValue === null || tokenValue === undefined || tokenValue === '') {
        continue;
      }
      
      // Converter para string
      const cssValue = typeof tokenValue === 'object' 
        ? JSON.stringify(tokenValue) 
        : String(tokenValue);
      
      css += `  --${cssVarName}: ${cssValue};\n`;
    }
  }
  
  return css;
}

// Gerar CSS
const cssContent = `:root {\n${tokenToCSS(tokens)}}`;

// Salvar CSS
fs.writeFileSync(TOKENS_CSS_PATH, cssContent);
console.log('✅ tokens.css gerado');

// Atualizar design-tokens.js
const jsContent = `/**
 * Design Tokens do Scuba Design System
 * Auto-gerado a partir de tokens.json
 * 
 * Não edite este arquivo manualmente!
 * Para atualizar, rode: npm run tokens:sync
 */

export default ${JSON.stringify(tokens, null, 2)};
`;

fs.writeFileSync(DESIGN_TOKENS_JS, jsContent);
console.log('✅ design-tokens.js atualizado');

// Estatísticas
const cssLines = cssContent.split('\n').length - 3; // Remove :root { e }
const groups = Object.keys(tokens).length;

console.log('\n✨ Tokens sincronizados com sucesso!');
console.log(`📊 Variáveis CSS geradas: ${cssLines}`);
console.log(`🎯 Grupos de tokens: ${groups}`);

// Mostrar preview dos grupos
if (groups > 0) {
  console.log('\n👀 Grupos encontrados:');
  Object.keys(tokens).slice(0, 10).forEach(g => {
    const count = typeof tokens[g] === 'object' ? Object.keys(tokens[g]).length : 1;
    console.log(`   - ${g} (${count} tokens)`);
  });
  if (groups > 10) {
    console.log(`   ... e mais ${groups - 10}`);
  }
}

console.log('\n📝 Arquivos atualizados:');
console.log('   - src/styles/tokens.css');
console.log('   - src/tokens/design-tokens.js\n');
console.log('🔄 O Storybook recarregará automaticamente\n');
