---
sidebar_position: 1
---

# 介绍

LynKit 是一个轻量级的 React 组件库，提供了常用的 UI 组件、Hooks、图标等。

## 特性

- 🎨 精美的设计
- 📦 开箱即用
- 🛠️ 高度可定制
- 📝 详细的文档
- 🔧 TypeScript 支持

## 安装

```bash
npm install @lynkit/ui @lynkit/hooks @lynkit/icons
```

## 使用

```jsx
import { Button } from '@lynkit/ui';
import { useSetState } from '@lynkit/hooks';
import { IconHome } from '@lynkit/icons';

function App() {
  return (
    <Button type="primary">
      <IconHome /> 首页
    </Button>
  );
}
``` 