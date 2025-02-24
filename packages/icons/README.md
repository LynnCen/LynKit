# @lynkit/icons

React 图标组件库

## 安装

```bash
npm install @lynkit/icons
# or
yarn add @lynkit/icons
# or
pnpm add @lynkit/icons
```

## 使用

```tsx
import { IconHome } from '@lynkit/icons';

function App() {
  return (
    <IconHome 
      size={24} 
      color="#333"
    />
  );
}
```

## 属性

| 属性 | 类型 | 默认值 | 说明 |
|------|------|--------|------|
| size | number \| string | '1em' | 图标大小 |
| color | string | 'currentColor' | 图标颜色 |
| className | string | - | 自定义类名 |
| style | CSSProperties | - | 自定义样式 |
