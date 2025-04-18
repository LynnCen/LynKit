# @lynkit/ui

React UI 组件库,提供了一套高质量的基础 UI 组件。

## 特性

- 🌈 提供完整的类型定义文件
- 📦 开箱即用的高质量 React 组件
- 🛡 使用 TypeScript 开发，提供完整的类型定义文件
- ⚙️ 全链路开发和设计工具体系
- 🎨 使用 Less 作为样式语言，可定制主题

## 安装

```bash
npm install @lynkit/ui
# or
yarn add @lynkit/ui
# or
pnpm add @lynkit/ui
```

## 使用

```tsx
import { Button } from '@lynkit/ui';

function App() {
  return <Button>点击我</Button>;
}
```

## 本地开发

### 环境准备

确保您的开发环境中已安装：
- Node.js (>= 16)
- pnpm (>= 7)

### 安装依赖

```bash
pnpm install
```

### 启动开发服务

```bash
pnpm dev
```

### 构建

```bash
pnpm build
```

## 主题定制

通过 Less 变量覆盖的方式来定制主题：

```less
@primary-color: #1890ff; // 主题色
@link-color: #1890ff; // 链接色
@success-color: #52c41a; // 成功色
@warning-color: #faad14; // 警告色
@error-color: #f5222d; // 错误色
```

## 浏览器支持

- 现代浏览器和 IE11
- 支持服务端渲染
- 支持 React 18+

## 贡献指南

我们欢迎任何形式的贡献，包括但不限于：

- 提交问题或建议
- 提交代码改进
- 完善文档内容

请参考我们的[贡献指南](./CONTRIBUTING.md)了解更多信息。

## 版本发布历史

详见 [Changelog](./CHANGELOG.md)

## 许可证

[MIT](./LICENSE)