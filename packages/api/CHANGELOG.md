# Change Log

## 0.3.0

### Minor Changes

- 00f6314: ## 🚀 Major Infrastructure Refactor

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

All notable changes to this project will be documented in this file.
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.

## [0.2.3](https://github.com/LynnCen/LynKit/compare/@lynkit/api@0.2.2...@lynkit/api@0.2.3) (2025-04-08)

**Note:** Version bump only for package @lynkit/api

## [0.2.2](https://github.com/LynnCen/LynKit/compare/@lynkit/api@0.2.1...@lynkit/api@0.2.2) (2025-04-08)

**Note:** Version bump only for package @lynkit/api

## [0.2.1](https://github.com/LynnCen/LynKit/compare/@lynkit/api@0.2.0...@lynkit/api@0.2.1) (2025-04-08)

**Note:** Version bump only for package @lynkit/api

# [0.2.0](https://github.com/LynnCen/LynKit/compare/@lynkit/api@0.1.0...@lynkit/api@0.2.0) (2025-04-08)

### Features

- feat(api,hooks,icons,ui): add throttling and async improvements across packages ([5c27376](https://github.com/LynnCen/LynKit/commit/5c27376518db76c1167981d8f967660a1c3ba7c0))
