# LynKit Monorepo 重构指南

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

#### 6. 创建 `eslint.config.mjs` (Flat Config)

```javascript
import js from '@eslint/js';
import tsPlugin from '@typescript-eslint/eslint-plugin';
import tsParser from '@typescript-eslint/parser';
import reactPlugin from 'eslint-plugin-react';
import reactHooksPlugin from 'eslint-plugin-react-hooks';

export default [
  js.configs.recommended,
  {
    files: ['**/*.{ts,tsx}'],
    plugins: {
      '@typescript-eslint': tsPlugin,
      'react': reactPlugin,
      'react-hooks': reactHooksPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: {
        ecmaVersion: 2020,
        sourceType: 'module',
        ecmaFeatures: {
          jsx: true,
        },
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
      'react/react-in-jsx-scope': 'off',
      'react/prop-types': 'off',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
    settings: {
      react: {
        version: 'detect',
      },
    },
  },
  {
    ignores: ['node_modules', 'dist', 'lib', 'build', '.turbo'],
  },
];
```

#### 7. 创建 `.prettierrc.json`

```json
{
  "semi": true,
  "singleQuote": true,
  "tabWidth": 2,
  "trailingComma": "es5",
  "printWidth": 100,
  "endOfLine": "lf",
  "arrowParens": "always"
}
```

#### 8. 创建 `.prettierignore`

```
node_modules
dist
lib
build
.turbo
coverage
pnpm-lock.yaml
CHANGELOG.md
```

#### 9. 配置 Git Hooks

```bash
# 初始化 husky
pnpm dlx husky-init
```

**.husky/pre-commit**：
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm lint-staged
```

**.husky/commit-msg**：
```bash
#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

pnpm commitlint --edit $1
```

**更新根 package.json 添加 lint-staged**：
```json
{
  "lint-staged": {
    "*.{ts,tsx,js,jsx}": [
      "eslint --fix",
      "prettier --write"
    ],
    "*.{json,md,yml,yaml}": [
      "prettier --write"
    ]
  }
}
```

#### 10. 初始化 Changesets

```bash
pnpm changeset init
```

编辑 `.changeset/config.json`：
```json
{
  "$schema": "https://unpkg.com/@changesets/config@3.0.0/schema.json",
  "changelog": "@changesets/cli/changelog",
  "commit": false,
  "access": "public",
  "baseBranch": "main",
  "updateInternalDependencies": "patch",
  "ignore": ["@lynkit/docs", "@lynkit/playground"]
}
```

---

### 第三步：迁移包配置

#### packages/api

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
  },
  "publishConfig": {
    "access": "public"
  },
  "devDependencies": {
    "tsup": "catalog:",
    "typescript": "catalog:"
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

**tsconfig.json** (继承根配置，启用增量编译)：
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "composite": true,
    "outDir": "./lib",
    "rootDir": "./src",
    "tsBuildInfoFile": ".tsbuildinfo"
  },
  "include": ["src"],
  "exclude": ["node_modules", "lib", "**/*.test.*"]
}
```

#### packages/hooks

**package.json**：
```json
{
  "name": "@lynkit/hooks",
  "version": "0.2.2",
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
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
  "devDependencies": {
    "tsup": "catalog:",
    "typescript": "catalog:",
    "@types/react": "catalog:",
    "@types/react-dom": "catalog:",
    "react": "catalog:",
    "react-dom": "catalog:"
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
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
```

**tsconfig.json**：
```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "outDir": "./lib",
    "rootDir": "./src"
  },
  "include": ["src"]
}
```

#### packages/ui

**package.json**：
```json
{
  "name": "@lynkit/ui",
  "version": "0.2.2",
  "type": "module",
  "main": "./lib/index.cjs",
  "module": "./lib/index.js",
  "types": "./lib/index.d.ts",
  "exports": {
    ".": {
      "import": "./lib/index.js",
      "require": "./lib/index.cjs",
      "types": "./lib/index.d.ts"
    },
    "./styles.css": "./lib/styles.css"
  },
  "files": ["lib"],
  "sideEffects": ["**/*.css"],
  "scripts": {
    "build": "tsup && vite build --config vite.config.lib.ts",
    "dev": "tsup --watch",
    "test": "jest"
  },
  "dependencies": {
    "classnames": "catalog:"
  },
  "peerDependencies": {
    "react": ">=16.8.0",
    "react-dom": ">=16.8.0"
  },
  "devDependencies": {
    "tsup": "catalog:",
    "vite": "catalog:",
    "@vitejs/plugin-react": "catalog:",
    "typescript": "catalog:",
    "@types/react": "catalog:",
    "@types/react-dom": "catalog:",
    "react": "catalog:",
    "react-dom": "catalog:",
    "less": "^4.2.0"
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
  external: ['react', 'react-dom'],
  esbuildOptions(options) {
    options.banner = {
      js: '"use client"',
    };
  },
});
```

**vite.config.lib.ts** (样式构建)：
```typescript
import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/styles/index.less'),
      formats: ['es'],
      fileName: 'styles',
    },
    outDir: 'lib',
    rollupOptions: {
      output: {
        assetFileNames: 'styles.css',
      },
    },
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

**tsconfig.json**：同 hooks

#### packages/icons

配置同 hooks，参考上面。

---

### 第四步：迁移应用

#### 移动文件

```bash
# 创建 apps 目录
mkdir -p apps/playground
mkdir -p apps/docs

# 移动 demo → playground
mv demo/* apps/playground/ 2>/dev/null || true
mv index.html apps/playground/

# 移动 docs
mv docs/* apps/docs/ 2>/dev/null || true

# 清理旧目录
rmdir demo docs 2>/dev/null || true
```

#### apps/playground/package.json

```json
{
  "name": "@lynkit/playground",
  "version": "0.1.0",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build"
  },
  "dependencies": {
    "@lynkit/ui": "workspace:*",
    "@lynkit/hooks": "workspace:*",
    "@lynkit/icons": "workspace:*",
    "@lynkit/api": "workspace:*",
    "react": "catalog:",
    "react-dom": "catalog:"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "catalog:",
    "vite": "catalog:",
    "typescript": "catalog:",
    "@types/react": "catalog:",
    "@types/react-dom": "catalog:"
  }
}
```

#### apps/playground/vite.config.ts

```typescript
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 8888,
  },
});
```

#### apps/playground/tsconfig.json

```json
{
  "extends": "../../tsconfig.json",
  "compilerOptions": {
    "noEmit": true
  },
  "include": ["src"]
}
```

#### apps/docs/package.json

```json
{
  "name": "@lynkit/docs",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "docusaurus start",
    "build": "docusaurus build"
  },
  "dependencies": {
    "@lynkit/ui": "workspace:*",
    "@lynkit/hooks": "workspace:*",
    "@lynkit/icons": "workspace:*",
    "@lynkit/api": "workspace:*",
    "@docusaurus/core": "catalog:",
    "@docusaurus/preset-classic": "catalog:",
    "@docusaurus/theme-classic": "catalog:",
    "react": "catalog:",
    "react-dom": "catalog:"
  },
  "devDependencies": {
    "@docusaurus/types": "catalog:",
    "typescript": "catalog:"
  }
}
```

---

### 第五步：CI/CD

#### .github/workflows/ci.yml

```yaml
name: CI

on:
  push:
    branches: [main]
  pull_request:

jobs:
  build:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
        with:
          fetch-depth: 0

      - uses: pnpm/action-setup@v2
        with:
          version: 9.15.4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm

      - run: pnpm install

      - run: pnpm build

      - run: pnpm test
```

#### .github/workflows/release.yml

```yaml
name: Release

on:
  push:
    branches: [main]

jobs:
  release:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4

      - uses: pnpm/action-setup@v2
        with:
          version: 9.15.4

      - uses: actions/setup-node@v4
        with:
          node-version: 20
          cache: pnpm
          registry-url: https://registry.npmjs.org

      - run: pnpm install

      - uses: changesets/action@v1
        with:
          publish: pnpm publish
          version: pnpm version
        env:
          GITHUB_TOKEN: ${{ secrets.GITHUB_TOKEN }}
          NPM_TOKEN: ${{ secrets.NPM_TOKEN }}
```

---

### 第六步：执行迁移

```bash
# 1. 重新安装依赖
rm -rf node_modules packages/*/node_modules
pnpm install

# 2. 构建所有包
pnpm build

# 3. 测试
pnpm test

# 4. 启动 playground
pnpm --filter @lynkit/playground dev

# 5. 提交
git add .
git commit -m "refactor: migrate to standard monorepo"
```

---

### 第七步：清理

```bash
# 删除旧文件
rm lerna.json
rm -rf packages/*/vite.config.ts  # 已迁移到 tsup

# 更新 .gitignore
echo "
# Turborepo
.turbo

# Build
lib/
dist/
" >> .gitignore
```

---

## ✅ 验证

```bash
# 1. 增量构建测试
pnpm build           # 首次构建
touch packages/api/src/index.ts
pnpm build           # 应该很快（只构建 api）

# 2. 开发模式
pnpm dev             # 所有包 watch 模式

# 3. 版本发布
pnpm changeset       # 创建 changeset
pnpm version         # 更新版本
pnpm publish         # 发布到 npm
```

---

## 📊 预期效果

| 指标 | 重构前 | 重构后 |
|------|--------|--------|
| 首次构建 | 23s | ~20s |
| 增量构建 | 23s | ~5s |
| 二次构建 | 23s | <1s |

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

## 📝 参考

- [Turborepo 官方文档](https://turbo.build/repo/docs)
- [pnpm Workspace](https://pnpm.io/workspaces)
- [Changesets](https://github.com/changesets/changesets)
- [tsup](https://tsup.egoist.dev/)

---

## 💡 额外优化建议

### 1. React 版本说明

**为什么使用 React 18 而不是 19？**

- ✅ React 18.3.1 是当前稳定版本
- ⚠️ React 19 还在 RC 阶段，API 可能变化
- 📦 生态系统兼容性更好
- 🔄 等 React 19 正式发布后，通过 catalog 一键升级

**升级到 React 19 的时机**：
```yaml
# 等 React 19 正式发布后
catalog:
  react: ^19.0.0
  react-dom: ^19.0.0
# 然后运行：pnpm install
```

### 2. TypeScript 严格模式渐进式迁移

如果启用完整严格模式后报错太多，可以渐进式启用：

**阶段 1（初始）**：
```json
{
  "compilerOptions": {
    "strict": false,
    "noImplicitAny": true,
    "strictNullChecks": false
  }
}
```

**阶段 2（1-2周后）**：
```json
{
  "compilerOptions": {
    "strict": false,
    "noImplicitAny": true,
    "strictNullChecks": true,
    "strictFunctionTypes": true
  }
}
```

**阶段 3（最终目标）**：
```json
{
  "compilerOptions": {
    "strict": true  // 开启所有严格选项
  }
}
```

### 3. 性能优化技巧

#### 3.1 缓存优化

```json
// turbo.json 中精确定义 inputs
{
  "build": {
    "inputs": [
      "src/**",
      "package.json",
      "tsconfig.json",
      "tsup.config.ts",
      "!**/*.test.*",
      "!**/*.spec.*",
      "!**/*.md"
    ]
  }
}
```

#### 3.2 并行度控制

```bash
# CPU 密集型任务（默认最大并行）
pnpm turbo build

# 内存受限环境（限制并发）
pnpm turbo build --concurrency=2
```

#### 3.3 远程缓存（可选）

```bash
# 配置 Vercel Remote Cache（免费）
pnpm dlx turbo login
pnpm dlx turbo link

# 更新 turbo.json
{
  "remoteCache": {
    "enabled": true
  }
}
```

### 4. 包管理最佳实践

#### 4.1 添加依赖

```bash
# 使用 catalog 版本（推荐）
pnpm add -D typescript  # 自动使用 catalog 中的版本

# 指定特定版本
pnpm add lodash@^4.17.21

# 添加到 catalog
# 编辑 pnpm-workspace.yaml
catalog:
  lodash: ^4.17.21
```

#### 4.2 升级依赖

```bash
# 查看过期依赖
pnpm outdated -r

# 升级 catalog 中的依赖
# 1. 编辑 pnpm-workspace.yaml，更新版本
# 2. 运行
pnpm install

# 所有包自动使用新版本
```

### 5. 开发体验优化

#### 5.1 VS Code 配置

创建 `.vscode/settings.json`：
```json
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true
  },
  "typescript.tsdk": "node_modules/typescript/lib",
  "typescript.enablePromptUseWorkspaceTsdk": true
}
```

创建 `.vscode/extensions.json`：
```json
{
  "recommendations": [
    "dbaeumer.vscode-eslint",
    "esbenp.prettier-vscode",
    "bradlc.vscode-tailwindcss"
  ]
}
```

#### 5.2 package.json scripts 优化

```json
{
  "scripts": {
    "dev": "turbo dev",
    "build": "turbo build",
    "test": "turbo test",
    "test:watch": "turbo test -- --watch",
    "lint": "turbo lint",
    "lint:fix": "turbo lint -- --fix",
    "format": "prettier --write \"**/*.{ts,tsx,js,jsx,json,md}\"",
    "type-check": "turbo type-check",
    "clean": "turbo clean && rm -rf node_modules .turbo",
    "changeset": "changeset",
    "version": "changeset version",
    "publish": "turbo build && changeset publish"
  }
}
```

### 6. 常见问题解决

#### Q1: pnpm install 很慢？

```bash
# 使用国内镜像
pnpm config set registry https://registry.npmmirror.com

# 或者使用 .npmrc
echo "registry=https://registry.npmmirror.com" >> .npmrc
```

#### Q2: TypeScript 报错太多？

按照"渐进式迁移"步骤，先关闭部分严格选项。

#### Q3: 缓存没有生效？

```bash
# 清理缓存重试
rm -rf .turbo node_modules/.cache
pnpm build
```

#### Q4: workspace: 协议不工作？

确保 pnpm-workspace.yaml 中包含了对应的包路径。

### 7. 迁移检查清单

- [ ] 创建备份分支和 tag
- [ ] 安装 turbo、changesets、tsup
- [ ] 创建所有根配置文件
- [ ] 配置 pnpm catalog
- [ ] 更新所有包的 package.json
- [ ] 创建 tsup.config.ts
- [ ] 移动 demo 到 apps/playground
- [ ] 移动 docs 到 apps/docs
- [ ] 配置 CI/CD
- [ ] 验证构建
- [ ] 验证开发模式
- [ ] 清理旧文件（lerna.json 等）
- [ ] 更新 README
- [ ] 团队同步

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

**现在开始执行吧！** 🚀

有问题随时查看这份指南，或参考原始的《Monorepo超级大仓从0到1实战手册.md》获取更深入的原理解释。
