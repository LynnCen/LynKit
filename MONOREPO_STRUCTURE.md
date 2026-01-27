# LynKit Monorepo 项目结构规范

> 基于 Turborepo、pnpm、shadcn/ui、Radix UI 等社区最佳实践

---

## 📁 目标目录结构

```
LynKit/
├── apps/                           # 🎯 应用层
│   ├── playground/                 # 开发测试应用
│   │   ├── src/
│   │   │   ├── App.tsx
│   │   │   ├── main.tsx
│   │   │   └── examples/           # 组件使用示例
│   │   ├── index.html
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── vite.config.ts
│   │
│   └── docs/                       # 文档站点 (Docusaurus)
│       ├── docs/
│       ├── src/
│       ├── docusaurus.config.js
│       ├── package.json
│       └── tsconfig.json
│
├── packages/                       # 📦 可发布的库
│   ├── ui/                         # UI 组件库
│   │   ├── src/
│   │   │   ├── components/         # 组件目录
│   │   │   │   ├── Button/
│   │   │   │   │   ├── Button.tsx
│   │   │   │   │   ├── Button.test.tsx
│   │   │   │   │   ├── Button.module.less
│   │   │   │   │   └── index.ts
│   │   │   │   ├── Input/
│   │   │   │   └── Select/
│   │   │   ├── styles/             # 全局样式
│   │   │   │   ├── variables.less
│   │   │   │   ├── mixins.less
│   │   │   │   └── reset.less
│   │   │   └── index.ts            # 统一导出
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsup.config.ts
│   │
│   ├── hooks/                      # React Hooks
│   │   ├── src/
│   │   │   ├── useSetState/
│   │   │   │   ├── index.ts
│   │   │   │   └── index.test.ts
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsup.config.ts
│   │
│   ├── icons/                      # 图标库
│   │   ├── src/
│   │   │   ├── icons/
│   │   │   └── index.ts
│   │   ├── package.json
│   │   ├── tsconfig.json
│   │   └── tsup.config.ts
│   │
│   └── api/                        # 工具函数
│       ├── src/
│       │   ├── debounce/
│       │   ├── throttle/
│       │   └── index.ts
│       ├── package.json
│       ├── tsconfig.json
│       └── tsup.config.ts
│
├── tooling/                        # 🔧 共享配置包（可选）
│   ├── tsconfig/                   # 共享 TypeScript 配置
│   │   ├── base.json
│   │   ├── react-library.json
│   │   ├── vite.json
│   │   └── package.json
│   │
│   └── eslint-config/              # 共享 ESLint 配置
│       ├── base.js
│       ├── react.js
│       └── package.json
│
├── .changeset/                     # 版本管理
│   ├── config.json
│   └── README.md
│
├── .github/                        # CI/CD
│   └── workflows/
│       ├── ci.yml
│       └── release.yml
│
├── .husky/                         # Git Hooks
│   ├── pre-commit
│   └── commit-msg
│
├── turbo.json                      # Turborepo 配置
├── pnpm-workspace.yaml             # pnpm 工作区 + catalog
├── package.json                    # 根 package.json
├── tsconfig.json                   # 根 TypeScript 配置
├── eslint.config.mjs               # ESLint Flat Config
├── .prettierrc.json                # Prettier 配置
├── .prettierignore
├── .npmrc                          # pnpm 配置
├── .gitignore
└── README.md
```

---

## 🏷️ 命名规范

### 包名规范
```
@lynkit/ui          # UI 组件
@lynkit/hooks       # React Hooks
@lynkit/icons       # 图标
@lynkit/api         # 工具函数

# 应用（私有，不发布）
@lynkit/playground  # 开发测试
@lynkit/docs        # 文档站点
```

### 文件命名规范
```
# 组件文件
Button.tsx          # 组件
Button.test.tsx     # 测试
Button.module.less  # CSS Modules 样式
index.ts            # 导出

# Hooks
useSetState.ts      # Hook 实现
useSetState.test.ts # 测试
index.ts            # 导出

# 配置文件
tsup.config.ts      # tsup 配置
tsconfig.json       # TypeScript 配置
vite.config.ts      # Vite 配置
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

## 🔧 关键配置文件

### 1. `pnpm-workspace.yaml`
```yaml
packages:
  - 'packages/*'
  - 'apps/*'
  - 'tooling/*'     # 如果使用 tooling

catalog:
  # 统一版本管理
  react: ^18.3.1
  react-dom: ^18.3.1
  typescript: ^5.7.3
  vite: ^6.1.0
  tsup: ^8.3.5
  vitest: ^2.1.8
```

### 2. `turbo.json`
```json
{
  "$schema": "https://turbo.build/schema.json",
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "outputs": ["lib/**", "dist/**"]
    },
    "dev": {
      "cache": false,
      "persistent": true,
      "dependsOn": ["^build"]
    },
    "test": {
      "dependsOn": ["^build"]
    },
    "lint": {},
    "type-check": {
      "dependsOn": ["^build"]
    }
  }
}
```

### 3. 根 `package.json`
```json
{
  "name": "lynkit",
  "private": true,
  "packageManager": "pnpm@9.15.4",
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "test": "turbo test",
    "lint": "turbo lint",
    "format": "prettier --write .",
    "playground": "pnpm --filter @lynkit/playground dev",
    "docs": "pnpm --filter @lynkit/docs start",
    "changeset": "changeset",
    "version": "changeset version",
    "release": "turbo build && changeset publish"
  }
}
```

### 4. 包级 `package.json`（以 UI 为例）
```json
{
  "name": "@lynkit/ui",
  "version": "0.2.3",
  "type": "module",
  "main": "./lib/index.cjs",
  "module": "./lib/index.js",
  "types": "./lib/index.d.ts",
  "exports": {
    ".": {
      "types": "./lib/index.d.ts",
      "import": "./lib/index.js",
      "require": "./lib/index.cjs"
    },
    "./styles.css": "./lib/styles.css"
  },
  "files": ["lib"],
  "sideEffects": ["*.css"],
  "scripts": {
    "build": "tsup",
    "dev": "tsup --watch",
    "test": "vitest run",
    "lint": "eslint src"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
  "devDependencies": {
    "react": "catalog:",
    "react-dom": "catalog:",
    "typescript": "catalog:",
    "tsup": "catalog:"
  }
}
```

### 5. Playground `vite.config.ts`
```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      // 开发模式：直接引用源码，热重载
      '@lynkit/ui': resolve(__dirname, '../../packages/ui/src'),
      '@lynkit/hooks': resolve(__dirname, '../../packages/hooks/src'),
      '@lynkit/icons': resolve(__dirname, '../../packages/icons/src'),
      '@lynkit/api': resolve(__dirname, '../../packages/api/src'),
    },
  },
  server: {
    port: 8888,
  },
  css: {
    preprocessorOptions: {
      less: {
        javascriptEnabled: true,
      },
    },
  },
});
```

---

## 🎯 开发工作流

### 日常开发
```bash
# 1. 启动 playground 进行组件开发
pnpm playground

# 2. 修改 packages/ui/src/Button/Button.tsx
#    → 自动热重载

# 3. 运行测试
pnpm test

# 4. 提交代码
git add .
git commit -m "feat(ui): add new Button variant"
```

### 发布流程
```bash
# 1. 创建 changeset
pnpm changeset
# 选择要发布的包和版本类型

# 2. 更新版本号
pnpm version

# 3. 发布到 npm
pnpm release
```

---

## 📊 与当前结构对比

| 当前                    | 目标                      | 状态 |
|------------------------|--------------------------|------|
| `demo/`                | `apps/playground/`       | ⚠️   |
| `docs/`                | `apps/docs/`             | ⚠️   |
| 根目录 `vite.config.ts`| 移除（用 playground）     | ❌   |
| Less 文件散落          | 集中到 `styles/`          | ❌   |
| 无共享 tsconfig        | `tooling/tsconfig/`      | ❌   |

---

## 🚀 迁移步骤

### 第一阶段：目录重组
1. ✅ 创建 `apps/` 目录
2. ✅ 移动 `docs/` → `apps/docs/`
3. ✅ 创建 `apps/playground/`
4. ⏳ 删除根目录 `demo/` 和 `vite.config.ts`
5. ⏳ 更新所有相对路径引用

### 第二阶段：样式系统重构
1. ⏳ 创建 `packages/ui/src/styles/variables.less`
2. ⏳ 修复所有 Less 导入路径
3. ⏳ 配置 tsup 正确处理样式

### 第三阶段：共享配置（可选）
1. ⏳ 创建 `tooling/tsconfig/`
2. ⏳ 创建 `tooling/eslint-config/`

---

## 📚 参考项目

| 项目 | 特点 |
|------|------|
| [Turborepo Examples](https://github.com/vercel/turborepo/tree/main/examples) | 官方示例 |
| [shadcn/ui](https://github.com/shadcn-ui/ui) | 现代 UI 库结构 |
| [Radix UI](https://github.com/radix-ui/primitives) | 无头 UI 组件 |
| [Chakra UI](https://github.com/chakra-ui/chakra-ui) | 完整 UI 框架 |
| [t3-oss/create-t3-turbo](https://github.com/t3-oss/create-t3-turbo) | T3 Stack Monorepo |

---

**需要我执行这个迁移计划吗？**
