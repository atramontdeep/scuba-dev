# ⚡ Quick Start: Scuba Storybook

## 🚀 5 Minutos para Começar

### Passo 1: Extrair e Instalar (2 min)

```bash
# Extrair projeto
tar -xzf scuba-storybook.tar.gz
cd scuba-storybook

# Instalar dependências
npm install
```

### Passo 2: Rodar Storybook (30 seg)

```bash
npm run storybook
```

Abra: http://localhost:6006

**Você verá:** Componente Button com todas as variantes! 🎉

### Passo 3: Explorar (2 min)

No Storybook:
1. Clique em **"Scuba → Button"** na sidebar
2. Teste os **Controls** (variant, size, etc)
3. Veja as **stories** (Primary, Secondary, Ghost, etc)
4. Clique em **"Docs"** para ver documentação

### Passo 4: Criar Seu Primeiro Componente (1 min)

```bash
# Em outro terminal (deixe o Storybook rodando)
npm run generate:component Input
```

O script vai perguntar:
- **Variantes?** Aperte Enter (usa padrão: primary, secondary, ghost)
- **Tamanhos?** Aperte Enter (usa padrão: sm, md, lg)

**Pronto!** Volte ao Storybook e veja **Scuba → Input**

---

## 🎨 Próximos 15 Minutos

### 1. Sincronizar Tokens do Figma (5 min)

**No Figma:**
1. Instale plugin: **"Figma Tokens (Tokens Studio)"**
2. Exporte tokens: `Settings → Export → JSON`
3. Salve como `tokens.json`

**No Projeto:**
```bash
# Copie o arquivo para o projeto
cp ~/Downloads/tokens.json src/tokens/tokens.json

# Sincronize
npm run tokens:sync
```

**Veja:** `src/styles/tokens.css` foi atualizado!

### 2. Personalizar o Input (5 min)

Abra `src/components/Input.vue` e adicione estilos:

```vue
<style scoped>
.scuba-input--primary {
  border: 2px solid var(--color-primary-500);
  padding: var(--spacing-md);
  border-radius: var(--radius-base);
  font-size: var(--font-size-base);
}

.scuba-input--primary:focus {
  outline: none;
  border-color: var(--color-primary-600);
  box-shadow: var(--shadow-md);
}
</style>
```

**Salve** e veja a mudança **instantânea** no Storybook!

### 3. Adicionar Nova Story (5 min)

Abra `src/components/Input.stories.js` e adicione:

```javascript
export const EmailWithIcon = {
  args: {
    variant: 'primary',
    type: 'email',
    placeholder: 'seu@email.com',
    icon: '📧',
  },
};
```

**Veja:** Nova story aparece no Storybook!

---

## 🔥 Comandos Úteis

```bash
# Desenvolvimento
npm run storybook              # Rodar Storybook

# Criar componentes
npm run generate:component     # Gerador manual
npm run generate:ai "desc"     # Com IA (requer API key)

# Tokens
npm run tokens:sync            # Sincronizar do Figma

# Deploy
npm run build-storybook        # Build para produção
```

---

## 📂 Arquivos Importantes

```
src/
├── components/
│   ├── Button.vue             ← Seu componente
│   └── Button.stories.js      ← Stories do Storybook
│
├── styles/
│   ├── tokens.css             ← Tokens como CSS vars
│   └── global.css             ← Estilos globais
│
└── tokens/
    ├── tokens.json            ← Export do Figma
    └── design-tokens.js       ← Tokens em JS
```

---

## 🎯 Checklist: Primeiras 24h

### Hoje
- [x] ✅ Instalar e rodar Storybook
- [ ] 🔄 Explorar Button exemplo
- [ ] 🔄 Criar Input component
- [ ] 🔄 Sincronizar tokens do Figma

### Essa Semana
- [ ] Criar 3 componentes: Select, Checkbox, TextArea
- [ ] Deploy Storybook na Vercel
- [ ] Compartilhar com time

### Próximas 2 Semanas
- [ ] Completar componentes de formulário
- [ ] Testar com designers
- [ ] Decidir sobre builder

---

## 💡 Dicas Rápidas

**1. Ver mudanças em tempo real:**
Deixe `npm run storybook` rodando e edite os arquivos `.vue`

**2. Usar tokens sempre:**
```css
/* ✅ Correto */
color: var(--color-primary-500);

/* ❌ Evite */
color: #0066FF;
```

**3. Testar todas as variantes:**
Use os **Controls** no Storybook para testar rapidamente

**4. Documentar:**
Use comentários JSDoc nas props:
```javascript
/**
 * Variante visual do componente
 */
variant: { type: String, default: 'primary' }
```

---

## 🆘 Problemas Comuns

### "Cannot find module"
```bash
rm -rf node_modules
npm install
```

### "Port 6006 already in use"
```bash
npx storybook dev -p 6007
```

### Tokens não aparecem
```bash
npm run tokens:sync
```

---

## 📚 Próximos Passos

Depois deste quick start:

1. 📖 Leia **PROJETO_COMPLETO.md** - visão geral
2. 📐 Leia **FIGMA_MIGRATION_GUIDE.md** - migrar componentes
3. 🎨 Leia **DIAGRAMAS_VISUAIS.md** - entender fluxo

---

## 🎉 Parabéns!

Você tem um design system funcional em Vue 3!

**Próxima ação:** Crie mais 2-3 componentes e compartilhe com o time.

**Dúvidas?** Todos os documentos estão na pasta do projeto.

Boa sorte! 🚀
