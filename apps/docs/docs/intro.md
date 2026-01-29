---
sidebar_position: 1
---

# LynKit 介绍

LynKit 是一个现代化的 React 组件库，专为构建优雅、高效的用户界面而设计。

## 特性

| 特性          | 说明                               |
| ------------- | ---------------------------------- |
| 🎨 精美的设计 | 遵循现代设计理念，组件美观且易用   |
| 📦 开箱即用   | 无需复杂配置，安装即可使用         |
| 🛠️ 高度可定制 | 支持主题定制、样式覆盖和功能扩展   |
| 🔧 TypeScript | 完整的类型定义，提供优秀的开发体验 |
| 🧩 模块化     | 可按需引入，降低应用体积           |

## 包一览

| 包                             | 说明               |
| ------------------------------ | ------------------ |
| [@lynkit/ui](/docs/components) | UI 组件库          |
| [@lynkit/hooks](/docs/hooks)   | React Hooks 工具库 |
| [@lynkit/api](/docs/api)       | 工具函数库         |
| [@lynkit/icons](/docs/icons)   | 图标组件库         |

## 安装

```bash
# 使用 npm
npm install @lynkit/ui @lynkit/hooks @lynkit/icons @lynkit/api

# 使用 yarn
yarn add @lynkit/ui @lynkit/hooks @lynkit/icons @lynkit/api

# 使用 pnpm
pnpm add @lynkit/ui @lynkit/hooks @lynkit/icons @lynkit/api
```

你也可以单独安装需要的包：

```bash
npm install @lynkit/ui  # 仅安装UI组件
```

## 快速上手

### 基础示例

```jsx
import { Button } from '@lynkit/ui';
import { useSetState } from '@lynkit/hooks';
import { IconHome } from '@lynkit/icons';

function App() {
  const [state, setState] = useSetState({
    count: 0,
    loading: false,
  });

  const handleClick = () => {
    setState({ loading: true });

    // 模拟异步操作
    setTimeout(() => {
      setState({
        count: state.count + 1,
        loading: false,
      });
    }, 1000);
  };

  return (
    <div>
      <h1>计数器: {state.count}</h1>
      <Button type="primary" loading={state.loading} onClick={handleClick}>
        <IconHome /> 增加计数
      </Button>
    </div>
  );
}
```

### 模块化使用

LynKit 采用模块化设计，可以只引入所需的组件：

```jsx
// 仅导入所需的组件
import { Button, Input, Modal } from '@lynkit/ui';
import { useSetState, useInterval } from '@lynkit/hooks';
import { debounce } from '@lynkit/api';
```

## 版本和兼容性

LynKit 要求 React 16.8.0 或更高版本，以支持 React Hooks 功能。

当前版本：

- @lynkit/ui: v1.0.0
- @lynkit/hooks: v1.0.0
- @lynkit/icons: v1.0.0
- @lynkit/api: v1.0.0

## 浏览器支持

LynKit 支持所有现代浏览器，包括：

- Edge >= 91
- Firefox >= 78
- Chrome >= 90
- Safari >= 14
- Opera >= 76
- iOS >= 14.4

## 贡献指南

我们欢迎社区贡献！如果你想为 LynKit 贡献代码，请查看我们的 [贡献指南](https://github.com/LynnCen/LynKit/blob/main/CONTRIBUTING.md)。

## 许可证

LynKit 使用 [MIT 许可证](https://github.com/LynnCen/LynKit/blob/main/LICENSE)。
