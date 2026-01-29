# LynKit Monorepo 架构指南

> 按照 2026 年社区标准的 Monorepo 组件库最佳实践

---

## 🎯 目标架构

```
lynkit/
├── apps/
│   ├── docs/              # 文档站点（Docusaurus）
│   └── playground/        # 组件演示（原 demo/）
├── packages/
│   ├── api/              # 工具函数库
│   ├── hooks/            # React Hooks
│   ├── ui/               # UI 组件
│   └── icons/            # 图标库
├── turbo.json
├── pnpm-workspace.yaml
└── package.json
```

**技术栈**：

- 📦 pnpm workspace + catalog
- ⚡️ Turborepo
- 🔨 tsup (库构建)
- 📝 Changesets (版本管理)
- 🎨 Vite (应用构建)

---

## 🚀 执行步骤

### 第一步：准备工作（5分钟）

```bash
# 创建备份
git checkout -b refactor/monorepo-standard
git tag backup-$(date +%Y%m%d)

# 安装工具
pnpm add -D -w turbo@latest @changesets/cli@latest tsup@latest
```

---

### 第二步：根配置文件

#### 1. 更新 `package.json`

```json
{
  "name": "lynkit",
  "private": true,
  "packageManager": "pnpm@9.15.4",
  "type": "module",
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "test": "turbo test",
    "lint": "turbo lint",
    "changeset": "changeset",
    "version": "changeset version",
    "publish": "turbo build && changeset publish"
  },
  "devDependencies": {
    "@changesets/cli": "^2.29.0",
    "@commitlint/cli": "^19.7.1",
    "@commitlint/config-conventional": "^19.6.0",
    "eslint": "^9.20.1",
    "husky": "^9.1.7",
    "lint-staged": "^15.4.3",
    "prettier": "^3.5.0",
    "turbo": "^2.5.0",
    "typescript": "^5.7.3"
  }
}
```

#### 2. 创建 `pnpm-workspace.yaml`

```yaml
packages:
  - 'apps/*'
  - 'packages/*'

catalog:
  # React 生态（使用稳定版本）
  react: ^18.3.1
  react-dom: ^18.3.1
  '@types/react': ^18.3.18
  '@types/react-dom': ^18.3.5

  # 构建工具
  typescript: ^5.7.3
  vite: ^6.1.0
  tsup: ^8.3.5
  '@vitejs/plugin-react': ^4.3.4
  vite-plugin-dts: ^4.3.0

  # 测试工具
  vitest: ^2.1.8
  '@testing-library/react': ^16.1.0
  '@testing-library/jest-dom': ^6.6.3
  '@vitest/ui': ^2.1.8

  # 代码质量
  eslint: ^9.20.1
  '@typescript-eslint/eslint-plugin': ^8.20.0
  '@typescript-eslint/parser': ^8.20.0
  prettier: ^3.5.0
  stylelint: ^16.14.1

  # 工具库
  classnames: ^2.5.1
  lodash-es: ^4.17.21
  '@types/lodash-es': ^4.17.12

  # Docusaurus
  '@docusaurus/core': ^3.7.0
  '@docusaurus/preset-classic': ^3.7.0
  '@docusaurus/theme-classic': ^3.7.0
  '@docusaurus/theme-live-codeblock': ^3.7.0
  '@docusaurus/types': ^3.7.0

  # 其他
  husky: ^9.1.7
  lint-staged: ^15.4.3
  '@changesets/cli': ^2.29.0
  rimraf: ^6.0.1
```

#### 3. 创建 `turbo.json`

```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["lib/**", "dist/**", "build/**"],
      "inputs": ["src/**", "package.json", "tsconfig.json"]
    },
    "dev": {
      "cache": false,
      "persistent": true
    },
    "test": {
      "dependsOn": ["^build"],
      "outputs": ["coverage/**"]
    },
    "lint": {
      "outputs": [".eslintcache"]
    }
  }
}
```

#### 4. 创建 `.npmrc`

```ini
auto-install-peers=true
shamefully-hoist=false
```

#### 5. 创建 `tsconfig.json` (根配置)

```json
{
  "$schema": "https://json.schemastore.org/tsconfig",
  "compilerOptions": {
    // 编译目标
    "target": "ES2020",
    "module": "ESNext",
    "moduleResolution": "bundler",
    "lib": ["ES2020", "DOM", "DOM.Iterable"],
    "jsx": "react-jsx",

    // 严格模式（推荐全部启用）
    "strict": true,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true,
    "strictBindCallApply": true,
    "strictPropertyInitialization": true,
    "noImplicitThis": true,
    "alwaysStrict": true,

    // 代码质量
    "noUnusedLocals": true,
    "noUnusedParameters": true,
    "noImplicitReturns": true,
    "noFallthroughCasesInSwitch": true,
    "noUncheckedIndexedAccess": true,

    // 互操作性
    "esModuleInterop": true,
    "allowSyntheticDefaultImports": true,
    "forceConsistentCasingInFileNames": true,
    "isolatedModules": true,

    // 输出
    "declaration": true,
    "declarationMap": true,
    "sourceMap": true,

    // 其他
    "skipLibCheck": true,
    "resolveJsonModule": true
  },
  "exclude": ["node_modules", "dist", "lib", "build"]
}
```

---

## 📋 包依赖关系

```
                    ┌─────────────────┐
                    │  apps/playground │
                    │   apps/docs      │
                    └────────┬────────┘
                             │ depends on
           ┌─────────────────┼─────────────────┐
           │                 │                 │
           ▼                 ▼                 ▼
    ┌──────────┐      ┌──────────┐      ┌──────────┐
    │ @lynkit/ │      │ @lynkit/ │      │ @lynkit/ │
    │    ui    │─────▶│  hooks   │      │   api    │
    └──────────┘      └──────────┘      └──────────┘
           │                                   │
           └─────────────┬─────────────────────┘
                         │ may depend on
                         ▼
                  ┌──────────────┐
                  │  @lynkit/    │
                  │    icons     │
                  └──────────────┘
```

### 依赖规则

1. **apps/** 可以依赖任何 **packages/**
2. **packages/** 之间可以互相依赖，但要避免循环
3. **packages/** 不能依赖 **apps/**
4. 使用 `workspace:*` 协议引用内部包

---

## 🔧 包配置规范

### packages/api

**package.json**：

```json
{
  "name": "@lynkit/api",
  "version": "0.2.3",
  "type": "module",
  "main": "./lib/index.cjs",
  "module": "./lib/index.js",
  "types": "./lib/index.d.ts",
  "exports": {
    ".": {
      "import": "./lib/index.js",
      "require": "./lib/index.cjs",
      "types": "./lib/index.d.ts"
    }
  },
  "files": ["lib"],
  "sideEffects": false,
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "test": "jest"
  }
}
```

**tsup.config.ts**：

```typescript
import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['src/index.ts'],
  format: ['cjs', 'esm'],
  dts: true,
  clean: true,
  sourcemap: true,
  treeshake: true,
});
```

---

## 🔄 日常工作流

```bash
# 开发
pnpm dev

# 添加依赖（使用 catalog）
cd packages/hooks
pnpm add lodash-es  # 自动使用 catalog 版本

# 发布新版本
pnpm changeset      # 1. 创建变更说明
git add .
git commit -m "feat: xxx"
git push            # 2. 推送后 CI 会自动创建 Release PR
# 3. 合并 Release PR 后自动发布
```

---

## 📊 预期效果

| 指标     | 重构前 | 重构后 |
| -------- | ------ | ------ |
| 首次构建 | 23s    | ~20s   |
| 增量构建 | 23s    | ~5s    |
| 二次构建 | 23s    | <1s    |

---

## 📝 参考

- [Turborepo 官方文档](https://turbo.build/repo/docs)
- [pnpm Workspace](https://pnpm.io/workspaces)
- [Changesets](https://github.com/changesets/changesets)
- [tsup](https://tsup.egoist.dev/)

---

## 📚 学习资源

### 官方文档

- [Turborepo 完整文档](https://turbo.build/repo/docs)
- [pnpm Workspace](https://pnpm.io/workspaces)
- [pnpm Catalog](https://pnpm.io/catalogs)
- [Changesets](https://github.com/changesets/changesets)
- [tsup](https://tsup.egoist.dev/)

### 社区最佳实践

- [Vercel Turborepo 示例](https://github.com/vercel/turborepo/tree/main/examples)
- [shadcn/ui](https://github.com/shadcn-ui/ui) - 优秀的组件库参考
- [Radix UI](https://github.com/radix-ui/primitives) - Monorepo 架构参考

---

> 更深入的 Monorepo 原理解释，请参考 [MONOREPO_TUTORIAL.md](./MONOREPO_TUTORIAL.md)
