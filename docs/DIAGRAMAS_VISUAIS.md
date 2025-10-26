# 📊 Diagrama Visual: Fluxo Completo do Scuba Design System

## 🎨 Fluxo Atual (Fase 1 - Implementado)

```
┌─────────────────────────────────────────────────────────────────┐
│                         FIGMA                                    │
│  ┌────────────────────────────────────────────────────────────┐ │
│  │  Scuba Design System                                       │ │
│  │  • Componentes                                             │ │
│  │  • Variantes                                               │ │
│  │  • Design Tokens (cores, spacing, typography)             │ │
│  └────────────────────────────────────────────────────────────┘ │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           │ Export via Figma Tokens Plugin
                           │ (tokens.json)
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│                    DESENVOLVIMENTO                               │
│                                                                  │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  npm run tokens:sync                                      │  │
│  │  • Transforma tokens.json → CSS custom properties        │  │
│  │  • Atualiza design-tokens.js                             │  │
│  └───────────────────────────────────────────────────────────┘  │
│                           ↓                                      │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  Criar Componentes                                        │  │
│  │                                                            │  │
│  │  Opção A: npm run generate:component Input               │  │
│  │  Opção B: npm run generate:ai "descrição"                │  │
│  │                                                            │  │
│  │  Gera:                                                     │  │
│  │  • Input.vue (componente Vue 3)                          │  │
│  │  • Input.stories.js (Storybook)                          │  │
│  └───────────────────────────────────────────────────────────┘  │
│                           ↓                                      │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  STORYBOOK                                                │  │
│  │  http://localhost:6006                                    │  │
│  │                                                            │  │
│  │  • Ver componentes                                        │  │
│  │  • Testar variantes                                       │  │
│  │  • Ajustar props                                          │  │
│  │  • Documentação auto-gerada                              │  │
│  └───────────────────────────────────────────────────────────┘  │
│                           ↓                                      │
│  ┌───────────────────────────────────────────────────────────┐  │
│  │  npm run build-storybook                                  │  │
│  │  Deploy → Vercel                                          │  │
│  │  URL: https://scuba-storybook.vercel.app                │  │
│  └───────────────────────────────────────────────────────────┘  │
└─────────────────────────────────────────────────────────────────┘
                           │
                           │ Acessível por todos
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│                    STORYBOOK PÚBLICO                            │
│  • Designers veem componentes prontos                          │
│  • Devs usam como referência                                   │
│  • PMs validam UI/UX                                           │
└─────────────────────────────────────────────────────────────────┘
```

---

## 🚀 Fluxo Futuro (Fase 2 - Builder)

```
┌─────────────────────────────────────────────────────────────────┐
│                    STORYBOOK (Fonte da Verdade)                 │
│  • Button, Input, Select, Checkbox, etc.                       │
│  • Todas variantes documentadas                                │
│  • Props e comportamentos definidos                            │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           │ API do Storybook
                           │ (metadata dos componentes)
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│                    BUILDER (Nova Ferramenta)                    │
│  https://builder.seuapp.com                                     │
│                                                                  │
│  ┌────────────────┐  ┌─────────────────┐  ┌──────────────────┐ │
│  │   SIDEBAR      │  │     CANVAS      │  │  PROPERTIES      │ │
│  │                │  │                 │  │                  │ │
│  │ 🔍 Busca       │  │  ┌───────────┐  │  │ Variant: ▼      │ │
│  │                │  │  │  Header   │  │  │ Size: ▼         │ │
│  │ 📦 Form        │  │  └───────────┘  │  │ Label: _____    │ │
│  │  • Input       │  │                 │  │ Disabled: □     │ │
│  │  • Button      │  │  ┌───────────┐  │  │                 │ │
│  │  • Select      │  │  │   Input   │  │  │ Layout:         │ │
│  │  • Checkbox    │  │  └───────────┘  │  │ Margin: ____    │ │
│  │                │  │                 │  │ Padding: ____   │ │
│  │ 📊 Data        │  │  ┌───────────┐  │  │ Gap: ____       │ │
│  │  • Table       │  │  │  Button   │  │  │                 │ │
│  │  • List        │  │  └───────────┘  │  │ 🤖 AI Prompt:   │ │
│  │  • Card        │  │                 │  │ ______________  │ │
│  │                │  │  Preview Real   │  │ [Generate]      │ │
│  └────────────────┘  └─────────────────┘  └──────────────────┘ │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │  Ações:                                                   │  │
│  │  [Save] [Export Code] [Generate Preview URL]            │  │
│  └──────────────────────────────────────────────────────────┘  │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           │ Salva como JSON
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│                    COMPOSIÇÃO SALVA                             │
│  {                                                               │
│    "page": "Formulário de Login",                              │
│    "components": [                                              │
│      { "type": "Header", "props": {...} },                     │
│      { "type": "Input", "props": {...} },                      │
│      { "type": "Button", "props": {...} }                      │
│    ]                                                            │
│  }                                                              │
└──────────────────────────┬──────────────────────────────────────┘
                           │
                           │ Gera Preview
                           ↓
┌─────────────────────────────────────────────────────────────────┐
│                    PREVIEW PÚBLICO                              │
│  https://preview.seuapp.com/login-xyz123                       │
│                                                                  │
│  ┌──────────────────────────────────────────────────────────┐  │
│  │              Scuba App                                    │  │
│  │  ┌────────────────────────────────────────────────────┐  │  │
│  │  │                Bem-vindo                            │  │  │
│  │  └────────────────────────────────────────────────────┘  │  │
│  │                                                           │  │
│  │  E-mail:                                                 │  │
│  │  [________________________]                              │  │
│  │                                                           │  │
│  │  Senha:                                                  │  │
│  │  [________________________]                              │  │
│  │                                                           │  │
│  │  [        Entrar        ]                               │  │
│  │                                                           │  │
│  │  Interface Real • Componentes Funcionais                │  │
│  └──────────────────────────────────────────────────────────┘  │
│                                                                  │
│  📋 Link compartilhável                                         │
│  💻 Código Vue disponível                                       │
└──────────────────────────┬──────────────────────────────────────┘
                           │
            ┌──────────────┼──────────────┐
            │              │              │
            ↓              ↓              ↓
    ┌─────────────┐ ┌─────────────┐ ┌─────────────┐
    │  USUÁRIOS   │ │  DESIGNERS  │ │    DEVS     │
    │             │ │             │ │             │
    │ • Testam    │ │ • Iteram    │ │ • Veem      │
    │ • Feedback  │ │ • Validam   │ │   código    │
    │ • Aprovam   │ │ • Ajustam   │ │ • Copiam    │
    └─────────────┘ └─────────────┘ └─────────────┘
```

---

## 🔄 Ciclo de Iteração

```
                    ┌──────────────────┐
                    │   1. DESIGN      │
                    │   Figma Tokens   │
                    │   Componentes    │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │  2. SYNC TOKENS  │
                    │  npm run         │
                    │  tokens:sync     │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │  3. COMPONENTES  │
                    │  Storybook       │
                    │  (fonte verdade) │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │  4. BUILDER      │
                    │  Montar telas    │
                    │  Drag & drop     │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │  5. PREVIEW      │
                    │  Testar com      │
                    │  usuários        │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │  6. FEEDBACK     │
                    │  Ajustes         │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │  7. IMPLEMENTAR  │
                    │  Devs usam       │
                    │  código ref      │
                    └────────┬─────────┘
                             │
                             ↓
                    ┌──────────────────┐
                    │  8. PRODUÇÃO     │
                    │  Deploy real     │
                    └──────────────────┘
```

---

## 👥 Papéis e Responsabilidades

```
┌────────────────────────────────────────────────────────────────┐
│                         DESIGNERS                               │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  No Figma:                                                      │
│  ✅ Definir tokens (cores, spacing, etc)                       │
│  ✅ Criar componentes base                                     │
│  ✅ Documentar variantes                                       │
│                                                                 │
│  No Builder:                                                    │
│  ✅ Montar interfaces via drag & drop                          │
│  ✅ Ajustar propriedades dos componentes                       │
│  ✅ Gerar protótipos para teste                                │
│  ✅ Usar IA para acelerar criação                              │
│                                                                 │
│  No Storybook:                                                  │
│  ⚠️  Ver componentes (read-only na PoC)                        │
│  ⚠️  Criar stories simples (se souber Vue básico)             │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                       DESENVOLVEDORES                           │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  Fase 1 (Setup):                                               │
│  ✅ Configurar Storybook                                       │
│  ✅ Criar componentes base em Vue                              │
│  ✅ Implementar tokens                                         │
│  ✅ Setup CI/CD                                                │
│                                                                 │
│  Fase 2 (Builder):                                             │
│  ✅ Desenvolver builder custom                                 │
│  ✅ Integrar com Storybook                                     │
│  ✅ Implementar drag & drop                                    │
│  ✅ Sistema de preview                                         │
│                                                                 │
│  Produção:                                                      │
│  ✅ Usar código do preview como referência                     │
│  ✅ Implementar versão final com lógica                        │
│  ✅ Integrar APIs                                              │
│  ✅ Testes e deploy                                            │
│                                                                 │
└────────────────────────────────────────────────────────────────┘

┌────────────────────────────────────────────────────────────────┐
│                      PRODUCT MANAGERS                           │
├────────────────────────────────────────────────────────────────┤
│                                                                 │
│  ✅ Validar protótipos (preview links)                         │
│  ✅ Coletar feedback de usuários                               │
│  ✅ Priorizar componentes a desenvolver                        │
│  ✅ Medir métricas de produtividade                            │
│                                                                 │
└────────────────────────────────────────────────────────────────┘
```

---

## 📊 Métricas de Sucesso

```
┌─────────────────────────────────────────────────────────────┐
│  ANTES (Processo Tradicional)                                │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Design → Handoff → Dev → Review → Ajustes → Deploy        │
│  └─ 3d ─┘ └─ 1d ─┘ └ 5d ┘ └─ 1d ─┘ └─ 2d ─┘               │
│                                                              │
│  Total: ~12 dias (2.4 semanas)                              │
│  Retrabalho: 30-40% (mudanças após ver código)             │
│                                                              │
└─────────────────────────────────────────────────────────────┘

┌─────────────────────────────────────────────────────────────┐
│  DEPOIS (Com Storybook + Builder)                           │
├─────────────────────────────────────────────────────────────┤
│                                                              │
│  Design → Builder → Teste → Dev (usar ref) → Deploy        │
│  └─ 1d ─┘ └─ 1d ─┘ └ 1d ┘ └───── 3d ─────┘                │
│                                                              │
│  Total: ~6 dias (1.2 semanas)                               │
│  Retrabalho: 10-15% (já validado com usuários)             │
│                                                              │
│  ✅ 50% mais rápido                                          │
│  ✅ 60% menos retrabalho                                     │
│  ✅ Validação com usuários antes de dev                     │
│                                                              │
└─────────────────────────────────────────────────────────────┘
```

---

## 🎯 Timeline Realista

```
┌──────────────────────────────────────────────────────────────┐
│  SEMANA 1-2: Setup Inicial (Você está aqui!)                 │
├──────────────────────────────────────────────────────────────┤
│  ✅ Instalar Storybook                                       │
│  ✅ Criar Button exemplo                                     │
│  🔄 Sincronizar tokens do Figma                              │
│  🔄 Treinar 2 designers                                      │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  SEMANA 3-4: Componentes Base                                │
├──────────────────────────────────────────────────────────────┤
│  □ Input (5 variantes)                                       │
│  □ Select                                                    │
│  □ Checkbox/Radio                                            │
│  □ TextArea                                                  │
│  □ FormContainer                                             │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  SEMANA 5-6: PoC Builder (Decisão Go/No-Go)                 │
├──────────────────────────────────────────────────────────────┤
│  □ Protótipo básico do builder                              │
│  □ Drag & drop simples                                       │
│  □ 1-2 designers testam                                      │
│  □ Decisão: continuar ou ajustar                            │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  SEMANA 7-10: Builder MVP                                    │
├──────────────────────────────────────────────────────────────┤
│  □ Interface completa                                        │
│  □ Props controls                                            │
│  □ Preview system                                            │
│  □ IA integration                                            │
└──────────────────────────────────────────────────────────────┘

┌──────────────────────────────────────────────────────────────┐
│  SEMANA 11-12: Rollout                                       │
├──────────────────────────────────────────────────────────────┤
│  □ Treinamento do time                                       │
│  □ Documentação                                              │
│  □ Primeiras telas em produção                              │
│  □ Métricas e ajustes                                        │
└──────────────────────────────────────────────────────────────┘
```

---

**Este documento serve como referência visual do fluxo completo do projeto.**

Para detalhes técnicos, consulte:
- `PROJETO_COMPLETO.md` - Plano detalhado
- `README.md` - Documentação do Storybook
- `FIGMA_MIGRATION_GUIDE.md` - Como migrar componentes
