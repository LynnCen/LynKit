# @lynkit/icons 改造方案

> **说明**：本文档为组件库侧自行改造方案，不依赖 CLI 工具更新。
> CLI 优化需求请参考 [CLI_OPTIMIZATION_PROPOSAL.md](./CLI_OPTIMIZATION_PROPOSAL.md)

## 一、改造策略

由于图标组件由 CLI 工具从 Figma 自动生成，直接修改会在下次拉取时被覆盖。

**解决方案：后处理脚本**

```
┌──────────────┐     ┌──────────────────┐     ┌──────────────┐
│  CLI 生成    │ ──▶ │  Transform 脚本   │ ──▶ │  标准化组件   │
│  原始组件    │     │  自动转换         │     │  可构建发布   │
└──────────────┘     └──────────────────┘     └──────────────┘
```

```json
// package.json
{
  "scripts": {
    "generate": "figma-cli pull",
    "transform": "node scripts/transform-icons.mjs",
    "postgenerate": "pnpm transform",
    "build": "vite build"
  }
}
```

---

## 二、现状分析

### 2.1 当前架构

| 项目     | 现状                             |
| -------- | -------------------------------- |
| 图标数量 | 1063+ 个                         |
| 构建工具 | tsup（单文件 bundle）            |
| 输出格式 | `lib/index.js` + `lib/index.cjs` |
| 组件模式 | 独立 React 组件 + `React.memo`   |
| 类型定义 | 每个组件独立 interface           |

### 2.2 存在问题

| 问题          | 当前实现                 | 期望实现                     |
| ------------- | ------------------------ | ---------------------------- |
| 颜色硬编码    | `fill="#222529"`         | `fill={color}`               |
| 尺寸固定      | `width="24" height="24"` | `width={size} height={size}` |
| 无 forwardRef | `React.memo(...)`        | `forwardRef(...)`            |
| 类型冗余      | 每个组件独立 interface   | 统一 `IconProps`             |
| 单文件 bundle | Tree-shaking 差          | `preserveModules`            |

---

## 三、改造目标

| 目标           | 说明                                       | 优先级 |
| -------------- | ------------------------------------------ | ------ |
| currentColor   | 所有图标使用 `currentColor`，支持 CSS 继承 | P0     |
| 统一 IconProps | 实现 size/color 等标准 Props               | P0     |
| forwardRef     | 支持 ref 转发                              | P0     |
| Tree-shaking   | preserveModules 保持模块结构               | P0     |
| 双格式输出     | ES Modules + CommonJS                      | P1     |
| 自动化脚本     | CLI 拉取后自动转换                         | P0     |

**不在范围内**：

- 图标重命名（影响范围大）
- 图标分类重组（需设计规范支持）
- IconContext 全局配置（通过 CSS 继承 + Props 已足够）

---

## 四、技术方案

### 4.1 目录结构

```
packages/icons/
├── scripts/
│   └── transform-icons.mjs    # 转换脚本
├── src/
│   ├── index.ts               # 入口文件
│   ├── types.ts               # 统一类型定义
│   └── icons/                 # CLI 生成 + 脚本转换后的图标
│       ├── Iconadd.tsx
│       ├── Iconclose.tsx
│       └── ...
├── vite.config.ts             # Vite 构建配置
└── package.json
```

### 4.2 统一类型定义

```typescript
// src/types.ts
import type { SVGProps, ForwardRefExoticComponent, RefAttributes } from 'react';

export interface IconProps extends SVGProps<SVGSVGElement> {
  /**
   * 图标尺寸
   * @default 24
   */
  size?: number | string;

  /**
   * 图标颜色
   * @default 'currentColor'
   */
  color?: string;
}

export type IconComponent = ForwardRefExoticComponent<IconProps & RefAttributes<SVGSVGElement>>;
```

### 4.3 Transform 脚本

```javascript
// scripts/transform-icons.mjs
import { readdir, readFile, writeFile } from 'fs/promises';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const ICONS_DIR = join(__dirname, '../src/icons');

// 保留原色的图标（static 结尾通常是彩色图标）
const PRESERVE_COLORS_PATTERN = /static\.tsx$/i;

function shouldPreserveColor(filename) {
  return PRESERVE_COLORS_PATTERN.test(filename);
}

async function transformIcon(filepath, filename) {
  let content = await readFile(filepath, 'utf-8');

  const preserveColor = shouldPreserveColor(filename);

  // 1. 提取组件名
  const componentNameMatch = content.match(/export const (Icon\w+)/);
  if (!componentNameMatch) return null;
  const componentName = componentNameMatch[1];

  // 2. 替换硬编码颜色（非 static 图标）
  if (!preserveColor) {
    content = content.replace(/fill="#[0-9a-fA-F]{3,6}"/g, 'fill={color}');
  }

  // 3. 替换 import
  content = content.replace(
    "import React from 'react'",
    `import { forwardRef } from 'react';
import type { IconProps } from '../types';`
  );

  // 4. 移除独立 interface 定义
  content = content.replace(
    /export interface \w+Props extends React\.SVGProps<SVGSVGElement> \{\}\n\n/,
    ''
  );

  // 5. 替换组件定义
  const oldDef = `export const ${componentName} = React.memo((props: ${componentName}Props) => {
  return (`;

  const newDef = `const ${componentName} = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = 24,
    color = 'currentColor',
    style,
    className,
    ...rest
  } = props;

  return (`;

  content = content.replace(oldDef, newDef);

  // 6. 替换 svg 标签属性
  content = content.replace(
    /<svg\s+xmlns="http:\/\/www\.w3\.org\/2000\/svg"\s+width="24"\s+height="24"/,
    '<svg\n      ref={ref}\n      xmlns="http://www.w3.org/2000/svg"\n      width={size}\n      height={size}'
  );

  // 7. 替换 props 透传
  content = content.replace(
    /fill="none"\s+\{\.\.\.props\}/,
    'fill="none"\n      style={style}\n      className={className}\n      {...rest}'
  );

  // 8. 修正闭包格式
  content = content.replace(/\)\n\}\)/, ');\n})');

  return content;
}

async function main() {
  console.log('🔄 Transforming icons...');

  const files = await readdir(ICONS_DIR);
  const iconFiles = files.filter((f) => f.endsWith('.tsx') && f.startsWith('Icon'));

  let transformed = 0;
  let skipped = 0;
  let errors = 0;

  for (const file of iconFiles) {
    const filepath = join(ICONS_DIR, file);

    try {
      const original = await readFile(filepath, 'utf-8');

      // 跳过已转换的文件
      if (original.includes("from '../types'")) {
        skipped++;
        continue;
      }

      const result = await transformIcon(filepath, file);
      if (result) {
        await writeFile(filepath, result);
        transformed++;
      } else {
        console.warn(`⚠️  Could not parse: ${file}`);
        errors++;
      }
    } catch (error) {
      console.error(`❌ Error transforming ${file}:`, error.message);
      errors++;
    }
  }

  console.log(`\n📊 Summary:`);
  console.log(`   ✅ Transformed: ${transformed}`);
  console.log(`   ⏭️  Skipped: ${skipped}`);
  console.log(`   ❌ Errors: ${errors}`);
}

main().catch(console.error);
```

### 4.4 Vite 构建配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';
import { readdirSync } from 'fs';

function getEntries() {
  const srcDir = resolve(__dirname, 'src');
  const iconsDir = resolve(srcDir, 'icons');

  const entries: Record<string, string> = {
    index: resolve(srcDir, 'index.ts'),
    types: resolve(srcDir, 'types.ts'),
  };

  // 添加所有图标入口
  const iconFiles = readdirSync(iconsDir).filter((f) => f.endsWith('.tsx'));
  iconFiles.forEach((file) => {
    const name = file.replace('.tsx', '');
    entries[`icons/${name}`] = resolve(iconsDir, file);
  });

  return entries;
}

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
      exclude: ['src/**/*.test.*'],
      outDir: 'es',
      afterBuild: async () => {
        const { cp } = await import('fs/promises');
        await cp('es', 'lib', { recursive: true });
      },
    }),
  ],
  build: {
    lib: {
      entry: getEntries(),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: [
        {
          format: 'es',
          dir: 'es',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
        {
          format: 'cjs',
          dir: 'lib',
          entryFileNames: '[name].js',
          preserveModules: true,
          preserveModulesRoot: 'src',
        },
      ],
    },
    sourcemap: true,
    minify: false,
  },
});
```

### 4.5 package.json 配置

```json
{
  "name": "@lynkit/icons",
  "version": "1.0.0",
  "type": "module",

  "main": "./lib/index.js",
  "module": "./es/index.js",
  "types": "./es/index.d.ts",

  "exports": {
    ".": {
      "types": "./es/index.d.ts",
      "import": "./es/index.js",
      "require": "./lib/index.js"
    },
    "./es/*": "./es/*",
    "./lib/*": "./lib/*"
  },

  "files": ["es", "lib"],
  "sideEffects": false,

  "scripts": {
    "generate": "figma-cli pull",
    "transform": "node scripts/transform-icons.mjs",
    "postgenerate": "pnpm transform",
    "build": "vite build",
    "dev": "vite build --watch"
  }
}
```

### 4.6 入口文件

```typescript
// src/index.ts
// 类型定义
export type { IconProps, IconComponent } from './types';

// 图标组件（由 CLI 生成，保持原有导出）
export * from './icons';
```

---

## 五、使用方式

### 5.1 基础使用

```tsx
import { Iconadd, Iconclose } from '@lynkit/icons';

function App() {
  return (
    <div>
      <Iconadd />
      <Iconclose size={20} color="red" />
    </div>
  );
}
```

### 5.2 CSS 颜色继承（推荐）

```tsx
// 图标颜色跟随父元素 color 属性
<button style={{ color: 'blue' }}>
  <Iconadd /> 添加
</button>

// 配合 Design Tokens
<span style={{ color: 'var(--lynkit-color-primary)' }}>
  <Iconcheckcircle />
</span>
```

### 5.3 路径导入（极致 Tree-shaking）

```tsx
import Iconadd from '@lynkit/icons/es/icons/Iconadd';
```

### 5.4 Ref 引用

```tsx
import { useRef } from 'react';
import { Iconadd } from '@lynkit/icons';

function App() {
  const iconRef = useRef<SVGSVGElement>(null);
  return <Iconadd ref={iconRef} />;
}
```

---

## 六、实施计划

### Phase 1：基础设施

1. 创建 `src/types.ts`
2. 创建 `scripts/transform-icons.mjs`
3. 配置 `vite.config.ts`
4. 更新 `package.json`

### Phase 2：执行转换

1. 运行 `pnpm transform` 转换所有图标
2. 验证转换结果
3. 修复转换脚本问题（如有）

### Phase 3：构建验证

1. 运行 `pnpm build`
2. 验证产物结构
3. 验证 Tree-shaking
4. 更新 README

---

## 七、验收标准

- [ ] Transform 脚本可正确转换所有图标
- [ ] 所有图标支持 `currentColor`（static 图标除外）
- [ ] `size` / `color` Props 生效
- [ ] `forwardRef` 支持 ref 转发
- [ ] Tree-shaking 验证通过
- [ ] 与 `@lynkit/ui` 主题切换联动
- [ ] 构建无报错
