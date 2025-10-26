#!/usr/bin/env node

import { readFileSync, writeFileSync, existsSync } from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';
import readline from 'readline';

const __dirname = dirname(fileURLToPath(import.meta.url));

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question) {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer);
    });
  });
}

async function generateComponent() {
  console.log('\n🎨 Scuba Component Generator\n');

  const componentName = process.argv[2];

  if (!componentName) {
    console.error('❌ Error: Component name is required');
    console.log('Usage: npm run generate:component ComponentName');
    process.exit(1);
  }

  // Validate component name (PascalCase)
  if (!/^[A-Z][a-zA-Z0-9]*$/.test(componentName)) {
    console.error('❌ Error: Component name must be in PascalCase (e.g., Button, InputField)');
    process.exit(1);
  }

  const variants = await ask('Variants (comma-separated, default: primary,secondary,ghost): ') || 'primary,secondary,ghost';
  const sizes = await ask('Sizes (comma-separated, default: sm,md,lg): ') || 'sm,md,lg';

  const variantList = variants.split(',').map(v => v.trim());
  const sizeList = sizes.split(',').map(s => s.trim());

  console.log(`\n✨ Generating ${componentName} component...`);
  console.log(`   Variants: ${variantList.join(', ')}`);
  console.log(`   Sizes: ${sizeList.join(', ')}\n`);

  // Read templates
  const vueTemplate = readFileSync(join(__dirname, 'templates/Component.vue.template'), 'utf-8');
  const storiesTemplate = readFileSync(join(__dirname, 'templates/Component.stories.js.template'), 'utf-8');

  // Replace placeholders
  const vueContent = vueTemplate
    .replace(/\{\{componentName\}\}/g, componentName)
    .replace(/\{\{variants\}\}/g, variantList.map(v => `'${v}'`).join(', '))
    .replace(/\{\{sizes\}\}/g, sizeList.map(s => `'${s}'`).join(', '));

  const storiesContent = storiesTemplate
    .replace(/\{\{componentName\}\}/g, componentName)
    .replace(/\{\{variants\}\}/g, variantList.map(v => `'${v}'`).join(', '))
    .replace(/\{\{sizes\}\}/g, sizeList.map(s => `'${s}'`).join(', '))
    .replace(/\{\{variantStories\}\}/g, generateVariantStories(componentName, variantList));

  // Write files
  const componentsDir = join(__dirname, '../src/components');
  const vueFile = join(componentsDir, `${componentName}.vue`);
  const storiesFile = join(componentsDir, `${componentName}.stories.js`);

  if (existsSync(vueFile)) {
    console.error(`❌ Error: ${componentName}.vue already exists`);
    process.exit(1);
  }

  writeFileSync(vueFile, vueContent);
  writeFileSync(storiesFile, storiesContent);

  console.log('✅ Component created successfully!');
  console.log(`   📄 ${vueFile}`);
  console.log(`   📄 ${storiesFile}\n`);
  console.log('🚀 Next steps:');
  console.log(`   1. Edit src/components/${componentName}.vue`);
  console.log('   2. Run: npm run storybook');
  console.log(`   3. View your component at: Scuba/${componentName}\n`);

  rl.close();
}

function generateVariantStories(componentName, variants) {
  return variants.map(variant => {
    const capitalizedVariant = variant.charAt(0).toUpperCase() + variant.slice(1);
    return `
export const ${capitalizedVariant} = {
  args: {
    variant: '${variant}',
    size: 'md',
  },
  render: (args) => ({
    components: { ${componentName} },
    setup() {
      return { args };
    },
    template: '<${componentName} v-bind="args">${capitalizedVariant} ${componentName}</${componentName}>',
  }),
};`;
  }).join('\n');
}

generateComponent().catch(err => {
  console.error('❌ Error:', err.message);
  process.exit(1);
});
