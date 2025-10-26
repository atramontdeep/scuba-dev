#!/usr/bin/env node

/**
 * Script simples para combinar tokens do Figma
 * Sem dependências extras - só Node.js puro
 */

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const TOKENS_DIR = process.argv[2];

if (!TOKENS_DIR) {
  console.error('❌ Informe o diretório com os tokens');
  console.log('\n📖 Uso:');
  console.log('   node scripts/merge-tokens-simple.js ../figma-tokens-export\n');
  process.exit(1);
}

const tokensPath = path.resolve(TOKENS_DIR);

if (!fs.existsSync(tokensPath)) {
  console.error(`❌ Diretório não encontrado: ${tokensPath}`);
  process.exit(1);
}

console.log('🎨 Procurando tokens do Figma...\n');
console.log(`📁 Em: ${tokensPath}\n`);

// Função para buscar .json recursivamente
function findJsonFiles(dir, fileList = []) {
  const files = fs.readdirSync(dir);
  
  files.forEach(file => {
    const filePath = path.join(dir, file);
    const stat = fs.statSync(filePath);
    
    if (stat.isDirectory()) {
      // Ignorar node_modules
      if (file !== 'node_modules') {
        findJsonFiles(filePath, fileList);
      }
    } else if (file.endsWith('.json') && !file.startsWith('$')) {
      fileList.push(filePath);
    }
  });
  
  return fileList;
}

const jsonFiles = findJsonFiles(tokensPath);

if (jsonFiles.length === 0) {
  console.error('❌ Nenhum arquivo .json encontrado!');
  process.exit(1);
}

console.log(`📊 Encontrados ${jsonFiles.length} arquivos:\n`);

// Ordem de prioridade
const PRIORITY = ['primitives', 'semantic', 'context', 'component'];

// Ordenar por prioridade
jsonFiles.sort((a, b) => {
  const aLower = a.toLowerCase();
  const bLower = b.toLowerCase();
  
  const aPrio = PRIORITY.findIndex(p => aLower.includes(p));
  const bPrio = PRIORITY.findIndex(p => bLower.includes(p));
  
  if (aPrio === -1 && bPrio === -1) return 0;
  if (aPrio === -1) return 1;
  if (bPrio === -1) return -1;
  return aPrio - bPrio;
});

const combined = {};
let filesProcessed = 0;

console.log('🔄 Processando...\n');

jsonFiles.forEach(filePath => {
  try {
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    
    // Pular vazios
    if (Object.keys(content).length === 0) {
      const fileName = path.relative(tokensPath, filePath);
      console.log(`⏭️  ${fileName} (vazio)`);
      return;
    }
    
    const fileName = path.relative(tokensPath, filePath);
    console.log(`✅ ${fileName}`);
    
    deepMerge(combined, content);
    filesProcessed++;
    
  } catch (error) {
    const fileName = path.relative(tokensPath, filePath);
    console.log(`⚠️  ${fileName}: ${error.message}`);
  }
});

if (filesProcessed === 0) {
  console.error('\n❌ Nenhum arquivo válido processado!');
  process.exit(1);
}

// Salvar
const outputPath = path.join(__dirname, '../src/tokens/tokens.json');
fs.writeFileSync(outputPath, JSON.stringify(combined, null, 2));

console.log('\n✨ Tokens combinados!');
console.log(`📊 Processados: ${filesProcessed} arquivos`);
console.log(`📁 Salvo: src/tokens/tokens.json`);
console.log(`🎯 Grupos: ${Object.keys(combined).length}`);

// Preview
const groups = Object.keys(combined);
if (groups.length > 0) {
  console.log('\n👀 Grupos encontrados:');
  groups.slice(0, 10).forEach(g => console.log(`   - ${g}`));
  if (groups.length > 10) {
    console.log(`   ... e mais ${groups.length - 10}`);
  }
}

console.log('\n🚀 Próximo passo:\n   npm run tokens:sync\n');

function deepMerge(target, source) {
  for (const key in source) {
    if (source.hasOwnProperty(key)) {
      if (source[key] && typeof source[key] === 'object' && !Array.isArray(source[key])) {
        if (!target[key]) target[key] = {};
        deepMerge(target[key], source[key]);
      } else {
        target[key] = source[key];
      }
    }
  }
  return target;
}
