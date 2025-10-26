#!/usr/bin/env node

import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Diretório com seus tokens do Figma
const TOKENS_DIR = process.argv[2] || '../figma-tokens';

// Arquivos para combinar (na ordem correta)
const FILES = [
  'Primitives/Default.json',
  'Semantic/Default.json',
  'Context/Default.json',
  'global.json'
];

const combined = {};

console.log('🎨 Combinando tokens do Figma...\n');

FILES.forEach(file => {
  const filePath = path.join(__dirname, TOKENS_DIR, file);
  
  if (fs.existsSync(filePath)) {
    console.log(`✅ Lendo: ${file}`);
    const content = JSON.parse(fs.readFileSync(filePath, 'utf8'));
    Object.assign(combined, content);
  } else {
    console.log(`⚠️  Não encontrado: ${file}`);
  }
});

// Salvar resultado
const outputPath = path.join(__dirname, '../src/tokens/tokens.json');
fs.writeFileSync(outputPath, JSON.stringify(combined, null, 2));

console.log('\n✨ Tokens combinados salvos em: src/tokens/tokens.json');
console.log('📊 Total de grupos:', Object.keys(combined).length);