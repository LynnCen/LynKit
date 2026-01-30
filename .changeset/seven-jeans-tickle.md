---
'@lynkit/hooks': minor
'@lynkit/api': minor
'@lynkit/icons': minor
'@lynkit/ui': minor
---

## 🚀 Major Infrastructure Refactor

This release includes significant infrastructure improvements across all packages.

### @lynkit/hooks

- **Build System**: Upgraded build system from Vite to tsup for better code quality and smaller bundle size
- **Bug Fixes**: Fixed usePollingAI linting issues and added global TypeScript types
- **Exports**: Fixed named re-exports for default exports compatibility

### @lynkit/api

- **Build System**: Migrated to Vite with `preserveModules` for true ES modules output
- **Tree-shaking**: Improved tree-shaking support for better bundle optimization

### @lynkit/icons

- **Modernization**: All icon components now use `forwardRef` with proper `IconProps` typing
- **TypeScript**: Enhanced type definitions for better DX

### @lynkit/ui

- **New Feature**: Added `ConfigProvider` component and `useConfig` hook for global configuration
- **Build System**: Migrated from tsup to Vite for consistent build tooling
- **Testing**: Added comprehensive component testing setup with Select tests
- **Documentation**: Added component development guide

### General

- **Monorepo**: Migrated from Lerna to Turborepo for faster builds
- **Structure**: Reorganized project structure following monorepo best practices
- **Exports**: Standardized `package.json` exports format across all packages
