# @lynkit/icons

React 图标组件库，提供 1000+ 个高质量图标。

## 特性

- 🎨 **currentColor** - 支持 CSS 颜色继承
- 📐 **size/color Props** - 灵活配置尺寸和颜色
- 🔗 **forwardRef** - 支持 ref 转发
- 🌲 **Tree-shaking** - 按需加载，极致优化
- 📦 **双格式输出** - ES Modules + CommonJS

## 安装

```bash
npm install @lynkit/icons
# or
yarn add @lynkit/icons
# or
pnpm add @lynkit/icons
```

## 使用

### 基础使用

```tsx
import { Iconadd, Iconclose, Iconcheckcircle } from '@lynkit/icons';

function App() {
  return (
    <div>
      <Iconadd />
      <Iconclose size={20} />
      <Iconcheckcircle color="green" />
    </div>
  );
}
```

### CSS 颜色继承

图标默认使用 `currentColor`，会自动继承父元素的 `color` 属性：

```tsx
// 图标颜色跟随文字颜色
<button style={{ color: 'blue' }}>
  <Iconadd /> 添加
</button>

// 配合 CSS 变量
<span style={{ color: 'var(--primary-color)' }}>
  <Iconcheckcircle />
</span>
```

### 路径导入（极致 Tree-shaking）

```tsx
// 只打包需要的图标
import Iconadd from '@lynkit/icons/es/icons/Iconadd';
```

### Ref 引用

```tsx
import { useRef } from 'react';
import { Iconadd } from '@lynkit/icons';

function App() {
  const iconRef = useRef<SVGSVGElement>(null);
  return <Iconadd ref={iconRef} />;
}
```

## API

### IconProps

| 属性      | 类型               | 默认值           | 说明       |
| --------- | ------------------ | ---------------- | ---------- |
| size      | `number \| string` | `24`             | 图标尺寸   |
| color     | `string`           | `'currentColor'` | 图标颜色   |
| className | `string`           | -                | 自定义类名 |
| style     | `CSSProperties`    | -                | 自定义样式 |

继承所有 `SVGProps<SVGSVGElement>` 属性。

## 开发

```bash
# 转换图标（CLI 拉取后执行）
pnpm transform

# 构建
pnpm build

# 开发模式
pnpm dev
```

## 许可证

[MIT](./LICENSE)
