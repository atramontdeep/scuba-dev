# 🎯 Plano Completo: Design System Scuba + Builder

## 📊 Visão Geral do Projeto

### Objetivo
Criar um processo escalável onde designers podem:
1. Criar interfaces diretamente em código (sem handoff)
2. Testar protótipos funcionais com usuários
3. Gerar código de referência para desenvolvedores

### Stack Técnica Escolhida
- **Frontend:** Vue 3 (sua stack atual)
- **Design System:** Storybook
- **Builder:** Custom (tipo Framer) - a desenvolver
- **Tokens:** Figma Tokens → CSS Custom Properties
- **Geração IA:** Claude API (opcional)
- **Deploy:** Vercel (gratuito)

---

## 🎯 Fase 1: Storybook Base (✅ CONCLUÍDO)

### O Que Foi Criado

**1. Estrutura Completa do Projeto**
```
scuba-storybook/
├── .storybook/              # Configuração
├── src/
│   ├── components/          # Button.vue (exemplo)
│   ├── styles/              # Tokens + Global CSS
│   └── tokens/              # Design tokens
├── scripts/
│   ├── generate-component.js
│   ├── generate-ai.js
│   └── sync-tokens.js
├── README.md
├── FIGMA_MIGRATION_GUIDE.md
└── SETUP_INSTRUCTIONS.md
```

**2. Sistema de Design Tokens**
- Importação do Figma via Figma Tokens plugin
- Transformação automática JSON → CSS custom properties
- Script de sincronização: `npm run tokens:sync`

**3. Componente Button Completo**
- 4 variantes (primary, secondary, ghost, danger)
- 3 tamanhos (sm, md, lg)
- Estados (disabled, loading, icon)
- Stories completas no Storybook
- Acessibilidade implementada

**4. Geradores de Componentes**
- Manual: `npm run generate:component NomeComponente`
- Com IA: `npm run generate:ai "descrição"`
- Templates otimizados
- Criação automática de .vue + .stories.js

**5. Documentação**
- README completo
- Guia de migração Figma → Vue
- Instruções de setup
- Exemplos práticos

### Como Usar Agora

```bash
# 1. Instalar
npm install

# 2. Rodar
npm run storybook

# 3. Criar componente
npm run generate:component Input

# 4. Desenvolver e ver em tempo real
```

---

## 🎯 Fase 2: Builder Visual (PRÓXIMO PASSO)

### O Que Será Construído

Um builder web estilo Framer que:
- Importa componentes do Storybook
- Interface drag & drop
- Controles de propriedades (como Framer)
- Geração via prompt (IA)
- Preview público para testes

### Arquitetura Proposta

```
┌─────────────────────────────────────────────────┐
│  STORYBOOK (Fonte da Verdade)                   │
│  - Componentes Vue                              │
│  - Props documentadas                           │
│  - Variantes e estados                          │
└─────────────────┬───────────────────────────────┘
                  │
                  │ Import via API
                  ↓
┌─────────────────────────────────────────────────┐
│  BUILDER (builder.seuapp.com)                   │
│  ┌─────────────────────────────────────────┐   │
│  │ Sidebar                                  │   │
│  │ - Lista componentes do Storybook        │   │
│  │ - Busca/filtro                          │   │
│  │ - Categorias                            │   │
│  └─────────────────────────────────────────┘   │
│                                                  │
│  ┌─────────────────────────────────────────┐   │
│  │ Canvas                                   │   │
│  │ - Drag & drop                           │   │
│  │ - Preview em tempo real                 │   │
│  │ - Responsive frames                     │   │
│  │ - Controles contextuais                 │   │
│  └─────────────────────────────────────────┘   │
│                                                  │
│  ┌─────────────────────────────────────────┐   │
│  │ Properties Panel                         │   │
│  │ - Ajuste de props                       │   │
│  │ - Layout controls (spacing, align)      │   │
│  │ - Estilos (margin, padding)            │   │
│  │ - AI prompt input                       │   │
│  └─────────────────────────────────────────┘   │
└─────────────────┬───────────────────────────────┘
                  │
                  │ Save
                  ↓
┌─────────────────────────────────────────────────┐
│  PREVIEW (preview.seuapp.com/abc123)            │
│  - Página renderizada com componentes reais     │
│  - Link público para testes com usuários        │
│  - Código Vue disponível para devs             │
└─────────────────────────────────────────────────┘
```

### Tech Stack do Builder

```javascript
// Frontend
{
  "framework": "Vue 3 + Vite",
  "stateManagement": "Pinia",
  "dragAndDrop": "VueDraggable / @vueuse/gesture",
  "ui": "Seus componentes do Scuba",
  "editor": "Monaco Editor (opcional - código)"
}

// Backend (Simples)
{
  "runtime": "Node.js",
  "framework": "Express (minimal)",
  "storage": "JSON files + S3 (ou Vercel KV)",
  "ai": "Claude API"
}

// Infra
{
  "hosting": "Vercel (builder + previews)",
  "cdn": "Vercel Edge",
  "auth": "NextAuth (se precisar)"
}
```

### Features do MVP (3-4 semanas)

**Sprint 1: Core (1 semana)**
- [ ] Interface básica (sidebar + canvas + panel)
- [ ] Fetch componentes do Storybook via API
- [ ] Drag & drop básico (SortableJS)
- [ ] Salvar composição como JSON
- [ ] Deploy preview simples

**Sprint 2: Props & Controls (1 semana)**
- [ ] Painel de propriedades dinâmico
- [ ] Editar props dos componentes
- [ ] Layout controls (spacing, alignment)
- [ ] Preview em tempo real
- [ ] Responsive preview (mobile/desktop)

**Sprint 3: IA & Polish (1 semana)**
- [ ] Integração Claude API
- [ ] Geração via prompt
- [ ] Histórico de versões
- [ ] Melhorias de UX
- [ ] Documentação

**Sprint 4: Testing & Deploy (1 semana)**
- [ ] Testes com 2 designers
- [ ] Ajustes baseados em feedback
- [ ] Setup CI/CD
- [ ] Deploy produção

### Exemplo de JSON Gerado pelo Builder

```json
{
  "id": "page-login",
  "name": "Tela de Login",
  "createdBy": "designer@empresa.com",
  "lastModified": "2025-10-25T10:30:00Z",
  "viewport": {
    "width": 400,
    "height": 600
  },
  "components": [
    {
      "id": "comp-1",
      "type": "FormContainer",
      "props": {
        "title": "Bem-vindo"
      },
      "layout": {
        "padding": "24px",
        "gap": "16px"
      },
      "children": [
        {
          "id": "comp-2",
          "type": "Input",
          "props": {
            "label": "E-mail",
            "type": "email",
            "placeholder": "seu@email.com",
            "required": true
          }
        },
        {
          "id": "comp-3",
          "type": "Input",
          "props": {
            "label": "Senha",
            "type": "password",
            "placeholder": "••••••••"
          }
        },
        {
          "id": "comp-4",
          "type": "Button",
          "props": {
            "variant": "primary",
            "label": "Entrar",
            "fullWidth": true
          }
        }
      ]
    }
  ]
}
```

### Renderizador de Preview

O preview lê o JSON e renderiza os componentes Vue reais:

```vue
<!-- PreviewRenderer.vue -->
<template>
  <div class="preview-container">
    <component
      v-for="comp in page.components"
      :key="comp.id"
      :is="getComponent(comp.type)"
      v-bind="comp.props"
      :style="getLayoutStyles(comp.layout)"
    >
      <!-- Renderização recursiva de children -->
      <template v-if="comp.children">
        <PreviewRenderer :page="{ components: comp.children }" />
      </template>
    </component>
  </div>
</template>

<script setup>
import { defineAsyncComponent } from 'vue';

const getComponent = (type) => {
  return defineAsyncComponent(() => 
    import(`@/components/${type}.vue`)
  );
};

const getLayoutStyles = (layout) => ({
  padding: layout?.padding,
  gap: layout?.gap,
  // ... outros estilos
});
</script>
```

---

## 📋 Checklist Completo do Projeto

### Fase 1: Storybook ✅
- [x] Setup Storybook Vue 3
- [x] Sistema de tokens
- [x] Componente Button exemplo
- [x] Geradores de componentes
- [x] Documentação

### Fase 1.5: Componentes Base (2-3 semanas)
- [ ] Input (text, email, password, number)
- [ ] Select/Dropdown
- [ ] Checkbox
- [ ] Radio
- [ ] TextArea
- [ ] FormContainer
- [ ] Card
- [ ] Modal (opcional)

**Recomendação:** Use os geradores para acelerar!

### Fase 2: Builder MVP (3-4 semanas)
- [ ] Sprint 1: Core
- [ ] Sprint 2: Props
- [ ] Sprint 3: IA
- [ ] Sprint 4: Testing

### Fase 3: Produção (ongoing)
- [ ] Testes com usuários reais
- [ ] Coleta de métricas
- [ ] Iterações baseadas em feedback
- [ ] Expansão de componentes
- [ ] Integrações (Figma API, etc)

---

## 💰 Estimativa de Custos

### Setup Inicial
- **Storybook:** $0 (open source)
- **Vercel (hobby):** $0
- **Total:** $0 ✅

### Operacional (após MVP)
- **Vercel Pro:** $20/mês (se precisar de mais recursos)
- **Claude API:** ~$30/mês (uso moderado)
- **Total:** ~$50/mês

### Comparação com Alternativas
- **Plasmic Pro:** $99/mês (2 usuários)
- **Builder.io:** $199/mês
- **Framer Sites:** $15/mês/site
- **Sua solução custom:** $0-50/mês ✅

**ROI:**
- 2 designers economizando 5h/semana cada = 40h/mês
- 40h × R$100/h = R$4.000/mês economizado
- Custo: R$250/mês
- **Retorno:** 16x

---

## 🎓 Recursos de Aprendizado

### Para Construir o Builder
- [Vue Draggable](https://github.com/SortableJS/vue.draggable.next)
- [VueUse](https://vueuse.org/) - Composables úteis
- [Pinia](https://pinia.vuejs.org/) - State management
- [Framer Motion para Vue](https://motion.dev/) - Animações

### Inspiração de UI
- [Framer](https://www.framer.com/) - Interface de referência
- [Webflow](https://webflow.com/) - Builder conceitos
- [Figma](https://www.figma.com/) - Properties panel
- [Plasmic](https://www.plasmic.app/) - Component workflow

### Referências Técnicas
- [Storybook API](https://storybook.js.org/docs/vue/api/stories)
- [Vue 3 Composition API](https://vuejs.org/guide/extras/composition-api-faq.html)
- [Design Tokens W3C](https://design-tokens.github.io/community-group/format/)

---

## 🚀 Próxima Ação Imediata

### Para Você (Designer/PM)

**Hoje:**
1. ✅ Extrair scuba-storybook.tar.gz
2. ✅ `npm install`
3. ✅ `npm run storybook`
4. ✅ Explorar o Button e entender o fluxo

**Essa Semana:**
1. Sincronizar tokens do Figma
2. Criar 2-3 componentes simples (Input, Checkbox)
3. Validar com outro designer do time
4. Decidir se investe no builder custom

**Próximas 2 Semanas:**
1. Completar componentes base de formulário
2. Deploy do Storybook (Vercel)
3. Compartilhar com devs para feedback

### Para o Time de Dev

**Se validar a PoC:**
1. Alocar 1 dev frontend para builder (3-4 semanas)
2. Seguir o plano de sprints acima
3. Fazer pair programming com designers

---

## 📞 Pontos de Decisão

### Decisão 1: Investir no Builder?
**Quando decidir:** Após completar 5 componentes base  
**Critério:** Se economizar >4h/semana já vale

### Decisão 2: IA ou não?
**Quando decidir:** Após MVP do builder  
**Critério:** Se designers usarem >10x/mês

### Decisão 3: Open source?
**Quando decidir:** Após 6 meses de uso interno  
**Critério:** Se quiser contribuições da comunidade

---

## 🎉 Conclusão

Você agora tem:
1. ✅ Storybook funcionando com Vue 3
2. ✅ Sistema de tokens sincronizado
3. ✅ Geradores de componentes
4. ✅ Exemplo completo (Button)
5. ✅ Documentação detalhada
6. ✅ Plano completo para o builder

**Próximo passo:** Execute `npm run storybook` e veja a mágica! ✨

**Dúvidas?** Revise:
- SETUP_INSTRUCTIONS.md (como instalar)
- README.md (visão geral)
- FIGMA_MIGRATION_GUIDE.md (como migrar componentes)

Boa sorte com o Scuba Design System! 🚀🎨
