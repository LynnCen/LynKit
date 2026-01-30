# Figma Icon CLI 优化需求

> 本文档面向 CLI 工具维护方，说明当前图标生成模板存在的问题及改进建议。

## 一、背景

当前 CLI 工具从 Figma 拉取图标并生成 React 组件，生成的组件存在以下限制：

- 颜色硬编码，无法适配主题切换
- 缺少 `size`/`color` 等常用 Props
- 不支持 `forwardRef`
- 类型定义冗余

这些问题导致生成的图标组件与现代 React 组件库规范不符，无法满足主题化、可配置化需求。

---

## 二、当前生成模板分析

### 2.1 当前模板结构

```tsx
import React from 'react'

export interface Icon{Name}Props extends React.SVGProps<SVGSVGElement> {}

/**
 * {icon_name}
 * @source figma
 */
export const Icon{Name} = React.memo((props: Icon{Name}Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      {...props}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="{path_data}"
        fill="#222529"
      />
    </svg>
  )
})

Icon{Name}.displayName = 'Icon{Name}'

export default Icon{Name}
```

### 2.2 存在的问题

| 问题          | 当前实现                     | 影响                                  |
| ------------- | ---------------------------- | ------------------------------------- |
| 颜色硬编码    | `fill="#222529"`             | 无法通过 CSS 继承颜色，不支持主题切换 |
| 尺寸固定      | `width="24" height="24"`     | 无法通过 `size` prop 控制尺寸         |
| 无 forwardRef | `React.memo((props) => ...)` | 无法获取 SVG DOM 引用                 |
| 类型冗余      | 每个组件独立 `interface`     | 1000+ 个重复定义                      |

---

## 三、改进建议

### 3.1 新模板结构

```tsx
import { forwardRef } from 'react';
import type { IconProps } from '../types';

/**
 * {icon_name}
 * @source figma
 */
const {Name} = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const {
    size = 24,
    color = 'currentColor',
    style,
    className,
    ...rest
  } = props;

  return (
    <svg
      ref={ref}
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      style={style}
      className={className}
      {...rest}
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="{path_data}"
        fill={color}
      />
    </svg>
  );
});

{Name}.displayName = '{Name}';

export default {Name};
```

### 3.2 核心改动点

#### 改动 1：颜色使用变量

```diff
- fill="#222529"
+ fill={color}
```

`color` 默认值为 `currentColor`，支持：

- CSS `color` 属性继承
- Design Tokens 变量
- 主题切换

#### 改动 2：尺寸使用变量

```diff
- width="24"
- height="24"
+ width={size}
+ height={size}
```

`size` 支持 `number` 或 `string` 类型。

#### 改动 3：添加 forwardRef

```diff
- export const Icon{Name} = React.memo((props: Icon{Name}Props) => {
+ const {Name} = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
    return (
-     <svg ...>
+     <svg ref={ref} ...>
```

#### 改动 4：统一类型定义

```diff
- export interface Icon{Name}Props extends React.SVGProps<SVGSVGElement> {}
+ import type { IconProps } from '../types';
```

所有图标组件使用统一的 `IconProps` 类型。

---

## 四、新增基础文件

CLI 需要同时生成以下基础文件：

### 4.1 types.ts

```typescript
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

### 4.2 index.ts（入口文件）

```typescript
// Auto-generated index file

// 类型定义
export type { IconProps, IconComponent } from './types';

// 图标组件
export { default as Iconadd } from './icons/Iconadd';
export { default as Iconclose } from './icons/Iconclose';
// ... 其他图标
```

---

## 五、命名规范建议（可选）

| 当前命名              | 建议命名            | 说明                |
| --------------------- | ------------------- | ------------------- |
| `Iconadd`             | `Add`               | 移除 `Icon` 前缀    |
| `Iconcheckcirclefill` | `CheckCircleFilled` | 驼峰命名 + 风格后缀 |
| `Icon1ststatic`       | `Medal1st`          | 避免数字开头        |

**风格后缀规范**：

- `Outlined` - 线框风格（默认）
- `Filled` - 填充风格
- `TwoTone` - 双色风格

---

## 六、兼容性考虑

为保证向后兼容，建议：

1. **CLI 新增配置项**：

   ```json
   {
     "template": "modern", // "legacy" | "modern"
     "naming": "camelCase" // "legacy" | "camelCase"
   }
   ```

2. **渐进式迁移**：
   - `template: "legacy"` 保持当前行为
   - `template: "modern"` 使用新模板

---

## 七、预期收益

| 指标         | 改进前                   | 改进后            |
| ------------ | ------------------------ | ----------------- |
| 主题支持     | ❌ 不支持                | ✅ currentColor   |
| 尺寸配置     | ❌ 需手动传 width/height | ✅ size prop      |
| Ref 支持     | ❌ 不支持                | ✅ forwardRef     |
| 类型复用     | ❌ 1000+ 独立 interface  | ✅ 统一 IconProps |
| Tree-shaking | ⚠️ 依赖打包配置          | ✅ 独立模块       |

---

## 八、联系方式

如有疑问，请联系：

- 需求方：@lynkit/ui 组件库团队
- 文档版本：v1.0
- 日期：2026-01-28
