# Reactify - React to Next.js Migration Command

**Reactify** automates the complete migration of React templates to Next.js with zero manual effort. It handles everything: dependencies, components, assets, routing, and styling - preserving all features while upgrading to Next.js performance.

## Usage

```
/reactify [template-name] [options]
```

## Examples

```bash
# Basic migration
/reactify my-react-template

# With specific package manager
/reactify my-portfolio --npm

# Keep original folder and skip tests
/reactify awesome-app --keep-folder --no-tests

# Use Pages Router instead of App Router
/reactify dashboard --pages-router

# Show help
/reactify --help
```

## Options

- `--npm` - Use npm instead of pnpm
- `--yarn` - Use yarn instead of pnpm
- `--keep-folder` - Preserve the original template folder
- `--no-tests` - Skip build testing
- `--no-docs` - Skip documentation generation
- `--pages-router` - Use Pages Router instead of App Router
- `--help` - Show help message

## What Reactify Does

✅ **Smart Analysis** - Detects React project structure, build tools, dependencies
✅ **Dependency Management** - Installs all required packages automatically
✅ **Asset Migration** - Moves images, fonts, icons to `/public/` directory
✅ **Component Conversion** - Converts React components to Next.js format
✅ **Router Migration** - Replaces React Router with Next.js Router
✅ **Style Integration** - Merges all CSS/SCSS into `globals.css`
✅ **Client Directives** - Adds `'use client'` where needed
✅ **Build Testing** - Validates the migrated project builds correctly
✅ **Documentation** - Generates detailed migration reports
✅ **Auto Cleanup** - Removes template folder after successful migration

## Quick Start

1. Paste your React template folder into the project
2. Run `/reactify template-folder-name`
3. Watch the magic happen! 🚀

## Requirements

- Node.js 18+
- Next.js project initialized
- React template folder to migrate

## Post-Migration

After Reactify completes, your React template will be running as a Next.js application with:
- All original features preserved
- Enhanced Next.js performance
- Proper TypeScript support
- Optimized asset handling
- Modern Next.js architecture

Run `pnpm run dev` to see your migrated application!

---

**🎯 One command to migrate any React template to Next.js instantly!**