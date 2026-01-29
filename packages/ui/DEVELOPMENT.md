# @lynkit/ui 开发指南

> 组件库开发规范与最佳实践

---

## 一、快速上手

### 1.1 使用方式

```typescript
// 方式1：统一导入（推荐）
import { Button, ConfigProvider } from '@lynkit/ui';
import '@lynkit/ui/styles.css';

// 方式2：按需导入
import Button from '@lynkit/ui/es/button';
import '@lynkit/ui/es/button/style/index.css';

// 主题切换
<ConfigProvider theme="dark">
  <Button type="primary">按钮</Button>
</ConfigProvider>
```

### 1.2 核心指标

| 指标       | 目标状态               |
| ---------- | ---------------------- |
| 样式导入   | 统一入口 + 按需可选    |
| 主题切换   | CSS Variables 动态切换 |
| TypeScript | 100% 类型覆盖          |
| 测试覆盖   | ≥80%                   |

---

## 二、目录结构

每个组件应遵循以下目录结构：

```
src/
└── ComponentName/
    ├── index.tsx           # 组件入口（导出）
    ├── ComponentName.tsx   # 组件实现（可选）
    ├── interface.ts        # 类型定义
    ├── style/
    │   └── index.less      # 组件样式
    ├── demo/
    │   └── basic.tsx       # 基础示例
    ├── __tests__/
    │   └── index.test.tsx  # 单元测试
    └── README.md           # 组件文档
```

---

## 三、组件实现规范

### 3.1 基本结构

```tsx
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { useConfig } from '../hooks';
import type { ComponentNameProps } from './interface';
import './style/index.less';

/**
 * ComponentName 组件描述
 */
const ComponentName = forwardRef<HTMLElement, ComponentNameProps>(
  ({ prop1, prop2, className, children, ...rest }, ref) => {
    // 1. 获取全局配置
    const { prefixCls: globalPrefixCls } = useConfig();
    const prefixCls = `${globalPrefixCls}-component-name`;

    // 2. 计算 className
    const classes = classNames(prefixCls, { [`${prefixCls}-variant`]: prop1 }, className);

    // 3. 渲染
    return (
      <div ref={ref} className={classes} {...rest}>
        {children}
      </div>
    );
  }
);

ComponentName.displayName = 'ComponentName';

export default ComponentName;
```

### 3.2 关键规则

| 规则               | 说明                              |
| ------------------ | --------------------------------- |
| 使用 `forwardRef`  | 所有组件都应支持 ref 转发         |
| 使用 `useConfig`   | 从 ConfigProvider 获取 prefixCls  |
| 设置 `displayName` | 便于调试和 DevTools 显示          |
| 扩展原生属性       | 使用 `...rest` 传递未声明的 props |
| 支持 `className`   | 允许用户自定义类名                |

---

## 四、类型定义规范

### 4.1 Props 定义

```typescript
// interface.ts
import type { HTMLAttributes, ReactNode } from 'react';

export interface ComponentNameProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onChange'> {
  /**
   * 组件变体
   * @default 'default'
   */
  variant?: 'default' | 'primary' | 'secondary';

  /**
   * 组件尺寸
   * @default 'middle'
   */
  size?: 'small' | 'middle' | 'large';

  /**
   * 是否禁用
   * @default false
   */
  disabled?: boolean;

  /**
   * 子元素
   */
  children?: ReactNode;

  /**
   * 值变化回调
   */
  onChange?: (value: string) => void;
}
```

### 4.2 命名规范

| 类型     | 命名规则                     | 示例                             |
| -------- | ---------------------------- | -------------------------------- |
| Props    | `{ComponentName}Props`       | `ButtonProps`                    |
| 事件回调 | `on{Event}`                  | `onChange`, `onClick`            |
| 布尔属性 | `is{State}` 或直接使用形容词 | `disabled`, `loading`            |
| 尺寸     | `size`                       | `'small' \| 'middle' \| 'large'` |
| 变体     | `type` 或 `variant`          | `'default' \| 'primary'`         |

---

## 五、样式规范

### 5.1 CSS 类名规范（BEM）

```less
.lyn-component-name {
  // 块（Block）

  &-header {
    // 元素（Element）
  }

  &--primary {
    // 修饰符（Modifier）
  }

  &-header--active {
    // 元素 + 修饰符
  }
}
```

### 5.2 使用 Design Tokens

所有样式值必须使用 CSS Variables：

```less
@import '../../styles/tokens.css';
@import '../../styles/variables.less';

.lyn-component-name {
  // ✅ 正确：使用 Token
  color: @text-color;
  padding: @spacing-md;
  border-radius: @border-radius-base;

  // ❌ 错误：硬编码值
  // color: #333;
  // padding: 16px;
}
```

### 5.3 Design Tokens 定义

```css
/* tokens.css */
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

### 5.4 主题适配

不需要为暗色主题单独写样式，CSS Variables 会自动切换：

```less
.lyn-component-name {
  background: @bg-color; // 亮色: #fff, 暗色: #141414
  color: @text-color; // 自动适配
}
```

---

## 六、测试规范

### 6.1 测试文件结构

```tsx
// __tests__/index.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import ComponentName from '../index';

describe('ComponentName', () => {
  // 基础渲染测试
  it('renders correctly', () => {
    render(<ComponentName>Content</ComponentName>);
    expect(screen.getByText('Content')).toBeInTheDocument();
  });

  // Props 测试
  it('applies variant class', () => {
    const { container } = render(<ComponentName variant="primary" />);
    expect(container.firstChild).toHaveClass('lyn-component-name-primary');
  });

  // 交互测试
  it('handles click event', () => {
    const handleClick = jest.fn();
    render(<ComponentName onClick={handleClick}>Click</ComponentName>);
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).toHaveBeenCalled();
  });

  // 禁用状态测试
  it('prevents click when disabled', () => {
    const handleClick = jest.fn();
    render(
      <ComponentName disabled onClick={handleClick}>
        Click
      </ComponentName>
    );
    fireEvent.click(screen.getByText('Click'));
    expect(handleClick).not.toHaveBeenCalled();
  });
});
```

### 6.2 测试覆盖要求

| 测试类型   | 覆盖内容             |
| ---------- | -------------------- |
| 渲染测试   | 组件能否正常渲染     |
| Props 测试 | 各个 prop 是否生效   |
| 交互测试   | 用户操作是否正确响应 |
| 状态测试   | 各种状态下的表现     |
| 边界测试   | 空值、极端值处理     |

---

## 七、构建输出

### 7.1 输出结构

```
es/                      # ES Modules（主要格式）
├── index.js             # 统一入口
├── index.d.ts           # 类型入口
├── style.css            # 统一样式
├── button/
│   ├── index.js
│   ├── index.d.ts
│   └── style/
│       └── index.css
└── input/
    └── ...

lib/                     # CommonJS（兼容格式）
├── index.js
├── index.d.ts
└── ...
```

### 7.2 格式说明

| 目录   | 格式       | 用途                                            |
| ------ | ---------- | ----------------------------------------------- |
| `es/`  | ES Modules | 现代打包工具（Vite/Webpack），支持 Tree-shaking |
| `lib/` | CommonJS   | 兼容旧项目、Node.js 环境                        |

---

## 八、开发 Checklist

新组件开发前，确认以下事项：

- [ ] 目录结构符合规范
- [ ] 使用 `forwardRef` 包装
- [ ] 使用 `useConfig` 获取配置
- [ ] 设置 `displayName`
- [ ] Props 类型完整定义
- [ ] 样式使用 Design Tokens
- [ ] 支持 `className` 自定义
- [ ] 编写单元测试
- [ ] 编写 README 文档
- [ ] 在 `src/index.ts` 导出

---

## 九、参考

- [Ant Design 5.x](https://ant.design/) - 主题系统设计
- [Element Plus](https://element-plus.org/) - CSS Variables 实践
- [Radix UI](https://www.radix-ui.com/) - 无障碍设计

---

_文档版本：v1.0_  
_更新日期：2026-01-29_
