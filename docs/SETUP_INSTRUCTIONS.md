# 🚀 Setup do Scuba Storybook - Instruções de Instalação

## 📦 O Que Você Recebeu

Este arquivo contém o projeto completo do Scuba Storybook, incluindo:

- ✅ Configuração do Storybook para Vue 3
- ✅ Sistema de Design Tokens
- ✅ Componente Button completo (exemplo)
- ✅ Scripts de automação
- ✅ Geradores de componentes (manual e com IA)
- ✅ Sincronização com Figma Tokens
- ✅ Documentação completa

## 🔧 Instalação

### 1. Extrair o Projeto

```bash
# Extraia o arquivo
tar -xzf scuba-storybook.tar.gz

# Entre na pasta
cd scuba-storybook
```

### 2. Instalar Dependências

```bash
npm install
```

**Tempo estimado:** 2-3 minutos

### 3. Rodar o Storybook

```bash
npm run storybook
```

**Acesse:** http://localhost:6006

Você verá o componente Button com todas as variantes!

## 📚 Estrutura do Projeto

```
scuba-storybook/
├── README.md                    # Documentação principal
├── FIGMA_MIGRATION_GUIDE.md     # Guia de migração Figma → Vue
├── .storybook/                  # Configuração do Storybook
│   ├── main.js
│   └── preview.js
├── src/
│   ├── components/              # Seus componentes Vue
│   │   ├── Button.vue           # Exemplo completo
│   │   └── Button.stories.js
│   ├── styles/
│   │   ├── tokens.css           # CSS custom properties
│   │   └── global.css
│   └── tokens/
│       ├── tokens.json          # Tokens do Figma (formato W3C)
│       └── design-tokens.js     # Tokens em JS
├── scripts/
│   ├── generate-component.js    # Gerador manual
│   ├── generate-ai.js           # Gerador com IA
│   └── sync-tokens.js           # Sincroniza tokens do Figma
└── package.json
```

## 🎯 Próximos Passos

### Passo 1: Explorar o Button Exemplo

```bash
npm run storybook
```

No Storybook, veja:
- Todas as variantes do Button
- Controles interativos
- Documentação automática
- Casos de uso

### Passo 2: Sincronizar Tokens do Figma

**No Figma:**
1. Instale o plugin "Figma Tokens (Tokens Studio)"
2. Configure seus tokens
3. Exporte como JSON
4. Salve em `src/tokens/tokens.json`

**No terminal:**
```bash
npm run tokens:sync
```

Isso transformará os tokens em CSS custom properties!

### Passo 3: Criar Seus Componentes

**Método 1: Gerador Manual**
```bash
npm run generate:component Input
```

O script vai perguntar:
- Variantes
- Tamanhos

E gerará:
- `src/components/Input.vue`
- `src/components/Input.stories.js`

**Método 2: Com IA (opcional)**

Primeiro, configure a API key:
```bash
echo "ANTHROPIC_API_KEY=sua-chave" > .env
```

Depois:
```bash
npm run generate:ai "Input de email com validação e ícone"
```

A IA gerará o componente completo!

### Passo 4: Desenvolver no Storybook

1. Edite o componente em `src/components/`
2. Veja mudanças em tempo real no Storybook
3. Ajuste usando os controles
4. Teste todas as variantes

### Passo 5: Deploy

**Para compartilhar com a equipe:**

```bash
# Build
npm run build-storybook

# Deploy na Vercel (grátis)
npm i -g vercel
vercel
```

Você terá uma URL pública para testes com usuários!

## 🎨 Workflow Completo

### Dia a Dia do Designer:

```
1. Atualizar tokens no Figma (se necessário)
   ↓
2. npm run tokens:sync
   ↓
3. npm run generate:component NovoComponente
   ↓
4. Editar src/components/NovoComponente.vue
   ↓
5. Ver no Storybook em tempo real
   ↓
6. Commit e push
   ↓
7. Deploy automático (se configurado CI/CD)
   ↓
8. Compartilhar URL com usuários para teste
```

## 📖 Documentação

Leia os arquivos:
- **README.md** - Overview geral
- **FIGMA_MIGRATION_GUIDE.md** - Como migrar componentes do Figma

## ⚡ Scripts Disponíveis

```bash
# Desenvolvimento
npm run storybook              # Rodar Storybook (dev)
npm run build-storybook        # Build para produção

# Geração de Componentes
npm run generate:component     # Gerador manual
npm run generate:ai            # Gerador com IA (requer API key)

# Tokens
npm run tokens:sync            # Sincronizar tokens do Figma
```

## 🐛 Troubleshooting

### Erro: "Cannot find module"
```bash
rm -rf node_modules package-lock.json
npm install
```

### Storybook não abre
```bash
# Porta 6006 ocupada? Use outra:
npx storybook dev -p 6007
```

### Tokens não aparecem
```bash
# Verifique se tokens.json existe
ls src/tokens/tokens.json

# Se não existe, use o exemplo
cp src/tokens/tokens.json.example src/tokens/tokens.json

# Re-sincronize
npm run tokens:sync
```

## 🤝 Suporte

**Dúvidas sobre:**
- Vue 3: https://vuejs.org/
- Storybook: https://storybook.js.org/docs/vue/
- Figma Tokens: https://tokens.studio/

## 🎉 Começando

Execute agora:

```bash
npm install
npm run storybook
```

Abra http://localhost:6006 e veja a mágica acontecer! ✨

---

**Bom trabalho! Você está pronto para escalar o design system Scuba! 🚀**
