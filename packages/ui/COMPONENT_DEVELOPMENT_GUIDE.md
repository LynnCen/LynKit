# @lynkit/ui 组件开发规范

> 本文档定义了组件开发的标准和最佳实践，确保组件库的一致性和可维护性。

---

## 一、目录结构

每个组件应遵循以下目录结构：

```
src/
└── ComponentName/
    ├── index.tsx           # 组件入口（导出）
    ├── ComponentName.tsx   # 组件实现（可选，简单组件可合并到 index.tsx）
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

## 二、组件实现规范

### 2.1 基本结构

````tsx
import React, { forwardRef } from 'react';
import classNames from 'classnames';
import { useConfig } from '../hooks';
import type { ComponentNameProps } from './interface';
import './style/index.less';

/**
 * ComponentName 组件描述
 *
 * @example
 * ```tsx
 * import { ComponentName } from '@lynkit/ui';
 *
 * <ComponentName prop="value" />
 * ```
 */
const ComponentName = forwardRef<HTMLElement, ComponentNameProps>(
  ({ prop1, prop2, className, children, ...rest }, ref) => {
    // 1. 获取全局配置
    const { prefixCls: globalPrefixCls } = useConfig();
    const prefixCls = `${globalPrefixCls}-component-name`;

    // 2. 计算 className
    const classes = classNames(
      prefixCls,
      {
        [`${prefixCls}-variant`]: prop1,
      },
      className
    );

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
````

### 2.2 关键规则

| 规则               | 说明                              |
| ------------------ | --------------------------------- |
| 使用 `forwardRef`  | 所有组件都应支持 ref 转发         |
| 使用 `useConfig`   | 从 ConfigProvider 获取 prefixCls  |
| 设置 `displayName` | 便于调试和 DevTools 显示          |
| 扩展原生属性       | 使用 `...rest` 传递未声明的 props |
| 支持 `className`   | 允许用户自定义类名                |

---

## 三、类型定义规范

### 3.1 Props 定义

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

### 3.2 命名规范

| 类型     | 命名规则                     | 示例                             |
| -------- | ---------------------------- | -------------------------------- |
| Props    | `{ComponentName}Props`       | `ButtonProps`                    |
| 事件回调 | `on{Event}`                  | `onChange`, `onClick`            |
| 布尔属性 | `is{State}` 或直接使用形容词 | `disabled`, `loading`            |
| 尺寸     | `size`                       | `'small' \| 'middle' \| 'large'` |
| 变体     | `type` 或 `variant`          | `'default' \| 'primary'`         |

---

## 四、样式规范

### 4.1 CSS 类名规范

使用 BEM 命名约定：

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

### 4.2 使用 Design Tokens

所有样式值必须使用 CSS Variables：

```less
@import '../../styles/tokens.css';
@import '../../styles/variables.less';

.lyn-component-name {
  // ✅ 正确：使用 Token
  color: @text-color;
  padding: @spacing-md;
  border-radius: @border-radius-base;
  transition: all @animation-duration-base @animation-timing-function;

  // ❌ 错误：硬编码值
  // color: #333;
  // padding: 16px;
}
```

### 4.3 主题适配

不需要为暗色主题单独写样式，CSS Variables 会自动切换：

```less
.lyn-component-name {
  background: @bg-color; // 亮色: #fff, 暗色: #141414
  color: @text-color; // 亮色: rgba(0,0,0,0.85), 暗色: rgba(255,255,255,0.85)
  border-color: @border-color; // 自动适配
}
```

---

## 五、测试规范

### 5.1 测试文件结构

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

### 5.2 测试覆盖要求

| 测试类型   | 覆盖内容             |
| ---------- | -------------------- |
| 渲染测试   | 组件能否正常渲染     |
| Props 测试 | 各个 prop 是否生效   |
| 交互测试   | 用户操作是否正确响应 |
| 状态测试   | 各种状态下的表现     |
| 边界测试   | 空值、极端值处理     |

---

## 六、文档规范

### 6.1 README 结构

```markdown
# ComponentName 组件名称

组件的简短描述。

## 何时使用

- 使用场景 1
- 使用场景 2

## 代码演示

### 基础用法

描述基础用法...

### 不同尺寸

描述尺寸变体...

## API

| 参数     | 说明     | 类型                             | 默认值      |
| -------- | -------- | -------------------------------- | ----------- |
| variant  | 变体类型 | `'default' \| 'primary'`         | `'default'` |
| size     | 尺寸     | `'small' \| 'middle' \| 'large'` | `'middle'`  |
| disabled | 是否禁用 | `boolean`                        | `false`     |
```

---

## 七、Checklist

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

_文档版本：v1.0_  
_创建日期：2026-01-28_
