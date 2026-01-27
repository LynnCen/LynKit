---
sidebar_position: 1
---

# LynKit 介绍

LynKit 是一个现代化的 React 组件库，专为构建优雅、高效的用户界面而设计。它提供了丰富的 UI 组件、实用 Hooks、API 工具函数和图标系统，帮助开发者快速构建专业级应用。

## 特性

- 🎨 **精美的设计** - 遵循现代设计理念，组件美观且易用
- 📦 **开箱即用** - 无需复杂配置，安装即可使用
- 🛠️ **高度可定制** - 支持主题定制、样式覆盖和功能扩展
- 📝 **详细的文档** - 提供完整的文档和示例代码
- 🔧 **TypeScript 支持** - 完整的类型定义，提供优秀的开发体验
- 🧩 **模块化结构** - 可按需引入，降低应用体积
- 🔄 **持续更新** - 定期维护和更新，确保兼容性和安全性

## 技术栈

LynKit 基于以下技术构建：

- **React** - 使用最新的 React 特性，包括 Hooks、Context 等
- **TypeScript** - 提供完整的类型定义，增强代码质量和开发体验
- **CSS-in-JS** - 使用现代 CSS 解决方案，提供灵活的样式定制
- **Jest & Testing Library** - 完善的测试覆盖，确保组件质量
- **Storybook** - 组件开发和文档工具，提供交互式示例

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
    loading: false
  });

  const handleClick = () => {
    setState({ loading: true });
    
    // 模拟异步操作
    setTimeout(() => {
      setState({
        count: state.count + 1,
        loading: false
      });
    }, 1000);
  };

  return (
    <div>
      <h1>计数器: {state.count}</h1>
      <Button 
        type="primary" 
        loading={state.loading}
        onClick={handleClick}
      >
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