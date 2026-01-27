# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
pnpm dev          # Start development server at localhost:3000
pnpm build        # Production build
pnpm start        # Run production server
pnpm lint         # Run ESLint
```

## Architecture

This is a Next.js 16 application using the App Router with:
- **React 19** with Server Components by default
- **TypeScript** in strict mode
- **Tailwind CSS v4** (uses `@import "tailwindcss"` syntax, not v3 directives)
- **pnpm** as the package manager

### Project Structure

- `app/` - App Router pages and layouts (file-based routing)
- `app/layout.tsx` - Root layout with Geist font configuration
- `app/globals.css` - Global styles with Tailwind and CSS custom properties for theming
- `public/` - Static assets

### Path Aliases

`@/*` maps to the project root (e.g., `@/app/page` or `@/components/Button`)

---

## Shopify Design Principles

This site is for the Shopify Discord community and should reflect Shopify's design language.

### Core Design Philosophy (Polaris)

Shopify's design system emphasizes: **"Efficiency, intuition, and style combined to empower merchants with data-rich views, action-driven interfaces, and dynamic interactions."**

Key principles:
- **Consistency** - Unified visual language reduces learning curve
- **Accessibility** - WCAG compliant; proper contrast, keyboard nav, screen reader support
- **Scalability** - Responsive by default across all devices

### Brand Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| Shopify Green | `#95BF47` | (149, 191, 71) | Primary brand, growth, trust |
| Dark Green | `#5E8E3E` | (94, 142, 62) | Secondary green, depth |
| White | `#FFFFFF` | (255, 255, 255) | Backgrounds, contrast |
| Black | `#000000` | (0, 0, 0) | Text, high contrast |

### Semantic Color Roles

Apply colors with purpose, not decoration:

| Role | Purpose |
|------|---------|
| **Brand** | Guide users toward primary actions |
| **Success** | Confirm completed actions, positive states |
| **Warning** | Needs attention; in-progress/pending states |
| **Critical** | Errors, blocked actions, highest priority |
| **Info** | Beneficial information, tips |
| **Magic** | AI and automation features (purple tones) |

### Design Foundations

- **Color** - Highlights important areas, communicates status and urgency
- **Depth** - Creates realism, establishes visual hierarchy, focuses attention
- **Motion** - Provides visual feedback, helps users understand action outcomes
- **Typography** - Provides innate hierarchy to UI; clean, readable
- **Layout** - Component placement creates clear information architecture

### Visual Guidelines

1. **Clean, minimal interfaces** - Avoid clutter; let content breathe
2. **Clear hierarchy** - Primary, secondary, tertiary visual levels
3. **Action-oriented** - Guide users toward intended interactions
4. **Trust signals** - Green tones evoke growth and reliability
5. **Consistent spacing** - Use systematic spacing scale
6. **High contrast** - Ensure readability and accessibility
