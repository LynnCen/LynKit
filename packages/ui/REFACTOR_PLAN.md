# @lynkit/ui 组件库改造计划

> 专注于组件库基础建设，打造可持续、高质量的开发体系

---

## 一、改造目标

将 @lynkit/ui 从当前状态改造为一个**现代化、工程化、易用**的组件库。

### 1.1 用户体验目标

**改造前**：

```typescript
import { Button } from '@lynkit/ui';
import '@lynkit/ui/Button/style/index.less'; // ❌ 手动导入样式
// ❌ 需要配置 Less loader
// ❌ 主题切换困难
```

**改造后**：

```typescript
// 方式1：统一导入（推荐）
import { Button, ConfigProvider } from '@lynkit/ui';
import '@lynkit/ui/styles.css';  // ✅ 一次导入所有样式

// 方式2：按需导入（可选）
import Button from '@lynkit/ui/es/button';
import '@lynkit/ui/es/button/style/index.css';

// ✅ 开箱即用的主题切换
<ConfigProvider theme="dark">
  <Button type="primary">按钮</Button>
</ConfigProvider>
```

### 1.2 核心指标

| 指标       | 当前状态     | 目标状态               |
| ---------- | ------------ | ---------------------- |
| 样式导入   | 手动分散导入 | 统一入口 + 按需可选    |
| 主题切换   | 不支持       | CSS Variables 动态切换 |
| TypeScript | 部分支持     | 100% 类型覆盖          |
| 测试覆盖   | 低           | ≥80%                   |
| 文档       | 不完整       | 完整 API 文档 + 示例   |

---

## 二、改造内容

### 2.1 构建系统（统一 Vite 构建）

**目标**：JS/TS/CSS 一次性打包，输出标准格式，用户零配置使用

#### 输出结构（参考 Ant Design）

```
src/                          输出
├── index.ts            →     es/                      # ES Modules（主要格式）
├── components/               ├── index.js             # 统一入口
│   ├── Button/               ├── index.d.ts           # 类型入口
│   │   ├── index.tsx         ├── style.css            # 统一样式
│   │   └── style.less        ├── button/
│   └── Input/                │   ├── index.js
│       ├── index.tsx         │   ├── index.d.ts
│       └── style.less        │   └── style/
└── styles/                   │       └── index.css
    └── tokens.less           └── input/
                                  └── ...

                              lib/                     # CommonJS（兼容格式）
                              ├── index.js
                              ├── index.d.ts
                              ├── button/
                              │   └── ...
                              └── input/
                                  └── ...
```

#### 格式说明

| 目录   | 格式       | 用途                                            |
| ------ | ---------- | ----------------------------------------------- |
| `es/`  | ES Modules | 现代打包工具（Vite/Webpack），支持 Tree-shaking |
| `lib/` | CommonJS   | 兼容旧项目、Node.js 环境                        |

#### package.json 配置

```json
{
  "name": "@lynkit/ui",
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
    "./lib/*": "./lib/*",
    "./styles.css": "./es/style.css"
  },

  "files": ["es", "lib"],
  "sideEffects": ["**/*.css"]
}
```

#### 用户使用方式

```typescript
// 方式1：统一导入（推荐，依赖 Tree-shaking）
import { Button, Input } from '@lynkit/ui';
import '@lynkit/ui/styles.css';

// 方式2：按需导入（明确路径）
import Button from '@lynkit/ui/es/button';
import '@lynkit/ui/es/button/style/index.css';

// 方式3：配合 babel-plugin-import 自动按需
import { Button } from '@lynkit/ui'; // 插件自动转换为按需导入
```

#### 关键构建配置

```typescript
// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dts from 'vite-plugin-dts';
import { resolve } from 'path';

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ['src/**/*'],
      outDir: ['es', 'lib'],
    }),
  ],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      external: ['react', 'react-dom', 'react/jsx-runtime'],
      output: [
        {
          format: 'es',
          dir: 'es',
          preserveModules: true, // 保留模块结构
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
        {
          format: 'cjs',
          dir: 'lib',
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
        },
      ],
    },
    cssCodeSplit: true, // CSS 按组件拆分
  },
});
```

---

### 2.2 样式系统（Design Tokens + CSS Variables）

**目标**：支持主题定制和运行时切换

```css
/* tokens.css - Design Tokens 定义 */
:root {
  /* 基础色板 */
  --lynkit-blue-500: #1890ff;
  --lynkit-blue-600: #096dd9;

  /* 语义化颜色 */
  --lynkit-color-primary: var(--lynkit-blue-500);
  --lynkit-color-primary-hover: var(--lynkit-blue-600);
  --lynkit-color-bg: #ffffff;
  --lynkit-color-text: rgba(0, 0, 0, 0.85);

  /* 间距 */
  --lynkit-spacing-xs: 4px;
  --lynkit-spacing-sm: 8px;
  --lynkit-spacing-md: 16px;

  /* 圆角 */
  --lynkit-radius-sm: 4px;
  --lynkit-radius-md: 8px;
}

/* 暗色主题 */
[data-theme='dark'] {
  --lynkit-color-primary: #177ddc;
  --lynkit-color-bg: #141414;
  --lynkit-color-text: rgba(255, 255, 255, 0.85);
}
```

**组件样式规范**：

```less
// Button/style.less - 100% 使用 Tokens
.lynkit-button {
  background: var(--lynkit-color-primary);
  color: var(--lynkit-color-text-inverse);
  padding: var(--lynkit-spacing-xs) var(--lynkit-spacing-md);
  border-radius: var(--lynkit-radius-sm);

  &:hover {
    background: var(--lynkit-color-primary-hover);
  }
}
```

---

### 2.3 配置系统（ConfigProvider）

**目标**：提供全局配置能力

```tsx
// ConfigProvider 实现
interface ConfigProviderProps {
  theme?: 'light' | 'dark';
  locale?: Locale;
  prefixCls?: string;
  children: React.ReactNode;
}

export function ConfigProvider({
  theme = 'light',
  locale,
  prefixCls = 'lynkit',
  children,
}: ConfigProviderProps) {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return <ConfigContext.Provider value={{ locale, prefixCls }}>{children}</ConfigContext.Provider>;
}
```

---

### 2.4 组件开发规范

**目录结构**：

```
src/
├── components/
│   └── Button/
│       ├── index.tsx        # 组件入口
│       ├── Button.tsx       # 组件实现
│       ├── style.less       # 样式
│       ├── types.ts         # 类型定义
│       └── __tests__/       # 测试
│           └── Button.test.tsx
├── hooks/                   # 公共 Hooks
├── utils/                   # 工具函数
├── styles/                  # 全局样式
│   └── tokens.less          # Design Tokens
└── index.ts                 # 统一导出
```

**组件模板**：

```tsx
// Button/Button.tsx
import React, { forwardRef } from 'react';
import clsx from 'clsx';
import { useConfig } from '../../hooks/useConfig';
import type { ButtonProps } from './types';
import './style.less';

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ type = 'default', size = 'medium', disabled, children, className, ...rest }, ref) => {
    const { prefixCls } = useConfig();
    const cls = `${prefixCls}-button`;

    return (
      <button
        ref={ref}
        className={clsx(cls, `${cls}--${type}`, `${cls}--${size}`, className)}
        disabled={disabled}
        {...rest}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';
```

---

### 2.5 质量保障

**测试要求**：

- 单元测试覆盖率 ≥80%
- 关键组件 100% 覆盖
- 无障碍测试（jest-axe）

**测试示例**：

```tsx
// Button/__tests__/Button.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import { axe } from 'jest-axe';
import { Button } from '../Button';

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Click me</Button>);
    expect(screen.getByRole('button')).toHaveTextContent('Click me');
  });

  it('handles click', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>Click</Button>);
    fireEvent.click(screen.getByRole('button'));
    expect(onClick).toHaveBeenCalled();
  });

  it('has no accessibility violations', async () => {
    const { container } = render(<Button>Accessible</Button>);
    expect(await axe(container)).toHaveNoViolations();
  });
});
```

---

## 三、实施计划

### Phase 1：构建系统（第 1-2 天）

- [ ] 配置 Vite 构建，输出 `es/` + `lib/` 双格式
- [ ] 配置 `vite-plugin-dts` 生成类型声明
- [ ] 配置 CSS 按组件拆分
- [ ] 更新 `package.json` 的 exports 字段
- [ ] 验证构建产物可正常使用

### Phase 2：样式系统（第 3-4 天）

- [ ] 建立 Design Tokens（CSS Variables）
- [ ] 实现亮色/暗色主题切换
- [ ] 迁移现有组件样式到 Tokens
- [ ] 实现 ConfigProvider

### Phase 3：组件规范化（第 5-7 天）

- [ ] 制定组件开发规范文档
- [ ] 改造示例组件（Button、Input）
- [ ] 统一组件目录结构
- [ ] 完善 TypeScript 类型

### Phase 4：质量保障（第 8-10 天）

- [ ] 配置 Jest + Testing Library
- [ ] 编写核心组件测试用例
- [ ] 配置 ESLint + Prettier
- [ ] 编写使用文档

---

## 四、产出物

### 4.1 构建产出

| 目录/文件         | 格式       | 说明                            |
| ----------------- | ---------- | ------------------------------- |
| `es/`             | ES Modules | 现代项目使用，支持 Tree-shaking |
| `es/index.js`     | ESM        | 统一入口                        |
| `es/index.d.ts`   | TypeScript | 类型声明                        |
| `es/style.css`    | CSS        | 统一样式                        |
| `es/[component]/` | ESM        | 各组件独立目录，支持按需导入    |
| `lib/`            | CommonJS   | 兼容旧项目                      |

### 4.2 文档产出

| 产出         | 说明                 |
| ------------ | -------------------- |
| 组件开发规范 | 后续组件开发参照模板 |
| API 文档     | 各组件 Props 说明    |
| 使用指南     | 安装、配置、主题定制 |

### 4.3 质量产出

| 产出     | 说明                 |
| -------- | -------------------- |
| 单元测试 | 覆盖率 ≥80%          |
| 类型定义 | 100% TypeScript 覆盖 |

---

## 五、不在范围内

以下内容**不属于**本次改造范围：

- ❌ 开发新组件
- ❌ 移动端适配
- ❌ 响应式设计
- ❌ 业务定制功能

本次改造专注于**基础设施建设**，为后续组件开发提供坚实基础。

---

## 六、参考

- [Ant Design 5.x](https://ant.design/) - 主题系统设计
- [Element Plus](https://element-plus.org/) - CSS Variables 实践
- [Radix UI](https://www.radix-ui.com/) - 无障碍设计

---

_文档版本：v1.0_  
_创建日期：2026-01-28_
