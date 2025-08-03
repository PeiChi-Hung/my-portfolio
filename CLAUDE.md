# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

- **Development server**: `npm run dev` - Starts Vite dev server with hot reload
- **Build**: `npm run build` - TypeScript compilation + Vite production build
- **Lint**: `npm run lint` - ESLint with TypeScript support, reports unused disable directives
- **Preview**: `npm run preview` - Preview production build locally

## Architecture Overview

This is a React TypeScript portfolio website built with:

- **Build Tool**: Vite with SWC for fast compilation
- **Styling**: Tailwind CSS with shadcn/ui components
- **UI Components**: shadcn/ui system with Radix UI primitives
- **Icons**: Lucide React + React Icons
- **Animations**: Framer Motion

### Project Structure

```
src/
├── sections/          # Main page sections (Hero, About, Skills, etc.)
├── components/        # Reusable components
│   └── ui/           # shadcn/ui components
├── data/             # Static data (projects.ts)
├── types/            # TypeScript type definitions
├── lib/              # Utilities (utils.ts for cn() helper)
└── assets/icons/     # Skill/technology icons
```

### Key Architecture Notes

- **Single Page Application**: All sections render in App.tsx as a single scrollable page
- **Layout Structure**: Navbar + GridBackground + main container with sections + BackToTop
- **Responsive Design**: Uses Tailwind's responsive utilities, lg:px-28 for large screens
- **Path Alias**: `@/` mapped to `src/` directory via Vite config
- **Component System**: Uses shadcn/ui pattern with `cn()` utility for conditional classes
- **Icon Management**: Static imports from assets/icons/ for skill technologies

### shadcn/ui Integration

- Configuration in `components.json` with default style, slate base color
- CSS variables for theming in Tailwind config
- Components use Radix UI primitives with custom styling