# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Scuba Design System** is a Vue 3-based component library with Storybook for documentation and development. The system is designed to bridge the gap between designers and developers by providing:

1. A component library that syncs with Figma design tokens
2. Interactive documentation via Storybook
3. Automated component generation (manual and AI-assisted)
4. A planned visual builder interface (Phase 2)

**Current Status:** Skeleton project with directory structure and documentation. Implementation files need to be added.

## Tech Stack

- **Framework:** Vue 3 (Composition API)
- **Build Tool:** Vite
- **Documentation:** Storybook 9.x
- **Design Tokens:** CSS Custom Properties (generated from Figma Tokens)
- **Module System:** ES Modules (type: "module" in package.json)

## Development Commands

### Core Development
```bash
npm run storybook           # Start Storybook dev server on port 6006
npm run build-storybook     # Build static Storybook for deployment
```

### Component Generation
```bash
npm run generate:component  # Interactive component generator (manual)
npm run generate:ai         # AI-assisted component generation (requires ANTHROPIC_API_KEY)
```

### Design Token Management
```bash
npm run tokens:sync         # Sync design tokens from Figma export to CSS custom properties
```

## Architecture

### Directory Structure
```
/
├── .storybook/              # Storybook configuration
├── src/
│   ├── components/          # Vue component library
│   │   ├── *.vue           # Component implementations
│   │   └── *.stories.js    # Storybook stories
│   ├── styles/
│   │   ├── tokens.css      # Generated CSS custom properties from Figma
│   │   └── global.css      # Global styles
│   └── tokens/
│       ├── tokens.json     # Raw design tokens from Figma Tokens plugin
│       └── design-tokens.js # JavaScript format tokens
├── scripts/
│   ├── generate-component.js  # Component scaffold generator
│   ├── generate-ai.js         # AI-powered component generator
│   ├── sync-tokens.js         # Token sync automation
│   └── templates/             # Component templates
└── docs/                    # Project documentation
```

### Design Token System

Tokens flow from Figma to code:
1. Design tokens are created in Figma using the "Figma Tokens (Tokens Studio)" plugin
2. Tokens are exported as JSON to `src/tokens/tokens.json`
3. `npm run tokens:sync` transforms JSON into CSS custom properties in `src/styles/tokens.css`
4. Components reference tokens via CSS variables:
   ```css
   color: var(--color-primary-500);
   padding: var(--spacing-md);
   border-radius: var(--radius-base);
   font-size: var(--font-size-base);
   ```

### Component Architecture

Each component follows this pattern:
- **Vue SFC:** `ComponentName.vue` with props for variants, sizes, and states
- **Stories:** `ComponentName.stories.js` with multiple variants documented
- **Variants:** Typically primary, secondary, ghost, danger
- **Sizes:** Typically sm, md, lg
- **States:** disabled, loading, active, etc.

Example Button component structure:
```vue
<script setup>
defineProps({
  variant: { type: String, default: 'primary' },
  size: { type: String, default: 'md' },
  disabled: { type: Boolean, default: false },
  loading: { type: Boolean, default: false }
})
</script>

<template>
  <button :class="['scuba-button', `scuba-button--${variant}`, `scuba-button--${size}`]">
    <slot />
  </button>
</template>

<style scoped>
.scuba-button--primary {
  background: var(--color-primary-500);
  color: var(--color-white);
  /* ... */
}
</style>
```

## Planned Features (Phase 2: Visual Builder)

A drag-and-drop visual builder (similar to Framer) is planned with:
- Component library imported from Storybook
- Canvas with drag-and-drop interface
- Real-time preview with actual Vue components
- Properties panel for component props
- AI-assisted layout generation
- Export to JSON and Vue code
- Public preview URLs for user testing

The builder will generate JSON schemas that render using actual Scuba components, not just static mockups.

## AI Component Generation

When using `npm run generate:ai`, set up the environment first:
```bash
echo "ANTHROPIC_API_KEY=your-api-key" > .env
```

The AI generator creates fully functional components with:
- Complete Vue SFC with props and logic
- Storybook stories with multiple variants
- CSS using design tokens
- Accessibility features

## Development Workflow

### Creating a New Component

1. Generate the component scaffold:
   ```bash
   npm run generate:component ComponentName
   # OR
   npm run generate:ai "description of component"
   ```

2. Implement the component in `src/components/ComponentName.vue`

3. Create stories in `src/components/ComponentName.stories.js`

4. Use design tokens for styling (never hardcode values)

5. Test all variants in Storybook with hot reload

### Syncing Design Tokens

1. Export tokens from Figma Tokens plugin as JSON
2. Save to `src/tokens/tokens.json`
3. Run `npm run tokens:sync`
4. Tokens are now available as CSS custom properties

### Building for Production

```bash
npm run build-storybook      # Builds to storybook-static/
```

Deploy the `storybook-static` directory to any static host (Vercel, Netlify, etc.).

## Important Conventions

1. **Always use design tokens** - Never hardcode colors, spacing, or typography values
2. **Component naming** - Use PascalCase for component files (Button.vue, not button.vue)
3. **Token naming** - Follow the pattern: `--{category}-{subcategory}-{value}` (e.g., `--color-primary-500`)
4. **Props validation** - Always define prop types and defaults
5. **Accessibility** - Include ARIA attributes and keyboard navigation where applicable
6. **Scoped styles** - Use `<style scoped>` to prevent style leakage

## Troubleshooting

### Storybook won't start
```bash
# Clear and reinstall dependencies
rm -rf node_modules package-lock.json
npm install

# Try a different port
npx storybook dev -p 6007
```

### Tokens not appearing
```bash
# Verify tokens.json exists
ls src/tokens/tokens.json

# Re-sync tokens
npm run tokens:sync
```

## References

For more detailed information, see:
- `docs/INDEX.md` - Complete package overview
- `docs/QUICK_START.md` - 5-minute getting started guide
- `docs/PROJETO_COMPLETO.md` - Full project plan and roadmap
- `docs/SETUP_INSTRUCTIONS.md` - Detailed setup and troubleshooting
- Project README.md (when implemented) - Technical documentation
- FIGMA_MIGRATION_GUIDE.md (when implemented) - Figma to Vue migration guide
